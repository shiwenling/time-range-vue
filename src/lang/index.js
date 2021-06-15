import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

const language = Cookies.get('language')


const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: language || 'zh',
  // set locale messages
  // messages,
  silentTranslationWarn: true
})


export default i18n
