import Card from "./Card";
import s from './Cards.module.css';
import dataCards from '../../data/cards';
import React from "react";


const Cards = () => {

    return(
        <div className={s.fewProjects}>
			<h2>Quelques Projets</h2>
            <div>
                {dataCards.map((e) =>
                <Card img={e.img} href={e.url} description={e.description} />
                )}
            </div>
		</div>
    );
}

export default React.memo(Cards)