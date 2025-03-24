import { Text, View } from 'react-native';
import { styles } from '../../config/theme/app-theme';
import { useCalculator } from '../hooks/use-calculator';
import { colors } from '../../config/theme/app-theme'; // Assuming colors are imported here
import CalculatorButton from '../components/calculator-button';

const CalculatorScreen = () => {
  const { formula, buildNumber, toggleSign, clean, deleteOne, prev, handleOperator, handleEqual } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        <Text style={styles.subResult}>{prev}</Text>
      </View>

      {/* Hardcoding button rows */}
      <View style={styles.row}>
        <CalculatorButton label="C" color={colors.lightGray} onPress={clean} />
        <CalculatorButton label="+/-" color={colors.lightGray} onPress={toggleSign} />
        <CalculatorButton label="DEL" color={colors.lightGray} onPress={deleteOne} />
        <CalculatorButton label="/" color={colors.orange} onPress={() => handleOperator('/')} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="7" color={colors.darkGray} onPress={() => buildNumber('7')} />
        <CalculatorButton label="8" color={colors.darkGray} onPress={() => buildNumber('8')} />
        <CalculatorButton label="9" color={colors.darkGray} onPress={() => buildNumber('6')} />
        <CalculatorButton label="X" color={colors.orange} onPress={() => handleOperator('X')} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="4" color={colors.darkGray} onPress={() => buildNumber('4')} />
        <CalculatorButton label="5" color={colors.darkGray} onPress={() => buildNumber('5')} />
        <CalculatorButton label="6" color={colors.darkGray} onPress={() => buildNumber('6')} />
        <CalculatorButton label="-" color={colors.orange} onPress={() => handleOperator('-')} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="1" color={colors.darkGray} onPress={() => buildNumber('1')} />
        <CalculatorButton label="2" color={colors.darkGray} onPress={() => buildNumber('2')} />
        <CalculatorButton label="3" color={colors.darkGray} onPress={() => buildNumber('3')} />
        <CalculatorButton label="+" color={colors.orange} onPress={() => handleOperator('+')} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="0" color={colors.darkGray} isBig={true} onPress={() => buildNumber('0')} />
        <CalculatorButton label="." color={colors.darkGray} onPress={() => buildNumber('.')} />
        <CalculatorButton label="=" color={colors.orange} onPress={handleEqual} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
