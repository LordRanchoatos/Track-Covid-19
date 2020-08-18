import React from 'react';


const Card = ({country, cases, todayCases,
    deaths, todayDeaths, recovered,
    active, critical, casesPerOneMillion,
    deathsPerOneMillion}) =>{

    return (
        <div className='tc bg-light-green dib pa5 br3 ma2 grow bw2 shadow-5'>
            <h2> {country}</h2>
            <p>Cases: {cases}</p>
            <p>todayCases: {todayCases}</p>
            <p>Deaths: {deaths}</p>
            <p>todayDeaths: {todayDeaths}</p>
            <p>Reacovered: {recovered}</p>
            <p>Active: {active}</p>
            <p>critical: {critical}</p>
            <p>casesPerOneMillion: {casesPerOneMillion}</p>
            <p>deathsPerOneMillion: {deathsPerOneMillion}</p>
        </div>
    )
}
export default Card

