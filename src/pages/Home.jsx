import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Cog, Dna, Code, ArrowRight, Target, Users, Heart } from 'lucide-react';

const Home = () => {
  const engineeringPaths = [
    {
      id: 'mechanical',
      title: 'Mechanical',
      icon: Cog,
      description: 'Apply Python to solve mechanical engineering problems',
      locked: false
    },
    {
      id: 'computer',
      title: 'Computer',
      icon: Cpu,
      description: 'Learn algorithms, data structures, and computational thinking',
      locked: false
    },
    {
      id: 'bioengineering',
      title: 'Bioengineering',
      icon: Dna,
      description: 'Apply programming to biological and medical problems',
      locked: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn to Think Like an{' '}
              <span className="text-primary-blue">Engineer</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master Python through real engineering challenges. Build the problem-solving mindset that defines great engineers.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                to="/challenges"
                className="inline-flex items-center px-8 py-4 bg-primary-blue text-white font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Start Your Engineering Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Thinking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engineering Thinking in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every challenge builds real engineering skills, not just coding syntax
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Problem Decomposition',
                description: 'Break complex engineering problems into manageable pieces, just like real engineers do.'
              },
              {
                icon: Code,
                title: 'Systematic Solutions',
                description: 'Design solutions that consider constraints, tradeoffs, and real-world applications.'
              },
              {
                icon: Heart,
                title: 'Purpose-Driven Learning',
                description: 'Every line of code serves a purpose in solving authentic engineering challenges.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <feature.icon className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Paths Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Engineering Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              After mastering Python basics, explore different engineering domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {engineeringPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link to="/challenges">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <path.icon className="w-8 h-8 text-primary-blue" />
                      <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{path.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">{path.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete learning platform, completely free
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '30+ interactive Python challenges',
              'Real engineering problem-solving',
              'In-browser Python IDE',
              'Progress tracking & points system',
              'No registration required',
              'No credit card needed',
              'No ads or tracking',
              'Created by a student, for students'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-primary-blue text-xl">✓</span>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200 max-w-2xl mx-auto text-center"
          >
            <p className="text-blue-800">
              <strong>Why free?</strong> Quality engineering education should be accessible to everyone, not just those who can afford expensive courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-6">
              "Our times together inspired me to gain interest in STEM... so others will not feel the same sorrow."
            </blockquote>
            <p className="text-gray-600 mb-4">
              — From <em>An Ode to You</em>
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary-blue hover:text-primary-blue-dark transition-colors"
            >
              <span>Learn more about our mission</span>
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 