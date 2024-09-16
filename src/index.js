import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LiffObjectProvider } from "./components/LiffObjectProvider";
import { UserInfoProvider } from "./components/UserInfoProvider";
import App from "./App";
import "./index.css"

/*
if ('serviceWorker' in navigator) {
    console.log('Found serviceWorker');
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
            console.log('Service Worker Registered', reg);
        });
} else {
    console.log('Not Found serviceWorker');
}
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LiffObjectProvider>
      <UserInfoProvider>
        <App />
      </UserInfoProvider>
    </LiffObjectProvider>
  </BrowserRouter>,
);
