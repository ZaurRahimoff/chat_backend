const mongo = require('mongoose');
const baseURL = 'mongodb+srv://zaur:abmWmmvvH1H4mu8m@cluster0-cvyrm.mongodb.net/chat-app?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true';
mongo.connect(process.env.MONGODB_URI || baseURL,{useUnifiedTopology: true,  useCreateIndex: true, useNewUrlParser: true}).then((db)=>{
    console.log('Connected MONGODB');
}).catch((error)=> console.log('Not Connected'));
