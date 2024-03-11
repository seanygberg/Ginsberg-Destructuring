// ES2015 Object Destructuring

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
};

var {a,b} = obj.numbers;

// ES5 Array Swap

var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// raceResults

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});