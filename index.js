import WebSocket from 'ws';
import express from 'express';
import {example_convert_coin, example_convert_erc20} from './examples.js';
const app = express();
const port = 3000;

function conversionListener(data) {
  console.log('%s', data);
  
  const querystring = data.result.query;
  if(querystring.startsWith('convert_coin')) {
    const address = data['result']['events']['convert_coin.receiver'];
    const denom = data['result']['events']['convert_coin.cosmos_coin'];
    const amount = data['result']['events']['convert_coin.amount'];
    return {
      address: address,
      denom: denom,
      amount: amount
    }
  }
  else if(querystring.startsWith('convert_erc20')) {
    const address = data['result']['events']['convert_erc20.sender'];
    const denom = data['result']['events']['convert_erc20.cosmos_coin'];
    const amount = data['result']['events']['convert_erc20.amount'];
    return {
      address: address,
      denom: denom,
      amount: amount
    }
  }
  return {
      address: null,
      denom: null,
      amount: null
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