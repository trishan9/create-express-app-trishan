# Create Express App

The easiest way to get started with Express.js is by using create-express-app-trishan. This CLI tool enables you to quickly start building a new Express.js server, with everything set up for you. You can create a new app using the default Express.js template. To get started, use the following command:

You can create a new project interactively by running:

```bash
npx create-express-app-trishan -d project-name
# or
yarn create-express-app-trishan -d project-name
# or
pnpm create-express-app-trishan -d project-name
# or
bunx create-express-app-trishan -d project-name
```

## Why to Use Create Express App?:

`create-express-app-trishan` allows you to create a new Express.js server within seconds. It is maintained, and includes a number of benefits:

- path aliases ("src/ -> @/")
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [prisma](https://www.npmjs.com/package/prisma)
  - Included Prisma ORM Setup with PostgreSQL as default database, you can change it according to your need.
- Authentication Setup Included with [jwt](https://jwt.io/),[bcrypt](https://www.npmjs.com/package/bcrypt) for hashing passwords, auth middleware as well.
- File Upload Middleware Setup with [multer](https://www.npmjs.com/package/multer) and [cloudinary](https://cloudinary.com/documentation/node_integration)

## Upcoming Features:

- option to select between JavaScript & TypeScript
- option to select between Prisma, TypeORM, DrizzleORM, Mongoose
- Loggers
- Efficient Express Validators
- Efficient Error Validations
