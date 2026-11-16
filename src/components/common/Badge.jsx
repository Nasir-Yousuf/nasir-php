import React from 'react';

export function Badge({ children, variant = 'default', size = 'sm', className = '' }) {
  const variantStyles = {
    default: 'bg-laboratory-800 text-slate-300 border-laboratory-700',
    php: 'bg-php/15 text-php-accent border-php/40',
    verified: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40',
    warning: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
    purple: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
    rose: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
    blue: 'bg-blue-500/15 text-blue-300 border-blue-500/40',
  };

  const sizeStyles = {
    xs: 'text-[10px] px-1.5 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-mono font-medium rounded-full border transition-colors ${variantStyles[variant] || variantStyles.default} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
