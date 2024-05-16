import { ref, onMounted, onBeforeUnmount } from 'vue';

interface IntervalControl {
  start: () => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
}

function useInterval(fn: () => void, delay: number, immediate = false): IntervalControl {
  const intervalId = ref<number | null>(null);
  const isPaused = ref<boolean>(false);

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
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
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
