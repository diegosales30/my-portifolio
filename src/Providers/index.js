import { LanguageProvider } from "./languages";
import { ModalProvider } from "./modal";

const Provider = ({ children }) => {
  return (
    <ModalProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ModalProvider>
  );
};
export default Provider;
