
export interface Tour {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  tags: string[];
  itinerary?: string[];
}

export interface Activity {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: {
    week: string;
    weekend: string;
  };
}
