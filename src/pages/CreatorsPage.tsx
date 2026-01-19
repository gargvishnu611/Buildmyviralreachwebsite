import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Users, DollarSign, Star, TrendingUp, Instagram, Youtube, Globe, CheckCircle, ExternalLink } from 'lucide-react';

export function CreatorsPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn More',
      description: 'Get paid for sponsored content, product placements, and brand collaborations'
    },
    {
      icon: Star,
      title: 'Premium Brands',
      description: 'Work with verified, reputable brands that value quality creators'
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Audience',
      description: 'Gain exposure through brand campaigns and cross-promotion opportunities'
    }
  ];

  const creatorTypes = [
    { icon: Instagram, name: 'Instagram Creators', description: 'Posts, Reels & Stories' },
    { icon: Youtube, name: 'YouTube Creators', description: 'Videos & Shorts' },
    { icon: Globe, name: 'Website Owners', description: 'Blogs & Media Sites' }
  ];

  const process = [
    {
      step: '01',
      title: 'Apply via Google Form',
      description: 'Fill out our simple application form with your channel details and stats'
    },
    {
      step: '02',
      title: 'Profile Review',
      description: 'Our team reviews your profile and engagement metrics (usually within 48 hours)'
    },
    {
      step: '03',
      title: 'Get Verified',
      description: 'Once approved, you\'ll be added to our verified creator network'
    },
    {
      step: '04',
      title: 'Start Earning',
      description: 'Receive campaign invites from brands matching your niche and audience'
    }
  ];

  const requirements = [
    'Authentic engagement and active audience',
    'Consistent content quality and posting schedule',
    'Transparent about sponsored content',
    'Professional communication with brands',
    'Minimum follower requirements vary by platform',
    'Original content only (no copied or plagiarized work)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation isDark={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-6">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700 font-medium">For Creators</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Turn Your Influence Into
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"> Income</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8">
                Join 10,000+ creators earning with premium brand collaborations. 
                No upfront costs, no hidden fees.
              </p>
              <motion.a
                href="https://forms.gle/gqeakCTjyVFMNVd47"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-purple-200"
              >
                Apply as Creator
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg shadow-purple-100/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Who Can Join?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We work with creators across all major platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {creatorTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 border border-purple-100 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-purple-100 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{type.name}</h3>
                <p className="text-slate-600">{type.description}</p>
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
              From application to earning in 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg h-full">
                  <div className="text-5xl font-bold text-purple-200 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What We Look For
            </h2>
            <p className="text-lg text-slate-600">
              We only accept serious creators committed to quality and professionalism
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12 border border-purple-100"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{req}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl shadow-purple-200"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Monetize Your Influence?
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators already earning with MyViralReach. 
              Application takes less than 5 minutes.
            </p>
            <motion.a
              href="https://forms.gle/gqeakCTjyVFMNVd47"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-medium transition-all shadow-lg"
            >
              Apply Now - It's Free
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <p className="text-sm text-purple-200 mt-6">
              No credit card required • No upfront fees • Serious creators only
            </p>
          </motion.div>
        </div>
      </section>

      <Footer isDark={false} />
    </div>
  );
}
