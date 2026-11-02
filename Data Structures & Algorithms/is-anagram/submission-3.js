class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }

        let memoS = {};

        for(let i = 0; i < s.length; i++) {
            memoS[s[i]] = (memoS[s[i]] ?? 0) + 1
        }

        


        for(let i = 0; i < t.length; i++) {
            if(!memoS[t[i]]) {
                return false; 
            }
            
            memoS[t[i]] -= 1;

        }

        return true;
    }
}
