const knex = require("./knex");


async function createBotaniste(bot){
    return knex("Botaniste").insert(bot)
};

async function getAllBotaniste(){
    return knex("Botaniste").select("*")
};

async function deleteBotaniste(id){
    return knex("Botaniste").where("idBotaniste" , id).del()
};

async function updateBotaniste(id , bot){
    return knex("Botaniste").where('idBotaniste',id).update(bot)
}

async function getBotaniste(id){
    return knex("Botaniste").where("idBotaniste" , id)
};

module.exports = {
    createBotaniste,
    getAllBotaniste,
    deleteBotaniste,
    updateBotaniste,
    getBotaniste
}