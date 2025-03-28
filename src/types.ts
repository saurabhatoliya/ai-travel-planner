export interface TravelPreferences {
  budget: string;
  duration: number;
  startLocation: string;
  destination: string;
  purpose: string;
  dietaryPreferences: string[];
  interests: string[];
  mobilityLevel: string;
  accommodationType: string;
}

export interface Activity {
  name: string;
  description: string;
  duration: string;
  cost: string;
  location: string;
  type: 'attraction' | 'food' | 'accommodation' | 'transport';
}

export interface DayPlan {
  day: number;
  activities: Activity[];
}

export interface Itinerary {
  preferences: TravelPreferences;
  days: DayPlan[];
  totalCost: string;
}