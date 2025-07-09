        let currentInput = '0';
        let previousInput = '';
        let operation = null;
        let resetScreen = false;
        
        const display = document.getElementById('display');
        
        function updateDisplay() {
            display.textContent = currentInput;
        }
        
        function appendNumber(number) {
            if (currentInput === '0' || resetScreen) {
                currentInput = '';
                resetScreen = false;
            }
            if (number === '.' && currentInput.includes('.')) return;
            currentInput += number;
            updateDisplay();
        }
        
        function appendOperator(op) {
            if (operation !== null) calculate();
            previousInput = currentInput;
            operation = op;
            resetScreen = true;
        }
        
        function calculate() {
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            
            // if (isNaN(prev) return;
            
            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    return;
            }
            
            currentInput = result.toString();
            operation = null;
            updateDisplay();
        }
        
        function clearDisplay() {
            currentInput = '0';
            previousInput = '';
            operation = null;
            updateDisplay();
        }
        
        function deleteLastChar() {
            if (currentInput.length === 1) {
                currentInput = '0';
            } else {
                currentInput = currentInput.slice(0, -1);
            }
            updateDisplay();
        }
        
        // Initialize display
        updateDisplay();