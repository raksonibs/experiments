int led = D0;

bool isComingHome;
Servo myservo;

int coming_home(String command)
{
  if (isComingHome) {
      isComingHome = false;
  } else {
      isComingHome = true;
  }
  return 0;
}

void setup()
{
  // Use serial port for debug print
  // Expose coming_home api
  myservo.attach(D0); 
  Spark.function("coming_home", coming_home);
//  myservo.write(90);

}

void loop() {
  if (isComingHome) {
     myservo.write(360);
}
