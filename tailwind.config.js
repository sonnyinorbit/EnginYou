/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2196F3',
          'blue-dark': '#1976D2',
          'blue-light': '#E3F2FD',
          purple: '#9065b0',
          orange: '#d9730d',
          green: '#28A745',
          cyan: '#2196F3'
        },
        sky: {
          blue: '#87CEEB'
        },
        cloud: {
          white: '#FFFFFF'
        },
        gray: {
          light: '#F8F9FA',
          medium: '#E9ECEF',
          dark: '#6C757D'
        },
        text: {
          primary: '#212529',
          secondary: '#6C757D',
          muted: '#ADB5BD'
        },
        success: '#28A745',
        warning: '#FFC107',
        danger: '#DC3545'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 40px rgba(0, 0, 0, 0.1)'
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px'
      }
    },
  },
  plugins: [],
} 