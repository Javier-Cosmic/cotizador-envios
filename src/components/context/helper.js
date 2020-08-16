
export const calculateKg = (kg) => {
    let increment;

    if (kg <= 1) {
        return increment = 500
    }else if(kg <= 2){
        return increment = 1000
    }else if(kg <= 3){
        return increment = 1500
    }else if(kg <= 4){
        return increment = 2500
    }else if(kg <= 5){
        return increment = 3000
    }else if(kg <= 6){
        return increment = 3500
    }else if(kg <= 7){
        return increment = 4000
    }else if(kg <= 8){
        return increment = 4500
    }

    return increment;
}

export const formatZone = (zone) => {

    let cadena = zone.split("-").join("  ");
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    
}

export const calculateZone = (from, zone) => {
    let value;

    if(from === 'zona-extremo-norte'){
        switch (zone) {
            case 'zona-extremo-norte':
                value = 0
                break
            case 'zona-norte':
                value = 0.20
                break
            case 'zona-centro':
                value = 0.30
                break;
            case 'zona-sur':
                value = 0.40
                break;
            case 'zona-extremo-sur':
                value = 0.60
                break;

            default:
                break;
        }
    
        return value;

    }else if(from === 'zona-norte'){
        switch (zone) {
            case 'zona-extremo-norte':
                value = 0.20
                break
            case 'zona-norte':
                value = 0
                break
            case 'zona-centro':
                value = 0.25
                break;
            case 'zona-sur':
                value = 0.35
                break;
            case 'zona-extremo-sur':
                value = 0.50
                break;

            default:
                break;
        }
    
        return value;

    }else if(from === 'zona-centro'){
        switch (zone) {
            case 'zona-extremo-norte':
                value = 0.50
                break
            case 'zona-norte':
                value = 0.35
                break
            case 'zona-centro':
                value = 0
                break;
            case 'zona-sur':
                value = 0.35
                break;
            case 'zona-extremo-sur':
                value = 0.50
                break;

            default:
                break;
        }
    
        return value;

    }else if(from === 'zona-sur'){
        switch (zone) {
            case 'zona-extremo-norte':
                value = 0.55
                break
            case 'zona-norte':
                value = 0.45
                break
            case 'zona-centro':
                value = 0.30
                break;
            case 'zona-sur':
                value = 0
                break;
            case 'zona-extremo-sur':
                value = 0.20
                break;

            default:
                break;
        }
    
        return value;

    }else if(from === 'zona-extremo-sur'){
        switch (zone) {
            case 'zona-extremo-norte':
                value = 0.60
                break
            case 'zona-norte':
                value = 0.50
                break
            case 'zona-centro':
                value = 0.35
                break;
            case 'zona-sur':
                value = 0.20
                break;
            case 'zona-extremo-sur':
                value = 0
                break;

            default:
                break;
        }
    
        return value;
    }
        
}