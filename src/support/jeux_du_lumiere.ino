// Définir les broches des LED
const int led1 = 2; // Connectée à la broche numérique 2
const int led2 = 3; // Connectée à la broche numérique 3
const int led3 = 4; // Connectée à la broche numérique 4

void setup() {
  // Configurer les broches comme sortie
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
}

void loop() {
  // Allumer la LED 1
  digitalWrite(led1, HIGH);
  delay(500); // Attendre 500ms
  digitalWrite(led1, LOW);

  // Allumer la LED 2
  digitalWrite(led2, HIGH);
  delay(500); // Attendre 500ms
  digitalWrite(led2, LOW);

  // Allumer la LED 3
  digitalWrite(led3, HIGH);
  delay(500); // Attendre 500ms
  digitalWrite(led3, LOW);

  // Répéter le cycle
}
