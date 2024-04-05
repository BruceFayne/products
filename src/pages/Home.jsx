import Product from "../components/Product";


const Home = () => {
    const products = [
        {
            title: 'IPhone 15 Pro',
            image: '/images/iphone-15pro.jpg',
            price: '99 900',
        },
        {
            title: 'Samsung Galaxy S24',
            image: '/images/samsung-s24.jpg',
            price: '86 900',
        },
        {
            title: 'ROG Phone 8 Pro',
            image: '/images/rog-8pro.jpg',
            price: '112 900',
        },
        
    ];

    return (
    <div className="wrapper">
        <h1>ТЕЛЕФОНЧИКИ</h1>
        <div className="catalog">
        {
            products.map((product, index) => {
                return <Product key={index} product={product} />;
            })
        }
        </div>
    </div>
    );
};
 
export default Home;