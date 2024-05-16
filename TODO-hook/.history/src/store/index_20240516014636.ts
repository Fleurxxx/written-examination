import { createPinia } from 'pinia'
import { todo } from './todo.ts';
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist) 
   
export { todo };
export default store;