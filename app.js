var MongoClient = require('mongodb').MongoClient;

var stats = [
    {
        'city': 'San Juan',
        'zip': '00926',
        'state': 'PR',
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona',
        'zip': '11368',
        'state': 'NY',
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago',
        'zip': '60629',
        'state': 'IL',
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso',
        'zip': '79936',
        'state': 'TX',
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles',
        'zip': '90011',
        'state': 'CA',
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk',
        'zip': '90650',
        'state': 'CA',
        'income': '66453',
        'age': '35'
    }
]

var url = "mongodb://localhost:27017/statsdb"

MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function (err, db) {
    // if (err) throw err;
    // console.log("Database statsdb created!");
    // db.close();
    // });
    var dbo = db.db("statsdb");
    // dbo.createCollection("customers", function (err, res) {
    //     if (err) throw err;
    //     console.log("Collection uscensus created!");
    //     db.close();
    // dbo.collection("uscensus").insertMany(stats, function(err, res) {
    //     if (err) throw err;
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close();
    // });
    // var newEntries = [
    //     {
    //         'city': 'Pacoima',
    //         'zip': '91331',
    //         'state': 'CA',
    //         'income': '60360',
    //         'age': '33'
    //     },
    //     {
    //         'city': 'Ketchikan',
    //         'zip': '99950',
    //         'state': 'AK',
    //         'income': '00000',
    //         'age': '00'
    //     }
    // ]
    // dbo.collection("uscensus").insertMany(newEntries, function (err, res) {
    //     if (err) throw err;
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close();
    // })
    // dbo.collection("uscensus").findOne({city: 'Corona'}, function(err, result) {
    //     if (err) throw err;
    //     console.log(result.zip);
    //     db.close();
    // })
    // var myquery = { state: /^CA/ };

    // dbo.collection("uscensus").find(myquery, {income: 0}).toArray(function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close()
    // })
    // var myquery = { state: "AK" };
    // var newValues = { $set: {income: "38910", age: "46" } };
    // dbo.collection("uscensus").updateOne(myquery, newValues, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    //     db.close();
    // })
    var mysort = {state: 1};
    dbo.collection("uscensus").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log("List Sorted A-Z by State")
        console.log(result);
        db.close();
    })
});