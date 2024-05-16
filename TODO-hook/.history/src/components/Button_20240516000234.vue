<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-16 00:02:17
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-16 00:02:31
 * @FilePath: \vite-project\src\components\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <button class="button" @click="$emit('click')"><slot></slot></button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Button',
  });
  </script>
  
  <style scoped>
  .button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  