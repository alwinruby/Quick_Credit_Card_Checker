// function validate(ccnum) {
//   return ccnum;
// }

function validate(number) {
    var begin = number.toString().substring(0,2),
        length = number.toString().length;

    if( begin.substring(0,1) == 4 && ( length == 13 || length == 16 ) ){
        return 'VISA';
    }
    else {
      return 'Unknown';
    }
}
module.exports = validate;
