import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';



export default function M211368(){

    const {i18n, t} = useTranslation(); 


  
  
  
    return(
        <main style= {{padding: "1rem 0"}}>
        <div className='container-fluid'>
            <div className="row">
                <div className="col-3">
                </div>
                <div className="col-6">
                    <div class="card">
                        <div class="profile">
                        <figure>
                            <img className='figuere-img' src="https://www.utags.edu.mx/images/CIB/img/LogosCIB/uta.jpg" alt="Foto" width="150" height="150"/>
                        </figure>
                        <header>
                            <h1>Carolina Soto
                            <small>QA Proficient</small></h1>
                        </header>                       
                        <dl>
                                <dt>{t("name")}</dt>
                                    <dd>Carolina Soto Estrada</dd>
                                <dt>{t("birth")}</dt>
                                    <dd>August 30, 1987</dd>
                                <dt>{t("ht")}</dt>
                                    <dd>Aguascalientes, Mexico</dd>
                                <dt>{t("oc")}</dt>
                                    <dd>QA Test Engineer</dd>	
                                <dt>{t("gr")}</dt>
                                    <dd>IDGS 9A</dd>
                            </dl>
                        
                        </div>
                    </div>
                </div>
                <div className="col-3">
                </div>
            </div>
        </div>          
       </main>
    );

}