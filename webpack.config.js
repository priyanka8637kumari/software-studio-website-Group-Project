import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  filename: 'main.js',
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, 'dist'),
};
export const mode = 'production';
export const module = {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
};
export const devServer = {
  static: './dist',
  hot: true,
};
export const plugins = [
  // eslint-disable-next-line no-undef
  new PrettierPlugin({
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
  }),
];
