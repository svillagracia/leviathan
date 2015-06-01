var request = require('request');
var async = require('async');

module.exports = {

  getArticles: function(req,res){

    async.concat(['r/powerlifting','r/weightroom'],function(subR,callback){
      request({
        url:'http://www.reddit.com/'+subR+'.json'
      },
      function(error,response,data){
        if(!error && response.statusCode == 200){
          var articles = JSON.parse(data);
          callback(null, articles);
        }
      });
    },function(err,results){
        res.send(results);
    });
  }

};