import { createPinia } from 'pinia'
import { home } from './user';
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist) 
   
export { user };
export default store;