import type {Type} from '../model/Type'

const validateType = (type: Type) => {
    try{
        if (type.name.length > 3 ){
            return true
        }
        return false
    }catch{
        return false
    }
}

module.exports = {
    validateType
}