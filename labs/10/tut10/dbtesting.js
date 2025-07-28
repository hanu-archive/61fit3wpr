const { MongoClient } = require('mongodb');

let db = null;

MongoClient.connect('mongodb+srv://quandd:1l8oFwwgUrUTH8tF@quandd.v2q74.mongodb.net/')
    .then(client => {
        run(client.db('wpr2201040051'), client);
    })
    .catch(console.log);

async function run(db) {

    const words = db.collection('words');

    let rs = await words.updateOne({ word: 'dog' }, {
        $set: {
            definition: 'woof woof'
        }
    });
    console.log(rs);

    // while (await cursor.hasNext()) {
    //     console.log(await cursor.next());
    // }

    let wordList = await cursor.toArray();
    for (let w of wordList) {
        console.log(w);
    }

    client.close();
}