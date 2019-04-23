function Letter(letter){

    this.letter = letter
    this.guessed = false;

    this.trueLetter = function(){
        if(this.guessed){
            return this.letter
        }else{
            return "_"
        } 
    }
    this.guess = function(guess){
        if (guess == letter){
            this.guessed = true
            console.log("correct")
        }
        this.trueLetter()
    }
    
    // this.reveal = function(){
    //     if(this.guessed){
    //         // >-- code to reveal letter
    //         this.placeholder = this.letter
    //     }
    // }

    // this.guesser = function(guess){
    //     if(guess == this.letter){
    //         this.guessed = true
    //         console.log("correct")
    //     }else{
    //         //function for incorrect letter
    //         console.log("incorrect")
    //     }
    //     this.reaveal()
    // }
}

module.exports={
    Letter,
}