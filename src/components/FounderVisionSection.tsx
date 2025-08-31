import { User, Building, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FounderVisionSection() {
  const partnerships = [
    {
      name: "Bright Data",
      type: "Revenue-Share Affiliate",
      description: "Strategic data intelligence partnership"
    },
    {
      name: "Brainz Magazine",
      type: "Executive Contributor",
      description: "Healthcare technology thought leadership"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Built by <span className="text-primary">James Derek Ingersoll</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Healthcare technology innovator and sovereignty advocate driving the revolution 
                from surveillance to patient-controlled healthcare.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">The Ghost King</h3>
                  <p className="text-muted-foreground">
                    Founder & CEO leading the charge against healthcare surveillance capitalism 
                    through revolutionary local-first technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">GodsIMiJ AI Solutions</h3>
                  <p className="text-muted-foreground">
                    Pembroke, Ontario-based healthcare AI company pioneering patient sovereignty 
                    through advanced local-first architectures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    Liberating healthcare from surveillance capitalism through local-first technology 
                    that puts patients in complete control of their medical data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnerships & Recognition */}
          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-card border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Strategic Partnerships</h3>
              </div>
              
              <div className="space-y-6">
                {partnerships.map((partnership, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background/50 border border-muted">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-primary">{partnership.name}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {partnership.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{partnership.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Founder Commitment</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  100% founder equity available for strategic partners who share the vision 
                  of patient-controlled healthcare sovereignty.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = 'mailto:james@godsimij-ai-solutions.com?subject=Founder Discussion'}
              >
                Schedule Founder Discussion
              </Button>
              <p className="text-sm text-muted-foreground">
                Direct access to the visionary building healthcare's sovereign future
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}