# Express-Handlebars Boilerplate

This boilerplate may be used as a starting point for building a full-stack app with Handlebars, Express, and Sequelize/MySQL. This boilerplate if configured for easy deployment on Heroku with JAWSDB add-on.

## Setup

1. Run `npm i`.
2. You will need an existing MySQL database.
3. Create `.env` file with MySQL credentials for local development and a SECRET. Refer to [.env.EXAMPLE](./.env.EXAMPLE)
4. Run `npm start` to start the app.

## Development

This boilerplate includes [nodemon](https://nodemon.io/). Run `npm run watch` to start the server in watch mode during development.

## Sessions

[express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) are used for session management. Configure cookies and sessions in [config/session.js](./config/session.js)

## Authentication

Passwords are hashed using [bcrypt](https://www.npmjs.com/package/bcrypt). Middleware for protected routes redirects to `/login`. This can be modified by updating [util/withAuth.js](./util/withAuth.js).

## Templates

[Handlebars.js](https://handlebarsjs.com/) and [express-handlebars](https://www.npmjs.com/package/express-handlebars) are used for rendering templates.

You can add your own custom helper functions by exporting them from [util/helpers.js](./util/helpers.js).

## Code Style

[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are included for enforcing consistent code quality and format. The default configuration includes the ESLint recommended plugin, the Prettier plugin, plus a couple of additional rules. Modify [.eslintrc.js](./.eslintrc.json) to customize the rules.
