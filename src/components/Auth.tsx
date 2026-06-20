import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabase';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  RefreshCw, 
  AlertCircle, 
  Eye, 
  EyeOff,
  Sparkles,
  Zap,
  Shield,
  Heart,
  ChevronLeft,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type AuthMode = 'login' | 'register' | 'reset' | 'success';

interface AuthProps {
  initialMode?: AuthMode;
  onAdminLogin?: (adminData: any) => void;
  onDemoLogin?: (demoData: any) => void;
}

export default function Auth({ initialMode = 'login', onAdminLogin, onDemoLogin }: AuthProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Calculate password strength
    if (password) {
      let strength = 0;
      if (password.length >= 8) strength++;
      if (password.length >= 12) strength++;
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
      if (/\d/.test(password)) strength++;
      if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [password]);

  useEffect(() => {
    // Auto-focus first empty field
    if (mode === 'login' && emailRef.current && !email) {
      emailRef.current.focus();
    } else if (mode === 'register') {
      if (!displayName && emailRef.current) {
        emailRef.current.focus();
      } else if (displayName && !password && passwordRef.current) {
        passwordRef.current.focus();
      }
    }
  }, [mode]);

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-slate-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (mode === 'register' && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (mode === 'register' && passwordStrength < 3) {
      setError('Please choose a stronger password');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'login') {
        // Check for Admin Credentials
        if (email === 'lmsportaladminlogin@gmail.com' && password === 'LMS') {
          if (onAdminLogin) {
            onAdminLogin({ 
              email: 'lmsportaladminlogin@gmail.com', 
              user_metadata: { display_name: 'LMS Admin' } 
            });
            setIsSuccess(true);
            setMode('success');
            return;
          }
        }

        // Check for Demo Credentials
        if (email === '23471a4245@nrtec.in' && password === '23471a4245') {
          if (onDemoLogin) {
            onDemoLogin({
              id: 'demo-user-id-12345',
              email: '23471a4245@nrtec.in',
              user_metadata: { display_name: 'Demo User' }
            });
            setIsSuccess(true);
            setMode('success');
            return;
          }
        }

        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          throw signInError;
        }
        
        setIsSuccess(true);
        setMode('success');
        // Redirect to LMS Portal after successful login
        setTimeout(() => {
          window.location.href = '/?view=lms';
        }, 2000);
      } else if (mode === 'register') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              display_name: displayName,
            },
          },
        });
        if (error) throw error;
        
        if (data.session) {
          setIsSuccess(true);
          setMode('success');
          setMessage('Registration successful! Redirecting to LMS Portal...');
          setTimeout(() => {
            window.location.href = '/?view=lms';
          }, 2000);
        } else {
          setMessage('Registration successful! Please check your email for verification.');
        }
      } else if (mode === 'reset') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin,
        });
        if (error) throw error;
        setMessage('Password reset email sent! Check your inbox.');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoCredentials = () => {
    setEmail('23471a4245@nrtec.in');
    setPassword('23471a4245');
    // Add a little animation
    setEmail('23471a4245@nrtec.in');
    setTimeout(() => setPassword('23471a4245'), 100);
  };

  if (mode === 'success' && isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center text-white mx-auto"
          >
            <CheckCircle2 size={40} />
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back!</h2>
          <p className="text-slate-600">You've successfully logged in. Redirecting to your dashboard...</p>
          <div className="flex justify-center">
            <Loader2 className="animate-spin text-slate-600" size={24} />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-10 -left-10 w-40 h-40 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 space-y-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-20 h-20 bg-gradient-to-br from-slate-600 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-slate-200"
          >
            {mode === 'login' ? <Lock size={36} /> : mode === 'register' ? <User size={36} /> : <RefreshCw size={36} />}
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {mode === 'login' ? 'Welcome Back' : mode === 'register' ? 'Join Us Today' : 'Reset Password'}
            </h2>
            <p className="text-slate-600">
              {mode === 'login' ? 'Sign in to continue your learning journey' : 
               mode === 'register' ? 'Start your Java Full Stack masterclass today' : 
               'Enter your email to receive a reset link'}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === 'register' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
                <User size={16} />
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className={`w-full bg-slate-50/50 border ${focusedField === 'displayName' ? 'border-slate-500 ring-2 ring-slate-200' : 'border-slate-200'} rounded-xl py-3 px-4 focus:ring-2 focus:ring-slate-500 transition-all outline-none backdrop-blur-sm`}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  onFocus={() => setFocusedField('displayName')}
                  onBlur={() => setFocusedField(null)}
                  ref={emailRef}
                />
              </div>
            </motion.div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
              <Mail size={16} />
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className={`w-full bg-slate-50/50 border ${focusedField === 'email' ? 'border-slate-500 ring-2 ring-slate-200' : 'border-slate-200'} rounded-xl py-3 px-4 focus:ring-2 focus:ring-slate-500 transition-all outline-none backdrop-blur-sm`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                ref={emailRef}
              />
            </div>
          </div>

          {mode !== 'reset' && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
                <Lock size={16} />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className={`w-full bg-slate-50/50 border ${focusedField === 'password' ? 'border-slate-500 ring-2 ring-slate-200' : 'border-slate-200'} rounded-xl py-3 px-4 pr-12 focus:ring-2 focus:ring-slate-500 transition-all outline-none backdrop-blur-sm`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  ref={passwordRef}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              {mode === 'register' && password && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Password strength</span>
                    <span className={`font-semibold ${
                      passwordStrength <= 2 ? 'text-red-500' : 
                      passwordStrength <= 3 ? 'text-yellow-500' : 
                      'text-slate-500'
                    }`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full ${getPasswordStrengthColor()}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(passwordStrength / 5) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {mode === 'register' && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
                <Shield size={16} />
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className={`w-full bg-slate-50/50 border ${focusedField === 'confirmPassword' ? 'border-slate-500 ring-2 ring-slate-200' : 'border-slate-200'} rounded-xl py-3 px-4 pr-12 focus:ring-2 focus:ring-slate-500 transition-all outline-none backdrop-blur-sm`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setFocusedField('confirmPassword')}
                  onBlur={() => setFocusedField(null)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {confirmPassword && (
                <div className="flex items-center gap-1 text-xs">
                  {password === confirmPassword ? (
                    <>
                      <CheckCircle2 size={14} className="text-slate-500" />
                      <span className="text-slate-500">Passwords match</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={14} className="text-red-500" />
                      <span className="text-red-500">Passwords do not match</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-red-600 bg-red-50/80 p-3 rounded-xl text-sm backdrop-blur-sm"
              >
                <AlertCircle size={16} />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-slate-600 bg-slate-50/80 p-3 rounded-xl text-sm backdrop-blur-sm"
              >
                <CheckCircle2 size={16} />
                <span>{message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-slate-600 to-teal-600 text-white rounded-xl py-3 font-bold hover:from-slate-700 hover:to-teal-700 transition-all shadow-lg shadow-slate-200/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Processing...
              </>
            ) : (
              <>
                {mode === 'login' ? 'Sign In' : mode === 'register' ? 'Create Account' : 'Send Reset Link'}
                <ArrowRight size={18} />
              </>
            )}
          </motion.button>

          {mode === 'login' && (
            <motion.button
              type="button"
              onClick={handleDemoCredentials}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-slate-100 to-slate-200 text-slate-600 rounded-xl py-3 font-semibold hover:from-slate-200 hover:to-slate-300 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={16} />
              Use Demo Credentials
            </motion.button>
          )}
        </form>

        {/* Footer */}
        <div className="text-center space-y-4">
          {mode === 'login' ? (
            <>
              <button 
                onClick={() => setMode('reset')} 
                className="text-sm text-slate-600 hover:text-slate-700 font-medium hover:underline transition-colors"
              >
                Forgot password?
              </button>
              <p className="text-sm text-slate-600">
                Don't have an account?{' '}
                <button 
                  onClick={() => setMode('register')} 
                  className="text-slate-600 font-bold hover:text-slate-700 hover:underline transition-colors"
                >
                  Sign Up
                </button>
              </p>
            </>
          ) : mode === 'register' ? (
            <p className="text-sm text-slate-600">
              Already have an account?{' '}
              <button 
                onClick={() => setMode('login')} 
                className="text-slate-600 font-bold hover:text-slate-700 hover:underline transition-colors"
              >
                Sign In
              </button>
            </p>
          ) : (
            <button 
              onClick={() => setMode('login')} 
              className="text-sm text-slate-600 font-bold hover:text-slate-700 hover:underline transition-colors flex items-center gap-1 mx-auto"
            >
              <ChevronLeft size={16} />
              Back to Login
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
