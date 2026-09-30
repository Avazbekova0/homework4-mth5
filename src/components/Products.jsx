    import React from 'react';
    import ProductsCard from '../ui/ProductsCard';
    import product1 from '../img/Product1.jpg'
    import product2 from '../img/Product2.svg'
    import product3 from '../img/Product3.jpg'
    import product4 from '../img/Product4.svg' 

    const Products = () => {
        return (
            <div className='container product_cont'>
                <ProductsCard title='Упаковка' count='50' img={product1} />
                <ProductsCard title='Пакеты' count='30' img={product2} />
                <ProductsCard title='Кейсы' count='200'  img={product3}/>
                <ProductsCard title='Другие изделия' count='10' img={product4} />
            </div>
        );
    }

    export default Products;