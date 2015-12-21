/* 
 Piezo Element Morse Code Sketch
 
 */

const int buzzerPin = 9;
const int ledPin = 7;
// tone frequency C
const int tonefreq = 523;

// constants for tone and rest durations
const int dotlength = 100;
const int dashlength = dotlength * 3;
// inter-element gap - between each dot or dash of a letter
const int inter = dotlength; 
// letter gap is 3 dots - the inter gap is always added - so this is one fewer
const int lgap = dotlength * 2; // inter-letter gap
// word gap is 7 dots - with letter and inter gap already counted, this is -1
const int wgap = dotlength * 4; //inter-word gap

const int buttonPin = 2;     // the number of the pushbutton pin
const int ledPinSecond =  13;
int buttonState = 0;  
char myStrings[5] = {'t', 'h', 'i', 'r', 'd'};


void setup() 
{
  pinMode(buzzerPin, OUTPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop()
{

  char thischar;
//  if (Serial.available())
//  {
    // read a single character
   for (int i = 0; i < 5; i++){
     thischar = (myStrings[i]);
//    thischar = Serial.read();
      if (thischar>='a' && thischar<='z')
    {
      // convert to upper case
      thischar = thischar -32; 
    }
    // swap for a space if not in A-Z
    if(thischar<65 || thischar>90)
    {
      thischar=' '; 
    }
    soundLetter(thischar);
    delay(lgap);
     delay(1000);
   }
//    thischar = Serial.read();
   
//  }
}





void dot()
{
  // play a dot
  tone(buzzerPin, tonefreq);
  // LED
  digitalWrite(ledPin, HIGH);
  delay(dotlength);
  noTone(buzzerPin);
  // LED
  digitalWrite(ledPin, LOW);
  delay(inter);
}

void dash()
{
  // play a dash
  tone(buzzerPin, tonefreq);
  // LED
  digitalWrite(ledPin, HIGH);
  delay(dashlength);
  noTone(buzzerPin);
  // LED
  digitalWrite(ledPin, LOW);
  delay(inter);
}

void soundLetter(char letter)
{
  // letters are in order of frequency
  switch(letter)
  {
  case 'E':
    dot();
    return; 
  case 'T':
    dash();
    return; 
  case 'A':
    dot();
    dash();
    return;
  case 'O':
    dash();
    dash();
    dash();
    return; 
  case 'I':
    dot();
    dot();
    return;
  case 'N':
    dash();
    dot();
    return;
  case 'S':
    dot();
    dot();
    dot();
    return;
  case 'H':
    dot();
    dot();
    dot();
    dot();
    return;
  case 'R':
    dot();
    dash();
    dot();
    return;
  case 'D':
    dash();
    dot();
    dot();
    return;
  case 'L':
    dot();
    dash();
    dot();
    dot();
    return;
  case 'C':
    dash();
    dot();
    dash();
    dot();
    return;
  case 'U':
    dot();
    dot();
    dash();
    return;
  case 'M':
    dash();
    dash();
    return;
  case 'W':
    dot();
    dash();
    dash();
    return;
  case 'F':
    dot();
    dot();
    dash();
    dot();
    return;
  case 'G':
    dash();
    dash();
    dot();
    return;
  case 'Y':
    dash();
    dot();
    dash();
    dash();
    return;
  case 'P':
    dot();
    dash();
    dash();
    dot();
    return;
  case 'B':
    dash();
    dot();
    dot();
    dot();
    return;
  case 'V':
    dot();
    dot();
    dot();
    dash();
    return;
  case 'K':
    dash();
    dot();
    dash();
    return;
  case 'J':
    dot();
    dash();
    dash();
    dash();
    return;
  case 'X':
    dash();
    dot();
    dot();
    dash();
    return;
  case 'Q':
    dash();
    dash();
    dot();
    dash();
    return;
  case 'Z':
    dash();
    dash();
    dot();
    dot();
    return;
  case ' ':
    delay(wgap);
    return; 
  }
}