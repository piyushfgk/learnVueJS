---
published_at: 2024-04-02 13:04:05

toc: true
---

### Nuxt Content

- Nuxt Content reads the `content/` directory in your project, parses `.md, .yml, .csv` and `.json` files to create a powerful data layer for your application. Use Vue components in Markdown with the MDC syntax.. [Read more..](https://content.nuxt.com/get-started/installation)
- The **Content module parses `.md` and `.yaml`** files inside the `content/` directory and provides paths according to the directory structure.
- Install Nuxt Content module

  ```powershell
  npm install --save-dev @nuxt/content
  ```

- Enable module in `nuxt.config.ts`

  ```js
  export default defineNuxtConfig({
    modules: [
    **'@nuxt/content'**
    ],
    content: {
    // ... options
    }
  })
  ```

- If you are already using Tailwind CSS the markdown will not display as expected because its been overridden by tailwind CSS. So to fix this you have to install tailwind CSS `typography plugin` and enable this plugin in `tailwind.config.js`. [Read more…](https://github.com/tailwindlabs/tailwindcss-typography#installation)
- Install the plugin from npm:

  ```powershell
  npm install -D @tailwindcss/typography
  ```

- Then add the plugin to your `tailwind.config.js` file:

  ```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
  	theme: {
  	// ...
  	},
  	plugins: [
  		**require('@tailwindcss/typography'),**
  		// ...
  	],
  }
  ```
