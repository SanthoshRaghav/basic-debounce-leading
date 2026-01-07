const fetchData = (query) => {
  if (!query) return;
  console.log('Fetching -->', query);
};

const debounce = (fn, delay) => {
  let timerId = null;

  return (...args) => {
    if (!timerId) {
      fn(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = null;
    }, delay);
  };
};

function init() {
  const debounceFn = debounce(fetchData, 3000);
  const input = document.getElementById('search');
  input.addEventListener('input', (e) => debounceFn(e.target.value));
}

init();
