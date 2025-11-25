import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const PresentationSlide = ({ children, className, title, subtitle }: PresentationSlideProps) => {
  return (
    <div className={cn("w-full h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 py-4 bg-background overflow-hidden relative", className)}>
      {/* Subtle Global Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      {(title || subtitle) && (
        <div className="mb-2 flex-shrink-0 relative z-10">
          {title && (
            <h1 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && <p className="text-xs sm:text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="flex-1 min-h-0 flex items-center justify-center relative z-10">
        {children}
      </div>
    </div>
  );
};
