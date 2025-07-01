import { useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa6";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { stars } from "../../assets";

const FrequentlyAskedQuestions = () => {

  const { t } = useTranslation();
  const [activeQuestion, setActiveQuestion] = useState(null);
  const questions = t('faq.questions', { returnObjects: true });

  return (
    <Container fluid style={{ minHeight: "75vh" }}>
      <img src={stars} className='d-none d-lg-block position-absolute ms-xxl-3 ms-n4 py-2 mb-5' height={280} />
      <Container className="bg-primary py-4">
        <main className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
          <h1 className="title fw-bold mt-2 text-center">{t('faq.faqTitle')}</h1>
          <p className="w-md-100 text-center w-50"> {t('faq.faqSubheading')} </p>
          <div className="d-flex flex-column gap-3 w-75 w-md-100">
            {questions.map((item) => {
              const show = activeQuestion === item.id;
              return (
                <div key={item.id} className="w-100 border-2 border-tertiary border-bottom h-100">
                  <button
                    className="fs-5 w-100 text-start d-flex align-items-center justify-content-between px-3 py-3 border-0 bg-transparent"
                    style={{ outline: "none", cursor: "pointer" }}
                    onClick={() => setActiveQuestion(show ? null : item.id)}
                    aria-expanded={show}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="fw-semibold">{item.question}</span>
                    <FaChevronDown style={{ minHeight: "1.5rem", minWidth: "1.5rem" }} className={`ms-2 transition ${show ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {show && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        key="content"
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="px-3 pb-3" dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </main>
      </Container>

    </Container>
  );
}

export { FrequentlyAskedQuestions };