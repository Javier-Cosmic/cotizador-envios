import React from 'react';

const ShowData = ({shippingdata, valuetotal, backHome}) => {

    const {type, from, to, width, height, long, weight} = shippingdata;

    return (

        <div>
            {type === 'paquete' &&
                <div>
                    <p>Tipo de encomienda: Paquete</p>
                    <p>Origen: {from}</p>
                    <p>Destino: {to}</p>
                    <p>Medidas: </p>
                    <div>Ancho: {width}cm Altura: {height}cm Largo: {long}cm Peso: {weight}kg</div>
                    <span>Valor: ${valuetotal}</span>
                    <button className='button' onClick={backHome}>Volver</button>                
                </div>
            }
            {type === 'sobre' &&
                <div>
                    <p>Tipo de encomienda: Sobre</p>
                    <p>Origen: {from}</p>
                    <p>Destino: {to}</p>
                    <span>Valor: ${valuetotal}</span>
                    <button className='button' onClick={backHome}>Volver</button>                
                </div>
            }
            
        </div>
    )
}

export default ShowData;