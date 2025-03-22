import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-800 to-blue-800 text-indigo-200 hover:bg-indigo-900',
    secondary: 'bg-white hover:bg-indigo-50 text-indigo-900',
    outline:
      'bg-transparent border border-indigo-800 text-indigo-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30',
  };

  const sizeClasses = {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2 px-6',
    lg: 'py-3 px-8 text-lg',
  };

  return (
    <button
      className={`cursor-pointer font-light rounded-full transition-all duration-300 hover:scale-105 hover:shadow-button-hover ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
