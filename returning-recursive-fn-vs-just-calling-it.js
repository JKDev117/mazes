

function abc1(num){
   if(num==1){
    return abc1(2)
    console.log('hello1')
   }
   console.log('hello2')
}

function abc2(num){
    if(num==1){
     abc2(2)
     console.log('hello1')
    }
    console.log('hello2')
 }
 
abc1(1) //=> hello2


abc2(1) //=> hello2, hello1, hello2