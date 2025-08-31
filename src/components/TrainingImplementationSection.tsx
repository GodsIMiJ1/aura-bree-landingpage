import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Shield, CheckCircle, Download, Play } from "lucide-react";

export function TrainingImplementationSection() {
  const trainingModules = [
    {
      icon: BookOpen,
      title: "AURA-BREE Companion Usage",
      description: "Complete patient app training guides and best practices",
      materials: ["User onboarding flows", "Privacy mode training", "Clinic sync procedures", "Troubleshooting guides"],
      status: "Ready"
    },
    {
      icon: Users,
      title: "MethaClinic Dashboard Operations",
      description: "Staff training for clinic management interface",
      materials: ["Check-in procedures", "Dashboard navigation", "Report generation", "Multi-user workflows"],
      status: "Ready"
    },
    {
      icon: Shield,
      title: "Data Handling & Compliance",
      description: "HIPAA compliance and audit trail management",
      materials: ["Privacy protocols", "Audit log review", "Compliance reporting", "Security procedures"],
      status: "Ready"
    },
    {
      icon: CheckCircle,
      title: "Role-Based Training",
      description: "Customized training paths for different staff roles",
      materials: ["Admin workflows", "Clinical staff procedures", "Support team guides", "Supervisor protocols"],
      status: "Ready"
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Pilot Consultation",
      description: "Initial clinic assessment and deployment planning",
      duration: "1-2 weeks"
    },
    {
      step: "2", 
      title: "Infrastructure Setup",
      description: "On-premise server installation and security configuration",
      duration: "1 week"
    },
    {
      step: "3",
      title: "Staff Training",
      description: "Comprehensive team training and certification",
      duration: "2 weeks"
    },
    {
      step: "4",
      title: "Pilot Launch",
      description: "Gradual rollout with continuous support and monitoring",
      duration: "4-6 weeks"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Complete <span className="text-primary">Implementation</span> Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just deliver technology—we ensure your team is fully prepared 
            to deploy healthcare sovereignty with confidence and compliance.
          </p>
        </div>

        {/* Training Materials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Training Materials <span className="text-primary">Available Now</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {trainingModules.map((module, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-sovereign flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <span className="text-sm px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                        {module.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {module.materials.map((material, materialIndex) => (
                      <li key={materialIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{material}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Documentation
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Video Guides
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-primary">Implementation</span> Timeline
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-sovereign flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Support CTA */}
        <div className="text-center space-y-8 p-8 rounded-xl bg-primary/5 border border-primary/20">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">
              Ready for <span className="text-primary">Deployment</span>?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete training materials, implementation guides, and ongoing support 
              ensure your clinic's successful transition to healthcare sovereignty.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default"
              size="lg"
              onClick={() => window.location.href = 'mailto:james@godsimij-ai-solutions.com?subject=Implementation Support Request'}
            >
              Schedule Implementation Consultation
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'mailto:james@godsimij-ai-solutions.com?subject=Training Materials Request'}
            >
              Request Training Materials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}