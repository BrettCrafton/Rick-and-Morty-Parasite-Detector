//click subtitle and change wallpaper 
document.querySelector('#clickToStart').addEventListener('click', start)

const characterSelection = document.querySelector('#bottomSection')
const music = new Audio('css/Rick-and-Morty-Theme-Song.mp3')

function answerHide(){
 wrongReal.classList.add('hidden')
 correctParasite.classList.add('hidden')
 wrongParasite.classList.add('hidden')
 correctReal.classList.add("hidden")
}

function start(){
    music.play()
    document.querySelector('body').classList.toggle("open")
    characterSelection.classList.toggle("hidden")
    wrongReal.classList.add('hidden')
    correctParasite.classList.add('hidden')
    wrongParasite.classList.add('hidden')
    correctReal.classList.add("hidden")
    document.querySelector('#loadPictureName').classList.add("hidden")
    document.querySelector('#loadPictureHere').classList.add("hidden")
    document.querySelector('#or').classList.add("hidden")
    document.querySelector('#buttons').classList.add("hidden")
    document.querySelector('#real').classList.add("hidden")
    document.querySelector('#parasite').classList.add("hidden")
    document.querySelector('#buttons').style.border = 'none'
}
//unhide characters after click

//unhides selected character with buttons below
const characters = document.querySelectorAll('.character')
let parasite

Array.from(characters).forEach(element => element.addEventListener('click', pictureLoader))

function pictureLoader(click){
    document.querySelector('#loadPictureName').classList.remove("hidden")
    document.querySelector('#loadPictureHere').classList.remove("hidden")
    document.querySelector('#or').classList.remove("hidden")
    document.querySelector('#buttons').classList.remove("hidden")
    document.querySelector('#real').classList.remove("hidden")
    document.querySelector('#parasite').classList.remove("hidden")
    document.querySelector('#buttons').style.border = 'solid black 5px'

	if(click.target.classList.contains('jerry')){
		document.querySelector('#loadPictureHere').src="images/Not Parasites/Jerry_Smith.png"
        document.querySelector('#loadPictureName').innerHTML ="Jerry Smith"
        document.querySelector('#cheese1').innerHTML ="Jerry Smith"
        document.querySelector('#cheese2').innerHTML ="Jerry Smith"
        document.querySelector('#cheese3').innerHTML ="Jerry Smith"
        document.querySelector('#cheese4').innerHTML ="Jerry Smith"
        answerHide()
        parasite = 'false'
    }
    else if(click.target.classList.contains('summer')){
        document.querySelector('#loadPictureHere').src="images/Not Parasites/Summer_Smith.jpg"
        document.querySelector('#loadPictureName').innerHTML ="Summer Smith"
        document.querySelector('#cheese1').innerHTML ="Summer Smith"
        document.querySelector('#cheese2').innerHTML ="Summer Smith"
        document.querySelector('#cheese3').innerHTML ="Summer Smith"
        document.querySelector('#cheese4').innerHTML ="Summer Smith"
        answerHide()

        parasite = 'false'
    }
    else if(click.target.classList.contains('reverseGiraffe')){
        document.querySelector('#loadPictureHere').src="images/Parasites/Reverse_Giraffe.png"
        document.querySelector('#loadPictureName').innerHTML ="Reverse Giraffe"
        document.querySelector('#cheese1').innerHTML ="Reverse Giraffe"
        document.querySelector('#cheese2').innerHTML ="Reverse Giraffe"
        document.querySelector('#cheese3').innerHTML ="Reverse Giraffe"
        document.querySelector('#cheese4').innerHTML ="Reverse Giraffe"
        answerHide()

        parasite = 'true'
    }
    else if(click.target.classList.contains('ghostInAJar')){
        document.querySelector('#loadPictureHere').src="images/Parasites/Ghost_in_a_Jar.png"
        document.querySelector('#loadPictureName').innerHTML ="Ghost In A Jar"
        document.querySelector('#cheese1').innerHTML ="Ghost In Jar"
        document.querySelector('#cheese2').innerHTML ="Ghost In Jar"
        document.querySelector('#cheese3').innerHTML ="Ghost In Jar"
        document.querySelector('#cheese4').innerHTML ="Ghost In Jar"
        answerHide()

        parasite = 'true'
    }
    else if(click.target.classList.contains('morty')){
        document.querySelector('#loadPictureHere').src="images/Not Parasites/Morty_Smith.png"
        document.querySelector('#loadPictureName').innerHTML ="Morty Smith"
        document.querySelector('#cheese1').innerHTML ="Morty Smith"
        document.querySelector('#cheese2').innerHTML ="Morty Smith"
        document.querySelector('#cheese3').innerHTML ="Morty Smith"
        document.querySelector('#cheese4').innerHTML ="Morty Smith"
        answerHide()

        parasite = 'false'        
    }
    else if(click.target.classList.contains('duckWithMuscles')){
        document.querySelector('#loadPictureHere').src="images/Parasites/Duck_With_Muscles.jpg"
        document.querySelector('#loadPictureName').innerHTML ="Duck With Muscles"
        document.querySelector('#cheese1').innerHTML ="Duck With Muscles"
        document.querySelector('#cheese2').innerHTML ="Duck With Muscles"
        document.querySelector('#cheese3').innerHTML ="Duck With Muscles"
        document.querySelector('#cheese4').innerHTML ="Duck With Muscles"
        answerHide()

        parasite = 'true'
    }
    else if(click.target.classList.contains('beth')){
        document.querySelector('#loadPictureHere').src="images/Not Parasites/Beth_Smith.png"
        document.querySelector('#loadPictureName').innerHTML ="Beth Smith"
        document.querySelector('#cheese1').innerHTML ="Beth Smith"
        document.querySelector('#cheese2').innerHTML ="Beth Smith"
        document.querySelector('#cheese3').innerHTML ="Beth Smith"
        document.querySelector('#cheese4').innerHTML ="Beth Smith"
        answerHide()

        parasite = 'false'
    }
    else if(click.target.classList.contains('pencilvester')){
        document.querySelector('#loadPictureHere').src="images/Parasites/Pensylvester.png"
        document.querySelector('#loadPictureName').innerHTML ="Pencilvester"
        document.querySelector('#cheese1').innerHTML ="Pencilvester"
        document.querySelector('#cheese2').innerHTML ="Pencilvester"
        document.querySelector('#cheese3').innerHTML ="Pencilvester"
        document.querySelector('#cheese4').innerHTML ="Pencilvester"
        answerHide()

        parasite = 'true'
    }
    else if(click.target.classList.contains('mrPoopybutthole')){
        document.querySelector('#loadPictureHere').src="images/Not Parasites/Mr_Poopybutthole.png"
        document.querySelector('#loadPictureName').innerHTML ="Mr. Poopybutthole"
        document.querySelector('#cheese1').innerHTML ="Mr. Poopybutthole"
        document.querySelector('#cheese2').innerHTML ="Mr. Poopybutthole"
        document.querySelector('#cheese3').innerHTML ="Mr. Poopybutthole"
        document.querySelector('#cheese4').innerHTML ="Mr. Poopybutthole"
        answerHide()

        parasite = 'false'
    }
    else if(click.target.classList.contains('rick')){
        document.querySelector('#loadPictureHere').src="images/Not Parasites/Rick_Sanchez.png"
        document.querySelector('#loadPictureName').innerHTML ="Rick Sanchez"
        document.querySelector('#cheese1').innerHTML ="Rick Sanchez"
        document.querySelector('#cheese2').innerHTML ="Rick Sanchez"
        document.querySelector('#cheese3').innerHTML ="Rick Sanchez"
        document.querySelector('#cheese4').innerHTML ="Rick Sanchez"
        answerHide()
        parasite = 'false'
    }
}

