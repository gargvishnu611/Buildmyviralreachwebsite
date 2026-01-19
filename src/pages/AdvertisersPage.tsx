import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Globe, Tv, Trophy, Calendar, DollarSign, BarChart3, Shield, Zap, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AdvertisersPage() {
  const navigate = useNavigate();

  const channels = [
    {
      icon: Globe,
      title: 'Website Owners',
      description: 'Monetize your traffic with premium brand ads',
      features: ['Banner ads', 'Native advertising', 'Sponsored content', 'Revenue share model']
    },
    {
      icon: Tv,
      title: 'TV Channels',
      description: 'Connect with brands seeking TV exposure',
      features: ['Commercial slots', 'Program sponsorships', 'Product placements', 'Live promotion']
    },
    {
      icon: Trophy,
      title: 'Sports Events',
      description: 'Cricket matches & sports event organizers',
      features: ['Stadium branding', 'Match sponsorships', 'Halftime promotions', 'Digital integration']
    },
    {
      icon: Calendar,
      title: 'Event Organizers',
      description: 'Concerts, conferences & live events',
      features: ['Event sponsorships', 'Booth placement', 'Brand activations', 'Audience engagement']
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Maximize Revenue',
      description: 'Connect with premium brands willing to pay top dollar for quality placements'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track performance, engagement, and earnings in real-time'
    },
    {
      icon: Shield,
      title: 'Verified Brands Only',
      description: 'Work with legitimate, reputable brands that value your audience'
    },
    {
      icon: Zap,
      title: 'Fast Payments',
      description: 'Timely payouts with transparent reporting and no hidden fees'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Submit Your Inventory',
      description: 'Tell us about your website traffic, TV slots, event reach, or media opportunities'
    },
    {
      step: '02',
      title: 'Get Matched',
      description: 'Our AI matches your inventory with brands looking for your exact audience'
    },
    {
      step: '03',
      title: 'Review Offers',
      description: 'Receive campaign offers with clear pricing and requirements'
    },
    {
      step: '04',
      title: 'Execute & Earn',
      description: 'Launch campaigns and receive payments as per agreement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation isDark={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 mb-6">
                <Globe className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-teal-700 font-medium">For Media Partners</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Monetize Your
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"> Media Inventory</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8">
                Whether you own websites, TV channels, sports events, or live venues - 
                connect with premium brands ready to advertise.
              </p>
            </motion.div>
          </div>

          {/* Channel Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg shadow-teal-100/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4">
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{channel.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{channel.description}</p>
                <ul className="space-y-2">
                  {channel.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-slate-500 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join a trusted ecosystem connecting media partners with premium brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-6 border border-teal-100"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-lg shadow-teal-100 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Start monetizing your inventory in 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg"
              >
                <div className="text-5xl font-bold text-teal-200 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl shadow-teal-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Network by the Numbers
              </h2>
              <p className="text-teal-100 text-lg">
                Join a thriving ecosystem of brands and media partners
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-teal-100 text-sm">Active Brands</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-teal-100 text-sm">Media Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$5M+</div>
                <div className="text-teal-100 text-sm">Paid to Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100M+</div>
                <div className="text-teal-100 text-sm">Monthly Impressions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Partnership Requirements
            </h2>
            <p className="text-lg text-slate-600">
              We work with serious media partners committed to quality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">For Websites:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                    <span>Minimum 10,000 monthly visitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                    <span>Quality, original content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                    <span>Google Analytics integration</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">For TV/Events:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                    <span>Verified viewership/attendance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                    <span>Professional production quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                    <span>Audience demographic data</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">All Partners Must:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                  <span>Provide accurate metrics and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                  <span>Maintain professional communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                  <span>Honor campaign commitments</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></div>
                  <span>Follow brand guidelines</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-3xl p-8 sm:p-12 text-center border border-teal-100"
          >
            <Mail className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ready to Become a Partner?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Get in touch with our partnerships team to discuss how we can help you 
              monetize your media inventory.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-teal-200"
            >
              Contact Partnerships Team
            </motion.button>
            <p className="text-sm text-slate-500 mt-6">
              Response time: Within 24 hours • No setup fees • Transparent pricing
            </p>
          </motion.div>
        </div>
      </section>

      <Footer isDark={false} />
    </div>
  );
}
