import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Calculator, TrendingUp, Target, DollarSign, Users, Eye, ThumbsUp, Share2 } from 'lucide-react';

export function ToolsPage() {
  const [activeTool, setActiveTool] = useState<string>('reach');

  // Reach Estimator State
  const [followers, setFollowers] = useState(10000);
  const [engagementRate, setEngagementRate] = useState(3.5);
  const [platform, setPlatform] = useState('Instagram');

  // Cost Estimator State
  const [campaignType, setCampaignType] = useState('Influencer Marketing');
  const [creatorCount, setCreatorCount] = useState(5);
  const [contentPieces, setContentPieces] = useState(3);

  // ROI Calculator State
  const [budget, setBudget] = useState(5000);
  const [expectedReach, setExpectedReach] = useState(100000);
  const [conversionRate, setConversionRate] = useState(2);
  const [avgOrderValue, setAvgOrderValue] = useState(50);

  // Reach Estimator Calculations
  const calculateReach = () => {
    const baseReach = followers * 0.85; // 85% of followers see posts on average
    const platformMultiplier = platform === 'Instagram' ? 1 : platform === 'YouTube' ? 1.3 : 0.9;
    const estimatedReach = Math.round(baseReach * platformMultiplier);
    const estimatedEngagements = Math.round(estimatedReach * (engagementRate / 100));
    
    return {
      reach: estimatedReach.toLocaleString(),
      engagements: estimatedEngagements.toLocaleString(),
      impressions: Math.round(estimatedReach * 1.5).toLocaleString()
    };
  };

  // Cost Estimator Calculations
  const calculateCost = () => {
    const baseCosts: { [key: string]: number } = {
      'Influencer Marketing': 500,
      'Website Ads': 300,
      'TV Promotion': 2000,
      'Cricket/Sports Events': 3000
    };

    const baseCost = baseCosts[campaignType] || 500;
    const totalCost = baseCost * creatorCount * contentPieces;
    const costPerPost = Math.round(totalCost / (creatorCount * contentPieces));
    
    return {
      total: totalCost.toLocaleString(),
      perCreator: Math.round(baseCost * contentPieces).toLocaleString(),
      perPost: costPerPost.toLocaleString()
    };
  };

  // ROI Calculator
  const calculateROI = () => {
    const clicks = Math.round(expectedReach * 0.05); // 5% CTR
    const conversions = Math.round(clicks * (conversionRate / 100));
    const revenue = conversions * avgOrderValue;
    const roi = ((revenue - budget) / budget) * 100;
    
    return {
      clicks: clicks.toLocaleString(),
      conversions: conversions.toLocaleString(),
      revenue: revenue.toLocaleString(),
      roi: roi.toFixed(1),
      profit: (revenue - budget).toLocaleString()
    };
  };

  const reachResults = calculateReach();
  const costResults = calculateCost();
  const roiResults = calculateROI();

  const tools = [
    { id: 'reach', name: 'Reach Estimator', icon: Eye, color: 'from-indigo-500 to-purple-500' },
    { id: 'cost', name: 'Cost Calculator', icon: DollarSign, color: 'from-purple-500 to-pink-500' },
    { id: 'roi', name: 'ROI Preview', icon: TrendingUp, color: 'from-teal-500 to-cyan-500' },
    { id: 'selector', name: 'Channel Selector', icon: Target, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation isDark={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 mb-6">
              <Calculator className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-700 font-medium">Free Tools</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Campaign Planning
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"> Tools</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Estimate reach, calculate costs, and preview ROI before launching your campaign
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Navigation */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <motion.button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  activeTool === tool.id
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-slate-200 bg-white hover:border-indigo-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3 mx-auto`}>
                  <tool.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-medium text-slate-900">{tool.name}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Reach Estimator */}
          {activeTool === 'reach' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-indigo-600" />
                  Influencer Reach Estimator
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Platform
                    </label>
                    <select
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                    >
                      <option>Instagram</option>
                      <option>YouTube</option>
                      <option>TikTok</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Followers: {followers.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="1000000"
                      step="1000"
                      value={followers}
                      onChange={(e) => setFollowers(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>1K</span>
                      <span>1M</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Engagement Rate: {engagementRate}%
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="10"
                      step="0.5"
                      value={engagementRate}
                      onChange={(e) => setEngagementRate(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>0.5%</span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Estimated Results</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-indigo-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Potential Reach</span>
                      <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900">{reachResults.reach}</div>
                    <div className="text-sm text-slate-500 mt-1">people will see the post</div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Expected Engagements</span>
                      <ThumbsUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900">{reachResults.engagements}</div>
                    <div className="text-sm text-slate-500 mt-1">likes, comments, shares</div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-teal-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Total Impressions</span>
                      <Eye className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900">{reachResults.impressions}</div>
                    <div className="text-sm text-slate-500 mt-1">including repeat views</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Cost Calculator */}
          {activeTool === 'cost' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                  Campaign Cost Estimator
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Campaign Type
                    </label>
                    <select
                      value={campaignType}
                      onChange={(e) => setCampaignType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                    >
                      <option>Influencer Marketing</option>
                      <option>Website Ads</option>
                      <option>TV Promotion</option>
                      <option>Cricket/Sports Events</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of Creators/Channels: {creatorCount}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={creatorCount}
                      onChange={(e) => setCreatorCount(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>1</span>
                      <span>20</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Content Pieces per Creator: {contentPieces}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={contentPieces}
                      onChange={(e) => setContentPieces(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>1</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Cost Breakdown</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Total Campaign Cost</span>
                      <DollarSign className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-4xl font-bold text-slate-900">${costResults.total}</div>
                    <div className="text-sm text-slate-500 mt-1">for entire campaign</div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-sm">Cost per Creator</span>
                      <span className="text-lg font-bold text-slate-900">${costResults.perCreator}</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-sm">Cost per Post</span>
                      <span className="text-lg font-bold text-slate-900">${costResults.perPost}</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-sm">Total Content Pieces</span>
                      <span className="text-lg font-bold text-slate-900">{creatorCount * contentPieces}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-purple-100 rounded-xl">
                    <p className="text-xs text-purple-800">
                      <strong>Note:</strong> Costs are estimates based on industry averages. 
                      Actual pricing varies by creator reach, engagement, and niche.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ROI Calculator */}
          {activeTool === 'roi' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                  ROI Preview Tool
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Campaign Budget: ${budget.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>$1K</span>
                      <span>$50K</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Expected Reach: {expectedReach.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      step="10000"
                      value={expectedReach}
                      onChange={(e) => setExpectedReach(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>10K</span>
                      <span>1M</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Conversion Rate: {conversionRate}%
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="10"
                      step="0.5"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>0.5%</span>
                      <span>10%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Average Order Value: ${avgOrderValue}
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="10"
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>$10</span>
                      <span>$500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Projected Returns</h3>
                
                <div className="space-y-4">
                  <div className={`rounded-2xl p-6 border-2 ${
                    Number(roiResults.roi) > 0 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Return on Investment</span>
                      <TrendingUp className={`w-5 h-5 ${
                        Number(roiResults.roi) > 0 ? 'text-green-600' : 'text-red-600'
                      }`} />
                    </div>
                    <div className={`text-4xl font-bold ${
                      Number(roiResults.roi) > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {roiResults.roi}%
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      {Number(roiResults.roi) > 0 ? 'Profitable campaign' : 'Needs optimization'}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-sm">Expected Revenue</span>
                      <span className="text-lg font-bold text-slate-900">${roiResults.revenue}</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-sm">Profit/Loss</span>
                      <span className={`text-lg font-bold ${
                        Number(roiResults.profit.replace(/,/g, '')) >= 0 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`}>
                        ${roiResults.profit}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-sm">Expected Clicks</span>
                      <span className="text-lg font-bold text-slate-900">{roiResults.clicks}</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-sm">Expected Conversions</span>
                      <span className="text-lg font-bold text-slate-900">{roiResults.conversions}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-teal-100 rounded-xl">
                    <p className="text-xs text-teal-800">
                      <strong>Note:</strong> Projections are estimates based on industry benchmarks. 
                      Actual results depend on campaign quality, targeting, and execution.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Channel Selector */}
          {activeTool === 'selector' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-orange-600" />
                  Promotion Channel Selector
                </h2>

                <p className="text-slate-600 mb-8">
                  Answer a few questions to find the best promotion channels for your campaign
                </p>

                <div className="space-y-8">
                  {/* Question 1 */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                    <h3 className="font-semibold text-slate-900 mb-4">1. What's your primary goal?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Brand Awareness</div>
                        <div className="text-xs text-slate-500">Reach & visibility</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Sales & Conversions</div>
                        <div className="text-xs text-slate-500">Direct revenue</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Engagement</div>
                        <div className="text-xs text-slate-500">Interactions & community</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Lead Generation</div>
                        <div className="text-xs text-slate-500">Contact collection</div>
                      </button>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                    <h3 className="font-semibold text-slate-900 mb-4">2. Who is your target audience?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Gen Z (18-24)</div>
                        <div className="text-xs text-slate-500">Instagram, TikTok</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Millennials (25-40)</div>
                        <div className="text-xs text-slate-500">Instagram, YouTube</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Professionals (30-50)</div>
                        <div className="text-xs text-slate-500">LinkedIn, Websites</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Mass Market</div>
                        <div className="text-xs text-slate-500">TV, Multi-channel</div>
                      </button>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                    <h3 className="font-semibold text-slate-900 mb-4">3. What's your budget range?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">Under $5,000</div>
                        <div className="text-xs text-slate-500">Micro-influencers, website ads</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">$5,000 - $25,000</div>
                        <div className="text-xs text-slate-500">Mid-tier creators, multi-channel</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">$25,000 - $100,000</div>
                        <div className="text-xs text-slate-500">Top creators, TV spots</div>
                      </button>
                      <button className="px-4 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-colors text-left">
                        <div className="font-medium text-slate-900">$100,000+</div>
                        <div className="text-xs text-slate-500">Premium campaigns, events</div>
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-xl font-bold mb-3">Recommended Channels</h3>
                    <p className="text-orange-100 mb-6">
                      Select your answers above to get personalized channel recommendations
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="font-semibold mb-1">Influencer Marketing</div>
                        <div className="text-sm text-orange-100">Best fit: 85%</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="font-semibold mb-1">Website Ads</div>
                        <div className="text-sm text-orange-100">Best fit: 70%</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="font-semibold mb-1">Social Media</div>
                        <div className="text-sm text-orange-100">Best fit: 90%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      <Footer isDark={false} />
    </div>
  );
}
