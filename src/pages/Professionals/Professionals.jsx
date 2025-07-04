import { useEffect, useState } from "react";
import { Card, Col, Row, Button, Badge, Container, Dropdown, Pagination } from "react-bootstrap";
import { FaStar, FaRegStar, FaUserCheck, FaWheelchair, FaHeart, FaRegHeart, FaMapMarkerAlt } from "react-icons/fa";
import { api } from "../../services";
import { useTranslation } from "react-i18next";
import { UseAppContext } from "../../hooks";
import { MdElderly } from "react-icons/md";
import { motion, AnimatePresence } from 'motion/react';
import { FaFilter } from "react-icons/fa6";
import { CustomPagination } from "../../components";

const Professionals = () => {
  const { t } = useTranslation();
  const { getAtendimentoLabel, usuarioLog } = UseAppContext();

  const [filter, setFilter] = useState("");
  const [professionals, setProfessionals] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const fav = localStorage.getItem("favoriteProfessionals");
    return fav ? JSON.parse(fav) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const professionalsPerPage = 9;

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

  useEffect(() => {
    if (usuarioLog?.id) {
      api.get(`/usuarios/${usuarioLog.id}`)
        .then(res => setFavorites(res.data.favoritos || []));
    }
  }, [usuarioLog]);

  const toggleFavorite = async (id) => {
    let newFavs;
    if (favorites.includes(id)) {
      newFavs = favorites.filter(fav => fav !== id);
    } else {
      newFavs = [...favorites, id];
    }
    setFavorites(newFavs);

    if (usuarioLog?.id) {
      await api.patch(`/usuarios/${usuarioLog.id}`, { favoritos: newFavs });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const specialties = Array.from(
    new Set(
      professionals.flatMap(prof => prof.especialidades || [])
    )
  );

  var filteredProfessionals = filter
    ? professionals.filter(prof => (prof.especialidades || []).includes(filter))
    : professionals;

  if (showOnlyFavorites) {
    filteredProfessionals = filteredProfessionals.filter(prof => favorites.includes(prof.id));
  }

  const indexOfLast = currentPage * professionalsPerPage;
  const indexOfFirst = indexOfLast - professionalsPerPage;
  const currentProfessionals = filteredProfessionals.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProfessionals.length / professionalsPerPage);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };


  return (
    <Container fluid className="m-0 p-0 d-flex align-items-center justify-content-center flex-column">
      <Container className="p-0 m-0 px-md-3">
        <div className="d-flex justify-content-between align-items-center my-4 p-2 top-0 z-1 mx-2 h-100 w-100 bg-primary flex-md-column">
          <div className="lh-1 mx-4">
            <h5 className="title fw-semibold">{t("professionals.title", "Veja o perfil dos nossos profissionais disponíveis na plataforma: ")}</h5>
            <span className="text-body-secondary">{t("professionals.subtitle", "Se gostar de algum, entre em contato!")}</span>
          </div>
          <div className="d-flex flex-md-column gap-2 me-2 h-100 w-md-100 align-items-center justify-content-center mt-4">
            <Dropdown className="h-100 w-md-75 d-flex">
              <Dropdown.Toggle className="rounded-pill shadow-sm d-flex align-items-center gap-2 cta-gradient-btn text-body w-100 justify-content-center">
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
            <Button
              variant={showOnlyFavorites ? "danger" : "outline-danger"}
              className="rounded-pill shadow-sm d-flex align-items-center gap-2 justify-content-center w-md-75"
              onClick={() => setShowOnlyFavorites(fav => !fav)}
              aria-pressed={showOnlyFavorites}
              title={t("professionals.onlyFavorites", "Mostrar apenas favoritos")}
            >
              <FaHeart />
              {showOnlyFavorites ? t("professionals.onlyFavoritesOn", "Apenas favoritos") : t("professionals.onlyFavoritesOff", "Todos")}
            </Button>
          </div>
        </div>
        <Container className="border bg-body border-body py-3 rounded-2 mb-lg-3">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "83vh" }}>
            <Row className="p-3 g-4 w-100 justify-content-center">
              <AnimatePresence>
                {currentProfessionals.map(prof => (
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
                    transition={{ duration: 0.4, type: "ease" }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.01,
                        y: -8,
                        boxShadow: "0 4px 12px 0 var(--bs-primary)",
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
                            className="w-100 rounded-top-4"
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
                              <Badge key={esp} bg="info" className="mx-1">{t(`professionals.specialty.${esp.toLowerCase()}`)}</Badge>
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
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </Container>
      </Container>
    </Container>
  );
};

export { Professionals };