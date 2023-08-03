const { min } = require("mocha/lib/reporters")

function binarySearch(ar,num){
  let start=0;
  let end=ar.length-1;
  while(start<=end){
    let mid=Math.floor((start+end)/2)
    if(ar[mid]===num)return true;
    else if(ar[mid]<num)start=mid+1;
    else end=mid-1;
  }
  return false;
}

function hasTargetSum(array, target) {

   array.sort((a,b)=>{return a>b? 1:-1;})
    
    let status=false;
    if(array[0]+array[1]>target || array[array.length-1]+array[array.length-1]<target) return false;
    for(let i=0;i<array.length;i++){
        let x=target-array[i];
            array[i]=0;       
    if(binarySearch(array,x)===true ) {
          status=true;
      }
    };
     return status

}
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;