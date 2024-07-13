import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react"

type User = {
  id: string,
  username: string,
  email: string
}

interface AuthContextType {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
}
// eslint-disable-next-line react-refresh/only-export-components
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('erorr');
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((userInfo: User) => {
    (userInfo.username === 'testUser' && userInfo.email === 'test@email.com') ? setUser(userInfo) : console.log('cant login');
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const contextValue = useMemo(() =>
  ({
      user,
      login,
      logout,
  }), [user, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
