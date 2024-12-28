import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  profilePicture?: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Check for token on mount
  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
      // Fetch user info using the token
      axios
        .get("http://127.0.0.1:8000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data))
        .catch(() => logout());
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axios.post("http://127.0.0.1:8000/api/users/login", {
      email,
      password,
    });
    const { access_token } = response.data;
    sessionStorage.setItem("access_token", access_token);
    // Fetch and set user info
    const userResponse = await axios.get("http://127.0.0.1:8000/api/users/me", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    setUser(userResponse.data);
  };

  const logout = () => {
    sessionStorage.removeItem("access_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
