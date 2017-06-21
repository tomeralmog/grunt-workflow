# Automated deploy with grunt

## installation
you need [Node.js](https://nodejs.org/en/) and [Bower](https://bower.io/) installed on your computer.
* open a terminal / console
* run 
``` 
npm i 
```  
(sometimes you will need to add sudo before this command)
* run 
``` 
bower i 
``` 
to install 3rd party frontend libraries like jQuery

## Run Application
in your console run 
```
grunt serve
```

## Compile application
in your console run 
```
grunt
```

## Develop
Modify index.html, main.js and main.scss. you can create other pages with the same flow
To add third party library use bower for example:
```
bower install jquery-validation --save
 ```
 This will add a dependency in your bower.json file and inject it into your index.html

Good Luck!

Created by Tomer Almog


