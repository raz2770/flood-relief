// App.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QRCode from "react-qr-code";
import { 
  Heart, 
  Home, 
  Users, 
  Phone, 
  Mail, 
  Share2, 
  CreditCard, 
  Smartphone,
  X,
  ChevronRight,
  MapPin,
  Calendar,
  Target,
  Baby,
  Droplets,
  Shield,
  Sun,
  Clock,
  AlertTriangle
} from "lucide-react";

function App() {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [donationMethod, setDonationMethod] = useState('upi');
  const [liveCount, setLiveCount] = useState(25000);

  // Simulate live donation counter
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 500) + 100);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];
  const upiId = "floodrelief@okaxis"; // Example UPI ID

  const generateUPILink = (amount) => {
    return `upi://pay?pa=${upiId}&pn=Flood Relief Fund&am=${amount}&cu=INR&tn=Flood Relief Donation`;
  };

  const emotionalStories = [
    {
      name: "A Farming Family",
      location: "Punjab Region",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
      story: "Rajesh worked his 3-acre farm for 20 years to feed his family of 6. The floods destroyed his entire wheat and rice crop just before harvest. His wife Sunita weeps as she holds their hungry children. 'We never asked for much, just enough to feed our babies,' she whispers. Your support can help them plant again and restore their dignity. 🌾�‍🌾",
      urgent: true
    },
    {
      name: "A Construction Worker's Family",
      location: "Punjab Region", 
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
      story: "Ramesh builds homes for others but lost his own in the floods. His pregnant wife Meera sleeps on the cold relief camp floor, worried about their unborn child. His tools - his only means of earning - are buried under the debris. 'I just want my baby to be born safely,' Meera says, touching her belly. Every rupee helps rebuild not just homes, but hopes. 🏗️🤱",
      urgent: true
    },
    {
      name: "A Multi-Generational Family",
      location: "Uttarakhand Hills",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6",
      story: "Three generations under one roof - Grandpa Mohan (82), parents Amit & Kavya, and 4 young children aged 3-12. They lost everything: their small grocery shop, their savings, their home where 3 generations of memories lived. The children ask, 'When are we going home, Papa?' Amit has no answer. Your kindness can reunite this broken family with hope. 👴👨‍👩‍👧‍👦�",
      urgent: false
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Sticky Navigation Container */}
      <div className="sticky top-0 z-50">
        {/* Urgent Alert Banner */}
        <motion.div 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="bg-red-600 text-white text-center py-2 md:py-3 px-3 md:px-4 emergency-alert relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-pulse opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center space-x-2 text-sm md:text-base">
            <AlertTriangle className="h-5 w-5 animate-bounce" />
            <span className="font-bold">🚨 URGENT: Punjab, Himachal & Uttarakhand floods - Emergency help needed NOW!</span>
            <AlertTriangle className="h-5 w-5 animate-bounce" />
          </div>
        </motion.div>

        {/* Header */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white p-3 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 shadow-2xl"
        >
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <Heart className="h-8 w-8 text-red-400" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold">Punjab, Himachal & Uttarakhand Flood Relief</h1>
            <p className="text-sm text-blue-200">Northern India Emergency Response</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-xs md:text-sm text-blue-200">Live Donations</div>
            <div className="text-base md:text-lg font-bold text-green-300">₹{liveCount.toLocaleString()}</div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowDonationModal(true)}
            className="bg-gradient-to-r from-red-500 to-pink-600 px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-bold shadow-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 donation-pulse"
          >
            ❤️ Save Lives Now
          </motion.button>
        </div>
      </motion.header>
      </div>

      {/* Hero Section */}
      <section
        className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative pt-24 md:pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1547036967-23d11aacaee0')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-5xl px-4"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              🌊 <span className="text-red-400">Punjab, Himachal & Uttarakhand</span><br/>
              <span className="text-blue-300">Flood Emergency</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-black/60 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
          >
            <p className="text-white text-base sm:text-lg md:text-2xl mb-6 leading-relaxed">
              🌧️ <strong>Mountain rivers overflow</strong> - Punjab plains flooded<br/>
              🏠 <strong>Himachal villages submerged</strong> - families stranded<br/>
              ❄️ <strong>Uttarakhand hill stations devastated</strong> - urgent help needed<br/>
              ⏰ <strong>Three states, one emergency</strong> - YOU can save lives
            </p>
            
            <div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-8 text-center">
              <div className="bg-red-600/80 p-3 md:p-4 rounded-lg">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">Punjab</div>
                <div className="text-sm">Agricultural lands flooded</div>
              </div>
              <div className="bg-blue-600/80 p-3 md:p-4 rounded-lg">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">Himachal</div>
                <div className="text-sm">Mountain villages cut off</div>
              </div>
              <div className="bg-purple-600/80 p-3 md:p-4 rounded-lg">
                <Sun className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">Uttarakhand</div>
                <div className="text-sm">Hill stations devastated</div>
              </div>
            </div>

            <motion.button 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDonationModal(true)}
              className="bg-gradient-to-r from-red-600 via-pink-600 to-red-600 px-6 py-4 md:px-12 md:py-6 rounded-2xl text-lg md:text-2xl font-black shadow-2xl hover:shadow-red-500/50 transition-all duration-500 animate-pulse"
            >
              💝 I Want to Help NOW 🚨
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Heartbreaking Stats */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-red-900 via-red-800 to-pink-900 text-white py-10 md:py-12"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl md:text-4xl font-black text-center mb-6 md:mb-8">💔 The Heartbreaking Reality</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-black/30 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/20"
            >
              <Baby className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-yellow-300" />
              <div className="text-2xl md:text-4xl font-black text-yellow-300 mb-1 md:mb-2">5,000+</div>
              <div className="text-sm md:text-lg font-semibold">Punjab Families Affected</div>
              <div className="text-xs md:text-sm opacity-80 mt-2">🌾 Farmers lost crops</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-black/30 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/20"
            >
              <Home className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-blue-300" />
              <div className="text-2xl md:text-4xl font-black text-blue-300 mb-1 md:mb-2">3,200+</div>
              <div className="text-sm md:text-lg font-semibold">Himachal Homes Lost</div>
              <div className="text-xs md:text-sm opacity-80 mt-2">🏔️ Mountain villages destroyed</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-black/30 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/20"
            >
              <Shield className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-green-300" />
              <div className="text-2xl md:text-4xl font-black text-green-300 mb-1 md:mb-2">₹{liveCount.toLocaleString()}</div>
              <div className="text-sm md:text-lg font-semibold">Relief Fund Raised</div>
              <div className="text-xs md:text-sm opacity-80 mt-2">💝 For three states</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-black/30 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/20"
            >
              <Heart className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-red-300 animate-pulse" />
              <div className="text-2xl md:text-4xl font-black text-red-300 mb-1 md:mb-2">1,800+</div>
              <div className="text-sm md:text-lg font-semibold">Uttarakhand Evacuated</div>
              <div className="text-xs md:text-sm opacity-80 mt-2">⛰️ From landslide zones</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Emotional Stories */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 bg-gradient-to-b from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4">🤲 Hearts That Need Healing</h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Behind every statistic is a family's shattered dream, a farmer's broken spirit, a worker's lost livelihood. 
              These are our neighbors, our backbone - the ones who feed us, build our homes, and keep our communities strong. 
              Today, they need us to be their strength. 💛
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {emotionalStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-2 ${
                  story.urgent ? 'border-red-300 bg-red-50' : 'border-blue-200'
                } relative`}
              >
                {story.urgent && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce z-10">
                    🚨 URGENT
                  </div>
                )}
                
        <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{story.name}</h4>
                    <p className="text-sm flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {story.location}
                    </p>
                  </div>
                </div>
                
                <div className="p-5 md:p-6">
                  <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                    {story.story}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowDonationModal(true)}
                    className={`w-full py-3 rounded-xl text-sm md:text-base font-bold text-white transition-all duration-300 ${
                      story.urgent 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                    }`}
                  >
                    💝 Help {story.name.split(' ')[1]} Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Donation Impact with Emotions */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 text-white"
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <h3 className="text-4xl font-black mb-4">💝 Help Punjab, Himachal & Uttarakhand Rise Again</h3>
            <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              From Punjab's flooded farms to Himachal's stranded villages to Uttarakhand's devastated hills - 
              your donation reaches every corner where hope is needed. ✨
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { 
                amount: "₹100", 
                impact: "One warm meal for a hungry child", 
                emoji: "🍲", 
                color: "from-yellow-400 to-orange-500",
                story: "Little Aadhya gets to eat today"
              },
              { 
                amount: "₹500", 
                impact: "Warm blanket for a shivering family", 
                emoji: "🛏️", 
                color: "from-blue-400 to-blue-600",
                story: "Dadi Kamla stays warm tonight"
              },
              { 
                amount: "₹1,000", 
                impact: "Medicine for 5 sick children", 
                emoji: "💊", 
                color: "from-green-400 to-green-600",
                story: "Baby Arjun gets the care he needs"
              },
              { 
                amount: "₹5,000+", 
                impact: "Rebuild hope and rebuild homes", 
                emoji: "🏡", 
                color: "from-purple-400 to-purple-600",
                story: "A family starts over with dignity"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  rotateY: 5 
                }}
                className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-6 md:p-8 border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-500 group"
                onClick={() => {
                  setSelectedAmount(parseInt(item.amount.replace('₹', '').replace('+', '').replace(',', '')));
                  setShowDonationModal(true);
                }}
              >
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl group-hover:animate-bounce`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.emoji}
                </motion.div>
                <h4 className="text-2xl md:text-3xl font-black mb-3 text-white">{item.amount}</h4>
                <p className="text-base md:text-lg font-semibold mb-3 text-blue-100">{item.impact}</p>
                <p className="text-sm text-gray-300 italic">💫 {item.story}</p>
                <motion.div 
                  className="mt-4 bg-white/20 rounded-lg p-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  Click to donate with love 💖
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Donation Modal */}
      <AnimatePresence>
        {showDonationModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 md:p-4"
            onClick={() => setShowDonationModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-5 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Help Punjab, Himachal & Uttarakhand 💖</h3>
                <button 
                  onClick={() => setShowDonationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-3 md:space-y-4 mb-6">
                <p className="text-gray-600">Choose an amount to donate:</p>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {predefinedAmounts.map(amount => (
                    <motion.button
                      key={amount}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-2.5 md:p-3 rounded-lg border-2 text-sm md:text-base transition-all ${
                        selectedAmount === amount 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 mb-6">
                <p className="text-gray-600">Payment method:</p>
                <div className="flex space-x-3 md:space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDonationMethod('upi')}
                    className={`flex-1 p-2.5 md:p-3 rounded-lg border-2 text-sm md:text-base transition-all ${
                      donationMethod === 'upi' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Smartphone className="h-5 w-5 mx-auto mb-1" />
                    UPI
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDonationMethod('card')}
                    className={`flex-1 p-2.5 md:p-3 rounded-lg border-2 text-sm md:text-base transition-all ${
                      donationMethod === 'card' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="h-5 w-5 mx-auto mb-1" />
                    Card
                  </motion.button>
                </div>
              </div>

              {selectedAmount && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {donationMethod === 'upi' ? (
                    <div className="text-center">
                      <QRCode 
                        value={generateUPILink(selectedAmount)} 
                        size={200}
                        className="mx-auto mb-4"
                      />
                      <p className="text-sm text-gray-600 mb-2">
                        Scan QR code or click the button below to pay via UPI
                      </p>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={generateUPILink(selectedAmount)}
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Pay ₹{selectedAmount} via UPI
                      </motion.a>
                    </div>
                  ) : (
                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Pay ₹{selectedAmount} via Card
                      </motion.button>
                      <p className="text-xs text-gray-500 mt-2">
                        Secure payment powered by Razorpay
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              <div className="text-center text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
                <p className="mb-2">💝 <strong>Your donation is more than money - it's love in action</strong></p>
                <p className="mb-2">🧾 Tax-exemption receipt under 80G will be provided</p>
                <p>🙏 Updates about how your love helped will be shared with you</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
