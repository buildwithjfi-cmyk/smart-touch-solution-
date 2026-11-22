/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Site palette: Navy (primary) & Orange (accent).
        // The whole site uses `sky-*` for primary and `amber-*` for accent,
        // so changing these two scales re-themes every page.
        sky: {
          50: '#EEF3F9',
          100: '#DCE6F2',
          200: '#B9CDE4',
          300: '#8FAECF',
          400: '#5F87B3',
          500: '#3D6594',
          600: '#2B4F7A',
          700: '#1E3A5F',
          800: '#172E4C',
          900: '#10223A',
          950: '#0A1626',
        },
        amber: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        brand: {
          bg: "#FFFFFF",
          bgSecondary: "#FAF9F5",
          bgMuted: "#F5F4EF",
          card: "#FFFFFF",
          border: "#E7E5E4",
          text: "#1C1917",
          textMuted: "#57534E",
          amber: "#D97706",
          gold: "#B45309",
          orange: "#EA580C",
          blue: "#0284C7",
          royal: "#1D4ED8",
          sky: "#E0F2FE",
          green: "#059669",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
};
