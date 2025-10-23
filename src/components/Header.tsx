import React, { useState, useEffect, useRef } from 'react';

// TypeScript interface for scroll direction
interface ScrollState {
  isSticky: boolean;
  isVisible: boolean;
}

// Header Component
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollState, setScrollState] = useState<ScrollState>({
    isSticky: false,
    isVisible: false
  });
  const lastScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY: number = window.scrollY;
          const scrollThreshold: number = window.innerHeight / 4;
          
          if (currentScrollY > scrollThreshold) {
            const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
            
            if (scrollDirection === 'down') {
              setScrollState({ isSticky: true, isVisible: true });
            } else {
              setScrollState({ isSticky: true, isVisible: false });
            }
          } else {
            setScrollState({ isSticky: false, isVisible: false });
          }
          
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.hamburger-btn')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`
          fixed left-0 right-0 bg-white z-[1000] 
          transition-all duration-300 ease-in-out 
          shadow-sm
          px-4 lg:px-[60px] xl:px-[100px] py-4
          ${scrollState.isSticky && scrollState.isVisible ? 'top-0 opacity-100' : ''}
          ${scrollState.isSticky && !scrollState.isVisible ? '-top-[100px] opacity-0' : ''}
          ${!scrollState.isSticky ? 'top-0 opacity-100' : ''}
        `}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="max-w-[1240px] mx-auto flex justify-between items-center font-inter font-medium text-sm text-[#262A2E]">
          {/* Logo */}
          <img 
            src="/images/mobile_logo.svg" 
            alt="Gushwork logo" 
            className="h-auto relative z-[1002]"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-5 items-center" aria-label="Desktop navigation">
            <button 
              className="hover:text-[#2B3990] transition-colors duration-200"
              type="button"
            >
              About Us
            </button>
            
            <button 
              className="flex items-center gap-2 hover:text-[#2B3990] transition-colors duration-200"
              type="button"
              aria-haspopup="true"
            >
              <span>Products</span>
              <img 
                src="/images/caretdown.svg" 
                alt="" 
                className="w-4 h-4"
                aria-hidden="true"
              />
            </button>
            
            <button 
              className="bg-[#2B3990] px-4 py-3 rounded-[10px] text-white hover:bg-[#1f2a6b] transition-colors duration-200"
              type="button"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden w-[30px] h-[30px] cursor-pointer hamburger-btn focus:outline-none relative z-[1002] flex flex-col justify-center items-center gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Animated Hamburger Icon */}
            <span 
              className={`block w-6 h-0.5 bg-[#262A2E] transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-[#262A2E] transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-[#262A2E] transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`
          md:hidden fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`
          mobile-menu-container
          md:hidden fixed top-[78px] right-0 w-[280px] h-[calc(100vh-78px)]
          bg-white shadow-2xl z-[1001]
          flex flex-col gap-6 p-6 pt-8
          transition-all duration-300 ease-in-out
          ${isMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
          }
        `}
        aria-label="Mobile navigation"
      >
        {/* Menu Items */}
        <button 
          className="w-full text-left text-base font-medium text-[#262A2E] hover:text-[#2B3990] transition-colors duration-200 py-3 border-b border-[#E1E3E8]"
          type="button"
          onClick={closeMenu}
        >
          About Us
        </button>
        
        <button 
          className="w-full flex items-center justify-between text-base font-medium text-[#262A2E] hover:text-[#2B3990] transition-colors duration-200 py-3 border-b border-[#E1E3E8]"
          type="button"
          aria-haspopup="true"
        >
          <span>Products</span>
          <img 
            src="/images/caretdown.svg" 
            alt="" 
            className="w-4 h-4"
            aria-hidden="true"
          />
        </button>
        
        <button 
          className="bg-[#2B3990] text-white px-6 py-3 rounded-[10px] font-medium text-base hover:bg-[#1f2a6b] transition-colors duration-200 mt-4"
          type="button"
          onClick={closeMenu}
        >
          Contact Us
        </button>

        {/* Close Text */}
        <button
          onClick={closeMenu}
          className="mt-auto text-sm text-[#6A7077] hover:text-[#2B3990] transition-colors duration-200 py-3"
          type="button"
        >
          Close Menu
        </button>
      </nav>
    </>
  );
};