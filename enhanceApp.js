import Vuex from 'vuex'
import ButtonLink from './ButtonLink'
import CodeToggle from './CodeToggle'
import { setStorage } from './Storage'

export default ({ Vue, options, router, siteData }) => {
    Vue.component('button-link', ButtonLink)
    Vue.component('code-toggle', CodeToggle)

    Vue.use(Vuex)

    Vue.mixin({
        computed: {
            $title() {
                const page = this.$page
                const siteTitle = this.$siteTitle
                const selfTitle = page.frontmatter.home ? null : (
                    page.frontmatter.title || // explicit title
                    (page.title ? page.title.replace(/[_`]/g, '') : '') // inferred title
                )
                return siteTitle
                    ? selfTitle
                        ? (selfTitle + ' | ' + siteTitle)
                        : siteTitle
                    : selfTitle || 'VuePress'
            }
        }
    })

    Object.assign(options, {
        data: {
            codeLanguage: null,
        },

        store: new Vuex.Store({
            state: {
                codeLanguage: null
            },
            mutations: {
                changeCodeLanguage(state, language) {
                    state.codeLanguage = language;
                    setStorage('codeLanguage', language);
                }
            }
        })
    })
}
