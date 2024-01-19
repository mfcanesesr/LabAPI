let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb+srv://mfcanesesr:api2024@clusterapi.m28hhwz.mongodb.net/?retryWrites=true&w=majority`)
       .then(() => {
         console.log('Database connected (:')
       })
       .catch(err => {
         console.error('Database not connected ):')
       })
  }
}

module.exports = new Database()