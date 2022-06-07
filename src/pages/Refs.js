import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import googlefonts from "../assets/googlefonts.png";

export default function Refs() {
    return (
        <Container>
            <h1>Referencias</h1>

            <Row>

                <Col className="refcol">
                    <Card className="mainCard">
                        <a target="blank" href="https://neural.love/">
                            <Card.Title><h3>neural.love - Sitio</h3></Card.Title>
                            <Card.Img className="refimage" variant="bottom" src="" />
                            <Card.Body className="maincardContent">
                                <p>
                                </p>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="refcol">
                    <Card className="mainCard">
                        <a target="blank" href="">
                            <Card.Title><h3>neural.love - Responsables</h3></Card.Title>
                            <Card.Img className="refimage" variant="bottom" src="" />
                            <Card.Body className="maincardContent">
                                <p>
                                </p>
                            </Card.Body>
                        </a></Card>
                </Col>

            </Row>
            <Row>
                <Col className="refcol">
                    <Card className="mainCard">

                        <Card.Title><h3>Denis Shiryaev - Autor</h3></Card.Title>
                        <Card.Img className="refimage" variant="bottom" src="" />
                        <Card.Body className="maincardContent">
                            <p>
                                Denis Shiryaev es el CEO de neural.love. Los videos de demostración, que se usaron en este sitio, están disponibles en su canal de YouTube.
                            </p>

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col><a href="https://www.youtube.com/c/DenisShiryaev"><icon className="material-icons-round">
                                    smart_display
                                </icon></a></Col>
                                <Col><a href="https://shir-man.com/">
                                    <icon className="material-icons-round">language
                                    </icon>
                                </a>
                                </Col></Row>


                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Col className="refcol">
                    <Card className="mainCard">
                        <a target="blank" href="https://gizmodo.com/neural-networks-upscale-film-from-1896-to-4k-make-it-l-1841449875">
                            <Card.Title><h3>Gizmodo - Artículo</h3></Card.Title>
                            <Card.Img className="refimage" variant="bottom" src="" />
                            <Card.Body className="maincardContent">
                                <p></p>
                            </Card.Body>
                        </a></Card>
                </Col>

            </Row>
            <Row>
                <Col className="refcol">
                    <Card className="mainCard">
                        <a target="blank" href="https://www.wired.com/story/ai-magic-makes-century-old-films-look-new/">
                            <Card.Title><h3>Wired - Artículo</h3></Card.Title>
                            <Card.Img className="refimage" variant="bottom" src="" />
                            <Card.Body className="maincardContent">
                                <p></p>
                            </Card.Body>
                        </a></Card>
                </Col>

            </Row>
            <Row>
                <Col className="refcol">
                    <Card className="mainCard">
                        <a target="blank" href="https://blogs.nvidia.com/blog/2020/10/23/ai-startup-enhances-video/">
                            <Card.Title><h3>Nvidia - Artículo</h3></Card.Title>
                            <Card.Img className="refimage" variant="bottom" src="" />
                            <Card.Body className="maincardContent">
                                <p></p>
                            </Card.Body>
                        </a></Card>
                </Col>
            </Row>
            <Row>
                <Col className="refcol">
                    <Card className="mainCard">
                        <a target="blank" href="https://neural.love/upscale">
                            <Card.Title><h3>neural.love - Reescalado</h3></Card.Title>
                            <Card.Img className="refimage" variant="bottom" src="" />
                            <Card.Body className="maincardContent">
                                <p></p>
                            </Card.Body>
                        </a></Card>
                </Col>
            </Row>
            <Row>
                <Col className="refcol">
                    <Card className="mainCard">
                        <a target="blank" href="https://neural.love/blog/how-to-restore-and-enhance-100-year-old-movie-with-ai#step-1-restore-actual-fps-by-removing-duplicated-frames-automatically">
                            <Card.Title><h3>neural.love - procedimiento</h3></Card.Title>
                            <Card.Img className="refimage" variant="bottom" src="" />
                            <Card.Body className="maincardContent">
                                <p></p>
                            </Card.Body>
                        </a></Card>
                </Col>
            </Row>
            <Row>
                <Col className="refcol">
                    <Card className="mainCard">
                        <a target="blank" href="https://fonts.google.com/icons?selected=Material+Icons&icon.style=Rounded&icon.set=Material+Icons">

                            <Card.Title><h3>Google - íconos</h3></Card.Title>
                            <Card.Img className="refimage" variant="bottom" src={googlefonts} />
                            <Card.Body className="maincardContent">
                                <p>Los íconos usados en este sitio fueron tomados de aquí</p>
                            </Card.Body>

                        </a>
                    </Card>
                </Col>
            </Row>



        </Container >
    );
}