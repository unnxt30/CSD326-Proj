import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Modal } from './Modal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSignInOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed w-full z-50 transition-all duration-300 px-4 py-3",
          isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-xl font-semibold tracking-tight">CivicConnect</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#for-citizens" className="text-foreground/80 hover:text-primary transition-colors">
              For Citizens
            </a>
            <a href="#for-staff" className="text-foreground/80 hover:text-primary transition-colors">
              For Staff
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              onClick={handleSignInClick}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Sign In
            </a>
            <a
              href="#sign-in"
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Request Repair
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg shadow-md py-4 px-4 animate-slide-in-top">
            <div className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#for-citizens"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Citizens
              </a>
              <a
                href="#for-staff"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Staff
              </a>
              <div className="pt-3 flex flex-col space-y-3">
                <a
                  href="#"
                  onClick={handleSignInClick}
                  className="px-4 py-2 text-sm font-medium text-center text-foreground/80 hover:text-primary transition-colors border border-gray-200 rounded-lg"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-center rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Request Repair
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Modal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  );
};

export default Navbar;
