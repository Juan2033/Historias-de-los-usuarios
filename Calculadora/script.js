function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    var result;
    try {
      result = eval(document.getElementById('display').value);
      if (result === Infinity || isNaN(result)) {
        throw 'Invalid operation';
      }
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  