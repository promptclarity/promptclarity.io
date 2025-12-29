import Link from "next/link";

// Docs Navigation
const docsNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#introduction" },
      { title: "Quick Start", href: "#quick-start" },
      { title: "Installation", href: "#installation" },
      { title: "Configuration", href: "#configuration" },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Dashboard Overview", href: "#dashboard-overview" },
      { title: "Visibility Tracking", href: "#visibility-tracking" },
      { title: "Competitor Analysis", href: "#competitor-analysis" },
      { title: "Prompt Management", href: "#prompt-management" },
      { title: "Source Attribution", href: "#source-attribution" },
      { title: "Sentiment Analysis", href: "#sentiment-analysis" },
    ],
  },
  {
    title: "AI Platforms",
    items: [
      { title: "Supported Models", href: "#supported-models" },
      { title: "API Key Setup", href: "#api-key-setup" },
    ],
  },
  {
    title: "Automation",
    items: [
      { title: "Daily Tracking", href: "#daily-tracking" },
      { title: "Cron Configuration", href: "#cron-configuration" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Endpoints", href: "#api-endpoints" },
      { title: "Real-Time Updates", href: "#real-time-updates" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { title: "Self-Hosting", href: "#self-hosting" },
      { title: "Docker", href: "#docker" },
      { title: "Vercel", href: "#vercel" },
      { title: "Render", href: "#render" },
      { title: "Fly.io", href: "#flyio" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "Database Schema", href: "#database-schema" },
      { title: "Troubleshooting", href: "#troubleshooting" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  <path d="M50 8C25 8 5 25 5 46c0 11 5 21 14 28l-6 18 18-9c6 2 12 3 19 3 25 0 45-17 45-40S75 8 50 8z" fill="none" stroke="#5BA3E6" strokeWidth="5" />
                  <circle cx="50" cy="44" r="26" stroke="#5BA3E6" strokeWidth="4" fill="none" />
                  <circle cx="50" cy="44" r="14" stroke="#5BA3E6" strokeWidth="4" fill="none" />
                  <line x1="50" y1="14" x2="50" y2="26" stroke="#5BA3E6" strokeWidth="4" />
                  <line x1="50" y1="62" x2="50" y2="74" stroke="#5BA3E6" strokeWidth="4" />
                  <line x1="20" y1="44" x2="32" y2="44" stroke="#5BA3E6" strokeWidth="4" />
                  <line x1="68" y1="44" x2="80" y2="44" stroke="#5BA3E6" strokeWidth="4" />
                  <path d="M50 36 L52 43 L50 52 L48 43 Z" fill="#5BA3E6" />
                  <path d="M42 44 L49 41 L58 44 L49 47 Z" fill="#5BA3E6" />
                  <line x1="50" y1="44" x2="78" y2="16" stroke="#5BA3E6" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="78" cy="16" r="5" fill="#5BA3E6" />
                  <line x1="78" y1="4" x2="78" y2="9" stroke="#5BA3E6" strokeWidth="3" strokeLinecap="round" />
                  <line x1="88" y1="10" x2="84" y2="13" stroke="#5BA3E6" strokeWidth="3" strokeLinecap="round" />
                  <line x1="91" y1="20" x2="86" y2="18" stroke="#5BA3E6" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span className="text-xl font-semibold text-gray-900">Prompt Clarity</span>
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 font-medium">Documentation</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link
                href="https://github.com/promptclarity/promptclarity"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
              {docsNav.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-blue-500 transition-colors block py-1 text-sm"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="prose prose-gray max-w-none">
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Complete guide to tracking your brand&apos;s visibility in AI-powered search results.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">What is Prompt Clarity?</h3>
                  <p className="text-blue-800">
                    Prompt Clarity is a comprehensive brand visibility monitoring platform that tracks how often
                    your business appears in AI-powered search results across ChatGPT, Claude, Gemini, Perplexity,
                    and Grok. Understand your &quot;Share of Voice&quot; in the AI ecosystem and optimize your presence.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why AI Visibility Matters</h2>
                <p className="text-gray-600 mb-4">
                  As AI assistants become primary discovery channels for products and services, appearing in their
                  recommendations directly impacts your business. Prompt Clarity helps you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Track Brand Mentions</strong> - Monitor how often your brand appears in AI responses</li>
                  <li><strong>Benchmark Competitors</strong> - Compare your visibility against competitors</li>
                  <li><strong>Measure Share of Voice</strong> - Calculate what percentage of mentions are yours</li>
                  <li><strong>Analyze Sentiment</strong> - Understand how AI describes your brand</li>
                  <li><strong>Track Sources</strong> - See which websites AI cites when mentioning your brand</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="text-3xl font-bold text-blue-500">5</div>
                    <div className="text-gray-600 text-sm">AI Platforms Tracked</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="text-3xl font-bold text-green-500">24/7</div>
                    <div className="text-gray-600 text-sm">Automated Monitoring</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="text-3xl font-bold text-purple-500">100%</div>
                    <div className="text-gray-600 text-sm">Open Source</div>
                  </div>
                </div>
              </section>

              {/* Quick Start */}
              <section id="quick-start" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>
                <p className="text-gray-600 mb-6">
                  Run your own instance with a single command:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 1: Docker (Recommended)</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`docker run -d \\
  --name prompt-clarity \\
  -p 3000:3000 \\
  -v prompt-clarity-data:/app/data \\
  ghcr.io/promptclarity/promptclarity:latest`}
                  </pre>
                </div>
                <p className="text-gray-600 mb-6">
                  Open <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code> and follow the setup wizard.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                  <p className="text-blue-800 text-sm">
                    <strong>Custom domain?</strong> Add <code className="bg-blue-100 px-1 rounded">-e NEXTAUTH_URL=https://clarity.yourdomain.com</code> to the command.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 2: From Source</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`# Clone the repository
git clone https://github.com/promptclarity/promptclarity.git
cd promptclarity

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Generate auth secret
openssl rand -base64 32
# Add the output to NEXTAUTH_SECRET in .env.local

# Start development server
npm run dev`}
                  </pre>
                </div>

                <p className="text-gray-600 mb-4">
                  Open <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code> and follow the onboarding wizard.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Onboarding Steps</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Info</h4>
                      <p className="text-gray-600 text-sm">Enter your company name and website URL</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Platform Configuration</h4>
                      <p className="text-gray-600 text-sm">Select AI platforms and enter your API keys</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Topic Generation</h4>
                      <p className="text-gray-600 text-sm">Prompt Clarity suggests 5-7 industry-relevant topics (customizable)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Prompt Generation</h4>
                      <p className="text-gray-600 text-sm">Generates 3-5 search prompts per topic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitor Identification</h4>
                      <p className="text-gray-600 text-sm">Identifies 3-10 competitors to track alongside your brand</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Installation */}
              <section id="installation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prerequisites</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Node.js 18.17 or later</li>
                  <li>npm or yarn</li>
                  <li>API key from at least one AI platform</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Clone & Install</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`git clone https://github.com/promptclarity/promptclarity.git
cd promptclarity
npm install`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Environment Setup</h3>
                <p className="text-gray-600 mb-4">
                  Copy the example environment file and configure your settings:
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`cp .env.example .env.local`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Generate Auth Secret</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`openssl rand -base64 32`}
                  </pre>
                </div>
                <p className="text-gray-600 mb-4">
                  Add the output to <code className="bg-gray-100 px-2 py-1 rounded">NEXTAUTH_SECRET</code> in your <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Development Server</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`npm run dev`}
                  </pre>
                </div>
              </section>

              {/* Configuration */}
              <section id="configuration" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Configuration</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Required Environment Variables</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Variable</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b">NEXTAUTH_SECRET</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Session encryption key</td>
                        <td className="px-4 py-3 text-sm text-gray-500 border-b">Output of openssl rand</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b">NEXTAUTH_URL</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Auth callback URL</td>
                        <td className="px-4 py-3 text-sm text-gray-500 border-b">http://localhost:3000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Optional Environment Variables</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Variable</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b">GOOGLE_CLIENT_ID</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Google OAuth client ID</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b">GOOGLE_CLIENT_SECRET</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Google OAuth client secret</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b">CRON_SECRET</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Secret for cron job authentication</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b">RESEND_API_KEY</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Email service for team invites</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> AI platform API keys are configured through the UI during onboarding, not via environment variables.
                  </p>
                </div>
              </section>

              {/* Dashboard Overview */}
              <section id="dashboard-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
                <p className="text-gray-600 mb-6">
                  The dashboard provides a comprehensive view of your brand&apos;s AI visibility across multiple dimensions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
                    <p className="text-gray-600 text-sm">
                      Visibility trends, brand rankings, recent AI responses with highlights, and date range filtering.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Prompts</h3>
                    <p className="text-gray-600 text-sm">
                      Manage prompts by topic, view execution history, run bulk or individual executions.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Visibility</h3>
                    <p className="text-gray-600 text-sm">
                      Time-series analysis of visibility trends with competitor comparisons.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Competitors</h3>
                    <p className="text-gray-600 text-sm">
                      Comparative analysis of all tracked brands with visibility benchmarking.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Sources</h3>
                    <p className="text-gray-600 text-sm">
                      See which websites AI models cite when discussing your industry.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Sentiment</h3>
                    <p className="text-gray-600 text-sm">
                      Analyze how AI describes your brand - positive, neutral, or negative.
                    </p>
                  </div>
                </div>
              </section>

              {/* Visibility Tracking */}
              <section id="visibility-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visibility Tracking</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visibility Score</h3>
                <p className="text-gray-600 mb-4">
                  A binary metric per prompt/platform combination indicating whether your brand was mentioned:
                </p>
                <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm mb-6">
                  1 = Brand mentioned | 0 = Brand not mentioned
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Share of Voice</h3>
                <p className="text-gray-600 mb-4">
                  Calculates what percentage of brand mentions are yours vs competitors:
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`AI Response: "Top container tools: 1) Kubernetes, 2) Docker, 3) Your Brand"

Total brands = 3
Your mentions = 1 (Your Brand)
Share of Voice = (1/3) × 100 = 33.3%`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Confidence Score</h3>
                <p className="text-gray-600 mb-4">
                  AI-assigned confidence (0-1 scale) indicating certainty of analysis:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  <li><strong>0.95</strong> - Very confident</li>
                  <li><strong>0.70</strong> - Moderate confidence</li>
                  <li><strong>0.40</strong> - Low confidence (edge cases)</li>
                </ul>
              </section>

              {/* Competitor Analysis */}
              <section id="competitor-analysis" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Competitor Analysis</h2>
                <p className="text-gray-600 mb-6">
                  During onboarding, AI identifies 3-10 competitors based on your industry. You can add, remove, or modify competitors at any time.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tracked Metrics</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Share of Voice</strong> - How often each brand is mentioned</li>
                  <li><strong>Position</strong> - Ranking when brands appear in lists</li>
                  <li><strong>Sentiment</strong> - How positively each brand is portrayed</li>
                  <li><strong>Trend</strong> - Visibility changes over time</li>
                </ul>
              </section>

              {/* Prompt Management */}
              <section id="prompt-management" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prompt Management</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">How Prompts Work</h3>
                <p className="text-gray-600 mb-4">
                  Prompts simulate questions potential customers might ask AI. They&apos;re organized by topics and can be executed individually or in bulk.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prompt Types</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Recommendation</strong> - &quot;What&apos;s the best [product] for [use case]?&quot;</li>
                  <li><strong>Comparison</strong> - &quot;Compare [brand] vs [competitor]&quot;</li>
                  <li><strong>Research</strong> - &quot;What are the top [industry] companies?&quot;</li>
                  <li><strong>Problem-solving</strong> - &quot;How do I solve [problem]?&quot;</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Execution Options</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Execute All</strong> - Run all prompts across all platforms</li>
                  <li><strong>Execute by Topic</strong> - Run prompts for a specific topic</li>
                  <li><strong>Execute Single</strong> - Run one prompt on selected platforms</li>
                </ul>
              </section>

              {/* Source Attribution */}
              <section id="source-attribution" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Source Attribution</h2>
                <p className="text-gray-600 mb-6">
                  Track which websites and sources AI models cite when discussing your industry. This helps you understand where to focus content and link-building efforts.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Use Cases</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Identify high-authority sites AI frequently cites</li>
                    <li>Find content gaps where competitors appear but you don&apos;t</li>
                    <li>Guide PR and link-building strategy</li>
                    <li>Understand AI&apos;s information sources</li>
                  </ul>
                </div>
              </section>

              {/* Sentiment Analysis */}
              <section id="sentiment-analysis" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sentiment Analysis</h2>
                <p className="text-gray-600 mb-6">
                  Understand the context and tone of your brand mentions in AI responses.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="font-semibold text-green-700 mb-1">Positive</div>
                    <p className="text-green-600 text-sm">AI recommends or praises your brand</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="font-semibold text-gray-700 mb-1">Neutral</div>
                    <p className="text-gray-600 text-sm">AI lists your brand among options</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="font-semibold text-red-700 mb-1">Negative</div>
                    <p className="text-red-600 text-sm">AI mentions criticism or issues</p>
                  </div>
                </div>
              </section>

              {/* Supported Models */}
              <section id="supported-models" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Supported AI Models</h2>

                <div className="space-y-4">
                  {/* ChatGPT */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#10a37f] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">ChatGPT</h3>
                        <p className="text-gray-500 text-sm">OpenAI GPT-4o</p>
                      </div>
                    </div>
                  </div>

                  {/* Claude */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#D77655] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" viewBox="0 0 16 16" fill="#FCF2EE">
                          <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Claude</h3>
                        <p className="text-gray-500 text-sm">Anthropic Claude Sonnet 4</p>
                      </div>
                    </div>
                  </div>

                  {/* Gemini */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <svg className="w-6 h-6" viewBox="0 0 65 65" fill="none">
                          <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#gemini-gradient)"/>
                          <defs>
                            <linearGradient id="gemini-gradient" x1="0" y1="32" x2="65" y2="32" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#4285F4"/>
                              <stop offset="25%" stopColor="#9B72CB"/>
                              <stop offset="50%" stopColor="#D96570"/>
                              <stop offset="75%" stopColor="#D96570"/>
                              <stop offset="100%" stopColor="#4285F4"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Gemini</h3>
                        <p className="text-gray-500 text-sm">Google Gemini 2.5 Pro</p>
                      </div>
                    </div>
                  </div>

                  {/* Perplexity */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#1F1F1F] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" viewBox="0 0 512 509.64" fill="none">
                          <path fill="#fff" fillRule="nonzero" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.8c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Perplexity</h3>
                        <p className="text-gray-500 text-sm">sonar-deep-research</p>
                      </div>
                    </div>
                  </div>

                  {/* Grok */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" viewBox="0 0 512 509.641" fill="none">
                          <path fill="#fff" d="M213.235 306.019l178.976-180.002v.169l51.695-51.763c-.924 1.32-1.86 2.605-2.785 3.89-39.281 54.164-58.46 80.649-43.07 146.922l-.09-.101c10.61 45.11-.744 95.137-37.398 131.836-46.216 46.306-120.167 56.611-181.063 14.928l42.462-19.675c38.863 15.278 81.392 8.57 111.947-22.03 30.566-30.6 37.432-75.159 22.065-112.252-2.92-7.025-11.67-8.795-17.792-4.263l-124.947 92.341zm-25.786 22.437l-.033.034L68.094 435.217c7.565-10.429 16.957-20.294 26.327-30.149 26.428-27.803 52.653-55.359 36.654-94.302-21.422-52.112-8.952-113.177 30.724-152.898 41.243-41.254 101.98-51.661 152.706-30.758 11.23 4.172 21.016 10.114 28.638 15.639l-42.359 19.584c-39.44-16.563-84.629-5.299-112.207 22.313-37.298 37.308-44.84 102.003-1.128 143.81z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Grok</h3>
                        <p className="text-gray-500 text-sm">xAI Grok 3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* API Key Setup */}
              <section id="api-key-setup" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">API Key Setup</h2>
                <p className="text-gray-600 mb-6">
                  Get API keys from the following platforms to enable tracking:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <span className="font-medium text-gray-900">ChatGPT (OpenAI)</span>
                    <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 text-sm">
                      platform.openai.com/api-keys →
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <span className="font-medium text-gray-900">Claude (Anthropic)</span>
                    <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 text-sm">
                      console.anthropic.com →
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <span className="font-medium text-gray-900">Gemini (Google)</span>
                    <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 text-sm">
                      aistudio.google.com/apikey →
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <span className="font-medium text-gray-900">Perplexity</span>
                    <a href="https://perplexity.ai/settings/api" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 text-sm">
                      perplexity.ai/settings/api →
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <span className="font-medium text-gray-900">Grok (xAI)</span>
                    <a href="https://console.x.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 text-sm">
                      console.x.ai →
                    </a>
                  </div>
                </div>
              </section>

              {/* Daily Tracking */}
              <section id="daily-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Daily Tracking</h2>
                <p className="text-gray-600 mb-6">
                  Prompt Clarity can automatically execute prompts on a schedule to build historical visibility data.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`Daily at 2 AM UTC
       ↓
Trigger /api/cron/daily-executions
       ↓
For each business:
  ├─ Get all prompts
  ├─ Get all configured platforms
  ├─ Execute prompts (max 5 concurrent)
  └─ Store results with today's date
       ↓
Dashboard updates with new data points`}
                  </pre>
                </div>
              </section>

              {/* Cron Configuration */}
              <section id="cron-configuration" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cron Configuration</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 1: Vercel (Built-in)</h3>
                <p className="text-gray-600 mb-4">
                  Configured automatically in <code className="bg-gray-100 px-2 py-1 rounded">vercel.json</code>:
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`{
  "crons": [{
    "path": "/api/cron/daily-executions",
    "schedule": "0 2 * * *"
  }]
}`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 2: External Cron Service</h3>
                <p className="text-gray-600 mb-4">
                  Use services like cron-job.org or EasyCron:
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`POST https://your-domain.com/api/cron/daily-executions
Authorization: Bearer YOUR_CRON_SECRET`}
                  </pre>
                </div>
              </section>

              {/* API Endpoints */}
              <section id="api-endpoints" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">API Endpoints</h2>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">POST</span>
                        <code className="text-gray-900">/api/prompts/executions</code>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-3">Execute all prompts for a business</p>
                      <div className="bg-gray-900 rounded p-4">
                        <pre className="text-green-400 text-sm">
{`// Request
{ "businessId": 1 }

// Response
{ "success": true, "message": "Started execution for all prompts" }`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-mono">GET</span>
                        <code className="text-gray-900">/api/dashboard/overview</code>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-3">Fetch visibility overview data</p>
                      <div className="bg-gray-900 rounded p-4">
                        <pre className="text-green-400 text-sm">
{`// Query params
?businessId=1&startDate=2024-12-01&endDate=2024-12-08

// Response
{
  "visibilityScore": 72,
  "mentionCount": 45,
  "platforms": { ... }
}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-mono">GET</span>
                        <code className="text-gray-900">/api/prompts/executions/stream</code>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-3">Server-Sent Events for real-time execution updates</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Real-Time Updates */}
              <section id="real-time-updates" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Updates</h2>
                <p className="text-gray-600 mb-6">
                  The application uses Server-Sent Events (SSE) to provide live execution progress updates.
                </p>

                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`// Frontend usage
const eventSource = new EventSource('/api/prompts/executions/stream');

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // Updates: {status: 'started'|'completed', promptId, ...}
  updateUI(data);
};`}
                  </pre>
                </div>
              </section>

              {/* Self-Hosting */}
              <section id="self-hosting" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Self-Hosting</h2>
                <p className="text-gray-600 mb-6">
                  Prompt Clarity can be self-hosted on any platform that supports Node.js.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Build for Production</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`npm run build
npm start`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Database</h3>
                <p className="text-gray-600 mb-4">
                  Uses SQLite by default - no external database required. Data is stored in <code className="bg-gray-100 px-2 py-1 rounded">data/store.db</code>.
                </p>
              </section>

              {/* Docker */}
              <section id="docker" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Docker Deployment</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Start</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`docker run -d \\
  --name prompt-clarity \\
  -p 3000:3000 \\
  -v prompt-clarity-data:/app/data \\
  ghcr.io/promptclarity/promptclarity:latest`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Docker Configuration</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Variable</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Default</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b">NEXTAUTH_URL</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Your app&apos;s public URL</td>
                        <td className="px-4 py-3 text-sm text-gray-500 border-b">http://localhost:3000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b">NEXTAUTH_SECRET</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Auth encryption secret</td>
                        <td className="px-4 py-3 text-sm text-gray-500 border-b">Auto-generated</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Updating</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`docker pull ghcr.io/promptclarity/promptclarity:latest
docker stop prompt-clarity && docker rm prompt-clarity
# Re-run the docker run command above`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Build Image Locally</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`docker build -t prompt-clarity .
docker run -d -p 3000:3000 -v prompt-clarity-data:/app/data prompt-clarity`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Included Services</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Multi-stage build (Node 20 Alpine)</li>
                  <li>Automatic database migrations on startup</li>
                  <li>SQLite database persistence via volume mount</li>
                </ul>
              </section>

              {/* Vercel */}
              <section id="vercel" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Vercel Deployment</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Connect Repository</h4>
                      <p className="text-gray-600 text-sm">Link your GitHub repository to Vercel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Configure Environment</h4>
                      <p className="text-gray-600 text-sm">Set environment variables in the Vercel dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Deploy</h4>
                      <p className="text-gray-600 text-sm">Automatic deployments on push to main branch</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Render */}
              <section id="render" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Deploy to Render</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Create Web Service</h4>
                      <p className="text-gray-600 text-sm">Create a new Web Service on Render</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Connect Repository</h4>
                      <p className="text-gray-600 text-sm">Connect your GitHub repository</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Configure Build</h4>
                      <p className="text-gray-600 text-sm">
                        Build Command: <code className="bg-gray-100 px-2 py-1 rounded text-xs">npm install && npm run build</code><br />
                        Start Command: <code className="bg-gray-100 px-2 py-1 rounded text-xs">npm start</code>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Add Environment Variables</h4>
                      <p className="text-gray-600 text-sm">Add variables in Render dashboard and deploy</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Fly.io */}
              <section id="flyio" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Deploy to Fly.io</h2>

                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`# Install flyctl
curl -L https://fly.io/install.sh | sh

# Launch (creates fly.toml)
fly launch

# Set secrets
fly secrets set NEXTAUTH_SECRET="your-secret" NEXTAUTH_URL="https://your-app.fly.dev"

# Deploy
fly deploy`}
                  </pre>
                </div>
              </section>

              {/* Database Schema */}
              <section id="database-schema" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Database Schema</h2>
                <p className="text-gray-600 mb-6">
                  Prompt Clarity uses SQLite with the following core tables:
                </p>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-mono font-semibold text-gray-900 mb-2">businesses</h4>
                    <p className="text-gray-600 text-sm">Company information (id, business_name, website)</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-mono font-semibold text-gray-900 mb-2">business_platforms</h4>
                    <p className="text-gray-600 text-sm">AI platform configurations with API keys</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-mono font-semibold text-gray-900 mb-2">topics</h4>
                    <p className="text-gray-600 text-sm">Industry categories for organizing prompts</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-mono font-semibold text-gray-900 mb-2">prompts</h4>
                    <p className="text-gray-600 text-sm">Search queries to test against AI platforms</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-mono font-semibold text-gray-900 mb-2">competitors</h4>
                    <p className="text-gray-600 text-sm">Tracked competitor brands</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-mono font-semibold text-gray-900 mb-2">prompt_executions</h4>
                    <p className="text-gray-600 text-sm">Stores every execution result including mentions, sentiment, and visibility</p>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section id="troubleshooting" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting</h2>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Port 3000 already in use</h4>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-green-400 text-sm">PORT=3001 npm run dev</code>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Authentication errors</h4>
                    <p className="text-gray-600 text-sm">Ensure <code className="bg-gray-100 px-1 rounded">NEXTAUTH_SECRET</code> is set in your <code className="bg-gray-100 px-1 rounded">.env.local</code> file</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Database locked</h4>
                    <p className="text-gray-600 text-sm">Only one app instance should access the SQLite database. Restart the server if needed.</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">No dashboard data</h4>
                    <p className="text-gray-600 text-sm">Wait for prompt execution to complete. Check browser console for errors.</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">API key errors</h4>
                    <p className="text-gray-600 text-sm">Verify API key validity and remaining quota in the provider&apos;s dashboard.</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Team invites not sending</h4>
                    <p className="text-gray-600 text-sm">Configure <code className="bg-gray-100 px-1 rounded">RESEND_API_KEY</code> environment variable for email functionality.</p>
                  </div>
                </div>
              </section>

              {/* Help */}
              <section className="mb-16">
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Help?</h2>
                  <p className="text-gray-600 mb-6">
                    Check out the GitHub repository for issues, discussions, and contributions.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://github.com/promptclarity/promptclarity/issues"
                      className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Report an Issue
                    </a>
                    <a
                      href="https://github.com/promptclarity/promptclarity/discussions"
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Join Discussions
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Prompt Clarity. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/promptclarity/promptclarity" className="text-gray-500 hover:text-gray-700 text-sm">GitHub</a>
              <a href="https://github.com/promptclarity/promptclarity/blob/main/LICENSE" className="text-gray-500 hover:text-gray-700 text-sm">License</a>
              <a href="https://github.com/promptclarity/promptclarity/blob/main/CONTRIBUTING.md" className="text-gray-500 hover:text-gray-700 text-sm">Contributing</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
