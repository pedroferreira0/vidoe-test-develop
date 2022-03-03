import { Image, ImageProps } from "@chakra-ui/react";

type Props = {
  size?: string | string[];
  type: string;
  color?: string;
};

export default ({
  size = ["16px", "24px"],
  type,
  color,
  ...props
}: Props & ImageProps) => {
  return (
    <Image
      draggable={false}
      {...props}
      w={size}
      h={size}
      minW={size}
      minH={size}
      src={`/assets/svg${type}.svg`}
    />
  );
};
