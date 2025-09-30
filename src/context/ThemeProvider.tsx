// src/context/ThemeProvider.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Theme 타입 정의 (export를 위해 위로 올립니다.)
type Theme = 'light' | 'dark';

// Context가 제공할 값의 타입 정의 (export를 위해 위로 올립니다.)
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// 1. Context 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

// 2. Provider 컴포넌트 정의
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // ... (기존 로직 그대로 유지) ...
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. 커스텀 훅 정의
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 일관된 내보내기를 위해 파일 하단에서 한 번에 export 합니다.
export {
  ThemeProvider,
  useTheme
};

// 추가적으로, 필요하다면 타입 정의도 여기서 함께 내보낼 수 있습니다.
export type { Theme, ThemeContextType };