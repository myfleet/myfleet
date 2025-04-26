
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";

// const SignupPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     dob: "",
//     companyName: "",
//     gstNumber: "",
//     address: "",
//     pincode: "",
//     state: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // Validation patterns
//   const patterns = {
//     name: /^[A-Za-z\s]{1,50}$/,
//     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//     mobile: /^\d{10}$/,
//     companyName: /^[A-Za-z0-9\s]{1,100}$/,
//     gstNumber: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
//     address: /^[A-Za-z0-9\s,.-]{1,200}$/,
//     pincode: /^\d{6}$/,
//     state: /^[A-Za-z\s]{1,50}$/,
//     password: /^[A-Za-z\s]{1,50}$/,
//   };

//   const validateField = (name, value) => {
//     switch (name) {
//       case "name":
//         return patterns.name.test(value) ? "" : "Name must contain only alphabets and spaces.";
//       case "email":
//         return patterns.email.test(value) ? "" : "Enter a valid email address.";
//       case "mobile":
//         return patterns.mobile.test(value) ? "" : "Mobile must be exactly 10 digits.";
//       case "dob":
//         const today = new Date();
//         const inputDate = new Date(value);
//         return value && inputDate <= today ? "" : "Date of joining cannot be in the future.";
//       case "companyName":
//         return patterns.companyName.test(value) ? "" : "Company name must contain only alphabets, numbers, and spaces.";
//       case "gstNumber":
//         return patterns.gstNumber.test(value) ? "" : "Enter a valid GST number (e.g., 22AAAAA0000A1Z5).";
//       case "address":
//         return patterns.address.test(value) ? "" : "Address must contain only alphabets, numbers, spaces, and common punctuation.";
//       case "pincode":
//         return patterns.pincode.test(value) ? "" : "Pincode must be exactly 6 digits.";
//       case "state":
//         return patterns.state.test(value) ? "" : "State must contain only alphabets and spaces.";
//       case "password":
//         return patterns.password.test(value)
//           ? ""
//           : "Password must be at least 8 characters long and include one letter and one number.";
//       case "confirmPassword":
//         return value === formData.password ? "" : "Passwords do not match.";
//       default:
//         return "";
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Restrict input based on field type
//     let filteredValue = value;
//     if (name === "mobile" || name === "pincode") {
//       filteredValue = value.replace(/\D/g, "");
//     } else if (name === "name" || name === "state") {
//       filteredValue = value.replace(/[^A-Za-z\s]/g, "");
//     } else if (name === "companyName") {
//       filteredValue = value.replace(/[^A-Za-z0-9\s]/g, "");
//     } else if (name === "address") {
//       filteredValue = value.replace(/[^A-Za-z0-9\s,.-]/g, "");
//     } else if (name === "gstNumber") {
//       filteredValue = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
//     }

//     setFormData({ ...formData, [name]: filteredValue });

