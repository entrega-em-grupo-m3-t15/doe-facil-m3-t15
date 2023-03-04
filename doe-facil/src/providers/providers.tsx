import { ModalsProvider } from "../contexts/ModalsContext/ModalsContext";

interface iProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvidersProps) => {
  return <ModalsProvider>{children}</ModalsProvider>;
};
