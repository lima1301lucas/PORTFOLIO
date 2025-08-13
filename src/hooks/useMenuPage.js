import { useState } from 'react';

export function useMenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return {
    isMenuOpen,
    toggleMenu,
  };
}