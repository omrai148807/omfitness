import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#000000] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mb-4">
        <button 
          onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/')}
          className="flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      </div>
      <div className="max-w-md w-full space-y-8 bg-[#18181b] p-8 rounded-2xl shadow-none border border-[rgba(255,255,255,0.1)]">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-[#ef233c]/10 p-3 rounded-full text-[#ef233c]">
              <Dumbbell className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Welcome back</h2>
          <p className="mt-2 text-sm text-[#a1a1aa]">
            Sign in to access your orders, wishlist, and more.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 focus:ring-red-500 focus:border-yellow-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-white">Password</label>
                <a href="#" className="text-sm font-medium text-[#ef233c] hover:text-[#ef233c]/80">Forgot password?</a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 focus:ring-red-500 focus:border-yellow-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-none text-sm font-bold text-white bg-[#ef233c] hover:bg-[#ef233c]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            Sign in
          </button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-[#a1a1aa]">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-[#ef233c] hover:text-[#ef233c]/80">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
