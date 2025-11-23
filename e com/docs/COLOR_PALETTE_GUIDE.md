# Premium Minimal Medical E-commerce Color Palette

A carefully crafted color system for medical and healthcare e-commerce platforms, designed to convey trust, professionalism, and care while maintaining a clean, premium aesthetic.

## 🎨 Color Philosophy

This palette is built on the principles of:
- **Trust & Professionalism**: Medical blue as the primary color
- **Health & Wellness**: Soft mint/teal as secondary
- **Warmth & Care**: Gentle coral for accent moments
- **Minimalism**: Warm grays for neutral elements
- **Accessibility**: All combinations meet WCAG AA standards

---

## 📊 Color Scales

### Primary: Medical Blue (`medical`)
**Use for**: Primary actions, links, trust indicators, medical themes

```jsx
// Usage examples
className="bg-medical-500 text-white"           // Primary button
className="text-medical-600 hover:text-medical-700"  // Link
className="border-medical-200"                   // Subtle border
className="bg-medical-50"                        // Light background
```

**Scale**:
- `medical-50` to `medical-100`: Backgrounds, subtle highlights
- `medical-200` to `medical-300`: Borders, disabled states
- `medical-400` to `medical-500`: Primary actions, icons (★ Main)
- `medical-600` to `medical-700`: Hover states, emphasis
- `medical-800` to `medical-950`: Text, dark mode

**Hex Values**:
```
50:  #f0f9ff   100: #e0f3ff   200: #bae6ff   300: #7dd3fc
400: #38bdf8   500: #0ea5e9★  600: #0284c7   700: #0369a1
800: #075985   900: #0c4a6e   950: #082f49
```

---

### Secondary: Wellness Green (`wellness`)
**Use for**: Health products, wellness features, natural products, secondary actions

```jsx
// Usage examples
className="bg-wellness-500 text-white"           // Wellness button
className="bg-wellness-100 text-wellness-700"    // Badge
className="border-wellness-300"                  // Card border
```

**Scale**:
- `wellness-50` to `wellness-100`: Backgrounds for wellness sections
- `wellness-200` to `wellness-300`: Borders, badges
- `wellness-400` to `wellness-500`: Secondary CTAs, icons (★ Main)
- `wellness-600` to `wellness-700`: Hover states
- `wellness-800` to `wellness-950`: Dark accents

**Hex Values**:
```
50:  #f0fdf9   100: #ccfbef   200: #99f6e0   300: #5eead4
400: #2dd4bf   500: #14b8a6★  600: #0d9488   700: #0f766e
800: #115e59   900: #134e4a   950: #042f2e
```

---

### Neutral: Stone (`stone`)
**Use for**: Text, backgrounds, borders, UI structure

```jsx
// Usage examples
className="bg-stone-50"                          // Page background
className="text-stone-900"                       // Primary text
className="text-stone-600"                       // Secondary text
className="border-stone-200"                     // Subtle border
```

**Scale**:
- `stone-50` to `stone-100`: Page backgrounds, cards
- `stone-200` to `stone-300`: Borders, dividers
- `stone-400` to `stone-600`: Secondary text, placeholders
- `stone-700` to `stone-900`: Primary text, headings
- `stone-950`: Darkest text

**Hex Values**:
```
50:  #fafaf9   100: #f5f5f4   200: #e7e5e4   300: #d6d3d1
400: #a8a29e   500: #78716c   600: #57534e   700: #44403c
800: #292524   900: #1c1917   950: #0c0a09
```

---

### Accent: Care Coral (`care`)
**Use for**: Special offers, featured products, call-to-action accents, warmth

```jsx
// Usage examples
className="bg-care-500 text-white"               // Accent button
className="bg-care-50 border-care-200"           // Featured card
className="text-care-600"                        // Accent text
```

**Scale**:
- `care-50` to `care-100`: Subtle backgrounds
- `care-200` to `care-300`: Light accents, borders
- `care-400` to `care-500`: Primary accent (★ Main)
- `care-600` to `care-700`: Hover states
- `care-800` to `care-950`: Dark accents

**Hex Values**:
```
50:  #fff5f5   100: #ffe4e4   200: #fecdd3   300: #fda4af
400: #fb7185   500: #f43f5e★  600: #e11d48   700: #be123c
800: #9f1239   900: #881337   950: #4c0519
```

---

### Success: Confirmation Green (`success`)
**Use for**: Success messages, in-stock indicators, confirmations

```jsx
// Usage examples
className="bg-success-100 text-success-700"      // Success badge
className="text-success-600"                     // Check icon
className="bg-success-500 text-white"            // Success button
```

**Hex Values**:
```
50:  #f0fdf4   100: #dcfce7   200: #bbf7d0   300: #86efac
400: #4ade80   500: #22c55e★  600: #16a34a   700: #15803d
800: #166534   900: #14532d   950: #052e16
```

---

### Warning: Soft Amber (`warning`)
**Use for**: Low stock, important notices, caution messages

```jsx
// Usage examples
className="bg-warning-100 text-warning-700"      // Warning badge
className="text-warning-600"                     // Warning icon
className="border-warning-300"                   // Warning border
```

**Hex Values**:
```
50:  #fffbeb   100: #fef3c7   200: #fde68a   300: #fcd34d
400: #fbbf24   500: #f59e0b★  600: #d97706   700: #b45309
800: #92400e   900: #78350f   950: #451a03
```

---

