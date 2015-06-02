var User = {
  // Enforce model schema in the case of schemaless databases
  schema:true,

  attributes: {
    username:{
      type:'string',
      unique:true
    },
    email:{
      type:'email',
      unique:true
    },
    passports:{
      collection:'Passport',
      via:'user'
    },
    displayName:{
      type:'string',
    },
    height: {
      type:'string'
    },
    weight: {
      type:'integer'
    },
    gender:{
      type:'string'
    },

    ////////// associations //////////

    lifts:{
      collection:'Lift',
      via:'user'
    }
  }
};

module.exports = User;
