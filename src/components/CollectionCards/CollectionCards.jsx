import tShirtCollection from '../../assets/tShirtCollection.png';
import CollectionCard from '../CollectionCard/CollectionCard.jsx';
import tenisCollection from '../../assets/tenisCollection.png';
import headPhoneCollection from '../../assets/headPhoneCollection.png';
import Subtitles from '../Subtitles/Subtitles.jsx';
import Category from '../Categorias/Categorias.jsx';
import iconTshirt from '../../assets/iconTshirt.svg';
import iconPants from '../../assets/iconPants.svg';
import iconHeadphones from '../../assets/iconHeadphones.svg';
import iconSneakers from '../../assets/iconSneakers.svg';

export default function CollectionCards() {
  return (
    <div className="flex flex-col gap-5 p-7 sm:p-20 bg-[#F9F8FE]">
      <Subtitles type="secondary">Coleções em destaque</Subtitles>
      <div className="flex flex-col md:flex-row gap-3  overflow-hidden w-full items-center">
        <CollectionCard img={tShirtCollection} title="Novo drop Supreme" />
        <CollectionCard img={tenisCollection} title="Coleção Adidas" />
        <CollectionCard img={headPhoneCollection} title="Novo Beats Bass" />
      </div>

      <div className=" flex flex-col w-full overflow-hidden justify-center items-center mt-20">
        <Subtitles type="secondary" children="Coleção em Destaques" />
        <div className='w-full overflow-auto'>
          <div className="flex justify-center md:gap-10 gap-3 md:pt-6">
            <Category img={iconTshirt} title={"Camiseta"} />
            <Category img={iconPants} title={"Calça"} />
            <Category img={iconPants} title={"Boné"} />
            <Category img={iconHeadphones} title={"Headphone"} />
            <Category img={iconSneakers} title={"Tênis"} />
          </div>
        </div>
      </div>
    </div>
  );
}
