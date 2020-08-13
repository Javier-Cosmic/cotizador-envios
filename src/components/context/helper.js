
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
    }

    return increment;

}

export const validate = (width, height, long, weight) => {

    let obj;

    if (width > 100) {
        return obj = {
            width: true
        }
    }
    if(height > 30){
        return obj = {
            height: true
        }
    }
    if(long > 80){
        return obj = {
            long: true
        }
    }
    if(weight > 5){
        return obj = {
            weight: true
        }
    }
        return obj = {        
            width: false,
            height: false,
            long: false,
            weight: false
        }
}


