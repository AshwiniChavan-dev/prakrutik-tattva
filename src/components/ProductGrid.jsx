import React, { useMemo } from "react";
import { PackageSearch, RefreshCw } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  activeCategory,
  activeSubcategory,
  searchQuery,
  sortBy,
  onResetFilters
}) {
  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter(p => p.category === activeCategory);
    }

    // Subcategory filter
    if (activeSubcategory && activeSubcategory !== "All" && activeSubcategory !== "All Oils" && activeSubcategory !== "All Spices" && activeSubcategory !== "All Laddoos") {
      result = result.filter(p => p.subcategory === activeSubcategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => {
        const inName = p.name.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inTagline = p.tagline?.toLowerCase().includes(q) || false;
        const inCat = p.category.toLowerCase().includes(q);
        const inSubcat = p.subcategory?.toLowerCase().includes(q) || false;
        return inName || inDesc || inTagline || inCat || inSubcat;
      });
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === "price-asc") {
        const priceA = a.packSizes[0]?.price ?? 999999;
        const priceB = b.packSizes[0]?.price ?? 999999;
        return priceA - priceB;
      }
      if (sortBy === "price-desc") {
        const priceA = a.packSizes[0]?.price ?? -1;
        const priceB = b.packSizes[0]?.price ?? -1;
        return priceB - priceA;
      }
      // Default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });

    return result;
  }, [products, activeCategory, activeSubcategory, searchQuery, sortBy]);

  return (
    <div className="product-grid-section">
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-products-state">
          <div className="no-products-icon">
            <PackageSearch size={48} />
          </div>
          <h3 className="no-products-title">No matching products found</h3>
          <p className="no-products-text">
            We couldn't find any products matching your current search or filter criteria. 
            Try searching with broader terms or reset your filters.
          </p>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={onResetFilters}
          >
            <RefreshCw size={16} />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
