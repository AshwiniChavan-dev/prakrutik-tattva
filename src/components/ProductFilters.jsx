import React from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { CATEGORIES } from "../data/categories";

export default function ProductFilters({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  activeSubcategory,
  onSubcategoryChange,
  sortBy,
  onSortChange,
  totalResults
}) {
  const currentCategoryObj = CATEGORIES.find(c => c.id === activeCategory);
  const subcategories = currentCategoryObj?.subcategories || [];

  return (
    <div className="product-filters-wrapper">
      
      {/* Top Filter Bar: Search & Sort */}
      <div className="filter-controls-row">
        
        {/* Search Input */}
        <div className="search-input-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text"
            placeholder="Search oils, dry fruits, seeds, turmeric, laddoo..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            aria-label="Search Products"
          />
          {searchQuery && (
            <button 
              type="button"
              className="search-clear-btn"
              onClick={() => onSearchChange("")}
              aria-label="Clear Search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="sort-box">
          <SlidersHorizontal size={16} className="sort-icon" />
          <select 
            value={sortBy} 
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
            aria-label="Sort Products"
          >
            <option value="featured">Featured / Recommended</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* Main Category Tabs */}
      <div className="category-tabs-container">
        <button
          type="button"
          className={`category-tab-btn ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => {
            onCategoryChange("all");
            onSubcategoryChange("All");
          }}
        >
          All Products
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => {
              onCategoryChange(cat.id);
              onSubcategoryChange("All");
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Subcategory Pills (if category has multiple subcategories) */}
      {subcategories.length > 1 && (
        <div className="subcategory-pills-row">
          <span className="subcat-label">Filter:</span>
          {subcategories.map((subcat) => (
            <button
              key={subcat}
              type="button"
              className={`subcat-pill-btn ${activeSubcategory === subcat ? "active" : ""}`}
              onClick={() => onSubcategoryChange(subcat)}
            >
              {subcat}
            </button>
          ))}
        </div>
      )}

      {/* Results Count Line */}
      <div className="filter-summary-row">
        <span className="results-count-text">
          Showing <strong>{totalResults}</strong> {totalResults === 1 ? "product" : "products"}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>
        {(searchQuery || activeCategory !== "all" || activeSubcategory !== "All") && (
          <button 
            type="button"
            className="reset-filters-btn"
            onClick={() => {
              onSearchChange("");
              onCategoryChange("all");
              onSubcategoryChange("All");
            }}
          >
            Reset all filters
          </button>
        )}
      </div>

    </div>
  );
}
