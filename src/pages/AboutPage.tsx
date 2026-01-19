import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Target, Shield, Zap, Users, TrendingUp, Award, CheckCircle, Heart } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We verify every creator and brand, ensuring authentic partnerships built on mutual respect'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'AI-powered matching, real-time analytics, and cutting-edge tools for modern marketing'
    },
    {
      icon: Heart,
      title: 'Creator-Centric',
      description: 'Fair pricing, timely payments, and support that empowers creators to thrive'
    },
    {
      icon: TrendingUp,
      title: 'Results Driven',
      description: 'We measure success by campaign performance and the growth of our community'
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Verified Creators' },
    { icon: Target, value: '500+', label: 'Brand Campaigns' },
    { icon: TrendingUp, value: '50M+', label: 'Total Reach' },
    { icon: Award, value: '98%', label: 'Success Rate' }
  ];

  const milestones = [
    { year: '2024', title: 'Founded', description: 'MyViralReach launched with a vision to democratize influencer marketing' },
    { year: '2024', title: '1K Creators', description: 'Reached our first milestone of 1,000 verified creators' },
    { year: '2025', title: 'Multi-Channel', description: 'Expanded to TV, websites, and event-based promotion' },
    { year: '2026', title: '10K+ Network', description: 'Growing ecosystem of creators, brands, and media partners' }
  ];

  const team = [
    {
      name: 'Innovation Team',
      role: 'AI & Technology',
      description: 'Building the smartest campaign matching and analytics platform'
    },
    {
      name: 'Creator Success',
      role: 'Support & Growth',
      description: 'Helping creators maximize earnings and build sustainable careers'
    },
    {
      name: 'Brand Strategy',
      role: 'Campaign Excellence',
      description: 'Crafting campaigns that deliver measurable results for brands'
    },
    {
      name: 'Partnerships',
      role: 'Media Relations',
      description: 'Expanding our network of TV channels, websites, and event organizers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation isDark={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 mb-6">
              <Users className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-700 font-medium">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Connecting Brands & Creators
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"> Worldwide</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              MyViralReach is the AI-powered platform making influencer marketing, 
              media partnerships, and brand promotion accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 border border-indigo-100">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6">
                We believe every brand deserves access to powerful promotion channels, 
                and every creator deserves fair compensation for their influence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By combining AI technology with human expertise, we're building the world's 
                most trusted promotion network—where brands grow, creators earn, and audiences 
                discover authentic content.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg shadow-indigo-100/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Impact by Numbers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Building a thriving ecosystem of creators and brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From startup to the fastest-growing promotion platform
            </p>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Teams
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Passionate experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                <div className="text-sm text-indigo-600 font-medium mb-3">{member.role}</div>
                <p className="text-sm text-slate-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose MyViralReach?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl"
          >
            <div className="space-y-6">
              {[
                'AI-powered matching connects you with the perfect creators or brands',
                'Real-time analytics and reporting for complete transparency',
                'Secure payments and verified profiles protect all parties',
                'Multi-channel reach: influencers, websites, TV, and events',
                'Dedicated support team available to help you succeed',
                'No hidden fees—transparent pricing on every campaign',
                'Growing network of 10,000+ creators and 500+ brands',
                'Proven track record with 98% client satisfaction rate'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
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
            className="bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl shadow-indigo-200"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Whether you're a brand looking to scale or a creator ready to earn, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/brands"
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-medium transition-all shadow-lg"
              >
                Launch a Campaign
              </a>
              <a
                href="/creators"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-medium transition-all"
              >
                Become a Creator
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer isDark={false} />
    </div>
  );
}
