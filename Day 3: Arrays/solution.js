/*
Objective

In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Function Description

Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:

int nums[n]: an array of integers
Returns

int: the second largest number in 
Input Format

The first line contains an integer, , the size of the  array.
The second line contains  space-separated numbers that describe the elements in .

Constraints

, where  is the number at index .
The numbers in  may not be distinct.
Sample Input 0

5
2 3 6 6 5
Sample Output 0

5
Explanation 0

Given the array , we see that the largest value in the array is  and the second largest value is . Thus, we return  as our answer.
*/

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const max = Math.max(...nums);
    nums = nums.filter((num) => num != max);
    return Math.max(...nums);
}


