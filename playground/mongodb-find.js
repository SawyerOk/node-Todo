const  {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

        db.collection('Users').find({name: 'Alec2'}).toArray().then((result)=>{
            console.log('Users');
            console.log(JSON.stringify(result, undefined, 2));
        }, (err)=>{
            console.log('Some Error', err);
        });

        // db.collection('Todos').find().count().then((count)=>{
        //     console.log(`Todos count: ${count}`);
        // }, (err)=> {
        //     console.log('Unable to fetch todos', err);
        // });
    
        // db.collection('Todos').find({completed : true}).toArray().then((docs)=>{
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined,2));
        // }, (err)=> {
        //     console.log('Unable to fetch todos', err);
        // });
    
    // db.close(); 
});
