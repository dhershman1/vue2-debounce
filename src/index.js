import debounce from './debounce'
import vueDebounce from './directive'

export {
  debounce
}

export default {
  install (Vue, opts = {}) {
    Vue.directive('debounce', vueDebounce(opts))
  }
}
