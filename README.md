# 24hHelper

Ths app is meant to help particpants of the 24 hour kart race in Grimma, Germany with the constraints put on the time a driver has to spent racing in relation to his/her teammates. See Rules chapter for further info.

## Usage and constraints

- Add a Driver on the top left.
- Driver list can be reordered at any time.
- Driver order will be taken into account when calculating total times.
- Add stints with the floating fab in the lower right corner.
- The app checks that only syntactically correct times (00:00 - 24:00) are accepted.
- There are curently no sanity checks for overlapping stints or stints that have a negative duration.

## Rules
The rules implemented for total driving time and delta between drivers are according to the latest ruleset for the Grimma 24 hour kart race. 

- The delta of time spent on track for drivers 1 through 5 must not be greater than one (1) hour. Drivers 6 and up are not taken into consideration for this calculation.
- Time spent driving heavy turns must be at least four (4) hours.

## Development

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

### Development server

To start a local development server, run:

```bash
ng serve
```

