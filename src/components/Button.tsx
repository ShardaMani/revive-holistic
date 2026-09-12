import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus-visible:outline-primary-600',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-dark-900 focus-visible:outline-gray-400',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={combinedClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
