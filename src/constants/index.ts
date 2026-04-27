import { 
  Stethoscope, 
  Dna, 
  CircleOff, 
  Smile, 
  Sparkles, 
  Microscope,
  ShieldCheck,
  Star,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'scaling-root-planing',
    title: 'Scaling and Root Planing',
    description: 'We are excited to meet you and provide the best dental care for your family.',
    icon: 'Stethoscope'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'We are excited to meet you and provide the best dental care for your family.',
    icon: 'Smile'
  },
  {
    id: 'invisalign',
    title: 'Invisalign & ClearCorrect',
    description: 'We are excited to meet you and provide the best dental care for your family.',
    icon: 'ShieldCheck'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'We are excited to meet you and provide the best dental care for your family.',
    icon: 'Sparkles'
  }
];

export const WHY_CHOOSE_US = [
  { id: 1, title: 'Experienced Doctor', description: 'The goal of our clinic is to provide friendly, caring dentistry and the.', icon: 'Users' },
  { id: 2, title: 'Personalized Care', description: 'The goal of our clinic is to provide friendly, caring dentistry and the.', icon: 'ShieldCheck' },
  { id: 3, title: 'Flexible Payment Options', description: 'The goal of our clinic is to provide friendly, caring dentistry and the.', icon: 'CircleOff' },
  { id: 4, title: 'Emergency Services', description: 'The goal of our clinic is to provide friendly, caring dentistry and the.', icon: 'Clock' },
  { id: 5, title: 'Positive Patient Reviews', description: 'The goal of our clinic is to provide friendly, caring dentistry and the.', icon: 'Star' },
  { id: 6, title: 'Latest Technology', description: 'The goal of our clinic is to provide friendly, caring dentistry and the.', icon: 'Microscope' },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'John Peterson',
    role: 'ORTHODONTICS',
    content: 'I finally have the straight teeth I always wanted. The process was way faster than I expected! The team was incredibly supportive throughout.',
    avatar: 'https://i.pravatar.cc/100?u=john',
    rating: 5
  },
  {
    id: '2',
    name: 'Emma Watson',
    role: 'NEW PATIENT',
    content: 'Hands down the best dental experience I have ever had. The office is beautiful and the staff is wonderful. I actually look forward to my visits!',
    avatar: 'https://i.pravatar.cc/100?u=emma',
    rating: 5
  }
];

export const TEAM = [
  {
    id: '1',
    name: 'Dr. A. Viviana Santos',
    specialty: 'MEDICAL DIRECTOR',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Every smile tells a story. Our mission is to make sure yours is one of health, confidence, and joy.',
    experience: '25+',
    patients: '18k+'
  }
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Top 5 Tips for a Brighter Smile',
    date: 'March 15, 2024',
    excerpt: 'Discover easy and effective ways to keep your teeth sparkling white through daily habits and professional care.',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=600&h=400',
    category: 'Dental Tips'
  },
  {
    id: '2',
    title: 'The Benefits of Modern Invisalign',
    date: 'March 10, 2024',
    excerpt: 'Thinking about straightening your teeth? Learn why Invisalign is the preferred choice for adults seeking a discreet solution.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600&h=400',
    category: 'Orthodontics'
  },
  {
    id: '3',
    title: 'How Often Should You Visit the Dentist?',
    date: 'March 05, 2024',
    excerpt: 'Regular checkups are key to preventing oral health issues. We break down the recommended frequency for different patients.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600&h=400',
    category: 'Prevention'
  }
];
