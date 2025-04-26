

import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import Header from '../components/Header';

const TripMaster = () => {
  // Form state
  const [formData, setFormData] = useState({
    tripDateTime: '',
    tripType: 'one-way',
    fromLocation: '',
    toLocation: '',
    distance: '',
    estimatedDuration: '',
    vehicleType: '',
    vehicleNumber: '',
    driverName: '',
    driverContact: '',
    capacity: '',
    basePrice: '',
    distanceCharges: '',
    additionalCharges: '',
    totalPrice: '',
    advancePayment: '',
    remainingPayment: '',
    paymentMode: 'cash',
    paymentStatus: 'unpaid',
    customerName: '',
    phoneNumber: '',
    email: '',
    bookingSource: 'app',
    tripStatus: 'planned',
    tripNotes: '',
    createdBy: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }

    // Calculate total price when relevant fields change
    if (name === 'basePrice' || name === 'distanceCharges' || name === 'additionalCharges') {
      calculateTotalPrice();
    }

    // Calculate remaining payment when advance payment changes
    if (name === 'advancePayment' && formData.totalPrice) {
      calculateRemainingPayment();
    }
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const base = parseFloat(formData.basePrice) || 0;
    const distance = parseFloat(formData.distanceCharges) || 0;
    const additional = parseFloat(formData.additionalCharges) || 0;
    const total = base + distance + additional;
    
    setFormData(prev => ({
      ...prev,
      totalPrice: total.toFixed(2)
    }));

    // Recalculate remaining payment if advance payment exists
    if (formData.advancePayment) {
      calculateRemainingPayment();
    }
  };

  // Calculate remaining payment
  const calculateRemainingPayment = () => {
    const total = parseFloat(formData.totalPrice) || 0;
    const advance = parseFloat(formData.advancePayment) || 0;
    const remaining = total - advance;
    
    setFormData(prev => ({
      ...prev,
      remainingPayment: remaining.toFixed(2)
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Trip Info validation
    if (!formData.tripDateTime) newErrors.tripDateTime = 'Trip date & time is required';
    if (!formData.fromLocation) newErrors.fromLocation = 'From location is required';
    if (!formData.toLocation) newErrors.toLocation = 'To location is required';
    if (formData.distance && isNaN(formData.distance)) newErrors.distance = 'Distance must be a number';
    
    // Vehicle Details validation
    if (!formData.vehicleType) newErrors.vehicleType = 'Vehicle type is required';
    if (!formData.vehicleNumber) newErrors.vehicleNumber = 'Vehicle number is required';
    if (!formData.driverName) newErrors.driverName = 'Driver name is required';
    if (!formData.driverContact) newErrors.driverContact = 'Driver contact is required';
    else if (!/^\d{10,15}$/.test(formData.driverContact)) newErrors.driverContact = 'Invalid contact number';
    
    // Payment validation
    if (!formData.basePrice) newErrors.basePrice = 'Base price is required';
    else if (isNaN(formData.basePrice)) newErrors.basePrice = 'Base price must be a number';
    if (formData.distanceCharges && isNaN(formData.distanceCharges)) newErrors.distanceCharges = 'Distance charges must be a number';
    if (formData.additionalCharges && isNaN(formData.additionalCharges)) newErrors.additionalCharges = 'Additional charges must be a number';
    if (formData.advancePayment && isNaN(formData.advancePayment)) newErrors.advancePayment = 'Advance payment must be a number';
    
    // Customer validation
    if (!formData.customerName) newErrors.customerName = 'Customer name is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^\d{10,15}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Prepare data for API
        const apiData = {
          trip_date: formData.tripDateTime ? new Date(formData.tripDateTime).toISOString() : '',
          trip_type: formData.tripType,
          from_location: formData.fromLocation,
          to_location: formData.toLocation,
          distance_km: parseFloat(formData.distance) || 0,
          estimated_duration: formData.estimatedDuration,
          vehicle_type: formData.vehicleType,
          vehicle_number: formData.vehicleNumber,
          driver_name: formData.driverName,
          driver_contact: formData.driverContact,
          capacity: formData.capacity,
          base_price: parseFloat(formData.basePrice) || 0,
          distance_charges: parseFloat(formData.distanceCharges) || 0,
          additional_charges: parseFloat(formData.additionalCharges) || 0,
          advance_payment: parseFloat(formData.advancePayment) || 0,
          payment_mode: formData.paymentMode,
          payment_status: formData.paymentStatus,
          customer_name: formData.customerName,
          phone_number: formData.phoneNumber,
          email: formData.email,
          booking_source: formData.bookingSource,
          trip_status: formData.tripStatus,
          trip_notes: formData.tripNotes,
          created_by: formData.createdBy
        };

        // API configuration
        const config = {
          method: 'post',
          url: 'https://fleet-node.vercel.app/api/trip_master',
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(apiData)
        };

        // Make API call
        const response = await axios.request(config);
        
        // Show success toast
        toast.success('Trip created successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });

        console.log('API Response:', response.data);
        setIsSubmitted(true);
      } catch (error) {
        // Show error toast
        toast.error('Failed to create trip. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
        });

        console.error('API Error:', error);
      }
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      tripDateTime: '',
      tripType: 'one-way',
      fromLocation: '',
      toLocation: '',
      distance: '',
      estimatedDuration: '',
      vehicleType: '',
      vehicleNumber: '',
      driverName: '',
      driverContact: '',
      capacity: '',
      basePrice: '',
      distanceCharges: '',
      additionalCharges: '',
      totalPrice: '',
      advancePayment: '',
      remainingPayment: '',
      paymentMode: 'cash',
      paymentStatus: 'unpaid',
      customerName: '',
      phoneNumber: '',
      email: '',
      bookingSource: 'app',
      tripStatus: 'planned',
      tripNotes: '',
      createdBy: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div>
    <Header />
    <div className="container mx-auto px-2 sm:px-4 py-4 max-w-6xl"> {/* Increased max-width and reduced padding */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-blue-600">Trip Master</h1>
      
      {/* Toast Container */}
      <ToastContainer />
  
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p className="font-bold">Trip created successfully!</p>
          <p>Details have been saved. You can now view the trip in your dashboard.</p>
          <button
            onClick={handleReset}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Another Trip
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4"> {/* Reduced space between sections */}
          {/* Trip Info Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md"> {/* Reduced padding */}
            <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center"> {/* Smaller heading */}
              <span className="mr-2">📍</span> Trip Info
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"> {/* 4 columns on large screens */}
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Trip Date & Time*</label>
                <input
                  type="datetime-local"
                  name="tripDateTime"
                  value={formData.tripDateTime}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.tripDateTime ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.tripDateTime && <p className="text-red-500 text-xs mt-1">{errors.tripDateTime}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Trip Type*</label>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                >
                  <option value="one-way">One-way</option>
                  <option value="round-trip">Round-trip</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">From Location*</label>
                <input
                  type="text"
                  name="fromLocation"
                  value={formData.fromLocation}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.fromLocation ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="City, Address"
                />
                {errors.fromLocation && <p className="text-red-500 text-xs mt-1">{errors.fromLocation}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">To Location*</label>
                <input
                  type="text"
                  name="toLocation"
                  value={formData.toLocation}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.toLocation ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="City, Address"
                />
                {errors.toLocation && <p className="text-red-500 text-xs mt-1">{errors.toLocation}</p>}
              </div>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3"> {/* Additional row with 3 columns */}
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Distance (km)</label>
                <input
                  type="number"
                  name="distance"
                  value={formData.distance}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.distance ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Auto-calculated"
                  min="0"
                  step="0.1"
                />
                {errors.distance && <p className="text-red-500 text-xs mt-1">{errors.distance}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Estimated Duration</label>
                <input
                  type="text"
                  name="estimatedDuration"
                  value={formData.estimatedDuration}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                  placeholder="e.g., 2h 30m"
                />
              </div>
            </div>
          </div>
          
          {/* Vehicle Details Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
              <span className="mr-2">🚗</span> Vehicle Details
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Vehicle Type*</label>
                <input
                  type="text"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.vehicleType ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Sedan, Bus, Truck"
                />
                {errors.vehicleType && <p className="text-red-500 text-xs mt-1">{errors.vehicleType}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Vehicle Number*</label>
                <input
                  type="text"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.vehicleNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="License plate"
                />
                {errors.vehicleNumber && <p className="text-red-500 text-xs mt-1">{errors.vehicleNumber}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Driver Name*</label>
                <input
                  type="text"
                  name="driverName"
                  value={formData.driverName}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.driverName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.driverName && <p className="text-red-500 text-xs mt-1">{errors.driverName}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Driver Contact*</label>
                <input
                  type="tel"
                  name="driverContact"
                  value={formData.driverContact}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.driverContact ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="10-15 digits"
                />
                {errors.driverContact && <p className="text-red-500 text-xs mt-1">{errors.driverContact}</p>}
              </div>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Seating/Load Capacity</label>
                <input
                  type="text"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                  placeholder="e.g., 4 seats, 2 tons"
                />
              </div>
            </div>
          </div>
          
          {/* Payment & Pricing Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
              <span className="mr-2">💰</span> Payment & Pricing
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Base Price*</label>
                <input
                  type="number"
                  name="basePrice"
                  value={formData.basePrice}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.basePrice ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Standard charge"
                  min="0"
                  step="0.01"
                />
                {errors.basePrice && <p className="text-red-500 text-xs mt-1">{errors.basePrice}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Distance Charges</label>
                <input
                  type="number"
                  name="distanceCharges"
                  value={formData.distanceCharges}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.distanceCharges ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Per km"
                  min="0"
                  step="0.01"
                />
                {errors.distanceCharges && <p className="text-red-500 text-xs mt-1">{errors.distanceCharges}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Additional Charges</label>
                <input
                  type="number"
                  name="additionalCharges"
                  value={formData.additionalCharges}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.additionalCharges ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Tolls, parking"
                  min="0"
                  step="0.01"
                />
                {errors.additionalCharges && <p className="text-red-500 text-xs mt-1">{errors.additionalCharges}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Total Price</label>
                <input
                  type="number"
                  name="totalPrice"
                  value={formData.totalPrice}
                  readOnly
                  className="w-full p-2 text-sm border border-gray-300 rounded bg-gray-100"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Advance Payment</label>
                <input
                  type="number"
                  name="advancePayment"
                  value={formData.advancePayment}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.advancePayment ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Amount paid"
                  min="0"
                  step="0.01"
                />
                {errors.advancePayment && <p className="text-red-500 text-xs mt-1">{errors.advancePayment}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Remaining Payment</label>
                <input
                  type="number"
                  name="remainingPayment"
                  value={formData.remainingPayment}
                  readOnly
                  className="w-full p-2 text-sm border border-gray-300 rounded bg-gray-100"
                />
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Payment Mode</label>
                <select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                >
                  <option value="cash">Cash</option>
                  <option value="upi">UPI</option>
                  <option value="online">Online</option>
                  <option value="card">Card</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Payment Status</label>
                <select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                >
                  <option value="unpaid">Unpaid</option>
                  <option value="partial">Partial</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Customer Details Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
              <span className="mr-2">👤</span> Customer Details
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Customer Name*</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.customerName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.customerName && <p className="text-red-500 text-xs mt-1">{errors.customerName}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Phone Number*</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="10-15 digits"
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 text-sm border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Optional"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Booking Source</label>
                <select
                  name="bookingSource"
                  value={formData.bookingSource}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                >
                  <option value="app">App</option>
                  <option value="website">Website</option>
                  <option value="agent">Agent</option>
                  <option value="walk-in">Walk-in</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Other Fields Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
              <span className="mr-2">📝</span> Other Fields
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Trip Status</label>
                <select
                  name="tripStatus"
                  value={formData.tripStatus}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                >
                  <option value="planned">Planned</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Created By</label>
                <input
                  type="text"
                  name="createdBy"
                  value={formData.createdBy}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                  placeholder="Your name or ID"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label className="block text-sm sm:text-base text-gray-700 mb-1">Trip Notes</label>
                <textarea
                  name="tripNotes"
                  value={formData.tripNotes}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded"
                  rows="2"
                  placeholder="Special instructions"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-1.5 text-sm bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Create Trip
            </button>
          </div>
        </form>
      )}
    </div>
  </div>
  );
};

export default TripMaster;