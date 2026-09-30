import React from 'react';

const PartnersCard = ({ title, img, className }) => {
    return (
        <div className="partner_card">
            <img src={img} alt="" />
            <span className={className}>{title}</span>
        </div>
    );
};

export default PartnersCard;
