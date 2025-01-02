import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import { Country, State, City } from 'country-state-city';

// Custom Alert Component
const CustomAlert = ({ children, variant = 'default' }) => {
  const baseStyle = 'rounded-lg p-4 text-sm flex items-center gap-2';

  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    destructive: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    warning: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    success: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  };

  return <div className={`${baseStyle} ${variants[variant]}`}>{children}</div>;
};

const CustomAlertDescription = ({ children }) => <span className="flex-1">{children}</span>;

const TrainingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    courseType: '',
    fullName: '',
    email: '',
    phone: '',
    githubProfile: '',
    country: 'Nigeria',
    state: 'Ondo',
    city: 'Akure',
    gender: '',
    trainingTime: '4 Months',
    inspiration: '',
    goals: '',
    walletAddress: '',
    hasSecretKey: false,
  });

  useEffect(() => {
    const savedData = localStorage.getItem('trainingFormData');
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    localStorage.setItem('trainingFormData', JSON.stringify(formData));
  }, [formData]);

  const validateStep = (step) => {
    const newErrors = {};
    switch (step) {
      case 1:
        if (!formData.courseType) newErrors.courseType = 'Please select a course';
        break;
      case 2:
        if (!formData.fullName?.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email?.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.phone?.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.githubProfile?.trim()) newErrors.githubProfile = 'GitHub profile is required';
        if (!formData.country?.trim()) newErrors.country = 'Country is required';
        if (!formData.state?.trim()) newErrors.state = 'State is required';
        if (!formData.city?.trim()) newErrors.city = 'City is required';
        if (!formData.gender) newErrors.gender = 'Please select your gender';
        break;
      case 3:
        if (!formData.inspiration?.trim()) newErrors.inspiration = 'Please share what inspired you';
        if (!formData.goals?.trim()) newErrors.goals = 'Please share your goals';
        if (!formData.walletAddress?.trim()) newErrors.walletAddress = 'Wallet address is required';
        if (!formData.hasSecretKey) newErrors.hasSecretKey = 'Please confirm access to your secret key';
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate current step
    if (!validateStep(currentStep)) {
      return; // Stop progression if validation fails
    }

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1); // Go to the next step
      return;
    }

    // Final submission
    if (currentStep === 3) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://web3novadb.onrender.com/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData), // Directly sending formData object
        });

        if (!response.ok) {
          const errorData = await response.json(); // Attempt to parse the error response
          throw new Error(errorData.message || 'Registration failed');
        }

        // If successful
        localStorage.removeItem('trainingFormData');
        setIsSuccess(true); // Show success message
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          submit: error.message || 'Failed to submit registration. Please try again.',
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const renderError = (fieldName) =>
    errors[fieldName] && (
      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors[fieldName]}</p>
    );

  const renderCourseSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What course do you want to learn?</h2>
      <div className="space-y-4">
        {['Web2 Basic - Html, CSS, Javascript', 'Web2 Advanced- Javascript, Nodejs/React', 'Web3 - Solidity'].map((course) => (
          <label key={course} className="flex items-center p-4 border rounded-lg cursor-pointer border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <input
              type="radio"
              name="courseType"
              value={course}
              checked={formData.courseType === course}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <span className="ml-3 text-gray-700 dark:text-gray-200">{course}</span>
          </label>
        ))}
      </div>
      {renderError('courseType')}
    </div>
  );

  const renderPersonalInfo = () => {
    const countries = Country.getAllCountries();
    const states = formData.country ? State.getStatesOfCountry(formData.country) : [];
    const cities = formData.state ? City.getCitiesOfState(formData.country, formData.state) : [];
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter your full name"
            />
            {renderError('fullName')}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter your email address"
            />
            {renderError('email')}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter your phone number"
            />
            {renderError('phone')}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">GitHub Profile *</label>
            <input
              type="url"
              name="githubProfile"
              value={formData.githubProfile}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter your GitHub profile link"
            />
            {renderError('githubProfile')}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Country *</label>
            <select
              name="country"
              value={formData.country || ''}
              onChange={(e) => {
                handleInputChange(e);
                handleInputChange({ target: { name: 'state', value: '' } });
                handleInputChange({ target: { name: 'city', value: '' } });
              }}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
            {renderError('country')}
          </div>
          {formData.country && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">State *</label>
              <select
                name="state"
                value={formData.state || ''}
                onChange={(e) => {
                  handleInputChange(e);
                  handleInputChange({ target: { name: 'city', value: '' } });
                }}
                className="mt-1 block w-full rounded-md p-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
              {renderError('state')}
            </div>
          )}
          {formData.state && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">City *</label>
              <select
                name="city"
                value={formData.city || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md p-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              {renderError('city')}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Gender *</label>
            <div className="flex items-center gap-4">
              {['Male', 'Female', 'Other'].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 p-2 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                  <span className="text-gray-700 dark:text-gray-200">{option}</span>
                </label>
              ))}
            </div>
            {renderError('gender')}
          </div>
        </div>
      </div>
    );
  };

  const renderOtherInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Other Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Inspiration *</label>
          <textarea
            name="inspiration"
            value={formData.inspiration}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="What inspired you to code?"
          />
          {renderError('inspiration')}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Goals *</label>
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="What are your goals?"
          />
          {renderError('goals')}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Wallet Address *</label>
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Enter your wallet address"
          />
          {renderError('walletAddress')}
        </div>
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              name="hasSecretKey"
              checked={formData.hasSecretKey}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 dark:text-blue-400"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">
              I confirm that I have access to my wallet&apos;s secret key.
            </span>
          </label>
          {renderError('hasSecretKey')}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            {isSuccess ? (
              <div className="space-y-6">
                <CustomAlert variant="success">
                  <AlertCircle className="h-4 w-4" />
                  <CustomAlertDescription>
                    Registration successful! Thank you for joining the training program.
                  </CustomAlertDescription>
                </CustomAlert>
                
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Join Our Community!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Stay updated with the latest news and connect with fellow learners</p>
                  <a 
                    href="https://chat.whatsapp.com/CuPv6e9N8Rt7cY6gDU82Qp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Join Web3Nova WhatsApp Group →
                  </a>
                </div>
              </div>
            ) :  (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
              {errors.submit && (
                <CustomAlert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <CustomAlertDescription>{errors.submit}</CustomAlertDescription>
                </CustomAlert>
              )}
              {currentStep === 1 && renderCourseSelection()}
              {currentStep === 2 && renderPersonalInfo()}
              {currentStep === 3 && renderOtherInfo()}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-md text-white ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Processing...' : currentStep === 3 ? 'Submit Registration' : 'Next'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingForm;
