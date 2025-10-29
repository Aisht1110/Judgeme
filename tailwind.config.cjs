module.exports = {
  content: [
    ".**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
    window.tailwind = window.tailwind || {};
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { 
            sans: ['Inter', 'system-ui', 'sans-serif'],
            display: ['Outfit', 'Inter', 'system-ui', 'sans-serif']
          },
          colors: {
            'brand-purple': '#6D28D9',
            'brand-pink': '#EC4899',
            'brand-yellow': '#F59E0B',
            'brand-indigo': '#4F46E5',
          },
          animation: {
            'gradient': 'gradient 12s ease infinite',
            'float': 'float 6s ease-in-out infinite',
            'pulse-glow': 'pulse-glow 1.6s infinite',
            'slide-up': 'slide-up 0.6s ease-out',
            'fade-in': 'fade-in 0.8s ease-out',
            'bounce-subtle': 'bounce-subtle 2s infinite',
            'shine': 'shine 3s linear infinite',
          },
          keyframes: {
            gradient: {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-14px)' },
            },
            'pulse-glow': {
              '0%': { boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.45)' },
              '70%': { boxShadow: '0 0 0 12px rgba(245, 158, 11, 0)' },
              '100%': { boxShadow: '0 0 0 0 rgba(245, 158, 11, 0)' },
            },
            'slide-up': {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            'fade-in': {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            'bounce-subtle': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-8px)' },
            },
            'shine': {
              '0%': { left: '-100%' },
              '100%': { left: '200%' },
            },
          },
        }
      }
    };
