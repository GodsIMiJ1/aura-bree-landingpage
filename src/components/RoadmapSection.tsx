import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RoadmapSection() {
  const clinicTimeline = [
    {
      date: "Q3 2025",
      title: "Pilot: Pembroke Clinic",
      description: "Deploy on-prem AURA-BREE AGA (sovereign) + MethaClinic Dashboard (AI Secretary) + Training Platform (AI Tutor). Local-first models with clinic Wi-Fi detection and audit trails.",
      icon: "🏥"
    },
    {
      date: "Q4 2025", 
      title: "Production Hardening",
      description: "Compliance packet (HIPAA/SOC-lite), nightly encrypted backups, provider failover (Ollama → LM Studio → HF/OpenAI), 7-day metrics (p50/p95 latency, redactions, uptime).",
      icon: "🛡️"
    },
    {
      date: "Q1 2026",
      title: "Multi-Clinic Roll-in (Ontario)",
      description: "Add role-based dashboards, multi-tenant safeguards, WhisperNet pilot for offline queueing, secure MOU expansion.",
      icon: "🧭"
    },
    {
      date: "Q2 2026",
      title: "Specialized Modules", 
      description: "Youth/Teen flows, trauma-informed protocols for Military & Welfare contexts, clinic KPI analytics.",
      icon: "🎖️"
    },
    {
      date: "Q3 2026",
      title: "Elder Care Integrations",
      description: "Senior-home routines, caregiver portals, gentle-mode UX, fallbacks for low-connectivity facilities.",
      icon: "👴"
    }
  ];

  const saasTimeline = [
    {
      date: "Q4 2025",
      title: "Closed Beta (Android)",
      description: "Google Play listing prep + invite-only beta (12–20 testers). Feature parity where safe; clinic syncing disabled.",
      icon: "📱"
    },
    {
      date: "Q1 2026",
      title: "Open Beta (Canada)",
      description: "Secure profiles, mood tracking, journaling, optional community resources. Clear consent screens.",
      icon: "🔐"
    },
    {
      date: "Q2 2026",
      title: "Feature Growth",
      description: "Guided programs, streaks, insights. Optional premium tiers. No PHI mixing with clinic systems.",
      icon: "📊"
    },
    {
      date: "Q3 2026", 
      title: "Internationalization",
      description: "Localization, accessibility upgrades, data residency options.",
      icon: "🌍"
    }
  ];

  const clinicStack = [
    {
      title: "AURA-BREE AGA (Sovereign)",
      description: "On-device companion; local-first with automatic clinic-network detection and privacy mode."
    },
    {
      title: "MethaClinic Dashboard (AI Secretary)",
      description: "Check-ins, audit trails, provider health, exports; real-time redaction + compliance view."
    },
    {
      title: "Training Platform (AI Tutor)",
      description: "Staff role-play, scenario drills, scoring & progress tracking; curriculum alignment."
    }
  ];

  const pillars = [
    {
      icon: "💊",
      title: "Addiction Recovery",
      description: "Flagship MethaClinic stack for methadone & recovery centers—with full audit/compliance."
    },
    {
      icon: "🧒",
      title: "Youth Mental Health", 
      description: "Child & teen AGA modes, guardian dashboards, school-safe policies."
    },
    {
      icon: "🎖️",
      title: "Military & Veterans",
      description: "Trauma-informed flows, crisis-check tools, resource routing, offline resilience."
    },
    {
      icon: "🤝",
      title: "Welfare & Social Support",
      description: "Low-friction onboarding, accessible guidance, case-worker bridges."
    },
    {
      icon: "👴",
      title: "Elder Care & Retirement",
      description: "Gentle UX, routine reminders, caregiver views, low-connectivity modes."
    }
  ];

  return (
    <section className="py-24 gradient-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Roadmap & <span className="text-primary">Expansion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From clinic sovereignty to global deployment—see how we're scaling healthcare freedom.
          </p>
        </div>

        {/* Deployment Tracks Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="clinic" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="clinic">Clinic Sovereign</TabsTrigger>
              <TabsTrigger value="saas">Public SaaS</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clinic" className="space-y-8">
              {/* Timeline */}
              <div className="relative">
                {/* Desktop Timeline */}
                <div className="hidden md:block">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20"></div>
                  <div className="grid grid-cols-5 gap-4">
                    {clinicTimeline.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-glow"></div>
                        <Card className="mt-8 bg-card/50 border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-lg hover:shadow-primary/20">
                          <CardHeader className="pb-3">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-2">
                              {item.date}
                            </div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-6">
                  {clinicTimeline.map((item, index) => (
                    <Card key={index} className="bg-card/50 border-primary/20">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-2">
                              {item.date}
                            </div>
                            <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Clinic Stack Explainer */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-center mb-8">Clinic Stack Components</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {clinicStack.map((item, index) => (
                    <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-smooth">
                      <CardHeader>
                        <CardTitle className="text-primary text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="saas" className="space-y-8">
              {/* SaaS Timeline */}
              <div className="relative">
                {/* Desktop Timeline */}
                <div className="hidden md:block">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20"></div>
                  <div className="grid grid-cols-4 gap-4">
                    {saasTimeline.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-glow"></div>
                        <Card className="mt-8 bg-card/50 border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-lg hover:shadow-primary/20">
                          <CardHeader className="pb-3">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-2">
                              {item.date}
                            </div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-6">
                  {saasTimeline.map((item, index) => (
                    <Card key={index} className="bg-card/50 border-primary/20">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-2">
                              {item.date}
                            </div>
                            <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Five Pillars of Expansion */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold">The Five Pillars of <span className="text-primary">Expansion</span></h3>
            <p className="text-muted-foreground">One sovereign core, tailored for every community we serve.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="group bg-card/50 border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-lg hover:shadow-primary/20">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{pillar.icon}</div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dual CTA Banner */}
        <div className="text-center space-y-8 p-8 rounded-xl bg-primary/5 border border-primary/20">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Choose Your Path to <span className="text-primary">Sovereign Care</span></h3>
            <p className="text-muted-foreground">Clinics deploy locally. Individuals join the public beta.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default"
              size="lg"
              className="min-w-48"
              onClick={() => window.location.href = 'mailto:james@godsimij-ai-solutions.com?subject=Clinic Pilot Inquiry'}
            >
              Clinic Pilot Inquiry
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('https://sovereign-aura-bree-aga.netlify.app/', '_blank')}
                className="border-primary/40 text-primary hover:bg-primary/10"
              >
                Beta AURA-BREE
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('https://aura-bree-mobile.netlify.app/', '_blank')}
                className="border-primary/40 text-primary hover:bg-primary/10"
              >
                Beta SaaS AURA-BREE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}