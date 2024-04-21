import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from '../BurgerMenu/BurgerMenu'

function Navbar() {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };

  return ( 
    <nav className="navigation">
    <div className="navbar">
      <button
        type="button"
        label="true"
        onClick={handleToggle}
        className="bouton_menu_burger"
      >
        <img className="imagetraitsburger"
          src="/assets/images/icons/burger-menu.svg"
          alt="picture_not_found"
        />
      </button>
      <BurgerMenu setVisible={setVisible} visible={visible}  />
      
      <div className="h1andButtonsContainer">
      <div className="groupeBoutonsNav">
      <Link  to="/favoris"><img className="buttonsNavBar searchInNav" src="../public/assets/images/icons/search.svg" alt="recherche"/><div className="textlabelnav searchInNav">Recherche</div></Link>
      <Link  to="/favoris"><img className="buttonsNavBar" src="../public/assets/images/icons/heart4.svg" alt="favoris"/><div className="textlabelnav">Liste d'envies</div></Link>
      <Link to="/panier"><img className="buttonsNavBar" src="../public/assets/images/icons/cart4.svg" alt="panier"/><div className="textlabelnav">Panier</div></Link>
      </div>
      </div>
      </div>
      
      <Link  to="/"><h1 className="h1FeetAndFun">
        feet <span className="and">&</span> fun
      </h1></Link>
      <img
        src="/assets/images/logo.svg"
        className="image_logo"
        alt="picture_not_found"
      />
    </nav>
  );
}
export default Navbar;