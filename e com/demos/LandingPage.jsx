import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Sanity</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Sign in
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Now in public beta
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
              The platform for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                structured content
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Build modern digital experiences with a content platform that gives you 
              total flexibility and control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105">
                Start building for free
              </button>
              <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                Schedule a demo
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No credit card required • Free 14-day trial
            </p>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            Trusted by innovative teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Spotify</div>
            <div className="text-2xl font-bold text-gray-400">Figma</div>
            <div className="text-2xl font-bold text-gray-400">Netlify</div>
            <div className="text-2xl font-bold text-gray-400">Nike</div>
            <div className="text-2xl font-bold text-gray-400">Cloudflare</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to scale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that grow with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lightning fast
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Instant content updates with real-time collaboration and a global CDN.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enterprise security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-level encryption, SOC 2 compliance, and granular access control.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Flexible schema
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customize your content structure exactly how you need it.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Customizable editor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create a content editing experience tailored to your team's workflow.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Version control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track changes, roll back updates, and maintain content history.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                API-first
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful APIs to integrate with any stack or platform you use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 px-8 py-20 sm:px-16 lg:px-24">
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of teams building better content experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                  Start free trial
                </button>
                <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white border-2 border-white/20 rounded-lg hover:border-white/40 transition-all">
                  Talk to sales
                </button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 3 users
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  10,000 documents
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Community support
                </li>
              </ul>
              <button className="w-full px-6 py-3 text-base font-medium text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="p-8 rounded-2xl border-2 border-black bg-gray-50 relative transform scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 text-xs font-semibold text-white bg-black rounded-full">
                  Most popular
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For growing teams</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 10 users
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited documents
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
              </ul>
              <button className="w-full px-6 py-3 text-base font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all">
                Get started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-6">For large organizations</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited users
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited everything
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom SLA
                </li>
              </ul>
              <button className="w-full px-6 py-3 text-base font-medium text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Changelog</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Community</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Support</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              © 2025 Sanity. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

