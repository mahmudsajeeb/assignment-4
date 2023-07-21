function mindGame(number){
  let mindGameCalculation =(( number * 3 + 10) / 2) - 5;
  return mindGameCalculation;
}

const myMindGame = mindGame(50)
console.log(myMindGame)





  function evenOdd(string){
      if(string %2 ==0) return "Even"
      else return "Odd"
  }

  let stringValue = "‘chatgpt’"
  const stringLength= stringValue.length

  const myString = evenOdd(stringLength)

  console.log(myString)


  function  isLGSeven(num){
    if(7 > num){
      return num -7;
    }else{
      return num * 2;
    }
  }

  const isLGSevenOutput = isLGSeven(15);
  console.log(isLGSevenOutput);




  function findingBadData(array){
    if(array < 0){
        return "Bad Data"
    }else{
      return "Good Data"
    }
  }

  const myData =  [ 2, -5, -7, -13 ]
  const result = findingBadData(myData);
  
  console.log(result)


 

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
      return 'Input a valid array'
    }
   }
  
   console.log(findingBadData('sajib'));


  function gemsToDiamond(firsFrindGems,secondFrindGems,thirdFrindGems){

    let total = firsFrindGems*21 + secondFrindGems*32 + thirdFrindGems* 43
    if(total >1000 && total *2 ){
     return total - 2000 ;
    }else{
      return total;
    }
  }
 
const totalDemand = gemsToDiamond(20, 200, 50);
console.log(totalDemand)