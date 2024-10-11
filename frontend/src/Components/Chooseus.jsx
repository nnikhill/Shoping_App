import React from 'react';
import image from "../Images/horse.jpg"
import image1 from "../Images/truck.svg"
import image2 from "../Images/bag.svg"
import image3 from "../Images/support.svg"
import image4 from "../Images/return.svg"

// Define a functional component for the feature items
const FeatureItem = ({ iconSrc, title, description }) => (
  <div className="col-6 col-md-6">
    <div className="feature">
      <div className="icon">
        <img src={iconSrc} alt="Image" className="imf-fluid" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// Define the main component
const Chooseus = () => (
  <div className="why-choose-section m-5">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6 p-5">
          <h2 className="section-title">Why Choose Us</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <div className="row my-5">
            <FeatureItem
              iconSrc={image1}
             title="Fast Shipping"
              description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
            />
            <FeatureItem
              iconSrc={image2}
              title="Easy to Shop"
              description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
            />
            <FeatureItem
              iconSrc={image3}
              title="24/7 Support"
              description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
            />
            <FeatureItem
              iconSrc={image4}
              title="Free Returns"
              description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
            />
          </div>
        </div>

        <div className="col-lg-5 ">
          <div className="img-wrap">
            <img  src={image} alt="Image" className="img-fluid rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Chooseus;
