# Workout Builder - Installatiehandleiding

## Inleiding
Workout Builder is een webapplicatie waarmee gebruikers aangepaste workout-routines kunnen maken en beheren. De applicatie biedt een eenvoudige en intuïtieve interface voor het plannen van oefeningen en het bijhouden van trainingssessies.

![Screenshot van de applicatie](public/screenshot.png) *(Voeg hier een echte screenshot toe)*

## Benodigdheden
Om deze applicatie lokaal te draaien, heb je het volgende nodig:

- **Node.js** (aanbevolen versie: 18+)
- **npm** (wordt meegeleverd met Node.js)
- Een editor zoals Visual Studio Code
- Een terminal of command-line interface (CLI)

## Installatie-instructies
Volg deze stappen om de applicatie op jouw machine te installeren en te starten:

1. **Clone of download het project**
   ```sh
   git clone <repository-url>
   cd workout-builder
   ```
   *(Als je een ZIP hebt gedownload, pak deze dan uit en open de map in de terminal.)*

2. **Installeer de dependencies**
   ```sh
   npm install
   ```

3. **Start de ontwikkelserver**
   ```sh
   npm run dev
   ```
   De applicatie zal draaien op `http://localhost:5173/` (of een andere poort als 5173 bezet is).

## Inloggegevens
Als er accounts beschikbaar zijn, gebruik dan de volgende testgegevens:

- **Gebruikersnaam**: Devi
- **Wachtwoord**: Devivdb12


## Extra npm commando’s
De applicatie bevat de volgende extra npm-commando's:

- **Applicatie bouwen (voor productie):**
  ```sh
  npm run build
  ```
  Dit genereert een geoptimaliseerde versie van de applicatie in de `dist/` map.

- **Server starten voor productie-build:**
  ```sh
  npm run preview
  ```
  Dit draait de geoptimaliseerde versie lokaal.

- **Linting uitvoeren:**
  ```sh
  npm run lint
  ```
  Hiermee controleer je de code op fouten en inconsistenties.

## Conclusie
Deze handleiding biedt een stapsgewijze uitleg om de Workout Builder-applicatie lokaal te installeren en te draaien. Mocht je problemen tegenkomen, controleer dan of je de juiste Node.js-versie gebruikt en dat je alle dependencies correct hebt geïnstalleerd.