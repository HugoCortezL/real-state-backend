import type {Additional} from '../model/Additional'

const validateAdditional = (additional: Additional) => {
    try{
        if (additional.name.length > 3 ){
            return true
        }
        return false
    }catch{
        return false
    }
}

module.exports = {
    validateAdditional
}