# Craft Documentation Theme for VuePress

This is the [VuePress](https://vuepress.vuejs.org/) theme used for [Flipbox plugin documentation](https://docs.craftcms.com/).

## Setup

1. Require this theme

    ```
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
                // any other languages you want to include in code toggles...
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