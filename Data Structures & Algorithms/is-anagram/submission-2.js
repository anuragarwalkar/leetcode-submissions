class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
    return false;
  }

  const object = {};

  for (let i = 0; i < s.length; i++) {
    object[s[i]] = object[s[i]] + 1 || 1;
  }

  for (let j = 0; j < t.length; j++) {
    const count = object[t[j]];
    object[t[j]] -= 1;

    if (!count) {
      return false;
    }
  }

  return true;
    }
}
