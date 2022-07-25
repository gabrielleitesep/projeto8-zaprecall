import "../css/style.css";
import "../css/reset.css";
import logopequena from "../media/logo-pequeno.png";

function Header(){
    return(
        <header>
            <div className="header">
                <img src={logopequena} alt="Logo ZapRecall"></img>
                <h1>ZapRecall</h1>
            </div>
        </header>
    );
}

export default Header;