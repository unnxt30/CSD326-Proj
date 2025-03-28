import { useEffect, useState } from 'react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';

type FormType = 'signin' | 'signup' | 'forgot-password';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [formType, setFormType] = useState<FormType>('signin');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderForm = () => {
    switch (formType) {
      case 'signin':
        return (
          <SignInForm
            onClose={onClose}
            onForgotPassword={() => setFormType('forgot-password')}
            onSignUp={() => setFormType('signup')}
          />
        );
      case 'signup':
        return (
          <SignUpForm
            onClose={onClose}
            onSwitchToSignIn={() => setFormType('signin')}
          />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordForm
            onClose={onClose}
            onBackToSignIn={() => setFormType('signin')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md">
        {renderForm()}
      </div>
    </div>
  );
} 