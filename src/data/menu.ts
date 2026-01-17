import roastPaanImg from '../assets/Menu-Images/Roast-Paan.jpeg';
import ChiKottuImg from '../assets/Menu-Images/Kottu-Chicken.jpeg';
import CheeseKottuImg from '../assets/Menu-Images/CheeseKottu-Chicken.jpeg';
import FriedRiceImg from '../assets/Menu-Images/FriedRice-Sea.jpeg';
import GarlicRiceImg from '../assets/Menu-Images/Garlic-Rice.jpeg';

export interface MenuItem {
  label: string;
  price: number;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
  isSpecial?: boolean;
  imageUrl?: string;
}

export const MENU_DATA: MenuCategory[] = [
  {
    category: "ROAST PAAN KOTTU",
    imageUrl: roastPaanImg,
    items: [{ label: "PORK", price: 800 }],
    isSpecial: true
  },
  {
    category: "GARLIC RICE Combo",
    imageUrl: GarlicRiceImg,
    items: [{ label: "GARLIC RICE PORK & 1 FREE EGB(250ML)", price: 1200 }],
    isSpecial: true
  },
  {
    category: "KOTTU",
    imageUrl: ChiKottuImg,
    items: [
      { label: "VEG", price: 400 },
      { label: "EGG", price: 400 },
      { label: "CHICKEN", price: 500 },
      { label: "PORK", price: 900 }
    ]
  },
  {
    category: "CHEESE KOTTU",
    imageUrl: CheeseKottuImg,
    items: [
      { label: "VEG", price: 800 },
      { label: "EGG", price: 800 },
      { label: "CHICKEN", price: 900 }
    ]
  },
  {
    category: "FRIED RICE",
    imageUrl: FriedRiceImg,
    items: [
      { label: "VEG", price: 400 },
      { label: "EGG", price: 400 },
      { label: "CHICKEN", price: 500 },
      { label: "SEA", price: 800 }
    ]
  },
  {
    category: "ADD ON",
    items: [
      { label: "CHICKEN WHOLE LEG", price: 800 },
      { label: "JUMBO SAUSAGE", price: 200 },
      { label: "EGG", price: 100 }
    ]
  }
];

export const MENU_TITLE = "Buddy Portion Meals Menu";
export const MENU_SUBTITLE = "EGB Kema Kalawa • Galle Face 2026";
