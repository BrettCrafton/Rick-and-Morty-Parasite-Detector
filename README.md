# Rick and Morty Parasite Detector

Rick and Morty Parasite Detector. Based off the Total Rickall episode of Rick and Morty.
Select a character and see if you know the correct answer to if they are real or a parasite.

Live Project at: <a href="https://brettcrafton.com/Portfolio/Rick-and-Morty/index.html" target="_blank" rel="noreferrer"> https://brettcrafton.com/Portfolio/Rick-and-Morty/index.html </a>

<a href="https://brettcrafton.com/Portfolio/Rick-and-Morty/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Rick%20and%20Morty%20gif.gif?raw=true" alt="project example"/> </a>

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Lots of hard coded JS. Event listeners for button clicks. Most clicks change (add/remove/toggle) classes to complete changes to the rendered DOM. Characters are saved in an array pulled from the HTML class "characters". At same time character array is created, event listeners are added to each of those elements. Each of those events listeners, on click, cause the complex conditional function to determine which character was pressed and what to display. Similar interaction is determined by different functions when answer is choosen for that character.

## Optimizations:

Remove redundancies. Implement functions to do repetitive actions. Change box with answer output to changing CSS and data instead of hiding boxes with it applied already. Could get classy and do OOP. Create array of objects with key to answer of parasite or real instead of implemented way of checking HTML for class. Remove complex conditional with previous. Add more/better comments.

## Lessons Learned:

I ultimately learned the hardway to do simple things. I learned event listeners, query selectors, adding/removing classes from HTML from JS, creating arrays from HTML classes, and then utilzing that array. Some creative choices for responsiveness. 

## APP Use:

Click "Total Rickall" to start.

Then select a character. Then you are promted with the choice of real or parasite. Make your best guess and see if you are correct.

Selecting a new character will hide prevous attempt.

## Other Projects:

**You Can't Afford Rent:** https://github.com/BrettCrafton/You-Cant-Afford-Rent

**Magical World of Harry Potter:** https://github.com/BrettCrafton/Magical-World-of-Harry-Potter
<a href="https://brettcrafton.com/Portfolio/Harry%20Potter/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Harry%20Potter%20gif.gif?raw=true" alt="project example"/> </a>


**Cocktail Recipes:** https://github.com/BrettCrafton/Cocktail-Recipes
<a href="https://brettcrafton.com/Portfolio/Bar%20API/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Cocktail%20Recipe%20gif.gif?raw=true" alt="project example"/> </a>


**NASA APOD:** https://github.com/BrettCrafton/NASA-APOD
<a href="https://brettcrafton.com/Portfolio/NASA%20API/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/NASA%20APOD%20gif.gif?raw=true" alt="project example"/> </a>
