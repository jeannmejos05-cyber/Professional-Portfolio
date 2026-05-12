/**
 * Checks if a string of brackets is valid
 * @param {string} str - input string with only ()[]{}
 * @returns {boolean} true if valid, false otherwise
 */
function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Loop through each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If it's an opening bracket, push to stack
        if (pairs.hasOwnProperty(char)) {
            stack.push(char);
        } 
        // If it's a closing bracket
        else {
            const lastOpen = stack.pop();
            // Check if it matches the correct opening bracket
            if (char !== pairs[lastOpen]) {
                return false;
            }
        }
    }

    // Stack must be empty if all are matched
    return stack.length === 0;
}

// --- Test Cases ---
console.log('Test "()":', isValidParentheses("()"));        // true
console.log('Test "()[]{}":', isValidParentheses("()[]{}")); // true
console.log('Test "(]":', isValidParentheses("(]"));         // false
console.log('Test "{[]}":', isValidParentheses("{[]}"));     // true