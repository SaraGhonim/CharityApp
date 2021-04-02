module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import', 'prettier'],

  // settings: {
  //   'import/resolver': {
  //     node: {
  //       paths: ['src'],
  //       alias: {
  //         '@assets': './src/assets',
  //         '@components': './src/components',
  //         '@globals': './src/globals',
  //         '@navigations': './src/navigation',
  //         '@modules': './src/screens',
  //         '@services': './src/services',
  //         '@utils': './src/utils',
  //       },
  //     },
  //   },
  // },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    // 'react/state-in-constructor': 'off',
    // 'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    // 'react/prop-types': 'off',
    // 'no-param-reassign': 'off',
    'no-console': 'off',
  },
};
