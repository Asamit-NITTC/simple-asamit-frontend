import { useEffect } from "react";

export const useLiffMessage = (liffObject, isLoggedIn) => {
  const sendMessages = async (message) => {
    if (!isLoggedIn) return;
    await liffObject?.sendMessages([
      {
        type: "text",
        text: message,
      },
    ]);
  };

  useEffect(() => {}, [liffObject]);

  return {
    sendMessages,
  };
};
