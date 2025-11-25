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
    <div className={cn("w-full h-screen flex flex-col p-12 bg-gradient-to-br from-background via-background to-primary/10", className)}>
      {(title || subtitle) && (
        <div className="mb-8 animate-fade-in">
          {title && <h1 className="text-5xl font-bold text-foreground mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">{title}</h1>}
          {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <div className="flex-1 flex items-center justify-center animate-fade-in [animation-delay:200ms]">
        {children}
      </div>
    </div>
  );
};
