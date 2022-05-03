const typeDb = require('../db/type.db')

import type {Type} from '../model/Type'

const typeUtils = require('../utils/type.utils')

const getAllTypesService = async () => {
    try{
        const types = await typeDb.getAllTypes()
        return types
    }catch(err){
        console.log("Service Error: " + err)
    }
}

const getTypeByIdService = async (id: number) => {
    try{
        const type = await typeDb.getTypeById(id)
        return type
    }catch(err){
        console.log("Service Error: " + err)
    }
}

const createTypeService = async (type: Type) => {
    try{
        if(typeUtils.validateType(type)){
            await typeDb.createType(type)
            return true;
        }
        return false;
    }catch(err){
        console.log("Service Error: " + err)
    }
}

const updateTypeService = async (id: number, type:Type) => {
    try{
        if(typeUtils.validateType(type)){
            const typeUpdated = await typeDb.updateType(id, type)
            return typeUpdated
        }else{
            return false
        }
    }catch(err){
        console.log("Service Error: " + err)
    }
}

const deleteTypeService = async (id: number) => {
    try{
        const type = await typeDb.deleteType(id)
        return type
    }catch(err){
        console.log("Service Error: " + err)
    }
}



module.exports = {
    getAllTypesService,
    getTypeByIdService,
    createTypeService,
    updateTypeService,
    deleteTypeService
}