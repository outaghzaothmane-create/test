# Minimal Premium Hero Section

A beautiful, soft-rounded hero section component with premium animations and glassmorphism effects.

## ✨ Features

- **Soft Rounded Design** - All elements use soft border-radius (rounded-2xl, rounded-3xl, rounded-full)
- **Premium Aesthetics** - Glassmorphism with backdrop blur effects
- **Subtle Animations** - Smooth fade-in, float, and blob animations
- **Minimal Color Palette** - Soft pastels with gray scale
- **Responsive Layout** - Adapts beautifully across all screen sizes
- **Interactive Elements** - Hover effects on buttons with smooth transitions

## 🎨 Design Elements

### Visual Components
1. **Animated Badge** - Pulsing green dot with "Now available" label
2. **Large Typography** - Bold headlines with gradient text effect
3. **Soft CTAs** - Rounded-full buttons with hover animations
4. **Social Proof** - Company logos with subtle opacity
5. **Floating Cards** - Glassmorphic cards with float animation
6. **Blob Background** - Soft colored blobs with slow animation
7. **Scroll Indicator** - Animated down arrow at bottom

### Color Scheme
- Background: Soft gradients (gray-50 to white)
- Blobs: Pastel colors (purple-100, yellow-100, pink-100)
- Text: Gray scale (gray-900, gray-600, gray-400)
- Accents: Emerald for the pulse indicator

## 🚀 Usage

### Option 1: Standalone Hero Component

```jsx
import HeroSection from './components/HeroSection.jsx';
import './components/animations.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <HeroSection />
    </div>
  );
}
```

### Option 2: Use the Demo File

Simply update `main.jsx` to import `HeroDemo`:

```jsx
import HeroDemo from './HeroDemo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroDemo />
  </React.StrictMode>,
)
```

Then run:
```bash
npm run dev
```

## 📁 File Structure

```
/components
  ├── HeroSection.jsx      # Main hero component
  └── animations.css       # Custom animations
HeroDemo.jsx              # Demo wrapper
```

## 🎭 Customization

### Change Colors

Edit the gradient text:
```jsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
  experiences
</span>
```

Edit blob colors:
```jsx
<div className="... bg-purple-100 ..."></div>  // Change to any color
<div className="... bg-yellow-100 ..."></div>
<div className="... bg-pink-100 ..."></div>
```

### Change Text Content

All text is in `HeroSection.jsx`:
- **Badge**: Line 16 - "Now available"
- **Headline**: Lines 22-27 - "Create beautiful experiences"
- **Subheading**: Lines 33-37
- **Button Text**: Lines 42 & 48
- **Social Proof**: Lines 57-65

### Adjust Animations

In `animations.css`:
- **Speed**: Change duration values (e.g., `0.8s`, `6s`, `7s`)
- **Distance**: Modify `translateY()` and `translateX()` values
- **Timing**: Adjust animation delays (`.animation-delay-200`, etc.)

### Button Styles

Primary button (dark):
```jsx
className="... bg-gray-900 text-white rounded-full ..."
```

Secondary button (glass):
```jsx
className="... bg-white/60 backdrop-blur-sm border-2 ..."
```

## 🎬 Animation Details

- **Fade In Up**: Elements appear from bottom with fade effect
- **Float**: Floating cards move up and down slowly
- **Blob**: Background blobs morph and move organically
- **Pulse**: Badge indicator has a pulsing ring effect
- **Bounce**: Scroll indicator bounces continuously

## 💡 Tips

1. **Performance**: The backdrop-blur effect may impact performance on older devices
2. **Accessibility**: Ensure sufficient color contrast for text elements
3. **Mobile**: Floating cards are hidden on mobile (hidden lg:block)
4. **Loading**: Animations start on page load with staggered delays

## 🎯 Best For

- SaaS landing pages
- Product launches
- Portfolio sites
- Agency websites
- App landing pages
- Startup homepages

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- iOS Safari 14+

Note: backdrop-filter requires modern browsers

