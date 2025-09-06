import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, MessageCircle, User, BookOpen, Bell, Heart } from 'lucide-react';

// Loading Screen Component
const LoadingScreen = ({ onLoadComplete }) => {
  const [moonPhase, setMoonPhase] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        return newProgress;
      });
      
      setMoonPhase(prev => (prev + 1) % 8);
    }, 250);
    
    return () => clearInterval(timer);
  }, [onLoadComplete]);
  
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-indigo-950 to-purple-950 flex flex-col items-center justify-center">
      {/* Stars/Constellations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
        
        {/* Simple constellations */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1000 1000">
          <path d="M200,200 L300,250 L350,350 L250,400 Z" stroke="white" strokeWidth="1" fill="none" />
          <path d="M600,300 L700,320 L750,250 L800,350 L850,300" stroke="white" strokeWidth="1" fill="none" />
          <path d="M400,600 L500,650 L600,600 L550,700" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      {/* Moon Phase Animation */}
      <div className="relative w-24 h-24 mb-8">
        {/* Base full moon with craters */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden">
          {/* Moon craters */}
          <div className="absolute w-3 h-3 rounded-full bg-gray-300 opacity-70" style={{ top: '20%', left: '30%' }}></div>
          <div className="absolute w-5 h-5 rounded-full bg-gray-300 opacity-70" style={{ top: '50%', left: '60%' }}></div>
          <div className="absolute w-2 h-2 rounded-full bg-gray-300 opacity-70" style={{ top: '70%', left: '40%' }}></div>
          <div className="absolute w-4 h-4 rounded-full bg-gray-300 opacity-70" style={{ top: '25%', left: '70%' }}></div>
          <div className="absolute w-6 h-6 rounded-full bg-gray-300 opacity-70" style={{ top: '60%', left: '20%' }}></div>
        </div>
        
        {/* Shadow element that animates to show phases */}
        <div 
          className="absolute inset-0 bg-black rounded-full transition-all duration-300 ease-in-out"
          style={{
            clipPath: [
              'inset(0 0 0 50%)',                // New Moon (right half covered)
              'inset(0 25% 0 50%)',              // Waxing Crescent
              'inset(0 50% 0 50%)',              // First Quarter
              'inset(0 75% 0 50%)',              // Waxing Gibbous
              'inset(0 100% 0 0%)',              // Full Moon (no shadow)
              'inset(0 75% 0 0%)',               // Waning Gibbous
              'inset(0 50% 0 0%)',               // Last Quarter
              'inset(0 25% 0 0%)',               // Waning Crescent
            ][moonPhase]
          }}
        ></div>
      </div>
      
      <h2 className="text-white text-xl mb-4 font-serif">Embracing Every Phase</h2>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        ></div>
      </div>
      <p className="text-white mt-2">{loadingProgress}%</p>
    </div>
  );
};

// ChatBot Profile Selection Component
const ChatbotProfiles = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-950 via-indigo-900 to-black flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-12 font-serif">Choose Your Guide</h1>
      
      <div className="flex space-x-12">
        <motion.div 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/chatbot/bunny')}
        >
          <div className="w-40 h-40 rounded-full bg-pink-100 flex items-center justify-center cursor-pointer mb-4 overflow-hidden">
            <div className="relative w-32 h-32">
              {/* Bunny character - stylized */}
              <div className="absolute w-24 h-24 bg-white rounded-full left-4 top-2"></div>
              <div className="absolute w-8 h-16 bg-white rounded-full -top-10 left-6 transform -rotate-12"></div>
              <div className="absolute w-8 h-16 bg-white rounded-full -top-10 right-6 transform rotate-12"></div>
              <div className="absolute w-4 h-4 bg-pink-200 rounded-full left-10 top-10"></div>
              <div className="absolute w-4 h-4 bg-pink-200 rounded-full right-10 top-10"></div>
              <div className="absolute w-6 h-3 bg-pink-300 rounded-full left-1/2 top-16 transform -translate-x-1/2"></div>
            </div>
          </div>
          <p className="text-white text-lg">Friendly Guide</p>
          <p className="text-pink-300 text-sm">For gentle support</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/chatbot/doctor')}
        >
          <div className="w-40 h-40 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer mb-4 overflow-hidden">
            <div className="relative w-32 h-32">
              {/* Doctor character - stylized */}
              <div className="absolute w-20 h-16 bg-blue-200 rounded-t-lg left-6 top-2"></div>
              <div className="absolute w-24 h-8 bg-blue-300 left-4 top-0"></div>
              <div className="absolute w-20 h-12 bg-white left-6 top-16"></div>
              <div className="absolute w-16 h-3 bg-blue-500 left-8 top-20"></div>
              <div className="absolute w-4 h-4 bg-gray-700 rounded-full left-10 top-8"></div>
              <div className="absolute w-4 h-4 bg-gray-700 rounded-full right-10 top-8"></div>
              <div className="absolute w-6 h-1 bg-gray-700 rounded-full left-13 top-14"></div>
            </div>
          </div>
          <p className="text-white text-lg">Medical Professional</p>
          <p className="text-blue-300 text-sm">For clinical expertise</p>
        </motion.div>
      </div>
      
      <button 
        className="mt-12 px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition-all"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
};

