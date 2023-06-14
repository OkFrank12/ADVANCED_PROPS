import { PropsWithChildren, createContext, useState } from "react";

interface iGlobal {
  actualName: string;
  setActualName: React.Dispatch<React.SetStateAction<string>>;

  actualEmail: string;
  setActualEmail: React.Dispatch<React.SetStateAction<string>>;

  actualAddress: string;
  setActualAddress: React.Dispatch<React.SetStateAction<string>>;

  actualConfirm: string;
  setActualConfirm: React.Dispatch<React.SetStateAction<string>>;

  actualPhone: string;
  setActualPhone: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext({} as iGlobal);

export const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [actualName, setActualName] = useState<string>("");
  const [actualEmail, setActualEmail] = useState<string>("");
  const [actualAddress, setActualAddress] = useState<string>("");
  const [actualConfirm, setActualConfirm] = useState<string>("");
  const [actualPhone, setActualPhone] = useState<string>("");
  return (
    <GlobalContext.Provider
      value={{
        actualName,
        setActualName,
        actualEmail,
        setActualEmail,
        actualAddress,
        setActualAddress,
        actualConfirm,
        setActualConfirm,
        actualPhone,
        setActualPhone
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
