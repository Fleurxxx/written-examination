<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-16 00:02:40
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-16 00:28:21
 * @FilePath: \vite-project\src\components\TodoItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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

<style scoped lang="less">
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
}
</style>
  