import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(!open);
  };

  return (
    <ModalContext.Provider value={{ open, setOpen, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
