import * as Haptics from "expo-haptics";
import React from "react";
import {
    ImageSourcePropType,
    TouchableOpacity,
    useColorScheme,
} from "react-native";
import { SvgProps } from "react-native-svg";
import IconSvg from "./molecules/IconSvg";

interface Props {
  IconDark: React.FC<SvgProps> | ImageSourcePropType;
  IconLight: React.FC<SvgProps> | ImageSourcePropType;
  widthIcon?: number;
  heightIcon?: number;
  onPress?: () => void;
}

const ThemedButtonAnyIcon = ({
  IconDark,
  IconLight,
  widthIcon,
  heightIcon,
  onPress = () => {},
}: Props) => {
  const colorShema = useColorScheme();

  return (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      activeOpacity={0.4}
      onPress={() => {
        onPress();
        Haptics.selectionAsync();
      }}
    >
      <IconSvg
        width={widthIcon}
        height={heightIcon}
        image={colorShema === "dark" ? IconDark : IconLight}
      />
    </TouchableOpacity>
  );
};

export default ThemedButtonAnyIcon;
