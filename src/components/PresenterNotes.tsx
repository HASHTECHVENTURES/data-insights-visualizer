import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StickyNote, X } from "lucide-react";
import { presenterNotes } from "@/data/presenterNotes";
import { cn } from "@/lib/utils";

interface PresenterNotesProps {
  currentSlide: number;
}

export const PresenterNotes = ({ currentSlide }: PresenterNotesProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const notes = presenterNotes.find((n) => n.slideIndex === currentSlide);

  if (!notes) return null;

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-8 left-8 z-50 rounded-full shadow-lg transition-all",
          isOpen && "bg-primary"
        )}
        size="icon"
        variant={isOpen ? "default" : "outline"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <StickyNote className="h-5 w-5" />}
      </Button>

      {/* Notes Panel */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-96 bg-card/95 backdrop-blur-lg border-r border-border shadow-2xl z-40 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Presenter Notes</h3>
            <p className="text-sm text-muted-foreground">
              Slide {currentSlide + 1}: {notes.title}
            </p>
          </div>

          <ScrollArea className="flex-1">
            <div className="space-y-6 pr-4">
              {/* Main Notes */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary rounded" />
                  Speaking Points
                </h4>
                <ul className="space-y-2">
                  {notes.notes.map((note, index) => (
                    <li key={index} className="text-sm text-foreground/90 flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Talking Points */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-chart-1 rounded" />
                  Key Talking Points
                </h4>
                <ul className="space-y-2">
                  {notes.keyTalkingPoints.map((point, index) => (
                    <li key={index} className="text-sm text-foreground/90 flex gap-2">
                      <span className="text-chart-1 mt-1">▸</span>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timer/Tips Section */}
              <div className="bg-chart-2/5 border border-chart-2/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-2" style={{ color: "hsl(var(--chart-2))" }}>
                  💡 Presentation Tips
                </h4>
                <ul className="space-y-1 text-xs text-foreground/80">
                  <li>• Pause for questions after key insights</li>
                  <li>• Make eye contact with investors</li>
                  <li>• Use the data to tell a story</li>
                  <li>• Spend 2-3 minutes per slide</li>
                </ul>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};
