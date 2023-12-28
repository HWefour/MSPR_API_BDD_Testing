const express = require("express") ; 
const { getAllUsers , getUser, updateUser, deleteUser, createUser} = require("./bdd/users");
const { getAllBotaniste , getBotaniste, createBotaniste, deleteBotaniste} = require("./bdd/botaniste");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


/* app.get("/test" , (req,res)=> {
    res.status(200).json({success: true});
}); */

//CREATE USERS
app.post("/user" , async (req,res)=>{
    const user = await createUser(req.body);
    res.status(201).json({id : user[0]});
})

// GET ALL USERS
app.get("/user" , async (req,res)=> {
    const user = await getAllUsers();
    res.status(200).json({user});
});

//GET ONE USER BY ID
app.get("/user/:id" , async (req ,res)=> {
    const id = req.params.id;
    const user = await getUser(id);
    res.status(200).json(user[0])
})

//UPDATE A USER
app.patch("/user/:id" ,async  (req,res)=>{
    const id = req.params.id;
    const user = await updateUser(id , req.body);
    res.status(200).json({user});
})

//DELETE A USER
app.delete("/user/:id" , async (req , res) =>{
    const id = req.params.id; 
    await deleteUser(id);
    res.status(200).json({success : true});
})

// CREATE A BOTANISTE
app.post("/botaniste" , async (req,res)=>{
    const botaniste = await createBotaniste(req.body);
    res.status(201).json({id : botaniste[0]})
})

// GET ALL BOTANISTE
app.get("/botaniste" , async (req, res)=>{
    const botaniste = await getAllBotaniste();
    res.status(200).json({botaniste})
});

// GET ONE BOTANISTE BY ID
app.get("/botaniste/:id" , async (req , res)=> {
    const id = req.params.id;
    const botaniste = await getBotaniste(id);
    res.status(200).json(botaniste[0]);
});

// UPDATE BOTANISTE
app.patch("/botaniste/:id" , async (req,res)=>{
    const id = req.params.id ;
    await updateUser(id);
    res.status(200).json({success : true});
});

// DELETE BOTANISTE 
app.delete("/botaniste/:id" , async (req , res)=>{
    const id = req.params.id;
    const botaniste = await deleteBotaniste(id , req.body);
    res.status(200).json({botaniste})
})


app.listen(1212, () => { console.log("server is running on the port 1212");})