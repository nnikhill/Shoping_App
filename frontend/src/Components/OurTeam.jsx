import React from 'react';
import image1 from "../Images/tilak.jpg"
import image2 from "../Images/avinashpic.png"
import image3 from "../Images/nikhil.jpg"
import image4 from "../Images/piyush.jpg"
const OurTeam = () => {
  return (
    <div className="untree_co-section py-12">
      <div className="container mx-auto">

        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title text-3xl font-bold mb-8">Our Team</h2>
          </div>
        </div>

        <div className="row">

          {/* Start Column 1 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={image1} className="img-fluid mb-5 rounded  w-3/2 h-58" alt="Lawson Arnold" />
            <h3 className="text-xl font-semibold mb-2"><a href="#" className="text-gray-800"><span>Tilakdhari</span> Pandit</a></h3>
            <span className="block text-gray-500 mb-4">Co-Founder</span>
            <p className="text-gray-600">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="text-yellow-500 hover:text-yellow-700">Learn More <span className="icon-arrow_forward"></span></a></p>
          </div>
          {/* End Column 1 */}

          {/* Start Column 2 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={image2} className="h-fit mb-5 rounded" alt="Jeremy Walker" />
            <h3 className="text-xl font-semibold mb-2"><a href="#" className="text-gray-800"><span>Avinash</span> Singh</a></h3>
            <span className="block text-gray-500 mb-4">Resource Head</span>
            <p className="text-gray-600">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="text-yellow-500 hover:text-yellow-700">Learn More <span className="icon-arrow_forward"></span></a></p>
          </div>
          {/* End Column 2 */}

          {/* Start Column 3 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={image3} className="img-fluid mb-5 rounded" alt="Patrik White" />
            <h3 className="text-xl font-semibold mb-2"><a href="#" className="text-gray-800"><span>Nikhil</span> Shamra</a></h3>
            <span className="block text-gray-500 mb-4">Technical Head</span>
            <p className="text-gray-600">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="text-yellow-500 hover:text-yellow-700">Learn More <span className="icon-arrow_forward"></span></a></p>
          </div>
          {/* End Column 3 */}

          {/* Start Column 4 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={image4} className="img-fluid mb-5 w-auto rounded" alt="Kathryn Ryan" />
            <h3 className="text-xl font-semibold mb-2"><a href="#" className="text-gray-800"><span>Piyush</span> Kumar</a></h3>
            <span className="block text-gray-500 mb-4">CEO, Founder</span>
            <p className="text-gray-600">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="text-yellow-500 hover:text-yellow-700">Learn More <span className="icon-arrow_forward"></span></a></p>
          </div>
          {/* End Column 4 */}

        </div>
      </div>
    </div>
  );
};

export default OurTeam;
