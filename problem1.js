const assert = require('node:assert'); 

function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of str) {
        
        if (pairs.hasOwnProperty(char)) {
            stack.push(char);
        } 
        
        else {
            const lastOpen = stack.pop();
            
            if (pairs[lastOpen] !== char) {
                return false;
            }
        }
    }

    
    return stack.length === 0;
}


function runTest(id, input, expected) {
  try {
    const result = isValidParentheses(input);
    assert.strictEqual(result, expected);
    console.log(Test ${id} Passed: "${input}" => ${expected});
  } catch (err) {
    console.error(Test ${id} Failed: "${input}" | Expected ${expected} but got ${!expected});
  }
}

console.log("Starting Parentheses Validation Tests...\n");

runTest(1, "()", true);
runTest(2, "[]", true);
runTest(3, "{}", true);
runTest(4, "()[]{}", true);
runTest(5, "{[()]}", true);

console.log("\nTests Completed.");