// Chat Interface Component (placeholder for now)
const ChatInterface = ({ profile }) => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-950 via-indigo-900 to-black flex flex-col">
      <header className="p-4 flex justify-between items-center border-b border-purple-800">
        <button 
          className="text-white flex items-center"
          onClick={() => navigate('/chatbot')}
        >
          <span className="mr-2">←</span> Back
        </button>
        <h1 className="text-white text-xl">
          {profile === 'bunny' ? 'Chatting with Friendly Guide' : 'Consulting Medical Professional'}
        </h1>
        <div></div>
      </header>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-purple-900/50 p-4 rounded-lg mb-4 text-white">
          {profile === 'bunny' 
            ? "Hi there! I'm your friendly guide to women's health. How can I help you today?"
            : "Hello, I'm your healthcare professional consultant. What brings you in today?"}
        </div>
        
        {/* We'll add actual chat functionality later */}
        <div className="bg-purple-800/30 p-4 rounded-lg text-white opacity-50">
          Chat functionality will be implemented with your provided API links
        </div>
      </div>
      
      <div className="p-4 border-t border-purple-800">
        <div className="flex">
          <input 
            type="text" 
            placeholder="Type your message here..." 
            className="flex-1 bg-purple-900/30 text-white p-3 rounded-l-lg focus:outline-none border border-purple-700"
          />
          <button className="bg-pink-500 text-white p-3 rounded-r-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Home Page Component
