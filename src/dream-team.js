

module.exports = function createDreamTeam(arr) {
  if(Array.isArray(arr)== false) return false;
   let a= arr.flat('')
  let b ='';
  for (let i = 0; i < a.length; i++) {
    if(typeof(a[i]) == 'string') {
      let s = a[i].trim()
      b=b+s[0]
    }
  }
    return b.toUpperCase().split('').sort().join('')
}

  // remove line with error and write your code here