const correctReal = document.querySelector('#answerCorrectReal')
const wrongReal = document.querySelector('#answerWrongReal')
const correctParasite = document.querySelector('#answerCorrectParasite')
const wrongParasite = document.querySelector('#answerWrongParasite')

document.querySelector('#real').addEventListener('click', testReal)
document.querySelector('#parasite').addEventListener('click', testParasite)

function testReal(){
    if(parasite === 'false'){
        trueAnswerReal()
    }
    else{
        falseAnswerReal()
    }
}
function testParasite(){
    if(parasite === 'true'){
        trueAnswerParasite()
    }
    else{
        falseAnswerParasite()
    }
}
function trueAnswerReal(){
    wrongReal.classList.add('hidden')
    correctParasite.classList.add('hidden')
    wrongParasite.classList.add('hidden')
    correctReal.classList.toggle("hidden")
}
function falseAnswerReal(){
    correctReal.classList.add("hidden")
    correctParasite.classList.add('hidden')
    wrongParasite.classList.add('hidden')
    wrongReal.classList.toggle('hidden')
}
function trueAnswerParasite(){
    correctReal.classList.add("hidden")
    wrongReal.classList.add('hidden')
    wrongParasite.classList.add('hidden')
    correctParasite.classList.toggle('hidden')
}
function falseAnswerParasite(){
    correctReal.classList.add("hidden")
    wrongReal.classList.add('hidden')
    correctParasite.classList.add('hidden')
    wrongParasite.classList.toggle('hidden')
}

(console.log(parasite))
//also character name appears overhead
    //button for real or parasite
    //when you click on one, buttons disappear.
        //text comes up saying correct, or wrong
            //You are correct "charcter name" was real
            //if correct, pictures stays
            //wrong, "character name" was a parasite
            //if wrong, picture changes to parasite picture

//round borders for character selection as well as after clicking a character
//lime background around cyan buttons

//figure out how to video capture to post online
