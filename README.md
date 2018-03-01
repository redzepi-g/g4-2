# Project for G4+2 for SEDC inner competition 

This project is developed by Dime Zlatanovski, Nikola Tashkovski, Gazmend Rexhepi, and David Stergiski. 


## How to initialize this project in your local computer

1. Install XAMPP -> https://www.apachefriends.org/index.html
2. Install Composer -> https://getcomposer.org/
3. Install GitHub Desktop application
4. From the GitHub Desktop application, choose Clone a repository, 
https://github.com/redzepi-g/g4-2.git, make sure you Clone it 
inside the Htdocs folder of your XAMPP installation folder,
so generally it should be by default C:/xampp/htdocs
5. After cloning the repository, open the folder with Visual Code
if you use it, and press CTRL+` to open terminal, and write
"composer update" press enter. If you dont use Visual Code, 
open command prompt, and go to folder of the project, and 
run "composer update" .
6. After "composer update" you will be able to view the project live
on your machine, so activate XAMPP, Apache and mySQL modules, 
and go to "localhost/g4-2/public" in your browser to view it live.

## Making changes to the project 

If you wanna make changes to the project, you can find the default
pages listed under /Resources/Views, this is to edit the layout of our 
project, so basically the index file will be here and available for editting
with normal html stuff :)

If you wanna include any additional files, like images,scripts, and css, 
You must create them under the /Public folder, so

* /public/css for css files
* /public/js for js files
* /public/img for img files

### To include these files in the default view, you just 
### have to use {{asset('css/myCss.css')}} in src path. 
### So :

* for js <script src="{{asset('js/myScript.js')}}"></script>
* for images <img src="{{asset('img/image_one.jpg')}}>

**Dont forget to create your wanted files under the /public directory.**


### To push your changes to github repo
just open your GitHub Desktop application and the changes will
be displayed, in the lower left corner you can write the 
commit name, So:

* Give the commit a name "Dime did this."
* Click Commit to master
* And then you click "Push to origin" on the top middle bar actions.

# Working with the API 

## Database setup first.

1. Launch your XAMPP, activate Apache and mySQL modules.
2. Go to localhost/phpmyadmin, create a new database
you can see the option "New" on the left sidebar menu. 
3. Name your new database "groupfour_db" , for collation
choose "utf8_general_ci"
4. Dont do anything else, just go to localhost/phpmyadmin,
click the newly created database, so, "groupfour_db",
and at the top menu bar click "Import"
5. Browse to the file that i sent on fb
and click Go. 

With this pull now, you have access to the Destinations api, with 3 data items available for testing,
as well as a new view to see for yourself how to read data from the api under /views/testapi.blade.php,
you can view live in the Console at localhost/g4-2/public/testapi.

**If you dont see the file on fb group, know that you can also find it in the folder of the app under**
**/database directory. It will be named "groufour_db.sql"**

**If you are in doubt wether you imported the data correctly or not, visit**
**localhost/g4-2/public/api/destinations , if you get an empty page or an error message then you didnt import the db correctly**
