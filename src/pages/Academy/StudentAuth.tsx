import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Loader2, Mail, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useAcademyAuth, StudentUser } from '../../lib/academyAuth';

// ─── Shared validation helpers ────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SignInErrors = { email?: string; password?: string };
type SignUpErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

function validateSignIn(email: string, password: string): SignInErrors {
  const errors: SignInErrors = {};
  if (!email.trim()) {
    errors.email = 'Email address is required';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  return errors;
}

function validateSignUp(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): SignUpErrors {
  const errors: SignUpErrors = {};
  if (!name.trim()) {
    errors.name = 'Full name is required';
  } else if (name.trim().length < 2) {
    errors.name = 'Enter your full name';
  }
  if (!email.trim()) {
    errors.email = 'Email address is required';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  if (!confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
}

// ─── Shared UI helpers ────────────────────────────────────────────────────────

const inputClass = (hasError?: string) =>
  `w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
    hasError
      ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20'
      : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
  }`;

const FieldError: React.FC<{ msg?: string }> = ({ msg }) =>
  msg ? <p className="text-xs font-bold text-red-500 mt-1">{msg}</p> : null;

const AcademyBrand: React.FC = () => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
      <span className="text-white font-display font-bold text-sm">M</span>
    </div>
    <span className="font-display font-bold text-text-dark">
      MExt <span className="text-primary">Academy</span>
    </span>
  </div>
);

// ─── StudentSignIn ─────────────────────────────────────────────────────────────

export const StudentSignIn: React.FC = () => {
  const [email, setEmail] = useState('student@mext.africa');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<SignInErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAcademyAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateSignIn(email, password);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsLoading(true);

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));

    const mockUser: StudentUser = {
      id: crypto.randomUUID(),
      name: email
        .split('@')[0]
        .replace(/[._-]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      email,
      role: 'Marketing Student',
      avatar: '',
      joinedAt: new Date().toISOString(),
    };

    login(mockUser);
    const from = (location.state as { from?: string } | null)?.from;
    navigate(from || '/academy/app', { replace: true });
  };

  return (
    <div className="min-h-screen bg-bg-gray flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <AcademyBrand />

          <h1 className="text-2xl font-display font-bold text-text-dark mb-1">
            Welcome back
          </h1>
          <p className="text-sm text-text-muted mb-8">
            Sign in to continue your learning journey.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-text-dark mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass(errors.email)}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <FieldError msg={errors.email} />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-bold text-text-dark">
                  Password
                </label>
                <Link
                  to="/academy/forgot-password"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${inputClass(errors.password)} pr-11`}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <FieldError msg={errors.password} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-primary text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Footer links */}
          <div className="mt-6 space-y-3 text-center">
            <p className="text-sm text-text-muted">
              Don&apos;t have an account?{' '}
              <Link
                to="/academy/sign-up"
                className="font-bold text-primary hover:underline"
              >
                Create one free
              </Link>
            </p>
            <p className="text-xs text-text-muted">
              Looking for client portal?{' '}
              <Link
                to="/auth/login"
                className="text-text-dark hover:underline font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Demo credentials hint */}
        <p className="text-center text-xs text-text-muted mt-4">
          Demo credentials pre-filled above. Just click{' '}
          <span className="font-bold text-text-dark">Sign In</span>.
        </p>
      </div>
    </div>
  );
};

// ─── StudentSignUp ─────────────────────────────────────────────────────────────

export const StudentSignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<SignUpErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAcademyAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateSignUp(name, email, password, confirmPassword);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 800));

    const mockUser: StudentUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      role: 'Marketing Student',
      avatar: '',
      joinedAt: new Date().toISOString(),
    };

    login(mockUser);
    navigate('/academy/app', { replace: true });
  };

  return (
    <div className="min-h-screen bg-bg-gray flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <AcademyBrand />

          <h1 className="text-2xl font-display font-bold text-text-dark mb-1">
            Create your account
          </h1>
          <p className="text-sm text-text-muted mb-8">
            Free access to world-class marketing education.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-text-dark mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass(errors.name)}
                placeholder="e.g. Ada Nnaji"
                autoComplete="name"
              />
              <FieldError msg={errors.name} />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-text-dark mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass(errors.email)}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <FieldError msg={errors.email} />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-text-dark mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${inputClass(errors.password)} pr-11`}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <FieldError msg={errors.password} />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-bold text-text-dark mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${inputClass(errors.confirmPassword)} pr-11`}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark transition-colors"
                  tabIndex={-1}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <FieldError msg={errors.confirmPassword} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-primary text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-text-muted text-center mt-5">
            By creating an account you agree to our{' '}
            <a href="#" className="underline hover:text-text-dark">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-text-dark">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <p className="text-center text-sm text-text-muted mt-4">
          Already have an account?{' '}
          <Link to="/academy/sign-in" className="font-bold text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

// ─── StudentForgotPassword ─────────────────────────────────────────────────────

export const StudentForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError('Email address is required');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setEmailError('Enter a valid email address');
      return;
    }
    setEmailError('');
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg-gray flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <AcademyBrand />

          {submitted ? (
            /* ── Success state ── */
            <div className="text-center py-2">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Mail size={32} className="text-primary" />
              </div>
              <h1 className="text-2xl font-display font-bold text-text-dark mb-2">
                Check your inbox
              </h1>
              <p className="text-sm text-text-muted mb-2">
                If an account exists for{' '}
                <span className="font-bold text-text-dark">{email}</span>, we&apos;ve
                sent password reset instructions.
              </p>
              <p className="text-xs text-text-muted mb-8">
                Didn&apos;t receive it? Check your spam folder or try again.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-green-600 font-bold bg-green-50 px-4 py-2 rounded-full">
                <CheckCircle size={16} />
                Email sent successfully
              </div>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              <h1 className="text-2xl font-display font-bold text-text-dark mb-1">
                Reset your password
              </h1>
              <p className="text-sm text-text-muted mb-8">
                Enter your email and we&apos;ll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-text-dark mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass(emailError)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {emailError && (
                    <p className="text-xs font-bold text-red-500 mt-1">{emailError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-primary text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-sm text-text-muted mt-4">
          Remember your password?{' '}
          <Link to="/academy/sign-in" className="font-bold text-primary hover:underline">
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
