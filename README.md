# **CODE INSTITUTE: MILESTONE PROJECT 3** #

# **larder** #

![site display on different screens](readme/images/responsive.png)

This is the third of four Milestone Projects required for the Full Stack Web Development course provided by Code Institute. The main goal for this project was to produce a "full-stack site that allows the user to manage a common data set about a particular domain" using HTML, CSS, JavaScript, Python+Flask, MongoDB and any other relevant libraries and external API's.

A live version of the site can be found [here](https://milestone-3-larder.herokuapp.com/).

## **CONTENTS** ##

- [UX](#ux)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design Process](#design-process)
    - [Fonts](#fonts)
    - [Colours](#colours)
    - [Wireframes](#wireframes)
- [Technology Used](#technology-used)
  - [Languages and Frameworks](#languages-and-frameworks)
  - [API's](#API'S)
  - [Tools](#tools)
- [Features](#features)
- [Testing](#testing)
- [Deployment](#deployment)
  - [Hosting](#hosting)
  - [Local Hosting](#local-hosting)
- [Credits](#credits)
  - [Images](#images)
  - [Image editing](#image-editing)
  - [Coding Ideas](#coding-ideas)
- [Acknowledgements](#acknowledgements)

## **UX** ##

### <ins>PROJECT GOALS</ins> ###

The main aim of this website was to provide a free-to-use recipe resource for the **user** which allows them to add (Create) recipes to the website, search (Read) for recipes on the website, amend (Update) their own recipes and delete (Delete) their own recipes. Their is also the bookshop page which will take the **user** to the appropriate Amazon webpage allowing them to purchase any cookbook that they are interested in.

- To allow the growth of a recipe database for the **user** and by the **user**.
- To allow the **site owner** to encourage the **user** to purchase the cookbooks highlighted on the Bookshop page by directing them to the appropriate Amazon site.

[Back to Contents](#contents)

### <ins>USER STORIES</ins> ###

- As a **user**, I want to be able to register as a new user on the site.
- As a **user**, I want to be able to log on and off the site after I have registered.
- As a **user**, I want to be able to read all the recipes that have been added to the site by the **site owners** and other **users**.
- As a **user**, I want to be able to add my own recipes to the ste to help grow the recipes available and to be part of the "community".
- As a **user**, I want to be able to update any of the recipes that I have added to the site.
- As a **user**, I want to be able to delete any of the recipes that I have added to the site.
- As a **user**, I want to be able to search the site for recipes based key words.
- As a **user**, I want the site navigation to be intuitive and easy to use.
- As a **user**, I want the information to be displayed in a clear and organised manner to allow for quick decisions to be made.
- As a **site owner**, I want the information on the site to be presented in a fun and attractive manner encouraging more **users** to register on the site.
- As a **site owner**, I want to be able to promote cookbook sales.
- As a **site owner**, I want to be able to contact **users** using their profile information with offers.

[Back to Contents](#contents)

### <ins>DESIGN PROCESS</ins> ###

1. As with my previous projects, this site is based on my hospitality background and love of cooking. It was also a suggested option by the Code Institute team as a viable project for this stage in the course. The site needed to be easy to navigate, provide the information required by the **users** and be flexible enough to grow as recipes etc were added by the (hopefully!) growing community.

2. The colour scheme chosen was origingally based on a colour from the image used as the background image on the landing page - #abc141 (Celery) which is an almost lime green colour. Once I started building the site, and ran it through Lighthouse it was flagged as a bad colour to use for accessibility reasons. I then changed the primary colour used across the site to #2c642e (Faux-Mughal green) which improved the readability of the site.

3. I used Figma(https://figma.com/) to create my wireframes and used it to organise the flow of the site and how the different pages would respond to the different screen sizes.

4. As with my previous projects, the design changed as I was building the site. I am swiftly realising that design is not my strong point and that the way I build sites is very much based on a "trial and error" approach and that it makes things more complicated in the long run.

5. I referreed to my User Stories and initial Wireframes throughout the process and all changes made were to improve the final "look and feel" of the site and to remove the initial design choices that were deemed as inappropriate.

[Back to Contents](#contents)

### <ins>FONTS</ins> ###

I chose the Roboto Mono font family for the site as I liked the fact it looked like a typewriter had been used. This added a "bookiness" to the overall feel of the site and seeing as it is based on recipes from cookbooks, this felt appropriate. The font family was chosen from [Google Fonts](https://fonts.google.com) and was then imported in to the style.css file. 
### <ins>COLOURS</ins> ###

As previously mentioned, #abc141 (Celery) was initially chosen as the main colour for the site but was changed to #2c642e (Faux-Mughal green) for better readability. The nav bar started off as coloured with white text but this was changed to white with coloured text to give a more modern look. The footer was always full colour but changed from the original Celery to Faux-Murghal with white text.
### <ins>WIREFRAMES</ins> ###

Initial wireframes for each page can be found by clicking on the links below:

- [Landing Page]()
- [Categories]()
- [Recipes]()
- [Bookshop]()
- [Log In]()
- [Register]()
- [Add Recipe]()
- [Add Cookbook]()

[Back to Contents](#contents)

---  

## **TECHNOLOGY USED** ##

### <ins>LANGUAGES AND FRAMEWORKS</ins> ###

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - used to create the site structure.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - used to create the styling throughout the site.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - this was used for the addition/deletion of ingredients and methods buttons
- [jQuery](https://jquery.com/) - this was used to activate the Materialize functionality.
- [Python](https://www.python.org/) - used to write the logic that operates the site.
- [Flask](https://flask.palletsprojects.com/en/1.1.x/) - used to manage the HTML more efficiently through the use of templates.
- [Font-Awesome](https://fontawesome.com/icons?d=gallery) - icons were taken from this site for the forms, header, footer and social buttons.
- [Materialize](https://materializecss.com/) - I relied on Materialize for the responsive grid design, NavBar, Footer, Card and Form elements.
- [Google fonts](https://fonts.google.com/) - as previously stated, the fonts used were taken from here.
- [Heroku](https://www.heroku.com/home) - used for hosting website.
- [MongoDB](https://www.mongodb.com/3) - used for database functionality.

### <ins>API'S</ins> ###

- [EmailJS](https://emailjs.com) - this was used to host the email functionality of the site.
  
### <ins>TOOLS</ins> ###

- [Git](https://git-scm.com/) - version control and recording of all changes to site during development process.
- [Visual Studio Code](https://code.visualstudio.com/) - IDE used for code editing. 
- [Figma](https://figma.com/) - wireframing
- [Google Fonts](https://fonts.google.com/) - used to select font families.
- [W3C Validator](https://validator.w3.org/) - used to test my HTML to ensure there were no errors.
- [W3C Validator CSS](https://jigsaw.w3.org/css-validator/) - used to test my CSS to ensure there were no errors.
- [JSHint](https://https://jshint.com/) - used to test my JS to ensure there were no errors.
- [PEP8 Online](http://pep8online.com/) - used to check my Python was PEP8 compliant.
- [WAVE](https://wave.webaim.org/) - used to test accesibility of site.
- [Chrome Developer](https://developers.google.com/web/tools/chrome-devtools) - used to test responsiveness of site throughout the developmnent process and also performance using Lighthouse.
- [Free Formatter](https://freeformatter.com/html-formatter.html#ad-output) - html formatter to help keep things tidy!
- [Am I Responsive](http://ami.responsivedesign.is/#) - used to create responsive image for readme.MD.
- [Favicon](https://favicon.io/) - used to generate the Favicon on the webpage tab.

[Back to Contents](#contents)

---

## **FEATURES** ##

### <ins>FEATURES IMPLEMENTED</ins> ###

### ELEMENTS SEEN ON ALL PAGES ###

- Grid system used to structure pages and make them responsive for various viewports.
- Materialize NavBar with mobile sidebar to allow easy navigation throughout the web app. Able to reach all pages of the app from the NavBar.
- Materialize Footer used with social links and email "contact us" link.
- Favicon for the title tab in the browser.
- Hover used on all buttons and web/email addresses.
- Other than the landing page, the logged in user name is displayed in the top right of the viewport.
- Section at top of page for all flashed messages after completion of an action.

### ELEMENTS SEEN ON LANDING PAGE ###

- Background image taking up the full viewport.
- Container with site name in one column and hoverable links to recipe and the bookshop.
- "Add your own..." link redirects the **user** to the login page as this needed be restricted to registered **users**.

### ELEMENTS SEEN ON LOG IN PAGE ###

- Background image taking up the full viewport.
- Container with form allowing input from the **user**.
- Form asks for username and password with "login" submit button which queries the User collection in the DB.
- Successful input takes **user** to their profile page.
- Unsuccessful input displays flash message and resets form.

### ELEMENTS SEEN ON REGISTER PAGE ###

- Background image taking up the full viewport.
- Container with form allowing input from the **user**.
- Form asks the **user** to supply the following: username, first name, last name, email address and password.
- "Register" submit button sends info to DB and takes the **user** to the Categories page.

### ELEMENTS SEEN ON PROFILE PAGE ###

- Background image taking up the full viewport.
- Container with card showing **user** information.
- Information pulled from the DB and password is "popped" and replaced with "********" to highlight that information is masked.
- Delete and Edit buttons are shown only to the logged in **user**.

### ELEMENTS SEEN ON CATEGORIES PAGE ###

- Materialize cards for the 6 categories used within the site.
- Images and FAB onclick takes the **user** to the appropriate page which renders all the recipes that fall into that category.

### ELEMENTS SEEN ON "ALL" RECIPES PAGE ###

- Search bar linked to the MongoDB index file allowing the **user** to search the database using key words within the recipe collection.
- Materialize cards to display all recipes in the database.
- Button on each card to display full recipe information to the **user**.
- Image onlcick shows the user some basic information about the recipe and, again, provides a button which will display full recipe information to the **user**.
- If recipe was added by the logged in **user** a delete button is also displayed.

### ELEMENTS SEEN ON INDIVIDUAL CATEGORY PAGES ###

- Materialize cards to display all recipes in the database.
- Button on each card to display full recipe information to the **user**.
- Image onlcick shows the user some basic information about the recipe and, again, provides a button which will display full recipe information to the **user**.
- If recipe was added by the logged in **user** a delete button is also displayed.

### ELEMENTS SEEN ON INDIVIDUAL CATEGORY PAGES ###

- 



[Back to Contents](#contents)

---

## **TESTING** ##

Testing information can be found [here](readme/testing.md).

[Back to Contents](#contents)

---

## **DEPLOYMENT** ##

### <ins>HOSTING</ins>

The site is hosted on [Heroku](https://milestone-3-larder.herokuapp.com/).

Deployment of the site was achieved by following the steps below (outlined in the CI Mini Project - Task Manager):

- Created a new repository within GitHub.
- Opened repository in my IDE of choice - Visual Studio Code - by cloning the repo from GitHub.
- Created a requirements.txt file by typing "pip3 freeze --local > requirements.txt" in the terminal which tells Heroku what dependencies are required.
- Created a Procfile for Heroku by typing "echo web: python app.py > Procfile" in the terminal.
- Checked the Procfile to make sure there is no extra line after the first line as this can confuse Heroku.
- Push the requirements.txt and Procfile to GitHub.
- Logged in to Heroku and selected "Create New App".
- Selected the input field "App Name" and gave app a unique name using dashes instead of spaces.
- Selected the region closest to my location and which was free to use!
- Clicked "Create App".
- Selected "Deploy" from the Heroku App menu.
- Selected "GitHub" from the "Deployment Method" section of the page.
- Ensured my GitHub profile name was showing in the "Connect to GitHub" section and inserted my GitHub repo name in the input field and clicked "Search".
- Once Heroku had found my repo, I clicked "Connect" to complete the link.
- Selected "Settings" from the Heroku App menu.
- Selected "Reveal Config Vars" and inputed the relevant key/value information from the my env.py (IP, PORT, MONGO_URI, MONGO_DBNAME, SECRET_KEY) file making sure that there were not quotation marks used.
- Selected "Deploy" from the Heroku App menu.
- Scrolled down the page and selected "Enable Automatic Deployment".
- Selected Master Branch under "Branch Selected".
- Clicked "Deploy Branch" - crossed my fingers and waited!
- Once site was deployed, clicked "View" to launch the app and be able to view it within the browser.

### <ins>LOCAL HOSTING</ins>

If you wish to clone a copy of my project, feel free. You will need to:

- Navigate to my GitHub [repository](https://github.com/iainm342/milestone-3).
- Click the "Code" button next to the Green Gitpod button.
- Either, download the zip file or clone the repo using  gh repo clone iainm342/milestone-3 in the terminal.
- Install the modules listed in the requirements.txt file using "python -m pip -r requirements.txt" in the terminal.
- You will need to create a new project in [MongoDB](https://www.mongodb.com/3) called "milestone-3-larder" and create a new database called "larder".
- This database will have 4 collections: categories, cookbooks, recipes and users. 
- Create an env.py file in your application folder and add the following:

    ```
    import os

    os.environ.setdefault("IP", "0.0.0.0")
    os.environ.setdefault("PORT", "5000")
    os.environ.setdefault("SECRET_KEY", "[YOUR SECRET KEY]")
    os.environ.setdefault("MONGO_URI", "mongodb+srv://[YOUR ROOT]@cluster0.fw1gk.mongodb.net/milestone-3-larder?retryWrites=true&w=majority")
    os.environ.setdefault("MONGO_DNNAME", "milestone-3-larder")
    ```

  You will need to update the above with  your own SECRET_KEY and YOUR ROOT info.

- The app can now be run locally by typing python app.py in the terminal and will be available in your browser using the address "http://localhost:5000".

[Back to Contents](#contents)

---

## **CREDITS** ##

### <ins>IMAGES AND TEXT CONTENT</ins> ###

The images and card, text content used were sourced from various sites:

- [Shutterstock](https://shutterstock.com) - background image used on landing, login and registration pages.
- [Amazon](https://amazon.co.uk) - images and URL's for bookshop page.
- Various cookbooks for recipes which are searchable online - Baking Made Easy, River Cottage - Veg Every Day, Jamie Oliver - Veg, Jamie Oliver - The Naked Chef

### <ins>IMAGE EDITING</ins> ###

- [Paint 3D](https://www.microsoft.com/en-gb/p/paint-3d/9nblggh5fv99?activetab=pivot:overviewtab) - basic image cropping and editing

### <ins>CODING IDEAS</ins>

- Knowledge, and inspiration, was taken from the Code Institute project - Task Manager - for the basic aspects of the site and then modified to finalise the project.
- Code Snippet for adding and removing input fields was found [here](https://www.sanwebe.com/2013/03/addremove-input-fields-dynamically-with-jquery) and then modified.

[Back to Contents](#contents)

---

## **ACKNOWLEDGEMENTS** ##

Thank you to the following people:

- My mentor Seun Owonikoko for her time, guidance and making things obvious...
- The guys in the class of May 20 on Slack - always there for a chat when needed!
    - special mentions to @nikkikobako, @Sara and @Pauld0051
- My partner, Paul, for putting up with the growing obsession I have towards coding.

[Back to Contents](#contents)

---