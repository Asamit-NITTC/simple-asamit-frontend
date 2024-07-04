import React, { useState } from "react";
import { Modal } from "../ui/Modal";
import { ScanQr } from "./ScanQr";

export const ScanModal = ({ isOn }) => {
  const [result, setResult] = useState("");
  const [isScanning, setIsScanning] = useState(isOn);

  if (isScanning) {
    <Modal>
      <ScanQr setResult={setResult} setIsScanning={setIsScanning} />
    </Modal>;
  } else {
    <p>result: {result}</p>;
  }
};
