# Eslint config by Rodbe 👨🏻‍🚀

Here you will find the eslint rules I use to keep all my projects consistent.

## Use ✨

### For JS files

1.- **Install dependencies**

```sh
npm i -D eslint @rodbe/eslint-config
```

2.- **In your `eslint.config.js`**
```js
import { defineConfig } from "eslint/config";

import { jsRules } from "@rodbe/eslint-config";

export default defineConfig([
	{
		files: ["**/*.js"],
		extends: [jsRules],
	},
]);
```

### For TS files

1.- **Install dependencies**

```sh
npm i -D eslint @eslint/js typescript typescript-eslint @rodbe/eslint-config
```

2.- **In your `eslint.config.js`**

You can integrate in 2 ways.

2.1- **Recommended integration**
```js
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

import { jsRules, tsRules } from "@rodbe/eslint-config";

export default tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      tsEslint.configs.strictTypeChecked,
      tsEslint.configs.stylisticTypeChecked
      tsRules,
      jsRules,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js'],
        },,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
```

2.2.- **Integration from scratch**
```js
import tseslint from 'typescript-eslint';

import { jsRules } from "@rodbe/eslint-config";

export default tseslint.config(
  {
    extends: [
      jsRules,
      tsRules,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js'],
        },,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    }
  }
);
```

### For NX projects

1.- **Install dependencies**

```sh
npm i -D eslint @eslint/js typescript typescript-eslint @nx/eslint-plugin @rodbe/eslint-config
```

2.- **In your `eslint.config.js`**

```js
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import nxPlugin from '@nx/eslint-plugin';

import { nxRules } from "@rodbe/eslint-config";

export default tseslint.config(
  {
    // Here is the recommended TS configuration (explained above)
  },
  {
    extends: [nxRules],
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      '@nx': nxPlugin,
    },
  }
);
```