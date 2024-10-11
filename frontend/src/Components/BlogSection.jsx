import React from 'react';

const BlogSection = () => {
  const posts = [
    {
      title: "Reviving the Traditional Mithila Folk Art",
      author: "Vidushini Prasad",
      date: "Monday, March 04, 2024",
      imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEh67w4VD1bnxkDUXhzlRWp4ILrRcpkOEJzP11MYktwB2xnjm5B-uirB1dHusUEmvzFbbObo4o37AGgumrM8GCVSLbUKAd8BGmYLqqbRj9pcuyPtQX_XWAVP1k4YQY6PgqpVzwmZjl_kcczQg26sfrmA4n2OZ7ZfSAj_paW1KS1ERtFwRjc2FzQRBg=w400-h300",
      link: "https://vidushini.blogspot.com/"
    },
    {
      title: "Ancient Bell Metal Crafts , Indian Craft Arts ",
      author: "Sunya IAS",
      date: "23 Dec 2022",
      imageUrl: "https://img1.exportersindia.com/product_images/bc-full/2021/1/8472291/dhokra-tribal-art-brass-craft-1612091510-5707927.jpeg",
      link: "https://sunyaias.com/blogs/dokra-metalcraft"
    },
    {
      title: "Weaving Tradition and Sustainability",
      author: "MIANZI TEAM",
      date: "MAY 26, 2023",
      imageUrl: "https://i0.wp.com/purbashree.com/wp-content/uploads/2024/02/image-6.webp?resize=1024%2C768&ssl=1",
      link: "https://www.mianzi.in/blogs/purposeful-home-sustainable-lifestyle/bamboo-craft-in-india-weaving-tradition-and-sustainability"
    }
  ];

  return (
    <div className="blog-section py-12 bg-gray-100" id="blog">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-5">
          <div className="text-left">
            <h2 className="section-title text-3xl font-bold">Recent Blog</h2>
          </div>
          <div className="text-right">
            <a href="/" className="more text-yellow-500 ease-in-out no-underline">Go to Back</a>
          </div>
        </div>

        <div className="flex flex-wrap">
          {posts.map((post, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0 px-2">
              <div className="post-entry bg-white p-4 rounded-lg shadow">
                <a href={post.link} className="post-thumbnail block mb-4">
                  <img src={post.imageUrl} alt="Image" className="img-fluid w-full h-48 object-cover rounded" />
                </a>
                <div className="post-content-entry">
                  <h3 className="text-xl font-semibold mb-2">
                    <a href={post.link} className="text-gray-800 hover:text-gray-600 no-underline">{post.title}</a>
                  </h3>
                  <div className="meta text-gray-600 text-sm">
                    <span>by <a href="#" className="text-yellow-500 no-underline">{post.author}</a></span> <span>on <a href="#" className="text-yellow-500 no-underline">{post.date}</a></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
