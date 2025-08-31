import { AlertTriangle, Eye, DollarSign, Server } from "lucide-react";

export function ProblemSection() {
  const architectureFeatures = [
    {
      icon: DollarSign,
      title: "Frontend Stack",
      description: "React/Next.js + TypeScript + Tailwind + Recharts. Progressive Web App (PWA) with offline-first IndexedDB caching."
    },
    {
      icon: Eye,
      title: "Backend Infrastructure", 
      description: "Supabase Postgres with Row-Level Security, TypeScript Edge Functions, Node/PM2 clinic servers with Docker packaging."
    },
    {
      icon: Server,
      title: "Security Layer",
      description: "JWS-signed client payloads, hash-chained audit logs, TLS encryption, environment-scoped secrets, nightly backups."
    },
    {
      icon: AlertTriangle,
      title: "AI Integration",
      description: "Local-first FlameRouter V2 with Ollama, LM Studio, Hugging Face, OpenAI. PII redaction layer, cloud failover."
    }
  ];

  return (
    <section className="py-24 gradient-dark">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Market Opportunity Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            First-Mover in <span className="text-primary">Healthcare Sovereignty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            $42B addiction treatment industry ripe for disruption. Privacy concerns at all-time high, 
            regulatory pressure increasing—perfect timing for patient-controlled healthcare technology.
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-xl bg-card/50 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">$42B</div>
            <div className="text-sm text-muted-foreground">Addiction Treatment Market</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">87%</div>
            <div className="text-sm text-muted-foreground">Patients Want Data Control</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-secondary/20">
            <div className="text-3xl font-bold text-secondary-foreground mb-2">↑156%</div>
            <div className="text-sm text-muted-foreground">Privacy Breach Costs</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">Zero</div>
            <div className="text-sm text-muted-foreground">True Local-First Solutions</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {architectureFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Real Status Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
            <div className="text-4xl font-bold text-primary font-mono mb-2">✅</div>
            <div className="text-muted-foreground">Public Beta PWA Live</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-accent/5 border border-accent/20">
            <div className="text-4xl font-bold text-accent font-mono mb-2">🎯</div>
            <div className="text-muted-foreground">Pembroke Clinic Pilot</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-secondary/5 border border-secondary/20">
            <div className="text-4xl font-bold text-secondary-foreground font-mono mb-2">$0</div>
            <div className="text-muted-foreground">Raised (100% Equity Available)</div>
          </div>
        </div>
      </div>
    </section>
  );
}