import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About EnginYou</h1>
          <p className="text-xl text-gray-600">
            Building the next generation of engineering thinkers
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Target className="w-12 h-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Engineering Thinking</h3>
              <p className="text-gray-600">
                Develop the problem-solving mindset that defines great engineers
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Make Learning Accessible</h3>
              <p className="text-gray-600">
                Provide free, interactive tools for students to learn at their own pace
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inspire Purpose</h3>
              <p className="text-gray-600">
                Help students find meaning through building and creating solutions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Story Behind EnginYou</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              EnginYou was born from a journey of reflection and growth. After experiencing profound loss, 
              I found myself questioning the deeper meaning of our work and the impact we can have on others. 
              This period of introspection led to the creation of <em>An Ode to You</em>, a book I wrote when I was 15, 
              exploring grief, growth, and finding purpose through difficult times.
            </p>
            <p className="mb-6">
              That journey of reflection sparked this one: helping others find purpose through building. 
              Engineering isn't just a career—it's a mindset that can transform how we approach problems, 
              think critically, and create solutions that make a difference.
            </p>
            <p>
              EnginYou is my way of sharing that engineering mindset with students who are just beginning 
              their journey. Through interactive Python challenges and real-world engineering problems, 
              we're building not just coding skills, but the fundamental thinking patterns that make great engineers.
            </p>
          </div>
        </motion.div>

        {/* Book Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-primary-blue-light rounded-2xl p-8 mb-12"
        >
          <div className="flex items-start space-x-4">
            <BookOpen className="w-8 h-8 text-primary-blue mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                From <em>An Ode to You</em>
              </h3>
              <p className="text-gray-700 mb-4">
                "Our times together inspired me to gain interest in STEM... so others will not feel the same sorrow." 
                This quote from my book became the foundation of EnginYou. The journey of reflection that led to that book 
                sparked this platform—helping others find purpose through building.
              </p>
              <div className="text-sm text-gray-600">
                <em>An Ode to You</em> explores grief, growth, and purpose. 
                <a 
                  href="https://www.amazon.com/Ode-You-Anyaa-Sachdev/dp/B0F1X7HSMZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-blue ml-1 hover:text-primary-blue-dark transition-colors"
                >
                  [View Book]
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Learning Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we help students develop engineering thinking through hands-on problem-solving
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - How We Teach */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                How We Teach
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Learn Through Engineering',
                    description: 'Instead of learning programming in isolation, you\'ll solve real engineering problems. Every line of code has a purpose.'
                  },
                  {
                    title: 'Multiple Engineering Fields',
                    description: 'Explore mechanical, computer, and bioengineering challenges. See how programming applies across different domains.'
                  },
                  {
                    title: 'Build Engineering Thinking',
                    description: 'We focus on developing problem-solving skills, systematic thinking, and the ability to break down complex problems.'
                  },
                  {
                    title: 'Real-World Applications',
                    description: 'Work on problems that engineers actually face: bridge stress analysis, drug delivery modeling, algorithm optimization, and more.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - What You Get */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue-light rounded-full mb-3">
                  <span className="text-lg font-bold text-primary-blue">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What You'll Get
                </h3>
                <p className="text-gray-600 text-sm">
                  Everything you need to start your engineering journey
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  '30+ interactive Python challenges',
                  'Real engineering problem-solving',
                  'In-browser Python IDE with Pyodide',
                  'Progress tracking & Enguinity Points',
                  'No registration or sign-up required',
                  'No credit card information needed',
                  'No advertisements or tracking',
                  'No premium features or paywalls',
                  'Created by a student, for students',
                  'Always free, forever'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-primary-blue">✓</span>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Why is EnginYou free?</h4>
                <p className="text-blue-700 text-sm">
                  I believe quality engineering education should be accessible to everyone, not just those who can afford expensive courses. This is my way of giving back and helping the next generation of engineers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Learning Through Doing</h4>
                <p className="text-gray-600">
                  We believe the best way to learn engineering is by solving real problems with real code.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-purple rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Accessibility First</h4>
                <p className="text-gray-600">
                  Quality engineering education should be available to everyone, regardless of background.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Purpose-Driven Learning</h4>
                <p className="text-gray-600">
                  Every challenge is designed to show how engineering can make a positive impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 