
# Movie Recommendation
When you type a movie name, 
it will display that movie and the recommended
movies which has same word. 




## Authors

- [@h73krishnan](https://github.com/h73krishnan?tab=repositories)


## Tech Stack

**Client:** HTML, CSS, Bootstrap, Javascript



## Deployment

https://www.netlify.com/


## Description

HTML, CSS and Bootstrap is used for input and
grid. Advanced javascript is used for DOM 
manipulation, animation and debouncing in the
search box.

## API Reference

### How to get apikey? 
#### 1. Go to http://www.omdbapi.com/
#### 2. Click on API KEY
![Alt text](./API%20documentation%20screenshots/click%20on%20API.png "Optional title")

#### 3. Enter your details and submit 
#### 4. Receive the key in email 	![Alt text](./API%20documentation%20screenshots/submit%20details%20.png "Optional title")

##### 4.1. Click on the verification link to verify
![Alt text](./API%20documentation%20screenshots/API%20email%20and%20verification.png "Optional title")


### How to get the movies?
#### 1. For data of one movie
#####  - with searched movie name go inside {name} 
https://www.omdbapi.com/?t=${name}&apikey=d31fda52&
#### 2. For data of movies with matching names
#####  - with searched movie name go inside {name} 
https://www.omdbapi.com/?s=${name}&apikey=d31fda52&







## FAQ

#### 1. How the searchbox is waiting for the typing?

A. Debouncing

#### 2. How the API data is collected? 

A. By using async await


