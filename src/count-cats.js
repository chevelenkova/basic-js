
module.exports = function countCats(a){
  let b =0;
  
  if(a==0 || a == 'undefined') return false;
  for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
      if(a[i][j]== '^^'){b=b+1}
    }
         
  }
  return b
}
