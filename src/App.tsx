import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

//useSate is a React hook that allows you to add state to functional components. In this code, we are using useState to create a state variable called count and a function called setCount to update that variable. The initial value of count is set to 0.

function App() {
  const [count, setCount] = useState<number>(0);//Displays the current count value and a function to update it. The initial value of count is set to 0.


  //The increment function increases the count by 1 when called. The decrement function decreases the count by 1 when called. The reset function resets the count back to 0 when called.
  const increment = () => {
    setCount(count + 1);
  };

  const increment2 = () => {
    setCount(prevCount => prevCount + 5);
  };

  const decrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  //The decrement2 function decreases the count by 2 when called, but it ensures that the count does not go below 0 by using Math.max.
  const decrement2 = () => {
    setCount(prevCount => Math.max(0, prevCount - 2));
  };

  const reset = () => {
    setCount(0);
  };

 /* const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCount(value);
    }
  };*/

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2 style={styles.counter}>{count}</h2>

      <div style={styles.buttonGroup}>
        <button onClick={increment}>Increment</button>
        <button onClick={increment2}>Increment by 5</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={decrement2}>Decrement by 2</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center" as const,
    marginTop: "100px",
  },
  counter: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "3rem",
    width: "200px",
    margin: "20px auto",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",

  },
};

export default App;
