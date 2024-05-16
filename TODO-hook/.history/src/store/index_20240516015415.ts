import { createPinia } from 'pinia'
cccc
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist) 
   
export { todo };
export default store;