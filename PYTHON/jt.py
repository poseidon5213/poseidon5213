import RPi.GPIO as GPIO ## Import GPIO library
import time ## Import 'time' library. Allows us to use 'sleep'
import sys 
import pygame

GPIO.setmode(GPIO.BCM) ## Use board pin numbering
GPIO.setup(18, GPIO.OUT) ## Setup GPIO Pin 18 to OUT
GPIO.setup(4, GPIO.OUT) ## Setup GPIO Pin 4 to OUT
GPIO.setup(26, GPIO.OUT) ## Setup GPIO Pin 26 to OUT
##Define a function named Blink()
x = 0;
controls = """\nKey Row 1 controls Green Light 1\n
Key Row 2 controls Pink Light\n 
Key Row 3 controls Green Light 2\n 
Type end to end the program\n
Type songselection to find out the available songs and music controls """;
songselection ="""\nWork, Formation, or Kirby\n
type the song name to play it\n
type pause,unpause, or stop to control it """;
song1 = "entertainment/work.mp3";
song2 = "entertainment/kirbydreamland.mp3";
song3 = "entertainment/formation.mp3";
print(controls)
def pausemusic():
	pygame.mixer.music.pause()

def unpausemusic():
	pygame.mixer.music.unpause()

def stopmusic():
	pygame.mixer.music.stop()

def turnon18():
	turnon = GPIO.output(18,GPIO.HIGH);

def turnoff18():
	turnoff = GPIO.output(18,GPIO.LOW);

def turnon4():
	turnon = GPIO.output(4,GPIO.HIGH);

def turnoff4():
	turnoff = GPIO.output(4,GPIO.LOW);

def turnon26():
	turnon = GPIO.output(26,GPIO.HIGH);

def turnoff26():
	turnoff = GPIO.output(26,GPIO.LOW);

def kirby():
	turnon18()
	turnon4()
	time.sleep(3.5)
	turnoff18()
	turnoff4()
	turnon18()
	time.sleep(0.5)
	turnoff18()
	turnon4()
	time.sleep(0.5)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	time.sleep(0.5)
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	time.sleep(0.5)
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	time.sleep(0.5)
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	time.sleep(0.5)
	turnon18()
	time.sleep(0.5)
	turnoff18()
	turnon4()
	time.sleep(0.5)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	time.sleep(0.5)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(0.3)
	turnoff18()
	time.sleep(0.3)
	turnoff18()
	turnon4()
	time.sleep(0.3)
	turnoff4()
	turnon18()
	time.sleep(1.5)
	turnoff18()
	turnon4()
	time.sleep(0.7)
	turnoff4()
	turnon18()
	time.sleep(0.7)
	turnoff18()
	turnon4()
	time.sleep(0.7)
	turnoff4()
	turnon18()
	time.sleep(0.7)
	turnoff18()
	turnon4()
	time.sleep(0.7)
	turnoff4()
	turnon18()
	time.sleep(0.7)
	turnoff18()
	turnon4()
	time.sleep(0.7)
	turnoff4()
	turnon18()
	time.sleep(0.7)
	turnoff18()
	stopmusic()

