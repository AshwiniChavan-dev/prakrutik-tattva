/**
 * WhatsApp Helper Utilities for Prakrutik Tattva
 */

import { siteConfig } from "../config/siteConfig";

/**
 * Clean phone number to digits only for wa.me URL
 */
export function sanitizeWhatsAppNumber(number) {
  if (!number || number === "YOUR_WHATSAPP_NUMBER") {
    return "YOUR_WHATSAPP_NUMBER";
  }
  return number.replace(/[^0-9]/g, "");
}

/**
 * Format currency in Indian Rupees (INR)
 */
export function formatCurrency(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "Price on request";
  }
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

/**
 * Build WhatsApp click-to-chat URL for full shopping cart enquiry
 */
export function buildCartWhatsAppUrl({
  items,
  customerName = "",
  deliveryAddress = "",
  notes = ""
}) {
  const cleanNumber = sanitizeWhatsAppNumber(siteConfig.whatsappNumber);

  // Group and format product lines
  let productLines = "";
  let subtotalCalculated = 0;
  let hasUnpricedItems = false;

  items.forEach((item, index) => {
    const itemPriceText = item.price !== null && item.price !== undefined
      ? formatCurrency(item.price * item.quantity) + ` (${formatCurrency(item.price)} each)`
      : "Price on request";

    if (item.price !== null && item.price !== undefined) {
      subtotalCalculated += item.price * item.quantity;
    } else {
      hasUnpricedItems = true;
    }

    productLines += `${index + 1}. ${item.name}\n   Pack size: ${item.packSize}\n   Quantity: ${item.quantity}\n   Price: ${itemPriceText}\n\n`;
  });

  let subtotalText = "";
  if (subtotalCalculated > 0 && hasUnpricedItems) {
    subtotalText = `${formatCurrency(subtotalCalculated)} + items with price on request`;
  } else if (subtotalCalculated > 0 && !hasUnpricedItems) {
    subtotalText = formatCurrency(subtotalCalculated);
  } else {
    subtotalText = "To be confirmed on enquiry";
  }

  const message = 
`Hello Prakrutik Tattva!

I would like to enquire about placing an order.

My selected products are:

${productLines.trim()}

Subtotal, if available: ${subtotalText}
Customer name: ${customerName.trim() || "[Not specified]"}
Delivery address: ${deliveryAddress.trim() || "[Not specified]"}
Additional notes: ${notes.trim() || "None"}

Please confirm availability, final pricing, delivery charges, and delivery time.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Build WhatsApp click-to-chat URL for an individual product enquiry
 */
export function buildSingleProductWhatsAppUrl({
  product,
  packSize,
  price,
  quantity = 1
}) {
  const cleanNumber = sanitizeWhatsAppNumber(siteConfig.whatsappNumber);

  const priceText = price !== null && price !== undefined
    ? formatCurrency(price * quantity) + (quantity > 1 ? ` (${formatCurrency(price)} each)` : "")
    : "Price on request";

  const message =
`Hello Prakrutik Tattva!

I would like to enquire about placing an order.

My selected products are:

1. ${product.name}
   Pack size: ${packSize}
   Quantity: ${quantity}
   Price, if configured: ${priceText}

Subtotal, if available: ${price !== null && price !== undefined ? formatCurrency(price * quantity) : "To be confirmed"}
Customer name: [Will provide during chat]
Delivery address: [Will provide during chat]
Additional notes: Please share availability and delivery charges to my location.

Please confirm availability, final pricing, delivery charges, and delivery time.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Build general WhatsApp inquiry URL (Hero / Contact / Floating Button)
 */
export function buildGeneralWhatsAppUrl(customGreeting = "") {
  const cleanNumber = sanitizeWhatsAppNumber(siteConfig.whatsappNumber);

  const message = customGreeting ||
`Hello Prakrutik Tattva!

I am interested in your natural food products, cold-pressed oils, seeds, dry fruits, and spices.

Please share your latest product catalogue and availability.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
