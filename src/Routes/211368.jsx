import { useEffect, useState } from 'react';

export default function M211368(){
    


  
  
  
    return(
        <main style= {{padding: "1rem 0"}}>
        <div className='container-fluid'>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div class="card">
                        <div class="profile">
                        <figure>
                            <img className='figuere-img' src="//s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg" alt="Foto" width="150" height="150"/>
                        </figure>
                        <header>
                            <h1>Carolina Soto
                            <small>QA Proficient</small></h1>
                        </header>                       
                        <dl>
                                <dt>Full name</dt>
                                    <dd>Carolina Soto Estrada</dd>
                                <dt>Date of birth</dt>
                                    <dd>August 30, 1987</dd>
                                <dt>Hometown</dt>
                                    <dd>Aguascalientes, Mexico</dd>
                                <dt>Occupation</dt>
                                    <dd>QA Test Engineer</dd>	
                                <dt>Carrera</dt>
                                    <dd>IDGS 9A</dd>
                            </dl>
                        
                        </div>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>          
       </main>
    );

}