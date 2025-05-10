'use client';
import React, { useState } from "react";

const Carta = () => {
  const [isAbierto, setIsAbierto] = useState(false);
  const [isMostrandoCarta, setIsMostrandoCarta] = useState(false);
  const [isCerrandoCarta, setIsCerrandoCarta] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (
      target.matches(".sobre") ||
      target.matches(".solapa-derecha") ||
      target.matches(".solapa-izquierda") ||
      target.matches(".corazon")
    ) {
      setIsAbierto((prev) => !prev);
    } else if (target.matches(".sobre *")) {
      if (!isAbierto) {
        setIsMostrandoCarta(true);
        setTimeout(() => {
          setIsMostrandoCarta(false);
          setIsAbierto(true);
        }, 500);
      } else {
        setIsCerrandoCarta(true);
        setTimeout(() => {
          setIsCerrandoCarta(false);
          setIsAbierto(false);
        }, 500);
      }
    }
  };

  return (
    <div className="contenedor-layout">
      <div className="lateral izquierdo">
        <img src="https://static.guiainfantil.com/media/52640/postales-por-el-dia-de-la-madre.jpg" alt="Decoración 1" className="decoracion" />
        <img src="https://img.freepik.com/vector-gratis/letras-dia-madre-dibujadas-mano-espanol_23-2149346304.jpg?semt=ais_hybrid&w=740" alt="Decoración 2" className="decoracion" />
      </div>

      <div className="envoltura-sobre" onClick={handleClick}>
        <div className={`sobre ${isAbierto ? "abierto" : ""}`}>
          <div className={`carta ${isMostrandoCarta ? "mostrar-carta" : ""} ${isCerrandoCarta ? "cerrando-carta" : ""}`}>
            <div className="contenido">
              <strong>Querida Mamá</strong>
              <p>
                Hoy es <strong>Tu día mamá</strong>, que nos enseñó con
                <em> amor</em>, la <em>paciencia</em> y sacrificio (como en las
                películas). Gracias, mamá, por ser refugio en los días difíciles, por
                cada sonrisa que nos regalaste aún en medio del cansancio y por tu
                fuerza que siempre nos inspira."<strong>te amo</strong>" en 
                <strong>LED gigante</strong> Tu amor es el motor silencioso que impulsa
                nuestras vidas. Nada en este mundo se compara con tu entrega y tu
                corazón. Hoy y siempre, te honramos y te agradecemos por todo lo que
                eres. Gracias por hacer de mi vida una versión mejorada, sin errores
                (bueno, quizá con algunos, pero todos adorables). <br /> 
                <strong>Feliz Día Mamá</strong>, mi <em>lugar seguro</em>. <br /> Con
                mucho <strong>código</strong> (y <strong>amor</strong>), <br /> Tu hijo
                programador. <br /> <span style={{ fontSize: "0.9em", color: "grey" }}>
                  PD: Si esta carta fuera un programa, su salida sería:
                </span> 
                <br /> <code>"Gracias por darme la vida mamá, Te amo mucho mamá ❤️."</code>
              </p>
            </div>
          </div>
          <div className="corazon"></div>
        </div>
      </div>

      <div className="lateral derecho">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Carta;
