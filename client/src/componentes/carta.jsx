import React from 'react';
import { useState, useSelector } from 'react-redux';


export default function Carta(){

    const cervezas = useSelector(state => state.cervezas)  

    return(
        <div>
            <h1>Hola Soy la carta</h1>
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Precio</td>

                   </tr>
                </thead>
                <tbody>
                
                    {
                        cervezas?.map(el => 
                            <tr>
                                <td>{el.nombre}</td>
                                <td>{el.precio}</td>
                            </tr>
                            )
                    }

                

                </tbody>
                

            </table>
        </div>
    ) 
}