import  React from 'react';
import styled from 'styled-components';
import Carta from './carta';
import FiltrosCarta from './FiltrosCarta';



export default function Contenedor(){
   
    const DivContenedor = styled.div`
    background-color: green;
    height: 100vh;
    width: 100vw;
    `
    const DivTitulo = styled.div`
        background-color: orange;
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `
    const H1 = styled.h1`
        color: #fafafa;
        margin: 0 auto;
    `
    const H2 = styled.h2`
    color: #fafafa;
    margin: 0 auto;
`

    return(
        <DivContenedor>
            <DivTitulo>
                <H1>Nombre del Bar o logo acá</H1>
                <H2>Cervezas</H2>
            </DivTitulo>
            
            <FiltrosCarta />

            <Carta />
            
        </DivContenedor>
    )   
            
        
        
    


}