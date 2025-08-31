import { Database, Shield, Zap, Network, Code, Lock } from "lucide-react";

export function TechnicalSpecsSection() {
  const specs = [
    {
      category: "Backend Architecture",
      icon: Database,
      items: [
        "PostgreSQL with Row Level Security (RLS)",
        "FastAPI with async/await performance",
        "Zero-dependency local deployment",
        "Immutable audit trail system"
      ]
    },
    {
      category: "Security & Authentication",
      icon: Shield,
      items: [
        "mTLS mutual authentication",
        "Cryptographic patient identity",
        "Hardware security module support",
        "FIPS 140-2 Level 3 compliance"
      ]
    },
    {
      category: "Network Protocol",
      icon: Network,
      items: [
        "WhisperNet mesh federation",
        "End-to-end encrypted channels",
        "Byzantine fault tolerance",
        "Automatic network healing"
      ]
    },
    {
      category: "Performance",
      icon: Zap,
      items: [
        "Sub-second sync latency",
        "Million+ records per clinic",
        "Real-time conflict resolution",
        "Zero-downtime updates"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built on <span className="text-primary">Sovereign Principles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every line of code, every protocol, every decision architected for healthcare independence. 
            Technical excellence in service of human dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specs.map((spec, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-sovereign group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg gradient-sovereign flex items-center justify-center group-hover:shadow-glow transition-glow">
                  <spec.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-foreground">
                {spec.category}
              </h3>
              
              <ul className="space-y-3">
                {spec.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Enterprise <span className="text-accent">Architecture</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AURA-BREE's technical foundation combines battle-tested enterprise technologies 
              with cutting-edge sovereignty protocols. Every component chosen for reliability, 
              security, and independence.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card/50 border border-primary/20">
                <Code className="h-5 w-5 text-primary mb-2" />
                <div className="font-medium text-sm">Open Architecture</div>
                <div className="text-xs text-muted-foreground">No vendor lock-in</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 border border-accent/20">
                <Lock className="h-5 w-5 text-accent mb-2" />
                <div className="font-medium text-sm">Privacy by Design</div>
                <div className="text-xs text-muted-foreground">Mathematical guarantees</div>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-xl bg-card border border-primary/20 font-mono text-sm">
            <div className="mb-4 text-primary font-semibold">AURA-BREE System Status</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Database Engine:</span>
                <span className="text-primary">PostgreSQL 15.x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">API Framework:</span>
                <span className="text-primary">FastAPI 0.104+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Security Layer:</span>
                <span className="text-primary">mTLS + RLS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network Protocol:</span>
                <span className="text-primary">WhisperNet v2.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sync Latency:</span>
                <span className="text-primary">&lt; 500ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Uptime SLA:</span>
                <span className="text-primary">99.99%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}