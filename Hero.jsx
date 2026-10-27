import React from 'react';

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