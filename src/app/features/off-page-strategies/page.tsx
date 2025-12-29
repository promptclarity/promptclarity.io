import Link from "next/link";

export default function OffPageStrategiesPage() {
  return (
    <div className="min-h-screen bg-[#f9fbfc]">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-[#e0e4e9] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Prompt Clarity" className="w-8 h-8" />
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#features" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Features
          </Link>
          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2e353b]">Off-Page Strategies</h1>
              <p className="text-indigo-600 font-medium mt-1">Build Authority Beyond Your Website</p>
            </div>
          </div>
          <p className="text-xl text-[#74838f] leading-relaxed max-w-3xl">
            Build authority in the places that matter. Get editorial coverage, community presence, and partnership recommendations. Track where your brand ranks in the response. Are you listed first or further down?
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-white border-y border-[#e0e4e9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-white border border-[#e0e4e9]">
              <div className="text-4xl font-bold text-[#2e353b] mb-2">78%</div>
              <p className="text-sm text-[#74838f]">Of AI citations come from third-party sources</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white border border-[#e0e4e9]">
              <div className="text-4xl font-bold text-[#2e353b] mb-2">4.2x</div>
              <p className="text-sm text-[#74838f]">More visibility with authoritative backlinks</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white border border-[#e0e4e9]">
              <div className="text-4xl font-bold text-[#2e353b] mb-2">23</div>
              <p className="text-sm text-[#74838f]">Sources tracked per AI response average</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white border border-[#e0e4e9]">
              <div className="text-4xl font-bold text-[#2e353b] mb-2">92%</div>
              <p className="text-sm text-[#74838f]">Of top brands have Wikipedia presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platforms */}
      <section className="py-16 bg-white border-b border-[#e0e4e9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2e353b] mb-4">Track Authority Across AI Platforms</h2>
            <p className="text-[#74838f] max-w-2xl mx-auto">
              We use the latest flagship models by default, but you can choose which model to use for each platform.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* ChatGPT */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-[#10a37f] hover:shadow-lg hover:shadow-[#10a37f]/10 transition-all duration-300 text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#10a37f] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                </svg>
              </div>
              <p className="font-semibold text-[#2e353b] text-sm">ChatGPT</p>
              <p className="text-xs text-[#74838f] mt-1">GPT-4o</p>
            </div>
            {/* Claude */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-[#D77655] hover:shadow-lg hover:shadow-[#D77655]/10 transition-all duration-300 text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#D77655] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 16 16" fill="#FCF2EE">
                  <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
                </svg>
              </div>
              <p className="font-semibold text-[#2e353b] text-sm">Claude</p>
              <p className="text-xs text-[#74838f] mt-1">Claude 3.5</p>
            </div>
            {/* Perplexity */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-[#1F1F1F] hover:shadow-lg hover:shadow-black/10 transition-all duration-300 text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#1F1F1F] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 512 509.64" fill="none">
                  <path fill="#fff" fillRule="nonzero" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.8c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
                </svg>
              </div>
              <p className="font-semibold text-[#2e353b] text-sm">Perplexity</p>
              <p className="text-xs text-[#74838f] mt-1">Sonar Large</p>
            </div>
            {/* Gemini */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-[#4285f4] hover:shadow-lg hover:shadow-[#4285f4]/10 transition-all duration-300 text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white border border-[#e0e4e9] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 65 65" fill="none">
                  <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#gemini-grad-off)"/>
                  <defs>
                    <linearGradient id="gemini-grad-off" x1="0" y1="32" x2="65" y2="32" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4285F4"/>
                      <stop offset="50%" stopColor="#9B72CB"/>
                      <stop offset="100%" stopColor="#D96570"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="font-semibold text-[#2e353b] text-sm">Gemini</p>
              <p className="text-xs text-[#74838f] mt-1">Gemini 1.5 Pro</p>
            </div>
            {/* Grok */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-800 hover:shadow-lg hover:shadow-gray-800/10 transition-all duration-300 text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 512 509.641" fill="none">
                  <path fill="#fff" d="M213.235 306.019l178.976-180.002v.169l51.695-51.763c-.924 1.32-1.86 2.605-2.785 3.89-39.281 54.164-58.46 80.649-43.07 146.922l-.09-.101c10.61 45.11-.744 95.137-37.398 131.836-46.216 46.306-120.167 56.611-181.063 14.928l42.462-19.675c38.863 15.278 81.392 8.57 111.947-22.03 30.566-30.6 37.432-75.159 22.065-112.252-2.92-7.025-11.67-8.795-17.792-4.263l-124.947 92.341zm-25.786 22.437l-.033.034L68.094 435.217c7.565-10.429 16.957-20.294 26.327-30.149 26.428-27.803 52.653-55.359 36.654-94.302-21.422-52.112-8.952-113.177 30.724-152.898 41.243-41.254 101.98-51.661 152.706-30.758 11.23 4.172 21.016 10.114 28.638 15.639l-42.359 19.584c-39.44-16.563-84.629-5.299-112.207 22.313-37.298 37.308-44.84 102.003-1.128 143.81z"/>
                </svg>
              </div>
              <p className="font-semibold text-[#2e353b] text-sm">Grok</p>
              <p className="text-xs text-[#74838f] mt-1">Grok-2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Off-Page Matters */}
      <section className="py-16 bg-gradient-to-b from-white to-[#f9fbfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2e353b] text-center mb-4">Why Off-Page Presence Matters for AI</h2>
          <p className="text-[#74838f] text-center mb-12 max-w-2xl mx-auto">
            AI models don&apos;t just learn from your website - they learn from the entire web. Third-party validation is crucial for AI visibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-[#e0e4e9] p-8 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2e353b] text-xl mb-3">Training Data Influence</h3>
              <p className="text-[#74838f]">LLMs are trained on web content. The more authoritative sources mention you, the more likely AI will recommend you. Training data shapes AI knowledge.</p>
            </div>
            <div className="bg-white rounded-xl border border-[#e0e4e9] p-8 hover:shadow-lg hover:border-violet-200 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2e353b] text-xl mb-3">Real-Time Search</h3>
              <p className="text-[#74838f]">AI with web search (GPT, Perplexity, Gemini) actively crawls the web. Recent mentions influence current recommendations in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2e353b] text-center mb-12">Off-Page Strategy Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Editorial Coverage */}
            <div className="bg-white rounded-xl border border-[#e0e4e9] p-6 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2e353b] text-lg">Editorial Coverage</h3>
              </div>
              <p className="text-[#74838f] mb-4">Get featured in publications that AI systems trust and cite:</p>
              <ul className="space-y-2 text-[#74838f]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Industry publications and trade magazines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Tech news sites (TechCrunch, VentureBeat, etc.)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Review sites and comparison platforms (G2, Capterra)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Guest posts on authoritative blogs
                </li>
              </ul>
            </div>

            {/* Community Presence */}
            <div className="bg-white rounded-xl border border-[#e0e4e9] p-6 hover:shadow-lg hover:border-violet-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2e353b] text-lg">Community Presence</h3>
              </div>
              <p className="text-[#74838f] mb-4">Build authentic presence in communities AI frequently cites:</p>
              <ul className="space-y-2 text-[#74838f]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  Reddit discussions in relevant subreddits
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  Stack Overflow answers (for technical products)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  Industry forums and Slack/Discord communities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  Quora answers for common questions
                </li>
              </ul>
            </div>

            {/* Partnership & Listings */}
            <div className="bg-white rounded-xl border border-[#e0e4e9] p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2e353b] text-lg">Partnerships & Listings</h3>
              </div>
              <p className="text-[#74838f] mb-4">Get listed in directories and partner ecosystems:</p>
              <ul className="space-y-2 text-[#74838f]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Software directories (Product Hunt, AlternativeTo)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Integration marketplaces (Zapier, Slack App Directory)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Partner pages on complementary product sites
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Industry association memberships
                </li>
              </ul>
            </div>

            {/* Reference Sources */}
            <div className="bg-white rounded-xl border border-[#e0e4e9] p-6 hover:shadow-lg hover:border-fuchsia-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2e353b] text-lg">Reference Sources</h3>
              </div>
              <p className="text-[#74838f] mb-4">Establish presence in reference sources AI trusts:</p>
              <ul className="space-y-2 text-[#74838f]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fuchsia-500 rounded-full"></span>
                  Wikipedia mentions (follow notability guidelines)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fuchsia-500 rounded-full"></span>
                  Crunchbase and LinkedIn company pages
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fuchsia-500 rounded-full"></span>
                  Industry research reports and whitepapers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fuchsia-500 rounded-full"></span>
                  Academic citations if applicable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Recommendations */}
      <section className="py-16 bg-[#1a1f2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Data-Driven Recommendations</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Based on source attribution analysis, Prompt Clarity identifies specific off-page opportunities
          </p>

          <div className="bg-[#252b3d] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              <span className="ml-4 text-gray-400 text-sm">Off-Page Opportunities Dashboard</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#1a1f2e] rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">reddit.com/r/SaaS</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full font-medium">Community</span>
                </div>
                <p className="text-sm text-gray-400">Cited 23 times in responses. Competitors are active here. You have no presence.</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-xs text-indigo-400">High Impact</span>
                </div>
              </div>

              <div className="p-4 bg-[#1a1f2e] rounded-lg border border-gray-700 hover:border-violet-500/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">g2.com/products</span>
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-400 text-xs rounded-full font-medium">Listing</span>
                </div>
                <p className="text-sm text-gray-400">Cited 18 times. Your profile exists but has only 2 reviews vs competitor average of 47.</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div className="bg-violet-500 h-2 rounded-full" style={{width: '72%'}}></div>
                  </div>
                  <span className="text-xs text-violet-400">High Impact</span>
                </div>
              </div>

              <div className="p-4 bg-[#1a1f2e] rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">techcrunch.com</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-medium">PR</span>
                </div>
                <p className="text-sm text-gray-400">Cited 15 times for your industry. No articles mention your brand. Consider PR outreach.</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-xs text-purple-400">Medium Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Your Off-Page Authority</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get AI to recommend you by being everywhere it looks. Start tracking your off-page presence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/verobytes/PromptClarity"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Read Documentation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e353b] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Prompt Clarity" className="w-6 h-6" />
              <span className="text-white font-semibold">Prompt Clarity</span>
            </div>
            <p className="text-[#74838f]">&copy; 2025 Prompt Clarity. Open source under MIT license.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
