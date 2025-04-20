import { FaTruck, FaTools, FaClock, FaChartLine } from 'react-icons/fa';
import Header from './Navbar';
import Footer from './Fotter';

const HeroSection = () => {
  return (
  <div>
    <Header/>
      <section className="relative bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1565110131394-5be31802b92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>

      <div className="relative container mx-auto px-6 py-20 text-center z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
          Transform Logistics with myFleet
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-slide-up">
          At myFleet, we redefine logistics with innovative maintenance and management solutions. Optimize your fleet, minimize downtime, and boost efficiency with our state-of-the-art platform tailored for modern logistics.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-6 mb-16 animate-slide-up delay-100">
          <a
            href="#get-started"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </a>
          <a
            href="#learn-more"
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-105 shadow-lg"
          >
            Discover myFleet
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto mb-20">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <FaTruck className="text-5xl mb-6 text-yellow-400 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Fleet Management</h3>
            <p className="text-sm opacity-80">
              Track and manage your fleet in real-time with advanced GPS, automated scheduling, and performance analytics.
            </p>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Fleet Management"
              className="mt-6 rounded-lg shadow-md w-full h-40 object-cover"
            />
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <FaTools className="text-5xl mb-6 text-yellow-400 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Predictive Maintenance</h3>
            <p className="text-sm opacity-80">
              Prevent breakdowns with AI-driven diagnostics and proactive maintenance alerts customized for your fleet.
            </p>
            <img
              src="https://images.unsplash.com/photo-1611078489935-0cb7c24107b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Maintenance Tools"
              className="mt-6 rounded-lg shadow-md w-full h-40 object-cover"
            />
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <FaClock className="text-5xl mb-6 text-yellow-400 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Operational Efficiency</h3>
            <p className="text-sm opacity-80">
              Streamline operations with optimized routes, reduced fuel costs, and intelligent scheduling.
            </p>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3a8dd22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Time Efficiency"
              className="mt-6 rounded-lg shadow-md w-full h-40 object-cover"
            />
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <FaChartLine className="text-5xl mb-6 text-yellow-400 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Data-Driven Insights</h3>
            <p className="text-sm opacity-80">
              Make informed decisions with comprehensive analytics and detailed reports tailored to your business needs.
            </p>
            <img
              src="https://images.unsplash.com/photo-1551288049-b1f3a0a9e845?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Data Analytics"
              className="mt-6 rounded-lg shadow-md w-full h-40 object-cover"
            />
          </div>
        </div>

        {/* Why Choose myFleet Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            Why Choose myFleet?
          </h2>
          <p className="text-lg mb-12 opacity-90">
            myFleet is your trusted partner in logistics excellence. Our platform combines advanced technology with user-friendly design to deliver unparalleled reliability and scalability. Whether you manage a small fleet or a global operation, myFleet empowers you to achieve peak performance and stay ahead in the logistics industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1565110131394-5be31802b92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Logistics Operations"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-2xl"></div>
              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                Seamless Fleet Operations
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Logistics Technology"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-2xl"></div>
              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                Cutting-Edge Technology
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            Trusted by Logistics Leaders
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <p className="text-lg italic mb-4">
              “myFleet has revolutionized our operations, cutting maintenance costs by 35% and improving our delivery times significantly. It’s an indispensable tool for our business.”
            </p>
            <p className="text-sm font-semibold">— John Smith, COO of GlobalFreight Solutions</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            myFleet by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center">
              <p className="text-4xl font-bold text-yellow-400">98%</p>
              <p className="text-sm opacity-80 mt-2">Customer Satisfaction Rate</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center">
              <p className="text-4xl font-bold text-yellow-400">40%</p>
              <p className="text-sm opacity-80 mt-2">Reduction in Downtime</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center">
              <p className="text-4xl font-bold text-yellow-400">25K+</p>
              <p className="text-sm opacity-80 mt-2">Vehicles Managed Globally</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            Ready to Elevate Your Fleet?
          </h2>
          <a
            href="#signup"
            className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-full text-xl font-semibold hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg inline-block"
          >
            Join myFleet Today
          </a>
        </div>
      </div>

      {/* Custom Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-in-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </section>
    <Footer/>
  </div>
  );
};

export default HeroSection;