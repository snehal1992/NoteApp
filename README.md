# Note App

Its an app that lets users create a new note with title and body, delete a note by title, list all notes and read notes by title . It is built in NodeJS .

## Getting Started

1. Start by install Node into your machine .

2. Set it up and clone the project into a desired folder .

3. From the command line run 
  
  ```
  npm install
  ```
  
  This would include all dependent libraries 
  
4. Now using the command line run the following commands according to need->
  
  ```
node app.js read --title "titlename"
node app.js add --title "titlename" --body "content" 
node app.js remove --title "titlename" 
node app.js list

```
## File Description

app.js : Root js file to be run

notes.js : Core functionality of notes app

node-data.json : Persisting data from user 

playground : js files to play with tech in order to improve app 

package.json, package-lock.json - Configuration files





