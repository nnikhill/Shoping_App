// src/BillingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BillingForm = () => {
  const [formData, setFormData] = useState({
    country: '',
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    address2: '',
    stateCountry: '',
    postalZip: '',
    emailAddress: '',
    phone: '',
    createAccount: false,
    accountPassword: '',
    shipDifferentAddress: false,
    diffCountry: '',
    diffFirstName: '',
    diffLastName: '',
    diffCompanyName: '',
    diffAddress: '',
    diffAddress2: '',
    diffStateCountry: '',
    diffPostalZip: '',
    diffEmailAddress: '',
    diffPhone: '',
    orderNotes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/billing', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="untree_co-section">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className=" mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Billing Details</h2>
            <div className="p-3 p-lg-5 border bg-white">
              <div className="form-group">
                <label htmlFor="country" className="text-black">Country <span className="text-danger">*</span></label>
                <select id="country" name="country" className="form-control" onChange={handleChange} value={formData.country}>
                  <option value="">Select a country</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Albania">Albania</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                </select>
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="text-black">First Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} value={formData.firstName} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="text-black">Last Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleChange} value={formData.lastName} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="companyName" className="text-black">Company Name </label>
                <input type="text" className="form-control" id="companyName" name="companyName" onChange={handleChange} value={formData.companyName} />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="text-black">Address <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="address" name="address" onChange={handleChange} value={formData.address} placeholder="Street address" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="address2" name="address2" onChange={handleChange} value={formData.address2} placeholder="Apartment, suite, unit etc. (optional)" />
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="stateCountry" className="text-black">State / Country <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="stateCountry" name="stateCountry" onChange={handleChange} value={formData.stateCountry} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="postalZip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="postalZip" name="postalZip" onChange={handleChange} value={formData.postalZip} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="emailAddress" className="text-black">Email Address <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="emailAddress" name="emailAddress" onChange={handleChange} value={formData.emailAddress} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="text-black">Phone <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone Number" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="createAccount" className="text-black">
                  <input type="checkbox" id="createAccount" name="createAccount" onChange={handleChange} checked={formData.createAccount} /> Create an account?
                </label>
                {formData.createAccount && (
                  <div className="form-group">
                    <label htmlFor="accountPassword" className="text-black">Account Password</label>
                    <input type="password" className="form-control" id="accountPassword" name="accountPassword" onChange={handleChange} value={formData.accountPassword} />
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="shipDifferentAddress" className="text-black">
                  <input type="checkbox" id="shipDifferentAddress" name="shipDifferentAddress" onChange={handleChange} checked={formData.shipDifferentAddress} /> Ship To A Different Address?
                </label>
                {formData.shipDifferentAddress && (
                  <div className="form-group">
                    <label htmlFor="diffCountry" className="text-black">Country <span className="text-danger">*</span></label>
                    <select id="diffCountry" name="diffCountry" className="form-control" onChange={handleChange} value={formData.diffCountry}>
                      <option value="">Select a country</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Albania">Albania</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                    </select>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label htmlFor="diffFirstName" className="text-black">First Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="diffFirstName" name="diffFirstName" onChange={handleChange} value={formData.diffFirstName} />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="diffLastName" className="text-black">Last Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="diffLastName" name="diffLastName" onChange={handleChange} value={formData.diffLastName} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="diffCompanyName" className="text-black">Company Name </label>
                      <input type="text" className="form-control" id="diffCompanyName" name="diffCompanyName" onChange={handleChange} value={formData.diffCompanyName} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="diffAddress" className="text-black">Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="diffAddress" name="diffAddress" onChange={handleChange} value={formData.diffAddress} placeholder="Street address" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="diffAddress2" name="diffAddress2" onChange={handleChange} value={formData.diffAddress2} placeholder="Apartment, suite, unit etc. (optional)" />
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label htmlFor="diffStateCountry" className="text-black">State / Country <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="diffStateCountry" name="diffStateCountry" onChange={handleChange} value={formData.diffStateCountry} />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="diffPostalZip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="diffPostalZip" name="diffPostalZip" onChange={handleChange} value={formData.diffPostalZip} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label htmlFor="diffEmailAddress" className="text-black">Email Address <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" id="diffEmailAddress" name="diffEmailAddress" onChange={handleChange} value={formData.diffEmailAddress} />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="diffPhone" className="text-black">Phone <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="diffPhone" name="diffPhone" onChange={handleChange} value={formData.diffPhone} placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="orderNotes" className="text-black">Order Notes</label>
                <textarea name="orderNotes" id="orderNotes" cols="30" rows="5" className="form-control" onChange={handleChange} value={formData.orderNotes} placeholder="Write your notes here..."></textarea>
              </div>
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 m-2">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
