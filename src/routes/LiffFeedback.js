import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";

import liff from "@line/liff/core";
import SendMessages from "@line/liff/send-messages";
import CloseWindow from "@line/liff/close-window";
liff.use(new SendMessages());
liff.use(new CloseWindow());

export const LiffFeedback = () => {
  const [post, setPost] = useState("");
  const initLiff = async () => {
    try {
      await liff.init({ liffId: process.env.REACT_APP_LIFF_ID });
    } catch (err) {
      console.log("Failed to init liff");
    }
  };

  const handleTextChange = (event) => {
    const currentVal = event.target.value;
    setPost(currentVal);
  };

  const handleSubmit = () => {
    const postFinal = post;
    liff.sendMessages([
      {
        type: "text",
        text: "feedback>> " + postFinal,
      },
    ]);
    liff.closeWindow();
  };

  useEffect(() => {
    (async () => {
      await initLiff();
    })();
  }, []);

  return (
    <div className="main">
      <div className="block">
        <p className="goal">
          <label htmlFor="goal">問い合わせフォーム</label>
          <textarea
            name="message"
            id="goal"
            value={post}
            onChange={handleTextChange}
          />
        </p>
        <Button visual="primary" type="submit" onClick={handleSubmit}>
          フィードバックを送信
        </Button>
      </div>
    </div>
  );
};
