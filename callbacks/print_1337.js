var getHTML = require('../http-functions');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printHTML (html) {
  var list = html.split("");
  var result = "";
  for(var i = 0;i<html.length;i++){
    switch(list[i]){
      case 'a':
      result+=4;
      break;
      case 'e':
      if(i<html.length-1){
        if(list[i+1]==='r'){
          result+='0r';
          i++;
        }else{
          result+=list[i];
        }
      }else{
        result+=list[i];
      }
      break;
      case 'l':
      result+=1;
      break;
      case 'o':
      result+=0;
      break;
      case 't':
      result+=7;
      break;
      case 'c':
      if(i<html.length-1){
        if(list[i+1]==='k'){
          result+='x';
          i++;
        }else{
          result+=list[i];
        }
      }else{
        result+=list[i];
      }
      break;
      case 'y':
      if(i<html.length-2){
        if(list[i+1]==='o'&& list[i+2]==='u'){
          result+='j00';
          i=i+2;
        }else{
          result+=list[i];
        }
      }else{
        result+=list[i];
      }
      break
      default:
      result+=list[i];
      break;
    }
    
  }
  console.log(result);
}
getHTML(requestOptions,printHTML);