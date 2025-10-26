export function ConvertToDecimal(num) {
	return Number.parseFloat(num).toFixed(2);
}

export function CheckAnySymbolsInNumber(num) {
    const regexSymbol = /[\D+\s]/g; 
    /* Match a single character present in the list below [\D+\s]
     \D matches any character that's not a digit (equivalent to [^0-9])
     + matches the character + with index 4310 (2B16 or 538) literally (case sensitive)
     \s matches any whitespace character (equivalent to [\r\n\t\f\v ]) */
    ///\W+/g; //to include checking alphabet/spaces
    let value = num;
    let resultBoolean = false;

    let result = value.match(regexSymbol);

     if(result !== null ) {
        resultBoolean =true;
     } 
     console.log(result)

	return resultBoolean;
}
