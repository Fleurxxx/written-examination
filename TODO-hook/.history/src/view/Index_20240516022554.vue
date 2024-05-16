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
  