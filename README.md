This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Features](#features)
- [Build For Testing](#build-for-testing)
- [External Server](#external-server)
- [Deployment](#deployment)


## Getting Started

Clone the OnDash repo.

Once cloned install the relevant node modules

`npm install / yarn install`

Once the packages are installed run

`npm start / yarn start`

## Architecture

`Directory Structure`

```
├── src/
│   ├── assets/
│   │   ├──
│   ├── components/
│   │   ├── component-name /
|   |   |   ├── ComponentName.jsx
|   |   |   ├── styles.scss
│   ├── config-styles/
│   │   ├── _layout.scss
│   │   ├── _mixins.scss
│   │   ├── _variables.scss
│   │   ├── config.scss
│   ├── features/
│   │   ├── feature-name/
|   |   |   ├── actions/
|   |   |   |   ├── FeatureNameActions.js
|   |   |   ├── stores/
|   |   |   |   ├── FeatureNameStore.js
|   |   |   ├── views/
|   |   |   |   ├── ViewName.jsx
|   |   |   |   ├── styles.scss
│   ├── utils/
│   │   ├──

```

## Features

Features are based upon Flux technology. Within each feature folder there will be three subfolders, namely views, actions and stores. The view dispatches events to the action file, which in turn will call methods within the store file. Features will consist of global components. 

### Login Feature

Central to controlling user access, the login function presents the user with an email and password form and validates the POSTed data through a JWT token
User account registration will be handled by system engineers at present.

`Directory Structure`

```
├── login/
│   ├── actions/
│   │   ├── loginActions.js
│   ├── stores/
│   │   ├── LoginStore.js
│   ├── views/
│   │   ├── Login.jsx
│   │   ├── styles.scss

```

File  		               | Description
-------------------------- | --------------------------------------------------------------------------------------------
`actions/loginActions.js`  | Dispatches both user and system generated events to the LoginStore.
`stores/LoginStore.js`     | Handled the events dispatched by loginActions.js and invokes the associated method.
`views/Login.jsx`          | The view the user will see.
`styles.scss`              | login specific styling that can be used to overwrite the styling coming from the components.

#### Components

Login uses the following generic components:
1) Input

### Methods

The login feature uses the following methods. These tie in to the stores and actions.

#### ComponentWillMount

Within the lifecycle method ComponentWillMount, there is a check to see if the user has landed on this page from the "reset password" email. This check is done by checking the URL for the parameters that are generate from the email. If this is the case, then the state is set to newPassword, and the user will see the change password form. If this isn't the case, then the login state is set to initial, and the user will view the standard login form.

#### ComponentDidMount
All event listeners are located in this life cycle. These wait for the store to dispatch an event, and then do what is required accordingly.

Listener  		     | Description
---------------------| --------------------------------------------------------------------------------------------
`login`              | After the initial form has been submitted, this listener event will fire. If the token is set to false, this means there was a problem with the login
                     | details, and therefore the state is set to failed. If the token is valid, then the user is redirected to the Support page.
`emailSent`          | This listener will fire when the forgot password email has been emailed to the user successfully. It will update the state to emailSent, which will show the user
                     | that the email has been sent.
`emailFailed`        | This listener will fire when the email has been unable to be sent.
`passwordUpdated`    | This listener will fire when the user has updated their password successfully. It will set state to passwordUpdated.
`passwordUpdateFail` | This listener will fire on the change password submission. If there is an error, the state will get updated to tell the user as much.
	
#### ComponentWillUnmount

All listeners relating to the login will get removed. This is the best practice to ensure there are no rogue listeners left when moving to the next feature.

#### Handlers/Methods

Name  		              | Description
--------------------------| --------------------------------------------------------------------------------------------
`handleInputs`            | This method will handle all changes made to the inputs via onChange. It will take 2 arguments, namely the value and ID of the input. Depending on
                          | the input ID, the relevant state variable will get updated.
`submitInitial`           | This method will handle the submission of the initial login form. It will set the load state to true, and then action the store to POST to the auth endpoint
`forgotPasswordClick`	  | If the user clicks on the forgot password link, this method will set the state to forgot, and then the user will be given instructions on
                          | how to reset their password.
`submitForgottenPassword` | Handles the submission of the forgot password form. Sets the load state to true, and makes a call to the endpoint
`backToInitial`           | This method will reset the login feature back to its default state.
`backToEmail`	          | If there is an issue submitting your email address for the email to be sent, then this handler will return the user to the forgot password form.
`submitNewPassword`       | Will make an API call to the endpoint http://ondash-staging.hyvesdp.com/api/auth/user/password/reset using the action newPassword.
`goToLanding`             | If everything is in order, and the user is able to login, this method will direct to the support feature.


### Build For Testing
` npm run build / yarn run build `

This will run auto-prefixer on the CSS, and minify the javascript.
The built files will be found in the build directory.

### External Server

This will create a local server with your IP address, therefore you will be able to do testing on any devices that are connected to the same network.
` npm run external / yarn run external `

### Deployment
This will copy the build files into the public directory.
` npm run deploy / yarn run deploy `