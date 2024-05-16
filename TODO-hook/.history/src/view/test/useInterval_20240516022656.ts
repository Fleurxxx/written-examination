import { ref, onMounted, onBeforeUnmount } from 'vue';

function useInterval(fn, delay, immediate = false) {
  const intervalId = ref(null);
  const isPaused = ref(false);

  const start = () => {
    if (immediate) {
      fn();
    }
    intervalId.value = setInterval(() => {
      if (!isPaused.value) {
        fn();
      }
    }, delay);
  };

  const stop = () => {
    clearInterval(intervalId.value);
    intervalId.value = null;
  };

  const pause = () => {
    isPaused.value = true;
  };

  const resume = () => {
    isPaused.value = false;
  };

  onMounted(() => {
    if (intervalId.value === null) {
      start();
    }
  });

  onBeforeUnmount(() => {
    stop();
  });

  return { start, stop, pause, resume };
}

export default useInterval;
