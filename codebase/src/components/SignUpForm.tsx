import { useState } from 'react';
import { useHoverAnimation } from '../lib/animations';
import { SocialLogin } from './SocialLogin';

interface SignUpFormProps {
  onClose?: () => void;
  onSwitchToSignIn: () => void;
}

export function SignUpForm({ onClose, onSwitchToSignIn }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const formRef = useHoverAnimation(1.02);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle sign up logic here
    console.log('Sign up attempted with:', { name, email, password });
    if (onClose) onClose();
  };

  return (
    <div className="w-full p-8 rounded-xl bg-white/80 backdrop-blur-sm
                    shadow-lg transition-all duration-300 ease-in-out
                    hover:shadow-xl border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Create Account
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
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/50
                     border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     transition-all duration-200 ease-in-out
                     placeholder-gray-500
                     text-gray-900"
            required
          />
        </div>

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

        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/50
                     border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     transition-all duration-200 ease-in-out
                     placeholder-gray-500
                     text-gray-900"
            required
          />
        </div>

        <div className="relative">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg bg-white/50
                     border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     transition-all duration-200 ease-in-out
                     placeholder-gray-500
                     text-gray-900"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            required
          />
          <label className="ml-2 text-sm text-gray-600">
            I agree to the{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
                   font-medium transition-all duration-200 ease-in-out
                   transform hover:scale-[1.02] active:scale-[0.98]
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign Up
        </button>

        <SocialLogin />

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToSignIn}
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
} 