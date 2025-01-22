import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const WhatsAppTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleWhatsAppRedirect = (user) => {
    const phone = formatPhoneNumber(user.phone);
    
    // Send image first
    const imageUrl = encodeURIComponent('/images/cohort-banner.jpg');
    const imageWhatsappUrl = `https://wa.me/${phone}?text=${imageUrl}`;
    window.open(imageWhatsappUrl, '_blank');
    
    // Send text message after small delay
    setTimeout(() => {
      const message = `Hello ${user.fullName}! 👋\n\nCongratulations! You&apos;ve been selected for the Web3Nova Web Development scholarship interview.\n\nInterview Details:\n- Date: Saturday, January 25th, 2025\n- Time: 12:00 noon (arrive by 11:45 AM)\n- Location: Bola International, Stateline, Southgate\n- Duration: 60 minutes\n- Requirements: Bring your laptop\n\nProgram Highlights:\n- Full Web Development & Web3 Development training\n- Course fee: $30/45,000₦\n- Track record: Trained 30+ builders who earned over $10,000 last year\n\nPlease inform us if you need to reschedule. We look forward to meeting you.\n\nBest regards,\nWeb3Nova`;
      
      const encodedMessage = encodeURIComponent(message);
      const textWhatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
      window.open(textWhatsappUrl, '_blank');
    }, 1000);
  };

  const formatPhoneNumber = (phone) => {
    let cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
      cleaned = '234' + cleaned.substring(1);
    }
    if (!cleaned.startsWith('234')) {
      cleaned = '234' + cleaned;
    }
    return cleaned;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://web3novadb.onrender.com/users');
        const result = await response.json();
        setRegistrations(result.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = registrations.filter(user => 
    user.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone?.includes(searchTerm) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.courseType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-600 p-4">{error}</div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src="/images/cohort-banner.jpg"
          alt="Web3Nova First Cohort"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Web3Nova First Cohort</h2>
          <p className="text-gray-600 mb-4">
            Learn Web Development and Web3 Development in our 4-month intensive program.
            We&apos;ve trained over 30 builders who earned more than $10,000 last year!
          </p>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-semibold text-blue-800">Program Details:</p>
            <ul className="list-disc ml-6 text-blue-700">
              <li>Professional tutoring and mentorship</li>
              <li>Commitment Fee: $30/45,000₦</li>
              <li>Location: Bola International, Stateline, Southgate</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6 relative">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, phone, email, or course..."
            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((user) => (
              <tr 
                key={user._id}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleWhatsAppRedirect(user)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.fullName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.courseType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        Total Registrations: {registrations.length} • 
        Click on any row to send a WhatsApp message
      </div>
    </div>
  );
};

export default WhatsAppTable;