export default function Bookings() {
    return (
      <div className="max-w-full p-8 text-white bg-black">
        <h2 className="text-3xl font-bold text-center mb-8">Book an Appointment</h2>
        <form className="max-w-md mx-auto">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full py-2 px-3 rounded focus:outline-none" />
          </div>
  
          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full py-2 px-3 rounded focus:outline-none" />
          </div>
  
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="w-full py-2 px-3 rounded focus:outline-none" />
          </div>
  
          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">Your Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 rounded focus:outline-none"></textarea>
          </div>
  
          {/* Submit Button */}
          <div>
            <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" />
          </div>
        </form>
      </div>
    );
  }
  