import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Rocket, Target, TrendingUp, BarChart3, CheckCircle, ArrowRight, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function BrandsPage() {
  const [formData, setFormData] = useState({
    brandName: '',
    contactPerson: '',
    email: '',
    website: '',
    promotionType: '',
    budget: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create an email service (Gmail, Outlook, etc.)
      // 3. Create an email template with these template parameters:
      //    - {{from_name}}, {{brand_name}}, {{email}}, {{website}}
      //    - {{promotion_type}}, {{budget}}, {{requirements}}
      // 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
      // 5. Replace the values below with your actual credentials
      
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.contactPerson,
        brand_name: formData.brandName,
        email: formData.email,
        website: formData.website,
        promotion_type: formData.promotionType,
        budget: formData.budget,
        requirements: formData.requirements,
        to_email: 'your-email@example.com' // Replace with your email
      };

      // Uncomment when you add your EmailJS credentials
      // await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Simulated success for demo
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({
          brandName: '',
          contactPerson: '',
          email: '',
          website: '',
          promotionType: '',
          budget: '',
          requirements: ''
        });
      }, 1500);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Target,
      title: 'Targeted Reach',
      description: 'Connect with your exact audience through verified creators and premium channels'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average 3x ROI on campaigns with data-driven optimization'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track performance with detailed insights and engagement metrics'
    }
  ];

  const steps = [
    { number: '01', title: 'Submit Campaign Brief', description: 'Tell us about your brand and goals' },
    { number: '02', title: 'Strategy & Matching', description: 'We create a custom campaign and match perfect creators' },
    { number: '03', title: 'Launch & Track', description: 'Campaign goes live with real-time monitoring' },
    { number: '04', title: 'Results & Reporting', description: 'Receive detailed performance reports and insights' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation isDark={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 mb-6">
                <Rocket className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-indigo-700 font-medium">For Brands</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Launch Campaigns That
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"> Go Viral</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Connect with 10,000+ verified creators, premium websites, TV channels, 
                and event partners. One platform, unlimited reach.
              </p>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg shadow-indigo-100/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
              From campaign brief to viral success in 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-6 border border-indigo-100 h-full">
                  <div className="text-5xl font-bold text-indigo-200 mb-4">{step.number}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6">
                    <ArrowRight className="w-6 h-6 text-indigo-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Start Your Campaign
            </h2>
            <p className="text-lg text-slate-600">
              Fill out the form below and our team will create a custom strategy for your brand
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl shadow-indigo-100/50 border border-slate-200 p-8 sm:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="brandName" className="block text-sm font-medium text-slate-700 mb-2">
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="Your Brand"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-slate-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="john@brand.com"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-2">
                    Website / Instagram
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="www.yourbrand.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="promotionType" className="block text-sm font-medium text-slate-700 mb-2">
                    Promotion Type *
                  </label>
                  <select
                    id="promotionType"
                    name="promotionType"
                    value={formData.promotionType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select Type</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="Website Ads">Website Ads</option>
                    <option value="TV Promotion">TV Promotion</option>
                    <option value="Cricket/Sports Events">Cricket/Sports Events</option>
                    <option value="Multi-Channel">Multi-Channel Campaign</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select Budget</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-2">
                  Campaign Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your campaign goals, target audience, preferred channels, timeline, etc."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 text-sm">
                    Campaign submitted successfully! We'll contact you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-800 text-sm">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Campaign Brief</span>
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
                We'll use your information only to contact you about your campaign.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer isDark={false} />
    </div>
  );
}