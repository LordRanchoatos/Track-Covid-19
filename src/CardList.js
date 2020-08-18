import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
    
    return (
        <div>
            {
                data.map((countries, i) => {
                    return (
                        <Card 
                            key={i} country={data[i].country}       
                            cases={data[i].cases} 
                            todayCases={data[i].todayCases} 
                            deaths={data[i].deaths} 
                            todayDeaths={data[i].todayDeaths}       
                            recovered={data[i].recovered} 
                            active={data[i].active} 
                            critical={data[i].critical} 
                            casesPerOneMillion={data[i].casesPerOneMillion} 
                            deathsPerOneMillion={data[i].deathsPerOneMillion}
                        />
                    );
                })
            }    
        </div>
    )
}

export default CardList;