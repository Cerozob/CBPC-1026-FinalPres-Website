import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import astronorm from '../assets/astronorm.png';
import astroresc from '../assets/astroresc.png';
import colorer from '../assets/colorer.mp4';
import frameinterpolation from '../assets/frameinterpolation.mp4';
import japanlady from '../assets/japanlady.mp4';
import japanmovementnew from '../assets/japanmovementnew.mp4';
import japanmovementold from '../assets/japanmovementold.mp4';
import japannew from '../assets/japannew.png';
import japanold from '../assets/japanold.png';
import markiv_enhanced from '../assets/markiv_enhanced.jpg';
import markiv from '../assets/markiv.jpg';
import mynew from '../assets/mynew.png';
import myold from '../assets/myold.png';
import upscaling from '../assets/upscaling.mp4';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import rovershaky from '../assets/rovershaky.mp4';
import roverstabilized from '../assets/roverstabilized.mp4';

export default function Case() {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Container>
                <h1>Uso de inteligencia artificial para "recrear" videos</h1>

                <h2>Sobre el caso</h2>

                <h3>Vistazo rápido</h3>
                <p>
                    El caso de estudio contempla una descripción de las técnicas usadas por <a href="https://neural.love/">neural.love</a>, una empresa dedicada a la recreación y "mejoramiento" de medios visuales, para manipular videos, el propósito de aplicar estas técnicas, y las consecuencias que trae usarlas, que más adelante se verá cómo resulta una situación interesante de analizar desde un punto de vista artístico.
                </p>
                <h3>Cómo funciona</h3>
                <p>
                    El procedimiento técnico descrito a continuación se compone de una serie de pasos que se ejecutan en orden sobre un video, que en este caso corresponde al filme a recrear o "mejorar", para al final obtener el resultado recreado.
                </p>
                <Row xs={1} >
                    <Col><Card className="mainCard"><Card.Title><h3>Paso 1</h3></Card.Title>
                        <Card.Body>
                            <p>Se agregan fotogramas intermedios faltantes, conservando el movimiento natural, reduciendo el ruido y la duplicación de fotogramas
                            </p>
                            <video className="result" src={frameinterpolation} autoPlay={true} loop={true} muted={true}>
                            </video>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row xs={1} >
                    <Col><Card className="mainCard"><Card.Title><h3>Paso 2</h3></Card.Title>
                        <Card.Body>
                            <p><a href="https://neural.love/upscale">Aumentar el detalle del video reescalándolo</a>, esto es, convertir el video original a una versión con una mayor definición.
                            </p>
                            <ReactCompareSlider changePositionOnHover={true} style={{ "max-width": "75%", "margin-bottom": "5vh" }} itemOne={<ReactCompareSliderImage src={astronorm} />} itemTwo={<ReactCompareSliderImage src={astroresc} />}></ReactCompareSlider>
                            <video className="result" src={upscaling} autoPlay={true} loop={true} muted={true}>
                            </video>
                        </Card.Body>
                    </Card></Col>

                </Row>
                <Row xs={1} >
                    <Col><Card className="mainCard"><Card.Title><h3>Paso 3</h3></Card.Title>
                        <Card.Body>
                            <p>Estabilizar el video, esto significa, alinear los fotogramas del video para eliminar el movimiento que tenía la cámara al momento de filmar.
                            </p>
                            <ReactCompareSlider className="comparervideo" onlyHandleDraggable={false} changePositionOnHover={false} itemOne={<video className="videoComparison" src={rovershaky} autoPlay={true} loop={true} muted={true}></video>} itemTwo={<video className="videoComparison" src={roverstabilized} autoPlay={true} loop={true} muted={true}></video>} />
                        </Card.Body>
                    </Card></Col>

                </Row>
                <Row xs={1} >
                    <Col><Card className="mainCard"><Card.Title><h3>Paso 4</h3></Card.Title>
                        <Card.Body>
                            <p>Agregar colores naturales al video original en blanco y negro.
                            </p>
                            <video className="result" src={colorer} autoPlay={true} loop={true} muted={true}>
                            </video>
                        </Card.Body>
                    </Card></Col>
                </Row>


                <p>Aclarando que, en cada paso de los anteriormente descritos, conviene agregar "usando inteligencia artificial", puesto que cada paso usa su propio sistema independiente para lograr su propósito, una analogía intuitiva es ver el proceso como la fabricación de un producto, donde el producto final (video recreado o "mejorado") se fabrica a partir de un material inicial (el video original), pasando por varios procesos de por medio. No es necesario entrar en detalle de cómo cada paso se hace, esto porque para cada paso hay múltiples sistemas que pueden cumplir con cada tarea, muchos de ellos gratuitos y de uso libre.</p>
                <h3>Qué se pretende</h3>
                <p>El objetivo principal de este desarrollo es simple, demostrar que es posible obtener un video que sea percibido como realista y natural en materia de movimiento y colores, a partir de un material original que carece de estas características, comparando ambos metrajes bajo un estándar moderno.</p>
                <p>Luego, el propósito no es restaurar, preservar ni recrear arte, sino que es mucho más general, por lo menos en cuánto al desarrollo. Sin embargo, bien podría usarse esta herramienta para, efectivamente, recrear o crear nuevo arte usando medios artificiales.</p>
                <Card className="mainCard">
                    <Card.Title><h4>Ejemplo de un fotograma</h4></Card.Title>
                    <Card.Body>
                        <p>Note que a simple vista, el resultado es satisfactorio, logrando imitar la calidad de una pintura o una fotografia a color</p>
                        <ReactCompareSlider itemOne={<ReactCompareSliderImage src={myold} />} itemTwo={<ReactCompareSliderImage src={mynew} />} />
                    </Card.Body>
                </Card>

                <h3>¿Es perfecto?</h3>

                <Card className="mainCard">
                    <Card.Title><h4>No - Movimiento</h4></Card.Title>
                    <Card.Body>
                        <p>Es evidente que esta técnica tiene problemas al encontrarse con movimientos rápidos y cambios de iluminación</p>
                        <ReactCompareSlider itemOne={<video className="videoComparison" src={japanmovementold} autoPlay={true} loop={true} muted={true}></video>} itemTwo={<video className="videoComparison" src={japanmovementnew} autoPlay={true} loop={true} muted={true}></video>} />
                    </Card.Body>
                </Card>

                <Card className="mainCard">
                    <Card.Title><h4>No - Colores</h4></Card.Title>
                    <Card.Body>
                        <p>Es igual de notorio el constante cambio de tonos del video, en este ejemplo, una mujer pasa al frente de la cámara lo suficientemente rápido como para que el sistema no logre colorearla</p>
                        <video className="videoComparison" src={japanlady} autoPlay={true} loop={true} muted={true}></video>
                        <p>Además de lo anterior, los videos mantienen un tono amarillento-sepia</p>
                        <ReactCompareSlider changePositionOnHover={true} itemOne={<ReactCompareSliderImage src={japanold} />} itemTwo={<ReactCompareSliderImage src={japannew} />}></ReactCompareSlider>
                    </Card.Body>
                </Card>
                <p>Al igual que con las técnicas de restauración y preservación vistas en el curso, en este caso de "re-imaginación" de filmes, los resultados no son correctos todo el tiempo y en realidad son muy propensos a fallar. Aquí la diferencia, frente a las situaciones de restauración de objetos físicos, radica en que el objeto original nunca se modifica, que, sumado a la relativa velocidad del proceso, es posible reintentarlo múltiples veces hasta obtener un resultado satisfactorio, teniendo en cuenta que, en la práctica, la diferencia entre "satisfactorio" a ras, y "perfecto", puede ser imperceptible.</p>
                <h3>¿Es arte, recreación, restauración, u otra cosa?</h3>

                <Card className="mainCard">
                    <Card.Title><h4>Por ejemplo</h4></Card.Title>
                    <Card.Body>
                        <p>La siguiente imagen corresponde a una fotografía de un Tanque de la primera guerra mundial, se procesó usando las técnicas anteriores (aplicables a imagenes) en el sitio de neural.love y se obtuvo el resultado de la derecha</p>
                        <ReactCompareSlider changePositionOnHover={true} boundsPadding={50} portrait={true} itemOne={<ReactCompareSliderImage src={markiv} />} itemTwo={<ReactCompareSliderImage src={markiv_enhanced} />}></ReactCompareSlider>
                        <p> Evidentemente son imagenes distintas y bastante, la duda es entonces si esta nueva imagen podría considerarse arte nuevo, o es más bien una copia del original?, cabe mencionar que los datos que agrega el sistema para color y demás son, técnicamente, puras invenciones sin relación alguna con la realidad.</p>
                    </Card.Body>
                </Card>
                <p>lo largo de este caso se hace uso del término "recreación" para referirse a los filmes que son resultado del proceso descrito en "Cómo funciona", debido a que este proceso modifica el metraje original de tal forma que definir un resultado como "restauración" es cuestionable, por no decir que directamente no es una restauración  (a pesar de que el sitio de neural.love explícitamente menciona la palabra "restauración") porque, primero, no es completamente fiel al metraje original, y segundo, los objetos digitales manejan conceptos muy distintos a los físicos en cuánto a degradación, deterioro y desgaste se refiere, por lo que, incluso siendo restauraciones, seguirían difiriendo demasiado de las restauraciones de elementos físicos. Por lo que los videos son mejor definidos como "recreaciones", "remezclas" o "reimaginaciones".</p>
                <p>
                    Debido a lo anterior, podría debatirse que estas recreaciones son arte nuevo, creado de manera artificial, de la misma forma en la que un músico puede publicar una reimaginación, de una composición de otro músico y hacerla pasar legalmente como de su propia autoría, mientras este reconozca el trabajo inicial del compositor original. Desde un punto de vista artístico, sí se puede considerar que los videos generados de esta forma son nuevas piezas de arte, esto porque no sólo son distintas a su versión original, sino que son diferentes a cualquier otra pieza de arte de la misma naturaleza existente. Esto último razonado a partir de que, si ya existieran piezas idénticas a las creadas por el sistema, significaría que no habría razón para que este exista puesto que sólo funcionaría como un replicador de videos. Además, ya que el proceso agrega más elementos a la pieza original, elementos que no existían y son obtenidos de un proceso muy similar al humano, que consiste en "adivinar" a partir de experiencias anteriores, dónde, "adivinar", para un sistema significa elegir números de forma casi-aleatoria, se podría debatir a favor del argumento afirmando que este proceso simula la creatividad humana.
                    Por otro lado, puede no ser considerable como arte nuevo al, ser un proceso artificial, por ser una simulación, y por copiar arte ya existente de forma explícita, cambiando elementos sin que dichos elementos sean realmente creativos, puesto que en este caso el sistema se enfoca en imitar la estética de la vida real, enfoque que nulifica creatividad alguna.</p>
                <p>Luego, la conclusión es que, una pieza producida por el sistema descrito no es arte nuevo si el criterio a considerar es creatividad u originalidad. Sin embargo, sí que se puede considerar arte si se toma un último punto de vista, el del autor, de cada video creado, el autor es un sistema, sin embargo, este sistema también tiene autores, que son un grupo de personas que usaron su conocimiento y talento para crear un sistema capaz de mejorar un video antiguo. Proceso que sí se puede considerar como creativo, original y que requiere de acciones humanas propias no reproducibles, por lo que el sistema en sí, puede considerarse como una pieza de arte en toda regla, mientras que sus derivados no, estos últimos relegándose a ser catalogados como recreaciones.</p>

                <h3>Futuros avances en este caso</h3>
                <p>Este desarrollo podría integrarse con más herramientas ya existentes para continuar contribuyendo al arte.</p>
                <ul>
                    <li>Preservación digital de arte de alta calidad usando las capacidades de agregar detalle de este desarrollo, para mejorar las técnicas actuales de escaneo, o para reducir el tiempo que toma realizar el procedimiento convencional.</li>
                    <li>Aplicar técnicas de agregado - recuperación de detalle (aumento de resolución); remoción de imperfecciones (ruido); y ajustes de velocidad de reproducción a fuentes de audio, de manera que se pueda lograr que el audio de los videos originales, si existe en primer lugar, se pueda preservar y mejorar al aplicar el proceso de recreación a un video, o aplicar el proceso directamente a fuentes de audio antiguas. Que cabe mencionar,<a href="https://neural.love/enhance-audio">ya ha sido anunciado como propuesta</a></li>
                </ul>
                <h3>Por qué se eligió este caso de ejemplo</h3>
                <ul>
                    <li>El desarrollo realizado por neural.love contiene arte como dependencia directa tanto para su funcionamiento e implementación como para su propósito en sí. Lo que significa que, si no existieran imágenes o videos antiguos que pudieran mejorarse usando esta tecnología, ya sea porque no existieran o no fuera necesario, o de plano no existieran los videos, el proyecto completo perdería el sentido ya que, por una parte, no habría información con la cual lograr que el sistema funcione correctamente, causando que este se vuelva inútil; por otro lado, tampoco tendría sentido usar esta tecnología para mejorar videos e imágenes que ya cuentan con calidad suficiente, puesto que la mejoría es negligible.</li>
                    <li>La mayoría de los casos de relación arte - ciencia vistos a lo largo del curso tienen un inconveniente importante con respecto al aprendizaje sobre los mismos, que radica en la reproducibilidad de los resultados de lo estudiado. Es decir, acciones como aplicar técnicas de restauración o preservación de obras de arte antiguas no es para nada recreable por un individuo que no sea un conocedor del tema o no tenga acceso a los materiales necesarios para ejecutar algo así. Por lo que este caso se torna interesante en el sentido de que es recreable casi en su totalidad partiendo desde cero por un individuo que no necesariamente sea un especialista en el área, siguiendo guías disponibles en internet, hechas por expertos en el tema, <a href='https://towardsdatascience.com/colorizing-old-b-w-photos-and-videos-with-the-help-of-ai-76ba086f15ec'>como esta guía hecha por Marcelo Rovai</a>, maestro en ciencia de datos.</li>
                    <li>El desarrollo de neural.love no es el más sofisticado, ni el primero de su tipo, ni el mejor de su clase, sin embargo, su sistema sigue siendo excelente y cuenta con una ventaja sobre los demás que es crucial para su elección como caso de estudio de este sitio. Las fuentes usadas para investigar sobre neural.love tienen la característica de ser enunciadas por ellos mismos o ser <a href="https://neural.love/blog/how-to-restore-and-enhance-100-year-old-movie-with-ai">ellos directamente</a>. Esto, combinado con las evidencias que muestran y la facilidad que hay para recrear sus resultados, causa que este caso sea mucho más sencillo de verificar como verdadero y útil, facilitando también la investigación de este.</li>
                    <li>Este caso de estudio es conveniente para acercar una de las áreas de estudio de mi carrera, inteligencia artificial y análisis de imágenes, hacia el objetivo principal del curso. Por lo que, aparte de aportar algo desde un área alejada de lo visto en clase, funciona como motivación para realizar una investigación genuina y que vaya más allá de entregar una tarea.</li>
                </ul>
                <h3>Cómo la ciencia aporta al arte en este caso</h3>
                <p>En este caso, se evidencia que el sistema de mejoramiento de imágenes y videos aporta nuevas piezas de arte que son interesantes dentro del área de estudio del arte debido a sus características particulares de ser artificiales y ser recreaciones, que, sin ayuda de un sistema como este, serían casi imposibles de fabricar solamente a partir de talento humano, como ocurre normalmente con piezas de arte.</p>
                <h3>Cómo el arte aporta a la ciencia en este caso</h3>
                <p>La disciplina del arte, y en concreto los artistas con sus creaciones, aportan el activo más importante de todo el sistema, que es la información. La información otorgada por los datos de las diferentes imágenes y videos filmados y creados por seres humanos es crucial para que el sistema creado por neural.love pueda funcionar de la forma en la que lo hace. Lo anterior debido a que la forma en la que funcionan estos sistemas es basada en una primera fase de entrenamiento que se realiza con datos reales, y, en este caso, los datos reales sólo pueden provenir de artistas con piezas para ofrecer porque son las únicas fuentes de arte original que existen en la actualidad.</p>
            </Container>
        </div >
    );
}