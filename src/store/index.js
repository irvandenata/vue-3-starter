import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
const modules = import.meta.glob('./modules/*.js')
const store = createStore({
 modules: {
  ...modules
 },
 plugins: [
  createPersistedState()
 ]
})

export default store