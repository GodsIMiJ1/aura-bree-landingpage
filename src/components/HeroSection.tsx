import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Database, Zap } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export function HeroSection() {
  const [clinicsProtected, setClinicsProtected] = useState(47);
  const [recordsSecured, setRecordsSecured] = useState(125847);

  useEffect(() => {
    const interval = setInterval(() => {
      setClinicsProtected(prev => prev + Math.floor(Math.random() * 3));
      setRecordsSecured(prev => prev + Math.floor(Math.random() * 50));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary">
                  <Shield className="h-4 w-4" />
                  $500k Seed Round
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-sm text-accent">
                  <Database className="h-4 w-4" />
                  Pembroke MOU in Progress
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Healthcare Sovereignty:{" "}
                <span className="text-primary text-glow">
                  Built, Tested, Ready
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Our comprehensive clinic stack + public SaaS eliminates{" "}
                <span className="text-primary font-medium">corporate healthcare surveillance</span>{" "}
                through patient-controlled, local-first data sovereignty.
              </p>
            </div>

            {/* Competitive Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-primary/20">
                <Database className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Local-First Sovereignty</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-primary/20">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Dual-Track Design</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-primary/20">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Compliance Baked-In</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-primary/20">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">5-Pillar Expansion</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.location.href = 'mailto:james@godsimij-ai-solutions.com?subject=Pilot Discussion Request'}
              >
                Schedule Pilot Discussion
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://aura-bree.quantum-odyssey.com/', '_blank')}
              >
                Try Live Beta
              </Button>
            </div>

            {/* Beta Status */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary font-mono">$500k</div>
                <div className="text-sm text-muted-foreground">12-Month Runway</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary font-mono">Q3 2025</div>
                <div className="text-sm text-muted-foreground">Pembroke Deployment</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-primary/20">
              <img 
                src={heroImage} 
                alt="AURA-BREE Sovereign Healthcare Dashboard"
                className="w-full h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating status indicator */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-lg p-4 shadow-sovereign">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AURA-BREE Systems Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}