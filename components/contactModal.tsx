// components/ConnectModal.tsx
"use client";
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ContactModal({ isOpen, onClose }: { 
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    region: '',
    interest: '',
    contactPrefs: [] as string[],
    source: '',
    comments: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.region) newErrors.region = 'Please select a region';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit logic here
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  const handleChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full min-h-screen transform overflow-hidden rounded-2xl bg-white p-8 flex text-left align-middle shadow-xl transition-all">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="grid md:grid-cols-2 gap-12 self-center	">
                  {/* Left Content */}
                  <div className="space-y-4">
                    <Dialog.Title
                      as="h3"
                      className="md:text-8xl text-4xl md:font-thin text-gray-900"
                    >
                      Let's Connect
                    </Dialog.Title>
                    <h4 className="text-xl sm:pt-8 text-gray-700">
                      We're here to help
                    </h4>
                    <p className="text-sm text-gray-600">
                      Select the VIEKO solution you'd like to learn more about and start 
                      your new home journey today.
                    </p>
                  </div>

                  {/* Right Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6">
                      {/* Name Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="First Name *"
                            className={`w-full p-2 border rounded-lg ${
                              errors.firstName ? 'border-red-500' : 'border-gray-200'
                            }`}
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Last Name *"
                            className={`w-full p-2 border rounded-lg ${
                              errors.lastName ? 'border-red-500' : 'border-gray-200'
                            }`}
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      {/* Contact Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone *"
                            className={`w-full p-2 border rounded-lg ${
                              errors.phone ? 'border-red-500' : 'border-gray-200'
                            }`}
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email *"
                            className={`w-full p-2 border rounded-lg ${
                              errors.email ? 'border-red-500' : 'border-gray-200'
                            }`}
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Dropdowns */}
                      <div className="space-y-4">
                        <div>
                          <select
                            className={`w-full p-2 border rounded-lg ${
                              errors.region ? 'border-red-500' : 'border-gray-200'
                            }`}
                            value={formData.region}
                            onChange={(e) => handleChange('region', e.target.value)}
                          >
                            <option value="">Select a region *</option>
                            <option>Southern California</option>
                            <option>Northern California</option>
                            <option>Texas</option>
                          </select>
                          {errors.region && (
                            <p className="text-red-500 text-sm mt-1">{errors.region}</p>
                          )}
                        </div>

                        <div>
                          <select
                            className="w-full p-2 border border-gray-200 rounded-lg"
                            value={formData.interest}
                            onChange={(e) => handleChange('interest', e.target.value)}
                          >
                            <option value="">What are you interested in?</option>
                            <option>Buying a Home</option>
                            <option>Building a Home</option>
                            <option>Renting a Home</option>
                          </select>
                        </div>
                      </div>

                      {/* Contact Preferences */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Contact Preference
                        </label>
                        <div className="flex flex-wrap gap-4">
                          {['Phone', 'Email', 'Text'].map((method) => (
                            <label key={method} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={formData.contactPrefs.includes(method)}
                                onChange={(e) => {
                                  const newPrefs = e.target.checked
                                    ? [...formData.contactPrefs, method]
                                    : formData.contactPrefs.filter(p => p !== method);
                                  handleChange('contactPrefs', newPrefs);
                                }}
                                className="rounded border-gray-300"
                              />
                              <span className="text-sm">{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Source */}
                      <div>
                        <select
                          className="w-full p-2 border border-gray-200 rounded-lg"
                          value={formData.source}
                          onChange={(e) => handleChange('source', e.target.value)}
                        >
                          <option value="">How did you hear about us?</option>
                          <option>Google Search</option>
                          <option>Social Media</option>
                          <option>Friend Referral</option>
                          <option>Advertisement</option>
                        </select>
                      </div>

                      {/* Comments */}
                      <div>
                        <textarea
                          placeholder="Questions or comments?"
                          className="w-full p-2 border border-gray-200 rounded-lg h-20"
                          value={formData.comments}
                          onChange={(e) => handleChange('comments', e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Submit Inquiry
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our Privacy Policy
                    </p>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}