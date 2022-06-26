module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "principal": "#DBB7A2",
        "custbrown": "#B6865F",
        "custpink": "#F7C4C9",
        "custgreen": "#87A55F"
      },
      fontFamily: {
        "emilea": ["Emilea"],
      },
      maxWidth: {
        "2/4": "2.4rem"
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
