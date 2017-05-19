## Object-Oriented JavaScript

Javascript works much different from Java, C++, Python, Ruby


**Blueprints vs finger-pointing**

In Java for example to create an object such a car, you would have to define the blueprint of this specific object, which will be laid in out the class "car."

In the Java case the object shares certain aspects with its blueprint. By calling the method honk on your object, i.e. the car. e.g.

```Java

Car myCar = new Car();

myCar.honk(); // the object is myCar, honk is the method

```

## A classless society ( Karl Marx would like JavaScript )

JavaScript does not have classes. It would be quite tedious to create every *car* object from scratch, "manually" giving it the attributes(properties) and methods it needs every time we build it.

e.g. Create 30 *car* objects based on *Car* class in Java, this object-class relationship will provide 30 car objects that are able to drive and honk their horns without the dev having to write 30 *drive* and *honk* methods.

In JavaScript this is achieved through **prototypes**, and instead of looking at the class "blueprint" to find the code you need to create the object, JS will "go look at that other object over there, where that object is *my* prototype and use that code it has."

**Building objects via an object-object relationship is called Prototype-based programming**.

Traditional OO languages such as Java and C++, C# use class based object creation/programming.

These are two ways of implementing object-oriented programming paradigm.

## Now Let's create some Objects

```javascript

// this will give an object called myCar that will be able to honk and drive
var myCar = {};

myCar.honk = function() {
	console.log('beep, beep');
};

myCar.drive = function() {
	console.log('vroom, vroom!');
};

myCar.honk(); //outputs "beep, beep"
myCar.drive(); // outputs "vroom, vroom!"

```

This will be a very verbose way off adding method to an object.

In this case we created the object from scratch, or **ex nihilo**

Let's say you wanted to make pencils, instead of making 300 pencils by hand you can create a pencil making machine. This is what is implicitly done in a class-based language such as Java -- defining a class Car, we get the car-maker for free:

```Java

Car myCar = new Car();

```

Using the **new** keyword builds the car out of the blue print ( i.e. the class ). THe new keyword does all the magic!

In JS the responsibility of building an object creator is up to the developer. This gives the freedom in regarding the way objects are actually built.

**In the most simple case: we can write a function which creates plain objects that are exactly like the "ex nihilo" object, and don't really share any behavior -- they are just from the same factory that built the original but they roll out with the same behavior of the original in mass production**.

This way of creating objects allows for "true" sharing of behavior: **functions that are available on all created objects point to a single implementation**. If this function implementation changes after objects have been created, **which is possible in JS**, *the behavior of all objects sharing the function will change accordingly*.
















