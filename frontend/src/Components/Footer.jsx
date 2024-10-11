import React from 'react';
// import elephantImage from '../Images/elephant.png';  // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer-section py-12 bg-white">
      <div className="container mx-auto relative px-4">
        <div className="sofa-img absolute">
          {/* <img src={elephantImage} alt="Elephant" className="img-fluid" /> */}
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center text-2xl font-bold mb-4">
                <span className="me-1">
                  {/* <img src={envelopeIcon} alt="Envelope" className="img-fluid w-6 h-6 mr-2" /> */}
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>
              <form action="#" className="row g-3">
                <div className="col-auto mb-2">
                  <input type="text" className="form-control p-2 border border-yellow-300 rounded" placeholder="Enter your name" />
                </div>
                <div className="col-auto mb-2">
                  <input type="email" className="form-control p-2 border border-yellow-300 rounded" placeholder="Enter your email" />
                </div>
                <div className="col-auto">
                  <button className=" p-2 m-1 py-1 bg-yellow-500 text-white rounded">
                    <span className="fa fa-paper-plane">Send </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row g-5 mb-5 m-2">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo text-3xl font-bold text-yellow-500 no-underline">Craftify<span className="text-yellow-500">.</span></a>
            </div>
            <p className="mb-4 text-gray-600">Ancient art represents a timeless and captivating journey into the cultural heritage and artistic expressions of ancient civilizations. From the intricate hieroglyphs of Egyptian tombs to the majestic sculptures of Greek temples, ancient art offers a window into the beliefs, values, and aesthetics of bygone eras.</p>
            <ul className="list-unstyled flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-yellow-500"><span className="fa fa-brands fa-facebook-f"></span></a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-500"><span className="fa fa-brands fa-twitter"></span></a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-500"><span className="fa fa-brands fa-instagram"></span></a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-500"><span className="fa fa-brands fa-linkedin"></span></a></li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">About us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Services</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Blog</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Contact us</a></li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Support</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Knowledge base</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Live chat</a></li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Jobs</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Our team</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Leadership</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Nordic Chair</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Kruzo Aero</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500">Ergonomic Chair</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-start">
              <p className="mb-2">&copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by <span className='text-yellow-500'>Nikhil Sharma</span></p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto space-x-4">
                <li className="me-4"><a href="#" className="text-gray-600 hover:text-yellow-500">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-yellow-500">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
