const display = document.getElementById('display');
        let memory = 0;

        function clearDisplay() {
            display.value = '';
        }

        function toggleSign() {
            if (display.value !== '') {
                if (display.value[0] === '-') {
                    display.value = display.value.slice(1);
                } else {
                    display.value = '-' + display.value;
                }
            }
        }

        function calculateSquareRoot() {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = Math.sqrt(currentValue);
            }
        }

        function subtractFromMemory() {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                memory -= currentValue;
                display.value = '';
            }
        }

        function addToMemory() {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                memory += currentValue;
                display.value = '';
            }
        }

        function appendCharacter(character) {
            display.value += character;
        }

        function clearLastCharacter() {
            display.value = display.value.toString().slice(0, -1);
        }

        function recallMemory() {
            display.value = memory.toString();
        }

        function calculateResult() {
            display.value = eval(display.value);
        }