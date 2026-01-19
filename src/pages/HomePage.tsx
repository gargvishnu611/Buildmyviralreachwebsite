import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Sparkles, TrendingUp, Users, Zap, Globe, Tv, Target, ArrowRight } from 'lucide-react';

export function HomePage() {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('brand') || lowerPrompt.includes('campaign')) {
      navigate('/brands');
    } else if (lowerPrompt.includes('creator') || lowerPrompt.includes('influencer')) {
      navigate('/creators');
    } else if (lowerPrompt.includes('advertis') || lowerPrompt.includes('media')) {
      navigate('/advertisers');
    } else if (lowerPrompt.includes('tool') || lowerPrompt.includes('calculator')) {
      navigate('/tools');
    } else {
      navigate('/contact');
    }
  };

  const features = [
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Connect with 10K+ verified creators on Instagram, YouTube & Shorts',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Website Advertising',
      description: 'Premium ad placements on high-traffic websites & blogs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Tv,
      title: 'TV & Media',
      description: 'Reach millions through TV channels & live broadcasts',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Event Promotion',
      description: 'Cricket matches, sports events & live audience engagement',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Creators' },
    { value: '500+', label: 'Brands Trust Us' },
    { value: '50M+', label: 'Total Reach' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      <Navigation isDark={true} />

      {/* Hero Section with Prompt UI */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-slate-300">AI-Powered Promotion Platform</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              What will you promote today?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            Connect with creators, websites, TV channels, and event partners. 
            Launch campaigns that reach millions.
          </motion.p>

          {/* AI Prompt Input */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handlePromptSubmit}
            className="max-w-3xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative flex items-center bg-slate-900/90 backdrop-blur-xl border border-white/20 rounded-2xl p-2 sm:p-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 ml-4 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="I want to promote my brand through influencers..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-400 text-sm sm:text-base px-2 py-2"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 rounded-xl font-medium transition-all flex items-center gap-2 flex-shrink-0"
                >
                  <span className="hidden sm:inline">Get Started</span>
                  <span className="sm:hidden">Go</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400"
          >
            <span>Try:</span>
            <button onClick={() => setPrompt('I want to launch a brand campaign')} className="text-indigo-400 hover:text-indigo-300 transition-colors">
              "Launch brand campaign"
            </button>
            <span>•</span>
            <button onClick={() => setPrompt('I am a creator looking for collaborations')} className="text-purple-400 hover:text-purple-300 transition-colors">
              "Join as creator"
            </button>
            <span>•</span>
            <button onClick={() => setPrompt('Calculate campaign ROI')} className="text-teal-400 hover:text-teal-300 transition-colors">
              "Calculate ROI"
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                All Promotion Channels in One Platform
              </span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From influencer marketing to TV promotion, reach your audience everywhere they are.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl blur"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                ></div>
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 text-center">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Go Viral?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of brands and creators who trust MyViralReach 
                to amplify their message across every platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/brands')}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                >
                  Start a Campaign
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/creators')}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-medium transition-all"
                >
                  Join as Creator
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer isDark={true} />
    </div>
  );
}
