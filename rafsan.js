function mindGame(sonkha){
  if(typeof sonkha ==='string'){
  return 'plase write a number'
  }
  let multiple = sonkha*3;
  let plus = multiple+10;
  let divided = plus/2;
  let minus = divided-5;
  return minus;
  }
  const randomNumber = mindGame('33');
  console.log(randomNumber);
 
  function evenOdd(names){
  if(typeof names ==='number'){
  return 'please write a string'
  }
  if(names.length % 2 !==0){
  return 'odd';
  }
  else{
  return 'even';
  }
  }
  let nam = evenOdd(false);
  console.log(nam)
  
  function isLGSeven(number){
  if(typeof number ==='string'){
  return 'write a number'
  }
  let num = number - 7;
  if(num <7){
  return num;
  }
  else{
  return number*2;
  }
  }
  const large = isLGSeven(15);
  console.log(large);

  function findingBadData(negativesAges){
  let baddata = 0;
  for(let i= 0;i<negativesAges.length;i++){
  let negetiveAge = negativesAges[i];
  if(typeof negativesAges ==='string'){
  return 'Type a numbers whice difind an age'
  }
  if(negetiveAge < 0){
  baddata+=1
  }
  }
  return baddata;
  }
  let negative = findingBadData([0,4,-6,-5,-4,7,9,10]);
  console.log(negative);
 
  function gemsToDiamond(frnd1,frnd2,frnd3){
  if(typeof frnd3 ==="string" || typeof frnd1 ==="string" || typeof frnd2 ==="string"){
  return 'write numbers for every element'
  }
  let friend1 = frnd1*21;
  let friend2 = frnd2*32;
  let friend3 = frnd3*43;
  let allfrndGem = friend1 + friend2 + friend3;
  if(allfrndGem >=2000){
  return allfrndGem - 2000;
  }
  else{
  return allfrndGem;
  }
  }
  const friendGem = gemsToDiamond('sajib');
  console.log(friendGem);