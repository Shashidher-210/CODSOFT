let display = document.querySelector('.display');
        let calculation = '';

        function appendNumber(number) {
            calculation += number;
            display.textContent = calculation;
        }

        function appendOperator(operator) {
            calculation += operator;
            display.textContent = calculation;
        }

        function calculateResult() {
            try {
                display.textContent = eval(calculation);
                calculation = '';
            } catch (error) {
                display.textContent = 'Error';
                calculation = '';
            }
        }
