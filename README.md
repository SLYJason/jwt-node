## JWT Node Demo

Inspired by: Brad Traversy, [video](https://www.youtube.com/watch?v=7nafaH9SddU&t=1235s).


### Get Started

1. Run `npm start`.
2. Open postman, navigate to `localhost: 4200'.

### API spec
Endpoint | Description
:---:|:---:|
localhost:4200/api | Check serve running normally
localhost:4200/api/login | Get Auth token
localhost:4200/api/posts | Get secured info using token

### Dependency
* [express](https://github.com/expressjs/express)
* [nodemon](https://github.com/remy/nodemon/)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)