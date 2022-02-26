import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../Svg";
import Text from "../Text/Text";
import { useMatchBreakpoints } from "../../hooks";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  mvsPriceUsd?: number;
  address?: string;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const MvsPrice: React.FC<Props> = ({ mvsPriceUsd, address, color = "textSubtle" }) => {
  const { isMobile } = useMatchBreakpoints();
  return mvsPriceUsd && mvsPriceUsd > 0 ? (
    <PriceLink href={`https://pancakeswap.finance/swap?outputCurrency=${address}`} target="_blank">
      {!isMobile && <PancakeRoundIcon width="24px" mr="8px" />}
      <Text color={color} bold ml={isMobile ? "15px" : null}>{`$${mvsPriceUsd.toFixed(5)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(MvsPrice);
