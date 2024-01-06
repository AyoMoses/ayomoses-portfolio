import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ToggleAnimationProps {
  isOpen: boolean;
  handleToggleNav: () => void;
}

const ToggleAnimationContext = createContext<ToggleAnimationProps | undefined>(
  undefined
);

export const ToggleAnimationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const contextValue: ToggleAnimationProps = {
    isOpen,
    handleToggleNav,
  };

  return (
    <ToggleAnimationContext.Provider value={contextValue}>
      {children}
    </ToggleAnimationContext.Provider>
  );
};

export const useToggleAnimationContext = () => {
  const context = useContext(ToggleAnimationContext);
  if (!context) {
    throw new Error(
      'ToggleAnimationContext must be used within a ToggleAnimationProvider'
    );
  }

  return context;
};
