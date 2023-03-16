import React from 'react';
import { useContext } from 'react';
import { BioData } from '../App';
export default function ChildC(){
    const data= useContext(BioData)
    return(
        <>
        <h1>Hello : {data}</h1>

        </>
    )
}