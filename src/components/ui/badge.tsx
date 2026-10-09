import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--accent-primary)] text-[var(--bg-primary)] shadow hover:bg-white',
        secondary:
          'border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-white',
        outline:
          'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]',
        mono:
          'font-mono text-[10px] uppercase tracking-wider rounded-md border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-muted)]',
        tag:
          'font-mono text-[11px] rounded-full px-3 py-1 border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] transition-colors',
        active:
          'font-mono text-[10px] uppercase tracking-wider rounded-full px-2.5 py-0.5 border border-emerald-800/40 bg-emerald-950/40 text-emerald-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
