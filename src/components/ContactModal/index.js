// import carImage from './path/to/car-image.jpg'; // A
import './index.css';
import { FaCar } from "react-icons/fa";

const ContactMessage = () => {
  return (
    <div className="contact-message">
      <FaCar size={40} className='car-icon-contact' />

      <h3>Contact Us for a Visit: Phone: 9566609617, 9944311909 | Email: Rkhousing77@gmail.com</h3>
    </div>
  );
};

export default ContactMessage;
