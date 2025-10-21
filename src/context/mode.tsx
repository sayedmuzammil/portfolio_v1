'use client';

import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

interface ModeContextProps {
  mode: 'Leader' | 'Builder';
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextProps | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'Leader' | 'Builder'>('Builder');

  const toggleMode = () => {
    setMode((prev) => (prev === 'Leader' ? 'Builder' : 'Leader'));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useModeContext() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useModeContext must be used within a ModeProvider');
  }
  return context;
}
