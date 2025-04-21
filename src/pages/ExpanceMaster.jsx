import React, { useState } from 'react';
import Header from '../components/Header';

const ExpenseMaster = () => {
  const [formData, setFormData] = useState({
    vehicleNo: '',
    driverName: '',
    transporterName: '',
    from: '',
    to: '',
    km: '',
    tripNo: '',
    date: '',
    rate: '',
    fright: '',
    total: '',
    expense: '',
    gst: '',
    diesel: '',
    tollTax: '',
    salary: '',
    border: '',
    totalAmount: '',
    tds: '',
    miscExp: '',
    labour: '',
    challan: '',
    dieselUp: '',
    dieselDn: '',
    advance: '',
    totalTripExpenses: '',
    totalFright: '',
    totalTripExp: '',
    remarks: '',
    emi: '',
    tripIncome: '',
    checkIn: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Header/>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Expense Master</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Vehicle Information */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleNo">
              Vehicle No.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="vehicleNo"
              name="vehicleNo"
              type="text"
              value={formData.vehicleNo}
              onChange={handleChange}
              placeholder="Vehicle Number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverName">
              Driver Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="driverName"
              name="driverName"
              type="text"
              value={formData.driverName}
              onChange={handleChange}
              placeholder="Driver Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transporterName">
              Transporter Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="transporterName"
              name="transporterName"
              type="text"
              value={formData.transporterName}
              onChange={handleChange}
              placeholder="Transporter Name"
            />
          </div>
        </div>

        {/* Trip Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 border-t pt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from">
              From
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="from"
              name="from"
              type="text"
              value={formData.from}
              onChange={handleChange}
              placeholder="From Location"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
              To
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="to"
              name="to"
              type="text"
              value={formData.to}
              onChange={handleChange}
              placeholder="To Location"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="km">
              KM
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="km"
              name="km"
              type="number"
              value={formData.km}
              onChange={handleChange}
              placeholder="Kilometers"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tripNo">
              Trip No.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tripNo"
              name="tripNo"
              type="text"
              value={formData.tripNo}
              onChange={handleChange}
              placeholder="Trip Number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rate">
              Rate
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rate"
              name="rate"
              type="number"
              value={formData.rate}
              onChange={handleChange}
              placeholder="Rate"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fright">
              Fright
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fright"
              name="fright"
              type="number"
              value={formData.fright}
              onChange={handleChange}
              placeholder="Fright Amount"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total">
              Total
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="total"
              name="total"
              type="number"
              value={formData.total}
              onChange={handleChange}
              placeholder="Total Amount"
            />
          </div>
        </div>

        {/* Expenses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 border-t pt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expense">
              Expense
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expense"
              name="expense"
              type="number"
              value={formData.expense}
              onChange={handleChange}
              placeholder="Expense"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gst">
              GST
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gst"
              name="gst"
              type="number"
              value={formData.gst}
              onChange={handleChange}
              placeholder="GST"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="diesel">
              Diesel
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="diesel"
              name="diesel"
              type="number"
              value={formData.diesel}
              onChange={handleChange}
              placeholder="Diesel Cost"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tollTax">
              Toll Tax
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tollTax"
              name="tollTax"
              type="number"
              value={formData.tollTax}
              onChange={handleChange}
              placeholder="Toll Tax"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
              Salary
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="salary"
              name="salary"
              type="number"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Salary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="border">
              Border
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="border"
              name="border"
              type="number"
              value={formData.border}
              onChange={handleChange}
              placeholder="Border Charges"
            />
          </div>
        </div>

        {/* Advance Details Section */}
        <div className="border-t pt-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">ADVANCE DETAILS:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalAmount">
                TOTAL AMOUNT
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="totalAmount"
                name="totalAmount"
                type="number"
                value={formData.totalAmount}
                onChange={handleChange}
                placeholder="Total Amount"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tds">
                TDS
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tds"
                name="tds"
                type="number"
                value={formData.tds}
                onChange={handleChange}
                placeholder="TDS"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="miscExp">
                Misc Exp
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="miscExp"
                name="miscExp"
                type="number"
                value={formData.miscExp}
                onChange={handleChange}
                placeholder="Miscellaneous Expenses"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="labour">
                Labour
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="labour"
                name="labour"
                type="number"
                value={formData.labour}
                onChange={handleChange}
                placeholder="Labour Charges"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="challan">
                Challan
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="challan"
                name="challan"
                type="number"
                value={formData.challan}
                onChange={handleChange}
                placeholder="Challan Amount"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dieselUp">
                DIESEL (UP)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dieselUp"
                name="dieselUp"
                type="number"
                value={formData.dieselUp}
                onChange={handleChange}
                placeholder="Diesel Up"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dieselDn">
                DIESEL (DN)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dieselDn"
                name="dieselDn"
                type="number"
                value={formData.dieselDn}
                onChange={handleChange}
                placeholder="Diesel Down"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="advance">
                ADVANCE
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="advance"
                name="advance"
                type="number"
                value={formData.advance}
                onChange={handleChange}
                placeholder="Advance Amount"
              />
            </div>
          </div>
        </div>

        {/* Totals Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border-t pt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalTripExpenses">
              TOTAL TRIP EXPENSES
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalTripExpenses"
              name="totalTripExpenses"
              type="number"
              value={formData.totalTripExpenses}
              onChange={handleChange}
              placeholder="Total Trip Expenses"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalFright">
              TOTAL FRIGHT
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalFright"
              name="totalFright"
              type="number"
              value={formData.totalFright}
              onChange={handleChange}
              placeholder="Total Fright"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalTripExp">
              TOTAL TRIP EXP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalTripExp"
              name="totalTripExp"
              type="number"
              value={formData.totalTripExp}
              onChange={handleChange}
              placeholder="Total Trip Expenses"
            />
          </div>
        </div>

        {/* Remarks and Other Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border-t pt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remarks">
              REMARKS:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Enter remarks here..."
              rows="3"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emi">
                EMI
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emi"
                name="emi"
                type="number"
                value={formData.emi}
                onChange={handleChange}
                placeholder="EMI Amount"
              />
            </div>

            <div className="mt-6 w-full">
  <div className="mb-4 w-full">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tripIncome">
      TRIP INCOME
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="tripIncome"
      name="tripIncome"
      type="number"
      value={formData.tripIncome}
      onChange={handleChange}
      placeholder="Trip Income"
    />
  </div>

  <div className="mb-4 w-full">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkIn">
      CHECK IN
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="checkIn"
      name="checkIn"
      type="datetime-local"
      value={formData.checkIn}
      onChange={handleChange}
    />
  </div>
</div>

          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Expense
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ExpenseMaster;