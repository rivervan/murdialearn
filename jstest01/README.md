# Project

##Considerations about this project

- This project was created from scratch due to webpack current version (>5), hence update several npm packages respect to template of course project.
- This project was named **jstest01**
- For *dev server* (mode=development) the port is 8081, and it was necessary redirect request call to proxy port 8080.
- For *mode=production* the port is 8080.
- Either for development or production mode, the host is `localhost.
- There are four scripts for run: 
    * *build-dev*. Build & Execute app in mode development  
    * *build-pro*. Build app for production.
    * *start*. Execute app for production. 
    * *test*. Execute test cases.

##Instructions 

* Install application:  `npm install`

* Execute cases test.
    * Step 1. Execute (one terminal)   `npm run start`
    * Step 2. Execute (other terminal) `npm run test`
    
* Build & Execute development mode. 
    * `npm run build-dev`. Internet navigator is open automatically.
    
* Build app in production mode. 
    * `npm run build-pro`
    
* Execute app in production mode.
    * `npm run start`
    

##Examples

Given the app has only one entry field, is necessary capture related to name of persons, for instance:

* Entry 1. `Ivan`
* Entry 2. `Picard` 

        

##Final Notes.

1. For simplicity, the API key is set with my own key in a file `.env.
    



