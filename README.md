# 24hHelper

Ths app is meant to help particpants of the 24 hour kart race in Grimma, Germany with the constraints put on the time a driver has to spent racing in relation to his/her teammates. See Rules chapter for further info.

## Usage and constraints

- Add a Driver on the top left.
- Driver list can be reordered at any time.
- Driver order will be taken into account when calculating total times.
- Add stints with the floating fab in the lower right corner.
- There are no sanity checks for overlapping stints or stints that have a negative duration.
- Dark mode can be enabled by button in the upper right corner.
- PLANNING MODE can be enabled by clicking the (middle) toggle in the top right. In this mode you can plan for the drivers. They will be stored seperately. Planning mode is signified by a red background.
- The electron version is not signed (meaning Windows will warn the user when starting the application).

## Rules

The rules implemented for total driving time and delta between drivers are according to the 2025 ruleset for the Grimma 24 hour kart race.

- The delta of time spent on track for drivers 1 through 4 must not be greater than one (1) hour. Drivers 5 and following are not taken into consideration for this calculation.
- No driver may drive more than six (6) hours.
- Time spent driving heavy turns must be at least six (6) hours.

## Development

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

To run this project you will neeed:

- NodeJS version >= 22.11.0
- Angular version >= 19.0.7

### Setup

- Clone the repository
- In project directory run:

```bash
npm install
```

### Development server

To start a local development server, run:

```bash
ng serve
```

Open browser and go to [http://localhost:4200](http://localhost:4200)

### Electron

To run app in electron, run:

```bash
npm run start
```
