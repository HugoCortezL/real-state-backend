import {Request, Response} from 'express'
const additionalService = require("../services/additional.service")

const getAllAdditionals = async(req:Request, res:Response) => {
    try{
        const additionals = await additionalService.getAllAdditionalsService()
        res.status(200).send(additionals)
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

const getAdditionalById = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    try{
        const additional = await additionalService.getAdditionalByIdService(id)
        res.status(200).send(additional)
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

const createAdditional = async(req:Request, res:Response) => {
    const additional = req.body
    try{
        const valid = await additionalService.createAdditionalService(additional)
        if(valid){
            res.status(201).send(additional)
        }else{
            res.status(406).send({message: 'Erro'})
        }
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

const updateAdditional = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const additional = req.body
    try{
        const additionalUpdated = await additionalService.updateAdditionalService(id, additional)
        if(additionalUpdated){
            res.status(200).send(additionalUpdated)
        }else{
            res.status(406).send({message: 'Erro'})
        }
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

const deleteAdditional = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    try{
        const additional = await additionalService.deleteAdditionalService(id)
        res.status(200).send(additional)
    }catch(err){
        console.log("Controller Error: " + err)
    }
}

module.exports = {
    getAllAdditionals,
    createAdditional,
    getAdditionalById,
    updateAdditional,
    deleteAdditional
}