def KeyboardHero():
	BlinkDuration = raw_input("Press Any Key");
	print(BlinkDuration);
	#Green Light 1 Controls	 
	if BlinkDuration == "`":
		turnon18()
		turnon4()
		turnon26()
		time.sleep(1)
		turnoff18()
		turnoff4()
		turnoff26()
		print("Blinked for one second") 
	elif BlinkDuration == "1":
		turnon18()
		time.sleep(0.1)
		turnoff18()
		print("Blinked for one second") 
	elif BlinkDuration == "2":
		turnon18()
		time.sleep(0.2)
		turnoff18()
		print("Blinked for two second")
	elif BlinkDuration == "3":
		turnon18()
		time.sleep(0.3)
		turnoff18()
		print("Blinked for three second")
	elif BlinkDuration == "4":
		turnon18()
		time.sleep(0.4)
		turnoff18()
		print("Blinked for four second")
	elif BlinkDuration == "5":
		turnon18()
		time.sleep(0.5)
		turnoff18()
		print("Blinked for five second")
	elif BlinkDuration == "6":
		turnon18()
		time.sleep(0.6)
		turnoff18()
		print("Blinked for five second")
	elif BlinkDuration == "7":
		turnon18()
		time.sleep(0.7)
		turnoff18()
		print("Blinked for five second")
	elif BlinkDuration == "8":
		turnon18()
		time.sleep(0.8)
		turnoff18()
		print("Blinked for five second")
	elif BlinkDuration == "9":
		turnon18()
		time.sleep(0.9)
		turnoff18()
		print("Blinked for five second")
	#Pink Light Controls
	elif BlinkDuration == "q":
		turnon4()
		time.sleep(0.1)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	elif BlinkDuration == "w":
		turnon4()
		time.sleep(0.2)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	elif BlinkDuration == "e":
		turnon4()
		time.sleep(0.3)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	elif BlinkDuration == "r":
		turnon4()
		time.sleep(0.4)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	elif BlinkDuration == "t":
		turnon4()
		time.sleep(0.5)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	elif BlinkDuration == "y":
		turnon4()
		time.sleep(0.6)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	elif BlinkDuration == "u":
		turnon4()
		time.sleep(0.7)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	elif BlinkDuration == "i":
		turnon4()
		time.sleep(0.8)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	elif BlinkDuration == "o":
		turnon4()
		time.sleep(0.9)
		turnoff4()
		print(" Green Light Blinked for 0.1 second")
	#Green Light 2 Controls
	elif BlinkDuration == "a":
		turnon26()
		time.sleep(0.1)
		turnoff26()
		print(" Green Light2 Blinked for one second")	
	elif BlinkDuration == "s":
		turnon26()
		time.sleep(0.2)
		turnoff26()
		print(" Green Light2 Blinked for one second")
	elif BlinkDuration == "d":
		turnon26()
		time.sleep(0.3)
		turnoff26()
		print(" Green Light2 Blinked for one second")
	elif BlinkDuration == "f":
		turnon26()
		time.sleep(0.4)
		turnoff26()
		print(" Green Light2 Blinked for one second")
	elif BlinkDuration == "g":
		turnon26()
		time.sleep(0.5)
		turnoff26()
		print(" Green Light2 Blinked for one second")
	elif BlinkDuration == "h":
		turnon26()
		time.sleep(0.6)
		turnoff26()
		print(" Green Light2 Blinked for one second")
	elif BlinkDuration == "j":
		turnon26()
		time.sleep(0.7)
		turnoff26()
		print(" Green Light2 Blinked for one second")
	elif BlinkDuration == "k":
		turnon26()
		time.sleep(0.8)
		turnoff26()
		print(" Green Light2 Blinked for one second")
	elif BlinkDuration == "l":
		turnon26()
		time.sleep(0.9)
		turnoff26()
		print(" Green Light2 Blinked for one second")						
	elif BlinkDuration == "songselection":
		print(songselection)
	elif BlinkDuration == "pause":
		pausemusic()
	elif BlinkDuration == "stop":
		stopmusic()	
	elif BlinkDuration == "unpause":
		unpausemusic()
	elif BlinkDuration == "Work":
		pygame.mixer.init()
		pygame.mixer.music.load(song1)
		print("You Have Selected Work By Rihanna")	
		pygame.mixer.music.play()
	elif BlinkDuration == "Kirby":
		pygame.mixer.init()
		pygame.mixer.music.load(song2)
		print("You Have Selected Kirby Dreamland")	
		pygame.mixer.music.play()
		kirby()
	elif BlinkDuration == "Formation":
		pygame.mixer.init()
		pygame.mixer.music.load(song3)
		print("You Have Selected Formation By Beyonce")
		pygame.mixer.music.play()

	elif BlinkDuration == "end":
		sys.exit()			
	else:
		print("Seriously you were given all those keys and didnt press one?");

while x < 100:
 	KeyboardHero();
	


