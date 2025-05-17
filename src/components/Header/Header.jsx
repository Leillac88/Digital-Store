import { NavLink } from 'react-router-dom';
import NavbarItem from '../NavbarItem/NavbarItem.jsx';
import logoHeader from '../../assets/logo-header.svg';
import carrinhoCompras from '../../assets/carrinho.svg';
import iconMenu from '../../assets/icon-menu.svg';
import iconBusca from '../../assets/icon-busca.svg';
import { useState } from 'react';
import PopUp from '../PopUp/PopUp.jsx';
import ModalMenu from '../ModalMenuSandwish/ModalMenuSandwish.jsx';

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const [aberto, setAberto] = useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const abrirMenu = () => {
        setAberto(!aberto)
    }
    return (
        <>
            <header className="flex flex-col px-24 py-20 w-[1440px] h-[192px] bg-[#FFFFFF]">

                <section className="flex py-5 items-center justify-between mt-[42px]">
                    <button className="mr-10 md:hidden" onClick={abrirMenu}>
                        <img src={iconMenu} alt="icone de menu" />
                    </button>

                    <a href="#" className="w-36 md:w-auto mt-[42px]">
                        <img src={logoHeader} alt="logo digital college" className='flex items-center' />
                    </a>

                    <div className="md:w-1/3 mx-6 hidden md:block md:h-12 relative">
                        <input className="bg-slate-100 pl-2 rounded md:w-full md:h-full outline-none" type="text" placeholder="Pesquisar produto" />
                        <button type="button" className="absolute right-0 top-0 flex justify-center items-center h-12 md:px-4">
                            <img src={iconBusca} alt="icone de busca" />
                        </button>
                    </div>

                    <a href="/criar-conta" className="hidden md:block mx-5 underline leading-7 font-normal text-base text-[#474747] whitespace-nowrap">Cadastre-se</a>

                    <button type="button" className="mx-3 md:hidden">
                        <img src={iconBusca} alt="icone de busca" />
                    </button>
                    <button className="bg-[#C92071] hover:bg-[#991956] text-white font-bold py-2.5 px-8 ml-7 mr-16 rounded-lg transition-colors duration-200 text-center hover:text-white">
                        <a href="/">Entrar</a>
                    </button>
                    <button type="button" onClick={handleClick}>
                        <img src={carrinhoCompras} alt="carrinho de compras" />
                        <span class="absolute  min-w-[17px] h-[17px] leading-[17px] rounded-full bg-[#C92071] text-white font-bold text-xs text-center">2</span>
                    </button>
                </section>

                <nav className={''}>
                    <div className={'hidden md:gap-4 md:flex md:font-bold md:text-base'}>
                        <NavbarItem path="/" title="Home" />
                        <NavbarItem path="/produtos" title="Produtos" />
                        <NavbarItem path="/categorias" title="Categorias" />
                        <NavbarItem path="/pedidosroutes" title="Meus Pedidos" />
                    </div>
                </nav>
            </header>

            {aberto && <ModalMenu />}
            {isOpen && <PopUp />}
        </>
    );
}
