import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useRouteGuard = (allowedTypes) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (allowedTypes && !allowedTypes.includes(user.tipo_usuario)) {
      navigate('/dashboard');
    }
  }, [user, navigate, allowedTypes]);

  return user;
};