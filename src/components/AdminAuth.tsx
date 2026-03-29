import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Mail, Eye, EyeOff, AlertCircle, User as UserIcon, Coffee } from 'lucide-react';
import { adminService } from '../services/adminService';

interface AdminAuthProps {
  onAdminLogin: (adminData: any) => void;
  onBack: () => void;
}

export default function AdminAuth({ onAdminLogin, onBack }: AdminAuthProps) {
  const [email, setEmail] = useState('ranbidgesolutonspvtltd@amail.com');
  const [password, setPassword] = useState('rsplacadamy');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Auto-fill admin credentials on component mount
  useEffect(() => {
    // Set credentials
    setEmail('ranbidgesolutonspvtltd@amail.com');
    setPassword('rsplacadamy');
    
    // Auto-login after a short delay to show the credentials are filled
    const timer = setTimeout(() => {
      // Directly call the admin service with the credentials
      handleAutoLogin();
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAutoLogin = async () => {
    setError('');
    setIsLoading(true);
    
    try {
      const adminData = await adminService.signInAdmin('ranbidgesolutonspvtltd@amail.com', 'rsplacadamy');
      onAdminLogin(adminData);
    } catch (err: any) {
      setError(err.message || 'Invalid admin credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const adminData = await adminService.signInAdmin(email, password);
      onAdminLogin(adminData);
    } catch (err: any) {
      setError(err.message || 'Invalid admin credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        {/* Admin Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
            >
              <Shield size={40} />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-slate-400 text-sm">Secure administrator access</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Auto-fill Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-slate-600 border-t-transparent rounded-full flex-shrink-0"
                />
              ) : (
                <Shield size={20} className="text-slate-600 flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className="text-slate-700 text-sm font-medium">
                  {isLoading ? 'Authenticating...' : 'Admin credentials pre-filled'}
                </p>
                <p className="text-slate-600 text-xs">
                  {isLoading ? 'Please wait while we authenticate' : 'Auto-login in 1.5 seconds or click Quick Login'}
                </p>
              </div>
            </motion.div>

            {/* Demo Mode Notice */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-3"
            >
              <AlertCircle size={16} className="text-amber-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-amber-700 text-xs font-medium">Demo Mode Active</p>
                <p className="text-amber-600 text-xs">Using demo data - set up Supabase database for production</p>
              </div>
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3"
              >
                <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </motion.div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Mail size={16} className="text-slate-500" />
                Admin Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ranbidgesolutonspvtltd@amail.com"
                  className="w-full px-4 py-3 pl-12 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                  required
                />
                <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              </div>
              <p className="text-xs text-slate-500">Use: ranbidgesolutonspvtltd@amail.com</p>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Lock size={16} className="text-slate-500" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="rsplacadamy"
                  className="w-full px-4 py-3 pl-12 pr-12 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                  required
                />
                <Lock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Shield size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-800 text-sm font-medium mb-1">Security Notice</p>
                  <p className="text-amber-700 text-xs">
                    This is a restricted area. Unauthorized access attempts will be logged and reported.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-4 rounded-xl font-semibold hover:from-slate-500 hover:to-slate-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Authenticating...
                </>
              ) : (
                <>
                  <Shield size={20} />
                  Quick Login - Admin Panel
                </>
              )}
            </motion.button>

            {/* Back Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBack}
              className="w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <Coffee size={20} />
              Back to Main Login
            </motion.button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-slate-400 text-xs">
            © 2026 JavaFullStack Masterclass. Admin Portal v2.0
          </p>
        </div>
      </motion.div>
    </div>
  );
}
