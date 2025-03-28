import React from 'react';
import { Itinerary, Activity } from '../types';
import { MapPin, Clock, DollarSign } from 'lucide-react';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
  onReset: () => void;
}

export function ItineraryDisplay({ itinerary, onReset }: ItineraryDisplayProps) {
  const getActivityIcon = (activity: Activity) => {
    switch (activity.type) {
      case 'attraction':
        return <MapPin className="h-5 w-5 text-indigo-500" />;
      case 'food':
        return <DollarSign className="h-5 w-5 text-green-500" />;
      case 'accommodation':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-indigo-600 px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Your Travel Itinerary</h2>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-white text-indigo-600 rounded-md hover:bg-indigo-50"
          >
            Create New Plan
          </button>
        </div>
        <div className="mt-2 text-indigo-100">
          <p>
            {itinerary.preferences.duration} days in {itinerary.preferences.destination}
          </p>
          <p className="text-sm">
            Budget: {itinerary.preferences.budget} | Purpose: {itinerary.preferences.purpose}
          </p>
        </div>
      </div>

      <div className="p-6">
        {itinerary.days.map((day) => (
          <div key={day.day} className="mb-8 last:mb-0">
            <h3 className="text-xl font-semibold mb-4">Day {day.day}</h3>
            <div className="space-y-4">
              {day.activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="mr-4 mt-1">{getActivityIcon(activity)}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{activity.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="mr-4">{activity.duration}</span>
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="mr-4">{activity.cost}</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Estimated Total Cost</h4>
              <p className="text-gray-600">{itinerary.totalCost}</p>
            </div>
            <button
              onClick={onReset}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Plan Another Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}