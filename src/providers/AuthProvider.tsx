"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { authService } from "@/services/auth/auth.service";
import {
  clearStoredSession,
  getStoredSession,
  setStoredSession,
} from "@/services/auth/auth.storage";
import {
  AUTH_STATE_CHANGE_EVENT,
  type AuthSession,
  type AuthUser,
  type LoginRequest,
  type UserRole,
} from "@/services/auth/auth.types";

type AuthContextValue = {
  session: AuthSession | null;
  user: AuthUser | null;
  role: UserRole | null;
  isAuthenticated: boolean;
  isReady: boolean;
  login: (payload: LoginRequest) => Promise<AuthSession>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const syncSession = () => {
      setSession(getStoredSession());
      setIsReady(true);
    };

    syncSession();

    window.addEventListener("storage", syncSession);
    window.addEventListener(AUTH_STATE_CHANGE_EVENT, syncSession);

    return () => {
      window.removeEventListener("storage", syncSession);
      window.removeEventListener(AUTH_STATE_CHANGE_EVENT, syncSession);
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: session?.user ?? null,
      role: session?.user.role ?? null,
      isAuthenticated: Boolean(session?.token),
      isReady,
      async login(payload) {
        const nextSession = await authService.login(payload);
        setStoredSession(nextSession);
        setSession(nextSession);
        return nextSession;
      },
      async logout() {
        try {
          await authService.logout();
        } finally {
          clearStoredSession();
          setSession(null);
        }
      },
    }),
    [isReady, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}