//Rebuild .map()
const lisaMap = (arr, callback) => {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
  }

  //   test data
  
  const names = ['Elizabeth', 'Fitzwilliam', 'Darcy', 'Jane'];
  const nameLengths = lisaMap(names, (name) => name.length);
  console.log('Character lengths of P&P character names:', nameLengths); 


//Rebuild .reduce()
const lisaReduce = (arr, callback, initialValue) => {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;
  
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  
    const roundedAccumulator = parseFloat(accumulator.toFixed(2));

    return roundedAccumulator;
  }

//   test data
  
  const booksToBuy = [
    { item: 'Station Eleven', price: 12.65 },
    { item: 'Tomorrow, and Tomorrow, and Tomorrow', price: 14.71 },
    { item: 'Remarkably Bright Creatures', price: 17.76 }
  ];
  const totalPrice = lisaReduce(booksToBuy, (acc, item) => acc + item.price, 0);
  console.log('Book Budget:', totalPrice); 

//Rebuild .filter()

const lisaFilter = (arr, callback) => {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  
  //   test data


const words = ['hello', 'lovely', 'orange', 'lisa', 'july', 'laughs'];
const theLetterL = lisaFilter(words, (word) => word.charAt(0).toLowerCase() === 'l');
console.log('These words start with L:', theLetterL); 