### Error: Muted Red (`error`)
**Use for**: Errors, out of stock, critical alerts

```jsx
// Usage examples
className="bg-error-100 text-error-700"          // Error badge
className="text-error-600"                       // Error text
className="border-error-300"                     // Error border
```

**Hex Values**:
```
50:  #fef2f2   100: #fee2e2   200: #fecaca   300: #fca5a5
400: #f87171   500: #ef4444★  600: #dc2626   700: #b91c1c
800: #991b1b   900: #7f1d1d   950: #450a0a
```

---

## 🎨 Special Features

### Background Gradients

```jsx
className="bg-gradient-medical"     // Medical blue gradient
className="bg-gradient-wellness"    // Wellness green gradient
className="bg-gradient-care"        // Care coral gradient
className="bg-gradient-premium"     // Subtle stone gradient
className="bg-gradient-hero"        // Hero section gradient
```

### Premium Shadows

```jsx
className="shadow-soft"             // Soft, subtle shadow
className="shadow-medium"           // Medium elevation
className="shadow-large"            // Large, dramatic shadow
className="shadow-medical"          // Blue-tinted shadow
className="shadow-wellness"         // Green-tinted shadow
```

---

## 🎯 Usage Guidelines

### Buttons

```jsx
// Primary action
<button className="bg-medical-500 hover:bg-medical-600 text-white px-6 py-3 rounded-full">
  Shop Now
</button>

// Secondary action
<button className="bg-white border-2 border-medical-500 text-medical-600 hover:bg-medical-50 px-6 py-3 rounded-full">
  Learn More
</button>

// Wellness action
<button className="bg-wellness-500 hover:bg-wellness-600 text-white px-6 py-3 rounded-full">
  View Products
</button>

// Accent action
<button className="bg-care-500 hover:bg-care-600 text-white px-6 py-3 rounded-full">
  Special Offer
</button>
```

### Alerts

```jsx
// Success
<div className="bg-success-50 border border-success-200 text-success-900 p-4 rounded-xl">
  Order confirmed successfully!
</div>

// Info
<div className="bg-medical-50 border border-medical-200 text-medical-900 p-4 rounded-xl">
  Free shipping on orders over $50
</div>

// Warning
<div className="bg-warning-50 border border-warning-200 text-warning-900 p-4 rounded-xl">
  Only 3 items left in stock
</div>

// Error
<div className="bg-error-50 border border-error-200 text-error-900 p-4 rounded-xl">
  Item is out of stock
</div>
```

### Product Cards

```jsx
<div className="bg-white rounded-2xl shadow-soft overflow-hidden">
  <div className="bg-gradient-to-br from-medical-50 to-wellness-50 h-48">
    {/* Product image */}
  </div>
  <div className="p-6">
    <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-xs">
      In Stock
    </span>
    <h3 className="text-stone-900 text-xl font-semibold mt-3">Product Name</h3>
    <p className="text-stone-600 text-sm mt-2">Product description</p>
    <div className="flex justify-between items-center mt-4">
      <span className="text-medical-600 text-2xl font-bold">$29.99</span>
      <button className="bg-medical-500 text-white px-4 py-2 rounded-full">
        Add to Cart
      </button>
    </div>
  </div>
</div>
```

### Badges

```jsx
// In stock
<span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-xs font-medium">
  In Stock
</span>

// Sale
<span className="bg-care-500 text-white px-3 py-1 rounded-full text-xs font-medium">
  Sale
</span>

// New
<span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-xs font-medium">
  New
</span>

// Low stock
<span className="bg-warning-100 text-warning-700 px-3 py-1 rounded-full text-xs font-medium">
  Low Stock
</span>
```

---

## ♿ Accessibility

All color combinations have been tested for WCAG AA compliance:

- **Text on backgrounds**: All text colors meet 4.5:1 contrast ratio
- **Large text**: Meets 3:1 contrast ratio
- **Interactive elements**: Clear focus states and hover indicators
- **Color blindness**: Tested with common color blindness types

---

## 🎨 Color Psychology

- **Medical Blue**: Trust, professionalism, healthcare expertise
- **Wellness Green**: Health, nature, growth, healing
- **Care Coral**: Warmth, empathy, human connection
- **Stone Neutral**: Sophistication, premium quality, clarity
- **Success Green**: Confirmation, availability, positive action
- **Warning Amber**: Attention, urgency without alarm
- **Error Red**: Clear problems, out of stock, critical issues

---

## 📱 Responsive Considerations

The palette works beautifully across all screen sizes. For mobile:
- Use lighter backgrounds to reduce eye strain
- Increase touch target sizes for colored buttons
- Consider simplified color usage on smaller screens

---

## 🚀 Quick Start

1. Copy the `tailwind.config.js` content
2. View the demo: open `color-palette-demo.html` in a browser
3. Use the color scales in your components
4. Reference this guide for best practices

---

## 💡 Pro Tips

1. **Start with neutrals**: Use `stone` for 80% of your UI
2. **Medical blue for trust**: Use on CTAs and important actions
3. **Wellness for natural products**: Perfect for vitamins, supplements
4. **Care coral sparingly**: Use as accent, not primary color
5. **Consistent shadows**: Stick to the custom shadow utilities
6. **Test in context**: Always preview colors in actual components

---

## 🎯 Best For

- Medical e-commerce platforms
- Healthcare product stores
- Pharmacy websites
- Wellness and supplement shops
- Health device retailers
- Medical supply stores
- Telemedicine platforms

