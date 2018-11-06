# Flipbox Documentation Theme for VuePress

This is the [VuePress](https://vuepress.vuejs.org/) theme used for [Flipbox](https://flipboxdigital.com/).

## Setup

1. [Install](https://vuepress.vuejs.org/guide/getting-started.html) VuePress like normal
2. Require this theme in your project

    ```
    npm install -D vuepress
    npm install -D vuepress-theme-flipbox
    ```

3. Set these things in `.vuepress/config.js`:

    ```js
    module.exports = {
        // ...
        theme: 'flipbox',
        themeConfig: {
            // ...
            codeLanguages: {
                php: 'PHP',
                twig: 'Twig',
                json: 'JSON',
                // any other languages for the code toggles...
            }
        },
        markdown: {
            anchor: { level: [2, 3, 4] },
            toc: { includeLevel: [3] },
            config(md) {
                md.use(require('vuepress-theme-flipbox/markup'))
            }
        }
    }
    ```

## Code Toggles

You can create code toggles by wrapping multiple fenced code blocks with a `code` container:

    ::: code
    
    ``` php
    echo "Hey, $name";
    ```
    
    ``` twig
    Hey, {{ name }}
    ```
    
    :::

(Use the same language handles defined by `themeConfig.codeLanguages` in `.vuepress/config.js`.)

## Theme

After ejecting VuePress we customized:

- Update Layout.vue
  - Comment out `import { pathToComponentName, getTitle, getLang } from '@app/util'`
  - Change prism theme to `prism-coy.css`
- Update /styles/config.styl
  - Change colors (5 total)
  - Add `$lineNumbersWrapperWidth = 3.5rem`
- Update /styles/code.styl - Custom styling
- Add ButtonLink.vue
- Add CodeToggle.vue
- Add Storage.js
- Add markup.js
- Change enhanceApp.js - Custom code