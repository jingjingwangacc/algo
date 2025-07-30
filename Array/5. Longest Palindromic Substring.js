var longestPalindrome = function(s) {
    // even or odd number 
    // time: O(n^2), space: O(1)
    let res = '';
    for (let i = 0; i < s.length; i++) {
        let s1 = palindrome(s, i, i);
        let s2 = palindrome(s, i, i + 1);
        res = s1.length > res.length ? s1 : res;
        res = s2.length > res.length ? s2 : res;
    }
    return res;

    function palindrome(s, l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return s.substring(l + 1, r);
    }
};