/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        surface: '#111827',
        dark: '#030712',
        muted: '#6B7280',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.4)',
        md: '0 4px 16px rgba(0,0,0,0.5)',
        lg: '0 8px 32px rgba(0,0,0,0.6)',
        xl: '0 20px 60px rgba(0,0,0,0.7)',
        'glow-blue': '0 0 24px rgba(59,130,246,0.45), 0 0 80px rgba(59,130,246,0.12)',
        'glow-purple': '0 0 24px rgba(139,92,246,0.45), 0 0 80px rgba(139,92,246,0.12)',
        'glow-cyan': '0 0 16px rgba(6,182,212,0.5)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)',
        'gradient-text': 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)',
        'gradient-border': 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        orbit: 'orbit 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 12px rgba(59,130,246,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59,130,246,0.8)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
