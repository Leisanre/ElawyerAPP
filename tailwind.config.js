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
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
          light: '#60A5FA',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        employee: '#10B981',
        employer: '#F59E0B',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
      },
    },
  },
  plugins: [],
}
