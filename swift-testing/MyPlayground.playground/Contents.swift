//: Playground - noun: a place where people can play

import UIKit

class Car {
    var model: String?
}

var vehicle: Car?

if let v = vehicle {
    if let m = v.model {
        print(m)
    }
}

vehicle = Car()
vehicle?.model = "OK"

if let v = vehicle, let m = v.model {
    print(m)
}

var cars: [Car]?
cars = [Car]() //initializes it
print(cars)

if let carArr = cars, carArr.count > 0 {
    // only execute if not nil and if more then 0 elements
    print(carArr)
} else {
    cars?.append(Car())
    print(cars?.count)
}

class Person {
    private var _age: Int!
    
    var age: Int {
        if _age == nil {
            _age = 15
        }
        
        return _age
    }
    
    func setAge(newAge: Int) {
        self._age = newAge
    }
}

var jack = Person()
print(jack.age)

class Dog {
    var species: String
    
    init(someSpecies: String) { // This is the constructor
        self.species = someSpecies
    }
}

var lab = Dog(someSpecies: "Black Lab")
print(lab.species)

class Vehicle {
    var tires = 4
    var make: String?
    var model: String?
    var currentSpeed: Double = 0
    
    func drive() {
        //accelerate the vehicle
    }
    
    init() {
        print("I am the parent")
    }
    
    func brake() {
        //brake the vehicle
    }
    
    func drive(speedIncrease: Double) {
        currentSpeed += speedIncrease * 2
    }
}

let bmw = Vehicle()
bmw.model = "328i"

let ford = Vehicle()
ford.model = "f150"

func passByReference(vehicle: Vehicle) {
    vehicle.model = "Cheese"
}

print(ford.model)
passByReference(vehicle: ford) //Pass by reference
print(ford.model)

var someonesAge = 20

func passByValue(age: Int) {
    let newAge = age
}

passByValue(age: someonesAge)

//Classes are pass by reference, floats, integers etc are pass by value, you can not modify it

class SportsCar: Vehicle { //inherits from vehicle
    
    override init() { //override says I am going to replace the init in parent, but super basically just takes the init from the parent
        super.init() //super and override is boilerplate stuff for inheriting
        print("I am the child")
        make = "BMW"
        model = "3 series"
    }
    
    override func drive(speedIncrease: Double) { //overrode the parent drive function
        currentSpeed += speedIncrease * 3
    }
}

//Polymorphism
class Shape {
    var area: Double?
    
    func calculateArea(valA: Double, valB: Double) {
        
    }
}

class Triangle: Shape {
    
    override func calculateArea(valA: Double, valB: Double) {
        area = (valA * valB) / 2
    }
}

class Rectangle: Shape {
    
    override func calculateArea(valA: Double, valB: Double) {
        area = (valA + valB) * 2
    }
}

let dictionary = ["EARTH": 16]
dictionary.append("FAG")
print(dictionary)