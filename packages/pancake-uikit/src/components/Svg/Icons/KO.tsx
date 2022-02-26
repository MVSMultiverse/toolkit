import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 72 72" {...props}>
      <image width="100%" height="100%"
        xlinkHref="data:image/png;base64,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" />

    </Svg>
  );
};

export default Icon;
