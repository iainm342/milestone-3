# **CODE INSTITUTE: MILESTONE PROJECT 3** #

# **larder** #

# Testing

[back to README.md file](https://github.com/iainm342/milestone-3/blob/main/README.md/#testing)

---

## **CONTENTS** ##

- [Manual Testing](#manual-testing)
- [Automated Testing](#automated-testing)
    - [Code Validation](#code-validation)
    - [Accesibility Validation](#accesibility-validation)
    - [Browser Validation](#browser-validation)
- [User Testing](#user-testing)
    - [Peer Testing](#peer-testing)
    - [User Testing](#user-testing)

---

## **MANUAL TESTING** ##

- Chrome Developer Tools were used to test responsiveness on all screen sizes.
- Physical testing was carried out on Desktop, Tablet and various Mobile devices.
    - Throughout the whole process, I was testing the responsiveness of the site with my laptop, iPhone X and iPad.
    - Once the site was in a state that I was happy with, I submitted it for Peer review.
    - I also asked friends and family to have a look at the site from a user perspective, rather than a coders perspective.
- All links were tested to ensure they worked on all devices.
- NavBar was tested to ensure it worked on all devices.
- All CRUD functions were tested to ensure they worked on all devices.

[Back to Contents](#contents)

---

## **AUTOMATED TESTING** ##

### <ins>CODE VALIDATION</ins> ###

All HTML and CSS was passed through [W3C Validator](https://validator.w3.org/), [W3C Validator CSS](https://jigsaw.w3.org/css-validator/), JavaScript and jQuery through [JShint](https://jshint.com/) and Python through [PEP8 Online](http://pep8online.com/).

HTML Errors:

- Persistent warning on all pages due to the section on every page for flash messages

![HTML Error](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/section-warning.png)

- alt missing from most images. Resolved and passed.
- recipes.html had an extra " on line 45 which caused multiple errors. Resolved and passed.

CSS Errors:

- CSS passed with no errors.

![CSS Validation](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/CSS-validated.png)

JShint Errors:

- all JS and jQuery has been passed through the Validator, however, various warnings were presented with regards to the $ in jQuery. Searching has shown that some extra code should be added to the .jshintrc to remove these warnings - this is outwith my current knowledge and skill base and will need some further research on my part.

[Back to Contents](#contents)

PEP8 Errors:

- Python passed with no errors.

![Python Validation](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/python-validate.png)


### <ins>ACCESIBILITY VALIDATION</ins>

The site was tested on the [WAVE](https://wave.webaim.org/) site.

[Back to Contents](#contents)

### <ins>BROWSER VALIDATION</ins> ###

The site was tested on the following browsers that I have access to:

- Google Chrome

![Chrome](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/chrome.png)

- Mozilla Firefox

![Firefox](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/firefox.png)

- Microsoft Edge

![Edge](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/edge.png)

[Back to Contents](#contents)

---

## **USER TESTING** ##

### <ins>PEER TESTING</ins> ###

I submitted the project for Peer Review on Slack. The following comments were made:

- @lucyjpjones - "If I am not logged in as a user 'logged in' is showing, I think it would be nicer if this wasn't visible unless a user is logged in"
    - this has been resolved with an if statement checking to see if the **user** is logged in. Message now only shows when logged in.
- @lucyjpjones - "Also when I was logged in and went on the profile page the repsonisveness for input fields was a bit off"
    - this has been resolved with some formatting on the profile.html page.
- @Clint - "I really like the burger icon for the menu but it has no hover:state"
    - 
- @Clint - "When I did register, I had no idea that I was logged in ... the only way I knew I was logged in was the logout tab in the menu"
    - this has been resolved with the flash message now saying "welcome {user}! you are now logged in!"

I asked my fellow May 2020'ers to have a look and the feedback was generally positive along with some feedback which helped:

- "images not correct sizes throughout". This is now fixed so that the cards stay in position and it doesn't look "wonky".

![Image Size](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/image-size.png)

- "edit profile button doesn't work but delete does". This was down to me "fixing" one thing and inadvertently "breaking" another. This is now resolved as I had removed the "user=user" from the "return render_template("edit_profile", user=user) line of code.

![Edit Profile](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/edit-profile.png)

[Back to Contents](#contents)

### <ins>USER TESTING</ins> ###

I asked various friends and family to test the site as **users** and not as coders to gain a different perspective. This happened towards the end of the project to ensure that the User Stories had been met. THe following feedback was given from the group:

- As a **user**, I want to be able to register as a new user on the site.
    - The **user** selects the "Register" option from the NavBar and is taken to register.html. They are then able to complete the form that is displayed which has 5 fields that are required to be completed. Form validation is present with the **user** being unable to progress unless all fields are completed. Initially, on pressing the "Register" button, the **user** was taken to the categories.html page. This was seen as confusing as there was no confirmation that the registration process had been successful. I changed this so that the **user** is redirected to the profile.html page which shows a flash message that registration has been successful. I also added the EmailJS API to send a confirmation to the **user** email address - this appears to be intermittent and requires further investigation! **This requirement is deemed as being completed.**

![Register](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/register.png)

- As a **user**, I want to be able to log on and off the site after I have registered.
    - The **user** can log on to the website by selecting the "Log In" option from the NavBar. They are taken to a small form requiring input of the **user**'s username and password. It was pointed out that I had forgotten to add Form Validation to this page and, although, the **user** is uanable to log in, and flash message is provided, the form doesn't behave the same way as the registration form. This has now been amended. **This requirement is deemed as being completed.**

![Log In](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/login.png)
    
- The **user** can log off the website by selecting the "Log Off" option from the NavBar. They are returned to landing.html and a flash message is displayed confirming they have been logged out.

![Log Off](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/logoff.png)

- As a **user**, I want to be able to read all the recipes that have been added to the site by the **site owners** and other **users**.
    - The **user** can view all the recipes in the database without being logged in. This is achieved by either selecting "Recipes from your favourite cooks and chefs" from the middle part of landing.html or selecting "Recipes" on the NavBar - this option shows a dropdown menu that allows the **user** to either choose "All Recipes", which in turn directs them to recipes.html, or select a category which will direct them to the appropriately filtered category page, ie desserts.html or sides.html. **This requirement is deemed as being completed.**

![Log Off](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/read.png)

- As a **user**, I want to be able to add my own recipes to the ste to help grow the recipes available and to be part of the "community".
    - The **user** can add their own recipes to the database by selecting "Add your own favourite recipes!" from the middle part of landing.html or selecting "Add Recipe" from the NavBar once the **user** has logged in. My **Mentor** pointed out, during my mid-project call that selecting "Add your own favouite recipes!" took you straight to add_recipe.html without requiring to be logged in. This has now been rectified and the **user** is directed to the log in page if this option is selected. add_recipe.html presents the **user** with a Form with a dropdown category option and required fields that are needed before submission to the DB. JavaScript is used to add as many ingredient fields and method textareas as required. It was pointed out that it was unclear what each field was supposed to be for as the placeholder text wasn't showing. As the Materialize CSS was used to style the Form, and the text had been set to white, it obviously wasn't going to show up against a white background.

![Add Before](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/add-before.png)

-  On tabbing/moving through the form, the placeholder text now shows and turns red if not completed. **This requirement is deemed as being completed.**

![Add After](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/add-after.png)

- As a **user**, I want to be able to update any of the recipes that I have added to the site.
    - The **user** can edit their own recipes only. Larderadmin can edit any recipe that has been added to the site. The **user** must have logged in and will only see the "Edit" button on any of the recipe cards or show_recipe pages as a result.

![Edit Recipe](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/edit-recipe.png)

- Clicking the "Edit" button takes them to a form that contains the information held in the DB and will allow them to edit this information. Once any changes have been made, the **user** clicks the "Edit" button and the new information is submitted to the DB and the **user** is redirected to the recipes.html page with a flash message saying the recipe has been updated. Clicking the "Cancel" button takes the **user** to the recipes.html page. It was pointed out that once pressing the "Edit" button, the "added by" field on the recipe card was deleted as a result of the edit making it impossible to edit the recipe again. 

![After Edit Recipe](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/no-added-by.png)

- This was resolved by adding in an extra line on the form to contain that information, and retrieving the info from the DB in app.py, so that it would update correctly. **This requirement is deemed as being completed.**

![After Edit Recipe 2](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/added-by.png)

- As a **user**, I want to be able to delete any of the recipes that I have added to the site.
    - The **user** can only delete their own recipes and must be logged in to achieve this. Larderadmin can delete any recipe that has been added to the site. The **user**, on showing the card summary or the full recipe, can click the "Delete" button and the recipe will be removed from the DB. A flash message is displayed confirming deletion and the **user** is redirected to the categories.html page. **This requirement is deemed as being completed.**

![Delete Recipe](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/delete-recipe.png)

- As a **user**, I want to be able to search the site for recipes using key words.
    - The **user**, from the recipes.html and cookbook.html pages, can search the DB by entering keywords in to the search form. The index file in MongoDB has been created using the following dictionary keys: category_name, cookbook_name, recipe_chef, recipe_difficulty and recipe_ingredients. The user can reset the page by clicking the "Reset" button which redirects the **user** back to the recipes.html page. **This requirement is deemed as being completed.**

![Search Recipe](https://github.com/iainm342/milestone-3/blob/main/readme/images/testing/search-recipe.png)

- As a **user**, I want the site navigation to be intuitive and easy to use.
    - The **users** felt that the site was easy to navigate and that fulfilled the above requirement. **This requirement is deemed as being completed.**

- As a **user**, I want the information to be displayed in a clear and organised manner to allow for quick decisions to be made.
    - The **users** felt that the contrast of white and #2c642e (Faux_mughal green) was clear and proves the contrast issue highlighted by Google Lightouse. **This requirement is deemed as being completed.**

- As a **site owner**, I want the information on the site to be presented in a fun and attractive manner encouraging more **users** to register on the site.
    - I feel that this has been achieved throughout the site. **Users** have said that the site is clean and fun to use. The "hamburger" icon used for the menu was mentioned as being a nice, humourous, touch! **This requirement is deemed as being completed.**

- As a **site owner**, I want to be able to promote cookbook sales.
    - The **user** is able to see the cookbooks that have been added to the site by selecting "Bookshop" from the NavBar. The list is restricted to larderadmin only and any requests to add books can be made by the **user** by email. The larderadmin is able to add/edit/delete cookbooks in similar manner to the CRUD functionality for recipes. **This is deemed as being partially completed**

- As a **site owner**, I want to be able to contact **users** using their profile information with offers.
    - The **user** has completed a profile page containing a contact email and this can be used to populate a mailing list for future site developments. **This is deemed as being partially completed**

[Back to Contents](#contents)
