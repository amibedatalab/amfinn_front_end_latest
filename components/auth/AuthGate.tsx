// components/AuthGate.tsx
import { useEffect } from 'react';
import { router } from 'expo-router';
import { useAuth } from '@/components/auth/authContext';

export const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.log(
      'working bc =============',isAuthenticated
    )
    if (isAuthenticated) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};
