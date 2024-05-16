<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-16 00:01:46
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-16 00:02:02
 * @FilePath: \vite-project\src\components\Input.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
  