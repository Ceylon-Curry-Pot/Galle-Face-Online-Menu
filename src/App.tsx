import { useState, useEffect, useMemo } from 'react';
import { MenuCard } from './components/MenuCard';
import { MENU_DATA, MENU_TITLE, MENU_SUBTITLE } from './data/menu';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return MENU_DATA;
    
    const query = searchQuery.toLowerCase().trim();
    return MENU_DATA.filter(category => {
      // Match category name
      if (category.category.toLowerCase().includes(query)) return true;
      // Match any item label
      return category.items.some(item => 
        item.label.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="app">
      {/* Sticky Header */}
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <h1 className="header__title">{MENU_TITLE}</h1>
        <p className="header__subtitle">{MENU_SUBTITLE}</p>
      </header>

      {/* Info Strip */}
      <div className="info-strip">
        <span className="info-strip__text">🍽️ Tap a card to view options</span>
        <span className="info-strip__divider">•</span>
        <span className="info-strip__text">Prices as listed (LKR)</span>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search menu..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search menu items"
        />
        {searchQuery && (
          <button 
            className="search-clear"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Menu Grid */}
      <main className="menu-grid">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MenuCard key={index} category={category} />
          ))
        ) : (
          <div className="no-results">
            <p>No items found for "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')}>Clear search</button>
          </div>
        )}
      </main>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Ceylon Curry Pot</p>
      </footer>
    </div>
  );
}

export default App;
