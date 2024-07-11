function reversestring(string){
    var splitstring = string.split(""); // here we split the given string into arrays with the separator being ""
    var reversearray = splitstring.reverse(); //here we reverse the order of thoses arrays
    var joinarray = reversearray.join("") // here we join the arrays separated by "" in to a string back again
    console.log(joinarray);
}
reversestring("google")