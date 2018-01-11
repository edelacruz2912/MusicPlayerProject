alert("javaScriptWorks");
//selecting the button with Id PlayButton
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");
var nextSong = document.getElementById("nextButton");
var previousSong = document.getElementById("backButton");

// to change the index of the array of Songs
var choicesIndex = 0;
var arrayOfSongs = ["FreeTimeJazz.mp3","MaryDidYouKnow.mp3"];


var myAudio =  document.getElementById("myAudio");
myAudio.src = arrayOfSongs[choicesIndex];
console.log(myAudio);




// var myAudio =  document.querySelectorAll();
// console.log("array of sources " + myAudio);
// myAudio.setAttribute("src", );

function JukeBox()
{

 	this.play = function()
 	{
 		//playSong
 		myAudio.play();

 	};


 	this.stop = function()
 	{
 		//pauseSong
 		myAudio.pause();
 		
 	}

 	this.nextSong = function()
 	{
 		//nextSongButton
 		choicesIndex = choicesIndex + 1;
 		myAudio.src = arrayOfSongs[choicesIndex % arrayOfSongs.length]; 
 		myAudio.play();
 		console.log(choicesIndex);
 	} 

 	this.previousSong = function()
 	{
 		//previousSong

 		choicesIndex = choicesIndex - 1;
 		myAudio.src = arrayOfSongs[choicesIndex]; 
 		myAudio.play();
 		console.log(choicesIndex);

 	}



}

//creating the instances

var song = new JukeBox();


//adding Listener
playButton.addEventListener("click",function(event)
{
	console.log("playButton");
	song.play();
	// song[choicesIndex].play();
	// myAudio[choicesIndex]

});

stopButton.addEventListener("click",function(event)
{
	console.log("StopButtonWorks");
	
	song.stop();

});


nextSong.addEventListener("click",function(event)
{	
	
	song.nextSong();
	console.log("NextSongTrigerred");

});



previousSong.addEventListener("click",function(event)
{	
	
	song.previousSong();
	console.log("NextSongTrigerred");

});







