import React from 'react';
import s from './Card.module.css';

const Card = ({img, href, description} : any) => {

    return(
        <div className={s.card}>
            <a href={href}>
                <figure>
                    <img src={img} />
                </figure>
                <p>{description}</p>
            </a>
        </div>
    )
}

export default React.memo(Card)