import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, Users } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

// Validation schemas
const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  organization: z.string().min(1, "Organization is required").max(100),
  email: z.string().email("Invalid email address").max(254),
  phone: z.string().regex(/^[\+]?[\d\s\-\(\)]{10,}$/, "Invalid phone number").optional().or(z.literal("")),
  needs: z.string().min(10, "Please describe your needs in more detail").max(1000),
});

const investmentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  organization: z.string().min(1, "Organization/Fund is required").max(100),
  email: z.string().email("Invalid email address").max(254),
  interests: z.string().min(10, "Please describe your interests in more detail").max(1000),
});

type DemoFormData = z.infer<typeof demoFormSchema>;
type InvestmentFormData = z.infer<typeof investmentFormSchema>;

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
};

export function DemoForm() {
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    needs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<DemoFormData>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Sanitize inputs
      const sanitizedData = {
        ...formData,
        name: sanitizeInput(formData.name),
        organization: sanitizeInput(formData.organization),
        email: sanitizeInput(formData.email),
        phone: formData.phone ? sanitizeInput(formData.phone) : "",
        needs: sanitizeInput(formData.needs),
      };

      // Validate
      const validatedData = demoFormSchema.parse(sanitizedData);

      // Simulate form submission (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Demo Request Submitted",
        description: "We'll contact you within 24 hours to schedule your sovereignty demonstration.",
      });

      // Reset form
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        needs: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<DemoFormData> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof DemoFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 rounded-xl bg-card border border-primary/20 shadow-sovereign">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Building className="h-5 w-5 text-primary" />
        Schedule Your Sovereignty Demo
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Your Name"
              className="bg-background/50"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              maxLength={100}
              required
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <Input
              placeholder="Organization"
              className="bg-background/50"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              maxLength={100}
              required
            />
            {errors.organization && <p className="text-sm text-red-500 mt-1">{errors.organization}</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-background/50"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              maxLength={254}
              required
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-background/50"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <Textarea
            placeholder="Tell us about your clinic's needs and current challenges..."
            rows={4}
            className="bg-background/50"
            value={formData.needs}
            onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
            maxLength={1000}
            required
          />
          {errors.needs && <p className="text-sm text-red-500 mt-1">{errors.needs}</p>}
        </div>
        <Button variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Request Demo Access"}
        </Button>
      </form>
    </div>
  );
}

export function InvestmentForm() {
  const [formData, setFormData] = useState<InvestmentFormData>({
    name: "",
    organization: "",
    email: "",
    interests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<InvestmentFormData>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Sanitize inputs
      const sanitizedData = {
        ...formData,
        name: sanitizeInput(formData.name),
        organization: sanitizeInput(formData.organization),
        email: sanitizeInput(formData.email),
        interests: sanitizeInput(formData.interests),
      };

      // Validate
      const validatedData = investmentFormSchema.parse(sanitizedData);

      // Simulate form submission (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Investment Inquiry Submitted",
        description: "Our team will review your inquiry and respond within 48 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        organization: "",
        email: "",
        interests: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<InvestmentFormData> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof InvestmentFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 rounded-xl bg-card border border-accent/20">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Users className="h-5 w-5 text-accent" />
        Investment & Partnership Inquiries
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Contact Name"
              className="bg-background/50"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              maxLength={100}
              required
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <Input
              placeholder="Organization/Fund"
              className="bg-background/50"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              maxLength={100}
              required
            />
            {errors.organization && <p className="text-sm text-red-500 mt-1">{errors.organization}</p>}
          </div>
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-background/50"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            maxLength={254}
            required
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <Textarea
            placeholder="Describe your investment interests and partnership opportunities..."
            rows={3}
            className="bg-background/50"
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            maxLength={1000}
            required
          />
          {errors.interests && <p className="text-sm text-red-500 mt-1">{errors.interests}</p>}
        </div>
        <Button variant="medical" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Connect for Investment Discussion"}
        </Button>
      </form>
    </div>
  );
}