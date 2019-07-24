# Jogogo's App & API Front-end Test

## Software Required

- `yarn`
- IDE of choice

## Setup

To get started, clone this repository and run `yarn && yarn start`. Once that's done, a browser should be open with a blank app.

## Goal

The goal of this test is to be implement a simple login form. To do this, you need to add the correct markup, LESS styles, and JS to make it functional.

- The visuals must match the ones provided in the `reference/` folder.
- The form must validate the fields, and handle network delays.
- The `submitForm` function must be called and `await`ed when the login button is clicked.
- A spinning loading indicator must be used while the `submitForm` function is waiting.
- Upon successful login, the user must be redirected elsewhere (somewhere of your choosing!).
- Upon errors in the username or password, the corresponding error must be shown.

## Useful information

- The colors and fonts are provided at the top of the App.less file.
- The free version of FontAwesome is already included.
- Breaking down the form into small components is encouraged.
- The `submitForm` function always returns this object:
	```js
	const data = {
		error: false,
		errorFields: {
			username: false,
			password: false
		}
	}
	```
	Properties in `errorFields` return `true` if they were **incorrect**.
