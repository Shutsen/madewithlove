# Madewithlove technical assignment

## Quick intro

This project uses the following Google APIs (Places API && Maps JavaScript API) - make sure to activate these and get an API KEY

to get cities and their corresponding coordinates across the world.

These latitude & longitude coordinates are used to request weather information to the Dark Sky API.

On first load the app will use your local position or will fall back to Brussels if the geolocator doesn't work / takes too long.

Afterwards you can lookup any city you want and request weather info. You can also use the time machine and request weather info for the given city

30 days back in time or 9 days in the future.

## Clone the repo to a local directory

Run `npm install` to install all dependencies

Add a .env file in the root directory with the following key-value pairs:

PORT=3030

DARK_SKY_API_KEY=<your_dark_sky_api_key>

REACT_APP_GOOGLE_PLACES_API_KEY=<your_google_places_api_key>

## Next, the following scripts are available

In the project directory, you can run:

### `npm run server`
to boot up the server

### `npm start`
to run the project

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Assignment info: Technical assignment front-end engineer
Make an application that allows the user to view the observed (in the past 30 days) or forecasted (in the future) daily weather conditions for a given location using the [Dark Sky API](https://darksky.net/dev/docs).

You are free to use the tools and frameworks you prefer, however we strongly suggest you keep the hard skills of the job offer in mind.

**Minimal requirements**

The three pillars of front-end development are HTML, CSS and JavaScript. We would like to see you know how to use them for the right job.
* Use ReactJS
* Pay attention to semantics: any HTML might work, but choosing the right tags show you care
* Show us you know how to create a modern user interface using CSS or your favourite CSS preprocessor
* Communicate to the Dark Sky API through a PHP or JavaScript back-end

**Timing**

You have 3 weeks to accomplish the assignment.  You decide yourself how much time and effort you invest in it, but one of our colleagues tends to say: "Make sure it is good" ;-). Please ping us when you are done, on this endpoint ([Slack incoming webhooks](https://api.slack.com/incoming-webhooks)): `https://hooks.slack.com/services/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`. Please mention your name and a link to what we need to review.
