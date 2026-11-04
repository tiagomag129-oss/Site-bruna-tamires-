export interface GalleryItem {
  id: string;
  title: string;
  category: 'tattoo' | 'furo' | 'sobrancelhas';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  isRealWorkByBruna: boolean;
  whatsappMessage: string;
}

export interface ReviewData {
  rating: number;
  totalReviews: number;
  highlight: string;
  googleMapsUrl: string;
}

export interface BusinessInfo {
  name: string;
  profession: string;
  rating: number;
  totalReviews: number;
  address: string;
  city: string;
  state: string;
  cep: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappLinks: {
    general: string;
    tattoo: string;
    furo: string;
    sobrancelhas: string;
  };
}
