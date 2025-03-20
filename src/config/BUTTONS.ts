import { colors } from './theme/app-theme';
import { CalcButtonProps } from '../Presentation/components/CalculatorButton';

export const BUTTONS: Omit<CalcButtonProps, 'onPress'>[][] = [
  [
    { label: 'C', color: colors.lightGray },
    { label: '+/-', color: colors.lightGray },
    { label: '%', color: colors.lightGray },
    { label: '/', color: colors.orange },
  ],
  [
    ...Array.from({ length: 3 }, (_, i) => ({ label: `${i + 6}` })),
    { label: '+', color: colors.orange },
  ],
  [
    ...Array.from({ length: 3 }, (_, i) => ({ label: `${i + 4}` })),
    { label: '+', color: colors.orange },
  ],
  [
    ...Array.from({ length: 3 }, (_, i) => ({ label: `${i + 1}` })),
    { label: '+', color: colors.orange },
  ],
  [
    { label: '0', color: colors.darkGray, isBig: true },
    { label: '.', color: colors.darkGray },
    { label: '=', color: colors.orange },
  ],
];
