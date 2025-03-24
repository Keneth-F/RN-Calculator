import { useEffect, useState } from 'react';

export const useCalculator = () => {
  const [result, setResult] = useState('');
  const [prev, setPrev] = useState('');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [currentOperator, setCurrentOperator] = useState<string | null>(null);
  const [formula, setFormula] = useState('');
  useEffect(() => {
    if (currentOperator) {
      setFormula(firstOperand + currentOperator + result);
      const res = calculate(firstOperand!, parseFloat(result), currentOperator!).toString();
      setPrev(isNaN(+res) ? formula : res);

    } else {
      setFormula(result);
    }
  }, [result, currentOperator, firstOperand, formula]);

  // Handles building numbers
  const buildNumber = (value: string) => {
    if (value === '.' && result.includes('.')) {
      // Prevent multiple decimals in a number
      return;
    }
    setResult(prevResult => prevResult + value);
  };

  // Handles toggling the sign of the current result
  const toggleSign = () => {
    setResult(prevResult => (prevResult.startsWith('-') ? prevResult.slice(1) : '-' + prevResult));
  };

  // Handles clearing the screen
  const clean = () => {
    setResult('');
    setPrev('');
    setFirstOperand(null);
    setCurrentOperator(null);
    setFormula('');
  };

  // Deletes the last character from the result
  const deleteOne = () => {
    setResult(prevResult => prevResult.slice(0, -1));
  };

  // Handles when an operator is clicked
  const handleOperator = (operator: string) => {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(result));
      setPrev(result);
      setResult('');
    } else if (currentOperator) {
      // Perform calculation if an operator is already set
      const newResult = calculate(firstOperand, parseFloat(result), currentOperator);
      setFirstOperand(newResult);
      setPrev(newResult.toString());
      setResult('');
    }
    setCurrentOperator(operator);
  };

  // Handles calculation based on the operator
  const calculate = (first: number, second: number, operator: string) => {
    switch (operator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case 'X':
        return first * second;
      case '/':
        return first / second;
      default:
        return second;
    }
  };

  // Handles the equal sign to evaluate the current expression
  const handleEqual = () => {
    if (firstOperand !== null && currentOperator !== null) {
      const newResult = calculate(firstOperand, parseFloat(result), currentOperator);
      setResult(newResult.toString());
      setPrev('');
      setFirstOperand(null);
      setCurrentOperator(null);
    }
  };

  return {
    result,
    prev,
    buildNumber,
    toggleSign,
    clean,
    deleteOne,
    handleOperator,
    handleEqual,
    formula,
  };
};
