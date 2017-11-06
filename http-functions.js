var https=require('https');

module.exports = function getHTML (options, callback) {
  var requestOptions={};
  var sumdata="";
  if(options === undefined){
    requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  }else{
    requestOptions=options;
    
  }
    


 https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log("Data recieved");
    sumdata+= data;
    //console.log(sumdata);
  });
  response.on('end',function(){
    callback(sumdata);
  });
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)

});
}