let rows = 5 
let pattern = ""

for(let i = 1 ; i<= rows ; i++){
    for(let j = 1 ; j<= rows ; j++){
        if (i == 1 || i == rows ) {
            pattern += "*"
        }
        else{
            if (j == 1 || j == 5) {
                pattern += "*"
            }else{
                pattern += " "
            }
        }
        
    }
    pattern += "\n"
}
console.log(pattern);
