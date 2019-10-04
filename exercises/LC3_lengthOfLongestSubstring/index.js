// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// sliding window approach
// Sliding window is flexible, and changes size
// current index and value in for loop will be the end
// create empty hashMap(key/val => character/index)
// Create start and max ariable, set both with initial values of zero
// Loop thrugh input string
// if current character in HashMap & has index >= start
// set start to index for character found in hashmap + 1
// set key/value pair on hashmap to be current character/current index
// if length of current window is greater than max
// set max to length of current wind

// return max
function lengthOfLongestSubstring(s) {
  const windowCharsMaps = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];

    if (windowCharsMaps[endChar] >= windowStart) {
      windowStart = windowCharsMaps[endChar] + 1;
    }

    windowCharsMaps[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;
}

module.exports = lengthOfLongestSubstring;
