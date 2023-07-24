const path = require('path')

const target = path.resolve(__dirname, './src/queries/query.ts')

/** @type {import('orval').Options} */
module.exports = {
  backend: {
    output: {
      mode: 'single',
      client: 'react-query',
      prettier: true,
      target,
      // packageJson: require.resolve('./package.json'),

      // tsconfig: require.resolve('./tsconfig.json'),

      override: {
        mutator: {
          path: require.resolve('./src/services/axios.ts'),
          name: 'request',
        },
        query: {
          useQuery: true,
        },
        header: () => '//@ts-nocheck\n',
      },
    },

    input: {
      target: require.resolve('./swagger.json'),
    },
  },
}
