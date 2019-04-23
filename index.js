var word = require("./word.js")
var inquire = require("inquirer")
var fs = require("fs")

var selected = wordPicker()
var tries = 5;


game()



function game(){
    selected.letters[0].guessed = true;
    selected.display()
    guess()
}
function wordPicker(){
    var wordlist = fs.readFileSync('words.txt', 'utf8').split("\r\n")
    var ranword = wordlist[Math.floor(Math.random()*1000)]
    var s = new word.Word(ranword)
    return s;
}

var check = false
function guess(inp){
    check=true
    wlCheck()
    if(check==true){
        inquire.prompt([
            {
                name:"guess",
                type:"input",
                message:"please type a letter for your guess."
            }
        ]).then(function(res){
            for (let i = 0; i < selected.letters.length; i++) {
                selected.letters[i].guess(res.guess)
            }
            game()
        })
    }
}  

function wlCheck(){
    if(tries == 0 ){
        lose()
        check = false
        return
    }
    var yes = selected.letters.length
    for (let i = 0; i < selected.letters.length; i++) {
        
        if(selected.letters[i].guessed == true){
            console.log("yup")
            yes --
            if(yes==0){
                win()
                check = false
                return
            }
            continue
        }else{
            console.log("nope")
            tries -= 1
            return
        }
        
    }
    check = true
}
function win(){
    console.log("You win")
    console.log("https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FXreQmk7ETCak0%2Fgiphy.gif&f=1")
    again()
}
function lose(){
    console.log("you lose")
    again()
}

function again(){
    inquire.prompt([
        {
            name:"again",
            type:"list",
            message:"Would you like to play again",
            choices:["yes","no"]
        }
    ]).then(function(res){
        if(res.again == "yes"){
            selected = wordPicker()
            game()
            tries = 5
        }
    })
}
// function randomWord(){
//     fs.readFile("words.txt","utf8",function ranword(err,res){
//         if(err) throw err;

//         var wordlist = res.split("\r\n")
//         var ranw = wordlist[Math.floor(Math.random()*1000)]
//         return ranw
//     })
// }



// console.log(selected.letters)

// var fs = require("fs")
// // var A = new letter.Letter("a")
// var array = []
// // console.log(A.letter)
// var createWord = function(){
//         fs.readFile("words.txt","utf8",function(err,data){
//             if(err){
//                 return err
//             }
//             array = data.split("\r\n")

//             var randomWord = array[Math.floor(Math.random()*array.length)]

//             word = new Word(randomWord)

//             console.log(word)
//         })
//     }