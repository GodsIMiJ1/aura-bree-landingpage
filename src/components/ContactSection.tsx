import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Building, Users, Stethoscope } from "lucide-react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  
  const [demoForm, setDemoForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    needs: ''
  });

  const [investmentForm, setInvestmentForm] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });

  const demoValidation = useFormValidation({
    name: { required: true, minLength: 2, maxLength: 100 },
    organization: { required: true, minLength: 2, maxLength: 100 },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    needs: { required: true, minLength: 10, maxLength: 1000 }
  });

  const investmentValidation = useFormValidation({
    name: { required: true, minLength: 2, maxLength: 100 },
    organization: { required: true, minLength: 2, maxLength: 100 },
    email: { required: true, email: true },
    message: { required: true, minLength: 10, maxLength: 1000 }
  });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedData = demoValidation.sanitizeFormData(demoForm);
    
    if (demoValidation.validateForm(sanitizedData)) {
      // In a real app, this would send to your backend
      toast({
        title: "Pilot Discussion Requested",
        description: "We'll contact you within 24 hours to schedule your pilot discussion.",
      });
      setDemoForm({ name: '', organization: '', email: '', phone: '', needs: '' });
      demoValidation.clearErrors();
    }
  };

  const handleInvestmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedData = investmentValidation.sanitizeFormData(investmentForm);
    
    if (investmentValidation.validateForm(sanitizedData)) {
      // In a real app, this would send to your backend
      toast({
        title: "Investment Inquiry Submitted",
        description: "Our founder will review your inquiry and respond within 48 hours.",
      });
      setInvestmentForm({ name: '', organization: '', email: '', message: '' });
      investmentValidation.clearErrors();
    }
  };

  return (
    <section className="py-24 gradient-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            From Beta to <span className="text-primary">Clinical Reality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to pilot revolutionary healthcare sovereignty technology? Join the movement from surveillance to sovereignty.
          </p>
        </div>

        {/* Funding Ask Section */}
        <div className="mb-16 p-8 rounded-xl bg-primary/5 border border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">
              <span className="text-primary">$500k Seed Round</span> - 12-Month Runway
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ground floor opportunity with working technology, committed pilot, and clear expansion path
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Clinic</div>
                <div className="text-sm text-muted-foreground">Deployments & Scaling</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Android</div>
                <div className="text-sm text-muted-foreground">SaaS Launch & Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Compliance</div>
                <div className="text-sm text-muted-foreground">Certification & Auditing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Infrastructure</div>
                <div className="text-sm text-muted-foreground">Hardware & Security</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Founder Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">James Derek Ingersoll</div>
                    <div className="text-sm text-muted-foreground">Founder & CEO, The Ghost King</div>
                    <a href="mailto:James@godsimij-ai-solutions.com" className="text-primary hover:text-primary-glow transition-glow">
                      James@godsimij-ai-solutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Direct Founder Line</div>
                    <a href="tel:+16133189711" className="text-primary hover:text-primary-glow transition-glow">
                      +1 (613) 318-9711
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Beta Feedback & Media</div>
                    <a href="mailto:Jimi@godsimij-ai-solutions.com" className="text-accent hover:text-accent/80 transition-glow">
                      Jimi@godsimij-ai-solutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Beta Access */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Live Beta Access</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-primary/20">
                  <Building className="h-4 w-4 text-primary" />
                  <span className="text-sm">Try Live PWA Beta</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-accent/20">
                  <Stethoscope className="h-4 w-4 text-accent" />
                  <span className="text-sm">Clinic Pilot Programs</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-secondary/20">
                  <Users className="h-4 w-4 text-secondary-foreground" />
                  <span className="text-sm">Investment Discussions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pilot Discussion Form */}
            <div className="p-8 rounded-xl bg-card border border-primary/20 shadow-sovereign">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Schedule Pilot Discussion
              </h3>
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background/50"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm(prev => ({ ...prev, name: e.target.value }))}
                    />
                    {demoValidation.errors.name && (
                      <p className="text-destructive text-sm mt-1">{demoValidation.errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input 
                      placeholder="Organization/Clinic" 
                      className="bg-background/50"
                      value={demoForm.organization}
                      onChange={(e) => setDemoForm(prev => ({ ...prev, organization: e.target.value }))}
                    />
                    {demoValidation.errors.organization && (
                      <p className="text-destructive text-sm mt-1">{demoValidation.errors.organization}</p>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-background/50"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm(prev => ({ ...prev, email: e.target.value }))}
                    />
                    {demoValidation.errors.email && (
                      <p className="text-destructive text-sm mt-1">{demoValidation.errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="bg-background/50"
                      value={demoForm.phone}
                      onChange={(e) => setDemoForm(prev => ({ ...prev, phone: e.target.value }))}
                    />
                    {demoValidation.errors.phone && (
                      <p className="text-destructive text-sm mt-1">{demoValidation.errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell us about your clinic's size, current challenges, and interest in healthcare sovereignty..."
                    rows={4}
                    className="bg-background/50"
                    value={demoForm.needs}
                    onChange={(e) => setDemoForm(prev => ({ ...prev, needs: e.target.value }))}
                  />
                  {demoValidation.errors.needs && (
                    <p className="text-destructive text-sm mt-1">{demoValidation.errors.needs}</p>
                  )}
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Request Pilot Discussion
                </Button>
              </form>
            </div>

            {/* Investment Inquiry Form */}
            <div className="p-8 rounded-xl bg-card border border-accent/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Founder Meeting & Investment Discussion
              </h3>
              <form onSubmit={handleInvestmentSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Contact Name" 
                      className="bg-background/50"
                      value={investmentForm.name}
                      onChange={(e) => setInvestmentForm(prev => ({ ...prev, name: e.target.value }))}
                    />
                    {investmentValidation.errors.name && (
                      <p className="text-destructive text-sm mt-1">{investmentValidation.errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input 
                      placeholder="Organization/Fund" 
                      className="bg-background/50"
                      value={investmentForm.organization}
                      onChange={(e) => setInvestmentForm(prev => ({ ...prev, organization: e.target.value }))}
                    />
                    {investmentValidation.errors.organization && (
                      <p className="text-destructive text-sm mt-1">{investmentValidation.errors.organization}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-background/50"
                    value={investmentForm.email}
                    onChange={(e) => setInvestmentForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                  {investmentValidation.errors.email && (
                    <p className="text-destructive text-sm mt-1">{investmentValidation.errors.email}</p>
                  )}
                </div>
                <div>
                  <Textarea 
                    placeholder="Describe your investment interests, funding focus, and questions about the healthcare sovereignty opportunity..."
                    rows={3}
                    className="bg-background/50"
                    value={investmentForm.message}
                    onChange={(e) => setInvestmentForm(prev => ({ ...prev, message: e.target.value }))}
                  />
                  {investmentValidation.errors.message && (
                    <p className="text-destructive text-sm mt-1">{investmentValidation.errors.message}</p>
                  )}
                </div>
                <Button type="submit" variant="medical" size="lg" className="w-full">
                  Schedule Founder Meeting
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Beta Program CTA */}
        <div className="mt-16 text-center p-8 rounded-xl bg-gradient-sovereign border border-primary/30">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ground Floor Healthcare Revolution
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Working technology, Pembroke pilot in progress, proven architecture. 
            Seeking $500k seed for 12-month runway—ground floor opportunity for the right partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90">
              Access Live Beta
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Founder Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}