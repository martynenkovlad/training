function counter(startValue, step) {
    let currentValue = startValue;
  
    function increment() {
      currentValue += step;
      return currentValue;
    }
  
    function decrement() {
      currentValue -= step;
      return currentValue;
    }
  
    function reset() {
      currentValue = startValue;
      return currentValue;
    }
  
    return {
      increment,
      decrement,
      reset,
      getCurrentValue: () => currentValue,
    };
  }
 
  const myCounter = counter(0, 1);
  
  console.log(myCounter.increment());
  console.log(myCounter.increment());
  console.log(myCounter.decrement());
  console.log(myCounter.reset());