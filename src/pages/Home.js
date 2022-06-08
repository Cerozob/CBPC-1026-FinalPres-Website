import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

function Home() {
    return (
        <div>

            <NavbarComponent></NavbarComponent>
            <Container>
                <Col>

                    <Row>
                        <h1>Introducción</h1>
                    </Row>
                    <Row>
                        <h2>¿Qué hay en este sitio?</h2>
                    </Row>
                    <Row xs={1} md={2} xxl={4}>
                        <Col>
                            <Card className="linkcard">
                                <Card.Title><h3><Link to="/home">Introducción</Link></h3></Card.Title>
                                <Card.Body><p>Esta página, contiene esta misma descripción del sitio y los objetivos tanto del sitio, como entregable y como sitio web en general</p></Card.Body>
                                <Card.Footer>
                                    <icon className="material-icons-round">
                                        home
                                    </icon>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="linkcard">
                                <Card.Title><h3><Link to="/ayc">{"Arte & Ciencia"}</Link></h3></Card.Title>
                                <Card.Body><p>la argumentación sobre los objetivos del entregable con respecto al curso</p></Card.Body>
                                <Card.Footer>
                                    <icon className="material-icons-round">
                                        brush
                                    </icon>
                                    <icon className="material-icons-round">
                                        science
                                    </icon>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="linkcard">
                                <Card.Title><h3><Link to="/case">Caso de estudio</Link></h3></Card.Title>
                                <Card.Body><p>el caso de estudio elegido descrito a detalle</p></Card.Body>
                                <Card.Footer>
                                    <icon className="material-icons-round">
                                        assignment
                                    </icon>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="linkcard">
                                <Card.Title><h3><Link to="/about">Desarrollo del producto</Link></h3></Card.Title>
                                <Card.Body><p>todo lo relacionado al proceso seguido para fabricar este entregable</p>le</Card.Body>
                                <Card.Footer>
                                    <icon className="material-icons-round">
                                        info
                                    </icon>\
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <h2>Objetivos</h2>
                    <Row>
                        <Col>
                            <h3>General</h3>
                            <p>
                                Exhibir un caso de estudio en el que una forma particular de arte, en este caso, filmes antiguos que, importante, no son a color, son causa y principales contribuyentes, y beneficiarios de un desarrollo i.e proyecto proveniente de las ciencias exactas, donde efectivamente son el eje central del desarrollo realizado.
                            </p>
                        </Col>

                    </Row>
                    <h3>Específicos</h3>
                    <Row xs={1} md={2}>

                        <Col><p>describir el caso de estudio a detalle, de tal forma que se cumpla el objetivo general.</p></Col>
                        <Col><p>describir el desarrollo del producto, desde la planeación hasta este sitio final, pasando por las correcciones realizadas y dificultades encontradas.</p></Col>
                        <Col><p>Mostrar cómo este entregable aporta nuevo contenido que es útil para el curso.</p></Col>
                        <Col><p>Explicar cómo este entregable tiene sentido dado el alcance del curso y los temas vistos.</p></Col>


                    </Row>
                </Col >
            </Container>
        </div>
    );
}

export default Home;