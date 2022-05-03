const additionalDb = require('../db/additional.db')

import type {Additional} from '../model/Additional'

const additionalUtils = require('../utils/additional.utils')

const getAllAdditionalsService = async () => {
    try{
        const additional = await additionalDb.getAllAdditionals()
        return additional
    }catch(err){
        console.log("Service Error: " + err)
    }
}

const getAdditionalByIdService = async (id: number) => {
    try{
        const additional = await additionalDb.getAdditionalById(id)
        return additional
    }catch(err){
        console.log("Service Error: " + err)
    }
}

const createAdditionalService = async (additional: Additional) => {
    try{
        if(additionalUtils.validateAdditional(additional)){
            await additionalDb.createAdditional(additional)
            return true;
        }
        return false;
    }catch(err){
        console.log("Service Error: " + err)
    }
}

const updateAdditionalService = async (id: number, additional:Additional) => {
    try{
        if(additionalUtils.validateAdditional(additional)){
            const additionalUpdated = await additionalDb.updateAdditional(id, additional)
            return additionalUpdated
        }else{
            return false
        }
    }catch(err){
        console.log("Service Error: " + err)
    }
}

const deleteAdditionalService = async (id: number) => {
    try{
        const additional = await additionalDb.deleteAdditional(id)
        return additional
    }catch(err){
        console.log("Service Error: " + err)
    }
}



module.exports = {
    getAllAdditionalsService,
    getAdditionalByIdService,
    createAdditionalService,
    updateAdditionalService,
    deleteAdditionalService
}