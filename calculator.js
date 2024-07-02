const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function arithmeticOperations() {
  rl.question("Enter the first number: ", (num1Str) => {
    const num1 = parseFloat(num1Str);
    rl.question("Enter the operation (+, -, *, /): ", (operation) => {
      rl.question("Enter the second number: ", (num2Str) => {
        const num2 = parseFloat(num2Str);

        let result;
        switch (operation) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num1 / num2;
            break;
          default:
            console.log("Invalid operation.");
            rl.close();
            return;
        }

        console.log(`The result is: ${result}`);
        rl.question("Do you want to perform another arithmetic operation? (y/n) ", (choice) => {
          if (choice.toLowerCase() === 'y') {
            arithmeticOperations();
          } else {
            mainMenu();
          }
        });
      });
    });
  });
}

function factorial(n) {
  if (n < 0) {
    console.log("Factorial is not defined for negative numbers.");
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function permutation(n, r) {
  return factorial(n) / factorial(n - r);
}

function combination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function probabilityOperations() {
  rl.question(`Select an option:
    1. Factorial
    2. Permutation
    3. Combination
    4. Back to Main Menu
    Enter your choice (1-4): `, (option) => {
    switch (option) {
      case "1":
        rl.question("Enter the number: ", (nStr) => {
          const n = parseInt(nStr);
          console.log(`The factorial of ${n} is: ${factorial(n)}`);
          rl.question("Do you want to perform another probability operation? (y/n) ", (choice) => {
            if (choice.toLowerCase() === 'y') {
              probabilityOperations();
            } else {
              mainMenu();
            }
          });
        });
        break;
      case "2":
        rl.question("Enter the value of n: ", (nStr) => {
          const n = parseInt(nStr);
          rl.question("Enter the value of r: ", (rStr) => {
            const r = parseInt(rStr);
            console.log(` ${n} permutation ${r} is: ${permutation(n, r)}`);
            rl.question("Do you want to perform another probability operation? (y/n) ", (choice) => {
              if (choice.toLowerCase() === 'y') {
                probabilityOperations();
              } else {
                mainMenu();
              }
            });
          });
        });
        break;
      case "3":
        rl.question("Enter the value of n: ", (nStr) => {
          const n = parseInt(nStr);
          rl.question("Enter the value of r: ", (rStr) => {
            const r = parseInt(rStr);
            console.log(`The combination of ${n} and ${r} is: ${combination(n, r)}`);
            rl.question("Do you want to perform another probability operation? (y/n) ", (choice) => {
              if (choice.toLowerCase() === 'y') {
                probabilityOperations();
              } else {
                mainMenu();
              }
            });
          });
        });
        break;
      case "4":
        mainMenu();
        break;
      default:
        console.log("Invalid option. Please try again.");
        probabilityOperations();
    }
  });
}

function mainMenu() {
  rl.question(`Select an option:
    1. Arithmetic Operations
    2. Probability Operations
    3. Exit
    Enter your choice (1-3): `, (choice) => {
    switch (choice) {
      case "1":
        arithmeticOperations();
        break;
      case "2":
        probabilityOperations();
        break;
      case "3":
        console.log("Exiting the application.");
        rl.close();
        return;
      default:
        console.log("Invalid option. Please try again.");
        mainMenu();
    }
  });
}

mainMenu();
//to run the code write "node calculator.js" in the terminal after u set the directory 
