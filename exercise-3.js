//remove the spaces from the string, then return the resultant string.
//using TRIM method
function noSpace(x){
    return x.trim();
}
console.log(noSpace("   hello  "));

//using REPLACE method
function noWhitespaceInString(x){
    return x.replace(/\s/g, '');
}
console.log(noWhitespaceInString("   hello  "));

/* About the .replace()
/ : it marks the beginning and the end of a pattern
\s : matches all space characters a.k.a. "match whitespace"
g : is a flag which means global i.e. match all whitespace,not just the first one*/