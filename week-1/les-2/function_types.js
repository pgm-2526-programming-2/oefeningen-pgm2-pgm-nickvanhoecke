sum(5, 6); // werkt

function sum(a, b) {
  return a + b;
}

sum(5, 6); // werkt



// Function expression

//anotherSum(5, 6) / werkt niet

const anotherSum = function (a, b) {
  return a + b;
};

anotherSum(5, 6); // werkt




// Arrow function

// arrowSum(5, 6) / werkt niet

const arrowSum = (a, b) => {
    return a + b
}  
arrowSum(5, 6) // werkt

// altArrowSum(5, 6) / werkt niet

// no {} = return statement / only for 1 thing
const altArrowSum = (a, b) => a + b

altArrowSum(5, 6) // werkt