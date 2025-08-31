import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Clock, ExternalLink } from "lucide-react";

export function DevelopmentStatusSection() {
  const liveFeatures = [
    {
      title: "Public Beta PWA",
      description: "Fully functional patient companion app",
      action: "Try Now",
      link: "https://sovereign-aura-bree-aga.netlify.app/"
    },
    {
      title: "MethaClinic Platform", 
      description: "Complete clinic management interface",
      action: "Pilot Ready",
      link: "#"
    },
    {
      title: "Security Implementation",
      description: "Production-grade encryption and audit trails",
      action: "Deployed",
      link: "#"
    },
    {
      title: "Training Documentation",
      description: "Complete implementation and usage guides",
      action: "Available",
      link: "#"
    },
    {
      title: "Clinic Deployment Stack",
      description: "On-premise installation and configuration",
      action: "Ready",
      link: "#"
    }
  ];

  const nextMilestones = [
    {
      title: "Pembroke Clinic Pilot Launch",
      description: "Real-world deployment with committed partner clinic",
      timeline: "Q3 2025",
      status: "In Progress"
    },
    {
      title: "Beta Feedback Integration", 
      description: "User feedback implementation and UX improvements",
      timeline: "Q4 2025",
      status: "Ongoing"
    },
    {
      title: "Android/iOS Native Apps",
      description: "Mobile app store deployment for public SaaS",
      timeline: "Q4 2025",
      status: "Development"
    },
    {
      title: "Multi-Clinic Federation",
      description: "Secure clinic-to-clinic data sharing protocols",
      timeline: "Q1 2026",
      status: "Planned"
    },
    {
      title: "Third-Party Security Audit",
      description: "Independent security assessment and certification",
      timeline: "Q1 2026",
      status: "Planned"
    }
  ];

  return (
    <section className="py-24 gradient-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Honest <span className="text-primary">Status</span> Update
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparency builds trust. Here's exactly where we are in development 
            and what's coming next in our healthcare sovereignty journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* What's Live */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary" />
              What's <span className="text-primary">Live</span>
            </h3>
            
            <div className="space-y-4">
              {liveFeatures.map((feature, index) => (
                <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-primary">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                      <div className="ml-4">
                        {feature.link !== "#" ? (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(feature.link, '_blank')}
                          >
                            {feature.action}
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                            {feature.action}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What's Next */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Target className="h-6 w-6 text-accent" />
              What's <span className="text-accent">Next</span>
            </h3>
            
            <div className="space-y-4">
              {nextMilestones.map((milestone, index) => (
                <Card key={index} className="bg-card/50 border-accent/20 hover:border-accent/40 transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-accent">{milestone.title}</h4>
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">
                            {milestone.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{milestone.description}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{milestone.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-16 text-center space-y-8 p-8 rounded-xl bg-card/30 border border-primary/20">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">
              Our <span className="text-primary">Commitment</span> to Transparency
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Unlike vaporware healthcare startups, we show you working technology. 
              Every claim is backed by demonstrable code, real partnerships, and honest timelines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-background/50 border border-muted">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Working Technology</h4>
              <p className="text-sm text-muted-foreground">Not promises—actual deployed systems you can test</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-muted">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Real Partnerships</h4>
              <p className="text-sm text-muted-foreground">Committed clinic pilot with genuine MOUs in progress</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-muted">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Honest Timelines</h4>
              <p className="text-sm text-muted-foreground">Conservative estimates backed by current progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}