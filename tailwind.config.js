/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cm-blue': '#4255FF',
        'cm-white': '#FFFFFF',
        'cm-gray': '#E5E5E5',
        'cm-light-gray': '#E5E5E5',
        'cm-dark-white': '#202F36',
        'cm-text-gray': '#3C3C3C',
        'cm-magenta': '#00CD9C',
        'cm-light-green': '#D7FFB8',
        'cm-green': '#58CC02',
        'cm-dark-green': '#61B800',
        'cm-blue': '#1CB0F6',
        'cm-pink': '#FF86D0',
        'cm-orange': '#FF9600',
        'cm-red': '#FF4B4B',
        'cm-light-red': '#FFDFE0',
        'cm-lila': '#CC348D',
        'cm-purple': '#CE82FF',
        'cm-brown': '#DC8F47',
        'cm-black': '#131F24',
        'cm-border-gray': 'rgb(50, 63, 71)',
        'cm-dark-blue': '#4255FF'
      }
    }
  },
  plugins: []
}
