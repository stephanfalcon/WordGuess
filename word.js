var letter = require("./letter.js")

function Word(word){
    this.letters = []

    for(i=0;i<word.length;i++){
        var lett = new letter.Letter(word[i])
        this.letters.push(lett)
    }

    this.print = function(){
        var w = []

        for (let i = 0; i < this.letters.length; i++) {
            w.push(this.letters[i].letter)
        }
        console.log(w.join(" "))
    }

    this.display = function(){
        var w = []
        for (var i = 0; i < this.letters.length; i++) {
            // this.letters[i].guess(this.letters[i].letter)
            w.push(this.letters[i].trueLetter())
        }
        console.log(w.join(" "))
    }
}

module.exports={
    Word
}