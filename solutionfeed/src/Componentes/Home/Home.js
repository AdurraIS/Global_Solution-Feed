import "./Home.css";
import imgearth from "../../Imgs/earthimg.png";
export default function Home() {
    return (
        <>
            <div class="homecontainer">
                <div class="container-section1-section2">
                    <div class="section1">
                        <div class="section1-container-left">
                            <div class="titulo-home-section1">Combate à fome mundial</div>
                            <p>Abordamos a importância desse tema, aplicamos suas inovações e melhoramos nosso futuro.
                                Implementamos melhorias na distribuição de alimentos, automação da agricultura,
                                métodos de melhor gestão do espaço (agricultura verticalizada) e aproveitamento de comida.
                            </p>
                            <button class="button-home-section1">Mais sobre nossas inovações</button>
                        </div>
                        <div class="section1-container-right">
                            <img class="section1-img" src={imgearth} alt="Imagem"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}