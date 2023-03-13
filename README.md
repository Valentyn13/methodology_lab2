# methodology_lab2
## Description

* First variant of of application implements a linked list based on build-in arrays.

* Second variand of the application implements a doubly linked list.

## Variant calculation
Defining variant formula: number of the gradebook % 4
```
My variant = 1323 % 4 = 3
```

## Instruction
The project requires node.js to be installed on your machine and typescript any stable version.
My version is 4.9.4

Install all dependancies:
```bash
$ npm install
```

To run application:
```bash
$ ts-node ./src/index.ts
```
To build js files
```
$ tsc //Than the build folder will be created with .js files
```
To run tests:
```bash
$ npm test
```

## Reference to the commit the failed CI tests
[Failed commit link](https://github.com/Valentyn13/methodology_lab2/commit/ecc578b962c680a9cb12e212c96aef1b3e5ffb77)

## Conclusion
Гnit tests are very useful in development, they were especially useful when I was rewriting a linked list to another variant, unit tests helped me catch a lot of errors and avoid unnecessary behavior in the code. Conclusion -  unit tests is not useless.
