import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const WhatsAppTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleWhatsAppRedirect = (user) => {
    const phone = formatPhoneNumber(user.phone);
    const message = `Hello ${user.fullName}! 👋\n\nWelcome to Web3Nova! We're excited to have you in our ${user.courseType} course.\n\nJoin our WhatsApp community for updates and announcements:\nhttps://chat.whatsapp.com/CuPv6e9N8Rt7cY6gDU82Qp\n\nFollow us on Twitter for the latest news:\nhttps://x.com/web3_nova\n\nBest regards,\nWeb3Nova Team`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const filteredData = registrations.filter(user => 
    user.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone?.includes(searchTerm) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.courseType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="p-8">
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

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
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