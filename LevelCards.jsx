[6:34 p. m., 26/10/2026] Alexa: import React from 'react';

function Hero() {
    return (
        <section className="hero">
            <div className="contenido-hero">
                <div className="texto-hero">
                    <h1>Aprende Inglés Gratis</h1>
                    <p>Todos los contenidos y ejercicios para aprender inglés a tu ritmo, desde básico hasta avanzado.</p>
                    <div className="buscador">
                        <input type="text" placeholder="Buscar tema o ejercicio..." />
                        <button className="btn-buscar">→</button>
                    </div>
                    <a href="#niveles" className="btn-principal">Explorar Cursos</a>
                </div>
                <div className="logo-hero">
                    <img src="logo.png" alt="The English Language Guide" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
[6:35 p. m., 26/10/2026] Alexa: import React from 'react';

function LevelCards() {
    const niveles = [
        {
            id: 'basico',
            titulo: 'Nivel básico',
            desc: 'Presente Continuo, Pasado Simple, There is/are, Can y preguntas Wh-.'
        },
        {
            id: 'intermedio',
            titulo: 'Nivel intermedio',
            desc: 'Futuro (Will/Going to), Presente Perfecto, pronombres y estructuras complejas.'
        },
        {
            id: 'avanzado',
            titulo: 'Nivel avanzado',
            desc: 'Matices de tiempos verbales, diferencias y usos profesionales.'
        }
    ];

    return (
        <section className="niveles" id="niveles">
            <h2>Nuestros Niveles</h2>
            <div className="contenedor-niveles">
                {niveles.map(nivel => (
                    <div key={nivel.id} className="tarjeta-nivel">
                        <div className={ilustracion ${nivel.id}}></div>
                        <h3>{nivel.titulo}</h3>
                        <p>{nivel.desc}</p>
                        <a href={#ejercicios-${nivel.id}} className="btn-tarjeta">Ver ejercicios</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LevelCards;