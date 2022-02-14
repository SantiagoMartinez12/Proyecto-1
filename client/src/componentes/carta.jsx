import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


export default function Carta(){

    const cervezas = useSelector(state => state.cervezas)  

    let key = 0;

    const DivTabla = styled.div`
        margin: 50 auto;
        border: solid 1px red;
        display: flex;
        justify-content: center;
    `
    const Tr = styled.tr`
        width: 70vw;
        display: flex;
        justify-content: space-evenly;
        border: solid 1px yellow;
        background-color: yellow;
    `


    return(
        <DivTabla>
            <table>
                <thead>
                    <Tr>
                        <td>Nombre</td>
                        <td>Estilo</td>
                        <td>Cervecería</td>
                        <td>Precio</td>
                   </Tr>
                </thead>
                <tbody>
                
                    {
                        cervezas?.map(el => 
                            <Tr key={key++}>
                                <td>{el.nombre}</td>
                                <td>{el.estilo}</td>
                                <td>{el.cerveceria}</td>
                                <td>{el.precio}</td>
                            </Tr>
                            )
                    }                

                </tbody>
                

            </table>
        </DivTabla>
    ) 
}