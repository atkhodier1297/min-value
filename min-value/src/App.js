
function App() {

  function findMinValue(arr) {
    let minValue = arr[0]; // Assume the first element is the minimum value
  
    // Iterate over the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) { // If current element is smaller than the minimum value
        minValue = arr[i]; // Update minimum value
      }
    }
  
    return minValue; // Return the minimum value found
  }
  
  // Example usage:
  const numbers = [3, 6, 2, 8, 1, 9];
  const minNumber = findMinValue(numbers);
  console.log(minNumber); // Output: 1

  return (
    <div className="App">
      <header className="App-header">
        <h1>{minNumber}</h1>
      </header>
    </div>
  );
}

export default App;
