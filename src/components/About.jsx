// import React from 'react';
// import { FaTruck, FaMapMarkedAlt, FaChartLine, FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa';

// import Footer from './Fotter';
// import Header from './Navbar';

// const AboutUs = () => {
//   return (
//     <div>

//         <Header/>
//         <div className="bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-[#01588E] text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Driving Logistics Forward</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Revolutionizing fleet management with cutting-edge technology and decades of industry expertise.
//           </p>
//         </div>
       
//       </div>

//       {/* Our Story */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
//             <p className="text-gray-600 mb-4">
//               Founded in 2015, myFleet began as a small team of logistics experts and tech innovators who saw an opportunity to transform the industry. 
//               We recognized that traditional fleet management systems were outdated and inefficient.
//             </p>
//             <p className="text-gray-600 mb-4">
//               What started as a simple tracking solution has evolved into a comprehensive platform that serves over 500 companies worldwide, managing more than 50,000 vehicles across 30 countries.
//             </p>
//             <p className="text-gray-600">
//               Today, we continue to push boundaries, developing AI-powered tools that predict maintenance needs, optimize routes in real-time, and reduce operational costs by up to 30%.
//             </p>
//           </div>
         
//         </div>
//       </div>

//       {/* Mission & Vision */}
//       <div className="bg-[#f8fafc] py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Beliefs</h2>
//             <div className="w-24 h-1 bg-[#219EBC] mx-auto"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="text-[#219EBC] text-4xl mb-4">
//                 <FaMapMarkedAlt />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Mission</h3>
//               <p className="text-gray-600">
//                 To empower logistics companies with intelligent, real-time fleet management solutions that drive efficiency, reduce costs, and promote sustainability through innovative technology.
//               </p>
//             </div>
            
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="text-[#219EBC] text-4xl mb-4">
//                 <FaLightbulb />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Vision</h3>
//               <p className="text-gray-600">
//                 To become the global standard in logistics optimization, where every fleet manager relies on our AI-driven insights to make data-informed decisions that shape the future of transportation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Our Values */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             These principles guide every decision we make and every feature we build
//           </p>
//         </div>
        
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { icon: <FaTruck />, title: "Reliability", desc: "We deliver solutions you can count on 24/7" },
//             { icon: <FaChartLine />, title: "Innovation", desc: "Constantly pushing boundaries of what's possible" },
//             { icon: <FaShieldAlt />, title: "Security", desc: "Your data is protected with enterprise-grade security" },
//             { icon: <FaUsers />, title: "Partnership", desc: "We grow when our customers grow" },
//             { icon: <FaMapMarkedAlt />, title: "Efficiency", desc: "Maximizing resources while minimizing waste" },
//             { icon: <FaLightbulb />, title: "Simplicity", desc: "Complex technology made beautifully simple" },
//           ].map((item, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
//               <div className="text-[#219EBC] text-3xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

      

//       {/* CTA Section */}
//       <div className="bg-white py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Fleet Operations?</h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Join hundreds of logistics companies who trust myFleet to optimize their operations and reduce costs.
//           </p>
//           <button className="bg-[#219EBC] hover:bg-[#1a7d94] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors">
//             Request a Demo
//           </button>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import { FaTruck, FaMapMarkedAlt, FaChartLine, FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa';
import Footer from '../components/Fotter'; // Fixed typo in import (Fotter -> Footer)
import Header from './Navbar';

const AboutUs = () => {
  // Values data array for cleaner code
  const values = [
    { icon: <FaTruck className="inline-block" />, title: "Reliability", desc: "We deliver solutions you can count on 24/7" },
    { icon: <FaChartLine className="inline-block" />, title: "Innovation", desc: "Constantly pushing boundaries of what's possible" },
    { icon: <FaShieldAlt className="inline-block" />, title: "Security", desc: "Your data is protected with enterprise-grade security" },
    { icon: <FaUsers className="inline-block" />, title: "Partnership", desc: "We grow when our customers grow" },
    { icon: <FaMapMarkedAlt className="inline-block" />, title: "Efficiency", desc: "Maximizing resources while minimizing waste" },
    { icon: <FaLightbulb className="inline-block" />, title: "Simplicity", desc: "Complex technology made beautifully simple" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#01588E] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Driving Logistics Forward</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Revolutionizing fleet management with cutting-edge technology and decades of industry expertise.
            </p>
          </div>
          
        </section>

        {/* Our Story */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, myFleet began as a small team of logistics experts and tech innovators who saw an opportunity to transform the industry. 
                We recognized that traditional fleet management systems were outdated and inefficient.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a simple tracking solution has evolved into a comprehensive platform that serves over 500 companies worldwide, managing more than 50,000 vehicles across 30 countries.
              </p>
              <p className="text-gray-600">
                Today, we continue to push boundaries, developing AI-powered tools that predict maintenance needs, optimize routes in real-time, and reduce operational costs by up to 30%.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 shadow-inner">
              <img 
                src="/image/fleet1.jpg" 
                alt="Our team working on logistics solutions" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-[#f8fafc] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Beliefs</h2>
              <div className="w-24 h-1 bg-[#219EBC] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#219EBC] text-4xl mb-4">
                  <FaMapMarkedAlt aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Mission</h3>
                <p className="text-gray-600">
                  To empower logistics companies with intelligent, real-time fleet management solutions that drive efficiency, reduce costs, and promote sustainability through innovative technology.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#219EBC] text-4xl mb-4">
                  <FaLightbulb aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Vision</h3>
                <p className="text-gray-600">
                  To become the global standard in logistics optimization, where every fleet manager relies on our AI-driven insights to make data-informed decisions that shape the future of transportation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#219EBC] text-3xl mb-4" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Fleet Operations?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join hundreds of logistics companies who trust myFleet to optimize their operations and reduce costs.
            </p>
            <button 
              className="bg-[#219EBC] hover:bg-[#1a7d94] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:ring-offset-2"
              aria-label="Request a demo"
            >
              Request a Demo
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;