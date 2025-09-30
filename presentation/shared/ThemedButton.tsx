import * as Haptics from "expo-haptics";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from "react-native";
import { SvgProps } from "react-native-svg";
import IconSvg from "./molecules/IconSvg";

interface Props extends PressableProps {
  className?: string;
  children: string;
  icon?: React.FC<SvgProps>;
  customTextButton?: string;
  heightButton?: string;
  heightAndWidthIcon?: number;
  isLoading?: boolean;
  onPress?: () => void;
}

const ThemedButton = ({
  className,
  onPress = () => {},
  icon,
  children,
  customTextButton,
  heightButton = "h-[60px]",
  heightAndWidthIcon = 26,
  isLoading,
  ...rest
}: Props) => {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      className={`${heightButton} flex-row justify-center items-center rounded-[100px] px-6 active:opacity-90 transition-all ease-in duration-100 ${className}`}
      {...rest}
    >
      {icon && <IconSvg height={heightAndWidthIcon} width={heightAndWidthIcon} image={icon} />}

      {isLoading ? (
        <ActivityIndicator size="small" color={"white"} />
      ) : (
        <Text
          className={` ${customTextButton ? customTextButton : "text-light-text dark:text-dark-text text-xl"} `}
          style={{ fontFamily: "NunitoSansSemibold" }}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export default ThemedButton;