const HomePage = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // Placeholder articles
  const articles = [
    {
      id: 1,
      title: "Understanding PCOS: Symptoms & Management",
      excerpt: "Polycystic ovary syndrome affects millions of women. Learn about the key symptoms and effective management strategies.",
      image: "pcos",
      category: "PCOS"
    },
    {
      id: 2,
      title: "The PCOD vs PCOS Difference: What You Need to Know",
      excerpt: "While often confused, these conditions have distinct differences. We break it down in simple terms.",
      image: "pcod", 
      category: "PCOD"
    },
    {
      id: 3,
      title: "Breast Self-Examination: A Step by Step Guide",
      excerpt: "Regular self-examinations are crucial for early detection. Here's how to do it properly.",
      image: "breast",
      category: "Breast Health"
    }
  ];
  
  // News flashes
  const newsFlashes = [
    "New research shows promising treatment for reducing PCOS symptoms",
    "Study links certain foods to improved hormone balance in women with PCOD",
    "Breakthrough in non-invasive breast cancer detection announced"
  ];
  
  // Fun facts
  const funFacts = [
    "PCOS affects approximately 1 in 10 women of childbearing age",
    "Regular exercise can reduce PCOS symptoms by up to 30%",
    "Monthly breast self-exams should ideally be performed 3-5 days after your period starts"
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black text-white">
      {/* Header */}
      <header className="py-4 px-8 flex justify-between items-center border-b border-purple-800">
        <div className="flex items-center">
          <Moon className="text-pink-400 mr-2" />
          <h1 className="text-2xl font-serif bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Lunar Health
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-pink-400 transition-colors">Home</a>
          <a href="#" className="hover:text-pink-400 transition-colors">PCOS/PCOD</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Breast Health</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Resources</a>
          <a href="#" className="hover:text-pink-400 transition-colors">About</a>
        </nav>
        
        <button 
          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
          onClick={() => setShowLoginModal(true)}
        >
          Log In
        </button>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-serif mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Your Journey to Wellness Begins Here
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Empowering women with knowledge, support, and personalized healthcare guidance for PCOS, PCOD, and breast health.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="px-8 py-3 bg-transparent border border-purple-400 rounded-full hover:bg-purple-900/30 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>
      
      {/* Articles Section */}
      <section className="py-16 px-8 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif text-pink-400">Featured Articles</h2>
            <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">View All →</a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map(article => (
              <motion.div 
                key={article.id}
                className="bg-purple-900/30 rounded-lg overflow-hidden border border-purple-800/50 hover:border-pink-500/50 transition-all"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`h-48 bg-gradient-to-br ${
                  article.category === 'PCOS' ? 'from-purple-700 to-pink-700' :
                  article.category === 'PCOD' ? 'from-blue-700 to-purple-700' :
                  'from-pink-700 to-blue-700'
                } flex items-center justify-center`}>
                  {article.category === 'PCOS' && <BookOpen size={64} className="text-white opacity-50" />}
                  {article.category === 'PCOD' && <BookOpen size={64} className="text-white opacity-50" />}
                  {article.category === 'Breast Health' && <Heart size={64} className="text-white opacity-50" />}
                </div>
                <div className="p-6">
                  <span className="text-xs text-pink-400 font-semibold">{article.category}</span>
                  <h3 className="text-xl font-medium mt-2 mb-3">{article.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                  <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors text-sm">
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* News Flashes & Fun Facts */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-black p-8 rounded-lg border border-purple-800/50">
            <div className="flex items-center mb-6">
              <Bell className="text-pink-400 mr-3" />
              <h2 className="text-2xl font-serif">Latest News</h2>
            </div>
            <ul className="space-y-4">
              {newsFlashes.map((news, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="text-pink-400 mr-2">•</span>
                  <p>{news}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-pink-900/50 to-black p-8 rounded-lg border border-purple-800/50">
            <div className="flex items-center mb-6">
              <Heart className="text-purple-400 mr-3" />
              <h2 className="text-2xl font-serif">Fun Facts</h2>
            </div>
            <ul className="space-y-4">
              {funFacts.map((fact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="text-purple-400 mr-2">★</span>
                  <p>{fact}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-8 bg-black/50 border-t border-purple-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Moon className="text-pink-400 mr-2" />
              <h3 className="text-xl font-serif bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Lunar Health
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering women through health education and support.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Articles</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Health Topics</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">PCOS</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">PCOD</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Breast Health</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Menstrual Health</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on women's health.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-purple-900/30 rounded-l-lg focus:outline-none border border-purple-800"
              />
              <button className="bg-pink-500 px-3 py-2 rounded-r-lg">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lunar Health. All rights reserved.
        </div>
      </footer>
      
      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-purple-900 to-black p-8 rounded-lg w-full max-w-md border border-purple-700"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif text-pink-400">Log In</h3>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowLoginModal(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-purple-900/50 rounded-lg border border-purple-700 focus:border-pink-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 bg-purple-900/50 rounded-lg border border-purple-700 focus:border-pink-500 focus:outline-none"
                  />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-300">Remember me</span>
                  </label>
                  <a href="#" className="text-pink-400 hover:underline">Forgot password?</a>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity">
                  Log In
                </button>
                <div className="text-center text-sm text-gray-300">
                  Don't have an account? <a href="#" className="text-pink-400 hover:underline">Sign up</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chatbot Floating Button */}
      <motion.div 
        className="fixed bottom-6 right-6"
        whileHover={{ scale: 1.05 }}
      >
        <button 
          className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
          onClick={() => navigate('/chatbot')}
        >
          <MessageCircle className="text-white" />
        </button>
      </motion.div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [loading, setLoading] = useState(true);
  
  const handleLoadComplete = () => {
    setLoading(false);
  };
  
  return (
    <Router>
      <AnimatePresence>
        {loading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      </AnimatePresence>
      
      <AnimatePresence>
        {!loading && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chatbot" element={<ChatbotProfiles />} />
            <Route path="/chatbot/:profile" element={<ChatInterfaces />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
};

// Helper component to handle dynamic profile parameter
const ChatInterfaces = () => {
  const { profile } = useParams();
  return <ChatInterface profile={profile} />;
};

export default App;