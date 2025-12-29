import Link from "next/link";

export default function MultiModelVisibilityPage() {
  return (
    <div className="min-h-screen bg-[#f9fbfc]">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#e0e4e9] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M16 3C8.268 3 2 8.373 2 15c0 3.5 1.8 6.6 4.5 8.7L4 28l5.5-2.8c2 .8 4.2 1.3 6.5 1.3 7.732 0 14-5.373 14-12S23.732 3 16 3z" fill="none" stroke="#5BA3E6" strokeWidth="2" />
                <circle cx="16" cy="14" r="9" stroke="#5BA3E6" strokeWidth="1" fill="none" />
                <circle cx="16" cy="14" r="6" stroke="#5BA3E6" strokeWidth="1" fill="none" />
                <circle cx="16" cy="14" r="3" stroke="#5BA3E6" strokeWidth="1" fill="none" />
                <circle cx="16" cy="14" r="1.5" fill="#5BA3E6" />
                <line x1="16" y1="14" x2="24" y2="5" stroke="#5BA3E6" strokeWidth="1.5" />
                <circle cx="24" cy="5" r="1" fill="#5BA3E6" />
                <line x1="24" y1="1" x2="24" y2="3" stroke="#5BA3E6" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="27" y1="2.5" x2="25.5" y2="4" stroke="#5BA3E6" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="28" y1="5" x2="26" y2="5" stroke="#5BA3E6" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-xl font-bold text-[#2e353b]">Prompt Clarity</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/#features" className="text-[#74838f] hover:text-[#2e353b] transition-colors">Features</Link>
              <Link href="/docs" className="text-[#74838f] hover:text-[#2e353b] transition-colors">Docs</Link>
              <Link
                href="https://github.com/verobytes/PromptClarity"
                className="bg-[#509ee3] text-white px-4 py-2 rounded-lg hover:bg-[#4a8fd1] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-white via-[#e8f4fc] to-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#509ee3] rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#88bf4d] rounded-full filter blur-[120px]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/#features" className="inline-flex items-center gap-2 text-[#509ee3] hover:text-[#4a8fd1] text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Features
          </Link>
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#509ee3] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2e353b] mb-4">Multi-Model Visibility Tracking</h1>
              <p className="text-xl text-[#74838f] leading-relaxed max-w-3xl">
                Monitor your brand mentions across ChatGPT, Claude, Perplexity, Gemini, and Grok. Track where your brand ranks in the response. Are you listed first or further down?
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "5+", label: "AI Platforms" },
              { value: "Real-time", label: "Updates" },
              { value: "100%", label: "API Coverage" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm">
                <div className="text-2xl font-bold text-[#2e353b]">{stat.value}</div>
                <div className="text-sm text-[#74838f]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms - Featured Section */}
      <section className="py-16 bg-white border-y border-[#e0e4e9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2e353b] mb-4">Track Across All Major AI Platforms</h2>
            <p className="text-[#74838f] max-w-2xl mx-auto">
              We use the latest flagship models by default, but you can choose which model to use for each platform. Get consistent visibility data across the entire AI ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ChatGPT */}
            <div className="bg-gradient-to-br from-[#f0fdf4] to-white rounded-2xl border border-[#10a37f]/20 p-6 hover:shadow-lg hover:shadow-[#10a37f]/10 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#10a37f] rounded-xl flex items-center justify-center shadow-lg shadow-[#10a37f]/30">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2e353b] text-lg">ChatGPT</h3>
                  <p className="text-sm text-[#10a37f] font-medium">GPT-4o / GPT-4 Turbo</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-[#10a37f]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Web browsing enabled
                </div>
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-[#10a37f]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time data access
                </div>
              </div>
            </div>

            {/* Claude */}
            <div className="bg-gradient-to-br from-[#fdf4ef] to-white rounded-2xl border border-[#D77655]/20 p-6 hover:shadow-lg hover:shadow-[#D77655]/10 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#D77655] rounded-xl flex items-center justify-center shadow-lg shadow-[#D77655]/30">
                  <svg className="w-8 h-8" viewBox="0 0 16 16" fill="#FCF2EE">
                    <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2e353b] text-lg">Claude</h3>
                  <p className="text-sm text-[#D77655] font-medium">Claude Opus 4 / Sonnet</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-[#D77655]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Extended context window
                </div>
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-[#D77655]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Nuanced brand analysis
                </div>
              </div>
            </div>

            {/* Perplexity */}
            <div className="bg-gradient-to-br from-[#f5f5f5] to-white rounded-2xl border border-[#1F1F1F]/20 p-6 hover:shadow-lg hover:shadow-black/10 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#1F1F1F] rounded-xl flex items-center justify-center shadow-lg shadow-black/30">
                  <svg className="w-8 h-8" viewBox="0 0 512 509.64" fill="none">
                    <path fill="#fff" fillRule="nonzero" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.8c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2e353b] text-lg">Perplexity</h3>
                  <p className="text-sm text-[#1F1F1F] font-medium">Sonar Pro / Deep Research</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-[#1F1F1F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Citation-first responses
                </div>
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-[#1F1F1F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time web search
                </div>
              </div>
            </div>

            {/* Gemini */}
            <div className="bg-gradient-to-br from-[#f0f4ff] to-white rounded-2xl border border-[#4285F4]/20 p-6 hover:shadow-lg hover:shadow-[#4285F4]/10 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border border-[#e0e4e9]">
                  <svg className="w-8 h-8" viewBox="0 0 65 65" fill="none">
                    <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#gemini-feature)"/>
                    <defs>
                      <linearGradient id="gemini-feature" x1="0" y1="32" x2="65" y2="32" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#4285F4"/>
                        <stop offset="50%" stopColor="#9B72CB"/>
                        <stop offset="100%" stopColor="#D96570"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2e353b] text-lg">Gemini</h3>
                  <p className="text-sm text-[#4285F4] font-medium">Gemini 2.0 Pro / Flash</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-[#4285F4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Google Search integration
                </div>
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-[#4285F4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multimodal capabilities
                </div>
              </div>
            </div>

            {/* Grok */}
            <div className="bg-gradient-to-br from-[#f5f5f5] to-white rounded-2xl border border-black/20 p-6 hover:shadow-lg hover:shadow-black/10 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center shadow-lg shadow-black/30">
                  <svg className="w-8 h-8" viewBox="0 0 512 509.641" fill="none">
                    <path fill="#fff" d="M213.235 306.019l178.976-180.002v.169l51.695-51.763c-.924 1.32-1.86 2.605-2.785 3.89-39.281 54.164-58.46 80.649-43.07 146.922l-.09-.101c10.61 45.11-.744 95.137-37.398 131.836-46.216 46.306-120.167 56.611-181.063 14.928l42.462-19.675c38.863 15.278 81.392 8.57 111.947-22.03 30.566-30.6 37.432-75.159 22.065-112.252-2.92-7.025-11.67-8.795-17.792-4.263l-124.947 92.341zm-25.786 22.437l-.033.034L68.094 435.217c7.565-10.429 16.957-20.294 26.327-30.149 26.428-27.803 52.653-55.359 36.654-94.302-21.422-52.112-8.952-113.177 30.724-152.898 41.243-41.254 101.98-51.661 152.706-30.758 11.23 4.172 21.016 10.114 28.638 15.639l-42.359 19.584c-39.44-16.563-84.629-5.299-112.207 22.313-37.298 37.308-44.84 102.003-1.128 143.81z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2e353b] text-lg">Grok</h3>
                  <p className="text-sm text-black font-medium">Grok 2 / Grok 2 mini</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  X/Twitter data access
                </div>
                <div className="flex items-center gap-2 text-sm text-[#74838f]">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time information
                </div>
              </div>
            </div>

            {/* More Coming */}
            <div className="bg-gradient-to-br from-[#f9fbfc] to-white rounded-2xl border border-dashed border-[#e0e4e9] p-6 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 bg-[#f0f4f8] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#74838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-bold text-[#74838f] text-lg">More Coming</h3>
              <p className="text-sm text-[#949aab] mt-1">Mistral, Llama, and more</p>
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
              <p className="text-[#74838f] max-w-2xl mx-auto">Four simple steps to start tracking your AI visibility across all major platforms.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Configure Your Prompts",
                  description: "Define the search queries and prompts that matter to your business. Prompt Clarity generates relevant prompts based on your industry, or you can create custom ones.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "Execute Across All Platforms",
                  description: "Each prompt is sent to all configured AI platforms simultaneously using their official APIs. Choose which flagship model to use for each platform.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Analyze Responses",
                  description: "Our AI analyzes each response to detect brand mentions, extract rankings, calculate sentiment scores, and identify cited sources. Hallucination detection ensures accurate results.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
                {
                  step: "04",
                  title: "Track Over Time",
                  description: "Results are stored and aggregated to show visibility trends. See how your brand's AI presence changes daily, weekly, or monthly across all platforms.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl border border-[#e0e4e9] p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2e353b] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-[#74838f] font-semibold mb-1">Step {item.step}</div>
                      <h3 className="font-bold text-[#2e353b] text-lg mb-2">{item.title}</h3>
                      <p className="text-[#74838f]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2e353b] mb-4">Key Metrics Tracked</h2>
              <p className="text-[#74838f] max-w-2xl mx-auto">Comprehensive analytics to understand exactly how AI platforms perceive your brand.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#509ee3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2e353b] text-xl mb-2">Visibility Score</h3>
                <p className="text-[#74838f]">Binary detection of whether your brand appears in AI responses. Aggregated across all prompts and platforms for an overall visibility percentage.</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#509ee3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2e353b] text-xl mb-2">Position Ranking</h3>
                <p className="text-[#74838f]">Track where your brand ranks in the response. Are you listed first or further down? When AI models list multiple options, see exactly where you stand.</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#509ee3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2e353b] text-xl mb-2">Sentiment Analysis</h3>
                <p className="text-[#74838f]">Understand how AI describes your brand. Sentiment scores from 0-100 indicate whether mentions are positive, neutral, or negative.</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#e0e4e9] p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#509ee3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#2e353b] text-xl mb-2">Confidence Score</h3>
                <p className="text-[#74838f]">Each analysis includes a confidence score indicating how certain the system is about extracted data. Low confidence triggers manual review flags.</p>
              </div>
            </div>
          </div>

          {/* Real-time Updates */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-[#1a1f24] to-[#2e353b] rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">Real-Time Updates</h2>
                  <p className="text-[#949aab] mb-6">
                    When executions run, you see results as they complete using Server-Sent Events (SSE). No need to refresh the page - watch your visibility data populate in real-time as each AI platform responds.
                  </p>
                  <div className="flex items-center gap-2 text-[#88bf4d]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Live streaming results</span>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-[#0d1117] rounded-xl p-4 font-mono text-sm border border-[#30363d]">
                    <div className="flex items-center gap-2 mb-3 text-[#8b949e]">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                      <span className="ml-2">Live Execution Feed</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#8b949e]">[12:34:01]</span>
                        <span className="text-white">ChatGPT</span>
                        <span className="text-[#88bf4d]">Brand mentioned #1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#8b949e]">[12:34:03]</span>
                        <span className="text-white">Claude</span>
                        <span className="text-[#88bf4d]">Brand mentioned #2</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#8b949e]">[12:34:05]</span>
                        <span className="text-white">Gemini</span>
                        <span className="text-[#e35d5d]">Not mentioned</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#8b949e]">[12:34:08]</span>
                        <span className="text-white">Perplexity</span>
                        <span className="text-[#88bf4d]">Brand mentioned #1</span>
                      </div>
                      <div className="flex items-center gap-2 animate-pulse">
                        <span className="text-[#8b949e]">[12:34:10]</span>
                        <span className="text-white">Grok</span>
                        <span className="text-[#f9cf48]">Processing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#509ee3] to-[#3b82f6] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Start Tracking Your AI Visibility</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">Deploy Prompt Clarity and see how AI assistants talk about your brand. Track where you rank across ChatGPT, Claude, Perplexity, Gemini, and Grok.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://github.com/verobytes/PromptClarity"
                  className="inline-flex items-center gap-2 bg-white text-[#509ee3] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
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
                <path d="M16 3C8.268 3 2 8.373 2 15c0 3.5 1.8 6.6 4.5 8.7L4 28l5.5-2.8c2 .8 4.2 1.3 6.5 1.3 7.732 0 14-5.373 14-12S23.732 3 16 3z" fill="none" stroke="#5BA3E6" strokeWidth="2" />
                <circle cx="16" cy="14" r="9" stroke="#5BA3E6" strokeWidth="1" fill="none" />
                <circle cx="16" cy="14" r="6" stroke="#5BA3E6" strokeWidth="1" fill="none" />
                <circle cx="16" cy="14" r="3" stroke="#5BA3E6" strokeWidth="1" fill="none" />
                <circle cx="16" cy="14" r="1.5" fill="#5BA3E6" />
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
