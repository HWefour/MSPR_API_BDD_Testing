const knex = require("./knex");

async function createUser(user){
    return knex("Users").insert(user)
};

async function getAllUsers(){
    return knex("Users").select("*");
};

async function deleteUser(id){
    return knex("Users").where("idUsers" , id).del()
};

async function updateUser(id , user){
    return knex("Users").where("idUsers" , id).update(user)
};

async function getUser(id){
  return knex("Users").where("idUsers" , id )
};

module.exports ={
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUser
}