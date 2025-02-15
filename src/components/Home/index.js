import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { VscSettings } from "react-icons/vsc";
import { GoSearch } from "react-icons/go";
import { Helmet } from "react-helmet";
import { HiHome } from "react-icons/hi2";
import { PiBuildingApartment } from "react-icons/pi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaAward, FaFileAlt, FaHome, FaLandmark, FaSmile, FaMapMarkerAlt } from 'react-icons/fa';
import { MdHolidayVillage } from "react-icons/md";
import { TbHomeStar } from "react-icons/tb";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { FaBed, FaBath, FaRuler } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import ContactModal from '../ContactModal';


const propertyData = [
  {
    id: 1,
    imageUrl: "/images/building/home1.jpg",
    price: "14,000",
    isFeatured: true,
    title: "Elegant Family Home in Chennai",
    location: "T Nagar, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/87d30d50e373e18381d42709d32589520ad71b5cc0412b52ffdcbc5d02db2b6d?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 2,
    imageUrl: "/images/building/home2.jpg",
    price: "82,000",
    isFeatured: false,
    title: "Luxury Villa in Anna Nagar",
    location: "Anna Nagar, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/7463845f8480001d2df41e90beafa0fa88504cc188a4865211ac222ca8596db9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 3,
    imageUrl: "/images/building/home3.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Modern Villa near Besant Nagar Beach",
    location: "Besant Nagar, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 4,
    imageUrl: "/images/building/home4.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Spacious Villa in Velachery",
    location: "Velachery, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 5,
    imageUrl: "/images/building/home5.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Modern Villa in Adyar",
    location: "Adyar, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 6,
    imageUrl: "/images/building/home6.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Stylish Villa in OMR Road",
    location: "OMR Road, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 7,
    imageUrl: "/images/building/home7.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Luxury Villa in Porur",
    location: "Porur, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 8,
    imageUrl: "/images/building/home8.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Contemporary Villa in Thiruvanmiyur",
    location: "Thiruvanmiyur, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 9,
    imageUrl: "/images/building/home9.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Modern Villa in Mylapore",
    location: "Mylapore, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 10,
    imageUrl: "/images/building/home10.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Premium Villa in Mount Road",
    location: "Mount Road, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 11,
    imageUrl: "/images/building/home11.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Elegant Villa in Saidapet",
    location: "Saidapet, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
  {
    id: 12,
    imageUrl: "/images/building/home12.jpg",
    price: "63,000",
    isFeatured: false,
    title: "Luxury Villa in Kotturpuram",
    location: "Kotturpuram, Chennai, Tamil Nadu, India",
    beds: 3,
    baths: 4,
    sqft: 1200,
    forRent: true,
    agentLogo:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6bd475b93af8216e9b5c24e963a4b81188ec2a4c60e147790d78a7e8a54877c9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
  },
];


const testimonials = [
  {
    id: 1,
    title: "Great Work",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/1714f13aa2541396e4306fcce5296591219edd563b7c92315e7a1321eff6090d?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    content:
      "The project exceeded our expectations! The attention to detail was outstanding and the team ensured we were informed throughout every stage. The final result is just perfect!",
    avatar: "/images/people/people5.jpg",
    name: "Leslie Alexander",
    company: "Nintendo",
  },
  {
    id: 2,
    title: "Awesome Design",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/1714f13aa2541396e4306fcce5296591219edd563b7c92315e7a1321eff6090d?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    content:
      "Working with this team was a pleasure. The design was intuitive and easy to use, which made the whole process smooth and enjoyable. Highly recommend for any future projects.",
    avatar: "/images/people/people5.jpg",
    name: "Floyd Miles",
    company: "Bank of America",
  },
  {
    id: 3,
    title: "Perfect Quality",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/1714f13aa2541396e4306fcce5296591219edd563b7c92315e7a1321eff6090d?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    content:
      "The quality of the work was top-notch. It met all our needs and was delivered on time. The professionalism and creativity displayed throughout the process was unmatched.",
    avatar: "/images/people/people5.jpg",
    name: "Dianne Russell",
    company: "Facebook",
  },
  {
    id: 4,
    title: "Excellent Support",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/1714f13aa2541396e4306fcce5296591219edd563b7c92315e7a1321eff6090d?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    content:
      "Beyond satisfied with the overall experience. The support team was always available to address concerns and made sure the product delivered was exactly what we were hoping for.",
    avatar: "/images/people/people5.jpg",
    name: "John Doe",
    company: "Amazon",
  }
];



const Home = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Buy");
  const tabs = ["Buy", "Rent", "Sold"];
  const [activeFilter, setActiveFilter] = useState("rent");
  const filledStars = Math.floor(5); // Number of fully filled stars
  const halfStar = 5 % 1 >= 0.5 ? 1 : 0; // Check for a half star
  const emptyStars = 5 - filledStars - halfStar;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to display per column
  const totalColumns = Math.ceil(propertyData.length / itemsPerPage);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialsPerPage = 4; // Number of testimonials to display per column
  const totalTestimonialPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_txt8ayn",
        "template_yh2jtoj",
        form.current,
        "cV9RdWlySrecE16vG"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Try again later.");
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % totalTestimonialPages);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalTestimonialPages]);

  const goToPreviousTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + totalTestimonialPages) % totalTestimonialPages
    );
  };

  const goToNextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % totalTestimonialPages);
  };


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalColumns) % totalColumns);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalColumns);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalColumns);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [totalColumns]);

  const propertyTypes = [
    {
      type: "Houses",
      count: 22,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6768d6318c9fafd660d1c8679b90bf05afa7d08e63d65094c3616da931ff2f2b?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
      dark: true,
      bgImage:"images/card/home1.jpg"
    },
    {
      type: "Apartments",
      count: 22,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/d27f9e290972dd0fe028fb5c2717d0687531de194b1356f4aeee42e402f563f9?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
        bgImage:"images/card/home2.jpg"
    },
    {
      type: "Villa",
      count: 22,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/3787732469caeb2236ea2bf2c5d37905278ee9cb253a99d33cd97ff3cfb6d636?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
      bgImage:"images/card/home4.jpg"
    },
    {
      type: "Townhome",
      count: 22,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/53005376d7b373d6f396c564b0ac1a01a95d4520b602303d4c17889d811c27d4?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
      bgImage:"images/card/home5.jpg"
    },
    // { type: 'Bungalow', count: 22, image: 'https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/6ef477bfae38eff2c172db7f61436f30ce324dcf0f66bd509f80d50bcfe6e294?apiKey=407ced39599f4ce0aa86e4b4340ddeea&' },
    // { type: 'Loft', count: 22, image: 'https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/44ed52e16a385c578777e11ac53aebb9b68b8519536b7e639e0f406bbb2eb31d?apiKey=407ced39599f4ce0aa86e4b4340ddeea&' }
  ];

  const services = [
    {
      title: "Buy a property",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/7fb31d6f34ba16139124e5d5ad514d254d4bef8ac10817833f780d885dd2fc7a?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
      buttonText: "Find a home",
      buttonIcon:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/49e46ee5d9a57b8a2ccde85806d41895a5edbb153cddb237992e8a3733a5b22e?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
    {
      title: "Sell a property",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/0da07222a6040d197d65fb8d5108d966a6c899878c6679eecb5002daa1cac526?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
      buttonText: "Contact us",
      buttonIcon:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/dffd3c081abe0e0f83146271752e5a34284cefd2d206b4ea60133d0ae97e522e?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
      highlighted: true,
    },
    {
      title: "Rent a property",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/89fea25c20528b6b44f344e3f55800b4a15b74544a57eb454f40149f543aa262?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
      buttonText: "Find a rental",
      buttonIcon:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/19fa7663a182508202f23882ea408f350e6e7d6a5add7d0f449511b0cab1aeed?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
  ];

  

  

  const featuresList = [
    {
      id: 1,
      title: "Find excellent deals",
      icon: "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/670d2f20-1524-44cb-ba6d-e739cfc73a7b?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
    {
      id: 2,
      title: "Friendly host & Fast support",
      icon: "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/72d75a4b-330a-408d-b86e-ec2eb72d716c?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
    {
      id: 3,
      title: "List your own property",
      icon: "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/29a032e3-c5db-42f6-a6a2-a6390e45b2a4?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
  ];

  const propertyDataEnd = [
    {
      id: 1,
      image: "/images/villas/villa1.jpg",
      price: "84,000",
      title: "Maran Garden Main",
      location: "Goparasanallur, Chennai - 600056",
      beds: 3,
      baths: 4,
      sqft: 1200,
      featured: true,
      agentImage:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/09994fa55c4db2f3ddb31b5af1a86fde4402d47cfb731caa0730fe9ea5dffd53?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
    {
      id: 2,
      image: "/images/villas/villa2.jpg",
      price: "12,000",
      title: "Tambaran Mudichur",
      location: "Tambaram, Chennai - 600056",
      beds: 3,
      baths: 4,
      sqft: 1200,
      featured: false,
      agentImage:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/9e8cb2b5905ff6d99095b0003bad6c67b0fcccae803594d38b1dbe33094f1cf5?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
    {
      id: 3,
      image: "/images/villas/villa3.jpg",
      price: "19,000",
      title: "Tambaram East",
      location: "Tambaran Selaiyur, Chennai - 600056",
      beds: 3,
      baths: 4,
      sqft: 1200,
      featured: false,
      agentImage:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/cb7dde1989de4d73f3134c44a9926b80c83719374c58d5447bf22a86a97aa9e6?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
    {
      id: 4,
      image: "/images/villas/villa4.jpg",
      price: "17,000",
      title: "Villa on Hollywood Boulevard",
      location: "Velappanchavadi, Chennai - 600056",
      beds: 3,
      baths: 4,
      sqft: 1200,
      featured: false,
      agentImage:
        "https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/3bfc679b7eec3b94789a92c465c9bcffd70eb7ddb8a225a7f436563e2a51f8d8?apiKey=407ced39599f4ce0aa86e4b4340ddeea&",
    },
  ];

  const PropertyCard = ({ property }) => {
    return (
      <div className="property-card-end">
      <div className="image-container">
        <img
        src={property.image}
        alt={property.title}
        className="property-image"
        />
        {property.featured && <div className="featured-tag">FEATURED</div>}
        {/* <div className="price-tag"> */}
        {/* <span className="price-amount">₹{property.price}</span> */}
        {/* <span className="price-period">/mo</span> */}
        {/* </div> */}
      </div>
      <div className="property-details">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">{property.location}</p>
        <div className="property-features">
        <div className="feature">
          <FaBed size={11} />
          <span>{property.beds} bed</span>
        </div>
        <div className="feature">
          <FaBath size={11} />
          <span>{property.baths} bath</span>
        </div>
        <div className="feature">
          <FaRuler size={11} />
          <span>{property.sqft} sqft</span>
        </div>
        </div>
        <div className="divider" />
        <div className="property-footer">
        <span className="property-status">For Sale</span>
        <img
          src={property.agentImage}
          alt="Real estate agent"
          className="agent-image"
        />
        </div>
      </div>
      </div>
    );
  };



  function TestimonialCard({ title, rating, content, avatar, name, company }) {
    return (
      <div className="testimonial-box">
        <div className="testimonial-header">
          <div className="testimonial-title">{title}</div>
        </div>
        <div className="testimonial-content">{content}</div>
        {[...Array(filledStars)].map((_, index) => (
          <AiFillStar
            size={26}
            key={`filled-${index}`}
            style={{ color: "gold", fontSize: "20px" }}
          />
        ))}
        <div className="divider" />
        <div className="testimonial-footer">
          <img
            loading="lazy"
            src={avatar}
            alt={`${name}'s avatar`}
            className="avatar"
          />
          <div className="user-info">
            <div className="user-name">{name}</div>
            <div className="user-company">{company}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Helmet>
        <title>RK Housing - Best Real Estate Company in Chennai | Buy, Sell & Rent Properties</title>
        <meta name="description" content="RK Housing is a trusted real estate company in Chennai offering premium residential and commercial properties. Buy, sell, or rent homes, apartments, and plots with expert guidance." />
        <meta name="keywords" content="real estate in Chennai, buy property in Chennai, apartments for sale, commercial properties, land for sale, RK Housing, real estate company, Chennai housing, property investment" />
        <meta name="theme-color" content="#004AAD" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RK Housing - Best Real Estate Company in Chennai" />
        <meta property="og:description" content="Find your dream home with RK Housing, Chennai's leading real estate firm. Explore premium residential and commercial properties with expert assistance." />
        <meta property="og:image" content="https://www.rkhousing.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.rkhousing.com" />
        <meta property="og:site_name" content="RK Housing" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RK Housing - Best Real Estate Company in Chennai" />
        <meta name="twitter:description" content="Explore top residential and commercial properties in Chennai with RK Housing. Buy, sell, or rent properties effortlessly." />
        <meta name="twitter:image" content="https://www.rkhousing.com/assets/twitter-image.jpg" />

        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "RK Housing",
            "url": "https://www.rkhousing.com",
            "logo": "https://www.rkhousing.com/assets/logo.png",
            "description": "RK Housing is a leading real estate company in Chennai, specializing in residential and commercial properties.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "RK Towers, Anna Nagar",
              "addressLocality": "Chennai",
              "addressRegion": "TN",
              "postalCode": "600040",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "Customer Service"
            }
          })}
        </script>
      </Helmet>
    <ContactModal />
    <Navbar />
      <div className="hm">
        <div
          className="home-container-main"
          style={{ backgroundImage: `url(${"/images/kj.jpg"})` }}
        >
          <div className="home-container">
            <div className="home-text">
              <p>THE BEST WAY TO</p>
              <h1>Find Your Dream Home</h1>
              <p>We’ve more than 745,000 apartments, place & plot.​</p>
              <div className="search-container">
                <div className="tab-container">
                  {tabs.map((tab) => (
                    <div
                      key={tab}
                      className={`tab ${activeTab === tab ? "active-tab" : ""}`}
                      onClick={() => setActiveTab(tab)}
                      role="tab"
                      aria-selected={activeTab === tab}
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveTab(tab);
                        }
                      }}
                    >
                      <div>{tab}</div>
                      {activeTab === tab && <div className="tab-indicator" />}
                    </div>
                  ))}
                </div>

                <form
                  className="search-box"
                  role="search"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="search-input-wrapper">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/3385334aab6efe59639a07498824c8daca350547a4f6fbaf231358176e4f2f79?apiKey=3415081ac2e344e696e4934521b1deb4&"
                      className="search-icon"
                      alt=""
                      aria-hidden="true"
                    />
                    <label
                      htmlFor="location-search"
                      className="visually-hidden"
                    >
                      Search location
                    </label>
                    <input
                      id="location-search"
                      type="search"
                      className="search-input"
                      placeholder="Enter an address, neighborhood, city, or ZIP code"
                      aria-label="Enter an address, neighborhood, city, or ZIP code"
                    />
                  </div>

                  <div className="advanced-filter-container">
                  <div
                    className="advanced-filter"
                    role="button"
                    tabIndex={0}
                    onClick={() => {}}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                      }
                    }}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/0f795fb227f773fa4b5f120012032bed5f0ba74ce88590898f63d148a5e4e787?apiKey=3415081ac2e344e696e4934521b1deb4&"
                      className="search-icon"
                      alt=""
                      aria-hidden="true"
                    />
                    <span>Advanced</span>
                  </div>

                  <button
                    type="submit"
                    className="search-button"
                    aria-label="Search properties"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/171b5c878e88356ee71865eaf5f997b084d6e22915d28aca138d3702419f324e?apiKey=3415081ac2e344e696e4934521b1deb4&"
                      alt=""
                      aria-hidden="true"
                    />
                  </button>
                  </div>

                  <div className="advance-filter-buttons-container-mobile">
                    <button className="advance-filter-buttons-setting"> <VscSettings /> Filter</button>
                    <button className="advance-filter-buttons"> <GoSearch />  Search</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="property-explorer"> */}
        <div className="section-header-top">
          <div className="explore-apartment-types">Explore Apartment Types</div>
          <div className="get-some-inspirations">
            Get some Inspirations from 1800+ skills
          </div>
          </div>

          <div
            className="property-types-grid"
          >
            {propertyTypes.map((property, index) => (
              <div
                key={index}
                style={{
      backgroundImage: `url(${property.bgImage})`,
      backgroundSize: "cover", 
      backgroundPosition: "center",  
    }}
                className={`property-type ${property.dark ? "dark" : "dark"}`}
              >
                <img loading="lazy" src={property.image} alt={property.type} />
                <div className="type-name">{property.type}</div>
                <div className="property-count">
                  {property.count} Properties
                </div>
              </div>
            ))}
          </div>

          <div className="services-section">
            <div className="section-title-service">
              See how RK Housing can help
            </div>
            <p className="section-subtitle">
              Discover a place you'll love to call home with ease and
              confidence.
            </p>

            <div className="services-grid">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${
                    service.highlighted ? "highlighted" : ""
                  }`}
                >
                  <img loading="lazy" src={service.image} alt={service.title} />
                  <div className="service-title">{service.title}</div>
                  <div className="service-description">
                    {service.description}
                  </div>
                  <div
                    onClick={() => {
                      navigate("/listing");
                    }}
                    className={`service-button ${
                      service.highlighted ? "dark" : ""
                    }`}
                  >
                    <span>{service.buttonText}</span>
                    <img loading="lazy" src={service.buttonIcon} alt="arrow" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="property-section"> */}
            {/* <div className="section-container"> */}
              <div className="section-header">
                <div className="header-content">
                  <h1 className="section-title-listing">
                    Discover Our Featured Listings
                  </h1>
                  <p className="section-subtitle-listing-para">
                    Browse top properties handpicked just for you.
                  </p>
                </div>
                <div
                  onClick={() => {
                    navigate("/listing");
                  }}
                  className="view-more"
                >
                  <span className="view-more-text">See All Properties</span>
                  <GoArrowUpRight size={25} color="black" />
                </div>
              </div>

              <div className="property-carousel">
      <div className="listings-grid">
        {propertyData
          .map((property) => (
            <div key={property.id} className="property-card">
              <div className="image-container">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="property-image"
                />
                {property.isFeatured && (
                  <div className="featured-tag">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/8f9400e5bfde3d5a3c8f80c59b5758baff161cd579b1265af4c2c2098fd3e388?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
                      alt=""
                      className="featured-icon"
                    />
                    <span>FEATURED</span>
                  </div>
                )}
                {/* <div className="price-tag"> */}
                  {/* <span className="price-amount">₹{property.price},000</span> */}
                  {/* <span className="price-period"> / mo</span> */}
                {/* </div> */}
              </div>

              <div className="card-content">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">{property.location}</p>

                <div className="property-features">
                  <div className="feature">
                    <FaBed size={15} />
                    <span>{property.beds} bed</span>
                  </div>
                  <div className="feature">
                    <FaBath size={15} />
                    <span>{property.baths} bath</span>
                  </div>
                  <div className="feature">
                    <FaRuler size={15} />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="card-divider" />

                <div className="card-footer">
                  <span className="property-status">
                    {property.forRent ? "For Sale" : "For Sale"}
                  </span>
                  <img
                    src={property.agentLogo}
                    alt="Agent logo"
                    className="agent-logo"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="carousel-controls">
        <button className="arrow-btn" onClick={handlePrevious}>
          &larr;
        </button>
        <div className="dots">
          {Array.from({ length: totalColumns }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <button className="arrow-btn" onClick={handleNext}>
          &rarr;
        </button>
      </div>
    </div>

              {/* <section className="property-section"> */}
                {/* <div className="header">
                  <h2 className="title">Properties by Cities</h2>
                  <div className="subtitle-wrapper">
                    <p className="subtitle">
                      Aliquam lacinia diam quis lacus euismod
                    </p>
                    <button onClick={()=>{navigate('/listing')}} className="view-all" aria-label="View all cities">
                      <span>See All Cities</span>
                      <GoArrowUpRight size={25} color="black" />
                    </button>
                  </div>
                </div> */}

                {/* <div className="cities-grid">
                  {cityData.map((city) => (
                    <CityCard key={city.id} {...city} />
                  ))}
                </div> */}

                {/* <div className="features-section">
                  <div className="features-content">
                    <h2 className="features-title">
                      Let's find the right selling option for you
                    </h2>
                    <p className="features-description">
                      As the complexity of buildings to increase, the field of
                      architecture.
                    </p>

                    {featuresList.map((feature) => (
                      <FeatureItem key={feature.id} {...feature} />
                    ))}

                    <button
                      className="learn-more"
                      aria-label="Learn more about our features"
                    >
                      <span>Learn More</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/d6cdb8a15aac61420f7fa7f7d4ef42a5a17375598754fef7356ef5ce45537075?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
                        alt=""
                        className="arrow-icon"
                      />
                    </button>
                  </div>

                  <div className="features-image">
                    <div className="container">
                      <div className="house-image-section">
                        <img
                          src="/images/customer/cust1.jpg"
                          alt="Modern House"
                          className="house-image"
                        />
                      </div>

                      <div className="info-section">
                        <img
                          src="/images/customer/cust2.jpg"
                          alt="Couple"
                          className="couple-image"
                        />

                    
                      </div>
                    </div>

                  </div>
                </div> */}
              {/* </section> */}

              <section className="properties-section">
                <div className="properties-container">
                  <div className="properties-header">
                    <div className="header-content">
                      <h2 className="section-title-end">
                        Discover Popular Properties
                      </h2>
                      <p className="section-subtitle">
                        Aliquam lacinia diam quis lacus euismod
                      </p>
                    </div>
                    <div className="filter-buttons">
                      <button
                        className={`filter-btn ${
                          activeFilter === "rent" ? "active" : ""
                        }`}
                        onClick={() => setActiveFilter("rent")}
                        aria-pressed={activeFilter === "rent"}
                      >
                        For Sale
                      </button>
                      <button
                        className={`filter-btn ${
                          activeFilter === "sale" ? "active" : ""
                        }`}
                        onClick={() => setActiveFilter("sale")}
                        aria-pressed={activeFilter === "sale"}
                      >
                        For Rent
                      </button>
                    </div>
                  </div>
                  <div className="properties-grid">
                    {propertyDataEnd.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                  <div
                    onClick={() => {
                      navigate("/listing");
                    }}
                    className="view-more"
                  >
                    <button
                      className="view-more-btn"
                      aria-label="See all properties"
                    >
                      See All Properties
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/3ed4628350445f17c0d9889a6bdaa574663cbf89623403faacaff088942d3a8f?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
                        alt=""
                        className="arrow-icon"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </section>

              {/* <section className="testimonial-section">
                <h2 className="section-title size-increase">
                  People Love Living with Realton
                </h2>
                <p className="section-subtitle size-increase">
                  The integration of design and technology enhances everyday
                  living.
                </p>
                <div className="testimonial-carousel-wrapper">
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-column">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
      </div>

      <div className="testimonial-carousel-controls">
        <button className="testimonial-arrow" onClick={goToPreviousTestimonial}>
          &larr;
        </button>
        <div className="testimonial-dots">
          {Array.from({ length: totalTestimonialPages }).map((_, index) => (
            <span
              key={index}
              className={`testimonial-dot ${
                index === testimonialIndex ? "active" : ""
              }`}
              onClick={() => setTestimonialIndex(index)}
            ></span>
          ))}
        </div>
        <button className="testimonial-arrow" onClick={goToNextTestimonial}>
          &rarr;
        </button>
      </div>
    </div>
              </section> */}

              <div className="help-section">
                <div className="help-content">
                  <div className="help-text-container">
                    <h2 className="help-heading">
                      Need help? Talk to our expert.
                    </h2>
                    <p className="help-description">
                      Talk to our experts or Browse through more properties.
                    </p>
                  </div>
                  <div className="action-buttons">
                    <button
                      className="action-button contact-button"
                      type="button"
                      aria-label="Contact our experts"
                    >
                      <span>Contact Us</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/4cdfc015c3a1ff6f73bc343c353832c38ba54aa99f5860b899cc64f4b2884076?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
                        alt=""
                        className="button-icon"
                        loading="lazy"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      className="action-button phone-button"
                      type="button"
                      aria-label="Call our experts"
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3415081ac2e344e696e4934521b1deb4/dfe53eccb8a7222ffa2fb140e927efe5bfa49be0a65163914d692406e0dd3f37?apiKey=407ced39599f4ce0aa86e4b4340ddeea&"
                        alt=""
                        className="button-icon"
                        loading="lazy"
                        aria-hidden="true"
                      />
                      <span>95666-09617</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="information-container">
      <h2 className="information-heading">RKHousing&apos;S Real Estate</h2>
      <p className="information-description">
        We understand the importance of investing in the house of your dreams – a lifestyle that is 
        unconditional & unrestricted. Our company is the most trusted plot real estate developer, with 
        every project and property in your favorite metro’s most prime & potential addresses.
      </p>
      <div className="cards-container">
        <div className="info-card">
          <FaAward size={40} className="info-icon" />
          <h3 className="info-text">11+</h3>
          <p className="info-description">Awards</p>
        </div>
        <div className="info-card">
          <FaFileAlt size={40} className="info-icon" />
          <h3 className="info-text">20+</h3>
          <p className="info-description">Years of Experience</p>
        </div>
        <div className="info-card">
          <FaFileAlt size={40} className="info-icon" />
          <h3 className="info-text">82%</h3>
          <p className="info-description">Documentation</p>
        </div>
        <div className="info-card">
          <FaHome size={40} className="info-icon" />
          <h3 className="info-text">113+</h3>
          <p className="info-description">Premium Projects</p>
        </div>
        <div className="info-card">
          <FaLandmark size={40} className="info-icon" />
          <h3 className="info-text">3,243+</h3>
          <p className="info-description">Acres of Land Delivered</p>
        </div>
        <div className="info-card">
          <FaSmile size={40} className="info-icon" />
          <h3 className="info-text">12,159+</h3>
          <p className="info-description">Happy Customers</p>
        </div>
        <div className="info-card">
          <FaMapMarkerAlt size={40} className="info-icon" />
          <h3 className="info-text">8+</h3>
          <p className="info-description">Cities</p>
        </div>
      </div>
    </div>


            {/* </div> */}
          </div>
        {/* </div> */}
      {/* </div> */}
      <div className="social-media-icons">
      <a href="tel:+919944311909" target="_blank" rel="noopener noreferrer" className="icon phone">
        <FaPhoneAlt />
      </a>
      <a href="https://wa.me/+919944311909" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
        <FaWhatsapp />
      </a>
      <a href="https://facebook.com/rk-housing" target="_blank" rel="noopener noreferrer" className="icon facebook">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com/rk-housing" target="_blank" rel="noopener noreferrer" className="icon instagram">
        <FaInstagram />
      </a>
    </div>

    {/* <form className="styled-contact-form" ref={form} onSubmit={sendEmail}>
  <label htmlFor="name">Name:</label>
  <input id="name" type="text" name="name" required />

  <label htmlFor="email">Email:</label>
  <input id="email" type="email" name="email" required />

  <label htmlFor="phone">Phone Number:</label>
  <input id="phone" type="tel" name="phone" required />

  <button type="submit">Send</button>
</form> */}

<div class="quick-enquiry-container">
  <h2 class="quick-enquiry-title">
    Quick <span>Enquiry</span>
  </h2>
  <div class="underline"></div>

  <form class="quick-enquiry-form" onSubmit={sendEmail} ref={form}>

    <div class="form-row">
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        required 
      />
    </div>


    <div class="form-row">
      <div class="phone-group">
        <select name="countryCode" required>
          <option value="+91">+91</option>
       
        </select>
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone / Mobile" 
          required 
          className="phone-input-container"
        />
      </div>
    </div>


    <textarea
      name="message"
      rows="4"
      placeholder="Leave a Message for us"
      required
    ></textarea>

  
    <button type="submit">Send Message</button>
  </form>
  
</div>



      <Footer />
    </>
  );
};

export default Home;
