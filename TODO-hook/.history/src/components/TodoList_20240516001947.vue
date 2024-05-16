<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-16 00:03:07
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-16 00:19:34
 * @FilePath: \vite-project\src\components\TodoList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="todo">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @delete="deleteTodo(index)"
        @edit="editTodo(index, $event)"
      />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';

export default defineComponent({
name: 'TodoList',
components: { TodoItem },
props: {
    todos: Array,
},
emits: ['delete', 'edit'],
setup(_, { emit }) {
    const deleteTodo = (index: number) => {
        emit('delete', index);
    };

    const editTodo = (index: number, newTodo: string) => {
        emit('edit', index, newTodo);
    };

    return {
        deleteTodo,
        editTodo,
    };
},
});
</script>
<style scoped lang="less">
.todo-list {
    list-style-type: none;
    padding: 0;
}
</style>
  