import React, { useState } from 'react';
import { blogPostsData } from '../data/mockData';
import { Calendar, User, MessageSquare, ArrowRight, X } from 'lucide-react';
import { FadeInDown, FadeInUp, ZoomIn } from '../components/AnimatedElements';

export default function BlogPage({ setCurrentPage }) {
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="w-full">
      {/* Header with Fade In Down */}
      <div className="bg-pharmacy-secondary text-white py-16 sm:py-20 relative overflow-hidden">
        <FadeInDown className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Health & Medical Articles</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Clinical insights, seasonal wellness recommendations, and pharmacy industry updates from our experts.
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-pharmacy-teal mt-4">
            <button onClick={() => setCurrentPage('home')} className="hover:underline">Homepage</button>
            <span>/</span>
            <span className="text-gray-300">Blog</span>
          </div>
        </FadeInDown>
      </div>

      {/* Blog Listing with Fade In Up & Image Hover Effect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsData.map((post, idx) => (
              <FadeInUp key={post.id} delay={idx * 0.12} className="h-full">
                <div 
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-pharma hover-lift hover:border-pharmacy-teal/30 group cursor-pointer flex flex-col justify-between h-full"
                  onClick={() => setActivePost(post)}
                >
                  <div>
                    <div className="relative overflow-hidden aspect-16/10 image-hover-zoom">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" 
                      />
                      <span className="absolute top-4 left-4 bg-pharmacy-teal text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-7 space-y-3">
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5"><Calendar size={13} className="text-pharmacy-teal" /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><User size={13} className="text-pharmacy-teal" /> {post.author}</span>
                      </div>

                      <h3 className="text-xl font-bold text-pharmacy-secondary group-hover:text-pharmacy-teal transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between text-xs font-bold text-pharmacy-teal">
                    <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300">
                      Read Full Article <ArrowRight size={13} />
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MessageSquare size={13} /> {post.comments} Comments
                    </span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal with Zoom In */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <ZoomIn className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-gray-100 relative">
            <button 
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 p-1.5 rounded-full hover:bg-white text-gray-700 shadow-md transition-colors"
            >
              <X size={20} />
            </button>

            <img src={activePost.image} alt={activePost.title} className="w-full h-64 object-cover" />

            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-teal bg-teal-50 px-3 py-1 rounded-full">
                {activePost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-pharmacy-secondary">
                {activePost.title}
              </h2>
              <div className="flex items-center space-x-4 text-xs text-gray-400 border-b border-gray-100 pb-4">
                <span>By {activePost.author}</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>4 Min Read</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3 pt-2">
                <p>{activePost.excerpt}</p>
                <p>
                  Pharmacies today go far beyond mere pill dispensaries. When you receive medications, whether through online express fulfillment or at our local dispensary counter, consulting a licensed pharmacist guarantees that dosage strengths are properly calibrated for your age, existing therapies, and potential underlying conditions.
                </p>
                <p>
                  If you ever experience unusual dizziness, mild allergic responses, or questions regarding whether to take your prescription with meals, please reach out to our on-duty clinical team via our direct line or online consultation portal.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setActivePost(null)}
                  className="bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors btn-hover-effect"
                >
                  Close Article
                </button>
              </div>
            </div>
          </ZoomIn>
        </div>
      )}
    </div>
  );
}

