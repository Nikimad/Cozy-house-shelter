import { createContext } from "react";

interface InertContextType {
  setInert: () => void;
  removeInert: () => void;
}

const InertContext = createContext<InertContextType>({
    setInert: () => {},
    removeInert: () => {},
});

export default InertContext;
