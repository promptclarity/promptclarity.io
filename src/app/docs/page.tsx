import Link from "next/link";

// Docs Navigation
const docsNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#introduction" },
      { title: "Quick Start", href: "#quick-start" },
      { title: "Core Concepts", href: "#core-concepts" },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Visibility Tracking", href: "#visibility-tracking" },
      { title: "Competitor Analysis", href: "#competitor-analysis" },
      { title: "Prompt Generation", href: "#prompt-generation" },
      { title: "Recommendations", href: "#recommendations" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "API Overview", href: "#api-overview" },
      { title: "Webhooks", href: "#webhooks" },
      { title: "Data Export", href: "#data-export" },
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
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
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
                href="/signup"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-8">
              {docsNav.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-blue-500 transition-colors block py-1"
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
                  Learn how to track and improve your brand&apos;s visibility in AI-powered search results.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome to Prompt Clarity</h3>
                  <p className="text-blue-800">
                    Prompt Clarity helps you understand how AI assistants like ChatGPT, Claude, and Perplexity
                    recommend your brand. Track your visibility, analyze competitors, and get actionable
                    insights to improve your presence.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is AI Visibility?</h2>
                <p className="text-gray-600 mb-4">
                  AI visibility refers to how often and in what context your brand appears in responses
                  from AI assistants. As more people use AI for research and recommendations, appearing
                  in these responses becomes increasingly important for brand awareness and customer acquisition.
                </p>
              </section>

              {/* Quick Start */}
              <section id="quick-start" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>
                <p className="text-gray-600 mb-6">
                  Get up and running with Prompt Clarity in just a few minutes.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Create your account</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Sign up for a free account to get started. No credit card required.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Add your brand</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Enter your company name and website. Our AI will analyze your business to understand
                      your industry and target audience.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Select topics & prompts</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Choose from AI-generated topic suggestions or add your own. We&apos;ll create relevant
                      search prompts that potential customers might ask.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Start tracking</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Your dashboard will begin populating with visibility data. Track trends, compare
                      against competitors, and get optimization recommendations.
                    </p>
                  </div>
                </div>
              </section>

              {/* Core Concepts */}
              <section id="core-concepts" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Concepts</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Visibility Score</h3>
                    <p className="text-gray-600 mb-3">
                      Your visibility score represents the percentage of tracked prompts where your brand
                      is mentioned in AI responses. A higher score means your brand appears more frequently
                      when users ask relevant questions.
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                      Visibility Score = (Mentions / Total Prompts) × 100
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Sentiment Analysis</h3>
                    <p className="text-gray-600">
                      We analyze the context in which your brand is mentioned to determine sentiment.
                      Positive mentions recommend your brand, neutral mentions list it among options,
                      and negative mentions may include criticism or comparisons.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Source Tracking</h3>
                    <p className="text-gray-600">
                      Prompt Clarity identifies which websites and sources AI models cite when discussing
                      your industry. This helps you understand where to focus your content and
                      link-building efforts.
                    </p>
                  </div>
                </div>
              </section>

              {/* Visibility Tracking */}
              <section id="visibility-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visibility Tracking</h2>
                <p className="text-gray-600 mb-6">
                  Prompt Clarity monitors multiple AI platforms to give you a comprehensive view of your
                  brand&apos;s presence across the AI ecosystem.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Supported Platforms</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>ChatGPT (GPT-4, GPT-3.5)</li>
                  <li>Claude (Claude 3 Opus, Sonnet, Haiku)</li>
                  <li>Perplexity AI</li>
                  <li>Google Gemini</li>
                  <li>Microsoft Copilot</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tracking Frequency</h3>
                <p className="text-gray-600">
                  Prompts are executed on a regular schedule based on your plan. Free users get daily
                  tracking, while Pro and Enterprise users can enable hourly or real-time monitoring.
                </p>
              </section>

              {/* Competitor Analysis */}
              <section id="competitor-analysis" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Competitor Analysis</h2>
                <p className="text-gray-600 mb-6">
                  Understand how your brand stacks up against competitors in AI recommendations.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Adding Competitors</h3>
                <p className="text-gray-600 mb-4">
                  You can add competitors manually or let our AI suggest them based on your industry.
                  Once added, we&apos;ll track their visibility alongside yours.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comparison Metrics</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Share of Voice:</strong> How often each brand is mentioned</li>
                  <li><strong>Position:</strong> Where brands appear in ranked lists</li>
                  <li><strong>Sentiment:</strong> How positively each brand is portrayed</li>
                  <li><strong>Trend:</strong> How visibility is changing over time</li>
                </ul>
              </section>

              {/* Prompt Generation */}
              <section id="prompt-generation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prompt Generation</h2>
                <p className="text-gray-600 mb-6">
                  Our AI creates relevant prompts based on your business that simulate real user queries.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-6">
                  <li>We analyze your website to understand your products/services</li>
                  <li>We identify your target audience and their pain points</li>
                  <li>We generate prompts that potential customers might ask AI</li>
                  <li>You can customize, add, or remove prompts as needed</li>
                </ol>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prompt Categories</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Recommendation:</strong> &quot;What&apos;s the best [product] for [use case]?&quot;</li>
                  <li><strong>Comparison:</strong> &quot;Compare [your brand] vs [competitor]&quot;</li>
                  <li><strong>Research:</strong> &quot;What are the top [industry] companies?&quot;</li>
                  <li><strong>Problem-solving:</strong> &quot;How do I solve [problem]?&quot;</li>
                </ul>
              </section>

              {/* Recommendations */}
              <section id="recommendations" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimization Recommendations</h2>
                <p className="text-gray-600 mb-6">
                  Get actionable advice to improve your AI visibility based on your tracking data.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Page Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Suggestions for improving your website content to be better understood by AI models:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Structured data and schema markup</li>
                  <li>Clear product/service descriptions</li>
                  <li>FAQ sections addressing common queries</li>
                  <li>Authoritative content demonstrating expertise</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Off-Page Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Strategies for building your brand&apos;s authority across the web:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Getting mentioned on high-authority sites</li>
                  <li>Building presence on platforms AI models frequently cite</li>
                  <li>Creating content that gets linked and referenced</li>
                  <li>Engaging in industry discussions and publications</li>
                </ul>
              </section>

              {/* API Overview */}
              <section id="api-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">API Overview</h2>
                <p className="text-gray-600 mb-6">
                  Access your visibility data programmatically with our REST API (Enterprise plan).
                </p>

                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <p className="text-gray-400 text-sm mb-2">Base URL</p>
                  <code className="text-green-400">https://api.promptclarity.io/v1</code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentication</h3>
                <p className="text-gray-600 mb-4">
                  All API requests require an API key passed in the Authorization header:
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                  <code className="text-green-400">Authorization: Bearer your-api-key</code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Endpoints</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-mono">GET</span>
                    <code className="text-gray-600">/brands</code>
                    <span className="text-gray-400">- List all tracked brands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-mono">GET</span>
                    <code className="text-gray-600">/visibility</code>
                    <span className="text-gray-400">- Get visibility metrics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-mono">GET</span>
                    <code className="text-gray-600">/competitors</code>
                    <span className="text-gray-400">- Get competitor data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">POST</span>
                    <code className="text-gray-600">/prompts</code>
                    <span className="text-gray-400">- Create new prompts</span>
                  </div>
                </div>
              </section>

              {/* Webhooks */}
              <section id="webhooks" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Webhooks</h2>
                <p className="text-gray-600 mb-6">
                  Receive real-time notifications when your visibility changes significantly.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Events</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><code>visibility.increased</code> - Visibility improved by 5%+</li>
                  <li><code>visibility.decreased</code> - Visibility dropped by 5%+</li>
                  <li><code>competitor.overtake</code> - A competitor surpassed your visibility</li>
                  <li><code>mention.new</code> - New brand mention detected</li>
                </ul>
              </section>

              {/* Data Export */}
              <section id="data-export" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Export</h2>
                <p className="text-gray-600 mb-6">
                  Export your visibility data for reporting or further analysis.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Export Formats</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>CSV - For spreadsheet analysis</li>
                  <li>JSON - For programmatic processing</li>
                  <li>PDF - For executive reports</li>
                </ul>
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
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm">Terms</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-700 text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
