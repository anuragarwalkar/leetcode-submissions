class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 !== 0) {
            return false;
        }

        const stack = [];
        const closingBrackets = {'}': '{', ']': '[', ')': '('}


        for(let i = 0; i < s.length; i++) {
            const currentChar = s[i];
            if(closingBrackets[currentChar] != null) {
                const lastOpening = stack.pop();
                if (lastOpening !== closingBrackets[currentChar]) {
                    return false;
                }
            }else {
                stack.push(currentChar);
            }
            
        }

        return stack.length == 0;
    }
}
