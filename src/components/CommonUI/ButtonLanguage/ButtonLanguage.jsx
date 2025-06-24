import { Dropdown } from "react-bootstrap";
import { UseAppContext } from "../../../hooks";
import { FaGlobe } from "react-icons/fa";
import { TooltipLink } from "../TooltipLink";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
];

const ButtonLanguage = () => {
  const { handleChangeLanguage, currentLanguage } = UseAppContext();

  const { t } = useTranslation();

  return (
    <Dropdown>
      <TooltipLink title={t('tooltips.language')} id='tl4' localizacao='bottom'>
        <Dropdown.Toggle variant="outline" className="d-flex align-items-center gap-2 logout-toggle fs-6">
          <FaGlobe />
          <span>
            {languages.find(l => l.code === currentLanguage)?.label || currentLanguage.toUpperCase()}
          </span>
        </Dropdown.Toggle>
      </TooltipLink>
      <Dropdown.Menu>
        {languages.map(lang => (
          <Dropdown.Item
            className="d-flex align-items-center gap-2 aside-link text-body"
            key={lang.code}
            active={lang.code === currentLanguage}
            onClick={() => handleChangeLanguage(lang.code)}
          >
            {lang.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { ButtonLanguage };