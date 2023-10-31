import React from 'react';

function FormatedText({ data }) {
    if (!data) return null;

    const lineas = data.split('\n');
  
    const textoFormateado = lineas.map((linea, index) => (
      <React.Fragment key={index}>
        {linea}
        <br />
      </React.Fragment>
    ));
  
    return <div>{textoFormateado}</div>;
}

export default FormatedText;