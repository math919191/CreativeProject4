be sure to git ignor node files

# Front End Commands:
mkdir front-end
cd front-end

winpty vue.cmd create cp4-vue-cli
 - I selected babel / router / linter&formatter
 - 2.x
 - y for history mode for router
 - Lint + prettier
 - in dedicated config files

npm install
npm install axios

npm run serve -- this should bring up the project on 

> If you get the error "error:0308010C:digital envelope routines::unsupported" enter
  >> export NODE_OPTIONS=--openssl-legacy-provider

localhost:8080, sometimes this takes a minute



# Back End:

mkdir back-end
cd back-end
npm init
   - everything as default except js file is server.js instead of index.js
npm install express mongoose 



# initilization:

I copied the files over from cp3
I disabled ESlint
