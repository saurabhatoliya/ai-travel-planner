import React, { useState } from 'react';
import { TravelPreferences } from '../types';
import { ChevronRight, DollarSign, Calendar, MapPin, Heart, Utensils, Scaling as Walking, Building } from 'lucide-react';

const initialPreferences: TravelPreferences = {
  budget: '',
  duration: 0,
  startLocation: '',
  destination: '',
  purpose: '',
  dietaryPreferences: [],
  interests: [],
  mobilityLevel: '',
  accommodationType: ''
};

interface PreferencesFormProps {
  onSubmit: (preferences: TravelPreferences) => void;
}

export function PreferencesForm({ onSubmit }: PreferencesFormProps) {
  const [preferences, setPreferences] = useState<TravelPreferences>(initialPreferences);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget Range</label>
                <div className="mt-1 relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3"
                    value={preferences.budget}
                    onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                  >
                    <option value="">Select budget range</option>
                    <option value="budget">Budget ($0-$1000)</option>
                    <option value="moderate">Moderate ($1000-$3000)</option>
                    <option value="luxury">Luxury ($3000+)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration (days)</label>
                <div className="mt-1 relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    min="1"
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3"
                    value={preferences.duration || ''}
                    onChange={(e) => setPreferences({ ...preferences, duration: parseInt(e.target.value) })}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setStep(2)}
              className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Location Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Starting Location</label>
                <div className="mt-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3"
                    value={preferences.startLocation}
                    onChange={(e) => setPreferences({ ...preferences, startLocation: e.target.value })}
                    placeholder="e.g., New York"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <div className="mt-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3"
                    value={preferences.destination}
                    onChange={(e) => setPreferences({ ...preferences, destination: e.target.value })}
                    placeholder="e.g., Paris"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setStep(1)}
                className="mt-4 w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="mt-4 w-1/2 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Purpose of Trip</label>
                <div className="mt-1 relative">
                  <Heart className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3"
                    value={preferences.purpose}
                    onChange={(e) => setPreferences({ ...preferences, purpose: e.target.value })}
                  >
                    <option value="">Select purpose</option>
                    <option value="leisure">Leisure</option>
                    <option value="business">Business</option>
                    <option value="adventure">Adventure</option>
                    <option value="cultural">Cultural Experience</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Dietary Preferences</label>
                <div className="mt-1 relative">
                  <Utensils className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    multiple
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3"
                    value={preferences.dietaryPreferences}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      dietaryPreferences: Array.from(e.target.selectedOptions, option => option.value)
                    })}
                  >
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="halal">Halal</option>
                    <option value="kosher">Kosher</option>
                    <option value="none">No Restrictions</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobility Level</label>
                <div className="mt-1 relative">
                  <Walking className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3"
                    value={preferences.mobilityLevel}
                    onChange={(e) => setPreferences({ ...preferences, mobilityLevel: e.target.value })}
                  >
                    <option value="">Select mobility level</option>
                    <option value="high">High - Long walks, stairs no problem</option>
                    <option value="moderate">Moderate - Some walking ok</option>
                    <option value="low">Low - Minimal walking preferred</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Accommodation Type</label>
                <div className="mt-1 relative">
                  <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3"
                    value={preferences.accommodationType}
                    onChange={(e) => setPreferences({ ...preferences, accommodationType: e.target.value })}
                  >
                    <option value="">Select accommodation type</option>
                    <option value="luxury">Luxury Hotel</option>
                    <option value="midrange">Mid-range Hotel</option>
                    <option value="budget">Budget Hotel/Hostel</option>
                    <option value="apartment">Apartment/Vacation Rental</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setStep(2)}
                className="mt-4 w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="mt-4 w-1/2 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Generate Itinerary
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex items-center ${step >= stepNumber ? 'text-indigo-600' : 'text-gray-400'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                  ${step >= stepNumber ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'}`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`h-1 w-16 ${
                    step > stepNumber ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {renderStep()}
    </div>
  );
}