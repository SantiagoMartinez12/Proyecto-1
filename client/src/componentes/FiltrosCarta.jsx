import react from "react";
import styled from "styled-components";


export default function FiltrosCarta(){

    const DivCenter = styled.div`
        display: flex;
        justify-content: center;
    `
    const Button = styled.button`
        background-color: grey;
        color: black;
        height: 80px;
        width: 50vw;
        margin-top: 50px;
        margin-bottom: 50px;
    ` 

    return (
        <DivCenter>
            <Button>Filtros</Button>
            
        </DivCenter>
    )

}