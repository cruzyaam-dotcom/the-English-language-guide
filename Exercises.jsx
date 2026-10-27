import React, { useState } from 'react';

function Exercises() {
    const [resultados, setResultados] = useState({});

    const verificar = (nivel) => {
        const respuestas = document.querySelectorAll(#ejercicios-${nivel} .respuesta);
        let aciertos = 0;
        respuestas.forEach(input => {
            const correctas = input.dataset.correcto.split(' / ').map(r => r.trim().toLowerCase());
            if (correctas.includes(input.value.trim().toLowerCase())) aciertos++;
        });
        setResultados({...resultados, [nivel]: ${aciertos} de ${respuestas.length} correctas});
    };

    return (
        <section className="ejercicios" id="ejercicios">
            <h2>Ejercicios Prácticos</h2>

            {/* Básico */}
            <div className="bloque-ejercicio" id="ejercicios-basico">
                <h3>📘 Nivel Básico</h3>
                <div className="formulario">
                    <h4>1. Presente Continuo</h4>
                    <div className="pregunta"><p>We ___ (play) soccer now.</p><input type="text" className="respuesta" data-correcto="are playing" /></div>
                    <button className="btn-verificar" onClick={() => verificar('basico')}>Verificar</button>
                    <div className="resultado">{resultados.basico || ''}</div>
                </div>
            </div>

            {/* Intermedio */}
            <div className="bloque-ejercicio" id="ejercicios-intermedio">
                <h3>📙 Nivel Intermedio</h3>
                <div className="formulario">
                    <h4>1. Will / Going to</h4>
                    <div className="pregunta">
                        <p>I bought tickets, so I ___ travel next week.</p>
                        <select className="respuesta" data-correcto="am going to">
                            <option value="">Selecciona</option>
                            <option value="am going to">am going to</option>
                            <option value="will">will</option>
                        </select>
                    </div>
                    <button className="btn-verificar" onClick={() => verificar('intermedio')}>Verificar</button>
                    <div className="resultado">{resultados.intermedio || ''}</div>
                </div>
            </div>

            {/* Avanzado */}
            <div className="bloque-ejercicio" id="ejercicios-avanzado">
                <h3>📕 Nivel Avanzado</h3>
                <div className="formulario">
                    <h4>1. Matices de tiempo</h4>
                    <div className="pregunta"><p>It ___ rain soon — look at the clouds!</p>
                    <select className="respuesta" data-correcto="is going to">
                        <option value="">Selecciona</option>
                        <option value="is going to">is going to</option>
                        <option value="will">will</option>
                    </select></div>
                    <button className="btn-verificar" onClick={() => verificar('avanzado')}>Verificar</button>
                    <div className="resultado">{resultados.avanzado || ''}</div>
                </div>
            </div>
        </section>
    );
}

export default Exercises;