//     // Validate the field
//     const error = validateField(name, filteredValue);
//     setErrors({ ...errors, [name]: error });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       const error = validateField(key, formData[key]);
//       if (error) newErrors[key] = error;
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       toast.error("Please fix the errors in the form.", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "colored",
//       });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://fleet-node.vercel.app/api/register",
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       toast.success(response.data.message, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "colored",
//       });

//       setTimeout(() => {
//         navigate("/login");
//       }, 3000);
//     } catch (err) {
//       const errorMessage =
//         err.response?.data?.error || "Something went wrong. Please try again.";
//       toast.error(errorMessage, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "colored",
//       });
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 relative"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1565110131394-5be31802b92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
//       }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-indigo-900/80 z-0"></div>

//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/")}
//         className="absolute top-6 left-6 text-white flex items-center space-x-2 hover:text-yellow-400 transition-transform transform hover:scale-105 z-10"
//       >
//         <FaArrowLeft className="text-2xl" />
//         <span className="text-lg font-semibold">Back</span>
//       </button>

//       {/* Signup Card */}
//       <div className="relative bg-white bg-opacity-95 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-4xl w-full z-10 animate-fade-in">
//         <ToastContainer />

//         {/* Heading */}
//         <h1
//           className="text-3xl font-extrabold text-blue-800 text-center mb-4 cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           myFleet
//         </h1>
//         <h2 className="text-xl text-center text-gray-600 mb-8">
//           Join <span className="font-semibold text-blue-800">myFleet</span> Today
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Row 1 */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.name ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>
//             <div>
//               <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">
//                 Mobile
//               </label>
//               <input
//                 type="text"
//                 id="mobile"
//                 name="mobile"
//                 placeholder="Enter your mobile number"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 maxLength={10}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.mobile ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <label htmlFor="dob" className="block text-gray-700 font-semibold mb-2">
//                 Date of Joining
//               </label>
//               <input
//                 type="date"
//                 id="dob"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.dob ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
//             </div>
//             <div>
//               <label
//                 htmlFor="companyName"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 name="companyName"
//                 placeholder="Enter company name"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.companyName ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.companyName && (
//                 <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="gstNumber"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 GST Number
//               </label>
//               <input
//                 type="text"
//                 id="gstNumber"
//                 name="gstNumber"
//                 placeholder="Enter GST number"
//                 value={formData.gstNumber}
//                 onChange={handleChange}
//                 maxLength={15}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.gstNumber ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.gstNumber && (
//                 <p className="text-red-500 text-sm mt-1">{errors.gstNumber}</p>
//               )}
//             </div>
//           </div>

//           {/* Row 3 */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 placeholder="Enter your address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.address ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//             </div>
//             <div>
//               <label htmlFor="pincode" className="block text-gray-700 font-semibold mb-2">
//                 Pincode
//               </label>
//               <input
//                 type="text"
//                 id="pincode"
//                 name="pincode"
//                 placeholder="Enter pincode"
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 maxLength={6}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.pincode ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
//             </div>
//             <div>
//               <label htmlFor="state" className="block text-gray-700 font-semibold mb-2">
//                 State
//               </label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 placeholder="Enter state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.state ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
//             </div>
//           </div>

//           {/* Password Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div className="relative">
//               <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
//                 Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-10 text-gray-600 hover:text-blue-600"
//               >
//                 {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
//               </button>
//               {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//             </div>
//             <div className="relative">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
//                   errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={toggleConfirmPasswordVisibility}
//                 className="absolute right-3 top-10 text-gray-600 hover:text-blue-600"
//               >
//                 {showConfirmPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
//               </button>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
//               )}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-900 transition-transform transform hover:scale-105 shadow-md"
//           >
//             Register
//           </button>
//         </form>

//         {/* Additional Links */}
//         <div className="text-center mt-6">
//           <p className="text-sm text-gray-600">
//             Already have an account?{" "}
//             <button
//               onClick={() => navigate("/login")}
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               Sign In
//             </button>
//           </p>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.8s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    companyName: "",
    gstNumber: "",
    address: "",
    pincode: "",
    state: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation patterns (removed password pattern)
  const patterns = {
    name: /^[A-Za-z\s]{1,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^\d{10}$/,
    companyName: /^[A-Za-z0-9\s]{1,100}$/,
    gstNumber: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    address: /^[A-Za-z0-9\s,.-]{1,200}$/,
    pincode: /^\d{6}$/,
    state: /^[A-Za-z\s]{1,50}$/,
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return patterns.name.test(value) ? "" : "Name must contain only alphabets and spaces.";
      case "email":
        return patterns.email.test(value) ? "" : "Enter a valid email address.";
      case "mobile":
        return patterns.mobile.test(value) ? "" : "Mobile must be exactly 10 digits.";
      case "dob":
        const today = new Date();
        const inputDate = new Date(value);
        return value && inputDate <= today ? "" : "Date of joining cannot be in the future.";
      case "companyName":
        return patterns.companyName.test(value) ? "" : "Company name must contain only alphabets, numbers, and spaces.";
      case "gstNumber":
        return patterns.gstNumber.test(value) ? "" : "Enter a valid GST number (e.g., 22AAAAA0000A1Z5).";
      case "address":
        return patterns.address.test(value) ? "" : "Address must contain only alphabets, numbers, spaces, and common punctuation.";
      case "pincode":
        return patterns.pincode.test(value) ? "" : "Pincode must be exactly 6 digits.";
      case "state":
        return patterns.state.test(value) ? "" : "State must contain only alphabets and spaces.";
      case "password":
        return ""; // No validation for password
      case "confirmPassword":
        return value === formData.password ? "" : "Passwords do not match.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict input based on field type
    let filteredValue = value;
    if (name === "mobile" || name === "pincode") {
      filteredValue = value.replace(/\D/g, "");
    } else if (name === "name" || name === "state") {
      filteredValue = value.replace(/[^A-Za-z\s]/g, "");
    } else if (name === "companyName") {
      filteredValue = value.replace(/[^A-Za-z0-9\s]/g, "");
    } else if (name === "address") {
      filteredValue = value.replace(/[^A-Za-z0-9\s,.-]/g, "");
    } else if (name === "gstNumber") {
      filteredValue = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    }

    setFormData({ ...formData, [name]: filteredValue });

    // Validate the field
    const error = validateField(name, filteredValue);
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://fleet-node.vercel.app/api/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Something went wrong. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1565110131394-5be31802b92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-indigo-900/80 z-0"></div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white flex items-center space-x-2 hover:text-yellow-400 transition-transform transform hover:scale-105 z-10"
      >
        <FaArrowLeft className="text-2xl" />
        <span className="text-lg font-semibold">Back</span>
      </button>

      {/* Signup Card */}
      <div className="relative bg-white bg-opacity-95 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-4xl w-full z-10 animate-fade-in">
        <ToastContainer />

        {/* Heading */}
        <h1
          className="text-3xl font-extrabold text-blue-800 text-center mb-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          myFleet
        </h1>
        <h2 className="text-xl text-center text-gray-600 mb-8">
          Join <span className="font-semibold text-blue-800">myFleet</span> Today
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                maxLength={10}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="dob" className="block text-gray-700 font-semibold mb-2">
                Date of Joining
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.dob ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.companyName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="gstNumber"
                className="block text-gray-700 font-semibold mb-2"
              >
                GST Number
              </label>
              <input
                type="text"
                id="gstNumber"
                name="gstNumber"
                placeholder="Enter GST number"
                value={formData.gstNumber}
                onChange={handleChange}
                maxLength={15}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.gstNumber ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.gstNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.gstNumber}</p>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div>
              <label htmlFor="pincode" className="block text-gray-700 font-semibold mb-2">
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Enter pincode"
                value={formData.pincode}
                onChange={handleChange}
                maxLength={6}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.pincode ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-700 font-semibold mb-2">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter state"
                value={formData.state}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.state ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
            </div>
          </div>

          {/* Password Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-10 text-gray-600 hover:text-blue-600"
              >
                {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
              </button>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition bg-gray-50 ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-10 text-gray-600 hover:text-blue-600"
              >
                {showConfirmPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-900 transition-transform transform hover:scale-105 shadow-md"
          >
            Register
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SignupPage;