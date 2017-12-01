README

## Agora - Question Forum

[Visit Live](https://agora-question-forum.herokuapp.com/#/)

## Features

  - Full session management with both secure sign-up and login functionality as well as a guest-login feature
  - Navigation Bar providing:
    - Logged-Out functionality:
      - Display Login/Sign Up buttons
    - Logged-In functionality:
      - Display Username view and Logout button when signed
      - Question Search Bar
  - User homepage providing: 
    - a list of user-asked questions
    - an up to date question feed
    - latest question search results
  - Question detail page providing: 
    - Question title, interlocutor name ,question context, question full CRUD functionality as interlocutor
    - Scrollable answers to the question with CRUD functionality as rhetor
    - Scrollable comments on each of those answers with CRUD functionality as commentor

## Summary

  Agora is a single-page-app question forum app like, similar to Quora. Users create and manage questions, answers to questions, and comments to those answers. Questions are absolutely the focus at Agora. Once logged in, a user can browse questions from their question feed, search questions with the question search in the navigation bar, or look at/update any of the quesitons they have asked in the past. Users can also answer questions by checking out the question details. If they see an answer they would like to comment, this can be done right under that answer.

  Agora is built on a Ruby on Rails backend (ruby 2.4.1p111/Rails 5.1.4) with Postgresql database. Ruby on Rails provides REST resources for the frontend of the application to access and manipulate. See [routes](https://github.com/jpe442/agora/wiki/Routes) for more on the API resources provided by Agora.

  On the frontend Agora utilizes React for DOM manipulation and Redux to ensure organized unidirectional data-flow from frontend to backend and back again. The resulting [state shape](https://github.com/jpe442/agora/wiki/sample-state) is shallow, allowing for easier access to data on the front-end by keeping renderings less-expensive than views provided in a more traditional MVC framework.

  The primary advance of utilizing React and Redux is the ability to constrain rerenderings to (a) only certain parts of the DOM (b) only when relevant aspects of the UI are to be updated. This feature of React allows for the app to provide a smoother experience for the user. One good example of the benefits of this technology in Agora is apparent in both the create/edit answer view and create/edit comment view. For example, when a user navigates to the question detail page of a particular question, the answers to that question are listed to the side. Above the list of answer items, there is a new-answer form that allows new answers to be submitted. Now if the user is also the author of an answer already submitted, that user is able to see both a 'Rescind Answer' and 'Edit Answer' button to delete and update their answer. However, when, for example, the edit button is clicked, the default behavior of the button is first prevented to stop a hard rerender and instead the button triggers a state change causing the new-answer form to instantly change into an edit-answer form which is pre-populated with the answer information of the clicked button. The code for this behavior is as simple as the following ternary variable assignment:

const sessionForm = this.props.toggleEditAnswerMode ? 

    <EditAnswerForm 
      updateAnswer={this.props.updateAnswer}
      currentUser={this.props.currentUser}
      question={this.props.question}
      answerToEdit={this.props.answerToEdit}
      editAnswerMode={this.props.editAnswerMode}
                                                /> : 
    <CreateAnswerForm 
      createAnswer={this.props.createAnswer}
      currentUser={this.props.currentUser}
      question={this.props.question} 
                                    />

then simply render the variable in JSX:

    <div className="answers-detail-main">
          <h3>Answers to This Question</h3>
          {sessionForm}
          ...
    </div>

With this code, any time one of the relevant properties of this html changes, in this case `toggleAnswerEditMode` it will rerender this part of the DOM with the right session form.

## Features to be Added

  - Topic/Tags: users should be able to associate asked questions with topics or tags for easier question following
  - Answered Questions Feed: similar to the Asked Questions feed in the user homepage, users should have instant access to the question detail pages for questions they have answered in the past
  - Followed Question Feed: similar to the standard question feed, this feed follows only those questions the user has expressed a desire to follow further
  - Search bar upgrades: the user can search questions by more than just the title of the question
  - Notifications: users should receive email notifications if they wish that alerts them to updates in their watched feeds

## Additional Resources

  - [Wireframes](https://github.com/jpe442/agora/wiki/Wireframes)
  - [Database Schema](https://github.com/jpe442/agora/wiki/Database-Schema)
  - [Sample State](https://github.com/jpe442/agora/wiki/sample-state)
  - [Routes](https://github.com/jpe442/agora/wiki/Routes) 










