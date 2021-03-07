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

![HTML Error](https://github.com/iainm342/milestone-3/blob/main/readme/images/section-warning.png)

- alt missing from most images. Resolved and passed.
- recipes.html had an extra " on line 45 which caused multiple errors. Resolved and passed.

CSS Errors:

- CSS passed with no errors.

![CSS Validation](https://github.com/iainm342/milestone-3/blob/main/readme/images/CSS-validated.png)

JShint Errors:

- all JS and jQuery has been passed through the Validator, however, various warnings were presented with regards to the $ in jQuery. Searching has shown that some extra code should be added to the .jshintrc to remove these warnings - this is outwith my current knowledge and skill base and will need some further research on my part.

[Back to Contents](#contents)

PEP8 Errors:

- Python passed with no errors.

![Python Validation](https://github.com/iainm342/milestone-3/blob/main/readme/images/python-validate.png)


### <ins>ACCESIBILITY VALIDATION</ins>

The site was tested on the [WAVE](https://wave.webaim.org/) site.

[Back to Contents](#contents)

### <ins>BROWSER VALIDATION</ins> ###

The site was tested on the following browsers that I have access to:

- Google Chrome

![Chrome](https://github.com/iainm342/milestone-3/blob/main/readme/images/chrome.png)

- Mozilla Firefox

![Firefox](https://github.com/iainm342/milestone-3/blob/main/readme/images/firefox.png)

- Microsoft Edge

![Edge](https://github.com/iainm342/milestone-3/blob/main/readme/images/edge.png)

[Back to Contents](#contents)

---

## **USER TESTING** ##

### <ins>PEER TESTING</ins> ###

I submitted the project for Peer Review on Slack. Due to the volume of projects being submitted at the same time, I received no feedback from the Slack Community.

I asked my fellow May 2020'ers to have a look and the feedback was generally positive along with some feedback which helped:

- "images not correct sizes throughout". This is now fixed so that the cards stay in position and it doesn't look "wonky".
- "edit profile button doesn't work but delete does". This was down to me "fixing" one thing and inadvertently "breaking" another. This is now resolved as I had removed the "user=user" from the "return render_template("edit_profile", user=user) line of code.

[Back to Contents](#contents)

### <ins>USER TESTING</ins> ###

As a **user**, I want to be able to register as a new user on the site.
-
As a **user**, I want to be able to log on and off the site after I have registered.
As a **user**, I want to be able to read all the recipes that have been added to the site by the **site owners** and other **users**.
As a **user**, I want to be able to add my own recipes to the ste to help grow the recipes available and to be part of the "community".
As a **user**, I want to be able to update any of the recipes that I have added to the site.
As a **user**, I want to be able to delete any of the recipes that I have added to the site.
As a **user**, I want to be able to search the site for recipes based key words.
As a **user**, I want to be able to favourite/like any recipe in the site for easy future reference.
As a **user**, I want the site navigation to be intuitive and easy to use.
As a **user**, I want the information to be displayed in a clear and organised manner to allow for quick decisions to be made.
As a **site owner**, I want the information on the site to be presented in a fun and attractive manner encouraging more **users** to register on the site.
As a **site owner**, I want to be able to promote cookbook sales.
As a **site owner**, I want to be able to contact **users** using their profile information with offers.

[Back to Contents](#contents)
