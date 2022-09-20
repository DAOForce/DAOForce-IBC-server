import WebSocket from 'ws';
import express from 'express';
import {example_convert_coin, example_convert_erc20} from './examples.js';
import { addVotingPower } from './rpc-interaction/rpc-caller.js';
const app = express();
const port = 3000;

function conversionListener(data) {
  console.log('%s', data);
  
  const querystring = data.result.query;

  let conversion_obj = {
    account_address: null,
    token_address: null,
    amount: null
  };
  if(querystring.startsWith('convert_coin')) {
    const account_address = data['result']['events']['convert_coin.receiver'];
    const token_address = data['result']['events']['convert_coin.erc20_token'];
    const amount = data['result']['events']['convert_coin.amount'];
    conversion_obj = {
      account_address: account_address,
      token_address: token_address,
      amount: amount
    }
    subtractVotingPower(conversion_obj['account_address'], conversion_obj['token_address'], conversion_obj['amount']);
  }
  else if(querystring.startsWith('convert_erc20')) {
    const account_address = data['result']['events']['convert_erc20.sender'];
    const token_address = data['result']['events']['convert_erc20.erc20_token'];
    const amount = data['result']['events']['convert_erc20.amount'];
    conversion_obj = {
      account_address: account_address,
      token_address: token_address,
      amount: amount
    }
    addVotingPower(conversion_obj['account_address'], conversion_obj['token_address'], conversion_obj['amount']);
  }
}

console.log('here')
if (typeof ws === 'undefined') {
  const ws = new WebSocket('wss://tendermint.bd.evmos.org:26657/websocket');
  ws.onopen = function(){
  ws.send(
    JSON.stringify(
      { "jsonrpc": "2.0", "method": "subscribe", "id": "0", "params": { "query": "convert_erc20.amount>0" } }
    )
  );
  ws.send(
      JSON.stringify(
        { "jsonrpc": "2.0", "method": "subscribe", "id": "0", "params": { "query": "convert_coin.amount>0" } }
      )
    );
  }
  ws.on('conversionListener', conversionListener);
}

app.get('/test/convert_coin', (req, res) => {
  const {address, denom, amount} = conversionListener(example_convert_coin);
  res.send(
    `address : ${address}
    denom : ${denom}
    amount : ${amount}`
  );
});

app.get('/test/convert_erc20', (req, res) => {
  const {address, denom, amount} = conversionListener(example_convert_erc20);
  res.send(
    `address : ${address}
    denom : ${denom}
    amount : ${amount}`
  );
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});