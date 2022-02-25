<h1 align="center">Pokémon Quiz</h1>

![Responsive site images](/assets/readme-files/responisve-site.jpg)

## About

***

[Pokémon Quiz](https://jackdilger.github.io/Milstone-Project-Two/) is the ultimate test for any one well versed with the popular games and tv series. It is a fun and interactive site that follows a multiple-choice quiz format to test the user’s knowledge of all things Pokémon. A 30 second time limit is placed on each question, forcing the user to restart if the clock runs down. The user gets feedback on their score along the way and a prize draw adds incentive for the user to complete the quiz in full. How much do you know about the world of Pokémon? Test yourself with our quiz to find out …


## User Experience (UX)

***

-   ### User stories

    -   #### First time user goals
        
        1. As a first-time user, I want to understand the purpose of the website immediately upon opening the site.
        2. As a first-time user, I want to understand how to play the quiz.
        3. As a first-time user, I want to be able to easily navigate the site.
        4. As a first-time user, I want to be able to track my score.
        5. As a first-time user, I want feedback on weather an answer I select is correct or not.
        6. As a first-time user. I want my remaining time to answer each question to be clearly displayed.


    -   #### Returning user goals

        1. As a returning user, I want to be able to easily replay the quiz and have my score reset.
        2. As a returning user, I want the quiz questions to be shuffled so not to be displayed in the same order.
        
        

    -   #### Website owner goals

        1. As the website owner, I want to get as many visitors as possible to complete my quiz.



## Layout

***

- I used Balsamiq to structure the layout of my website during the initial design phase.
- I used css flex box grid system in conjunction with CSS media queries to make my site responsive across all devices.

### Home page wireframe

![Home](/assets/readme-files/home-wireframe.png)

### Instructions page wireframe

![Instructions](/assets/readme-files/instruction-wireframe.jpg)

### Prize Draw page wireframe

![Form](/assets/readme-files/form-wireframe.jpg)

### Quiz page wireframe

![Quiz section](/assets/readme-files/quiz-wireframe.png)



## Existing Features and how they align to user stories

***

- __Logo__

  - The head of the page contains the 'Pokémon Quiz' logo, it's colour scheme and font match that of the well-known Pokémon logo which helps in providing a clear purpose to first time visitors.
  - The text content of the logo gives clear information to any first-time visitor that the site offers a quiz and what that quiz is based on.
  - The logo also serves as a clickable link, allowing users a simple way to navigate back to the home page at any time. The logo is consistently placed on each page of the website because of this.



![Home page](/assets/readme-files/logo.quiz.JPG)


- __Menu__

  - The menu contains 3 buttons with text content to clearly state each of their purpose and allow any user to easily navigate to any section of the site with just one click.
  - The 'Start Quiz' button offers clear instruction of its use case and will allow a user to begin the quiz by clicking it.
  - The 'Instructions' button offers clear information of its use case and will allow a user to view the quiz instructions modal by clicking it.
  - The 'Prize Draw' button offers clear information of its use case and will allow a user to view the prize draw modal by clicking it.
  - Each buttons text colour changes when hovered over to clearly indicate they are clickable.



![Home page](/assets/readme-files/home-pokemon-quiz.JPG)



- __Instructions Modal__

  - The instructions modal is a pop-up window that opens when the 'Instructions' button is clicked, it gives clear information to any user of how to play the game by explaining the quiz rules and format.
  - The modal window overlays the homepage when opened and the rest of the site fades to black to give clear emphasis of the instruction’s modal.
  - Using a modal pop-up offers ease of navigation to users as it does not take them away from the home page and the close button 
  hides the modal when clicked.
  - The close buttons text colour changes when hovered over to clearly indicate it is clickable.



![Instrcutions](/assets/readme-files/instructions-pokemonquiz.JPG)



- __Prize Draw Modal__

  - The prize draw modal is a pop-up window that opens when the 'Prize Draw' button is clicked.
  - The heading and accompanied text explain clearly what the prize draw offers and how a user can take part
  - The prize draw offers an incentive for users to complete the quiz in full and helps in meeting the website owners’ goal in doing so. A user must complete the quiz to get the information required to take part.
  - The form to enter the prize draw is accessible through the modal window and has 3 field inputs that have placeholder text as well as labels to clearly tell the user what input is required.
  - An alert window displays if a user tries to submit the form without filling out any required input fields and tells them
  what they must to be able to submit the form
  - The submit button text colour changes when hovered over to clearly indicate it is clickable.
  - The modal content is hidden once the form is submitted and text feedback is displayed with the user’s name to let them know their entry was received into the prize draw.
  - The modal window overlays the homepage when opened and the rest of the site fades to black to give clear emphasis of the prize draw modal.
  - Using a modal pop-up offers ease of navigation to users as it does not take them away from the home page and the close button 
  hides the modal when clicked.
  - The close button text colour changes when hovered over to clearly indicate it is clickable.



![Form](/assets/readme-files/form-pokemonquiz.JPG)


![Form](/assets/readme-files/form-alert.JPG)


![Form](/assets/readme-files/form-feedback.JPG)



- __Main quiz interface__

  - The main quiz interface is initiated when the user clicks the 'Start Quiz' button on the home page.
  - The timer placed in the top left of the quiz container counts down from 30 seconds to zero. It clearly displays to the user the amount of time left to answer the question in seconds.
  - The score counter in the top right of the quiz container starts at zero and the score is incremented by 1 each time a user selects a correct answer. This allows any user to clearly track their score throughout the quiz.
  - Each question is displayed clearly below the timer and score
  - The multiple-choice options for each question are displayed clearly in 4 buttons that are consistently styled with the buttons on the home page menu for continuity across the sites pages.
  - The answer buttons text colour changes when hovered over to clearly indicate they are clickable.
  - Once an answer button is clicked the user is given instant feedback on whether or not the answer they selected was correct or not. If the answer is correct, the button they selected will turn green and their score counter will increase by 1, if incorrect the button colour will change to red.
  - Once an answer is selected all buttons are disabled and are no longer clickable, this prevents users from being able to change their answer.
  - Once an answer is selected the 'Next' button displays, once clicked the user will be taken to the next question.
  - The 'Next' button has an animation that mimics a Pokémon ball, that anyone familiar with Pokémon will recognise. This is also emphasises that the button needs to be clicked.
  - The 'Next' button border changes to red when hovered over to clearly indicate it is clickable.



![Main quiz](/assets/readme-files/interface-2.JPG)


![Main quiz](/assets/readme-files/interface-pokemonquiz.JPG)


![Main quiz](/assets/readme-files/interface-3.JPG)



- __Time Out__

  - If the user lets the countdown timer run down to zero then an alert will display.
  - The alert will tell the user that they must restart the quiz or go back to the home page.
  - Once the alert window is closed the quiz interface will be hidden.
  - An image of a grinning Pokémon is displayed to emphasise the user has failed the quiz by running out of time.
  - The play again button displays and when clicked it will restart the quiz from the beginning if clicked.
  - The play again button ensures the score is reset and the questions are shuffled so not to be displayed in the same order for any returning users wishing to play again.



![Time Out](/assets/readme-files/play-again-2.JPG)


![Time Out](/assets/readme-files/timeout-alert.JPG)


- __End Quiz__

  - Once the user has selected an answer for the last question the quiz will finish and the quiz interface will be hidden.
  - The timer is cleared and hidden from display, and the users score is moved centrally to add emphasis to it.
  - A heading displays thanking the player for playing the quiz to clearly indicate the quiz is finished.
  - The image of a happy Pokémon is shown clearly to emphasise the user has successfully completed the quiz.
  - The play again button displays and when clicked it will restart the quiz from the beginning if clicked.
  - The play again button ensures the score is reset and the questions are shuffled so not to be displayed in the same order for any returning users wishing to play again.



![Play Again](/assets/readme-files/play-again-pokemon-quiz.JPG)




### Features Left to Implement

***

- High scores
- Socials 


## Technologies used

***

- HTML5- Markup language.
- CSS3- Style sheet language.
- Gitpod- Integrated development environment (IDE)  Used to write all my code.
- Git- Used for version control.
- Github- Used to host my repository.


### Design 

***

- [Balsamiq](https://balsamiq.com/)- Used to build wireframes.
- [Google Fonts](https://fonts.google.com/)- Sourced the website fonts.
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)- Used to troubleshoot problems with code.



### Testing 

***

-
-


## Deployment

***

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JackDilger/Milstone-Project-One)
2. At the top of the Repositor, locate the "Settings" Button on the menu.
3. Select 'Pages' from the menu on the left hand side.
4. In the pages section under 'Source', click 'Branch' and select 'Main'.
5. Click 'Save'.
6. A URL displays advising that you site has been published.

## Acknowledgements 

***

### Credits 

- [Google Fonts](https://fonts.google.com/)- Sourced the website fonts here and imported through a link in my style.css sheet. Requests to the Google Fonts API are made to resource-specific domains, such as fonts.googleapis.com or fonts.gstatic.com.
- [W3schools](https://www.w3schools.com/)- I used their tutorials on HTML and CSS for further understanding and troubleshooting throughout my project.
- [Stack Overflow](https://stackoverflow.com/)- I used Stack Overflow to get a more in depth understanding on HTML and CSS  throughout my project.
- [Code Institute Example Sample README](https://github.com/Code-Institute-Solutions/SampleREADME) & [README Template](https://github.com/Code-Institute-Solutions/readme-template)- I used these as rough guides when planning and writing my README file.


### Code

- I used [Bootstraps](https://getbootstrap.com/docs/4.3/components/carousel/#with-indicators)
 library throughout my website, mainly in making the site responsive using their grid system. Also using their components and built in CSS, customising this to meet my website requirements.


***

### Images

- [Carousel DJ image](https://www.pexels.com/photo/man-using-dj-controller-1649693/)











