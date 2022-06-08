import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';

export default function Ayc() {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Container>
                <h1>{"Arte & Ciencia"}</h1>

                <p>Comprender y cumplir con la totalidad de los objetivos del curso no es viable en un entregable final puesto que habría que ampliar demasiado la temática a tratar y el caso de estudio investigado. Por lo cual, este sitio se enfoca en los objetivos de:</p>
                <ul>
                    <li>Aportar a la conexión arte - ciencias por medio de un caso que evidencia una relación tecnología - artes visuales. Abarcando así una rama específica de cada área.</li>
                    <li>Aportar a la subjetividad de la valoración del arte, a partir de una discusión sobre piezas digitales creadas artificialmente.</li>
                    <li>Fortalecer el entendimiento de las diferentes relaciones entre arte y ciencia investigando un caso dónde ambas disciplinas dependen mutuamente.</li>
                </ul>
                <p>Aparte, este sitio difiere frente a los objetivos del curso en que la materialidad del arte no es objeto de estudio ni es referenciada, debido a que, en cuánto a las artes visuales, este sitio se centra en los medios digitales, por lo que sólo se hace mención a este tema de forma reducida.</p>
                <h3>El enlace Arte-Ciencia completo, que no se profundizó en el curso</h3>
                <p>La metodología de casos de estudio vista en el curso en cada clase resultó en una profundización muy extensa frente a la relación desde la ciencia hacia el arte, esto, refiriéndose a que el curso se enfocó en mostrar cómo diferentes ramas de las ciencias exactas aportaban herramientas y conocimiento directamente hacia el mundo del arte, para, en general, mejorar la calidad de piezas físicas de arte. Pero, y es la razón de existir de este trabajo, durante el desarrollo del semestre no se realizó el camino de vuelta con la misma profundidad y detalle, con el "camino de vuelta", haciendo alusión al camino desde las disciplinas del arte hacia la de las ciencias exactas. Lo anterior cobra sentido en términos de formación práctica y laboral ya que el objetivo de las ciencias como tal es ganar conocimiento para facilitar las actividades humanas, luego tiene todo el sentido del mundo que ese sea el enfoque del curso, ver cómo las ciencias aplicadas sirven en casos reales.</p>
                <p>
                    A pesar de lo anterior, sigue siendo interesante investigar cómo un área de estudio que no tiene como objetivo la investigación sino la expresión y la exhibición de creatividad y talento humano, es capaz de aportar conocimiento de la misma manera que lo haría un proceso investigativo.</p>

            </Container>
        </div>
    );
}