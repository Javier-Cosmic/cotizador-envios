import React, { useState, useContext, useEffect } from 'react';
import Context from '../context/Context';
import Error from './Error';
import { calculateZone, calculateKg, validate } from '../context/helper';

const Form = () => {
    const GlobalContext = useContext(Context);
    const { saveDataUser, setError, error } = GlobalContext;

    const [paquete, setPaquete] = useState({
        type: '',
        from: '',
        to: '',
        width: '',
        height: '',
        long: '',
        weight: '',
    });

    const { type, from, to, width, height, long, weight } = paquete;
    
    const [validationWidth, setValidationWidth] = useState(false);
    const [validationHeight, setValidationHeight] = useState(false);
    const [validationLong, setValidationLong] = useState(false);
    const [validationWeight, setValidationWeight] = useState(false);
    const [validation, setValidation] = useState(false);

    useEffect(() => {

        if (width > 100) {
            setValidationWidth(true)
        }else{
            setValidationWidth(false)
        } 
        if(height > 30){
            setValidationHeight(true)
        }else{
            setValidationHeight(false)
        } 
        if(long > 80){
            setValidationLong(true)
        }else{
            setValidationLong(false)            
        } 
        if(weight > 5){
            setValidationWeight(true)
        }else{
            setValidationWeight(false);
        }
    }, [width, height, long, weight, type])


    const onChange = (e) => {
        setPaquete({
            ...paquete,
            [e.target.name]: e.target.value,
        }); 
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // valor base
        let shipping = 3200;

        const shippingsobre = calculateZone(from, to) * shipping + shipping;

        shipping = calculateKg(parseFloat(weight)) + shippingsobre;

        if (from.trim() === '' || from === 'Seleccionar',
            to.trim() === '' || to === 'Seleccionar'
        ) {
            setError(true);
            return;
        }
        setError(false);
        
        if (type === 'sobre') {
            const obj = {
                type: 'sobre',
                from: from,
                to: to,
                value: shippingsobre,
            };
            // saveDataUser(obj);
            console.log(obj);
        } else if ( type === 'paquete') {
            
            if(width === '' || height === '' || long === '' || weight === ''){
                setError(true);
                return;
            }
            setError(false);
            
            if(width > 100 || height > 30 || long > 80 || weight > 5){
                setValidation(true);
                return;
            }
            setValidation(false);

            const obj = {
                data: paquete,
                value: shipping,
            };
            // saveDataUser(obj);
            console.log(obj);

        }else if (type === '') {
            setError(true);
            return;
        }else{
            setError(false);
        }
    };

    return (
        <form onSubmit={onSubmit} className='form'>
            {error ? <Error>Rellena todos los campos</Error> : null}
            {validation ? <Error>Datos erroneos</Error> : null}
            <h3 className='title-form-center'>¿Que quieres enviar?</h3>
            <div className='form-fields'>
                <label className='label-fields'>Tipo de encomienda: </label>
                <input
                    type='radio'
                    name='type'
                    value='paquete'
                    checked={type === 'paquete'}
                    onChange={onChange}
                    className='input-radio'
                />
                Paquete
                <input
                    type='radio'
                    name='type'
                    value='sobre'
                    checked={type === 'sobre'}
                    onChange={onChange}
                    className='input-radio'
                />
                Sobre
            </div>
            <div className='form-fields'>
                <label className='label-fields'>Origen:</label>
                <select name='from' value={from} onChange={onChange}>
                    <option value=''>Seleccionar</option>
                    <option value='zona-extremo-norte'>
                        Zona extremo norte
                    </option>
                    <option value='zona-norte'>Zona norte</option>
                    <option value='zona-centro'>Zona centro</option>
                    <option value='zona-sur'>Zona sur</option>
                    <option value='zona-extremo-sur'>Zona extremo sur</option>
                </select>
            </div>
            <div className='form-fields'>
                <label className='label-fields'>Destino:</label>
                <select name='to' value={to} onChange={onChange}>
                    <option value=''>Seleccionar</option>
                    <option value='zona-extremo-norte'>
                        Zona extremo norte
                    </option>
                    <option value='zona-norte'>Zona norte</option>
                    <option value='zona-centro'>Zona centro</option>
                    <option value='zona-sur'>Zona sur</option>
                    <option value='zona-extremo-sur'>Zona extremo sur</option>
                </select>
            </div>
            <div
                className={`container-form-size ${
                    type === 'sobre' || type === ''
                        ? 'form-size-disabled'
                        : null
                }`}
            >
                <h3 className='title-form-center'>¿Cuanto mide?</h3>
                <div className='form-fields-center'>
                    <label className='label-center'>Ancho:</label>
                    <input
                        type='number'
                        name='width'
                        value={width}
                        onChange={onChange}
                        disabled={type === 'sobre' || type === ''}
                        placeholder='max 100 cm'
                        className={validationWidth ? 'input-error':'input-text'}
                    />
                </div>
                <div className='form-fields-center'>
                    <label className='label-center'>Altura:</label>
                    <input
                        type='number'
                        name='height'
                        value={height}
                        onChange={onChange}
                        disabled={type === 'sobre' || type === ''}
                        placeholder='max 30 cm'
                        className={validationHeight ? 'input-error':'input-text'}
                    />
                </div>
                <div className='form-fields-center'>
                    <label className='label-center'>Largo:</label>
                    <input
                        type='number'
                        name='long'
                        value={long}
                        onChange={onChange}
                        disabled={type === 'sobre' || type === ''}
                        placeholder='max 80 cm'
                        className={validationLong ? 'input-error':'input-text'}
                    />
                </div>
                <h3 className='title-form-center'>¿Cuanto pesa?</h3>
                <input
                    type='number'
                    name='weight'
                    value={weight}
                    onChange={onChange}
                    disabled={type === 'sobre' || type === ''}
                    placeholder='max 5 kilogramos'
                    className={validationWeight ? 'input-error':'input-text'}
                />
                <button type='submit' className='button'>
                    Cotizar
                </button>
            </div>
        </form>
    );
};

export default React.memo(Form);
