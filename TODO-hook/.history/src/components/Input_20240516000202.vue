<template>
    <input class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Input',
    props: {
      modelValue: String,
      placeholder: String,
    },
  });
  </script>
  
  <style scoped>
  .input {
    flex-grow: 1;
    margin-right: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  