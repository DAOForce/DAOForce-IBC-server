import { addVotingPower } from "./rpc-interaction/rpc-caller.js";
import { subtractVotingPower } from "./rpc-interaction/rpc-caller.js";
import WebSocket from "ws";

export function conversionEventHandler(data) {
  console.log("%s", data);

  const querystring = data.result.query;

  let conversion_obj = {
    account_address: null,
    token_address: null,
    amount: null,
  };
  // token -> coin 으로 변환하는 경우
  // token 의 보유량이 줄어드는 것을 compensate 해주기 위함
  if (querystring.startsWith("convert_erc20")) {
    const account_address = data["result"]["events"]["convert_erc20.sender"];
    const token_address = data["result"]["events"]["convert_erc20.erc20_token"];
    const amount = data["result"]["events"]["convert_erc20.amount"];
    conversion_obj = {
      account_address: account_address,
      token_address: token_address,
      amount: amount,
    };
    console.log('[EVMOS] token converted to coin >>>>');
    console.log(conversion_obj);

    // addVotingPower(
    //   conversion_obj["account_address"],
    //   conversion_obj["token_address"],
    //   conversion_obj["amount"]
    // );
  }
  // coin -> token으로 변환하는 경우
  // token 의 보유량이 줄어드는 것 보상해준 것을 되돌리기 위함
  else if (querystring.startsWith("convert_coin")) {
    const account_address = data["result"]["events"]["convert_coin.receiver"];
    const token_address = data["result"]["events"]["convert_coin.erc20_token"];
    const amount = data["result"]["events"]["convert_coin.amount"];
    conversion_obj = {
      account_address: account_address,
      token_address: token_address,
      amount: amount,
    };
    console.log('[EVMOS] coin converted to token >>>>');
    console.log(conversion_obj);
    // subtractVotingPower(
    //   conversion_obj["account_address"],
    //   conversion_obj["token_address"],
    //   conversion_obj["amount"]
    // );
  }
}

export function conversionEventListener() {
  const ws = new WebSocket("wss://tendermint.bd.evmos.org:26657/websocket");
  ws.on("open", function () {
    ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        method: "subscribe",
        id: "0",
        params: { query: "convert_erc20.amount>0" },
      })
    );
    ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        method: "subscribe",
        id: "0",
        params: { query: "convert_coin.amount>0" },
      })
    );
  });
  ws.on("conversionEventHandler", conversionEventHandler);
  return ws;
}
