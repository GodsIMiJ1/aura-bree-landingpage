import { Shield, Database, Lock, Wifi, Clock, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import networkImage from "@/assets/network-sovereignty.jpg";
import encryptionImage from "@/assets/encryption-visual.jpg";

export function SolutionSection() {
  const pillars = [
    {
      icon: Database,
      title: "Local-First Architecture",
      description: "Your clinic, your data, your control. Every bit of patient information stays within the walls that protect them.",
      features: ["PostgreSQL + FastAPI", "No cloud dependencies", "Instant clinic ownership"]
    },
    {
      icon: Lock,
      title: "Cryptographic Privacy",
      description: "Mathematics protects, not just policies. Patient dignity is encoded in unbreakable cryptographic architecture.",
      features: ["mTLS authentication", "Row Level Security", "Immutable audit chains"]
    },
    {
      icon: Wifi,
      title: "Offline-First Design",
      description: "Independence from corporate infrastructure. Your clinic operates sovereignly, even when the internet fails.",
      features: ["WhisperNet mesh protocol", "Sub-second sync", "Enterprise reliability"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-primary">Sovereignty</span>, Not Surveillance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AURA-BREE liberates healthcare from surveillance capitalism through three 
            uncompromising pillars of digital sovereignty.
          </p>
        </div>

        {/* Why We Win vs Competitors */}
        <div className="mb-16 p-8 rounded-xl bg-primary/5 border border-primary/20">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-3xl font-bold">Why We Win vs <span className="text-primary">Competitors</span></h3>
            <p className="text-muted-foreground">Four decisive advantages that set AURA-BREE apart</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-xl gradient-sovereign flex items-center justify-center">
                <Database className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-primary">Local-First Sovereignty</h4>
              <p className="text-sm text-muted-foreground">vs. cloud dependence</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-xl gradient-sovereign flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-primary">Dual-Track Design</h4>
              <p className="text-sm text-muted-foreground">Clinics + SaaS simultaneously</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-xl gradient-sovereign flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-primary">Compliance Baked-In</h4>
              <p className="text-sm text-muted-foreground">Audit trails, privacy by default</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-xl gradient-sovereign flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-primary">5-Pillar Expansion</h4>
              <p className="text-sm text-muted-foreground">Proven scalability roadmap</p>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-sovereign"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl gradient-sovereign flex items-center justify-center group-hover:shadow-glow transition-glow">
                  <pillar.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {pillar.description}
              </p>
              
              <ul className="space-y-2">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Visual Demonstrations */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              See <span className="text-primary">Sovereignty</span> in Architecture
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unlike surveillance systems that funnel data to corporate servers, 
              AURA-BREE creates autonomous healthcare networks where clinics communicate 
              as equals, not subjects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span>End-to-end encrypted clinic federation</span>
              </div>
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <span>Local-first data sovereignty</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Real-time sync without corporate mediation</span>
              </div>
            </div>
            <Button variant="sovereign" size="lg">
              Explore Architecture
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={networkImage} 
              alt="Sovereign Healthcare Network Architecture"
              className="w-full rounded-xl shadow-elegant border border-primary/20"
            />
            <div className="absolute -bottom-4 -left-4 bg-card border border-primary/30 rounded-lg p-4 shadow-sovereign">
              <div className="text-sm font-medium text-primary">Decentralized • Sovereign • Secure</div>
            </div>
          </div>
        </div>

        {/* Encryption Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src={encryptionImage} 
              alt="Cryptographic Privacy Protection"
              className="w-full rounded-xl shadow-elegant border border-accent/20"
            />
            <div className="absolute -top-4 -right-4 bg-card border border-accent/30 rounded-lg p-4 shadow-sovereign">
              <div className="text-sm font-medium text-accent">Mathematics {"> "}Policies</div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold">
              <span className="text-accent">Cryptographic</span> Patient Dignity
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Where corporate systems rely on legal promises, AURA-BREE relies on 
              mathematical guarantees. Patient privacy isn't just protected by policy—it's 
              enforced by unbreakable cryptography.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-accent" />
                <span>Zero-knowledge patient data handling</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent" />
                <span>Immutable audit trails for transparency</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Patient-controlled access permissions</span>
              </div>
            </div>
            <Button variant="medical" size="lg">
              Learn Cryptographic Privacy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}