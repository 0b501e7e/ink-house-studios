'use client'

const Bookings: React.FC = () => {
    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log('Data being sent:', data);

        try {
            const response = await fetch('/api/send/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Booking request sent successfully.");
            } else {
                const resp = await response.json();
                console.log(resp);
                alert("Failed to send booking request.");
            }
        } catch (error) {
            alert("An error occurred while sending the booking request.");
        }
    };

    // Render the form
    return (
        <div className="max-w-full min-h-screen p-8 text-white bg-black">
            <h2 className="text-3xl font-bold text-center mb-8">Book an Appointment</h2>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full py-2 px-3 rounded focus:outline-none" required />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full py-2 px-3 rounded focus:outline-none" required />
                </div>

                {/* Message Field */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-bold mb-2 text-white">Your Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 text-black rounded focus:outline-none" required></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" />
                </div>
            </form>
        </div>
    );
};

export default Bookings;
