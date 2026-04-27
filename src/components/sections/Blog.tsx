import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../../constants';
import { Calendar, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-primary font-bold tracking-widest uppercase mb-4">Latest Insights</h5>
          <h2 className="section-title">
            Our <span className="text-primary">Latest Articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light-bg rounded-[2.5rem] overflow-hidden border border-slate-50 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden m-3 rounded-[2rem]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 px-4 py-2 bg-primary text-white text-xs font-black rounded-xl shadow-lg uppercase tracking-widest">
                  {post.date}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1 text-primary">
                    <Calendar size={14} /> {post.category}
                  </div>
                </div>
                <h3 className="text-xl font-display font-black text-dark-navy mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs group/btn cursor-pointer">
                  Read Article <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
