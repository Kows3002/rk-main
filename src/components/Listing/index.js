import React from "react";
import "./index.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import NavList from "../NavList";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ContactModal from "../ContactModal";
import {Helmet} from 'react-helmet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

function SearchFilters() {
  const properties = [
    {
      name: "Adyar Garden Residence",
      location: "Adyar, Chennai, India",
      price: "₹10,00,000",
      image: "/images/villas/villa1.jpg",
      isFeatured: true,
      coordinates: [13.0067, 80.2578],
    },
    {
      name: "Luxury Villa in Anna Nagar",
      location: "Anna Nagar, Chennai, India",
      price: "₹12,50,000",
      image: "/images/villas/villa2.jpg",
      isFeatured: false,
      coordinates: [13.0892, 80.2101],
    },
    {
      name: "Mylapore Heritage Villa",
      location: "Mylapore, Chennai, India",
      price: "₹15,00,000",
      image: "/images/villas/villa3.jpg",
      isFeatured: true,
      coordinates: [13.0317, 80.2642],
    },
    {
      name: "Beachfront Retreat in ECR",
      location: "East Coast Road, Chennai, India",
      price: "₹16,50,000",
      image: "/images/villas/villa4.jpg",
      isFeatured: true,
      coordinates: [12.7973, 80.2484],
    },
    {
      name: "Ooty Lake View Bungalow",
      location: "Ooty, Tamil Nadu, India",
      price: "₹11,00,000",
      image: "/images/villas/villa5.jpg",
      isFeatured: true,
      coordinates: [11.4064, 76.6932],
    },
    {
      name: "Kodambakkam Classic",
      location: "Kodambakkam, Chennai, India",
      price: "₹13,00,000",
      image: "/images/villas/villa6.jpg",
      isFeatured: true,
      coordinates: [13.0518, 80.2157],
    },
    {
      name: "Prestige Villa in Besant Nagar",
      location: "Besant Nagar, Chennai, India",
      price: "₹14,00,000",
      image: "/images/villas/villa7.jpg",
      isFeatured: true,
      coordinates: [13.0004, 80.266],
    },
    {
      name: "Mount Road Mansion",
      location: "Mount Road, Chennai, India",
      price: "₹20,00,000",
      image: "/images/villas/villa8.jpg",
      isFeatured: true,
      coordinates: [13.0601, 80.2596],
    },
    {
      name: "Chennai Central Charm",
      location: "Chennai Central, Chennai, India",
      price: "₹18,00,000",
      image: "/images/villas/villa9.jpg",
      isFeatured: true,
      coordinates: [13.0837, 80.2785],
    },
    {
      name: "Madurai Royal Estate",
      location: "Madurai, Tamil Nadu, India",
      price: "₹17,00,000",
      image: "/images/villas/villa10.jpg",
      isFeatured: false,
      coordinates: [9.9252, 78.1194],
    },
    {
      name: "Coimbatore Serenity Villa",
      location: "Coimbatore, Tamil Nadu, India",
      price: "₹14,50,000",
      image: "/images/villas/villa11.jpg",
      isFeatured: true,
      coordinates: [11.0168, 76.9558],
    },
    {
      name: "Tirunelveli Heritage Villa",
      location: "Tirunelveli, Tamil Nadu, India",
      price: "₹13,50,000",
      image: "/images/villas/villa12.jpg",
      isFeatured: false,
      coordinates: [8.7102, 77.7125],
    },
    {
      name: "Vellore Luxury Mansion",
      location: "Vellore, Tamil Nadu, India",
      price: "₹16,00,000",
      image: "/images/villas/villa13.jpg",
      isFeatured: true,
      coordinates: [12.916, 79.1326],
    },
    {
      name: "Trichy Riverside Villa",
      location: "Trichy, Tamil Nadu, India",
      price: "₹11,50,000",
      image: "/images/villas/villa14.jpg",
      isFeatured: true,
      coordinates: [10.7905, 78.7045],
    },
    {
      name: "Kanyakumari Seafront Villa",
      location: "Kanyakumari, Tamil Nadu, India",
      price: "₹22,00,000",
      image: "/images/villas/villa15.jpg",
      isFeatured: true,
      coordinates: [8.0883, 77.5385],
    },
  ];
  

  return (
    <>
     <Helmet>
        <title>Browse Properties | RK Housing - Real Estate Listings in Chennai</title>
        <meta name="description" content="Discover the best residential and commercial properties for sale and rent in Chennai. Browse premium listings from RK Housing and find your perfect property." />
        <meta name="keywords" content="property listings, houses for sale, apartments for rent, commercial real estate, buy property Chennai, real estate investment" />
        <meta name="theme-color" content="#004AAD" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Browse Properties | RK Housing" />
        <meta property="og:description" content="Discover premium residential and commercial properties for sale and rent in Chennai with RK Housing." />
        <meta property="og:image" content="https://www.rkhousing.com/assets/properties-og.jpg" />
        <meta property="og:url" content="https://www.rkhousing.com/properties" />
        <meta property="og:site_name" content="RK Housing" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Browse Properties | RK Housing" />
        <meta name="twitter:description" content="Find top real estate listings in Chennai with RK Housing. Buy, sell, or rent properties today!" />
        <meta name="twitter:image" content="https://www.rkhousing.com/assets/properties-twitter.jpg" />

        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Property Listings - RK Housing",
            "url": "https://www.rkhousing.com/properties",
            "description": "Find your dream home or commercial property with RK Housing. Browse top real estate listings in Chennai.",
            "image": "https://www.rkhousing.com/assets/properties-og.jpg"
          })}
        </script>
      </Helmet>
    <ContactModal />
      <Navbar />
      <div className="search-filters-listing">
        <div className="filters-container-listing">
          <input
            type="text"
            className="search-input-listing"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            aria-label="Search location"
          />

          <button
            className="filter-button-listing"
            aria-label="Filter by for sale properties"
          >
            <span className="filter-text-listing">For Sale</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/eb80a49635d2942097b4b1403cae38f9939ab5b73997e5507950bf00548b378a?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
              alt=""
              className="filter-icon-listing"
              loading="lazy"
              aria-hidden="true"
            />
          </button>

          <button
            className="filter-button-listing"
            aria-label="Filter by property type"
          >
            <span className="filter-text-listing">Property Type</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/eb80a49635d2942097b4b1403cae38f9939ab5b73997e5507950bf00548b378a?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
              alt=""
              className="filter-icon-listing"
              loading="lazy"
              aria-hidden="true"
            />
          </button>

          <button
            className="filter-button-listing"
            aria-label="Filter by price range"
          >
            <span className="filter-text-listing">Price</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/eb80a49635d2942097b4b1403cae38f9939ab5b73997e5507950bf00548b378a?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
              alt=""
              className="filter-icon-listing"
              loading="lazy"
              aria-hidden="true"
            />
          </button>

          <button
            className="filter-button-listing"
            aria-label="Filter by number of beds and baths"
          >
            <span className="filter-text-listing">Beds / Baths</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/eb80a49635d2942097b4b1403cae38f9939ab5b73997e5507950bf00548b378a?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
              alt=""
              className="filter-icon-listing"
              loading="lazy"
              aria-hidden="true"
            />
          </button>

          <button
            className="more-filters-listing"
            aria-label="Show more filters"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/e835ad3bec97ac05f9caa3dbe6ad10b373d82c1407af21d01ba6ad2b61aa6831?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
              alt=""
              className="more-filters-icon-listing"
              loading="lazy"
              aria-hidden="true"
            />
            <span className="filter-text-listing">More Filter</span>
          </button>
        </div>
      </div>

      <div className="map-container" style={{ height: "400px", width: "100%" }}>
        <MapContainer
          center={[13.0827, 80.2707]} // Chennai's coordinates
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {properties.map((property, index) => (
            <Marker key={index} position={property.coordinates}>
              <Popup>
                <div
                  style={{ maxWidth: "200px", fontFamily: "Arial, sans-serif" }}
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1rem",
                      margin: "10px 0 5px",
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    {property.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      margin: "5px 0",
                      color: "#555",
                    }}
                  >
                    📍 {property.location}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      margin: "5px 0",
                      color: "#007bff",
                      fontWeight: "bold",
                    }}
                  >
                    💰 {property.price}
                  </p>
                  <button
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "10px",
                      marginTop: "10px",
                      background: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                    onClick={() =>
                      alert(`Viewing details for ${property.name}`)
                    }
                  >
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="property-listing-listing">
        <div className="header-listing">
          <h1 className="title-listing">Chennai Villas for Sale</h1>
          <div className="breadcrumb-listing">Home / For Rent</div>
        </div>

        <div className="filters-listing">
          <div className="results-count-listing">
            Showing 1–10 of 13 results
          </div>
          <div className="filter-controls-listing">
            <div className="sort-listing">
              <span className="sort-label-listing">Sort by</span>
              <span className="sort-value-listing">Newest</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/e39e55ec9214f063380f42c49a678f3b15c5b1cfdf9bfdd8ef1a882057c4473b?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
                alt="Sort"
                className="sort-icon-listing"
              />
            </div>
            <div className="view-type-listing">
              <div className="divider-listing" />
              <button className="view-btn active-listing">Grid</button>
              <div className="divider-listing" />
              <button className="view-btn-listing">List</button>
            </div>
          </div>
        </div>

        <div className="property-grid-listing">
          {properties.map((property, index) => (
            <div key={index} className="property-card-listing">
              <div className="card-image-listing">
                <img src={property.image} alt="Property" />
                <div className="tags-listing">
                  {property.isFeatured && (
                    <div className="featured-tag-listing">
                      <span>FEATURED</span>
                    </div>
                  )}
                  <div className="sale-tag-listing">FOR SALE</div>
                </div>
              </div>
              <div className="card-content-listing">
                <div className="property-details-listing">
                  <h3 className="property-title-listing">{property.name}</h3>
                  <p className="property-location-listing">
                    {property.location}
                  </p>
                </div>
                <div className="price-tag-listing">{property.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-listing">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/26383ddc26af28debbeecdbab91fb71a8521efff78008ad2b419b4b531faf1a3?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
            alt="Previous"
            className="nav-arrow-listing"
          />
          {[1, 2, 3, 4, 5, "...", 20].map((page, index) => (
            <button
              key={index}
              className={`page-number-listing ${page === 1 ? "active" : ""}`}
            >
              {page}
            </button>
          ))}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/adf234da2dd55e3858269e0cd6f22dca6ae9b7ac2908cd27ab9f3d61457bdf6c?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
            alt="Next"
            className="nav-arrow-listing"
          />
        </div>

        <div className="results-summary-listing">
          1 – 10 of 300+ property available
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SearchFilters;
