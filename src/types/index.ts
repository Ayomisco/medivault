export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  role: 'patient' | 'provider' | 'admin';
}

export interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType;
  items?: Omit<SidebarItem, 'items'>[];
}

export interface EmergencyProfile {
  allergies: string[];
  medications: string[];
  conditions: string[];
  bloodType: string;
  emergencyContacts: {
    name: string;
    relationship: string;
    phone: string;
  }[];
  advanceDirectives: boolean;
  preferredHospital?: string;
}