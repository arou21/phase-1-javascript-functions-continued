function saturdayFun(activity = 'roller-skate') {
    if (saturdayFun) {
    return `This Saturday, I want to ${activity}!`
} 
}

function mondayWork (activity = 'go to the office') {
    if (mondayWork) {
    return `This Monday, I will ${activity}.`;
    }
}
function wrapAdjective(wrapper = "*") {
    return function innerFunction(def = "special") {
        return `You are ${wrapper}${def}${wrapper}!`
    }
}



// describe("defines wrapAdjective function according to the specification", function() {
//     it("function exists", function() {
//       expect(wrapAdjective).to.exist
//     })
    
//     it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective('*')
//       let emphatic = result("a hard worker")
//       expect(emphatic).to.equal("You are *a hard worker*!")
//     });

//     it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective("||")
//       let emphatic = result("a dedicated programmer")
//       expect(emphatic).to.equal("You are ||a dedicated programmer||!")
//     });
//   })

// (function (baseNumber) {
//     return baseNumber + 3;
// })(2); // two acts as a parameter? also 2 = baseNumbher underIIFE



