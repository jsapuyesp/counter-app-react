import { useState } from "react";
import PropTypes from "prop-types";


export const CounterApp = ({ title, value }) => {
  
  const [ counter, setCounter] = useState(value);
  
  function addOne(event) {
    setCounter(counter + 1);
  }
  function minusOne(event) {
    setCounter(counter - 1);  }
  function equalZero(event) {
    setCounter(value);
  }

  return (
    <>
      <h1>{title}</h1>
      <h2>{counter}</h2>
      <button onClick={addOne}> +1 </button>
      <button onClick={minusOne}> -1 </button>
      <button onClick={equalZero}> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  title: 'Counter App',
  value: 0,
  
}