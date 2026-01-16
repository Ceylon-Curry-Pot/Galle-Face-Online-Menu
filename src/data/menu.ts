export interface MenuItem {
  label: string;
  price: number;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    category: "KOTTU",
    items: [
      { label: "VEG", price: 400 },
      { label: "EGG", price: 400 },
      { label: "CHI", price: 500 },
      { label: "POK", price: 900 }
    ]
  },
  {
    category: "CHEESE KOTTU",
    items: [
      { label: "VEG", price: 800 },
      { label: "EGG", price: 800 },
      { label: "CHI", price: 900 }
    ]
  },
  {
    category: "FRIED RICE",
    items: [
      { label: "VEG", price: 400 },
      { label: "EGG", price: 400 },
      { label: "CHI", price: 500 },
      { label: "SEA", price: 800 }
    ]
  },
  {
    category: "ROAST PAAN KOTTU",
    items: [{ label: "POK", price: 900 }]
  },
  {
    category: "GARLIC RICE",
    items: [{ label: "POK", price: 1300 }]
  },
  {
    category: "ADD ON",
    items: [
      { label: "CH LG", price: 800 },
      { label: "JU SA", price: 200 },
      { label: "EGG", price: 100 }
    ]
  }
];

export const MENU_TITLE = "Buddy Potion Meals Menu";
export const MENU_SUBTITLE = "EGB Kema Kalawa • Galle Face 2026";
