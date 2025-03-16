const config = {
  plugins: ["@tailwindcss/postcss"],
};

module.exports = {
  plugins: {
    tailwindcss: { config: './tailwindcss-config.ts' },
  },
}

export default config;
