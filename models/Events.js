const mongooes = require ('mongoose')

const Events = new mongooes.Schema({
    date:{ 
        type: String,
      requited: true,
      },
      time:{ 
        type: String, 
      requited: true,
      },
      description:{ 
        type: String,
      requited: true,
      },
      timeZone:{ 
        type: String,
      requited: true,
      },
})

module.exports = mongooes.model('Events',Events)
