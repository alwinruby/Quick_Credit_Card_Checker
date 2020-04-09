function validate(number) {
    var begin = number.toString().substring(0,2),
        length = number.toString().length;

    if( begin.substring(0,1) == 4 && ( length == 13 || length == 16 ) ){
        return 'VISA';
    }
    else if( number.toString().substring(0,4) == 6011 && length == 16 )
    {
        return 'Discover';
    }
    else if( ( begin >= 51 && begin <= 55 ) && length == 16 )
    {
        return 'Mastercard';
    }
    else if( ( begin == 34 || begin == 37 ) && length == 15 )
    {
        return 'AMEX';
    }
    else {
      return 'Unknown';
    }
}
module.exports = validate;
