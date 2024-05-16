<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-16 02:25:45
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-16 02:25:58
 * @FilePath: \vite-project\src\view\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
      <button @click="start">Start</button>
      <button @click="stop">Stop</button>
      <button @click="pause">Pause</button>
      <button @click="resume">Resume</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Button from '../components/Button.vue';
import useInterval from './useInterval';

export default defineComponent({
    setup() {
        const { start, stop, pause, resume } = useInterval(() => {
        console.log('foo');
        }, 3000, true);

        return { start, stop, pause, resume };
    }
});
</script>
  