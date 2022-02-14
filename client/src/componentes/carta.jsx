import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css"


export default function Carta(){

    const cervezas = useSelector(state => state.cervezas)  

    let key = 0;

    const DivTabla = styled.div`
        margin: 50 auto;
        border: solid 1px red;
        display: flex;
        justify-content: center;
    `


    return(
        <DivTabla>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estilo</th>
                        <th>Cervecería</th>
                        <th>Precio</th>
                   </tr>
                </thead>
                <tbody>
                
                    {
                        cervezas?.map(el => 
                            <tr key={key++}>
                                <td>{el.nombre}</td>
                                <td>{el.estilo}</td>
                                <td>{el.cerveceria}</td>
                                <td>{el.precio}</td>
                            </tr>
                            )
                    }                

                </tbody>
                

            </table>
        </DivTabla>
    ) 
}