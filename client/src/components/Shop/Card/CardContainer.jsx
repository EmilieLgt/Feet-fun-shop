import "./CardContainer.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import ProductDetails from "./ProductDetails/ProductDetails";
import CategoryBar from "../../Header/CategoryBar/CategoryBar"


function CardContainer({ data }) {
  // State qui stock l'état Ouvert/Fermé du composant ProductDetails
  const [visible, setVisible] = useState(false);

  // State qui stock l'index du produit cliqué
  const [productSelected, setProductSelected] = useState(0);

  // Fonction qui change l'état de visible à true (Ouvre ProductDetails)
  // Qui assigne l'index du produit cliqué à ProductSelected (Pour obtenir les détails du bon produit)
  const openProduct = (indexOfProduct) => {
    setVisible(true);
    setProductSelected(indexOfProduct);
  }; 

  // State qui stock la taille choisit pour l'ajout au panier
  const [chooseSize, setChooseSize] = useState("Votre taille");

  return (
    <>
    <CategoryBar/>

     
      <div
        className="card-container"
      >
     
        {/* .map() Pour générer toutes les cards d'une section */}
        {data.products.map((product, index) => (
          <Card
            key={`${product.id}.${product.name}`}
            data={product}
            colorSection={data.color}
            openProduct={() => openProduct(index)}
            setVisible={setVisible}
          />
        ))}
      </div>
      {/* Ouvre le composant ProductDetails lors ce que visible est true */}
        <ProductDetails
          data={data.products[productSelected]}
          colorSection={data.color}
          visible={visible}
          setVisible={setVisible}
          chooseSize={chooseSize}
          setChooseSize={setChooseSize}
        />
    </>
  );
}

CardContainer.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired,
};
export default CardContainer;

/* <div className="headerCategorie"> 
      <h3 className="titreHeaderCategorie">Art</h3> 
      <p className="descHeaderCategorie"> Découvrez notre collection 'Art' et habillez vos pieds avec des œuvres d'art à chaque pas ! Ces chaussettes éclatantes et créatives sont bien plus qu'un simple accessoire de mode, elles sont une expression de votre individualité et de votre passion pour l'art. Des motifs audacieux et des couleurs vives vous attendent, transformant chaque journée en une toile sur laquelle vous pouvez laisser votre empreinte artistique.</p>
      </div> */