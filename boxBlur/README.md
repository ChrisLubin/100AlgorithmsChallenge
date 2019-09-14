### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP)
---
Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.

The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

**Example**

For

    image = [[1, 1, 1], 
            [1, 7, 1], 
            [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = ~rounded down~ = 1.

For

    image = [[7, 4, 0, 1], 
            [5, 6, 2, 2], 
            [6, 10, 7, 8], 
            [1, 4, 2, 0]]
the output should be boxBlur(image) = [[5, 4], 
                                       [4, 4]].

There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

**Hints**
-   push()
-   Math.floor()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.array.integer image**

An image is stored as a rectangular matrix of non-negative integers.

*Guaranteed constraints:*

3 ≤ image.length ≤ 10,

3 ≤ image[0].length ≤ 10,

0 ≤ image[i][j] ≤ 255.

- **[output] array.array.integer**

A blurred image.