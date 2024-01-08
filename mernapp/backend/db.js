const mongoose=require("mongoose");
const mongoURI="mongodb+srv://mnraghuvanshi2000:moodyfoody@cluster0.mgxvr17.mongodb.net/moodyfoody?retryWrites=true&w=majority"


const mongoDB=async()=>{
    const connection=await mongoose.connect(mongoURI);
    if(!connection){
        console.log("Database Connection Failed");
    }
    else{
        console.log("Database Connected");

        const FoodItem = mongoose.model("food_items", new mongoose.Schema({}));
        const data = await FoodItem.find({}).exec();

        const Shreyy=mongoose.model("shreydbs", new mongoose.Schema({}));
        const catData = await Shreyy.find({}).exec();

        global.food_items = data;
        global.shreydbs = catData;
        // console.log(data)
        // console.log(catData)
    }
}
 

module.exports = mongoDB;
