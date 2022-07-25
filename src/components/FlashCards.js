import Question from "./Question";
import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";
import "../css/style.css";
import "../css/reset.css";

function FlashCards() {

    const [total, setTotal] = useState(0);
    const [icon, setIcon] = useState("");
    const [texto, setTexto] = useState("");
    const [complemento, setComplemento] = useState("");

    return (
        <>
            <Header />
            <div className="tela">
                <Question total={total} setTotal={setTotal} setIcon={setIcon} setTexto={setTexto} setComplemento={setComplemento}/>
            </div>
            <Footer total={total} icon={icon} texto={texto} complemento={complemento}/>
        </>
    );

}

export default FlashCards;