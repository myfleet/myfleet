import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const MisReport = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const config = {
          method: 'get',
          url: 'https://fleet-node.vercel.app/api/mis_report',
          headers: {},
        };
        const response = await axios.request(config);
        setTrips(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch trips. Please try again.');
        setLoading(false);
        console.error('Error fetching trips:', err);
      }
    };

    fetchTrips();
  }, []);

  const handleTripClick = (trip) => {
    setSelectedTrip(trip);
  };

  const handleDownload = (trip) => {
    const dataStr = JSON.stringify(trip, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `trip_${trip.id}_bill.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const closeDetails = () => {
    setSelectedTrip(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4 text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mt-16 mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">MIS Report - Trip List</h2>
        <div className="grid gap-4">
          {trips.map((trip, index) => (
            <div
              key={trip.id}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
              onClick={() => handleTripClick(trip)}
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Trip ID: {index + 1} - {trip.from_location} to {trip.to_location}
                  </h3>
                  <p className="text-gray-600">Date: {new Date(trip.trip_date).toLocaleDateString()}</p>
                  <p className="text-gray-600">Customer: {trip.customer_name}</p>
                  <p className="text-gray-600">Status: {trip.trip_status}</p>
                </div>
                <div>
                  <p className="text-gray-600">Vehicle: {trip.vehicle_number}</p>
                  <p className="text-gray-600">Total Price: ₹{trip.total_price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedTrip && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Trip Bill - ID: {trips.findIndex(t => t.id === selectedTrip.id) + 1}</h3>
              <div className="border border-gray-300 rounded-lg p-4">
                {/* Bill Header */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold border-b pb-2">Travel Agency</h4>
                  <p className="text-gray-600">MIS Report Bill</p>
                  <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
                </div>

                {/* Trip Details */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold border-b pb-2">Trip Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p><strong>Trip Date:</strong> {new Date(selectedTrip.trip_date).toLocaleString()}</p>
                    <p><strong>Trip Type:</strong> {selectedTrip.trip_type}</p>
                    <p><strong>From:</strong> {selectedTrip.from_location}</p>
                    <p><strong>To:</strong> {selectedTrip.to_location}</p>
                    <p><strong>Distance:</strong> {selectedTrip.distance_km} km</p>
                    <p><strong>Duration:</strong> {selectedTrip.estimated_duration}</p>
                    <p><strong>Vehicle Type:</strong> {selectedTrip.vehicle_type}</p>
                    <p><strong>Vehicle Number:</strong> {selectedTrip.vehicle_number}</p>
                    <p><strong>Driver:</strong> {selectedTrip.driver_name}</p>
                    <p><strong>Driver Contact:</strong> {selectedTrip.driver_contact}</p>
                    <p><strong>Capacity:</strong> {selectedTrip.capacity}</p>
                    <p><strong>Trip Status:</strong> {selectedTrip.trip_status}</p>
                    <p><strong>Notes:</strong> {selectedTrip.trip_notes || 'None'}</p>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold border-b pb-2">Customer Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p><strong>Name:</strong> {selectedTrip.customer_name}</p>
                    <p><strong>Phone:</strong> {selectedTrip.phone_number}</p>
                    <p><strong>Email:</strong> {selectedTrip.email}</p>
                    <p><strong>Booking Source:</strong> {selectedTrip.booking_source}</p>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold border-b pb-2">Payment Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p><strong>Base Price:</strong> ₹{selectedTrip.base_price}</p>
                    <p><strong>Distance Charges:</strong> ₹{selectedTrip.distance_charges}</p>
                    <p><strong>Additional Charges:</strong> ₹{selectedTrip.additional_charges}</p>
                    <p><strong>Total Price:</strong> ₹{selectedTrip.total_price}</p>
                    <p><strong>Advance Payment:</strong> ₹{selectedTrip.advance_payment}</p>
                    <p><strong>Remaining Payment:</strong> ₹{selectedTrip.remaining_payment}</p>
                    <p><strong>Payment Mode:</strong> {selectedTrip.payment_mode}</p>
                    <p><strong>Payment Status:</strong> {selectedTrip.payment_status}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t pt-2 text-sm text-gray-600">
                  <p><strong>Created By:</strong> {selectedTrip.created_by}</p>
                  <p><strong>Created At:</strong> {new Date(selectedTrip.created_at).toLocaleString()}</p>
                  <p><strong>Updated At:</strong> {new Date(selectedTrip.updated_at).toLocaleString()}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => handleDownload(selectedTrip)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
                >
                  Download Bill
                </button>
                <button
                  onClick={closeDetails}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MisReport;