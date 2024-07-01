function primeNumber(a) {
    /* Your code here */
    if( a>1 ){
        for( let i = 2; i < a-1; i++){
            if( a%i === 0 ){
                return 'NO';
            }
        }return 'YES';
    }return 'NO';
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;

/*
รหัส นศ.: 660612146
ชื่อ-สกุล : ธีธัช ยอดบุญ
*/
