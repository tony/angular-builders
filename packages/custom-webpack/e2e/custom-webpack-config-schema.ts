export const customWebpackConfig = {
  type: 'object',
  description: 'Custom webpack configuration',
  properties: {
    path: { type: 'string', description: 'Path to the custom webpack configuration file' },
    mergeRules: {
      type: 'object',
      description:
        'Merge rules as described here: https://github.com/survivejs/webpack-merge#mergewithrules',
    },
    replaceDuplicatePlugins: {
      type: 'boolean',
      description: 'Flag that indicates whether to replace duplicate webpack plugins or not',
    },
  },
  default: false,
};

export const indexTransform = {
  type: 'string',
  description: 'Path to the file with index.html transform function',
};
