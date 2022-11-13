//  Task 6
// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// Write a “person” class to hold all the details.
// write a class to calculate the uber price.


// Question 1:-
   
// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


class movie{
    constructor(title,studio,rating){
          this.title = title;
          this.studio = studio;
          this.rating = rating;

          if(rating == null){
             return this.rating = "PG";
          }
          else{
            return this.rating = rating; 
          }
    }

    getPG(array){
        var result = array.filter((element)=> element.rating =="PG")
        return result
    }
}

let movie1 = new movie("Beast","Sun_Pictures",6.5);
let movie2 = new movie("vikram","rajkamal_studio",8.5);
let movie3 = new movie("prince","sk_production");

console.log(movie1,movie2,movie3);

let array = [movie1,movie2,movie3];

console.log(movie1.getPG(array));


//  Question 2:-

class circle{
 
    constructor(radius,color){

         this.radius = radius;
         this.color = color;
    }
 

    getRadius(){
        console.log(`Radius of Circle is: ${this.radius}`)
    }
    setRadius(value){
         this.radius = value;
    }
    getColor(){
        console.log(`Color of Cicle is: ${this.color}`)
    }

    getArea(){
        const pi = 3.14;
        console.log(`Area of Circle is: ${pi*(this.radius*this.radius)}`)
    }

    getCircumference(){
        const pi = 3.14;
        console.log(`Circumference of circle is: ${2*pi*this.radius}`)
    }

}

let circle1 = new circle(1.0,"pink");


circle1.getRadius();
circle1.getColor();
circle1.getArea();
circle1.getCircumference();
circle1.setRadius(2.2);
circle1.getRadius();

//  Question 3 :-
//  Write a “person” class to hold all the details.

    class person{
        constructor(name,Id,contact){
            this.name = name;
            this.Id = Id;
            this.contact = contact;
        }

        getdetails(){
            console.log(`person name is ${this.name} and Id is ${this.Id} and contact number ${this.contact}`);
        }
    }

    let person1 = new person("sathish",250,9999955222);
    let person2 = new person("Rahul",265,8505802244);
    person2.getdetails();


    // Question 4 :-
    // write a class to calculate the uber price.


  
    class Uber {
        constructor(distance,rate,waitingperiod){
            this.distance=distance;
            this.rate=rate;
            this.waitingperiod= waitingperiod;
        }
        setDistance(dist){
            this.distance=dist;
        }
        getRideDetails(){
            return(`The distance of the ride is ${this.distance} with rate of ${this.rate} 
            with a waiting period of ${this.waitingperiod}`)
        }
        getPrice(){
              let price =(this.distance * this.rate) + (5*this.waitingperiod)
                   return price;
          }
          }
               //calculate price = (rate*distance) + (5*waitingperiod)

                  let uber1 = new Uber (400, 20, 10);
                   uber1.setDistance(300);

          console.log(uber1.getPrice());
              console.log(uber1.getRideDetails());


              