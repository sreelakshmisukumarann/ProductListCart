import React from "react";
import Header from "../common/Header";
import heroImg from "../assets/pic1.jpg";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* call header */}
      <Header />
      {/* hero sectn*/}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl md:text-xl opacity-70 mb-9 max-w-2xl mx-auto">
            Shop the latest trends and discover quality products at unbeatable
            prices. From electronics to lifestyle essentials, find everything
            you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="border border-white text-white px-4 py-2 rounded-full font-semibold  text-lg">
              <Link
                to={"/product"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Shop Now
              </Link>
            </button>
          </div>
        </div>
      </section>
      {/* section 2  */}
      <section className="relative bg-gray-100 text-gray-800 py-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Shop With Us?
          </h2>

          {/*Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Quick Devlivery</h3>
              <p className="text-gray-600">
                Get your products delivered quickly and safely, straight to your
                doorstep.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Top Quality</h3>
              <p className="text-gray-600">
                We carefully select products to ensure the highest quality for
                our customers.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Our support team is ready to help you with any questions or
                concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
