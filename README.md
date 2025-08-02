# Interactive Pricing Component

A modern, responsive pricing component built with vanilla HTML, CSS, and JavaScript. This project features an interactive slider for selecting page view tiers and a toggle for monthly/yearly billing with dynamic pricing calculations

![Design preview for the Interactive pricing component](./design/desktop-preview.jpg)


## 🎯 Overview

This interactive pricing component was developed as part of a Frontend Mentor challenge. The component allows users to select different pricing tiers through an interactive slider and toggle between monthly and yearly billing options with automatic discount calculations.

### The Challenge

Users should be able to:

- ✅ View the optimal layout for the app depending on their device's screen size
- ✅ See hover states for all interactive elements on the page
- ✅ Use the slider and toggle to see prices for different page view numbers
- ✅ Experience smooth animations and transitions
- ✅ Navigate the component using keyboard controls

## ✨ Features

### Core Functionality
- **Interactive Slider**: Smooth range slider with 5 pricing tiers
- **Dynamic Pricing**: Real-time price updates based on selected tier
- **Billing Toggle**: Switch between monthly and yearly billing
- **Automatic Discounts**: 25% discount applied for yearly billing
- **Responsive Design**: Optimized for mobile (375px) and desktop (1440px)

### User Experience
- **Smooth Animations**: CSS transitions for all interactive elements
- **Hover Effects**: Visual feedback on all clickable elements
- **Custom Styling**: Branded slider with custom thumb design
- **Accessibility**: Keyboard navigation and screen reader support

### Pricing Tiers
| Page Views | Monthly Price | Yearly Price (25% off) |
|------------|---------------|------------------------|
| 10K        | $8.00         | $6.00                  |
| 50K        | $12.00        | $9.00                  |
| 100K       | $16.00        | $12.00                 |
| 500K       | $24.00        | $18.00                 |
| 1M         | $36.00        | $27.00                 |

## 🛠 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and custom properties
- **Vanilla JavaScript**: Interactive functionality and DOM manipulation
- **Google Fonts**: Manrope font family (600, 800 weights)
- **SVG Assets**: Scalable icons and background patterns

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayokanmi-Adejola/interactive-pricing-component.git
   ```

2. **Navigate to project directory**
   ```bash
   cd interactive-pricing-component
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server for development
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🎮 Usage

1. **Adjust Pricing Tier**: Use the slider to select different page view amounts
2. **Toggle Billing Period**: Click the toggle switch to change between monthly and yearly billing
3. **View Pricing**: Watch as prices update dynamically based on your selections
4. **Responsive Testing**: Resize your browser to see the mobile-optimized layout

## 📁 Project Structure

```
interactive-pricing-component/
├── index.html              # Main HTML structure
├── style.css              # Complete styling and responsive design
├── script.js              # Interactive functionality
├── README.md              # Project documentation
├── design/                # Design reference files
│   ├── desktop-design.jpg
│   ├── mobile-design.jpg
│   └── active-states.jpg
├── images/                # SVG assets and icons
│   ├── bg-pattern.svg
│   ├── pattern-circles.svg
│   ├── icon-check.svg
│   ├── icon-slider.svg
│   └── favicon-32x32.png
└── style-guide.md         # Design system specifications
```

## 🎨 Design Specifications

### Color Palette
- **Primary Colors**:
  - Soft Cyan (Slider Bar): `hsl(174, 77%, 80%)`
  - Strong Cyan (Slider Background): `hsl(174, 86%, 45%)`
  - Light Red (Discount Text): `hsl(15, 100%, 70%)`
  - Pale Blue (CTA Text): `hsl(226, 100%, 87%)`

- **Neutral Colors**:
  - White (Component Background): `hsl(0, 0%, 100%)`
  - Very Pale Blue (Main Background): `hsl(230, 100%, 99%)`
  - Light Grayish Blue (Empty Slider): `hsl(224, 65%, 95%)`
  - Grayish Blue (Text): `hsl(225, 20%, 60%)`
  - Dark Desaturated Blue (Text & CTA): `hsl(227, 35%, 25%)`

### Typography
- **Font Family**: Manrope
- **Weights**: 600 (Semi-bold), 800 (Extra-bold)
- **Base Font Size**: 15px

### Responsive Breakpoints
- **Mobile**: 375px and up
- **Desktop**: 768px and up

## 🔧 Development Process

### 1. Planning & Analysis
- Analyzed design files and requirements
- Created component structure and layout plan
- Identified interactive elements and functionality needs

### 2. HTML Structure
- Built semantic HTML foundation
- Implemented proper accessibility attributes
- Organized content into logical sections

### 3. CSS Styling
- Applied mobile-first responsive design approach
- Created custom slider styling with cross-browser compatibility
- Implemented smooth animations and hover effects
- Used CSS custom properties for maintainable code

### 4. JavaScript Functionality
- Developed pricing calculation logic
- Implemented slider and toggle event handlers
- Added dynamic content updates
- Created smooth slider background progress indicator

### 5. Testing & Optimization
- Cross-browser compatibility testing
- Responsive design validation
- Accessibility testing with keyboard navigation
- Performance optimization

## 💡 Key Learnings

### Technical Skills Developed
- **Custom Range Slider Styling**: Learned to create cross-browser compatible custom slider designs
- **Dynamic Pricing Logic**: Implemented real-time calculations with percentage discounts
- **CSS Animations**: Created smooth transitions and hover effects for better UX
- **Responsive Design**: Mastered mobile-first approach with flexible layouts

### Code Highlights

**Custom Slider Styling**:
```css
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: hsl(174, 86%, 45%);
  background-image: url('./images/icon-slider.svg');
  box-shadow: 0 15px 30px rgba(0, 255, 231, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
}
```

**Dynamic Pricing Calculation**:
```javascript
function updatePricing() {
  const sliderValue = parseInt(slider.value);
  const currentData = pricingData[sliderValue];
  const isYearly = billingToggle.checked;

  let price = currentData.price;
  if (isYearly) {
    price = price * 0.75; // 25% discount
  }

  priceElement.textContent = `$${price.toFixed(2)}`;
}
```

**Progressive Slider Background**:
```javascript
function updateSliderBackground() {
  const percentage = (sliderValue / slider.max) * 100;
  slider.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) ${percentage}%,
    hsl(224, 65%, 95%) ${percentage}%)`;
}
```

## 🚀 Future Enhancements

### Planned Features
- [ ] **Animation Library Integration**: Add more sophisticated animations
- [ ] **Theme Switching**: Dark/light mode toggle
- [ ] **Currency Selection**: Multiple currency options
- [ ] **Plan Comparison**: Side-by-side plan comparison view
- [ ] **Analytics Integration**: Usage tracking and insights

### Technical Improvements
- [ ] **TypeScript Migration**: Add type safety
- [ ] **CSS-in-JS**: Consider styled-components for better maintainability
- [ ] **Testing Suite**: Unit and integration tests
- [ ] **Performance Monitoring**: Core Web Vitals optimization
- [ ] **PWA Features**: Offline functionality and app-like experience


### Development Setup
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

- Frontend Mentor: [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)


## 🙏 Acknowledgments

- **Frontend Mentor** for providing the design challenge and specifications
- **Google Fonts** for the beautiful Manrope typography
- **The Frontend Community** for inspiration and best practices
- **MDN Web Docs** for comprehensive web development documentation
