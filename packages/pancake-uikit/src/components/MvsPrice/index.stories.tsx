import React from "react";
import { MvsPrice, MvsPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/MvsPrice",
  component: MvsPrice,
};

const Template: React.FC<MvsPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <MvsPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  mvsPriceUsd: 0.003,
};
