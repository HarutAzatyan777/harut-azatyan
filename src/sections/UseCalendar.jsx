import { useState } from 'react';
import Calendar from 'react-calendar';
import emailjs from 'emailjs-com';
import 'react-calendar/dist/Calendar.css';

const UseCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [sending, setSending] = useState(false);  // To track if email is being sent

  const handleDateChange = (newDate) => setDate(newDate);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmitEmail = async (event) => {
    event.preventDefault();
    
    if (email) {
      setSending(true);
      try {
        // Send email using EmailJS
        await emailjs.send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          { email }, // Use email field as template data
          'YOUR_USER_ID' // Replace with your EmailJS user ID
        );
        setIsSubscribed(true);
        setEmail('');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Something went wrong. Please try again later.');
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div className="flex justify-around p-6">
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Schedule a Call</h2>
        <Calendar onChange={handleDateChange} value={date} />
        <p className="mt-2 text-lg">Selected date: {date.toDateString()}</p>
      </div>
      
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmitEmail} className="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
            className="p-3 mb-4 border border-gray-300 rounded-md"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
        {isSubscribed && <p className="mt-2 text-green-500 text-lg">Thank you for subscribing!</p>}
      </div>
    </div>
  );
};

export default UseCalendar;
