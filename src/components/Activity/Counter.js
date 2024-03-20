import React, { useState } from "react";

function Counter()
{
    const [count, setCount] = useState(0);
     // State to hold the array
  const [array, setArray] = useState([1, 2, 3]);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
      if(count < 0)
      {
        alert("Count is less than 0");
      }
    };

// Function to add an element to the end of the array using push
const addElement = () => {
  const newArray = [...array];
  newArray.push(4);
  setArray(newArray);
};

// Function to remove an element from the end of the array using pop
const removeElement = () => {
  const newArray = [...array];
  newArray.pop();
  setArray(newArray);
};

// Function to remove an element from the beginning of the array using shift
const removeFirstElement = () => {
  const newArray = [...array];
  newArray.shift();
  setArray(newArray);
};

// Function to add an element to the beginning of the array using unshift
const addFirstElement = () => {
  const newArray = [...array];
  newArray.unshift(0);
  setArray(newArray);
};

// Function to concatenate two arrays
const concatArrays = () => {
  const newArray = array.concat([4, 5, 6]);
  setArray(newArray);
};

// Function to map over the array and double each element
const doubleArray = () => {
  const newArray = array.map((item) => item * 2);
  setArray(newArray);
};

// Function to filter the array and keep only even numbers
const filterEvenNumbers = () => {
  const newArray = array.filter((item) => item % 2 === 0);
  setArray(newArray);
};


    return (
        <>
         <div className="container">
      <h2>Counter</h2>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <span>{count}</span>
        </div>
        </div>
        <div className="container">
      <h2>Array functions</h2>
      <div>Array: {array.join(', ')}</div>
      <button onClick={addElement}>Push 4</button>
      <button onClick={removeElement}>Pop</button>
      <button onClick={removeFirstElement}>Shift</button>
      <button onClick={addFirstElement}>Unshift 0</button>
      <button onClick={concatArrays}>Concat</button>
      <button onClick={doubleArray}>Map</button>
      <button onClick={filterEvenNumbers}>Filter Even</button>
        </div>
        </>
    )
}

export default Counter;