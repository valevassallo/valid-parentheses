function validParentheses(parens){

var i;  
var suma = 0;  
for (i = 0; i < parens.length; i++) {
  if(parens.charAt(i)=="("){
      suma = suma +1;
  }
  else {
    if(parens.charAt(i)==")"){
        suma = suma -1;
    }
    else{
      return false;
    }
  }  
  if((suma < 0) && (parens.charAt(i)==")")){
    return false;
  }
} // de for 
  
if(suma == 0){
  return true;
}
  
}
