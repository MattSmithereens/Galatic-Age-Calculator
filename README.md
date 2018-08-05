# Super Fantastic Galactic Age Calculator

#### Epicodus JavaScript independent project, Aug 3, 2018

#### By Matt Smith

## Description

Write a program that does the following things:
* calculates an age or span of time from an entered (birth)date to the present, precise to the second.  Initially I used Date(); to determine the present date/time, parsed it to a string and did all my calculations accordingly (check out https://github.com/MattSmithereens/Galatic-Age-Calculator/blob/noGetDate/src/main.js to see the direction I was headed in), but in the interest of not spending 12 hours on this dealing with leap years and the like, I gave up and used Date().  It was an interesting excercise in problem solving, but of course JS programmers already solved this problem for us. 
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
