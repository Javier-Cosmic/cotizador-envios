import {useState, useEffect} from 'react';

export const useValidationFields = (width, height, long, weight) => {
    const [validationWidth, setValidationWidth] = useState(false);
    const [validationHeight, setValidationHeight] = useState(false);
    const [validationLong, setValidationLong] = useState(false);
    const [validationWeight, setValidationWeight] = useState(false);

    useEffect(() => {

        if (width > 150) {
            setValidationWidth(true)
        }else{
            setValidationWidth(false)
        } 
        if(height > 50){
            setValidationHeight(true)
        }else{
            setValidationHeight(false)
        } 
        if(long > 100){
            setValidationLong(true)
        }else{
            setValidationLong(false)            
        } 
        if(weight > 8){
            setValidationWeight(true)
        }else{
            setValidationWeight(false);
        }
    }, [width, height, long, weight])

    return [
        validationWidth, 
        validationHeight, 
        validationLong, 
        validationWeight
    ]
}
