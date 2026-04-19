import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => void;
  signup: (name: string, email: string, pass: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('fitness_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, pass: string) => {
    // Mock login
    const mockUser: User = {
      id: 'u1',
      name: 'Test User',
      email,
      addresses: [],
      orders: []
    };
    setUser(mockUser);
    localStorage.setItem('fitness_user', JSON.stringify(mockUser));
  };

  const signup = (name: string, email: string, pass: string) => {
    // Mock signup
    const mockUser: User = {
      id: 'u' + Date.now(),
      name,
      email,
      addresses: [],
      orders: []
    };
    setUser(mockUser);
    localStorage.setItem('fitness_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fitness_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
