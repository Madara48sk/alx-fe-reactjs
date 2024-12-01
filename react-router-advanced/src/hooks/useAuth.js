import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initially not authenticated

  const login = () => {
    // Simulate login - replace with actual authentication logic
    setIsAuthenticated(true);
    // In a real app, you'd make an API call here, store tokens, etc.
  };

  const logout = () => {
    // Simulate logout - replace with actual authentication logic
    setIsAuthenticated(false);
    // In a real app, you'd clear tokens, etc.
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;