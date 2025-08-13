import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import IconSvg from "../IconSvg";

interface Props extends PressableProps {
  className?: string;
  children: string;
  icon?: React.FC<SvgProps>;
  customTextButton?: string;
  onPress?: () => void;
}

const ThemedButton = ({
  className,
  onPress = () => {},
  icon,
  children,
  customTextButton,
  ...rest
}: Props) => {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      className={`w-full flex h-[60px] justify-center items-center rounded-[100px] px-6 active:opacity-90 transition-all ease-in duration-100 ${className}`}
      {...rest}
    >
      {icon && <IconSvg height={26} width={26} image={icon} />}
      <Text
        className={`text-xl ${customTextButton ? customTextButton : "text-light-text dark:text-dark-text"} `}
        style={{ fontFamily: "NunitoSansSemibold" }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default ThemedButton;
