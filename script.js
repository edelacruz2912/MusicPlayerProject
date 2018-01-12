alert("javaScriptWorks");
//selecting the button with Ids
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");
var nextSong = document.getElementById("nextButton");
var previousSong = document.getElementById("backButton");
var songDisplay = document.getElementById("songDisplay");
var displayImages = document.getElementById("boomBoxPicture");

// to change the index of the array of Songs
var choicesIndex = 0;
var arrayOfSongs = ["FreeTimeJazz.mp3","MaryDYN.mp3"];

// arrayofImagesToChange
var pictureIndex = 0;
// var arrayofPictures = ["displayPictures/hotDog.gif","displayPictures/obama.gif"];


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
 		// displayImages.src =  arrayofPictures[choicesIndex % arrayOfSongs.length];
 		myAudio.play();
 		console.log(choicesIndex);
 	} 

 	this.previousSong = function()
 	{
 		//previousSong

 		choicesIndex = choicesIndex - 1;
 		myAudio.src = arrayOfSongs[choicesIndex % arrayOfSongs.length]; 
 		// displayImages.src =  arrayofPictures[choicesIndex % arrayOfSongs.length];
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
	songDisplay.innerHTML = arrayOfSongs[choicesIndex % arrayOfSongs.length]; 
	song.play();
	

});

stopButton.addEventListener("click",function(event)
{
	console.log("StopButtonWorks");
	
	song.stop();
	songDisplay.innerHTML = arrayOfSongs[choicesIndex % arrayOfSongs.length]; 

});


nextSong.addEventListener("click",function(event)
{	
	
	song.nextSong();
	songDisplay.innerHTML = arrayOfSongs[choicesIndex % arrayOfSongs.length]; 
	console.log("NextSongTrigerred");

});



previousSong.addEventListener("click",function(event)
{	
	
	song.previousSong();
	songDisplay.innerHTML = arrayOfSongs[choicesIndex % arrayOfSongs.length]; 
	console.log("NextSongTrigerred");

});





