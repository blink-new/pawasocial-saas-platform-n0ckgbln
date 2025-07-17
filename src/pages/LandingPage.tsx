import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  BarChart3,
  MessageSquare,
  Users,
  TrendingUp,
  Zap,
  Globe,
  Star,
  CheckCircle
} from 'lucide-react';
import Logo from '../components/ui/Logo';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const platformFeatures = [
    {
      category: "Core features",
      items: [
        {
          icon: <MessageSquare className="w-5 h-5" />,
          title: "Engagement",
          description: "Streamline and scale your customer care and community management"
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Publishing",
          description: "Effortlessly plan, create, manage and deliver social content and campaigns"
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Analytics",
          description: "Drive strategic decision making across your entire business"
        }
      ]
    },
    {
      category: "Premium solutions",
      items: [
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Premium Analytics",
          description: "Prove your social media ROI with customized data and reports"
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Listening",
          description: "Uncover trends and actionable insights from social conversations"
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Influencer Marketing",
          description: "Build and manage partnerships with influencers and content creators"
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Employee Advocacy",
          description: "Amplify your social reach by empowering employees to become brand advocates"
        }
      ]
    },
    {
      category: "Platform",
      items: [
        {
          title: "Product tour"
        },
        {
          title: "AI and automation"
        },
        {
          title: "Integrations"
        },
        {
          title: "Data and security"
        }
      ]
    }
  ];

  const solutionsFeatures = [
    {
      category: "By use case",
      items: [
        {
          title: "Manage social media",
          description: "Bolster your marketing efforts with intuitive, assistive tools"
        },
        {
          title: "Gather deeper insights",
          description: "Leverage AI to distill listening and performance data into strategic insights"
        },
        {
          title: "Streamline workflows",
          description: "Reduce complexity by managing multiple processes in a single tool"
        },
        {
          title: "Drive more sales",
          description: "Sell more efficiently with product and customer information in one place"
        },
        {
          title: "Amplify brand awareness",
          description: "Maximize the impact and reach of your social efforts to drive better business results"
        },
        {
          title: "Personalize customer care",
          description: "Create positive brand experiences with quick, tailored responses"
        }
      ]
    },
    {
      category: "By service",
      items: [
        {
          title: "Enterprise"
        },
        {
          title: "Professional services"
        },
        {
          title: "Agencies"
        }
      ]
    }
  ];

  const awards = [
    "Top 50 Products for Enterprise, 2024",
    "Top 50 Products for Mid Market, 2024",
    "Top 50 Global Software Companies, 2024",
    "Top 100 Highest Satisfaction Products, 2024"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <Logo size="md" variant="full" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Platform Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                  onMouseEnter={() => setActiveDropdown('platform')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Platform
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {activeDropdown === 'platform' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-8"
                    onMouseEnter={() => setActiveDropdown('platform')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {platformFeatures.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="text-sm font-medium text-gray-500 mb-4">{category.category}</h3>
                          <div className="space-y-4">
                            {category.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="group cursor-pointer">
                                <div className="flex items-start space-x-3">
                                  {item.icon && (
                                    <div className="text-gray-400 group-hover:text-green-600 transition-colors mt-0.5">
                                      {item.icon}
                                    </div>
                                  )}
                                  <div>
                                    <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                                      {item.title}
                                    </div>
                                    {item.description && (
                                      <div className="text-sm text-gray-500 mt-1">
                                        {item.description}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Report Card */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-lg mb-2">IDC MarketScape report</h4>
                            <p className="text-blue-100 mb-4">
                              Sprout Social is a Leader in the IDC MarketScape for Social Marketing Software for Large Enterprises
                            </p>
                            <button className="text-white underline hover:no-underline">
                              Learn more
                            </button>
                          </div>
                          <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Solutions
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {activeDropdown === 'solutions' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-8"
                    onMouseEnter={() => setActiveDropdown('solutions')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {solutionsFeatures.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="text-sm font-medium text-gray-500 mb-4">{category.category}</h3>
                          <div className="space-y-4">
                            {category.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="group cursor-pointer">
                                <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                                  {item.title}
                                </div>
                                {item.description && (
                                  <div className="text-sm text-gray-500 mt-1">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Report Card */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-6 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-lg mb-2">The 2025 Content Benchmarks Report</h4>
                            <p className="text-green-100 mb-4">
                              Explore over 30+ industry stats, platform performance, emerging trends and brand spotlights in our 2025 Content Benchmarks Report.
                            </p>
                            <button className="text-white underline hover:no-underline">
                              Get the report
                            </button>
                          </div>
                          <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/pricing" className="text-gray-700 hover:text-green-600 transition-colors">
                Pricing
              </Link>
              
              <div className="relative">
                <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                  Resources
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                  Log in
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <Link 
                to="/" 
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 transition-colors"
              >
                Schedule a demo
              </Link>
              <Link 
                to="/" 
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Try for free
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button className="text-left text-gray-700 hover:text-green-600 transition-colors">
                  Platform
                </button>
                <button className="text-left text-gray-700 hover:text-green-600 transition-colors">
                  Solutions
                </button>
                <Link to="/pricing" className="text-gray-700 hover:text-green-600 transition-colors">
                  Pricing
                </Link>
                <button className="text-left text-gray-700 hover:text-green-600 transition-colors">
                  Resources
                </button>
                <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                  Log in
                </Link>
                <Link 
                  to="/" 
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 transition-colors text-center"
                >
                  Schedule a demo
                </Link>
                <Link 
                  to="/" 
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-center"
                >
                  Try for free
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Powerful tools for social media management
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Social is where brands are built and businesses grow. Our social media management tools turn social into a strategic powerhouse, igniting innovation, driving revenue, and transforming your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Try 30 days free
                </Link>
                <Link 
                  to="/" 
                  className="border border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  See the product
                </Link>
              </div>

              <p className="text-sm text-gray-500 mb-8">No credit card required.</p>

              {/* Awards section */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">#1 Best Overall Software | 2024</div>
                    <div className="text-sm text-gray-500 grid grid-cols-2 gap-x-4 mt-1">
                      {awards.map((award, idx) => (
                        <div key={idx}>{award}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Dashboard mockup */}
                <div className="bg-gray-900 p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Top section with search and filters */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm font-medium text-gray-900">Queries by AI Assist</div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Pre-filter</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Onboarding</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Customer journey</span>
                      </div>
                    </div>
                    <button className="text-blue-600 text-sm">+ Add keyword</button>
                  </div>

                  {/* Sentiment chart */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-900">Sentiment Summary</h3>
                      <div className="text-sm text-gray-500">Understand how users feel about this topic and see how positive sentiment changed since the last reporting period</div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="relative w-32 h-32">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            strokeDasharray="82, 100"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">82%</div>
                            <div className="text-xs text-gray-500">Positive</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sentiment trends */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Sentiment Trends</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Net Sentiment Score</span>
                        <span className="text-sm font-medium">+47</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Net Sentiment Trend</span>
                        <span className="text-sm font-medium text-green-600">↗ +5% compared to the previous period</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">437</div>
                      <div className="text-xs text-gray-500">Interactions</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">17</div>
                      <div className="text-xs text-gray-500">Reach</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">83</div>
                      <div className="text-xs text-gray-500">Engagements</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage social media at scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From publishing and engagement to analytics and reporting, PawaSocial provides the complete toolkit for social media success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Publishing & Scheduling</h3>
              <p className="text-gray-600 mb-6">
                Plan, create, and schedule content across all your social channels from one unified platform.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Engagement & Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Monitor mentions, respond to messages, and engage with your audience in real-time.
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 flex items-center">
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-6">
                Measure performance, track ROI, and generate comprehensive reports with advanced analytics.
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-700 flex items-center">
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to transform your social media strategy?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust PawaSocial to power their social media success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Start free trial
            </Link>
            <Link 
              to="/" 
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Schedule demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Logo size="md" variant="full" className="text-white" />
              </div>
              <p className="text-gray-400">
                AI-powered social intelligence for African and emerging markets.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Platform</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PawaSocial by PawaStats. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;