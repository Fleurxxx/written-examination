import { createPinia } from 'pinia'
import { useTodo } from './todo';
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist) 
   
export { todo };
export default store;