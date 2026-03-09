import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../server/src/__generated__/schema.graphql',
  importExtension: '.ts',
  documents: ['./src/**/*.ts', './src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    'src/__generated__/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        customDirectives: {
          apolloUnmask: true,
        },
        avoidOptionals: {
          field: true, // Use `null` for nullable fields instead of optionals
        },
        useTypeImports: true,
        defaultScalarType: 'unknown',
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
        scalars: {
          // Apollo Client receives DateTime/Date as ISO strings over the wire.
          // Map to string so existing frontend code continues to work unchanged.
          DateTime: 'string',
          Date: 'string',
        },
      },
    },
  },
};

export default config;
