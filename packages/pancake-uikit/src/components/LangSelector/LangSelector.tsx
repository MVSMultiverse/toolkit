import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";
import { Colors } from "../../theme";
import { Language } from "./types";
import { Position } from "../Dropdown/types";
import { Scale } from "../Button/types";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  color: keyof Colors;
  dropdownPosition?: Position;
  buttonScale?: Scale;
  hideLanguage?: boolean;
}

const LangSelector: React.FC<Props> = ({
  currentLang,
  langs,
  color,
  setLang,
  dropdownPosition = "bottom",
  buttonScale = "md",
  hideLanguage = false,
}) => (
  <Dropdown
    
    position={dropdownPosition}
    target={
      <Button scale={buttonScale} variant="text" startIcon={
        <AnimatedIconComponent
          iconName={currentLang?.toUpperCase()?.replace(/[-]/g, '')}
          width="24px"
        />
      }>

        {!hideLanguage && <Text ml="8px" color={color}>{currentLang?.toUpperCase()?.replace(/[-]/g, '')}</Text>}
      </Button >
    }
  >
    {
      langs.map((lang) => (
        <MenuButton
          key={lang.locale}
          fullWidth
          onClick={() => setLang(lang)}
          // Safari fix
          style={{ minHeight: "32px", height: "auto", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}
        >
          <AnimatedIconComponent
            iconName={lang?.code?.toUpperCase()?.replace(/[-]/g, '')}
            width="24px"
          /><Text ml="8px">{lang.language}</Text>
        </MenuButton>
      ))
    }
  </Dropdown >
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
