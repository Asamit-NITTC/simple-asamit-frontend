import React from "react";
import { useState } from "react";
import { Modal } from "../ui/Modal";

export const useModal = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const ModalComponent = ({ children }) => {
    if (!show) return null;
    return <Modal>{children}</Modal>;
  };

  return { ModalComponent, openModal, closeModal };
};
