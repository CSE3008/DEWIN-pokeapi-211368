import React from "react";


const Pokecard=({data})=>{
    console.log(data);
    return(
        <>{

            (!data)?"":(

                
                <main>
                <h2>{data.name}</h2>
                <img src={data.sprites.other.dream_world.front_default}></img>
                <div className="abilities">
                    {data.abilities.map(poke=>{return(
                        <div className="group">
                        <h4>{poke.ability.name}</h4>
                        </div>
                    )})}
                </div>
                <div>
                {data.stats.map(poke=>{return(
                 <div>
                    <h6><strong>{poke.stat.name}:</strong> {poke.base_stat}</h6></div>                            
                        
                        
                    )})}
                </div>
               <p></p> 
                           

                
                </main>     


            )
        }</>
        
       
    )
}
export default Pokecard