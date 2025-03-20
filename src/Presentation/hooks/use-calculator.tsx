import {useState} from 'react';

const initialValue = '0';
const magnitudes = ['+', '-'];
const mathOperations = ['*', '/', '%', ...magnitudes];

const sanitizeResult = (result: string, value: string) => {
  if (value === 'C') {
    return result.slice(0, -1);
  }
  if (value === 'DEL') {
    return '0';
  }
  if (value === '=') {
    return eval(result);
  }
  if (result === initialValue && value === initialValue) {
    return result;
  } //00
  if (magnitudes.includes(value) && result === initialValue) {
    return value;
  } //+0, -0

  const lastChar = result.slice(-1);
  if (mathOperations.includes(value)) {
    if (mathOperations.includes(lastChar)) {
      //TODO: 1+-1, (1+.1==1+0.1)
      return result; // ++
    }
    if (result === initialValue) {
      return result;
    }
  }

  if (value === '.' && result.includes('.')) {
    // TODO:multiple
    return result;
  } // ..
  if (result === initialValue && value !== initialValue && value !== '.') {
    return value;
  } //00
  if (result.length >= 15) {
    return result;
  } // Limita la longitud máxima

  return result + value;
};

export const useCalculator = () => {
  const [result, setResult] = useState('0');
  const buildNumber = (value: string) =>
    setResult(sanitizeResult(result, value));

  return {result, buildNumber};
};
