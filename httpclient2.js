var https=require('https');
var sumdata= "";
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


 https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log("Data recieved");
    sumdata+= data;
    //console.log(sumdata);
  });
  response.on('end',function(){
    console.log(sumdata);
  });
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)

});
}
getAndPrintHTML();