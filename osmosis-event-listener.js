import { addVotingPower } from "./rpc-interaction/rpc-caller.js";
import { subtractVotingPower } from "./rpc-interaction/rpc-caller.js";
import WebSocket from "ws";

export function osmosisEventHandler(event) {
  const data = event.data
  console.log(`[message] 서버로부터 전송받은 데이터: ${data}`);
  if (!data.result) return

  const querystring = data.result.query;
  console.log(`[message] querystring: ${querystring}`);

  let conversion_obj = {
    account_address: null,
    amount: null,
  };

  // token -> coin 으로 변환하는 경우
  // token 의 보유량이 줄어드는 것을 compensate 해주기 위함
  if (querystring.startsWith("lock_tokens")) {
    const account_address = data["result"]["events"]["lock_tokens.owner"];
    const amount = data["result"]["events"]["lock_tokens.amount"];
    conversion_obj = {
      account_address: account_address,
      amount: amount,
    };

    // addVotingPower(
    //   conversion_obj["account_address"],
    //   conversion_obj["token_address"],
    //   conversion_obj["amount"]
    // );
    console.log('>>>> [OSMOSIS] token converted to coin \n', conversion_obj);

  }

  // coin -> token으로 변환하는 경우
  // token 의 보유량이 줄어드는 것 보상해준 것을 되돌리기 위함
  else if (querystring.startsWith("begin_unlock")) {
    const account_address = data["result"]["events"]["begin_unlock.owner"];
    const amount = data["result"]["events"]["begin_unlock.amount"];
    conversion_obj = {
      account_address: account_address,
      amount: amount,
    };
    // subtractVotingPower(
    //   conversion_obj["account_address"],
    //   conversion_obj["token_address"],
    //   conversion_obj["amount"] 
    // );
    console.log('>>>> [OSMOSIS] coin converted to token \n', conversion_obj);

  }
}

export function osmosisEventListener() {
  const ws = new WebSocket("wss://rpc-test.osmosis.zone/websocket");
  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        method: "subscribe",
        id: 1,
        params: ["lock_tokens.amount>0"]
      })
    );
    ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        method: "subscribe",
        id: 2,
        params: ["begin_unlock.amount>0"]
      })
    );
  }
  
  ws.onmessage = osmosisEventHandler
  ws.onerror = function (error) {
    console.log(`${error}`);
  };
  ws.onclose = function (event) {
    if (event.wasClean) {
      console.log(`[close] 커넥션이 정상적으로 종료되었습니다(code=${event.code} reason=${event.reason})`);
    } else {
      // 예시: 프로세스가 죽거나 네트워크에 장애가 있는 경우
      // event.code가 1006이 됩니다.
      console.log('[close] 커넥션이 죽었습니다.');
    }
  }
  return ws;
}
