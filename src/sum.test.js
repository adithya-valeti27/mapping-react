const sum = require('./sum');

test("Adding 10 and 11 to get 21",()=>{
    expect(sum(10,11)).toBe(21)
})