import Link from "next/link";

// Logo Component - Metabase-style dot grid
function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="8" cy="8" r="3" fill="#509ee3" />
      <circle cx="16" cy="8" r="3" fill="#509ee3" />
      <circle cx="24" cy="8" r="3" fill="#509ee3" opacity="0.5" />
      <circle cx="8" cy="16" r="3" fill="#509ee3" />
      <circle cx="16" cy="16" r="3" fill="#509ee3" opacity="0.7" />
      <circle cx="24" cy="16" r="3" fill="#509ee3" />
      <circle cx="8" cy="24" r="3" fill="#509ee3" opacity="0.5" />
      <circle cx="16" cy="24" r="3" fill="#509ee3" />
      <circle cx="24" cy="24" r="3" fill="#509ee3" />
    </svg>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e0e4e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-semibold text-[#2e353b]">Prompt Clarity</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-[#74838f] hover:text-[#509ee3] transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-[#74838f] hover:text-[#509ee3] transition-colors">
              How it Works
            </Link>
            <Link href="https://github.com/lucidgeo/lucidgeo" className="text-[#74838f] hover:text-[#509ee3] transition-colors">
              Docs
            </Link>
            <Link href="#pricing" className="text-[#74838f] hover:text-[#509ee3] transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/lucidgeo/lucidgeo"
              className="hidden sm:flex items-center gap-2 text-[#74838f] hover:text-[#2e353b] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </Link>
            <Link
              href="https://github.com/lucidgeo/lucidgeo"
              className="bg-[#509ee3] text-white px-5 py-2 rounded-lg font-medium btn-primary hover:bg-[#4a90d9]"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
      {/* Decorative line chart elements */}
      <div className="hero-decoration top-32 left-[5%]">
        <svg width="200" height="150" viewBox="0 0 200 150" className="text-[#509ee3]">
          <path d="M10 100 L40 80 L70 90 L100 50 L130 70 L160 30 L190 40" stroke="currentColor" strokeWidth="2" fill="none" className="chart-line" />
        </svg>
      </div>
      <div className="hero-decoration bottom-20 right-[5%]">
        <svg width="180" height="120" viewBox="0 0 180 120" className="text-[#88bf4d]">
          <path d="M10 80 L50 60 L90 70 L130 40 L170 50" stroke="currentColor" strokeWidth="2" fill="none" className="chart-line" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Open Source Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e6f4ea] text-[#1e7e34] text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Open Source
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2e353b] leading-tight">
            Open source{" "}
            <span className="text-[#509ee3]">LLM visibility</span>
            {" "}tracking
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-[#74838f] max-w-3xl mx-auto leading-relaxed">
            Monitor how your brand appears in ChatGPT, Claude, Perplexity, and other AI assistants.
            Self-host it, customize it, own your data. No vendor lock-in.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://github.com/lucidgeo/lucidgeo"
              className="w-full sm:w-auto bg-[#509ee3] text-white px-8 py-3 rounded-lg font-medium text-lg btn-primary hover:bg-[#4a90d9] flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto bg-white text-[#2e353b] px-8 py-3 rounded-lg font-medium text-lg btn-secondary hover:border-[#509ee3]"
            >
              See how it works
            </Link>
          </div>

          {/* Social Proof */}
          <p className="mt-6 text-sm text-[#949aab] flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-[#88bf4d]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Deploy in minutes with Docker
          </p>
        </div>

        {/* Product Screenshot */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-xl screenshot-shadow border border-[#e0e4e9] overflow-hidden max-w-5xl mx-auto">
            {/* Browser Chrome */}
            <div className="bg-[#f9fbfc] px-4 py-3 flex items-center gap-2 border-b border-[#e0e4e9]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-md px-4 py-1.5 text-sm text-[#74838f] border border-[#e0e4e9] w-72 text-center">
                  localhost:3000/dashboard
                </div>
              </div>
            </div>
            {/* Dashboard Preview */}
            <div className="p-6 bg-[#f9fbfc]">
              <div className="flex gap-6">
                {/* Sidebar */}
                <div className="w-48 bg-white rounded-lg border border-[#e0e4e9] p-4 hidden lg:block">
                  <div className="flex items-center gap-2 mb-6">
                    <Logo className="w-6 h-6" />
                    <span className="font-semibold text-[#2e353b]">Netbird</span>
                  </div>
                  <div className="space-y-1">
                    {["Overview", "Sources", "Prompts", "On-Page", "Off-Page"].map((item, i) => (
                      <div key={i} className={`px-3 py-2 rounded text-sm ${i === 0 ? "bg-[#e6f0fa] text-[#509ee3] font-medium" : "text-[#74838f]"}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 space-y-4">
                  {/* Visibility Chart */}
                  <div className="bg-white rounded-lg p-5 border border-[#e0e4e9]">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-[#2e353b]">Visibility</h3>
                        <p className="text-sm text-[#949aab]">Percentage of chats mentioning each brand</p>
                      </div>
                      <span className="text-sm text-[#74838f] bg-[#f9fbfc] px-3 py-1 rounded border border-[#e0e4e9]">Last 7 days</span>
                    </div>
                    <div className="h-40 flex items-end gap-1 relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[100, 75, 50, 25, 0].map((val) => (
                          <div key={val} className="flex items-center gap-2">
                            <span className="text-xs text-[#949aab] w-8">{val}%</span>
                            <div className="flex-1 border-b border-[#e0e4e9] border-dashed"></div>
                          </div>
                        ))}
                      </div>
                      {/* Chart lines */}
                      <svg className="absolute inset-0 ml-10" viewBox="0 0 400 160" preserveAspectRatio="none">
                        <path d="M0 120 Q50 100 100 80 T200 60 T300 40 T400 50" stroke="#509ee3" strokeWidth="2" fill="none" />
                        <path d="M0 140 Q50 130 100 120 T200 100 T300 110 T400 90" stroke="#88bf4d" strokeWidth="2" fill="none" />
                        <path d="M0 150 Q50 145 100 140 T200 130 T300 135 T400 120" stroke="#f9a825" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-4 mt-4 justify-center">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-[#509ee3]"></div>
                        <span className="text-[#74838f]">Cloudflare</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-[#88bf4d]"></div>
                        <span className="text-[#74838f]">Your Brand</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-[#f9a825]"></div>
                        <span className="text-[#74838f]">Competitor</span>
                      </div>
                    </div>
                  </div>
                  {/* Brand Rankings */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-5 border border-[#e0e4e9]">
                      <h3 className="font-semibold text-[#2e353b] mb-4">Brands</h3>
                      <div className="space-y-3">
                        {[
                          { name: "Cloudflare", visibility: "70.8%", change: "+1.1%", rank: 1 },
                          { name: "Tailscale", visibility: "40.3%", change: "-17.9%", rank: 2 },
                          { name: "Zscaler", visibility: "40.3%", change: "+10.8%", rank: 3 },
                        ].map((brand) => (
                          <div key={brand.name} className="flex items-center gap-3">
                            <span className="text-sm font-medium text-[#74838f] w-4">{brand.rank}</span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-[#2e353b]">{brand.name}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-[#2e353b]">{brand.visibility}</span>
                                  <span className={`text-xs ${brand.change.startsWith("+") ? "text-[#88bf4d]" : "text-[#ef5350]"}`}>
                                    {brand.change}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5 border border-[#e0e4e9]">
                      <h3 className="font-semibold text-[#2e353b] mb-4">Top Sources</h3>
                      <div className="space-y-3">
                        {[
                          { domain: "zeronetworks.com", usage: "12.5%" },
                          { domain: "peerspot.com", usage: "11.1%" },
                          { domain: "nordlayer.com", usage: "11.1%" },
                        ].map((source) => (
                          <div key={source.domain} className="flex items-center justify-between">
                            <span className="text-sm text-[#2e353b]">{source.domain}</span>
                            <span className="text-sm text-[#74838f]">{source.usage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Multi-Model Visibility Tracking",
      description: "Monitor your brand mentions across ChatGPT, Claude, Perplexity, Gemini, and Grok. See exactly when and how often you're recommended.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Competitor Analysis",
      description: "Track how competitors rank against you in AI responses. Compare visibility, sentiment, and share of voice across all models.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: "Source Attribution",
      description: "Discover which websites and URLs LLMs cite when discussing your industry. Identify content gaps and citation opportunities.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Custom Prompts",
      description: "Create and manage prompts that matter to your business. Track specific queries your customers might ask AI assistants.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "On-Page Optimization",
      description: "Get actionable recommendations to optimize your website content. Improve structure, headings, and schema markup for better AI visibility.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Off-Page Strategies",
      description: "Build authority in the places that matter. Get editorial coverage, community presence, and partnership recommendations.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e353b]">
            Everything you need to track AI visibility
          </h2>
          <p className="mt-4 text-lg text-[#74838f]">
            Comprehensive tools to monitor, analyze, and improve your brand&apos;s presence in LLM responses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-[#e6f0fa] rounded-lg flex items-center justify-center text-[#509ee3] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#2e353b] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#74838f]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Clone & Deploy",
      description: "Clone the repo and deploy with Docker. Configure your database and API keys in minutes.",
    },
    {
      step: "02",
      title: "Add Your Brand",
      description: "Enter your company details and competitors. Prompt Clarity auto-generates relevant tracking prompts.",
    },
    {
      step: "03",
      title: "Monitor & Optimize",
      description: "Track visibility over time, analyze sources, and get actionable recommendations to improve.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#f9fbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e353b]">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-[#74838f]">
            Self-host your own LLM visibility tracker with full control over your data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[#e0e4e9] -translate-x-1/2 z-0"></div>
              )}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#509ee3] shadow-lg">
                  <span className="text-2xl font-bold text-[#509ee3]">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2e353b] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#74838f]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Code snippet */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-[#2e353b] rounded-xl overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1f24] border-b border-[#3d4650]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="text-[#949aab] text-sm ml-2">Terminal</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-[#88bf4d]"># Clone the repository</div>
              <div className="text-[#e0e4e9]">git clone https://github.com/lucidgeo/lucidgeo.git</div>
              <div className="text-[#e0e4e9] mt-2">cd lucidgeo</div>
              <div className="mt-4 text-[#88bf4d]"># Start with Docker</div>
              <div className="text-[#e0e4e9]">docker-compose up -d</div>
              <div className="mt-4 text-[#949aab]"># Open http://localhost:3000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Supported Models Section
function ModelsSection() {
  const models = [
    { name: "ChatGPT", icon: "openai" },
    { name: "Claude", icon: "claude" },
    { name: "Perplexity", icon: "perplexity" },
    { name: "Gemini", icon: "gemini" },
    { name: "Grok", icon: "grok" },
  ];

  return (
    <section className="py-16 bg-white border-y border-[#e0e4e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[#74838f] mb-8">Track visibility across all major AI models</p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {models.map((model) => (
            <div key={model.name} className="flex items-center gap-3 text-[#74838f]">
              <div className="w-10 h-10 bg-[#f9fbfc] rounded-lg flex items-center justify-center border border-[#e0e4e9]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-medium">{model.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section - Open Source Joke
function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e353b]">
            Pricing that makes sense
          </h2>
          <p className="mt-4 text-lg text-[#74838f]">
            We believe in radical transparency. Here&apos;s our pricing structure:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <div className="pricing-card bg-white rounded-xl p-8 border border-[#e0e4e9]">
              <h3 className="text-xl font-semibold text-[#2e353b]">Hobby</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-[#2e353b]">$0</span>
                <span className="ml-2 text-[#74838f]">/month</span>
              </div>
              <p className="mt-2 text-[#74838f]">For individuals and small projects</p>
              <ul className="mt-6 space-y-3">
                {[
                  "All features included",
                  "Unlimited brands",
                  "Unlimited prompts",
                  "Self-hosted",
                  "Community support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#88bf4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#74838f]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://github.com/lucidgeo/lucidgeo"
                className="mt-8 block w-full py-3 px-4 rounded-lg font-medium text-center bg-[#509ee3] text-white hover:bg-[#4a90d9] transition-colors"
              >
                Get started
              </Link>
            </div>

            {/* Pro Tier - Joke */}
            <div className="pricing-card pricing-card-highlighted bg-white rounded-xl p-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#509ee3] text-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2e353b]">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-[#2e353b]">$0</span>
                <span className="ml-2 text-[#74838f]">/month</span>
              </div>
              <p className="mt-2 text-[#74838f]">For growing teams</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Hobby",
                  "Still unlimited everything",
                  "Still self-hosted",
                  "GitHub Issues support",
                  "Our eternal gratitude",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#88bf4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#74838f]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://github.com/lucidgeo/lucidgeo"
                className="mt-8 block w-full py-3 px-4 rounded-lg font-medium text-center bg-[#509ee3] text-white hover:bg-[#4a90d9] transition-colors"
              >
                Get started
              </Link>
            </div>

            {/* Enterprise Tier - Joke */}
            <div className="pricing-card bg-white rounded-xl p-8 border border-[#e0e4e9]">
              <h3 className="text-xl font-semibold text-[#2e353b]">Enterprise</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-[#2e353b]">$0</span>
                <span className="ml-2 text-[#74838f]">/month</span>
              </div>
              <p className="mt-2 text-[#74838f]">For large organizations</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Pro",
                  "White-glove onboarding*",
                  "Custom integrations*",
                  "Priority support*",
                  "*Just kidding, it's OSS",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#88bf4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-[#74838f] ${i === 4 ? "italic" : ""}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://github.com/lucidgeo/lucidgeo"
                className="mt-8 block w-full py-3 px-4 rounded-lg font-medium text-center border border-[#509ee3] text-[#509ee3] hover:bg-[#e6f0fa] transition-colors"
              >
                Star on GitHub
              </Link>
            </div>
          </div>

          {/* Fun disclaimer */}
          <p className="text-center mt-8 text-[#949aab] text-sm">
            Yes, it&apos;s all free. We&apos;re open source. The real pricing is the friends we made along the way.
          </p>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-[#2e353b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to track your AI visibility?
        </h2>
        <p className="mt-4 text-lg text-[#949aab]">
          Join the open source community building the future of LLM visibility tracking.
          Star us on GitHub to show your support.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://github.com/lucidgeo/lucidgeo"
            className="w-full sm:w-auto bg-[#509ee3] text-white px-8 py-3 rounded-lg font-medium text-lg btn-primary hover:bg-[#4a90d9] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Star on GitHub
          </Link>
          <Link
            href="https://github.com/lucidgeo/lucidgeo/discussions"
            className="w-full sm:w-auto bg-transparent text-white px-8 py-3 rounded-lg font-medium text-lg border border-[#4a5568] hover:border-[#509ee3] transition-colors"
          >
            Join the discussion
          </Link>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#2e353b] border-t border-[#3d4650]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-xl font-semibold text-white">Prompt Clarity</span>
            </div>
            <p className="text-[#949aab] text-sm">
              Open source LLM visibility tracking. Own your data.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-[#949aab] hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="#how-it-works" className="text-[#949aab] hover:text-white transition-colors text-sm">How it Works</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo" className="text-[#949aab] hover:text-white transition-colors text-sm">Documentation</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/releases" className="text-[#949aab] hover:text-white transition-colors text-sm">Changelog</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><Link href="https://github.com/lucidgeo/lucidgeo" className="text-[#949aab] hover:text-white transition-colors text-sm">GitHub</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/discussions" className="text-[#949aab] hover:text-white transition-colors text-sm">Discussions</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/issues" className="text-[#949aab] hover:text-white transition-colors text-sm">Report a Bug</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/blob/main/CONTRIBUTING.md" className="text-[#949aab] hover:text-white transition-colors text-sm">Contributing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="https://github.com/lucidgeo/lucidgeo/blob/main/README.md" className="text-[#949aab] hover:text-white transition-colors text-sm">Getting Started</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/blob/main/SETUP.md" className="text-[#949aab] hover:text-white transition-colors text-sm">Installation</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/blob/main/LICENSE" className="text-[#949aab] hover:text-white transition-colors text-sm">License</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#3d4650] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#949aab] text-sm">
            &copy; {new Date().getFullYear()} Prompt Clarity. Open source under MIT license.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/lucidgeo/lucidgeo" className="text-[#949aab] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com/promptclarity" className="text-[#949aab] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ModelsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
