// WooCommerce Blocks Main Entry Point
// This file exports all the main functionality and automatically loads global styles

// Import styles globally (handled by webpack)
import '../css/style.scss';
import '../css/editor.scss';

// Export main functionality
export const WooCommerceBlocks = {
  version: '1.0.0',
  name: 'WooCommerce Blocks',

  // Initialize the package
  init() {
    console.log('WooCommerce Blocks initialized');
    this.loadStyles();
  },

  // Load styles dynamically if needed
  loadStyles() {
    // Styles are automatically loaded by webpack
    // All abstracts (_variables, _colors, _breakpoints, _mixins) are available globally
    console.log('WooCommerce Blocks styles loaded');
  },

  // Utility functions
  utils: {
    // Get CSS custom properties
    getCSSVariable(name: string): string {
      return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
    },

    // Set CSS custom properties
    setCSSVariable(name: string, value: string): void {
      document.documentElement.style.setProperty(`--${name}`, value);
    }
  }
};

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => WooCommerceBlocks.init());
  } else {
    WooCommerceBlocks.init();
  }
}

// Export for module systems
export default WooCommerceBlocks;
