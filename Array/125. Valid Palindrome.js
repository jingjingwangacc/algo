var isPalindrome = function(s) {
    // filter and delete all spaces
    let res = '';
    for (let char of s) {
        if (/[a-zA-Z0-9]/.test(char)) {
            res += char.toLowerCase();
        }
    }
    let l = 0, r = res.length - 1;
    while (l < r) {
        if (res[l] !== res [r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};