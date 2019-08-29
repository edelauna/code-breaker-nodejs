/* Webpage JS document for Lab 3.
  Author: Elliott de Launay
  For: EECS 1012, York University, Lassonde School of Engineering 
  Modified: 24-Jan-19 by author*/

//being used to detect double click on mobile
var dblClickConfig = {
    action : null,
    delay : 500,
    touchtime : 0
};
//Enumerated values for 3 columns
var columnIDs = [
    "flowchart",
    "js",
    "another"
];

//used for storing information related to the problem navigation
var problem =
    [{
        id: 0,
        title:"outSum2Nums",
        description:"Receive two numbers and output their sum",
        flowchart: {
            URI:"assets/data/flowcharts/img_01.jpg",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex1.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex1.java",
            alt:null
            }
    }, {
        id: 1,
        title:"calcAreaTri",
        description:"Receive three numbers and store them in memory spaces called a, b, and c as three sides of a triangle and, by using Heron’s formula, calculate and output the area of the triangle.",
        flowchart: {
            URI:"assets/data/flowcharts/img_02.jpg",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex2.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex2.java",
            alt:null
            }
    }, {
        id: 2,
        title:"calcQuadRoots",
        description:"Receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots. (assume coefficients are good enough such that a solution in real number exists. Don’t worry about cases that a solution does not exist).",
        flowchart: {
            URI:"assets/data/flowcharts/img_03.jpg",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex3.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex3.java",
            alt:null
            }
    }, {
        id: 3,
        title:"evalQuadRoots",
        description:"Receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers.",
        flowchart: {
            URI:"assets/data/flowcharts/img_04.jpg",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex4.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex4.java",
            alt:null
        }
    }, {
        id: 4,
        title:"mapGrade",
        description:"Receive a number and map it to a letter grade based on York standard.",
        flowchart: {
            URI:"assets/data/flowcharts/img_05.jpg",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex5.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex5.java",
            alt:null
        }
    }, {
        id: 5,
        title:"zeroLoop",
        description:"Continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should stop (not receiving any more input).",
        flowchart: {
            URI:"assets/data/flowcharts/img_06.jpg",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex6.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex6.java",
            alt:null
        }
    }, {
        id: 6,
        title:"altZeroLoop",
        description:"Continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, then it stops.",
        flowchart: {
            URI:"assets/data/flowcharts/img_07.jpg",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex7.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex7.java",
            alt:null
        }
    }, {
        id: 7,
        title:"mod6",
        description:"Continue receiving numbers and output if they are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 6, then it stops. IMPORTANT RESTRICTION: you are not allowed to divide the number by 6; therefore, you are not allowed to use the modulus operator (%) over 6 to verify the remainder when the number is divided by 6. You can do any other math trick you wish.",
        flowchart: {
            URI:"assets/data/flowcharts/img_08.jpg",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex8.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex8.java",
            alt:null
        }
    }, {
        id: 8,
        title:"sepDigits",
        description:"Receive a positive integer and output each digit separately. For instance, if the input is 692, the program should output 2, 9, 6,. Another example, if the number is 135429 the program should out put 9, 2, 4, 5, 3, and 1.",
        flowchart: {
            URI:"assets/data/flowcharts/img_09.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex9.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex9.java",
            alt:null
        }
    }, {
        id: 9,
        title:"digitsMod3",
        description:"Receive a positive number and output how many of its digits are equal to 3. For instance, if the input is 633, the program should output 2, because there are two threes there. Another example, if the input is 14768, the program should output 0",
        flowchart: {
            URI:"assets/data/flowcharts/img_10.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex10.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex10.java",
            alt:null
        }
    }, {
        id: 10,
        title:"sumDigits",
        description:"Receive a positive number and output sum of its digits. For instance, if the input is 63932, the program should output 23, because 6+3+9+3+2 is 23. Another example, if the input is 23 the program should output 5.",
        flowchart: {
            URI:"assets/data/flowcharts/img_11.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex11.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex11.java",
            alt:null
        }
    }, {
        id: 11,
        title:"chkPalindrome",
        description:"Receive a positive number and output 'yes' if it's equal to its reverse; otherwise, output 'no'. For instance, if the input is 63936, the program should output 'yes', because if you read the digits from left to right or from right to left, it's the same number. But, if the input is 632, the program should output 'no' because 632 is not the same as 236.",
        flowchart: {
            URI:"assets/data/flowcharts/img_12.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex12.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex12.java",
            alt:null
        }
    }, {
        id: 12,
        title:"nFactorial",
        description:"Receive a positive number, as n, and output n! (n Factorial).",
        flowchart: {
            URI:"assets/data/flowcharts/img_13.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex13.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex13.java",
            alt:null
        }
    }, {
        id: 13,
        title:"seqFibonacci",
        description:"Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence. In Fibonacci sequence, the first two values are 0 and 1 and other values are sum of the two values preceding it. For instance, if the input is 4, the program should print 0, 1, 1, 2,. As another example if the input is 9, the program should output 0, 1, 1, 2, 3, 5, 8, 13, 21,.",
        flowchart: {
            URI:"assets/data/flowcharts/img_14.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex14.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex14.java",
            alt:"Using Recursive Functions"
        }
    }, {
        id: 14,
        title:"nestedFor",
        description:"Devise an algorithm to input a positive integer, as n,—and by using [] characters—output the figure below that has n rows and each row k has k pairs of [].",
        flowchart: {
            URI:"assets/data/flowcharts/img_15.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ct_Ex15.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex15.java",
            alt:null
        }
    }, {
        id: 15,
        title:"p1Prime?",
        description:"Receives a natural number greater than 1 and determines if it’s a prime number or not",
        flowchart: {
            URI:"assets/data/flowcharts/img_16.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab7/lab7elliottdelaunay.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex16.java",
            alt:"Java file"
        }
    }, {
        id: 16,
        title:"p2chkSum4-4",
        description:"Receives 8 numbers and outputs 'yes' if sum of the first 4 numbers is equal to sum of the last 4 numbers.",
        flowchart: {
            URI:"assets/data/flowcharts/img_17.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab7/lab7elliottdelaunay.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex17.java",
            alt:"Java file"
        }
    }, {
        id: 17,
        title:"p3chkPos-Neg",
        description:"Receives natural numbers until a 0 is entered or number of posive values is more than twice negative ones.",
        flowchart: {
            URI:"assets/data/flowcharts/img_18.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab7/lab7elliottdelaunay.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex18.java",
            alt:"Java file"
        }
    }, {
        id: 18,
        title:"p4chkCnt+/-",
        description:"Receives 8 numbers and outputs “yes” if number of negative values in the first half is equal to the number of positive values in the second half.",
        flowchart: {
            URI:"assets/data/flowcharts/img_19.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab7/lab7elliottdelaunay.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex19.java",
            alt:"HTML file"
        }
    }, {
        id: 19,
        title:"p5PrintPrime",
        description:"calls function prime to print all prime numbers less than or equal to a certain input.",
        flowchart: {
            URI:"assets/data/flowcharts/img_20.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab7/lab7elliottdelaunay.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex20.java",
            alt:"Java file"
        }
    }, {
        id: 20,
        title:"YES/NO",
        description:"Each time the button is clicked, your myFunction() code should generate a random number.  If the random number is greater than 0.5, then have the innerHTML of the paragraph variable set to “YES”, otherwise set it to “NO”",
        flowchart: {
            URI:"assets/data/flowcharts/img_21.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab8/task1.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex21.java",
            alt:"Java file"
        }
    }, {
        id: 21,
        title:"dispResult",
        description:" Write a function in javascript that has one parameter.  When a button is pressed, it should pass the value shown in the button (e.g., 10, 20, 30, or 40).   Your function should change the innerHTML of the paragraph to the passed value as “Result = VALUE”.",
        flowchart: {
            URI:"assets/data/flowcharts/img_22.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab8/task2.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex22.java",
            alt:"Java file"
        }
    }, {
        id: 22,
        title:"addSum",
        description:" Write a function in javascript that has one parameter.  When each button is pressed, it should pass the value shown in the button (e.g., 10, 20, 30, or 40).   Use a for-loop to compute the sum of 0 to the value",
        flowchart: {
            URI:"assets/data/flowcharts/img_23.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab8/task3.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex23.java",
            alt:"HTML file"
        }
    }, {
        id: 23,
        title:"rollDice",
        description:"Each time you click, have your function compute two random numbers from 1-6.  These represent dice. Change the innerHTML to say Dice rolls are “value1” and “value2”, where value1 and 2 are the results of your random number.",
        flowchart: {
            URI:"assets/data/flowcharts/img_24.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab8/task4.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex24.java",
            alt:"HTML file"
        }
    }, {
        id: 24,
        title:"todayDate",
        description:"Get the following data from the Date obect. (i) day of the month  (ii) day of the week  (iii) month  (iv) year Using this data, change the innerHTML to output the string ",
        flowchart: {
            URI:"assets/data/flowcharts/img_25.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab8/task5.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex25.java",
            alt:"JAVA file"
        }
    }, {
        id: 25,
        title:"cntDown",
        description:"Declare a global variable. This is a variable that is created outside your function.  Inside your function, you do not need to declare it again.  If you modify the variable, the modification will be remembered next time you access the function.",
        flowchart: {
            URI:"assets/data/flowcharts/img_26.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/lab8/task6.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex26.java",
            alt:"Java file"
        }
    }, {
        id: 26,
        title:"retArrItems",
        description:"Return the first 100 items of an array",
        flowchart: {
            URI:"assets/data/flowcharts/img_27.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_27.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex27.java",
            alt:"Java file"
        }
    }, {
        id: 27,
        title:"retArrOddItems",
        description:"Return the first 100 odd items of an array",
        flowchart: {
            URI:"assets/data/flowcharts/img_28.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_28.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex28.java",
            alt:"Java file"
        }
    }, {
        id: 28,
        title:"sum10-30",
        description:"Return sum of numbers between 10 and 30",
        flowchart: {
            URI:"assets/data/flowcharts/img_29.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_29.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex29.java",
            alt:"Java file"
        }
    }, {
        id: 29,
        title:"a*b",
        description:"Return the product of a to b without using multiplication",
        flowchart: {
            URI:"assets/data/flowcharts/img_30.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_30.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex30.java",
            alt:"Java file"
        }
    }, {
        id: 30,
        title:"a%b",
        description:"Return the binary of a base 10 number",
        flowchart: {
            URI:"assets/data/flowcharts/img_31.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_31.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex31.java",
            alt:"Java file"
        }
    }, {
        id: 31,
        title:"multTable",
        description:"Output a multiplication tabe of size n",
        flowchart: {
            URI:"assets/data/flowcharts/img_32.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_32.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex32.java",
            alt:"Java file"
        }
    }, {
        id: 32,
        title:"a^b",
        description:"Output a^b without using power or multiplcation",
        flowchart: {
            URI:"assets/data/flowcharts/img_33.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_33.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex33.java",
            alt:"Java file"
        }
    }, {
        id: 33,
        title:"xMatrices",
        description:"Multiply two matrices",
        flowchart: {
            URI:"assets/data/flowcharts/img_34.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_34.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex34.java",
            alt:"Java file"
        }
    }, {
        id: 34,
        title:"sum3DArr",
        description:"Summ the values in a multidimensional array",
        flowchart: {
            URI:"assets/data/flowcharts/img_35.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_35.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex35.java",
            alt:"Java file"
        }
    }, {
        id: 35,
        title:"Cvty2Bin",
        description:"Take a base 10 number and convert it to a base 2 number",
        flowchart: {
            URI:"assets/data/flowcharts/img_36.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_36.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex36.java",
            alt:"Java file"
        }
    }, {
        id: 36,
        title:"1-10!",
        description:"Output factorials of numbers 1 through 10.",
        flowchart: {
            URI:"assets/data/flowcharts/img_37.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_37.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex37.java",
            alt:"Java file"
        }
    }, {
        id: 37,
        title:"1-10000Pal",
        description:"Output all palindrom numbers from 1 to 10000",
        flowchart: {
            URI:"assets/data/flowcharts/img_38.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_38.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex38.java",
            alt:"Java file"
        }
    }, {
        id: 38,
        title:"P<100",
        description:"Output all prime numbers from 1 to 100",
        flowchart: {
            URI:"assets/data/flowcharts/img_39.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_39.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex39.java",
            alt:"Java file"
        }
    }, {
        id: 39,
        title:"Pick3",
        description:"Simple Lottery system",
        flowchart: {
            URI:"assets/data/flowcharts/img_40.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_40.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex40.java",
            alt:"Java file"
        }
    }, {
        id: 40,
        title:"a%b",
        description:"a in mod b without using % operator.",
        flowchart: {
            URI:"assets/data/flowcharts/img_41.png",
            alt:"Flowchart image"
            },
        js: {
            URI:"assets/data/jsRef/ex_41.js",
            alt:"Javascript file"
            },
        another: {
            URI:"assets/data/altRef/ct_Ex41.java",
            alt:"Java file"
        }
    }
];

