<template>
    <div class="todo-item">
      <input v-if="isEditing" v-model="editText" @blur="saveEdit" @keyup.enter="saveEdit" />
      <span v-else>{{ todo }}</span>
      <button @click="toggleEdit">{{ isEditing ? 'Save' : 'Edit' }}</button>
      <button @click="$emit('delete')">Delete</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'TodoItem',
    props: {
      todo: String,
    },
    emits: ['delete', 'edit'],
    setup(props, { emit }) {
      const isEditing = ref(false);
      const editText = ref(props.todo);
  
      const toggleEdit = () => {
        isEditing.value = !isEditing.value;
        if (!isEditing.value) {
          emit('edit', editText.value);
        }
      };
  
      const saveEdit = () => {
        isEditing.value = false;
        emit('edit', editText.value);
      };
  
      return {
        isEditing,
        editText,
        toggleEdit,
        saveEdit,
      };
    },
  });
  </script>
  
  <style scoped>
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
  }
  </style>
  