import Card from "./Card";
import s from './Cards.module.css';
import dataCards from '../../data/cards';
import React from "react";


const Cards = () => {

    return(
        <div className={s.fewProjects}>
			<h1 className="s24">Quelques Projets</h1>
            <div className="cards-container">
                {dataCards.map((e, index) =>
                <Card img={e.img} href={e.url} description={e.description} key={index} />
                )}
            </div>
		</div>
    );
}

export default React.memo(Cards)