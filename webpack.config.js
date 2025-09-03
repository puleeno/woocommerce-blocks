const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './js/index.ts',
    styles: './css/style.scss',
    editor: './css/editor.scss'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'css'),
      '@abstracts': path.resolve(__dirname, 'css/abstracts'),
      // WooCommerce Block Aliases
      '@woocommerce/atomic-blocks': path.resolve(__dirname, 'js/base/atomic/blocks'),
      '@woocommerce/atomic-utils': path.resolve(__dirname, 'js/atomic/utils'),
      '@woocommerce/base-components': path.resolve(__dirname, 'js/base/components'),
      '@woocommerce/base-context': path.resolve(__dirname, 'js/base/context'),
      '@woocommerce/base-hocs': path.resolve(__dirname, 'js/base/hocs'),
      '@woocommerce/base-hooks': path.resolve(__dirname, 'js/base/hooks'),
      '@woocommerce/interactivity': path.resolve(__dirname, 'js/interactivity'),
      '@woocommerce/base-utils': path.resolve(__dirname, 'js/base/utils'),
      '@woocommerce/blocks': path.resolve(__dirname, 'js/blocks'),
      '@woocommerce/editor-components': path.resolve(__dirname, 'js/editor-components'),
      '@woocommerce/block-data': path.resolve(__dirname, 'js/data'),
      '@woocommerce/block-hocs': path.resolve(__dirname, 'js/hocs'),
      '@woocommerce/blocks-registry': path.resolve(__dirname, 'js/blocks-registry'),
      '@woocommerce/blocks-checkout': path.resolve(__dirname, 'packages/checkout'),
      '@woocommerce/blocks-components': path.resolve(__dirname, 'packages/components'),
      '@woocommerce/interactivity-components': path.resolve(__dirname, 'packages/interactivity-components'),
      '@woocommerce/price-format': path.resolve(__dirname, 'packages/prices'),
      '@woocommerce/block-settings': path.resolve(__dirname, 'js/settings/blocks'),
      '@woocommerce/icons': path.resolve(__dirname, 'js/icons'),
      '@woocommerce/resource-previews': path.resolve(__dirname, 'js/previews'),
      '@woocommerce/settings': path.resolve(__dirname, 'js/settings/shared'),
      '@woocommerce/shared-context': path.resolve(__dirname, 'js/shared/context'),
      '@woocommerce/shared-hocs': path.resolve(__dirname, 'js/shared/hocs'),
      '@woocommerce/type-defs': path.resolve(__dirname, 'js/types/type-defs'),
      '@woocommerce/types': path.resolve(__dirname, 'js/types'),
      '@woocommerce/storybook-controls': path.resolve(__dirname, 'storybook/custom-controls'),
      '@woocommerce/utils': path.resolve(__dirname, 'js/utils'),
      '@woocommerce/e2e-utils': path.resolve(__dirname, 'tests/e2e/utils'),
      '@woocommerce/e2e-types': path.resolve(__dirname, 'tests/e2e/types'),
      '@woocommerce/e2e-playwright-utils': path.resolve(__dirname, 'tests/e2e/playwright-utils'),
      '@woocommerce/e2e-mocks': path.resolve(__dirname, 'tests/e2e/mocks'),
      '@woocommerce/templates': path.resolve(__dirname, 'js/templates')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'css/abstracts'),
                  path.resolve(__dirname, 'node_modules')
                ]
              },
              additionalData: `
                // WordPress Base Styles - Global imports
                @import "~@wordpress/base-styles/colors";
                @import "~@wordpress/base-styles/colors.native";
                @import "~@wordpress/base-styles/variables";
                @import "~@wordpress/base-styles/functions";
                @import "~@wordpress/base-styles/breakpoints";
                @import "~@wordpress/base-styles/animations";
                @import "~@wordpress/base-styles/long-content-fade";
                @import "~@wordpress/base-styles/mixins";
                @import "~@wordpress/base-styles/z-index";
                @import "~@wordpress/base-styles/default-custom-properties";

                // Local abstracts (keep existing imports)
                @import "css/abstracts/_variables.scss";
                @import "css/abstracts/_colors.scss";
                @import "css/abstracts/_breakpoints.scss";
                @import "css/abstracts/_mixins.scss";
              `
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};
