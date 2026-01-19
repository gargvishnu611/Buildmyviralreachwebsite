import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Instagram, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  isDark?: boolean;
}

export function Footer({ isDark = false }: FooterProps) {
  const bgClass = isDark ? 'bg-slate-950 border-t border-white/10' : 'bg-white border-t border-slate-200';
  const textClass = isDark ? 'text-white' : 'text-slate-900';
  const textMutedClass = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <footer className={`${bgClass} py-12 sm:py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold ${textClass}`}>MyViralReach</span>
            </div>
            <p className={`${textMutedClass} mb-6 max-w-md`}>
              The ultimate promotion platform connecting brands, creators, and media partners. 
              Scale your reach with AI-powered campaigns across influencers, websites, TV, and events.
            </p>
            <div className="flex gap-4">
              <a href="#" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`${textClass} font-semibold mb-4`}>Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/brands" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>For Brands</Link></li>
              <li><Link to="/creators" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>For Creators</Link></li>
              <li><Link to="/advertisers" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>For Advertisers</Link></li>
              <li><Link to="/tools" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>Tools</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={`${textClass} font-semibold mb-4`}>Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>About Us</Link></li>
              <li><Link to="/contact" className={`${textMutedClass} hover:text-indigo-500 transition-colors`}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className={`${isDark ? 'border-white/10' : 'border-slate-200'} border-t mt-12 pt-8`}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`${textMutedClass} text-sm`}>
              © 2026 MyViralReach. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className={`${textMutedClass} hover:text-indigo-500 text-sm transition-colors`}>Privacy Policy</a>
              <a href="#" className={`${textMutedClass} hover:text-indigo-500 text-sm transition-colors`}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
