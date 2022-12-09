import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import GoogleFontsLogo from "../assets/googlefonts.png";
import GizmodoLogo from "../assets/gizmodo.svg";
import WiredLogo from "../assets/wired.svg";
import NeuralLoveLogo from "../assets/neurallove.svg";
import NvidiaLogo from "../assets/nvidia.svg";
import NavbarComponent from '../components/NavbarComponent';

export default function Refs() {

    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Container>
                <h1>Referencias</h1>

                <Row xs={1} md={2} xxl={4}>

                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a target="blank" href="https://neural.love/">
                                <Card.Title><h3 className="ref-link">neural.love - Sitio</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={NeuralLoveLogo} id="neuralovelogo" />
                            </a>
                            <Card.Body className="maincardContent">
                                <p>El sitio principal donde se puede probar la tecnología desarrollada por la empresa del mismo nombre. Múltiples secciones de contenido se generaron a partir del contenido de este sitio.
                                </p>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a target="blank" href="https://neural.love/about">
                                <Card.Title><h3 className="ref-link">neural.love - Responsables</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={NeuralLoveLogo} id="neuralovelogo" /></a>
                            <Card.Body className="maincardContent">
                                <p>
                                    Subsección del sitio con información resumida sobre los creadores de esta empresa.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a href="https://www.youtube.com/c/DenisShiryaev" target="blank">
                                <Card.Title><h3 className="ref-link">Denis Shiryaev - Autor</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={NeuralLoveLogo} id="neuralovelogo" /></a>
                            <Card.Body className="maincardContent">
                                <p>
                                    Denis Shiryaev es el CEO de neural.love. Los videos de demostración, que se usaron en este sitio, están disponibles en su canal de YouTube.
                                </p>

                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col><a target="blank" href="https://www.youtube.com/c/DenisShiryaev"><icon className="material-icons-round">
                                        smart_display
                                    </icon></a></Col>
                                    <Col><a target="blank" href="https://shir-man.com/">
                                        <icon className="material-icons-round">language
                                        </icon>
                                    </a>
                                    </Col></Row>


                            </Card.Footer>
                        </Card>
                    </Col>


                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a target="blank" href="https://gizmodo.com/neural-networks-upscale-film-from-1896-to-4k-make-it-l-1841449875">
                                <Card.Title><h3 className="ref-link">Gizmodo - Artículo</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={GizmodoLogo} /></a>
                            <Card.Body className="maincardContent">
                                <p>
                                    Uno de los artículos usado en este sitio.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a target="blank" href="https://www.wired.com/story/ai-magic-makes-century-old-films-look-new/">
                                <Card.Title><h3 className="ref-link">Wired - Artículo</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={WiredLogo} /></a>
                            <Card.Body className="maincardContent">
                                <p>
                                    Un segundo artículo usado en este sitio, muy similar al anterior.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a target="blank" href="https://blogs.nvidia.com/blog/2020/10/23/ai-startup-enhances-video/">
                                <Card.Title><h3 className="ref-link">Nvidia - Artículo</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={NvidiaLogo} /></a>
                            <Card.Body className="maincardContent">
                                <p>
                                    Artículo de Nvidia. Se parafrasea la sección dónde hablan de realizar el trabajo de forma manual.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a target="blank" href="https://neural.love/upscale">
                                <Card.Title><h3 className="ref-link">neural.love - Reescalado</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={NeuralLoveLogo} id="neuralovelogo" /></a>
                            <Card.Body className="maincardContent">
                                <p>
                                    Subsección del sitio principal donde explican cómo funciona el reescalado de imágenes para crear multimedia de mayor resolución.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a target="blank" href="https://neural.love/blog/how-to-restore-and-enhance-100-year-old-movie-with-ai#step-1-restore-actual-fps-by-removing-duplicated-frames-automatically">
                                <Card.Title><h3 className="ref-link">neural.love - procedimiento</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={NeuralLoveLogo} id="neuralovelogo" /></a>
                            <Card.Body className="maincardContent">
                                <p>
                                    Subsección del sitio principal donde se explican las consideraciones a tener en cuenta durante el procedimiento de mejora de multimedia.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="refcol">
                        <Card className="mainCard refCard">
                            <a target="blank" href="https://fonts.google.com/icons?selected=Material+Icons&icon.style=Rounded&icon.set=Material+Icons">

                                <Card.Title><h3 className="ref-link">Google - íconos</h3></Card.Title>
                                <Card.Img className="refimage" variant="bottom" src={GoogleFontsLogo} /></a>
                            <Card.Body className="maincardContent">
                                <p>Los íconos usados en este sitio fueron tomados de aquí</p>
                            </Card.Body>


                        </Card>
                    </Col>
                </Row>



            </Container >
        </div>
    );
}