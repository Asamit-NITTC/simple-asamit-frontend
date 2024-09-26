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

  useEffect(() => {
    if (Object.keys(liffObject).length === 0) return;
  }, [liffObject]);

  return {
    sendMessages,
  };
};
