import { useEffect, useState } from "react";
import { Card, Col, Row, Button, Badge, Container, Dropdown } from "react-bootstrap";
import { FaStar, FaRegStar, FaUserCheck, FaWheelchair, FaHeart, FaRegHeart, FaMapMarkerAlt } from "react-icons/fa";
import { api } from "../../services";
import { useTranslation } from "react-i18next";
import { UseAppContext } from "../../hooks";
import { MdElderly } from "react-icons/md";

import { motion, AnimatePresence } from 'motion/react';

import { FaFilter } from "react-icons/fa6";

const Professionals = () => {
  const { t } = useTranslation();

  const { getAtendimentoLabel } = UseAppContext();

  const [filter, setFilter] = useState("");
  const [professionals, setProfessionals] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const fav = localStorage.getItem("favoriteProfessionals");
    return fav ? JSON.parse(fav) : [];
  });

  useEffect(() => {
    api.get("/profissionais")
      .then(res => {
        const data = res.data.map(prof => ({
          ...prof,
        }));
        setProfessionals(data);
      })
      .catch(() => setProfessionals([]));
  }, []);


  const specialties = Array.from(
    new Set(
      professionals.flatMap(prof => prof.especialidades || [])
    )
  );

  const filteredProfessionals = filter
    ? professionals.filter(prof => (prof.especialidades || []).includes(filter))
    : professionals;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

  const toggleFavorite = (id) => {
    let newFavs;
    if (favorites.includes(id)) {
      newFavs = favorites.filter(fav => fav !== id);
    } else {
      newFavs = [...favorites, id];
    }
    setFavorites(newFavs);
    localStorage.setItem("favoriteProfessionals", JSON.stringify(newFavs));
  };

  return (
    <Container fluid className="m-0 p-0 d-flex align-items-center justify-content-center flex-column">
      <Container className="p-0 m-0">
        <div className="d-flex justify-content-between align-items-center m-3 pt-1">
          <div className="lh-1">
            <h5 className="title fw-semibold">Veja o perfil dos nossos profissionais disponíveis na plataforma: </h5>
            <span className="text-body-secondary"> Se gostar de algum, entre em contato!</span>
          </div>
          <div className="d-flex gap-2">
            <Dropdown>
              <Dropdown.Toggle className="rounded-pill shadow d-flex align-items-center gap-2 cta-gradient-btn text-body">
                <FaFilter /> {filter ? t(`professionals.specialty.${filter.toLowerCase()}`, filter) : t("professionals.filter")}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilter("")}>
                  {t("professionals.all")}
                </Dropdown.Item>
                {specialties.map(esp => (
                  <Dropdown.Item key={esp} onClick={() => setFilter(esp)}>
                    {t(`professionals.specialty.${esp.toLowerCase()}`, esp)}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Container className="border bg-body py-3 rounded mb-lg-3">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <Row className="p-3 g-4 w-100 justify-content-center">
              <AnimatePresence>
                {filteredProfessionals.map(prof => (
                  <Col
                    as={motion.div}
                    key={prof.id}
                    md={6}
                    lg={4}
                    exit="exit"
                    layout
                    initial="hidden"
                    animate="visible"
                    className="d-flex justify-content-center"
                    variants={cardVariants}
                    transition={{ duration: 0.3, type: "linear" }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.01,
                        y: -8,
                        boxShadow: "0 12px 12px 0 var(--bs-primary)",
                      }}
                      transition={{ type: "spring", stiffness: 250, damping: 20, ease: "easeInOut" }}
                      className="w-100 rounded-4 h-100"
                    >
                      <Card className="shadow-sm rounded-4 d-flex flex-column w-100 h-100 bg-body-tertiary">
                        <div className="position-relative">
                          <Card.Img
                            variant="top"
                            src={prof.foto}
                            alt={prof.nome}
                            className="w-100"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <Button
                            variant="link"
                            className="position-absolute top-0 end-0 m-2 p-2"
                            style={{ backdropFilter: "blur(10px)", borderRadius: "100%" }}
                            onClick={() => toggleFavorite(prof.id)}
                            aria-label={favorites.includes(prof.id) ? t("professionals.unfavorite") : t("professionals.favorite")}
                          >
                            {favorites.includes(prof.id) ? (
                              <FaHeart size={28} className="text-tertiary" />
                            ) : (
                              <FaRegHeart size={28} className="text-tertiary" />
                            )}
                          </Button>
                        </div>
                        <Card.Body className="d-flex flex-column flex-grow-1">
                          <Card.Title className="d-flex align-items-center gap-2">
                            {prof.nome}
                            {prof.especialidades.includes("Cadeirantes") && <FaWheelchair title={t("professionals.specialty.cadeirantes")} className="text-secondary" />}
                            {prof.especialidades.includes("Amputados") && <FaUserCheck title={t("professionals.specialty.amputados")} className="text-secondary" />}
                            {prof.especialidades.includes("Idosos") && <MdElderly title={t("professionals.specialty.idosos")} className="text-secondary" />}
                          </Card.Title>
                          <Card.Subtitle className="mb-2 text-body-secondary">
                            {t(`professionals.specialty.${prof.especialidade.toLowerCase()}`, prof.especialidade)}
                          </Card.Subtitle>
                          <div className="mb-2">
                            {getAtendimentoLabel(prof.atende, t)}
                          </div>
                          {prof.local && (
                            <div className="mb-2">
                              <span className="fw-semibold ms-n1"><FaMapMarkerAlt /> {t("professionals.location")}:</span> {prof.local}
                            </div>
                          )}
                          <div className="mb-2">
                            <span className="fw-semibold">{t("professionals.specialties")}:</span>{" "}
                            {prof.especialidades.map((esp) => (
                              <Badge key={esp} bg="secondary" className="mx-1">{t(`professionals.specialty.${esp.toLowerCase()}`)}</Badge>
                            ))}
                          </div>
                          <div className="mb-2">
                            <span className="fw-semibold">{t("professionals.rating")}:</span>{" "}
                            {[...Array(5)].map((_, i) =>
                              i < Math.round(prof.avaliacoes) ? (
                                <FaStar key={i} color="#FFD700" className="mb-1" />
                              ) : (
                                <FaRegStar key={i} color="#FFD700" className="mb-1" />
                              )
                            )}
                            <span className="ms-2 text-body-secondary">({prof.avaliacoesQtd})</span>
                          </div>
                          <div className="mt-auto">
                            <Button
                              as="a"
                              variant="outline-tertiary"
                              href={prof.contato}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-100 fw-semibold mt-2 rounded-pill shadow-sm text-body"
                            >
                              {t("professionals.contact")}
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </div>
        </Container>
      </Container>
    </Container>
  );
};
export { Professionals };