## Running the code ##

Open 2 terminal windows.
  
- In a 1st terminal, run the following code to install `bundler`:
  
```
gem install bundler
```
  
- Then In the project backend directory, run the following commands to install dependencies and launch the backend:
  
```
bundle install
  
bundle exec ruby backend.rb
```


- Run following commands in 2nd terminal window (node, npm and Angular cli is required):
  
```
npm install
  
ng serve
```

- Open localhost:4200 in your browser to start the frontend app

  
NOTES:
1) I have used Angular cli to generate the project
2) Used environment file for api url
3) Used separate module to bootstrap dependencies
4) Also Angular cli is used to load Bootstrap css (added Bootstrap module)
5) Service is used for all api interactions
6) Have used reactive form to create passenger and form validations
7) We can use intercepters to add headers for request which are not returning json
8) We should have good status codes for errors (eg. when already 5 passengers exists)
9) We can also use timeout for every request and handle errors
