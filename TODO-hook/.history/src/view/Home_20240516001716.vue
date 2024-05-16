<template>
  <div class="app">
    <h1>Todo List</h1>
    <div class="input-container">
      <Input v-model="newTodo" placeholder="Add a new todo" />
      <Button @click="addTodo">Add</Button>
    </div>
    <TodoList :todos="todos" @delete="deleteTodo" @edit="editTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import TodoList from '../components/TodoList.vue';

export default defineComponent({
  name: 'Home',
  components: { Input, Button, TodoList },
  setup() {
    const todos = ref<string[]>([]);
    const newTodo = ref('');

    const loadTodos = () => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        todos.value = JSON.parse(storedTodos);
      }
    };

    const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos.value));
    };

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push(newTodo.value);
        newTodo.value = '';
        saveTodos();
      }
    };

    const deleteTodo = (index: number) => {
      todos.value.splice(index, 1);
      saveTodos();
    };

    const editTodo = (index: number, newTodo: string) => {
      todos.value[index] = newTodo;
      saveTodos();
    };

    loadTodos();

    watch(todos, saveTodos, { deep: true });

    return {
      newTodo,
      todos,
      addTodo,
      deleteTodo,
      editTodo,
    };
  },
});
</script>

<style scoped lang="less">
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f0f0f0;
}

.app {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 90%;
  max-width: 400px;
}

.input-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
