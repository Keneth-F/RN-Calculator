import {useState} from 'react';

export const useCalculator = () => {
  const [result, setResult] = useState('0');
  const buildNumber = (value: string) => {
    //TODO: validaciones
    setResult(result + value);
  };
  return {result, buildNumber};
};
