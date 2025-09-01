import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Shield, Database, ExternalLink, Play } from "lucide-react";

export function TechnologyDemoSection() {
  const demos = [
    {
      icon: Monitor,
      title: "Live Beta PWA",
      description: "Functional AURA-BREE companion app - try it now",
      status: "Live",
      link: "https://aura-bree.quantum-odyssey.com/",
      features: ["Local-first operation", "Clinic network detection", "Privacy mode", "Audit logging"]
    },
    {
      icon: Smartphone,
      title: "MethaClinic Dashboard",
      description: "Complete clinic management interface preview",
      status: "Live",
      link: "https://methaclinic.quantum-odyssey.com/",
      features: ["Check-in workflows", "Compliance reporting", "Staff training", "Data exports"]
    },
    {
      icon: Shield,
      title: "Security Architecture",
      description: "Real technical implementation and audit trails",
      status: "Deployed",
      link: "#",
      features: ["Row-level security", "Encryption layers", "Audit chains", "Access controls"]
    }
  ];

  return (
    <section className="py-24 gradient-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            See <span className="text-primary">Sovereignty</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just read about healthcare sovereignty—experience it. Live demos, 
            real interfaces, and working technology you can test today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {demos.map((demo, index) => (
            <Card key={index} className="group bg-card/50 border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-lg hover:shadow-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-sovereign flex items-center justify-center">
                    <demo.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                    {demo.status}
                  </span>
                </div>
                <CardTitle className="text-lg">{demo.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{demo.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {demo.link !== "#" && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary/10"
                    onClick={() => window.open(demo.link, '_blank')}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Try Live Demo
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                )}
                
                {demo.link === "#" && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full" 
                    disabled
                  >
                    <Monitor className="h-4 w-4 mr-2" />
                    Available in Pilot
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Diagrams */}
        <div className="text-center space-y-8 p-8 rounded-xl bg-card/30 border border-primary/20">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">
              <span className="text-primary">Technical</span> Deep Dive
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real architecture diagrams, security implementations, and technical documentation 
              available for qualified partners and pilot participants.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-background/50 border border-muted">
              <Database className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Data Flow Architecture</h4>
              <p className="text-sm text-muted-foreground">Local-first data sovereignty with secure clinic federation</p>
            </div>
            <div className="p-6 rounded-lg bg-background/50 border border-muted">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Security Implementation</h4>
              <p className="text-sm text-muted-foreground">Row-level security, audit trails, and encryption layers</p>
            </div>
            <div className="p-6 rounded-lg bg-background/50 border border-muted">
              <Monitor className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Deployment Stack</h4>
              <p className="text-sm text-muted-foreground">Complete clinic installation and configuration guides</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.open('https://clinical-canon.quantum-odyssey.com/', '_blank')}
            >
              View Clinical Documentation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'mailto:james@godsimij-ai-solutions.com?subject=Technical Documentation Request'}
            >
              Request Technical Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}