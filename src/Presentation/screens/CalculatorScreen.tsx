import {Text, View} from 'react-native';
import {styles} from '../../config/theme/app-theme';
import {useCalculator} from '../hooks/use-calculator';
import {BUTTONS} from '../../config/BUTTONS';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
  const {result, buildNumber} = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {result}
        </Text>
        <Text style={styles.subResult}> 15 </Text>
      </View>
      {BUTTONS.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(({label, color, isBig}) => (
            <CalculatorButton
              key={label}
              label={label}
              color={color}
              isBig={isBig}
              onPress={() => buildNumber(label)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalculatorScreen;
