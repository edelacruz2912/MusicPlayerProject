
alert("javaScriptWorks");
//selecting the button with Ids
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");
var nextSong = document.getElementById("nextButton");
var previousSong = document.getElementById("backButton");
var songDisplay = document.getElementById("songDisplay");

// to change the index of the array of Songs
var choicesIndex = 0;
var arrayOfSongs = ["FreeTimeJazz.mp3","MaryDidYouKnow.mp3"];


var myAudio =  document.getElementById("myAudio");
myAudio.src = arrayOfSongs[choicesIndex];
console.log(myAudio);

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
 		myAudio.src = arrayOfSongs[choicesIndex % arrayOfSongs.length]; 
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
	songDisplay.innerHTML = arrayOfSongs[choicesIndex];
	song.play();
	

});

stopButton.addEventListener("click",function(event)
{
	console.log("StopButtonWorks");
	
	song.stop();
	songDisplay.innerHTML = arrayOfSongs[choicesIndex];

});


nextSong.addEventListener("click",function(event)
{	
	
	song.nextSong();
	songDisplay.innerHTML = arrayOfSongs[choicesIndex];
	console.log("NextSongTrigerred");

});



previousSong.addEventListener("click",function(event)
{	
	
	song.previousSong();
	songDisplay.innerHTML = arrayOfSongs[choicesIndex];
	console.log("NextSongTrigerred");

});





