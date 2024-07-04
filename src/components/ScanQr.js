import React from "react";
import { useZxing } from "react-zxing";

export const ScanQr = ({ setResult, setIsScanning }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      setIsScanning(false);
    },
  });
  return (
    <>
      <video ref={ref} />
    </>
  );
};
