import "./Header.css"
import logo from "../../assets/logo-header.svg"
import carrinho from "../../assets/mini-cart.svg"
import lupa from "../../assets/search.png"


export default function Header() {
    return (
        <header>
            <div className="topo">
                <div className="logo">
                    <img src={logo} alt="Digital store logo" />
                </div>

                <div className="buscador">
                    <input type="text" placeholder="Pesquisar produto..." />
                    <img src={lupa} alt="Lupa" />
                </div>

                <div className="acoes">
                    <a href="" className="cadastro">Cadastrte-se</a>
                    <a href="" className="btn">Entrar</a>
                    <div className="carrinho">
                        <img src={carrinho} alt="carrinho" />
                        <span>2</span>
                    </div>
                </div>
            </div>

            <nav>
                <a href="/" className="active">Home</a>
                <a href="/Produtos">Produtos</a>
                <a href="/Categorias">Categorias</a>
                <a href="/Meus Pedidos">Meus Pedidos</a>
            </nav>
        </header>
    )
}
