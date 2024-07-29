import React, { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

const NewModal = ({ children }) => {
  const [isOpen, open] = useState(false);
  const close = () => open(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(true) });
};

NewModal.Open = Open;

const Dialog = ({ children }) => {
  const { close, isOpen } = useContext(ModalContext);

  if (isOpen) {
    return createPortal(
      <>
        <button onClick={close}>X</button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </>,
      document.body
    );
  } else {
    return null;
  }
};

NewModal.Dialog = Dialog;


export default NewModal;
