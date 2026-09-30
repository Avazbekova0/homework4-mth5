import React from 'react';
import PartnersCards from '../ui/PartnersCard'
import partner1 from '../img/partner1.svg'
import partner2 from '../img/partner2.svg'
import partner3 from '../img/partner3.svg'
import partner4 from '../img/partner4.svg'

const Partners = () => {
    return (
        <div className='partners_cont'>
            <PartnersCards img={partner1} title='Hahnemühle'
            className="partner_one"/>
            <PartnersCards img={partner2} title='CANSON' 
            className="partner_two" />
            <PartnersCards  img={partner3} title='ROYAL TALENS' 
            className="partner_three" />
            <PartnersCards img={partner4} title='FABRIANO'
            className="partner_four" />
        </div>
    );
}

export default Partners;
