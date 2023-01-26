import express from "express";
import { example_convert_coin, example_convert_erc20 } from "./examples.js";
import { conversionEventHandler, conversionEventListener } from "./event-linstener.js";
import { osmosisEventListener } from "./osmosis-event-listener.js";
const app = express();
const port = 3000;

app.get("/test/convert_coin", (req, res) => {
  conversionEventHandler(example_convert_coin);
  res.send(
    example_convert_erc20
  );
});

app.get("/test/convert_erc20", (req, res) => {
  conversionEventHandler(example_convert_erc20);
  res.send(
    example_convert_erc20
  );
});

app.listen(port, () => {
  osmosisEventListener();
  conversionEventListener();
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
