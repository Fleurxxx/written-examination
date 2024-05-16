<template>
    <div class="todo-list">
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
  
  <style scoped>
  .todo-list {
    list-style-type: none;
    padding: 0;
  }
  </style>
  