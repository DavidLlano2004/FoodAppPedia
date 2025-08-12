import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface Props {
  image: React.FC<SvgProps> | ImageSourcePropType;
  width?: number;
  height?: number;
  className?: string;
}

const IconSvg = ({
  image,
  width = 26,
  height = 26,
  className,
}: Props) => {
  if (typeof image === "number") {
    // Es un PNG/JPG (número = asset ID)
    return (
      <Image
        source={image}
        style={{ width, height, resizeMode: "contain" }}
        className={className}
      />
    );
  }

  // Es un componente SVG
  const SvgComponent = image as React.FC<SvgProps>;
  return (
    <View className={className}>
      <SvgComponent width={width} height={height} />
    </View>
  );
};

export default IconSvg;
