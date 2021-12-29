import React, {Fragment} from "react";

//weil webpack aufgesetzt ist wie es ist
// können wir images auf diese Art und Weise importieren
//dem muss ich mal nachgehen

//Kommentar zu den prioperties des image
//margin: Bild in der Mitte
//display 'block' damit wir überhaupt einen margin haben



import spinner from './spinner.gif'
const Spinner = () =>
    <>
    <img src={spinner}
         alt='Loading...'
         style={{
             width: '200px',
             margin: 'auto',
             display: 'block'
         }} />
    </>






export default Spinner;