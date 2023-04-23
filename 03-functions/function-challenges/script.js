function getCelsius(f) {
    const celsius = ((f - 32) * 5) / 9;
    return celsius;
}

const getCelsius2 = (f) => {
    const celsius = ((f - 32) * 5) / 9;
    return celsius;
}

console.log(`The temp is ${getCelsius2(68)} \xB0C`);


function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max
    }
}


((length, width) => {
    const area = length * width;

    const output = `The area of a rectangle a length of ${length} and a width of ${width} is ${area} square units.`;

console.log(output)

})(5, 10);

