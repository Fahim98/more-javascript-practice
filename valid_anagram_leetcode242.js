function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCount = {};

    for (const char of s) {
        if(char in charCount){
            charCount[char]++;
        }
        else{
            charCount[char]  = 1;
        }
    }


    for (const char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}