import { DashboardProvider } from "../contexts/DashboardContext/DashboardContext";
import { ModalsProvider } from "../contexts/ModalsContext/ModalsContext";
import { UserRequestsProvider } from "../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { UserProvider } from "../contexts/UserInfoContext/UserInfoContext";

interface iProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvidersProps) => {
  return (
    <ModalsProvider>
      <UserRequestsProvider>
        <DashboardProvider>
          <UserProvider>{children}</UserProvider>
        </DashboardProvider>
      </UserRequestsProvider>
    </ModalsProvider>
  );
};
