import QuestionStatus from "./QuestionStatus";
import "../css/style.css";
import "../css/reset.css";
import Footer from "./Footer";

const deck = [
    {
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript"

    },
    {
        pergunta: "O React é __",
        resposta: "Uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __",
        resposta: "Letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "Expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __",
        resposta: "Interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta: "Usamos o npm para __",
        resposta: "Gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta: "Usamos props para __",
        resposta: "Passar diferentes informações para componentes"
    },
    {
        pergunta: "Usamos estado (state) para __ ",
        resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }

];

deck.sort(Embaralhar);

function Embaralhar() {
    return Math.random() - 0.5;
}

function Question({ total, setTotal, setIcon, setTexto, setComplemento }) {

    return (
        <>
            <main className="main">
                {
                    deck.map((card, index) => {

                        return <QuestionStatus index={index + 1} descricao={card.pergunta} resposta={card.resposta} key={card.pergunta} total={total} setTotal={setTotal} setIcon={setIcon} setTexto={setTexto} setComplemento={setComplemento} />
                    })
                }
            </main >
            <Footer />
        </>
    );
}



export default Question;