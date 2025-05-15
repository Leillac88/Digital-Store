import "./Footer.css"
import LogoBranco from "../../assets/logo-footer.svg"
import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Twitter from "../../assets/twitter.svg"

export default function Footer() {
    return (
        <footer>
        <div className="rodape">

            <div className="conteudo">
                <img src={LogoBranco} alt="Logo-rodapé" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis qui, nemo atque aliquid
                    sapiente.</p>
                <div className="redes">
                    <a href="#">
                        <img src={Facebook} alt="Facebook-logo" />
                    </a>
                    <a href="#">
                        <img src={Instagram} alt="instagram-logo" />
                    </a>
                    <a href="#">
                        <img src={Twitter} alt="twitter-logo" />
                    </a>
                </div>
            </div>

            <div className="sitemap">
                <div className="info">
                    <h5>Informação</h5>
                    <a href="">Sobre Drip Store</a>
                    <a href="">Segurança</a>
                    <a href="">Wishlist</a>
                    <a href="">Blog</a>
                    <a href="">Trabalhe conosco</a>
                    <a href="">Meus Pedidos</a>
                </div>
                <div className="info">
                    <h5>Categorias</h5>
                    <a href="">Camisetas</a>
                    <a href="">Calças</a>
                    <a href="">Bonés</a>
                    <a href="">Headphones</a>
                    <a href="">Tênis</a>
                </div>
                <div className="info">
                    <h5>Contato</h5>
                    <a href="https://www.google.com/maps/place/Av.+Santos+Dumont,+1510+-+1+andar+-+Aldeota,+Fortaleza+-+CE,+60150-161/data=!4m2!3m1!1s0x7c7485edb300001:0x6782b2efe8bc747b?sa=X&ved=1t:242&ictx=111" target="_blank">
                        <address>
                            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE 60150-161
                        </address>
                    </a>
                    <a href="tel:8530513411">(85) 3051-3411</a>
                </div>
            </div>
        </div>
        <h6>&copy; 2025 Digital College </h6>
    </footer>
    )
}