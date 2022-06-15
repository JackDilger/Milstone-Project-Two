<h1 align="center">Pokémon Quiz</h1>

![Responsive site images](/assets/readme-files/responisve-site.jpg)

## About

***

[Pokémon Quiz](https://jackdilger.github.io/Milstone-Project-Two/) is the ultimate test for any one well versed with the popular games and tv series. It is a fun and interactive site that follows a multiple-choice quiz format to test the user’s knowledge of all things Pokémon. A 30 second time limit is placed on each question, forcing the user to restart if the clock runs down. The user gets feedback on their score along the way and a prize draw adds incentive for the user to complete the quiz in full. How much do you know about the world of Pokémon? Test yourself with our quiz to find out …

## Strategy and planning

***

be the main design, I wanted to choose an area I was personally enthusiastic about as well as something with a wider popularity and target audience so I could gather as many potential users as possible. After researching the most popular online Pokémon quiz's online it was clear the multiple choice quiz format was the most Widley used which is the reason this format was used. 

The rationale behind the Pokémon theme itself aligns perfectly with the overall goal of garnering as many site users as possible. The entire Pokémon media franchise is the highest-grossing entertainment media franchise of all time, having grossed an estimated $90 billion in lifetime revenue. Pokémon Go is the most-downloaded mobile game, with over 1 billion downloads. In addition, the Pokémon video game series has sold a total of over 1.3 billion units in retail sales and official downloads.

The popularity in numbers alone would help massively in targeting users to play our online quiz. I wanted also a theme that would be appealing to a wider range of people and again Pokémon fits this perfectly. The first video game was released in 1996 in Japan for the Game Boy and you may be forgiven for thinking its main demographic is 'just for kids', but this is not the case. A 2020 study published in the journal Heliyon pegged the average age of Pokémon Go players at 25. Following the release of Pokémon Sun and Moon in 2016, Nintendo revealed that the duo of 3DS games attracted more players in their 20s and 30s than any entry had previously. The trend is clear: Pokémon players are growing up with these games.


## User Experience (UX)



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




### Future development

***

- Add a page to display high scores and usernames of these players. This would add a nice competitive element to the quiz for 
first time and returning users.
- Add more rounds to the quiz with a different format, i.e. picture round. This would make the quiz more interactive for first time and returning users.
- Post the form data so this information can actually be stored, and the prize draw can be used as intended to increase site traffic.

## Technologies used

***

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)- Markup language.
- [CSS3](https://en.wikipedia.org/wiki/CSS)- Style sheet language.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)- Scripting language.

### Design 

***

- [Balsamiq](https://balsamiq.com/)- Used to build wireframes.
- [Google Fonts](https://fonts.google.com/)- Sourced the website fonts.
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)- Used to troubleshoot problems with code.
- [BeFunky](https://www.befunky.com/create/resize-image/)- To resize images.
- [Convertio](https://convertio.co/jpg-avif/)- To change image file type.
- [Favicon.io](https://favicon.io/emoji-favicons/question-mark/)- Sourced the website Favicon.
- [Unsplash](https://unsplash.com/photos/1fZC2rYbpsU)- Sourced background image.
- [PixaBay](https://pixabay.com/)- Sourced images for end quiz and time out screens.
- [DesignPieces](https://www.designpieces.com/palette/pokemon-logo-color-palette-hex-and-rgb/#:~:text=The%20Pok%C3%A9mon%20Logo%20is%20made,logo%20features%20a%20flat%20shadow.)- Colour palette used.
-[WeLoveQuizes](https://www.welovequizzes.com/pokemon-quiz-questions-and-answers/)- Quiz questions.
-[TheQuiz](https://www.thequiz.com/50-questions-every-pokemon-trainer-should-be-able-to-answer/)- Quiz questions.
-[Joe](https://www.joe.co.uk/entertainment/hardest-pokemon-quiz-youll-ever-take-60547)- Quiz questions.
-[UltimateQuizQuestions](https://www.ultimatequizquestions.com/pokemon-quiz/)- Quiz questions.


### Frameworks, Libraries & Programs Used
- [Gitpod](https://gitpod.io/workspaces)- Integrated development environment (IDE)  Used to write all my code.
- [Git](https://git-scm.com/)- Used for version control.
- [Github](https://github.com/)- Used to host my repository.
- [Beautifier](https://beautifier.io/)- Used to organise code consistently.

### Testing 

***

### Validator Testing 

- [Js Hint](https://jshint.com/)- All individual JavaScript files were copied in to JS hints validator and no warnings were found.
- [WC3 Mark Up Validation](https://validator.w3.org/)- The published site link was validated and returned no error or warning in my HTML.
- [W3C CSS Validation](https://validator.w3.org/)- The published site link was validated and returned no error or warning in my CSS.

## Development Version- Manual Testing


Test            | Outcome                          | Result
--------------- | -------------------------------- | ------------
Pokemon Quiz logo | When the logo is selected with a click does it link back to the home page or refresh the home page if the user is already their? | Pass 
Button Links | Does each link direct the user to the intended destination? Does the text change color when hovering to indicate the button is clickable? | Pass
Start Quiz button | Does this launch the main quiz to allow the user to start the game? | Pass
Instructions button | Does this open the instructions modal to tell players how to play? | Pass
Instructions modal close button | Does this close the instructions modal and return to the home page? | Pass
Prize Draw button | Does this open the prize draw modal and display the information and submition form? | Pass
Prize Draw form submit button | Does this submit the form once all fields are inputed? | Pass
Prize Draw form close button | Does this close the prize draw modal and return to the home page? | Pass
Answer options buttons- Feeback | Are users given instant feedback on if an answer is correct? If the answer is correct the button turns green? If incorrect the button colour will change to red? | Pass
Answer options buttons- Disable buttons | Are all other answer buttons disabled once the user selects their first answer? | Pass
Next button | Does the next button display once a user selects their answer to a question? Does this direct the user to the next question when clicked? | Pass
Next button- Animation | Does the next button shake animation work once displayed? Does the outer border change to red when hovered over to indicate the button is clickable? | Pass
Score Counter | Does the score start at zero and incremente by 1 each time a user selects a correct answer? | Pass
Countdown Timer | Does the timer countdown down from 30 seconds to zero and reset for each new question? | Pass
Time out alert | Does the time out alert display if a user lets the countodwn timer reach zero?| Pass
Play again button | Does this display if a time out occurs or the quiz is finished? Does this restart the quiz from the begining, reshuffle the questions and reset the score counter when clicked?| Pass
End quiz section| Does the end quiz section display, thanking users for playing and displaying their final score, once all questions are answered? | Pass
Prize Draw form input alert | Does the alert window display asking the user to fill out all input fields if they trto submit without doing so? | Pass
Prize Draw form input alert | Does the alert window display asking the user to fill out all input fields if they trto submit without doing so? | Pass
Prize Draw form completed | Does the text feedback display with the user’s name to let them know their entry was received into the prize draw once the form is submitted? | Pass
404 error page | Is a user taken to the 404 error page and provided with a working link back to the main site if they are directed to a non existent page? | Pass


## Deployed Version- Manual Testing

Test            | Outcome                          | Result
--------------- | -------------------------------- | ------------
Full checks against development version | Were all development testing criteria still passed once the site was deployed, with no errors showing?| Pass
Visual Checks | Are all images of usableresolution, all text unobscured and undistracted foregrounds? | Pass
Code checked | No erros showing in the code? | Pass
Console errors | No console errors shwoing? | Pass

### Usability Testing

- I used chrome dev tools to make sure my site was fully responsive across different screen sizes.
- Logo takes the user back to the home page.
- All buttons open are clickable and load the correct output.
- The form submits and takes the user to the thankyou page once submitted.
- Hovering over the links indicates to the user clearly to click and links are not default blue.
- All functions tested in browser and console checked for no errors.
- A lighthouse report of the website showed no accessibility errors on the site.

![Lighthouse](/assets/readme-files/lighthouse.png)

### Browser Testing

- I tested the site across multiple browsers which all worked.
  - Chrome
  - Safari
  - Edge
  - Firefox
  - Opera

### Device Testing

- I manually tested the site across different device operating systems which all worked.
  - The latest version of iOS and iPadOS is 15.3. 1 
  - The latest version of Android OS 12
  - Windows PC
  - MacBook

- I used chrome dev tools to manually test the sites responsiveness across a range of devices which all worked. Devices include:
  - iphone 5-12
  - iphone SE
  - iphone XR
  - iphone 12 PRO
  - Pixel 5
  - Galaxy S8+
  - Galaxy S20 Ultra
  - Galaxy A51/71
  - Galaxy Fold
  - ipad Air
  - ipad Mini
  - Surface Pro 7
  - Surface Pro Duo
  - Windows PC
  - MacBook
  - Nest Hub
  - Nest Hub Max

- The site was ran through [Am I Responsive?](https://ui.dev/amiresponsive) to visually show the the fully responsive layout which again can be seem below:
 

![Responsive site images](/assets/readme-files/responisve-site.jpg)



### Fixed bugs during development

- [Seo Warning- link to commit](59af4929aedb1d8401d39e8236e5553c481bc7eb)
  - A lighthouse report pointed out that I had no meta tags that would help my website appear in web searches. These were added to both html files in the head of the page and now SEO shows 100 in my light house report

- [HTML Validator Warning- link to commit](7f369e28ff904f01cf3ec11dcd2a0d3686b3505c)
  - W3C validator pointed out that I had duplicated the same element ID 3 times, the ID for each was changed and the updated in the html file and css file. After these changes the validator did not any syntax error.

- [JS Hint Validator Warning- link to commit](cceb054820f49f5261d01599407f6495553da7a8)
  - Js hint warning advised 'A leading decimal point can be confused as a dot' referring to this arrow function 'shuffledQuestions = questions.sort(() => Math.random() - .5)'. This was udpated to 'shuffledQuestions = questions.sort(() => Math.random() - 0.5);' which provided the same result but passed the function through the validator after.
  - Several missing semicolons were also added.
  - An unused declared variable was removed.

- [JS Hint Validator Warning- link to commit](9ae26b718e679299a627e87e2820f27b91d1ebfc)
  - Js hint warning advised '['answer'] is better written in dot notation.' when referring to my validate form function. I had to rename the answer as this name had already been declared and was causing confusion when trying to target the correct element. Tests were done after this to ensure the form still worked as intended and it did. The warning was also removed from JS Hint.
  - Several missing semicolons were also added. Tests were done after this to ensure every function still worked as intended and the warning was also removed from JS hint.




## Deployment

***

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JackDilger/Milstone-Project-Two)
2. At the top of the Repositor, locate the "Settings" Button on the menu.
3. Select 'Pages' from the menu on the left hand side.
4. In the pages section under 'Source', click 'Branch' and select 'Main'.
5. Click 'Save'.
6. A URL displays advising that you site has been published.

## Acknowledgements 

***

### Credits 

- [Google Fonts](https://fonts.google.com/)- Sourced the website fonts here and imported through a link in my style.css sheet. Requests to the Google Fonts API are made to resource-specific domains, such as fonts.googleapis.com or fonts.gstatic.com.
- [Font Awesome](https://fontawesome.com/v5/search)- used to make website visually appealing.
- [W3schools](https://www.w3schools.com/)- I used their tutorials on HTML and CSS for further understanding and troubleshooting throughout my project.
- [Stack Overflow](https://stackoverflow.com/)- I used Stack Overflow to get a more in depth understanding on HTML and CSS  throughout my project.
- [Code Institute Example Sample README](https://github.com/Code-Institute-Solutions/SampleREADME) & [README Template](https://github.com/Code-Institute-Solutions/readme-template)- I used these as rough guides when planning and writing my README file.

### Code

- [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified)- Tutorial followed for base quiz functions. Code has been amended and additional features added for my websites purpose.
- [Love Maths](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CPJS_06_20+2020_T1/courseware/8f9b28d4b7664bb59ddf18b8e090671f/b6d5c008ef4a460ba0836a224aa3b3fb/)- Code institute walk through project, used increment score function.
- [Florin Pop](https://www.youtube.com/watch?v=XH5OW46yO8I&t=30s&ab_channel=FlorinPop)- Tutorial followed for modal pop-up. Code has been amended and additional features added for my websites purpose.
- [JsFiddle](https://jsfiddle.net/JamesDordoy/1mgw7g99/3/)- Used to style 'Next' Button.
- [Pawan Kumar](https://stackoverflow.com/a/44315106/18032684)- Timer function, code has been amended and additional features added for my websites purpose.
- [W3Schools](https://www.w3schools.com/js/js_validation.asp)- Validate form function, code has been amended and additional features added for my websites purpose.
- [CSS Tricks](https://css-tricks.com/adding-stroke-to-web-text/)- Text shadow CSS for next button.



***

### Images

- [Background Image](https://unsplash.com/photos/1fZC2rYbpsU)
- [Timeout Screen](https://pixabay.com/illustrations/gengar-pokemon-character-smile-5432819/)
- [End Quiz](https://pixabay.com/illustrations/pikachu-pokemon-character-cartoon-5527377/)
