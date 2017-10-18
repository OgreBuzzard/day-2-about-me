'use strict';

var yourName = prompt('What\'s your name?');
console.log('Name:', yourName);

var begin = prompt('Hey, ' + yourName + ', I\'m going to ask you some Matt Harding-focused trivia questions. That\'s a pretty esoteric trivia topic, so don\'t beat yourself up if you don\'t get them all right. These are all Yes/No questions. You can type out the entire word, or, if you\'re in a rush, just type the first letter and I\'ll use my programming skills to determine your intent. Shall we begin?');
console.log('Begin:', begin);

var beginLower = begin.toLowerCase();

while (beginLower !== 'yes' && beginLower !== 'y') {
  begin = prompt('How about now?');
  beginLower = begin.toLowerCase();
}

var french = prompt('Hey! We already got one question out of the way. Only four more to go. Does Matt Harding speak French fluently?');
console.log('French:', french);

var frenchLower = french.toLowerCase();

if (frenchLower === 'yes' || frenchLower === 'y') {
  alert('Wrong! Matt Harding barely speak a word of French. You really don\'t know him very well, do you? That\'s okay. You\'ll do better on the next one.');
} else {
  alert('Correct. Matt Harding can barely speak a single damn word of French. Clearly, you are at least somewhat knowledgeable about Matt Harding. Let\'s see if you can continue you\'re impressive streak.');
}

var staring = prompt('Can Matt Harding beat you in a staring contest?');
console.log('Staring:', staring);

var staringLower = staring.toLowerCase();

if (staringLower === 'yes' || staringLower === 'y') {
  alert('That\'s right. Matt Harding would kick your ass in a staring contest, as long as he got enough sleep last night. Feel free to challenge him.');
} else {
  alert('You seem to have a high opinion of your staring abilities. I\'m sorry to burst your bubble, but you\'re wrong. He will kick your ass at staring, as long as he got enough sleep last night. You should go challenge him.');
}

var juggle = prompt('Can Matt Harding juggle three coffee mugs?');
console.log('Juggle:', juggle);

var juggleLower = juggle.toLowerCase();

if (juggleLower === 'yes' || juggleLower === 'y') {
  alert('I\'m going to accept that answer, because Matt Harding is really not sure if he can do that. He suspects there would be a lot of broken mug pieces on the floor, but he appreciates your confidence in him.');
} else {
  alert('Yeah, you\'re probably right. Matt Harding is really not sure if he can do that, but it\'s more than likely your skepticism is well-founded.');
}

var airplane = prompt('Can Matt Harding make a paper airplane that goes farther than yours?');
console.log('Airplane:', airplane);

var airplaneLower = airplane.toLowerCase();

if (airplaneLower === 'yes' || airplaneLower === 'y') {
  alert('This is another one where Matt Harding is really not sure. His paper airplane skills are middling, but he has no idea where yours are at, so this one could go either way. The fact that you said yes suggests you\'re not very good, in which case you\'re probably right that he\'d beat you. Again, you\'re welcome to challenge him. He is totally up for finding out.');
} else {
  alert('This is another one where Matt Harding is really not sure. His paper airplane skills are middling, but he has no idea where yours are at, so this one could go either way. The fact that you said no suggests you make a pretty mean paper airplane, in which case you\'re probably right that you\'d beat him. Again, you\'re welcome to challenge him. He is totally up for finding out.');
}
