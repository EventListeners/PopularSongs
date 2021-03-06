var ExpressCassandra = require('express-cassandra');
var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 9042 },
        keyspace: 'mykeyspace',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

var MyModel = models.loadSchema('Artists', {
    fields:{
        song_id: "int",
        artist_id: "int",
        artist_name: "text",
        album_id: "int",
        album_name: "text",
        img: "int",
        publish: "int",
        song_name: "text",
        streams: "int",
        length: "int",
        popularity: "int",
        library: "text"
    },
    key:["song_id"]
});

// MyModel or models.instance.Person can now be used as the model instance
console.log(models.instance.Artists === MyModel, 'TEST HELLLOOO ====+==+=');




// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
MyModel.syncDB(function(err, result) {
    if (err) throw err;
    // result == true if any database schema was updated
    // result == false if no schema change was detected in your models
});

