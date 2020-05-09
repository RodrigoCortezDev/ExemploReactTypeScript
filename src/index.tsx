import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import ptBr from "antd/es/locale/pt_BR";
import "antd/dist/antd.css";
import "moment/locale/pt-br";
import moment from "moment";
import App from "./App";

moment.locale("pt-BR");

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBr}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
