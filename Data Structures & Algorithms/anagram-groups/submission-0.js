class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupedAnagrams = {};

        for(let i = 0; i < strs.length; i++) {
            const sortedItem = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('');

            if(!groupedAnagrams[sortedItem]) {
                groupedAnagrams[sortedItem] = [strs[i]];
            }else {
                groupedAnagrams[sortedItem].push(strs[i]);
            }
        }

        const resultArray = [];

        for(let item in groupedAnagrams) {
            resultArray.push(groupedAnagrams[item]);
        }

        return resultArray;
    }
    
}
