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
    title: "How It Works",
    items: [
      { title: "Data Collection", href: "#data-collection" },
      { title: "Visibility Scoring", href: "#visibility-scoring" },
      { title: "Content Recommendations", href: "#content-recommendations" },
      { title: "PR & Partnerships", href: "#pr-partnerships" },
      { title: "Website Audits", href: "#website-audits" },
    ],
  },
  {
    title: "Dashboards",
    items: [
      { title: "Overview", href: "#dashboard-overview" },
      { title: "Prompts", href: "#prompt-management" },
      { title: "Competitors", href: "#competitor-analysis" },
      { title: "Sources", href: "#source-attribution" },
      { title: "Sentiment", href: "#sentiment-analysis" },
      { title: "Growth", href: "#growth-trends" },
      { title: "Content Roadmap", href: "#content-roadmap" },
      { title: "Off-Page Roadmap", href: "#offpage-roadmap" },
      { title: "Site Audit", href: "#site-audit" },
      { title: "Benchmarking", href: "#benchmarking" },
      { title: "Team", href: "#team-management" },
      { title: "Models", href: "#model-configuration" },
    ],
  },
  {
    title: "Core Tracking",
    items: [
      { title: "Visibility Score", href: "#visibility-tracking" },
      { title: "Position Tracking", href: "#position-tracking" },
      { title: "Historical Trends", href: "#historical-trends" },
    ],
  },
  {
    title: "Automation",
    items: [
      { title: "Scheduled Execution", href: "#scheduled-execution" },
      { title: "Real-Time Updates", href: "#real-time-updates" },
      { title: "Cron Configuration", href: "#cron-configuration" },
    ],
  },
  {
    title: "AI Platforms",
    items: [
      { title: "Supported Models", href: "#supported-models" },
      { title: "API Key Setup", href: "#api-key-setup" },
      { title: "Prompt Templates", href: "#prompt-templates" },
      { title: "Budget Tracking", href: "#budget-tracking" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { title: "Docker", href: "#docker" },
      { title: "Self-Hosting", href: "#self-hosting" },
      { title: "Cloud Platforms", href: "#cloud-platforms" },
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
              <Link href="/" className="flex items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                  <polygon points="42,28 58,28 62,52 32,90 28,90 42,28" fill="#1a1a1a" />
                  <polygon points="68,58 72,90 38,90 68,58" fill="#1a1a1a" />
                  <rect x="40" y="18" width="20" height="12" fill="#1a1a1a" />
                  <polygon points="38,18 50,8 62,18" fill="#1a1a1a" />
                  <polygon points="60,12 90,2 90,16" fill="#1a1a1a" />
                  <polygon points="60,22 85,26 85,38" fill="#1a1a1a" />
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
                    and Grok. Understand your visibility in the AI ecosystem and optimize your presence.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Bring Your Own API Keys</h3>
                  <p className="text-green-800 mb-4">
                    Prompt Clarity puts you in full control of your AI visibility monitoring:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/60 rounded-lg p-4">
                      <div className="font-semibold text-green-900 mb-1">Your API Keys</div>
                      <p className="text-green-700 text-sm">Connect your own accounts. Pay only for what your use. You control the costs directly.</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <div className="font-semibold text-green-900 mb-1">Unlimited Prompts</div>
                      <p className="text-green-700 text-sm">Track as many prompts as you want. Scale your monitoring to match your needs.</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <div className="font-semibold text-green-900 mb-1">Self-Hosted & Configurable</div>
                      <p className="text-green-700 text-sm">Run on your own infrastructure. Customize models & templates via simple config files.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why AI Visibility Matters</h2>
                <p className="text-gray-600 mb-4">
                  As AI assistants become primary discovery channels for products and services, appearing in their
                  recommendations directly impacts your business. Prompt Clarity helps you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Track Brand Mentions</strong> - Monitor how often your brand appears in AI responses</li>
                  <li><strong>Benchmark Competitors</strong> - Compare your visibility against competitors</li>
                  <li><strong>Analyze Sentiment</strong> - Understand how AI describes your brand</li>
                  <li><strong>Track Sources</strong> - See which websites AI cites when mentioning your brand</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Improve Your Visibility Score</h3>
                <p className="text-gray-600 mb-4">
                  Beyond tracking, Prompt Clarity analyzes your data to provide actionable recommendations for improving your AI visibility:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Website Audits</strong> - Optimize your site for AI crawlers with structured data, schema markup, and content accessibility improvements</li>
                  <li><strong>Content Recommendations</strong> - Discover topics and content types that AI models frequently reference in your industry</li>
                  <li><strong>Partnership Opportunities</strong> - Identify high-authority sites and potential partners that AI models trust and cite regularly</li>
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
  promptclarity/promptclarity:latest`}
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

              {/* Data Collection */}
              <section id="data-collection" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Collection</h2>
                <p className="text-gray-600 mb-6">
                  Prompt Clarity collects data by executing real queries against multiple AI platforms and analyzing their responses. Here&apos;s how the process works:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Query Pipeline</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
                  
{`1. SEND PROMPT TO AI MODEL
   ├─ Send industry-relevant query to configured AI model
   ├─ API Calls to configured models: Response model answers the prompt
   └─ Returns full response text + cited sources/URLs

2. EXTRACT URLS FROM RESPONSE
   ├─ Parse any URLs the AI cited in its response
   └─ Fetch page metadata (title, description) for each URL

3. ANALYZE RESPONSE FOR MENTIONS
   ├─ API Calls GPT-4o-mini to analyze the response via mention-analysis prompt
   └─ This detects:
      ├─ Was your brand mentioned?
      ├─ What position in rankings? (1st, 2nd, 3rd...)
      ├─ Which competitors were mentioned?
      ├─ Sentiment (positive/neutral/negative)
      └─ Source types (editorial, UGC, reference, etc.)

4. CALCULATE & STORE
   ├─ Calculate visibility score and share of voice
   ├─ Save results to database
   └─ Update dashboard in real-time`}


                  </pre>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  The mention analysis prompt is fully configurable. See <a href="https://github.com/promptclarity/promptclarity/blob/main/config/prompts/mention-analysis.yaml" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">mention-analysis.yaml</a> on GitHub.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Extract From Each Response</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Brand Mentions</h4>
                    <p className="text-gray-600 text-sm">Every instance where your brand or competitors appear, including variations and misspellings.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Position Data</h4>
                    <p className="text-gray-600 text-sm">When AI lists multiple options, we track where each brand appears (1st, 2nd, 3rd, etc.).</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Source Citations</h4>
                    <p className="text-gray-600 text-sm">URLs and domains the AI references as sources for its recommendations.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Context & Sentiment</h4>
                    <p className="text-gray-600 text-sm">The surrounding text to understand if mentions are positive, neutral, or negative.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Data Freshness:</strong> Prompts can be executed on-demand or scheduled daily. Historical data is preserved to show visibility trends over time.
                  </p>
                </div>
              </section>

              {/* Visibility Scoring */}
              <section id="visibility-scoring" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visibility Scoring</h2>
                <p className="text-gray-600 mb-6">
                  Understanding how we calculate your visibility metrics and what they mean for your brand.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">How Visibility is Calculated</h3>
                <p className="text-gray-600 mb-4">
                  All visibility metrics are calculated from stored execution data—<strong>no additional API calls</strong>.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">

{`1. QUERY EXECUTION DATA
   ├─ Get all prompt executions from database for date range
   └─ Each execution has: business_visibility, competitor_visibilities,
      mention_analysis (position, sentiment)

2. CALCULATE VISIBILITY SCORES
   ├─ Business visibility = (executions with brand mentioned / total) × 100
   ├─ Competitor visibility = (executions with competitor mentioned / total) × 100
   └─ Store per-platform breakdown for model comparison

3. EXTRACT POSITION & SENTIMENT
   ├─ Parse mention_analysis JSON from each execution
   ├─ Position = brandPosition field (1st, 2nd, 3rd...)
   ├─ Sentiment = brandSentiment or brandSentimentScore (0-100)
   └─ Average across all executions where brand appeared

4. CALCULATE PERIOD-OVER-PERIOD CHANGES
   ├─ Query previous period (same duration, before start date)
   ├─ Compare visibility, sentiment, position
   └─ Return change values (e.g., +5.2%, -1 position)`}


                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Metrics</h3>

                <div className="space-y-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Visibility Score (0-100%)</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      The percentage of prompts where your brand was mentioned across all platforms.
                    </p>
                    <div className="bg-gray-900 rounded p-4">
                      <pre className="text-green-400 text-sm">
{`Visibility Score = (Prompts with mention / Total prompts) × 100

Example:
  - 50 total prompts executed
  - Your brand mentioned in 35 responses
  - Visibility Score = (35/50) × 100 = 70%`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Average Position</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      When AI lists recommendations, where does your brand typically appear?
                    </p>
                    <div className="bg-gray-900 rounded p-4">
                      <pre className="text-green-400 text-sm">
{`Average Position = Sum of positions / Number of appearances

Example:
  - Prompt 1: Listed 2nd
  - Prompt 2: Listed 1st
  - Prompt 3: Listed 3rd
  - Prompt 4: Not listed (excluded)
  - Average Position = (2+1+3) / 3 = 2.0`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Sentiment Score (-100 to +100)</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      How positively or negatively AI describes your brand when mentioned.
                    </p>
                    <div className="bg-gray-900 rounded p-4">
                      <pre className="text-green-400 text-sm">
{`Sentiment Analysis examines context around mentions:

Positive indicators (+):
  "highly recommended", "industry leader", "best choice"

Neutral indicators (0):
  "one option is", "alternatives include", "you could use"

Negative indicators (-):
  "drawbacks include", "users complain about", "limited by"`}
                      </pre>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Platform-Specific Scoring</h3>
                <p className="text-gray-600 mb-4">
                  Each AI platform may respond differently to the same prompt. We track metrics per-platform so you can identify where you&apos;re strong or weak:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Platform</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Visibility</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Avg Position</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Sentiment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">ChatGPT</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">72%</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">2.1</td>
                        <td className="px-4 py-3 text-sm text-green-600 border-b">+45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Claude</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">68%</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">1.8</td>
                        <td className="px-4 py-3 text-sm text-green-600 border-b">+52</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Perplexity</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">81%</td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">1.5</td>
                        <td className="px-4 py-3 text-sm text-green-600 border-b">+61</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Content Recommendations */}
              <section id="content-recommendations" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Recommendations</h2>
                <p className="text-gray-600 mb-6">
                  Prompt Clarity analyzes AI responses to identify content gaps and opportunities that can improve your visibility.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Generate Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Content recommendations are generated entirely from your existing execution data.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">

{`1. QUERY EXECUTION DATA
   ├─ Get all prompts and executions from database
   ├─ Each execution has: brand_mentions (0 or 1),
   │  competitors_mentioned (JSON array), sources (JSON array)
   └─ Group executions by prompt_id

2. IDENTIFY CONTENT GAPS
   ├─ For each prompt, count: brandWins (brand_mentions > 0)
   ├─ Count: competitorWins (competitors_mentioned.length > 0)
   ├─ If competitorWins > brandWins → create content gap
   ├─ yourVisibility = (brandWins / totalExecutions) × 100
   ├─ competitorVisibility = (competitorWins / totalExecutions) × 100
   └─ Track which competitors are winning and sources they cite

3. DETECT SEGMENTS (regex pattern matching)
   ├─ Industry: /law firm|legal/ → "Law Firms"
   │            /healthcare|medical/ → "Healthcare"
   │            /e-commerce|retail/ → "E-commerce"
   │            /saas|software|cloud/ → "SaaS"
   ├─ Use-case: /remote team|work from home/ → "Remote Teams"
   │            /small business|startup/ → "Small Business"
   │            /enterprise|corporation/ → "Enterprise"
   └─ Persona:  /developer|engineer/ → "Developers"
                /marketer|marketing/ → "Marketers"
                /sales|salesperson/ → "Sales Teams"

4. EXTRACT TARGET KEYWORDS
   ├─ Split prompt text into words
   ├─ Filter stop words: the, a, what, how, best, for, to, in, of, and, or
   ├─ Keep words longer than 3 characters
   ├─ Capitalize first letter, return up to 5 keywords
   └─ Example: "best CRM tools for startups" → ["Crm", "Tools", "Startups"]

5. SUGGEST CONTENT TYPE (keyword matching)
   ├─ "compare" or "vs" → Comparison guide
   ├─ "how to" → Step-by-step tutorial
   ├─ "best" or "top" → Listicle or roundup
   ├─ "review" → In-depth review
   └─ "price" or "cost" → Pricing guide

6. CALCULATE & PRIORITIZE
   ├─ Gap score = (competitorVisibility - yourVisibility) × 0.5
   │              + competitorsWinning.length × 10 + totalExecutions × 2
   ├─ Estimated impact = gap score (capped at 100)
   └─ Sort all recommendations by impact (highest first)`}


                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Content Recommendations</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Documentation & Guides</h4>
                        <p className="text-gray-600 text-sm">AI models heavily cite official documentation. Comprehensive, well-structured docs increase your chances of being recommended.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Comparison Content</h4>
                        <p className="text-gray-600 text-sm">Pages comparing your product to competitors help AI understand your positioning and differentiators.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Use Case Studies</h4>
                        <p className="text-gray-600 text-sm">Specific examples of how your product solves problems help AI match you to relevant queries.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Technical Tutorials</h4>
                        <p className="text-gray-600 text-sm">Step-by-step guides that get indexed and referenced when users ask &quot;how to&quot; questions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Example Recommendation</h4>
                  <p className="text-blue-800 text-sm">
                    <strong>Gap Detected:</strong> Your brand is mentioned 0% of the time for &quot;enterprise deployment&quot; queries, while competitors average 45%.<br />
                    <strong>Recommendation:</strong> Create an &quot;Enterprise Deployment Guide&quot; covering security, scalability, and compliance topics.
                  </p>
                </div>
              </section>

              {/* PR & Partnerships */}
              <section id="pr-partnerships" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">PR & Partnership Strategy</h2>
                <p className="text-gray-600 mb-6">
                  AI models rely on external sources to form recommendations. We analyze which sites get cited to identify strategic partnership and PR opportunities.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">How Opportunities are Generated</h3>
                <p className="text-gray-600 mb-4">
                  Off-page opportunities are generated from your execution data.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">

{`1. EXTRACT SOURCES FROM EXECUTIONS
   ├─ Query all executions from database
   ├─ Each execution has sources JSON: [{domain, url, type}, ...]
   ├─ For each source, track per domain:
   │    frequency: how many times this domain appears
   │    brandPresent: count of executions where brand was also mentioned
   │    competitorPresent: count where competitors were mentioned
   │    promptsAppearing: which prompts cited this source
   │    urls: list of specific URLs cited
   └─ Skip your own domain (business.website)

2. CATEGORIZE SOURCES BY TYPE (domain pattern matching)
   ├─ UGC patterns: reddit.com, quora.com, facebook.com, twitter.com,
   │               x.com, linkedin.com, medium.com, dev.to,
   │               stackoverflow.com, *discourse*, *forum*,
   │               *community*, *groups*, *discuss*
   ├─ Reference patterns: wikipedia.org, britannica.com, *.gov,
   │                     *.edu, *.org, statista.com, *pew*,
   │                     *research*, *institute*, *foundation*
   ├─ Competitor: domain contains competitor name or website
   │             (matched against competitor list from database)
   └─ Editorial: everything else (news, blogs, publications)

3. CALCULATE PRIORITY SCORES
   ├─ Higher score = higher priority opportunity
   ├─ Editorial score = frequency × 5
   │                    + (100 - brandPresenceRate) × 0.3
   │                    + competitorPresenceRate × 0.5
   ├─ UGC score = frequency × 4
   │              + (100 - brandPresenceRate) × 0.4
   │              + competitorPresenceRate × 0.6
   ├─ Reference score = frequency × 6
   │                    + (100 - brandPresenceRate) × 0.2
   │                    + competitorPresenceRate × 0.3
   └─ brandPresenceRate = (brandPresent / frequency) × 100

4. GENERATE OUTREACH RECOMMENDATIONS
   ├─ Editorial actions based on brand presence:
   │    0% + competitor > 50% → "High-priority PR outreach"
   │    0% → "Pitch for inclusion in articles"
   │    < competitor → "Increase presence via guest posts"
   ├─ UGC engagement strategies by platform:
   │    Reddit → "Answer questions authentically, avoid self-promotion"
   │    LinkedIn → "Share thought leadership, engage discussions"
   │    Quora → "Answer thoroughly with data and examples"
   │    Stack Overflow → "Provide detailed technical answers"
   └─ Pitch types based on domain:
        techcrunch/venturebeat/wired → "Tech industry story"
        forbes/inc/entrepreneur → "Business/leadership angle"
        *review*/pcmag/cnet → "Product review or comparison"

5. PRIORITIZE & SORT
   ├─ Estimated impact = priority score × multiplier (capped at 100)
   │    Editorial: × 1.5, UGC: × 1.2, Reference: × 2.0
   └─ Sort all targets by estimated impact (highest first)`}


                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">High-Authority Sites</h4>
                    <p className="text-gray-600 text-sm mb-2">Sites AI trusts and cites frequently:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Industry publications (TechCrunch, Wired)</li>
                      <li>• Developer platforms (GitHub, Stack Overflow)</li>
                      <li>• Review sites (G2, Capterra)</li>
                      <li>• Community forums (Reddit, Hacker News)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Actions</h4>
                    <p className="text-gray-600 text-sm mb-2">How to leverage these insights:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Guest posts on high-authority blogs</li>
                      <li>• Contribute to open source projects</li>
                      <li>• Engage in community discussions</li>
                      <li>• Seek product reviews and mentions</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">PR Move Recommendations</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">Get listed on G2</span>
                      <p className="text-gray-500 text-sm">High citation rate for product comparisons</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">High Impact</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">Wikipedia mention</span>
                      <p className="text-gray-500 text-sm">Referenced in 34% of industry queries</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">High Impact</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">GitHub presence</span>
                      <p className="text-gray-500 text-sm">Open source projects get 2.3x more mentions</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Medium Impact</span>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Competitor Source Analysis</h4>
                  <p className="text-purple-800 text-sm">
                    We also track which sources cite your competitors but not you. These represent immediate opportunities to close visibility gaps through targeted outreach.
                  </p>
                </div>
              </section>

              {/* Website Audits */}
              <section id="website-audits" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Website Audits</h2>
                <p className="text-gray-600 mb-6">
                  Optimize your website to be better understood and cited by AI models. Our audits analyze how AI-friendly your site structure and content are.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">How the Audit Works</h3>
                <p className="text-gray-600 mb-4">
                  Site audits <strong>fetch and parse your actual pages</strong> to analyze their AI-readiness.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">

{`1. DISCOVER URLS
   ├─ Try sitemap.xml, sitemap_index.xml, sitemap/sitemap.xml
   ├─ If no sitemap: crawl homepage and extract internal links
   └─ Limit to 50 pages per audit

2. FETCH EACH PAGE (HTTP request)
   ├─ GET request with PromptClarity User-Agent
   ├─ 30 second timeout per page
   └─ Record load time in milliseconds

3. PARSE HTML (using node-html-parser)
   ├─ Extract: title, meta description, headings (H1-H6)
   ├─ Find schema markup: JSON-LD scripts → extract @type
   ├─ Count: words, lists, tables, images, links
   └─ Check: Q&A format, canonical URL, robots meta

4. CALCULATE SCORES (0-100)
   ├─ Structure: title + meta + H1 count + heading hierarchy
   ├─ Content: word count + Q&A format + lists + images with alt
   ├─ Technical: load time + schema count + canonical + robots
   └─ Overall: average of structure, content, technical

5. GENERATE ISSUES & RECOMMENDATIONS
   ├─ Issues: missing title, no H1, thin content, slow load
   └─ Recommendations: add FAQ schema, improve headings, add lists`}


                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Score Calculation</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`Structure Score (100 points):
  Title present (15) + optimal length 30-60 chars (+10)
  Meta description present (15) + optimal length 70-160 chars (+10)
  Exactly one H1 (20) + H2 headings present (+10) + H3 present (+5)
  Proper heading hierarchy H1>H2>H3 (+15)

Content Score (100 points):
  Word count: 1500+ (30), 1000+ (25), 500+ (20), 300+ (10)
  Q&A format detected (+25)
  Has lists (+10) + has tables (+5)
  Internal links 5+ (15), 2+ (10), 1+ (5)
  Images with alt text (up to 15 based on ratio)

Technical Score (100 points):
  Load time: <1s (35), <2s (30), <3s (20), <5s (10)
  Schema types: 3+ (35), 2+ (30), 1+ (20)
  Has canonical URL (+15)
  Not blocking with noindex (+15)`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Analyze</h3>
                <div className="space-y-4 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Structured Data & Schema Markup</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      AI models parse structured data to understand your content. We check for:
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Organization schema (company info, logo, social profiles)</li>
                      <li>• Product schema (features, pricing, reviews)</li>
                      <li>• FAQ schema (common questions and answers)</li>
                      <li>• Article schema (author, publish date, topics)</li>
                      <li>• HowTo schema (tutorials and guides)</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Content Accessibility</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Can AI crawlers easily access and parse your content?
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Robots.txt configuration (not blocking AI crawlers)</li>
                      <li>• JavaScript rendering requirements</li>
                      <li>• Content behind authentication walls</li>
                      <li>• Mobile-friendliness and page speed</li>
                      <li>• Sitemap completeness and accuracy</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Content Quality Signals</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Factors that influence whether AI considers your content authoritative:
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Clear headings and content hierarchy</li>
                      <li>• Comprehensive topic coverage</li>
                      <li>• Updated timestamps and freshness signals</li>
                      <li>• Author attribution and expertise indicators</li>
                      <li>• Internal linking structure</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Crawler Compatibility</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm">
{`Known AI crawlers to allow in robots.txt:

User-agent: GPTBot          # OpenAI
User-agent: ChatGPT-User    # ChatGPT browse mode
User-agent: Google-Extended # Gemini training
User-agent: anthropic-ai    # Claude
User-agent: PerplexityBot   # Perplexity
User-agent: Bytespider      # TikTok/ByteDance AI

Recommended robots.txt:
Allow: /
Allow: /docs/
Allow: /blog/
Allow: /products/`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit Report Example</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Check</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Organization Schema</td>
                        <td className="px-4 py-3 text-sm border-b"><span className="text-green-600">✓ Present</span></td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Add social profile links</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Product Schema</td>
                        <td className="px-4 py-3 text-sm border-b"><span className="text-red-600">✗ Missing</span></td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Add to all product pages</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">FAQ Schema</td>
                        <td className="px-4 py-3 text-sm border-b"><span className="text-red-600">✗ Missing</span></td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Create FAQ section with schema</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">GPTBot Access</td>
                        <td className="px-4 py-3 text-sm border-b"><span className="text-yellow-600">⚠ Blocked</span></td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Update robots.txt to allow</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Content Freshness</td>
                        <td className="px-4 py-3 text-sm border-b"><span className="text-green-600">✓ Good</span></td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Maintain update schedule</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Impact of Optimization</h4>
                  <p className="text-green-800 text-sm">
                    Sites that implement our audit recommendations see an average <strong>23% increase</strong> in AI visibility within 30 days, primarily from improved crawlability and structured data implementation.
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
                  <li><strong>Visibility</strong> - How often each brand is mentioned</li>
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

              {/* Growth Trends */}
              <section id="growth-trends" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Growth Dashboard</h2>
                <p className="text-gray-600 mb-6">
                  Track visibility trends over time with comprehensive growth analytics.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Visibility over time</strong> - Line charts showing your visibility score trends</li>
                  <li><strong>Competitor comparison</strong> - See how your growth compares to competitors</li>
                  <li><strong>Platform breakdown</strong> - Growth trends per AI platform</li>
                  <li><strong>Period comparison</strong> - Compare this week/month to previous periods</li>
                </ul>
              </section>

              {/* Content Roadmap */}
              <section id="content-roadmap" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Roadmap</h2>
                <p className="text-gray-600 mb-6">
                  AI-powered content recommendations based on your visibility gaps.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Content Gap Analysis</h4>
                    <p className="text-gray-600 text-sm">Identify topics where competitors appear but you don&apos;t.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Topic Recommendations</h4>
                    <p className="text-gray-600 text-sm">AI-suggested topics based on industry trends.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Keyword Suggestions</h4>
                    <p className="text-gray-600 text-sm">Terms that frequently appear in high-visibility responses.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Content Type Suggestions</h4>
                    <p className="text-gray-600 text-sm">Documentation, tutorials, comparisons based on what AI cites.</p>
                  </div>
                </div>
              </section>

              {/* Off-Page Roadmap */}
              <section id="offpage-roadmap" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Off-Page Roadmap</h2>
                <p className="text-gray-600 mb-6">
                  PR and distribution opportunities to boost your AI visibility through external sources.
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Editorial Opportunities</h4>
                    <p className="text-gray-600 text-sm">News sites, publications, and tech blogs that AI models frequently cite.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">UGC Opportunities</h4>
                    <p className="text-gray-600 text-sm">Reddit, Quora, LinkedIn, and community platforms where you should have presence.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Reference Sites</h4>
                    <p className="text-gray-600 text-sm">Wikipedia, .edu domains, and authoritative sources that boost credibility.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Outreach Strategies</h4>
                    <p className="text-gray-600 text-sm">AI-generated pitch ideas and outreach templates for each opportunity.</p>
                  </div>
                </div>
              </section>

              {/* Site Audit */}
              <section id="site-audit" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Site Audit Dashboard</h2>
                <p className="text-gray-600 mb-6">
                  Technical SEO analysis to ensure your site is AI-crawler friendly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Structure Scoring</h4>
                    <p className="text-gray-600 text-sm">Overall site health score based on AI-crawlability factors.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Schema Detection</h4>
                    <p className="text-gray-600 text-sm">Checks for FAQ, HowTo, Product, Organization schema markup.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Content Analysis</h4>
                    <p className="text-gray-600 text-sm">Word count, lists, Q&amp;A sections, and content structure.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Factors</h4>
                    <p className="text-gray-600 text-sm">Load time, mobile friendliness, canonical URLs, robots.txt.</p>
                  </div>
                </div>
              </section>

              {/* Benchmarking */}
              <section id="benchmarking" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benchmarking</h2>
                <p className="text-gray-600 mb-6">
                  Compare your visibility metrics against industry standards and competitors.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Industry comparisons</strong> - See how you rank in your vertical</li>
                  <li><strong>Competitor benchmarks</strong> - Track relative position changes</li>
                  <li><strong>Platform performance</strong> - Compare visibility across AI models</li>
                  <li><strong>Historical benchmarks</strong> - Track improvement over time</li>
                </ul>
              </section>

              {/* Team Management */}
              <section id="team-management" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Team Management</h2>
                <p className="text-gray-600 mb-6">
                  Invite team members and manage access to your Prompt Clarity instance.
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Email Invitations</h4>
                    <p className="text-gray-600 text-sm">Send invite links to team members via email. Requires RESEND_API_KEY configuration.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Role-Based Access</h4>
                    <p className="text-gray-600 text-sm">Assign roles to control what team members can view and edit.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Member Management</h4>
                    <p className="text-gray-600 text-sm">View active members, pending invites, and remove access as needed.</p>
                  </div>
                </div>
              </section>

              {/* Model Configuration */}
              <section id="model-configuration" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Model Configuration</h2>
                <p className="text-gray-600 mb-6">
                  Configure AI platforms and manage API keys from the Models dashboard.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Per-platform API keys</strong> - Add or update keys for each AI service</li>
                  <li><strong>Enable/disable platforms</strong> - Toggle which platforms to include in executions</li>
                  <li><strong>Budget tracking</strong> - Monitor API usage and costs</li>
                  <li><strong>Usage statistics</strong> - View execution counts and token usage per platform</li>
                </ul>
              </section>

              {/* Position Tracking */}
              <section id="position-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Position Tracking</h2>
                <p className="text-gray-600 mb-6">
                  Track where your brand appears when AI lists multiple recommendations.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>1st position</strong> - AI recommends you first (highest impact)</li>
                  <li><strong>2nd-3rd position</strong> - Still prominent placement</li>
                  <li><strong>4th+ position</strong> - Mentioned but lower visibility</li>
                  <li><strong>Not mentioned</strong> - Opportunity for improvement</li>
                </ul>
              </section>

              {/* Historical Trends */}
              <section id="historical-trends" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Historical Trends</h2>
                <p className="text-gray-600 mb-6">
                  All prompt executions are stored with timestamps to build historical visibility data.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Compare visibility week-over-week or month-over-month</li>
                  <li>Identify trending topics where your visibility is changing</li>
                  <li>Track the impact of content and PR efforts over time</li>
                  <li>Export historical data for external analysis</li>
                </ul>
              </section>

              {/* Scheduled Execution */}
              <section id="scheduled-execution" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Scheduled Execution</h2>
                <p className="text-gray-600 mb-6">
                  Automate prompt execution on a schedule to build continuous visibility data.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                    <div className="font-semibold text-gray-900 mb-1">Daily</div>
                    <p className="text-gray-600 text-sm">Run all prompts every day</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                    <div className="font-semibold text-gray-900 mb-1">Every 3 Days</div>
                    <p className="text-gray-600 text-sm">Balanced frequency option</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                    <div className="font-semibold text-gray-900 mb-1">Weekly</div>
                    <p className="text-gray-600 text-sm">Lower API usage</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Executions run with up to 5 parallel requests to balance speed and API rate limits. Real-time SSE updates show progress in the UI.
                </p>
              </section>

              {/* Budget Tracking */}
              <section id="budget-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Budget Tracking</h2>
                <p className="text-gray-600 mb-6">
                  Monitor API costs and usage across all configured platforms.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Cost estimation</strong> - Projected costs based on prompt count and frequency</li>
                  <li><strong>Usage statistics</strong> - Token counts per platform per execution</li>
                  <li><strong>Platform breakdown</strong> - See which AI services cost the most</li>
                  <li><strong>Disable platforms</strong> - Turn off expensive platforms to reduce costs</li>
                </ul>
              </section>

              {/* Cloud Platforms */}
              <section id="cloud-platforms" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud Platforms</h2>
                <p className="text-gray-600 mb-6">
                  Deploy Prompt Clarity to your preferred cloud provider.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Render</h4>
                    <p className="text-gray-600 text-sm">Simple deployment with automatic builds from GitHub.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Fly.io</h4>
                    <p className="text-gray-600 text-sm">Edge deployment with global distribution.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vercel</h4>
                    <p className="text-gray-600 text-sm">Optimized for Next.js with built-in cron jobs.</p>
                  </div>
                </div>
              </section>

              {/* Supported Models */}
              <section id="supported-models" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Supported AI Models</h2>
                <p className="text-gray-600 mb-6">
                  Prompt Clarity supports 5 major AI platforms out of the box. All platforms are fully configurable via YAML configuration files.
                </p>

                <div className="space-y-4 mb-8">
                  {/* ChatGPT */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#10a37f] rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">ChatGPT</h3>
                          <p className="text-gray-500 text-sm">OpenAI</p>
                        </div>
                      </div>
                      <code className="bg-gray-200 px-3 py-1 rounded text-sm font-mono text-gray-700">gpt-5.1</code>
                    </div>
                  </div>

                  {/* Claude */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#D77655] rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6" viewBox="0 0 16 16" fill="#FCF2EE">
                            <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Claude</h3>
                          <p className="text-gray-500 text-sm">Anthropic</p>
                        </div>
                      </div>
                      <code className="bg-gray-200 px-3 py-1 rounded text-sm font-mono text-gray-700">claude-sonnet-4-20250514</code>
                    </div>
                  </div>

                  {/* Gemini */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
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
                          <p className="text-gray-500 text-sm">Google</p>
                        </div>
                      </div>
                      <code className="bg-gray-200 px-3 py-1 rounded text-sm font-mono text-gray-700">gemini-2.0-flash</code>
                    </div>
                  </div>

                  {/* Perplexity */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#1F1F1F] rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6" viewBox="0 0 512 509.64" fill="none">
                            <path fill="#fff" fillRule="nonzero" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.8c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Perplexity</h3>
                          <p className="text-gray-500 text-sm">Perplexity AI</p>
                        </div>
                      </div>
                      <code className="bg-gray-200 px-3 py-1 rounded text-sm font-mono text-gray-700">sonar-pro</code>
                    </div>
                  </div>

                  {/* Grok */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6" viewBox="0 0 512 509.641" fill="none">
                            <path fill="#fff" d="M213.235 306.019l178.976-180.002v.169l51.695-51.763c-.924 1.32-1.86 2.605-2.785 3.89-39.281 54.164-58.46 80.649-43.07 146.922l-.09-.101c10.61 45.11-.744 95.137-37.398 131.836-46.216 46.306-120.167 56.611-181.063 14.928l42.462-19.675c38.863 15.278 81.392 8.57 111.947-22.03 30.566-30.6 37.432-75.159 22.065-112.252-2.92-7.025-11.67-8.795-17.792-4.263l-124.947 92.341zm-25.786 22.437l-.033.034L68.094 435.217c7.565-10.429 16.957-20.294 26.327-30.149 26.428-27.803 52.653-55.359 36.654-94.302-21.422-52.112-8.952-113.177 30.724-152.898 41.243-41.254 101.98-51.661 152.706-30.758 11.23 4.172 21.016 10.114 28.638 15.639l-42.359 19.584c-39.44-16.563-84.629-5.299-112.207 22.313-37.298 37.308-44.84 102.003-1.128 143.81z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Grok</h3>
                          <p className="text-gray-500 text-sm">xAI</p>
                        </div>
                      </div>
                      <code className="bg-gray-200 px-3 py-1 rounded text-sm font-mono text-gray-700">grok-2-1212</code>
                    </div>
                  </div>
                </div>

                {/* Platform Configuration */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Platform Configuration</h3>
                <p className="text-gray-600 mb-4">
                  Platforms are configured via <code className="bg-gray-100 px-2 py-1 rounded">config/platforms/platforms.yaml</code>. You can customize models, add new platforms, or disable existing ones:
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`# config/platforms/platforms.yaml
platforms:
  chatgpt:
    name: ChatGPT
    provider: openai
    model: gpt-5.1

  claude:
    name: Anthropic Claude
    provider: anthropic
    model: claude-sonnet-4-20250514

  gemini:
    name: Google Gemini
    provider: google
    model: gemini-2.0-flash

  perplexity:
    name: Perplexity
    provider: perplexity
    model: sonar-pro

  grok:
    name: Grok
    provider: xai
    model: grok-2-1212`}
                  </pre>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Customization Options</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Change model versions by updating the <code className="bg-blue-100 px-1 rounded">model</code> field</li>
                    <li>• Disable a platform by removing or commenting out its section</li>
                    <li>• Add new platforms by following the same YAML structure</li>
                    <li>• Restart the server after making configuration changes</li>
                  </ul>
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

              {/* Prompt Templates */}
              <section id="prompt-templates" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prompt Templates</h2>
                <p className="text-gray-600 mb-6">
                  Customize how Prompt Clarity generates topics, prompts, competitors, and analyzes responses via YAML configuration files in <code className="bg-gray-100 px-2 py-1 rounded">config/prompts/</code>.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">File</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Variables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b"><a href="https://github.com/promptclarity/promptclarity/blob/main/config/prompts/onboarding-topics.yaml" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">onboarding-topics.yaml</a></td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Generate business topics during onboarding</td>
                        <td className="px-4 py-3 text-sm text-gray-500 border-b">businessName, website</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b"><a href="https://github.com/promptclarity/promptclarity/blob/main/config/prompts/onboarding-prompts.yaml" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">onboarding-prompts.yaml</a></td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Generate search prompts for tracking</td>
                        <td className="px-4 py-3 text-sm text-gray-500 border-b">businessName, website, topics</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700 border-b"><a href="https://github.com/promptclarity/promptclarity/blob/main/config/prompts/onboarding-competitors.yaml" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">onboarding-competitors.yaml</a></td>
                        <td className="px-4 py-3 text-sm text-gray-600 border-b">Identify competitors automatically</td>
                        <td className="px-4 py-3 text-sm text-gray-500 border-b">businessName, website, topics</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700"><a href="https://github.com/promptclarity/promptclarity/blob/main/config/prompts/mention-analysis.yaml" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">mention-analysis.yaml</a></td>
                        <td className="px-4 py-3 text-sm text-gray-600">Analyze AI responses for brand mentions</td>
                        <td className="px-4 py-3 text-sm text-gray-500">brandName, competitors, response</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Template Format</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`# config/prompts/onboarding-topics.yaml
systemPrompt: Optional system prompt for the AI

userPromptTemplate: |
  For the business {{businessName}} ({{website}}),
  generate 5-7 relevant topic categories...

temperature: 0.7
maxOutputTokens: 15000`}
                  </pre>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Template Variables</h4>
                  <p className="text-yellow-800 text-sm">
                    Use <code className="bg-yellow-100 px-1 rounded">{"{{variableName}}"}</code> syntax in templates. Variables are automatically replaced at runtime with actual values from your business configuration.
                  </p>
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
  promptclarity/promptclarity:latest`}
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
{`docker pull promptclarity/promptclarity:latest
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
