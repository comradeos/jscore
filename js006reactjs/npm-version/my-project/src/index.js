import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import "./css/main.css";

const root = document.getElementById("root");
const app = ReactDOMClient.createRoot(root);
app.render(<App/>);
