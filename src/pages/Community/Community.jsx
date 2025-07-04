import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaPaperclip } from "react-icons/fa";
import { api } from "../../services/api";
import { useTranslation } from "react-i18next";

import { UseAppContext } from "../../hooks";

const Community = () => {
  const { usuarioLog } = UseAppContext();

  const { t } = useTranslation();

  const [timelinePosts, setTimelinePosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [postAttachment, setPostAttachment] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        const [timelineRes] = await Promise.all([
          api.get("/timeline")
        ]);
        if (isMounted) setTimelinePosts(
          timelineRes.data
            .map(post => ({
              ...post,
              createdAt: new Date(post.createdAt)
            }))
            .sort((a, b) => b.createdAt - a.createdAt)
        );
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        if (isMounted) setTimelinePosts([]);
      }
    }
    fetchData();
    return () => { isMounted = false; };
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!postText.trim() && !postAttachment) return;
    const newPost = {
      text: postText,
      attachment: postAttachment,
      createdAt: new Date().toISOString(),
      user: {
        id: usuarioLog.id,
        nome: usuarioLog.nome,
        foto: usuarioLog.foto,
      }
    };
    try {
      const res = await api.post("/timeline", newPost);
      setTimelinePosts([
        { ...res.data, createdAt: new Date(res.data.createdAt) },
        ...timelinePosts
      ]);
      setPostText("");
      setPostAttachment(null);
    } catch (err) {
      console.error("Erro ao postar na timeline:", err);
    }
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPostAttachment({
          name: file.name,
          url: reader.result,
          type: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container fluid className="py-4">
      <Row className="mb-4 w-75 mx-auto w-md-100 w-lg-90">
        <h2 className="fw-bold title text-center">{t("community.title")}</h2>
        <span className="text-body-secondary mb-3 text-center w-75 mx-auto"> {t("community.subtitle")} </span>
        <Row className="d-flex mx-auto">
          <Col className="mb-2">
            <div className="w-100 bg-body-tertiary p-3 rounded-4 border-body border d-flex flex-column align-items-center">
              <Card className="shadow-sm mb-4 rounded-2 w-75 w-md-100">
                <Card.Body>
                  <Form onSubmit={handlePostSubmit} className="">
                    <InputGroup className="mb-2">
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder={t("community.placeholder")}
                        value={postText}
                        onChange={e => setPostText(e.target.value)}
                      />
                      <InputGroup.Text as="label" htmlFor="timeline-attachment" style={{ cursor: "pointer" }}>
                        <FaPaperclip />
                        <Form.Control
                          type="file"
                          id="timeline-attachment"
                          style={{ display: "none" }}
                          onChange={handleAttachmentChange}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                    {postAttachment && (
                      <div className="mb-2">
                        {postAttachment.type.startsWith("image") ? (
                          <img src={postAttachment.url} alt={postAttachment.name} style={{ maxWidth: 120, maxHeight: 120, borderRadius: 8 }} />
                        ) : (
                          <span><FaPaperclip /> {postAttachment.name}</span>
                        )}
                      </div>
                    )}
                    <div className="d-flex justify-content-end">
                      <Button type="submit" variant="outline-success rounded-pill shadow-sm" disabled={!postText.trim() && !postAttachment}>
                        {t("community.publish")}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
              <div className="overflow-auto  rounded-2 d-flex flex-column align-items-center w-100">
                {timelinePosts.length === 0 && (
                  <div className="text-center text-muted mb-3">{t("community.noPosts")}</div>
                )}
                {timelinePosts.map(post => (
                  <Card key={post.id} className="mb-3 shadow-sm rounded-4 w-75 w-md-100">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-2">
                        <img
                          src={post.user.foto}
                          alt={post.user.nome}
                          style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", marginRight: 10 }}
                        />
                        <div>
                          <div className="fw-bold">{post.user.nome}</div>
                          <div className="text-muted" style={{ fontSize: 12 }}>
                            {new Date(post.createdAt).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}
                          </div>
                        </div>
                      </div>
                      <div style={{ whiteSpace: "pre-line" }}>{post.text}</div>
                      {post.attachment && (
                        <div className="mt-2">
                          {post.attachment.type && post.attachment.type.startsWith("image") ? (
                            <img src={post.attachment.url} alt={post.attachment.name} style={{ maxWidth: 180, maxHeight: 180, borderRadius: 8 }} />
                          ) : (
                            <a href={post.attachment.url} download={post.attachment.name}> {post.attachment.name} </a>
                          )}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export { Community };