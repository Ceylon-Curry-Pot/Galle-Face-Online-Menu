import type { MenuCategory } from '../data/menu';
import './MenuCard.css';

interface MenuCardProps {
  category: MenuCategory;
}

export function MenuCard({ category }: MenuCardProps) {
  return (
    <article className="menu-card">
      <h2 className="menu-card__title">{category.category}</h2>
      <ul className="menu-card__list">
        {category.items.map((item, index) => (
          <li key={index} className="menu-card__item">
            <span className="menu-card__label">{item.label}</span>
            <span className="menu-card__price">{`Rs. ${item.price}.00`}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
