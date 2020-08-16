import React from 'react';
import {formatZone} from '../context/helper';
import back from '../../assets/img/deshacer.svg'

const ShowData = ({ shippingdata, valuetotal, backHome }) => {
    const { type, from, to, width, height, long, weight } = shippingdata;

    return (
        <div>
            {type === 'paquete' && (
                <>
                    <h3 className='value-total'>Valor total</h3>
                    <h5 className='title-medida'>Paquete</h5>
                    <p className='value-shipping'>$ {valuetotal}</p>
                    <div className='box-paquete'>
                        <div><p>Origen: </p><span>{formatZone(from)}</span></div>
                        <div><p>Destino: </p><span>{formatZone(to)}</span></div>
                    </div>
                        <h5 className='title-medidas'>Medidas</h5>
                        <div className='container-table'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Ancho:</th>
                                        <th>Altura:</th>
                                        <th>Largo:</th>
                                        <th>Peso:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{width} cm</td>
                                        <td>{height} cm</td>
                                        <td>{long} cm</td>
                                        <td>{weight} kg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <button className='button' onClick={backHome}>
                    <img src={back} alt='back button' className='logo-back'/>  Volver
                    </button>
                </>
            )}
            {type === 'sobre' && (
                <div>
                    <h3 className='value-total'>Valor total</h3>
                    <h5 className='title-medida'>Sobre</h5>
                    <p className='value-shipping'>$ {valuetotal}</p>
                    <div className='box-sobre'>
                        <div><p>Origen: </p><span>{formatZone(from)}</span></div>
                        <div><p>Destino: </p><span>{formatZone(to)}</span></div>
                    </div>
                    <button className='button' onClick={backHome}>
                    <img src={back} alt='back button' className='logo-back'/>  Volver
                    </button>
                </div>
            )}
        </div>
    );
};

export default ShowData;
