# Super Fantastic Galactic Age Calculator

#### Epicodus JavaScript independent project, Aug 3, 2018

#### By Matt Smith

## Description

Write a program that does the following things:
* calculates an age or span of time from an entered date to the present, precise to the second.  My approach involves outputting the present DateTime, parsing the values and counting backwards to the entered date by adding the years, months, days, hours, minutes and seconds that have elapsed between the 2 dates.  This approach requires me to be surgical when determining spans of time that have taken place in the years of birth and the current year, but can I simply multiply each year in between by how many seconds are in a year (31536000, or 31622400 in a leap year)
* Calculate Earthling ages in Mercurian, Venusian, Martian and Jovian years.  Each value simply takes an entered age in years and increases or decreases it by its percentage related to a solar year on Earth.
* Determines how far along one is in their life expectancy owing to certain environmental conditions and informs them of their life expectancy.

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma
* Abel Trotter's awesome setup tool

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Matt Smith**
