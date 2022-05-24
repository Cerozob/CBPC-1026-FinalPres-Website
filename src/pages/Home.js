import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <Container>
            <h1>Introducción</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Title>¿Qué hay exhibido en este sitio?</Card.Title>
                <Card.Body>Este sitio se compone de 4 secciones accesibles desde la parte superior de la página, que se describen a continuación.</Card.Body>
            </Card>
            <ul>
                <li>{"Introducción: Es esta misma página, contiene esta misma descripción del sitio y los objetivos tanto del sitio, como entregable y como sitio web en general."}</li>
                <li>{"Arte & Ciencia: Contiene la argumentación sobre los objetivos del entregable con respecto al curso en sí e información relacionada hacia lo visto y no visto en el curso a modo de revisita - reflexión."}</li>
                <li>{"Casos de estudio: Contiene el caso de estudio elegido, descrito a detalle, más otro caso cuya inclusión en este sitio es adicional y se profundiza en la sección de Desarrollo del producto."}</li>
                <li>{"Desarrollo del producto: Contiene todo lo relacionado al proceso seguido para fabricar este entregable."}</li>
            </ul>
            <h3>¿Cuál es el objetivo?</h3>
            <p>El objetivo de este entregable es exhibir un caso particular, en el que una forma particular de arte, en este caso, filmes antiguos que, importante, no son a color, son causa y principales contribuyentes, y beneficiarios de un desarrollo i.e proyecto proveniente de las ciencias exactas, donde efectivamente son el eje central del desarrollo realizado.
                Con respecto al sitio web en concreto, los objetivos son los siguientes.</p>
            <ul>
                <li>describir el caso de estudio a detalle, de tal forma que se cumpla el objetivo del párrafo anterior.</li>
                <li>describir el desarrollo del producto, desde la planeación hasta este sitio final, pasando por las correcciones realizadas y dificultades encontradas.</li>
                <li>Explicar cómo este entregable tiene sentido dado el alcance del curso y los temas vistos.</li>
                <li>Mostrar cómo este entregable aporta nuevo contenido que es útil para el curso.</li>
            </ul>
        </Container>
    );
}

export default Home;