document.addEventListener("DOMContentLoaded", function() {
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");
  
    const conversionFactors = {
      metros: {
        centimetros: 100,
        pies: 3.28084,
        pulgadas: 39.3701
      },
      centimetros: {
        metros: 0.01,
        pies: 0.0328084,
        pulgadas: 0.393701
      },
      pies: {
        metros: 0.3048,
        centimetros: 30.48,
        pulgadas: 12
      },
      pulgadas: {
        metros: 0.0254,
        centimetros: 2.54,
        pies: 0.0833333
      }
    };
  
    function convertUnits() {
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      const factor = conversionFactors[fromUnit][toUnit];
      const result = inputValue.value * factor;
      outputValue.textContent = result.toFixed(2);
    }
  
    fromUnitSelect.addEventListener("change", convertUnits);
    toUnitSelect.addEventListener("change", convertUnits);
    inputValue.addEventListener("input", convertUnits);
  });
  