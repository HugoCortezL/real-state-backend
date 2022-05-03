import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

import type {Type} from '../model/Type'

async function getAllTypes(){
    try{
        const allTypes = await prisma.type.findMany()
        return allTypes
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}

async function getTypeById(id: number){
    try{
        const type = await prisma.type.findMany({
            where: {
                id
            },
        })
        return type
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}

async function createType(type: Type){
    try{
        await prisma.type.create({
            data: type
        })
        return
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}

async function updateType(id: number, type: Type){
    try{
        const typeUpdated = await prisma.type.update({
            where: {
                id,
            },
            data: type
        })
        return typeUpdated
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}

async function deleteType(id: number){
    try{
        const type = await prisma.type.delete({
            where: {
                id,
            }
        })
        return type
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}



module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
}