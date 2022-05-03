import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

import type {Additional} from '../model/Additional'

async function getAllAdditionals(){
    try{
        const allAdditionals = await prisma.additional.findMany()
        return allAdditionals
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}

async function getAdditionalById(id: number){
    try{
        const additional = await prisma.additional.findMany({
            where: {
                id
            },
        })
        return additional
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}

async function createAdditional(additional: Additional){
    try{
        await prisma.additional.create({
            data: additional
        })
        return
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}

async function updateAdditional(id: number, additional: Additional){
    try{
        const additionalUpdated = await prisma.additional.update({
            where: {
                id,
            },
            data: additional
        })
        return additionalUpdated
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}

async function deleteAdditional(id: number){
    try{
        const additional = await prisma.additional.delete({
            where: {
                id,
            }
        })
        return additional
    }catch (err){
        console.log("DB Error: " + err)
    }finally{
        await prisma.$disconnect()
    }
}



module.exports = {
    getAllAdditionals,
    getAdditionalById,
    createAdditional,
    updateAdditional,
    deleteAdditional
}