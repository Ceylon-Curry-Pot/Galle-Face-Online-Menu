import type { MenuCategory } from '../data/menu';
import './MenuCard.css';

export const MenuCard: React.FC<{ category: MenuCategory }> = ({ category }) => {
  const { category: title, items, isSpecial, imageUrl } = category;
  return (
    <article className={`menu-card ${isSpecial ? 'menu-card--special' : ''}`}>
      {imageUrl && (
        <img
          className="menu-card__image"
          src={imageUrl}
          alt={`${title} menu`}
          loading="lazy"
        />
      )}
      {isSpecial && <span className="menu-card__badge">⭐ Special</span>}
      <h2 className="menu-card__title">{title}</h2>
      <ul className="menu-card__list">
        {items.map((item, index) => (
          <li key={index} className="menu-card__item">
            <span className="menu-card__label">{item.label}</span>
            <span className="menu-card__price">{`Rs. ${item.price}.00`}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
