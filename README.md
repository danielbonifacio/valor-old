<center><img src="https://svgur.com/i/9GB.svg" width="320px"/></center>
Valor is a node.js boilerplate that uses express to serve web applications.

How to use:

``` shell
# clone project
git clone https://github.com/danielbonifacio/valor ./valor

# navigate to porject's folder
cd valor

# install dependencies
npm i

# truncate app (remove .git and docs folder)
npm run truncate

# development server with live reload
npm start

# watch sass (needs sass)
npm run sass:watch
```

Do not use this in production. This was made just with learning purposes.

# Configuration

You can configure server port and views engine in the main configuration javascript file.

## Views
If you want to use Pug as your template engine, just set `Config.views.engine` to `'pug'` and that's all, folks.

- `views.engine`: `'pug'`, `'ejs'` *string*;
- `views.path`: Path to views directory *string*;

## Server port

Primarily, server port tries to use `process.env.PORT` variable, followed by `3000`.