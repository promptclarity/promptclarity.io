import Link from "next/link";

export default function CustomPromptsPage() {
  return (
    <div className="min-h-screen bg-[#f9fbfc]">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#e0e4e9] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.268 2 2 7.373 2 14c0 3.667 1.867 6.933 4.8 9.2L4 28l6.4-3.2C12.133 25.6 14 26 16 26c7.732 0 14-5.373 14-12S23.732 2 16 2z" fill="#509ee3" />
                <circle cx="16" cy="14" r="9" fill="white" />
                <circle cx="16" cy="14" r="7" stroke="#509ee3" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="14" r="4" stroke="#509ee3" strokeWidth="1.5" fill="none" />
                <line x1="16" y1="5" x2="16" y2="23" stroke="#509ee3" strokeWidth="1" />
                <line x1="7" y1="14" x2="25" y2="14" stroke="#509ee3" strokeWidth="1" />
                <path d="M16 10 L17 13 L20 14 L17 15 L16 18 L15 15 L12 14 L15 13 Z" fill="#509ee3" />
                <line x1="16" y1="14" x2="23" y2="5" stroke="#509ee3" strokeWidth="1.5" />
                <circle cx="23" cy="5" r="1.5" fill="#509ee3" />
              </svg>
              <span className="text-xl font-bold text-[#2e353b]">Prompt Clarity</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/#features" className="text-[#74838f] hover:text-[#2e353b] transition-colors">Features</Link>
              <Link href="/docs" className="text-[#74838f] hover:text-[#2e353b] transition-colors">Docs</Link>
              <Link href="https://github.com/verobytes/PromptClarity" className="bg-[#509ee3] text-white px-4 py-2 rounded-lg hover:bg-[#4a8fd1] transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-white via-[#f0f7ff] to-[#e6f4ea] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#50c8c6] rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#509ee3] rounded-full filter blur-[120px]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/#features" className="inline-flex items-center gap-2 text-[#509ee3] hover:text-[#4a8fd1] text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Features
          </Link>
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#50c8c6] to-[#14b8a6] rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/25">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2e353b] mb-4">Custom Prompts</h1>
              <p className="text-xl text-[#74838f] leading-relaxed max-w-3xl">
                Create and manage prompts that matter to your business. Track specific queries your customers might ask AI assistants. See where your brand ranks in every response.
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "AI-Gen", label: "Auto Prompts" },
              { value: "3+", label: "Strategies" },
              { value: "Topics", label: "Organized" },
              { value: "Custom", label: "Personas" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm">
                <div className="text-2xl font-bold text-[#2e353b]">{stat.value}</div>
                <div className="text-sm text-[#74838f]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models */}
      <section className="py-12 bg-white border-y border-[#e0e4e9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#74838f] mb-6">Execute prompts across all major AI platforms using the latest flagship models</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#10a37f] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                </svg>
              </div>
              <span className="text-[#74838f] font-medium">ChatGPT</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#D77655] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 16 16" fill="#FCF2EE">
                  <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
                </svg>
              </div>
              <span className="text-[#74838f] font-medium">Claude</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1F1F1F] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 512 509.64" fill="none">
                  <path fill="#fff" fillRule="nonzero" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.8c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
                </svg>
              </div>
              <span className="text-[#74838f] font-medium">Perplexity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-[#e0e4e9]">
                <svg className="w-6 h-6" viewBox="0 0 65 65" fill="none">
                  <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#gemini-prompt)"/>
                  <defs>
                    <linearGradient id="gemini-prompt" x1="0" y1="32" x2="65" y2="32" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4285F4"/>
                      <stop offset="50%" stopColor="#9B72CB"/>
                      <stop offset="100%" stopColor="#D96570"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-[#74838f] font-medium">Gemini</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 512 509.641" fill="none">
                  <path fill="#fff" d="M213.235 306.019l178.976-180.002v.169l51.695-51.763c-.924 1.32-1.86 2.605-2.785 3.89-39.281 54.164-58.46 80.649-43.07 146.922l-.09-.101c10.61 45.11-.744 95.137-37.398 131.836-46.216 46.306-120.167 56.611-181.063 14.928l42.462-19.675c38.863 15.278 81.392 8.57 111.947-22.03 30.566-30.6 37.432-75.159 22.065-112.252-2.92-7.025-11.67-8.795-17.792-4.263l-124.947 92.341zm-25.786 22.437l-.033.034L68.094 435.217c7.565-10.429 16.957-20.294 26.327-30.149 26.428-27.803 52.653-55.359 36.654-94.302-21.422-52.112-8.952-113.177 30.724-152.898 41.243-41.254 101.98-51.661 152.706-30.758 11.23 4.172 21.016 10.114 28.638 15.639l-42.359 19.584c-39.44-16.563-84.629-5.299-112.207 22.313-37.298 37.308-44.84 102.003-1.128 143.81z"/>
                </svg>
              </div>
              <span className="text-[#74838f] font-medium">Grok</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How It Works */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2e353b] mb-4">How It Works</h2>
              <p className="text-[#74838f] max-w-2xl mx-auto">AI-generated prompts tailored to your business and strategy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { step: "01", title: "AI-Generated Prompts", description: "During onboarding, Prompt Clarity analyzes your business and generates 3-5 relevant prompts per topic. These are based on your industry, website, and chosen strategy." },
                { step: "02", title: "Strategy-Driven Generation", description: "Prompts are tailored to your goals. Visibility strategy generates awareness queries. Sentiment strategy creates comparison prompts. Leads strategy focuses on purchase-intent queries." },
                { step: "03", title: "Full Customization", description: "Add, edit, or delete any prompt. Create prompts for specific use cases, target personas, product segments, or geographic markets." },
                { step: "04", title: "Topic Organization", description: "Prompts are organized by topics (e.g., \"Enterprise Security\", \"Remote Work\", \"Pricing\"). This enables per-topic performance analysis and easier management." },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl border border-[#e0e4e9] p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0 bg-[#2e353b]">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2e353b] text-lg mb-2">{item.title}</h3>
                      <p className="text-[#74838f]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt Types by Strategy */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2e353b] mb-4">Prompt Types by Strategy</h2>
              <p className="text-[#74838f] max-w-2xl mx-auto">Different strategies generate different types of prompts to match your goals.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-[#2e353b] rounded-full"></div>
                  <h3 className="font-bold text-[#2e353b] text-lg">Visibility Strategy</h3>
                </div>
                <p className="text-[#74838f] mb-4">Educational and awareness-level queries:</p>
                <div className="space-y-2">
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;What is [industry] and how does it work?&quot;</div>
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;Best [product category] tools in 2025&quot;</div>
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;How to choose a [solution type]&quot;</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-[#2e353b] rounded-full"></div>
                  <h3 className="font-bold text-[#2e353b] text-lg">Sentiment Strategy</h3>
                </div>
                <p className="text-[#74838f] mb-4">Comparison and review-focused queries:</p>
                <div className="space-y-2">
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;[Your brand] vs [Competitor] comparison&quot;</div>
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;Is [Your brand] worth it? Reviews&quot;</div>
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;Alternatives to [Competitor]&quot;</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-[#2e353b] rounded-full"></div>
                  <h3 className="font-bold text-[#2e353b] text-lg">Leads Strategy</h3>
                </div>
                <p className="text-[#74838f] mb-4">Purchase-intent and decision-stage queries:</p>
                <div className="space-y-2">
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;Best [product] for [specific use case]&quot;</div>
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;I need a [solution] for my [business type]&quot;</div>
                  <div className="bg-[#f9fbfc] rounded-lg px-4 py-3 font-mono text-sm text-[#2e353b] border border-[#e0e4e9]">&quot;Which [product] should I buy for [requirement]?&quot;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Persona-Based Prompts */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2e353b] mb-4">Persona-Based Prompts</h2>
              <p className="text-[#74838f] max-w-2xl mx-auto">Generate prompts from the perspective of your target personas.</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e0e4e9] p-6 md:p-8">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-[#e8f4fc] to-white rounded-xl border border-[#509ee3]/20">
                  <span className="text-sm text-[#509ee3] font-semibold">IT Manager Persona</span>
                  <p className="font-mono text-[#2e353b] mt-2">&quot;I&apos;m an IT manager looking for a secure file sharing solution for my team of 50 people&quot;</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#e6f4ea] to-white rounded-xl border border-[#88bf4d]/20">
                  <span className="text-sm text-[#88bf4d] font-semibold">Startup Founder Persona</span>
                  <p className="font-mono text-[#2e353b] mt-2">&quot;What&apos;s the best project management tool for a 10-person startup on a tight budget?&quot;</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#f0e6ff] to-white rounded-xl border border-[#a989c5]/20">
                  <span className="text-sm text-[#a989c5] font-semibold">Enterprise Buyer Persona</span>
                  <p className="font-mono text-[#2e353b] mt-2">&quot;Which enterprise CRM integrates best with Salesforce and has SOC 2 compliance?&quot;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Performance */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2e353b] mb-4">Prompt Performance Tracking</h2>
              <p className="text-[#74838f] max-w-2xl mx-auto">Track where your brand ranks in the response. Are you listed first or further down?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#509ee3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2e353b] text-xl mb-2">Per-Prompt Visibility</h3>
                <p className="text-[#74838f]">See which specific prompts result in your brand being mentioned. Identify your strongest and weakest queries.</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#509ee3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2e353b] text-xl mb-2">Platform Variation</h3>
                <p className="text-[#74838f]">Same prompt, different results. See how each AI platform responds to the same query.</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#509ee3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2e353b] text-xl mb-2">Historical Comparison</h3>
                <p className="text-[#74838f]">Track how prompt performance changes over time. Did that new blog post improve your visibility?</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#509ee3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2e353b] text-xl mb-2">Competitor Response</h3>
                <p className="text-[#74838f]">For each prompt, see which competitors appear and in what position. Understand your competitive landscape per query.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#50c8c6] to-[#14b8a6] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Track the Queries That Matter</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">Monitor the exact prompts your customers are asking AI assistants. See where you rank in every response.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://github.com/verobytes/PromptClarity"
                  className="inline-flex items-center gap-2 bg-white text-[#14b8a6] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors"
                >
                  Read the Docs
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e353b] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.268 2 2 7.373 2 14c0 3.667 1.867 6.933 4.8 9.2L4 28l6.4-3.2C12.133 25.6 14 26 16 26c7.732 0 14-5.373 14-12S23.732 2 16 2z" fill="#509ee3" />
                <circle cx="16" cy="14" r="9" fill="white" />
                <circle cx="16" cy="14" r="7" stroke="#509ee3" strokeWidth="1.5" fill="none" />
                <path d="M16 10 L17 13 L20 14 L17 15 L16 18 L15 15 L12 14 L15 13 Z" fill="#509ee3" />
              </svg>
              <span className="text-white font-semibold">Prompt Clarity</span>
            </div>
            <p className="text-[#74838f] text-sm">&copy; 2025 Prompt Clarity. Open source under MIT license.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
