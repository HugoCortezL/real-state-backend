import {Request, Response} from 'express'
const typeService = require("../services/type.service")

const getAllTypes = async(req:Request, res:Response) => {
    try{
        const types = await typeService.getAllTypesService()
        res.status(200).send(types)
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

const getTypeById = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    console.log(id)
    try{
        const type = await typeService.getTypeByIdService(id)
        res.status(200).send(type)
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

const createType = async(req:Request, res:Response) => {
    const type = req.body
    try{
        const valid = await typeService.createTypeService(type)
        if(valid){
            res.status(201).send(type)
        }else{
            res.status(406).send({message: 'Erro'})
        }
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

const updateType = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const type = req.body
    console.log(id)
    try{
        const typeUpdated = await typeService.updateTypeService(id, type)
        if(typeUpdated){
            res.status(200).send(typeUpdated)
        }else{
            res.status(406).send({message: 'Erro'})
        }
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

const deleteType = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    try{
        const type = await typeService.deleteTypeService(id)
        res.status(200).send(type)
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

module.exports = {
    getAllTypes,
    createType,
    getTypeById,
    updateType,
    deleteType
}