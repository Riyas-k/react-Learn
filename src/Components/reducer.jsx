
const reducer = (count,action)=>{
    switch (action.type){
          case 'INCR':
           return  count+action.value
           case 'DEC':
               return count-action.value
               case 'RESET':
               return count =  0
               default:
                   return count
    }
}

export default reducer