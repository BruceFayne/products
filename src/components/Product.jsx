const Product = ({product}) => {
    const addToCart = () => {
        alert(`${product.title} добавлен в корзину`);
    }
    return (
    <div className="product">
    <h2 className="product__title">{product.title}</h2>
    <img src={product.image} alt="Телефон" className="product__image" />
    <div className="price"><p className="product__price">{product.price} ₽</p>
    <button className="cart" onClick={addToCart}><img src="/images/cart.png" className="btnImg" alt="Купить"/></button>
    </div>
</div>
);
};
 
export default Product;