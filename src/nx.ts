import type { EslintConfig } from './types';

export const nxRules: EslintConfig = {
  rules: {
    '@nx/enforce-module-boundaries': [
      'error',
      {
        depConstraints: [
          {
            // bannedExternalImports: ['actor:domain', 'actor:frontend', 'actor:ui', 'actor:ds'],
            notDependOnLibsWithTags: ['*'],
            sourceTag: 'actor:domain',
          },
          {
            // bannedExternalImports: ['actor:ui', 'actor:ds'],
            onlyDependOnLibsWithTags: ['actor:domian', 'actor:service'],
            sourceTag: 'actor:service',
          },
          {
            onlyDependOnLibsWithTags: ['actor:ds'],
            sourceTag: 'actor:ds',
          },
          {
            onlyDependOnLibsWithTags: ['actor:ds', 'actor:ui'],
            sourceTag: 'actor:ui',
          },
          {
            onlyDependOnLibsWithTags: ['actor:ds', 'actor:ui', 'actor:domain', 'actor:service'],
            sourceTag: 'actor:domain-ui',
          },
          {
            onlyDependOnLibsWithTags: ['actor:ds', 'actor:ui', 'actor:service', 'actor:domain'],
            sourceTag: 'actor:frontend',
          },
        ],
      },
    ],
  },
};
