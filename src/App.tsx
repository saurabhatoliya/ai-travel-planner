import React, { useState } from 'react';
import { PreferencesForm } from './components/PreferencesForm';
import { ItineraryDisplay } from './components/ItineraryDisplay';
import { TravelPreferences, Itinerary } from './types';
import { Plane } from 'lucide-react';

// This is a mock function to simulate AI response
const generateItinerary = (preferences: TravelPreferences): Itinerary => {
  // In a real implementation, this would call your AI service
  return {
    preferences,
    days: [
      {
        day: 1,
        activities: [
          {
            name: 'Check-in at Hotel',
            description: 'Arrive and settle in at your accommodation',
            duration: '1 hour',
            cost: '$200',
            location: 'City Center',
            type: 'accommodation'
          },
          {
            name: 'Local Food Tour',
            description: 'Experience local cuisine with a professional guide',
            duration: '3 hours',
            cost: '$75',
            location: 'Historic District',
            type: 'food'
          }
        ]
      },
      {
        day: 2,
        activities: [
          {
            name: 'City Landmarks Tour',
            description: 'Visit the most iconic spots in the city',
            duration: '4 hours',
            cost: '$50',
            location: 'Various Locations',
            type: 'attraction'
          }
        ]
      }
    ],
    totalCost: '$325'
  };
};

function App() {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  const handlePreferencesSubmit = (preferences: TravelPreferences) => {
    const generatedItinerary = generateItinerary(preferences);
    setItinerary(generatedItinerary);
  };

  const handleReset = () => {
    setItinerary(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">AI Travel Planner</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {itinerary ? (
          <ItineraryDisplay itinerary={itinerary} onReset={handleReset} />
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Plan Your Perfect Trip</h2>
              <p className="mt-2 text-gray-600">
                Tell us about your preferences and let AI create a personalized itinerary for you
              </p>
            </div>
            <PreferencesForm onSubmit={handlePreferencesSubmit} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;