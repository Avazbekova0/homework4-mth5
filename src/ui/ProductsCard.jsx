import React from 'react';
import arrow from '../img/Arrow.svg';

const ProductsCard = ({title, count, img}) => {
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <p className='count'>Тираж: от {count} штук</p>
            <p className='maid'>Сделано из крафт-бумаги или плотного картона.
               Упаковки имеют различные формы и расцветки, 
               изготовим форму под заказ.</p>
            <a href="#">Подробнее<img src={arrow} alt="" /></a>
        </div>
    );
}

export default ProductsCard;
