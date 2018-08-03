# Project Title

#### Epicodus JavaScript independent project, Aug 3, 2018

#### By Matt Smith

## Description
This program does 3 related, but separate things:
* it takes a pair of ages in Terran years, converts those ages to seconds and can compare those seconds-ages to one another.  
* it converts Terran ages to Mercurian, Venusian, Martian and Jovian years.
* it calculates a life expectancy in Terran years based on a number of factors (to be determined) and states how long one is expected to live or by how much one has exceeded their estimated life expectancy.

## Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program takes in an age in years and converts that to seconds (1 year = 3.154e+7 seconds)**|  "1" | "31557600" |
| **Program converts a pair of ages and determines how many seconds separate them**|  "1", "2" | "31557600" |
| **Program Calculates a Terran age in Mercurian years**|  "1" | ".24"|
| **Program Calculates a Terran age in Venusian years**|  "1" | ".24"|
| **Program Calculates a Terran age in Martian years**|  "1" | ".24"|
| **Program Calculates a Terran age in Jovian years**|  "1" | ".24"|


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
