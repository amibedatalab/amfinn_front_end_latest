import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/components/auth/authContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return <>{children}</>;
}
