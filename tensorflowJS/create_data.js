class color{
    constructor(){
        this.red = Math.floor(Math.random() * 256);
        this.green = Math.floor(Math.random() * 256);
        this.blue = Math.floor(Math.random() * 256);
        if(this.red > this.blue && this.red > this.green){
          this.answer = 'red';  
        }
        else if (this.green > this.blue && this.green > this.red){
            this.answer = 'green';  

        }
        else if (this.blue > this.green && this.blue > this.red){
            this.answer = 'blue';  
        }
        else{
            this.answer = 'it needs color';
        }
    }
}

var colors = [];
for(let z =0; z < 1000; z++){
    let temp = new color()
    colors.push(temp)
}

var fs = require('fs');
fs.writeFile('training_set.json', JSON.stringify(colors), 'utf8', callback2);

function callback2(){

}