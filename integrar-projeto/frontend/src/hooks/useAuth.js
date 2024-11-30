import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { user, token } = useSelector(state => state.auth);
  const isAuthenticated = Boolean(token);
  
  return {
    user,
    token,
    isAuthenticated
  };
};