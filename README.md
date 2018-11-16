# Flipbox Documentation Theme for VuePress

This is the [VuePress](https://v0.vuepress.vuejs.org/) theme used for [Flipbox](https://flipboxdigital.com/).

## Setup

1. Require VuePress and the Flipbox theme in your project
    ```bash
    npm install -D vuepress
    npm install -D vuepress-theme-flipbox
    ```
    
2. Set config values in `.vuepress/config.js`:
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

After ejecting VuePress, the customizations are:

- Add ButtonLink.vue
- Add CodeToggle.vue
- Add markup.js
- Add /styles/override.styl - Custom code
- Update /styles/config.styl
  - Change colors (7 colors, add sidebar and codeBg)
  - Add `php` and `twig` to $codeLang
  - Add `@import '~@temp/override.styl'` at end
- Update /styles/code.styl - Custom styling
  - Comment out `color #fff` for `.content pre code`
- Update enhanceApp.js - Custom code
- Run `npm login`
- Run `npm version <1.0.X>`
- Run `npm publish`

To dev locally, set the local theme dir as a dev dependency in the project's package.json

    "devDependencies": {
      ...
      "vuepress-theme-flipbox": "file:../path/to/theme/vuepress-theme-flipbox"
    }