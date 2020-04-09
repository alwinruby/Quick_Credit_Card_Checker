// function validate(ccnum) {
//   return ccnum;
// }

function validate(number) {
    var begin = number.toString().substring(0,2),
        length = number.toString().length;
    return 'Unknown';
}
module.exports = validate;
