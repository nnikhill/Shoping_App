import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [couponCode, setCouponCode] = useState('');
  const [order, setOrder] = useState({
    products: [
      { name: 'Top Up T-Shirt', quantity: 1, price: 250.00 },
      { name: 'Polo Shirt', quantity: 1, price: 100.00 }
    ],
    subtotal: 350.00,
    total: 350.00,
    paymentMethod: ''
  });

  const applyCoupon = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/coupon', { couponCode });
      if (response.data.success) {
        setOrder({
          ...order,
          total: order.subtotal - response.data.discount
        });
        alert('Coupon applied successfully!');
      } else {
        alert('Invalid coupon code');
      }
    } catch (error) {
      console.error('Error applying coupon:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/orders', order);
      alert('Order placed successfully!');
      window.location.href = '/thanku';
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="">
      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="h3 mb-3 text-black">Coupon Code</h2>
          <div className="p-3 p-lg-5 border bg-white">
            <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
            <div className="flex w-3/4 mb-5">
              <input
                type="text"
                className="form-control mr-2"
                id="c_code"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                className="btn btn-black btn-sm"
                type="button"
                onClick={applyCoupon}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="h3 mb-3 text-black">Your Order</h2>
          <div className="p-3 p-lg-5 border bg-white">
            <table className="table mb-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name} <strong className="mx-2">x</strong> {product.quantity}</td>
                    <td>${product.price.toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="text-black font-bold"><strong>Cart Subtotal</strong></td>
                  <td className="text-black">${order.subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="text-black font-bold"><strong>Order Total</strong></td>
                  <td className="text-black font-bold"><strong>${order.total.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>

            <div className="border p-3 mb-3">
              <h3 className="h6 mb-0">
                <button className="d-block w-full text-left" onClick={() => setOrder({ ...order, paymentMethod: 'bank' })}>
                  Direct Bank Transfer
                </button>
              </h3>
              {order.paymentMethod === 'bank' && (
                <div className="py-2">
                  <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                </div>
              )}
            </div>

            <div className="border p-3 mb-3">
              <h3 className="h6 mb-0">
                <button className="d-block w-full text-left" onClick={() => setOrder({ ...order, paymentMethod: 'cheque' })}>
                  Cheque Payment
                </button>
              </h3>
              {order.paymentMethod === 'cheque' && (
                <div className="py-2">
                  <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                </div>
              )}
            </div>

            <div className="border p-3 mb-5">
              <h3 className="h6 mb-0">
                <button className="d-block w-full text-left" onClick={() => setOrder({ ...order, paymentMethod: 'paypal' })}>
                  Paypal
                </button>
              </h3>
              {order.paymentMethod === 'paypal' && (
                <div className="py-2">
                  <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                </div>
              )}
            </div>

            <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400">Place Order</button>
        </form>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
