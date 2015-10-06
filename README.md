# First step of ES6

Learn ES6 by answering easy challenge!

## Q1. Hello world.

Fix [hello.js](es6/src/hello.js) to pass [test](es6/test/hello.spec.js)


## Q2. Class.

Fix [person.js](es6/src/person.js) to pass [test](es6/test/person.spec.js)


## Q3. Inheritance

Polygon is a class which means a simple shape.  
It can calc its area size.

It has following subclasses

- Rectangle
- Square
- Circle

Now Square and Circle class are not implemented yet.


Complete [polygon.js](es6/src/polygon.js) to pass [test](es6/test/polygon.spec.js)

### Specification

Square
- Its constructor parameter is 1 number. It means a side length.

Circle
- Its constructor parameter is 1 number. It means a radius.
- The height of Circle is radius * 2.
- The width of Circle is radius * 2.


## Q4. Caesar cipher
[Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is a simple algorithm which makes encrypted text.

Complete [cipher.js](es6/src/cipher.js) to pass [test](es6/test/cipher.spec.js)

### Specification
- Allowed characters are "abcdefghijklmnopqrstuvwxyz1234567890". 
- Character sequence is same as above.
- If not allowed character is present in input parameter, its character is not converted and included in result string.

### Q4 extra
Support uppercase in your implementation.  
Each characters converted to same as lowercase.


## Q5. Simple substitution cipher
