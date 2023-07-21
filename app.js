function mindGame(number){
  if(typeof string ==='number'){
    return 'Please input valid Number'
    }
  let mindGameCalculation =(( number * 3 + 10) / 2) - 5;
  return mindGameCalculation;
}
const result =mindGame("122")
 console.log(result)





  function evenOdd(string){

    if(typeof string ==='number'){
      return 'Please input valid Only String'
      }
      if(string.length %2 !==0) return "Odd"
      else return "Even"
  }

  


  function  isLGSeven(num){
    if(typeof num ==='string'){
      return 'Please input valid Only number'
      }
    if(7 > num){
      return num -7;
    }else{
      return num * 2;
    }
  }

    


 

  function findingBadData(array){
     
     

    if(Array.isArray(array)){
      let data = 0;
      for(let i=0; i<array.length; i++){
        if(array[i]<0){
          data ++
        } 
      }
      return data
    }else{
      return 'Input a valid only array'
    }
   }
  
    


  function gemsToDiamond(firsFrindGems,secondFrindGems,thirdFrindGems){

    if(typeof firsFrindGems ==='string' || typeof secondFrindGems ==='string' || typeof thirdFrindGems==="string"){
      return 'Please input valid Only number'
      }
    let total = firsFrindGems*21 + secondFrindGems*32 + thirdFrindGems* 43
    if(total >1000 && total *2 ){
     return total - 2000 ;
    }else{
      return total;
    }
  }
 
 