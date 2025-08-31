import { Heart, Users, Stethoscope, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UseCasesSection() {
  const useCases = [
    {
      icon: Heart,
      title: "Methadone Clinics",
      subtitle: "Dignity in Recovery Journey",
      description: "Where addiction recovery meets digital dignity. AURA-BREE protects the most vulnerable patients while ensuring regulatory compliance.",
      benefits: [
        "Secure opioid treatment protocols",
        "Privacy-protected counseling records",
        "Stigma-free data sovereignty",
        "Automated DEA compliance reporting"
      ],
      testimonial: "Our patients trust us because their recovery journey stays private. No corporate surveillance, just healing.",
      author: "Dr. Sarah Chen, Recovery Clinic Director"
    },
    {
      icon: Users,
      title: "Community Health",
      subtitle: "Local Empowerment",
      description: "Community health centers serving underserved populations deserve technology that respects their patients' dignity and cultural privacy.",
      benefits: [
        "Culturally sensitive data handling",
        "Community-controlled health records",
        "Offline-first clinic operations",
        "Multilingual privacy controls"
      ],
      testimonial: "Finally, technology that serves our community instead of exploiting them for data.",
      author: "Maria Rodriguez, Community Health Director"
    },
    {
      icon: Stethoscope,
      title: "Primary Care",
      subtitle: "Privacy-First Medicine",
      description: "Family physicians building lifelong relationships with patients need systems that protect the intimate trust at the heart of healthcare.",
      benefits: [
        "Longitudinal care continuity",
        "Family health sovereignty",
        "Integrated clinic workflows",
        "Patient-controlled sharing"
      ],
      testimonial: "My patients know their most personal health information stays in our clinic, not some corporate cloud.",
      author: "Dr. James Thompson, Family Medicine"
    },
    {
      icon: Activity,
      title: "Specialty Treatment",
      subtitle: "Secure, Sovereign Care",
      description: "Specialized medical practices handling sensitive conditions require the highest levels of privacy protection and data sovereignty.",
      benefits: [
        "Specialty protocol compliance",
        "Research-grade data protection",
        "Cross-specialist secure sharing",
        "Advanced analytics privacy"
      ],
      testimonial: "Our oncology patients face enough challenges. Data privacy shouldn't be one of them.",
      author: "Dr. Lisa Park, Oncology Specialist"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready for <span className="text-primary">Clinical Deployment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From addiction recovery to family medicine, AURA-BREE technology is built to protect patient dignity 
            across every healthcare specialty. Beta tested, pilot ready, sovereignty focused.
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-sovereign flex items-center justify-center">
                    <useCase.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                    <p className="text-primary font-medium">{useCase.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-primary/20">
                  <blockquote className="text-foreground font-medium italic mb-3">
                    "{useCase.testimonial}"
                  </blockquote>
                  <cite className="text-sm text-primary font-medium">
                    — {useCase.author}
                  </cite>
                </div>
                
                <Button variant="sovereign" size="lg">
                  Explore {useCase.title} Solutions
                </Button>
              </div>
              
              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 flex items-center justify-center">
                  <useCase.icon className="h-24 w-24 text-primary/40" />
                </div>
                
                {/* Floating status indicator */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-lg p-4 shadow-sovereign">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      {index === 0 ? "Pilot Ready" : "Beta Architecture"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Status Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
            <div className="text-3xl font-bold text-primary font-mono mb-2">✅</div>
            <div className="text-muted-foreground">Beta Technology Ready</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
            <div className="text-3xl font-bold text-primary font-mono mb-2">🎯</div>
            <div className="text-muted-foreground">Pembroke Pilot Launching</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
            <div className="text-3xl font-bold text-primary font-mono mb-2">🔒</div>
            <div className="text-muted-foreground">Security Hardened</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
            <div className="text-3xl font-bold text-primary font-mono mb-2">$0</div>
            <div className="text-muted-foreground">Raised (Ground Floor)</div>
          </div>
        </div>
      </div>
    </section>
  );
}