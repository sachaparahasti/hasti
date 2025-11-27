class Dbconnector{
    constructor(){
        console.log("database are  connected..")
    }
    insertDb(){
        console.log("data is inserted..");
    }
    updateDb(){
        console.log("data is updated...");
    }
    deleteDb(){
        console.log("data is deleted..");
    }
    fetchdata(){
        console.log("data is fetched..");
    }
}

module.exports={Dbconnector};