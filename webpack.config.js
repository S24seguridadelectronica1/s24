const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@supabaseClient': path.resolve(__dirname, '../supabaseClient')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Permite que Webpack resuelva archivos .ts y .tsx
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Asegúrate de procesar archivos TypeScript
        exclude: /node_modules/, // No procesar node_modules
        use: 'ts-loader', // Usa ts-loader para procesar los archivos .ts
      },
      {
        test: /\.(js|jsx)$/, // Asegúrate de procesar archivos JS y JSX también
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Preprocesa JS y JSX
          },
        },
      },
    ],
  },
};
