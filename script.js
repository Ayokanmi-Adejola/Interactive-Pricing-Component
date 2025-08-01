// Pricing data
const pricingData = [
  { pageviews: '10K', price: 8 },
  { pageviews: '50K', price: 12 },
  { pageviews: '100K', price: 16 },
  { pageviews: '500K', price: 24 },
  { pageviews: '1M', price: 36 }
];

// DOM elements
const slider = document.getElementById('priceSlider');
const pageviewsElement = document.querySelector('.pageviews');
const priceElement = document.querySelector('.price');
const billingToggle = document.getElementById('billingToggle');

// Initialize the component
function init() {
  updatePricing();
  updateSliderBackground();
  
  // Event listeners
  slider.addEventListener('input', handleSliderChange);
  billingToggle.addEventListener('change', handleBillingToggle);
}

// Handle slider change
function handleSliderChange() {
  updatePricing();
  updateSliderBackground();
}

// Handle billing toggle change
function handleBillingToggle() {
  updatePricing();
}

// Update pricing display
function updatePricing() {
  const sliderValue = parseInt(slider.value);
  const currentData = pricingData[sliderValue];
  const isYearly = billingToggle.checked;
  
  // Update pageviews
  pageviewsElement.textContent = `${currentData.pageviews} pageviews`;
  
  // Calculate price (apply 25% discount for yearly billing)
  let price = currentData.price;
  if (isYearly) {
    price = price * 0.75; // 25% discount
  }
  
  // Update price display
  priceElement.textContent = `$${price.toFixed(2)}`;
}

// Update slider background to show progress
function updateSliderBackground() {
  const sliderValue = parseInt(slider.value);
  const percentage = (sliderValue / (slider.max - slider.min)) * 100;
  
  slider.style.background = `linear-gradient(to right, 
    hsl(174, 77%, 80%) 0%, 
    hsl(174, 77%, 80%) ${percentage}%, 
    hsl(224, 65%, 95%) ${percentage}%, 
    hsl(224, 65%, 95%) 100%)`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
