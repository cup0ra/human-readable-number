module.exports = function toReadable (number) {
    let result = String(number);
    let a1 = ['', 'one','two', 'three', 'four', 'five','six','seven','eight',
    'nine','ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    let a2 = [,'','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let a3 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    if (number == 0){
        return 'zero'
    }
    else if(result.length == 1){
        return a1[number];
    }
    else if(result.length == 2 && number<20){
        return a1[number];
    }
    else if(result.length == 2 && number>=20 && result[1] == 0){
        return a2[result[0]];
    }
    else if(result.length == 2  ){
        return a2[result[0]] + ' ' + a1[+result[1]] ;
    }
   else if(result.length == 3 && result[1] == 0 && result[2] == 0){
       return a1[result[0]] + ' ' + 'hundred';
   }
   else if(result.length == 3 && result[1] == 0){
       return a1[result[0]] + ' ' + 'hundred' + ' ' + a1[result[2]];
   }
   else if (result.length == 3 && +result[1] == 1) {
    return a1[+result[0]] + ' ' + 'hundred' + ' ' + a3[result[2]];
  }
   else if (result.length == 3 && result[2] == 0) {
    return a1[result[0]] + ' ' + 'hundred' + ' ' + a2[result[1]];
   }
   else if (result.length == 3 ) {
    return a1[result[0]] + ' ' + 'hundred' + ' ' + a2[result[1]] + ' ' + a1[result[2]];
   }
 






}
