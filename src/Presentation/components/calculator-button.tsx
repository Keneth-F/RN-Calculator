import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles, colors} from '../../config/theme/app-theme';

export interface CalcButtonProps {
  label: string;
  color?: keyof typeof colors | string;
  isBig?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = colors.darkGray,
  isBig = false,
  onPress,
}: CalcButtonProps) => {
  return (
    <View>
      <Pressable
        style={({pressed}) => [
          styles.button,
          {
            opacity: pressed ? 0.8 : 1,
            backgroundColor: color,
            width: isBig ? 180 : 80,
          },
        ]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default CalculatorButton;
