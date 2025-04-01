import { useState } from 'react';
import { useHoverAnimation } from '../lib/animations';

interface ForgotPasswordFormProps {
  onClose?: () => void;
  onBackToSignIn: () => void;
}

export function ForgotPasswordForm({ onClose, onBackToSignIn }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const formRef = useHoverAnimation(1.02);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
    if (onClose) onClose();
  };

  return (
    <div className="w-full p-8 rounded-xl bg-white/80 backdrop-blur-sm
                    shadow-lg transition-all duration-300 ease-in-out
                    hover:shadow-xl border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Reset Password
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <p className="text-gray-600 text-sm">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/50
                     border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     transition-all duration-200 ease-in-out
                     placeholder-gray-500
                     text-gray-900"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
                   font-medium transition-all duration-200 ease-in-out
                   transform hover:scale-[1.02] active:scale-[0.98]
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Reset Link
        </button>

        <div className="text-center text-sm text-gray-600">
          Remember your password?{' '}
          <button
            onClick={onBackToSignIn}
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            Back to Sign In
          </button>
        </div>
      </form>
    </div>
  );
} 