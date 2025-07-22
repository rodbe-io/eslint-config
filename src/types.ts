import { type Linter } from 'eslint';

export interface EslintConfig {
  rules: Linter.RulesRecord;
}
