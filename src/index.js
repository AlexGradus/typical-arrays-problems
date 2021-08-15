
exports.min = function min (array) {
    if(array===undefined|| array.length===0){
        return [0];
    }
    else {return Math.min.apply(null, array);}
}

exports.max = function max (array) {
    if(array===undefined|| array.length===0){
        return [0];
    }
        else {return Math.max.apply(null, array);}
      


}

exports.avg = function avg (array) {
    if(array===undefined|| array.length===0){
        return [0];
    }
    else {let sum=0;
    for(i=0;i<array.length;i++){
      
      sum=sum+array[i];
    }

  return sum/array.length;}
}
