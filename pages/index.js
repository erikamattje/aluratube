import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const estilosDaHomePage = {backgroundColor: "red"};

    return (
        <div style= {estilosDaHomePage}> 
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
        </div>
    );
}
  
export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}

// criando um componente com o configuração da imagem, e aplicando no header já com o componente, ao invés da div.
// uma forma alternativa de se criar as divs
const StyleHeader = styled.div` 
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px; 
        gap: 16px;
    }

`;

function Header() {
    return (
        <StyleHeader>
            <img src="banner" /> 

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyleHeader>
    )
}

function TimeLine(propriedades) {
    return (
        <div>
            TimeLine
        </div>
    )
}