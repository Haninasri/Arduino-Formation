// Définir les broches des LED
const int ledRouge = 2;  // LED rouge connectée à la broche 2
const int ledJaune = 3;  // LED jaune connectée à la broche 3
const int ledVerte = 4;  // LED verte connectée à la broche 4

void setup() {
  // Configurer les broches comme sortie
  pinMode(ledRouge, OUTPUT);
  pinMode(ledJaune, OUTPUT);
  pinMode(ledVerte, OUTPUT);
}

void loop() {
  // Étape 1 : Allumer la LED rouge
  digitalWrite(ledRouge, HIGH);  // LED rouge allumée
  digitalWrite(ledJaune, LOW);  // LED jaune éteinte
  digitalWrite(ledVerte, LOW);  // LED verte éteinte
  delay(5000);                  // Attendre 5 secondes

  // Étape 2 : Allumer la LED jaune
  digitalWrite(ledRouge, LOW);  // LED rouge éteinte
  digitalWrite(ledJaune, HIGH); // LED jaune allumée
  digitalWrite(ledVerte, LOW);  // LED verte éteinte
  delay(2000);                  // Attendre 2 secondes

  // Étape 3 : Allumer la LED verte
  digitalWrite(ledRouge, LOW);  // LED rouge éteinte
  digitalWrite(ledJaune, LOW);  // LED jaune éteinte
  digitalWrite(ledVerte, HIGH); // LED verte allumée
  delay(5000);                  // Attendre 5 secondes

  // Étape 4 : Allumer la LED jaune avant de revenir au rouge
  digitalWrite(ledRouge, LOW);  // LED rouge éteinte
  digitalWrite(ledJaune, HIGH); // LED jaune allumée
  digitalWrite(ledVerte, LOW);  // LED verte éteinte
  delay(2000);                  // Attendre 2 secondes
}
