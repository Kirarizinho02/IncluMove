import { Nav } from "react-bootstrap"
import { TooltipLink } from "../../../CommonUI"
import { FaDumbbell, FaPeopleGroup, FaUser } from "react-icons/fa6"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { UseAppContext } from "../../../../hooks";

const AsideItems = () => {
  const professionalsImport = () => import("../../../../pages/Professionals/Professionals");

  const { getIconColor, expanded } = UseAppContext();
  const { t } = useTranslation();

  const [expandedTooltip, setExpandedTooltip] = useState(false);
  const [tooltipKey, setTooltipKey] = useState("tooltip-expanded");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpandedTooltip(prev => !prev);
      setTooltipKey(k => k === "tooltip-expanded" ? "tooltip-collapsed" : "tooltip-expanded");
    }, 190);
    return () => clearTimeout(timeout);
  }, [expanded]);

  return (
    <div>
      <TooltipLink
        title={t('tooltips.workouts')}
        id="t-1" localizacao="right"
        styles={expandedTooltip ? { width: "100%" } : {}}
        key={tooltipKey}
      >
        <Nav.Link
          className={`py-3 my-1  flex-grow-0 link-body-emphasis aside-link fw-semibold overflow-hidden d-flex align-items-center${!expanded ? " collapsed px-3 ms-1" : " ps-4"}`}
          eventKey="/user-area/workouts"
          href="/user-area/workouts"
        >
          <FaDumbbell className="aside-icon" size="2rem" color={getIconColor("/user-area/workouts")} />
          <motion.div
            className="align-items-center ms-3 overflow-hidden"
            initial={false}
            animate={{
              opacity: expanded ? 1 : 0,
              x: expanded ? 0 : -16,
              transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            }}
            style={{
              whiteSpace: "nowrap",
              display: expanded ? "inline-block" : "none",
            }}
          >
            Treinos
          </motion.div>
        </Nav.Link>
      </TooltipLink>

      <TooltipLink
        key={expandedTooltip ? "tooltip-experts-expanded" : "tooltip-experts-collapsed"}
        title={t('tooltips.experts')}
        id="t-2"
        localizacao="right"
        styles={expandedTooltip ? { width: "100%" } : {}}
      >
        <Nav.Link
          onMouseEnter={professionalsImport}
          className={`py-3 px-3 my-1 link-body-emphasis aside-link fw-semibold d-flex overflow-hidden align-items-center${!expanded ? " collapsed px-3 ms-1" : " ps-4"}`}
          eventKey="/user-area/professionals"
          href="/user-area/professionals"
        >
          <FaPeopleGroup className="aside-icon" size="2rem" />
          <motion.div
            className="align-items-center ms-3 overflow-hidden"
            initial={false}
            animate={{
              opacity: expanded ? 1 : 0,
              x: expanded ? 0 : -16,
              transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            }}
            style={{
              whiteSpace: "nowrap",
              display: expanded ? "inline-flex" : "none",
            }}
          >
            Profissionais
          </motion.div>
        </Nav.Link>
      </TooltipLink>

      <TooltipLink
        key={expandedTooltip ? "tooltip-profile-expanded" : "tooltip-profile-collapsed"}
        title={t('tooltips.profile')}
        id="t-2"
        localizacao="right"
        styles={expandedTooltip ? { width: "100%" } : {}}
      >
        <Nav.Link
          className={`py-3 px-3 my-1 link-body-emphasis aside-link fw-semibold overflow-hidden d-flex align-items-center${!expanded ? " collapsed px-3 ms-1" : " ps-4"}`}
          eventKey="/user-area/profile"
          href="/user-area/profile"
        >
          <FaUser className="aside-icon" size="2rem" color={getIconColor("/user-area/profile")} />
          <motion.div
            className="align-items-center ms-3 overflow-hidden"
            initial={false}
            animate={{
              opacity: expanded ? 1 : 0,
              x: expanded ? 0 : -16,
              transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            }}
            style={{
              whiteSpace: "nowrap",
              display: expanded ? "inline-flex" : "none",
            }}
          >
            Conta
          </motion.div>
        </Nav.Link>
      </TooltipLink>
    </div>
  );
}

export { AsideItems };
