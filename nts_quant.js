const NTS_QUANT = [
  {
    id: 1,
    question: `The square root of 20.25 is:`,
    options: [`4.25`, `4.5`, `4.65`, `4.85`],
    correct: 1,
    explanation: `Convert to remove the decimal:
20.25 = 2025 ÷ 100.
√20.25 = √2025 ÷ √100.
√2025 = 45.
√100 = 10.
√20.25 = 45 ÷ 10 = 4.5.`,
    passage: null
  },
  {
    id: 2,
    question: `Zakat on gold amounting Rs. 11,10,000 is:`,
    options: [`Rs. 27000`, `Rs. 29000`, `Rs. 27750`, `Rs. 25000`],
    correct: 2,
    explanation: `Zakat rate = 2.5% = 0.025.
Amount = Rs. 11,10,000.
Zakat = 0.025 × 1,110,000
= Rs. 27,750.`,
    passage: null
  },
  {
    id: 3,
    question: `Factorization of algebraic expression (x² - 3x - 4) yields:`,
    options: [`(x+4)(x+1)`, `(x-4)(x+1)`, `(x+4)(x-1)`, `(x-4)(x-1)`],
    correct: 1,
    explanation: `We need two numbers whose product = −4 and sum = −3.
Those numbers are: −4 and +1.
Check: (−4) × (+1) = −4 ✓ and (−4) + (+1) = −3 ✓.
So: x² − 3x − 4 = (x − 4)(x + 1).
Option A: (x+4)(x+1) gives x²+5x+4 = wrong.
Option B: (x−4)(x−1) gives x²−5x+4 = wrong.
Option C: (x+4)(x−1) gives x²+3x−4 = wrong.
Only Option D gives the correct expansion.`,
    passage: null
  },
  {
    id: 4,
    question: `If (x + 1/x = 2) then (x² + 1/x² = ?)`,
    options: [`2`, `8`, `4`, `6`],
    correct: 0,
    explanation: `Square both sides of (x + 1/x) = 2:
(x + 1/x)² = x² + 2 + 1/x².
So: x² + 1/x² = (x + 1/x)² − 2.
= 2² − 2
= 4 − 2
= 2.`,
    passage: null
  },
  {
    id: 5,
    question: `If A = {letters between v and z}, which of the following best describes set A?`,
    options: [`The set of consonants`, `The set of vowels`, `The set of vowels between v & z`, `The set of integers`],
    correct: 0,
    explanation: `Letters between v and z (exclusive) are: w, x, y.
None of these are vowels , so all three are consonants.
Therefore, Set A = {w, x, y} which is a set of consonants.
Option A (set of vowels) is wrong because w, x, y are not vowels.
Option C (set of vowels between v and z) is wrong for the same reason.
Option D (set of integers) is unrelated to letters.`,
    passage: null
  },
  {
    id: 6,
    question: `The score of Misbah-ul-Haq in one day match was 78 runs. If the total score of the team is 325 runs, what is the percentage?`,
    options: [`22%`, `27%`, `26%`, `24%`],
    correct: 3,
    explanation: `Team total = 325 runs, Misbah's score = 78 runs.
Percentage = (Misbah's runs ÷ Total runs) × 100.
= (78 ÷ 325) × 100.
= 0.24 × 100.
= 24%.`,
    passage: null
  },
  {
    id: 7,
    question: `The sum of the first five natural numbers is:`,
    options: [`12`, `15`, `18`, `20`],
    correct: 1,
    explanation: `The first five natural numbers are: 1, 2, 3, 4, 5.
Sum = 1 + 2 + 3 + 4 + 5
Sum = 15.
Alternatively, use the formula: n(n+1)/2 = 5 × 6/2 = 15.
Note: Natural numbers start from 1. Whole numbers start from 0.`,
    passage: null
  },
  {
    id: 8,
    question: `All the factors of 24 are:`,
    options: [`2, 3, 4, 6, 12, 24`, `1, 2, 3, 4, 6, 12, 24`, `1, 3, 4, 6, 12, 24`, `1, 2, 3, 4, 6, 12`],
    correct: 1,
    explanation: `The first five natural numbers are: 1, 2, 3, 4, 5.
Sum = 1 + 2 + 3 + 4 + 5 = 15.
Using formula: n(n+1)/2 = 5 × 6 ÷ 2 = 15.`,
    passage: null
  },
  {
    id: 9,
    question: `Yasir got 80% of 75 marks in a written examination of mathematics. How many marks did he get?`,
    options: [`45`, `50`, `65`, `60`],
    correct: 3,
    explanation: `Marks obtained = 80% of 75.
= (80 ÷ 100) × 75.
= 0.80 × 75.
= 60 marks.`,
    passage: null
  },
  {
    id: 10,
    question: `A polynomial of degree two is called:`,
    options: [`Quadratic polynomial`, `Linear polynomial`, `Identity polynomial`, `Nonlinear polynomial`],
    correct: 0,
    explanation: `A polynomial with the highest power of the variable equal to 2 is called a quadratic polynomial.
Examples: x² + 3x + 2, 2x² − 5, x² − 9.
Linear polynomial: degree 1. Cubic polynomial: degree 3. Constant polynomial: degree 0.`,
    passage: null
  },
  {
    id: 11,
    question: `The square root of 144 is:`,
    options: [`11`, `10`, `12`, `14`],
    correct: 2,
    explanation: `Verify: 12 × 12 = 144. ✓
So √144 = 12.
Option A (10): 10² = 100 : wrong.
Option B (11): 11² = 121 : wrong.
Option D (14): 14² = 196 : wrong.`,
    passage: null
  },
  {
    id: 12,
    question: `If 25% of a number is 40, the number is:`,
    options: [`120`, `140`, `150`, `160`],
    correct: 3,
    explanation: `25% of the number = 40.
1/4 of the number = 40.
Number = 40 × 4 = 160.
Check: 25% of 160 = 0.25 × 160 = 40. ✓`,
    passage: null
  },
  {
    id: 13,
    question: `What is 15% of 200?`,
    options: [`30`, `25`, `35`, `40`],
    correct: 0,
    explanation: `15% of 200:
= (15 ÷ 100) × 200.
= 0.15 × 200.
= 30.`,
    passage: null
  },
  {
    id: 14,
    question: `If 5x = 45, then x =`,
    options: [`5`, `6`, `9`, `8`],
    correct: 2,
    explanation: `5x = 45.
x = 45 ÷ 5.
x = 9.`,
    passage: null
  },
  {
    id: 15,
    question: `The average of 10, 20, 30, 40, 50 is:`,
    options: [`20`, `25`, `35`, `30`],
    correct: 3,
    explanation: `Sum of numbers = 10 + 20 + 30 + 40 + 50 = 150.
Count of numbers = 5.
Average = Sum ÷ Count.
= 150 ÷ 5.
= 30.`,
    passage: null
  },
  {
    id: 16,
    question: `If a car travels 60 km in one hour, how far will it travel in 3 hours?`,
    options: [`120 km`, `180 km`, `150 km`, `200 km`],
    correct: 1,
    explanation: `Distance = Speed × Time.
= 60 km/h × 3 hours.
= 180 km.`,
    passage: null
  },
  {
    id: 17,
    question: `What is 3 squared plus 4 squared?`,
    options: [`12`, `20`, `25`, `49`],
    correct: 2,
    explanation: `3² = 3 × 3 = 9.
4² = 4 × 4 = 16.
3² + 4² = 9 + 16 = 25.`,
    passage: null
  },
  {
    id: 18,
    question: `The sum of the first 10 natural numbers is:`,
    options: [`50`, `55`, `60`, `45`],
    correct: 1,
    explanation: `Formula: Sum of first n natural numbers = n(n+1) ÷ 2.
n = 10.
Sum = 10 × 11 ÷ 2.
= 110 ÷ 2.
= 55.`,
    passage: null
  },
  {
    id: 19,
    question: `If 2x + 6 = 16, then x =`,
    options: [`5`, `3`, `4`, `6`],
    correct: 0,
    explanation: `2x + 6 = 16.
2x = 16 − 6.
2x = 10.
x = 10 ÷ 2.
x = 5.`,
    passage: null
  },
  {
    id: 20,
    question: `What is 20% of 150?`,
    options: [`20`, `25`, `30`, `35`],
    correct: 2,
    explanation: `20% of 150:
= (20 ÷ 100) × 150.
= 0.20 × 150.
= 30.`,
    passage: null
  },
  {
    id: 21,
    question: `If a number is doubled and becomes 60, the original number is:`,
    options: [`20`, `25`, `35`, `30`],
    correct: 3,
    explanation: `Let the number = x.
2x = 60.
x = 60 ÷ 2.
x = 30.`,
    passage: null
  },
  {
    id: 22,
    question: `The cube of 4 is:`,
    options: [`64`, `12`, `48`, `16`],
    correct: 0,
    explanation: `4³ = 4 × 4 × 4.
= 16 × 4.
= 64.`,
    passage: null
  },
  {
    id: 23,
    question: `The perimeter of a square with side 5 cm is:`,
    options: [`10`, `20`, `15`, `25`],
    correct: 1,
    explanation: `Perimeter of a square = 4 × side.
= 4 × 5.
= 20 cm.`,
    passage: null
  },
  {
    id: 24,
    question: `If a train covers 120 km in 2 hours, its speed is:`,
    options: [`50 km/h`, `80 km/h`, `70 km/h`, `60 km/h`],
    correct: 3,
    explanation: `Speed = Distance ÷ Time.
= 120 ÷ 2.
= 60 km/h.`,
    passage: null
  },
  {
    id: 25,
    question: `The value of 9² is:`,
    options: [`72`, `81`, `90`, `99`],
    correct: 1,
    explanation: `9² = 9 × 9.
= 81.
Verify by reverse: √81 = 9. ✓`,
    passage: null
  },
  {
    id: 26,
    question: `If 10 pencils cost Rs. 50, the cost of one pencil is:`,
    options: [`4`, `3`, `5`, `6`],
    correct: 2,
    explanation: `Cost of 10 pencils = Rs. 50.
Cost of 1 pencil = 50 ÷ 10.
= Rs. 5.`,
    passage: null
  },
  {
    id: 27,
    question: `The LCM of 4 and 6 is:`,
    options: [`8`, `10`, `16`, `12`],
    correct: 3,
    explanation: `LCM of 4 and 6:
Multiples of 4: 4, 8, 12, 16...
Multiples of 6: 6, 12, 18...
Smallest common multiple = 12.`,
    passage: null
  },
  {
    id: 28,
    question: `The HCF of 12 and 18 is:`,
    options: [`6`, `3`, `4`, `9`],
    correct: 0,
    explanation: `Factors of 12: 1, 2, 3, 4, 6, 12.
Factors of 18: 1, 2, 3, 6, 9, 18.
Common factors: 1, 2, 3, 6.
Highest Common Factor = 6.`,
    passage: null
  },
  {
    id: 29,
    question: `If 7 + x = 15, then x =`,
    options: [`6`, `7`, `8`, `9`],
    correct: 2,
    explanation: `7 + x = 15.
x = 15 − 7.
x = 8.`,
    passage: null
  },
  {
    id: 30,
    question: `The value of 100 ÷ 5 is:`,
    options: [`15`, `30`, `25`, `20`],
    correct: 3,
    explanation: `100 ÷ 5 = 20.
Check: 20 × 5 = 100. ✓`,
    passage: null
  },
  {
    id: 31,
    question: `The area of a rectangle with length 10 and width 5 is:`,
    options: [`50`, `40`, `45`, `60`],
    correct: 0,
    explanation: `Area of rectangle = Length × Width.
= 10 × 5.
= 50 square units.`,
    passage: null
  },
  {
    id: 32,
    question: `If 8 workers finish a job in 4 days, the work done by one worker in 4 days equals:`,
    options: [`1/2`, `1/8`, `1/4`, `1`],
    correct: 1,
    explanation: `Total work = 8 workers × 4 days = 32 units.
Work done by 1 worker in 4 days = 1 ÷ 8 of the total job.
So one worker's share = 1/8.`,
    passage: null
  },
  {
    id: 33,
    question: `The square root of 81 is:`,
    options: [`7`, `10`, `9`, `8`],
    correct: 2,
    explanation: `9 × 9 = 81. ✓
So √81 = 9.`,
    passage: null
  },
  {
    id: 34,
    question: `What is 50% of 90?`,
    options: [`40`, `45`, `50`, `55`],
    correct: 1,
    explanation: `50% = half.
Half of 90 = 90 ÷ 2 = 45.`,
    passage: null
  },
  {
    id: 35,
    question: `The next number in the sequence is: 2, 4, 6, 8, ?`,
    options: [`9`, `11`, `10`, `12`],
    correct: 2,
    explanation: `The sequence increases by 2 each time:
2, 4, 6, 8, ?
Next term = 8 + 2 = 10.`,
    passage: null
  },
  {
    id: 36,
    question: `If a book costs Rs. 200 and a discount of 10% is given, the discount amount is:`,
    options: [`10`, `15`, `25`, `20`],
    correct: 3,
    explanation: `Discount = 10% of Rs. 200.
= (10 ÷ 100) × 200.
= 0.10 × 200.
= Rs. 20.`,
    passage: null
  },
  {
    id: 37,
    question: `The value of 5 × 7 is:`,
    options: [`35`, `30`, `32`, `40`],
    correct: 0,
    explanation: `5 × 7 = 35.
Check: 35 ÷ 7 = 5. ✓`,
    passage: null
  },
  {
    id: 38,
    question: `The sum of 18 and 24 is:`,
    options: [`38`, `40`, `42`, `44`],
    correct: 2,
    explanation: `18 + 24:
= (18 + 20) + 4.
= 38 + 4.
= 42.`,
    passage: null
  },
  {
    id: 39,
    question: `If a number is divided by 4 and the result is 5, the number is:`,
    options: [`10`, `15`, `25`, `20`],
    correct: 3,
    explanation: `Number ÷ 4 = 5.
Number = 5 × 4.
Number = 20.`,
    passage: null
  },
  {
    id: 40,
    question: `The value of 12 × 3 is:`,
    options: [`36`, `24`, `30`, `48`],
    correct: 0,
    explanation: `12 × 3:
= (10 × 3) + (2 × 3).
= 30 + 6.
= 36.`,
    passage: null
  },
  {
    id: 41,
    question: `The square of 11 is:`,
    options: [`111`, `121`, `120`, `132`],
    correct: 1,
    explanation: `11² = 11 × 11.
= (10 + 1) × (10 + 1).
= 100 + 10 + 10 + 1.
= 121.`,
    passage: null
  },
  {
    id: 42,
    question: `If a man saves Rs. 200 each month, how much does he save in a year?`,
    options: [`2000`, `2200`, `2600`, `2400`],
    correct: 3,
    explanation: `Savings per month = Rs. 200.
Months in a year = 12.
Total savings = 200 × 12.
= Rs. 2400.`,
    passage: null
  },
  {
    id: 43,
    question: `The cube of 3 is:`,
    options: [`9`, `27`, `18`, `36`],
    correct: 1,
    explanation: `3³ = 3 × 3 × 3.
= 9 × 3.
= 27.`,
    passage: null
  },
  {
    id: 44,
    question: `What is 75% of 80?`,
    options: [`50`, `55`, `60`, `65`],
    correct: 2,
    explanation: `75% of 80:
= (75 ÷ 100) × 80.
= 0.75 × 80.
= 60.`,
    passage: null
  },
  {
    id: 45,
    question: `The average of 6 and 14 is:`,
    options: [`8`, `9`, `12`, `10`],
    correct: 3,
    explanation: `Average = (Sum of values) ÷ (Count of values).
= (6 + 14) ÷ 2.
= 20 ÷ 2.
= 10.`,
    passage: null
  },
  {
    id: 46,
    question: `The next number in the series: 5, 10, 20, 40, ?`,
    options: [`80`, `60`, `70`, `90`],
    correct: 0,
    explanation: `The series doubles each time:
5, 10, 20, 40, ?
Next term = 40 × 2 = 80.`,
    passage: null
  },
  {
    id: 47,
    question: `The value of 9 × 6 is:`,
    options: [`48`, `52`, `54`, `56`],
    correct: 2,
    explanation: `9 × 6:
= (10 × 6) − (1 × 6).
= 60 − 6.
= 54.`,
    passage: null
  },
  {
    id: 48,
    question: `If 100 students appear in an exam and 80 pass, the pass percentage is:`,
    options: [`60%`, `80%`, `75%`, `70%`],
    correct: 1,
    explanation: `Pass percentage = (Students passed ÷ Total students) × 100.
= (80 ÷ 100) × 100.
= 80%.`,
    passage: null
  },
  {
    id: 49,
    question: `The perimeter of a rectangle with length 8 and width 4 is:`,
    options: [`24`, `20`, `22`, `26`],
    correct: 0,
    explanation: `Perimeter of rectangle = 2 × (Length + Width).
= 2 × (8 + 4).
= 2 × 12.
= 24 units.`,
    passage: null
  },
  {
    id: 50,
    question: `The value of 6² is:`,
    options: [`30`, `32`, `36`, `42`],
    correct: 2,
    explanation: `6² = 6 × 6.
= 36.
Verify by reverse: √36 = 6. ✓`,
    passage: null
  },
  {
    id: 51,
    question: `If 40% of a number equals 120, what is the number?`,
    options: [`250`, `360`, `320`, `300`],
    correct: 3,
    explanation: `Let the number = x.
40% of x = 120.
0.40 × x = 120.
x = 120 ÷ 0.40.
x = 300.`,
    passage: null
  },
  {
    id: 52,
    question: `A number increased by 20% becomes 360. What was the original number?`,
    options: [`250`, `300`, `280`, `320`],
    correct: 1,
    explanation: `Let the original number = x.
After 20% increase: x + 20% of x = 360.
1.20x = 360.
x = 360 ÷ 1.20.
x = 300.`,
    passage: null
  },
  {
    id: 53,
    question: `The average of five numbers is 18. What is their total?`,
    options: [`70`, `80`, `90`, `85`],
    correct: 2,
    explanation: `Total = Average × Count.
= 18 × 5.
= 90.`,
    passage: null
  },
  {
    id: 54,
    question: `If x² − 9 = 0, then x equals:`,
    options: [`3 only`, `−3 only`, `9`, `±3`],
    correct: 3,
    explanation: `x² − 9 = 0.
x² = 9.
x = ±√9.
x = +3 or −3.
Both values satisfy the equation:
(+3)² − 9 = 9 − 9 = 0. ✓
(−3)² − 9 = 9 − 9 = 0. ✓`,
    passage: null
  },
  {
    id: 55,
    question: `The value of 2³ + 3² is:`,
    options: [`17`, `13`, `15`, `19`],
    correct: 0,
    explanation: `2³ = 2 × 2 × 2 = 8.
3² = 3 × 3 = 9.
Total = 8 + 9 = 17.`,
    passage: null
  },
  {
    id: 56,
    question: `A train travels 90 km in 1.5 hours. What is its speed?`,
    options: [`55 km/h`, `60 km/h`, `50 km/h`, `70 km/h`],
    correct: 1,
    explanation: `Speed = Distance ÷ Time.
= 90 ÷ 1.5.
= 60 km/h.`,
    passage: null
  },
  {
    id: 57,
    question: `If the ratio of two numbers is 3 : 5 and their sum is 40, the larger number is:`,
    options: [`20`, `35`, `30`, `25`],
    correct: 3,
    explanation: `Let each part = x.
3x + 5x = 40.
8x = 40.
x = 5.
Smaller number = 3x = 3 × 5 = 15.
Larger number = 5x = 5 × 5 = 25.`,
    passage: null
  },
  {
    id: 58,
    question: `The simple interest on Rs.1000 at 5% per year for 2 years is:`,
    options: [`100`, `80`, `90`, `120`],
    correct: 0,
    explanation: `Simple Interest formula: SI = (P × R × T) ÷ 100.
P = Rs. 1000, R = 5%, T = 2 years.
SI = (1000 × 5 × 2) ÷ 100.
= 10000 ÷ 100.
= Rs. 100.`,
    passage: null
  },
  {
    id: 59,
    question: `If 12 workers complete a job in 10 days, how many days will 6 workers take?`,
    options: [`15`, `20`, `18`, `24`],
    correct: 1,
    explanation: `Workers and time are inversely proportional.
Total work = 12 workers × 10 days = 120 units.
With 6 workers:
Days = 120 ÷ 6 = 20 days.`,
    passage: null
  },
  {
    id: 60,
    question: `The value of (15 × 8) − (12 × 5) is:`,
    options: [`40`, `50`, `70`, `60`],
    correct: 3,
    explanation: `15 × 8 = 120.
12 × 5 = 60.
120 − 60 = 60.`,
    passage: null
  },
  {
    id: 61,
    question: `If 3x = 21, then 2x equals:`,
    options: [`10`, `14`, `12`, `16`],
    correct: 1,
    explanation: `3x = 21.
x = 21 ÷ 3.
x = 7.
2x = 2 × 7 = 14.`,
    passage: null
  },
  {
    id: 62,
    question: `A number is decreased by 25% and becomes 75. What was the original number?`,
    options: [`90`, `95`, `100`, `110`],
    correct: 2,
    explanation: `After 25% decrease, 75% of the number remains.
0.75 × x = 75.
x = 75 ÷ 0.75.
x = 100.
Check: 25% of 100 = 25. 100 − 25 = 75. ✓`,
    passage: null
  },
  {
    id: 63,
    question: `If the perimeter of a rectangle is 60 and its length is 20, the width is:`,
    options: [`20`, `10`, `15`, `12`],
    correct: 1,
    explanation: `Perimeter = 2(L + W).
60 = 2(20 + W).
60 ÷ 2 = 20 + W.
30 = 20 + W.
W = 30 − 20.
W = 10 units.`,
    passage: null
  },
  {
    id: 64,
    question: `The value of (6² − 5²) is:`,
    options: [`11`, `12`, `13`, `14`],
    correct: 0,
    explanation: `6² = 36. 5² = 25.
36 − 25 = 11.`,
    passage: null
  },
  {
    id: 65,
    question: `If a shopkeeper buys an item for Rs.80 and sells it for Rs.100, the profit percentage is:`,
    options: [`20%`, `30%`, `25%`, `35%`],
    correct: 2,
    explanation: `Cost price = Rs. 80. Selling price = Rs. 100.
Profit = Selling price − Cost price.
= 100 − 80.
= Rs. 20.
Profit % = (Profit ÷ Cost price) × 100.
= (20 ÷ 80) × 100.
= 25%.`,
    passage: null
  },
  {
    id: 66,
    question: `The square root of 169 is:`,
    options: [`11`, `12`, `14`, `13`],
    correct: 3,
    explanation: `13 × 13 = 169. ✓
So √169 = 13.`,
    passage: null
  },
  {
    id: 67,
    question: `If 5 pencils cost Rs.25, the cost of 12 pencils is:`,
    options: [`60`, `50`, `55`, `65`],
    correct: 0,
    explanation: `Cost of 1 pencil = 25 ÷ 5 = Rs. 5.
Cost of 12 pencils = 12 × 5.
= Rs. 60.`,
    passage: null
  },
  {
    id: 68,
    question: `The next number in the sequence is: 4, 9, 16, 25, ?`,
    options: [`30`, `32`, `36`, `40`],
    correct: 2,
    explanation: `The terms are perfect squares:
2² = 4, 3² = 9, 4² = 16, 5² = 25.
Next term = 6² = 36.`,
    passage: null
  },
  {
    id: 69,
    question: `If 8% of a number is 24, the number is:`,
    options: [`200`, `250`, `350`, `300`],
    correct: 3,
    explanation: `Let the number = x.
0.08x = 24.
x = 24 ÷ 0.08.
x = 300.
Check: 8% of 300 = 0.08 × 300 = 24. ✓`,
    passage: null
  },
  {
    id: 70,
    question: `The average of 12, 18, 20, and 30 is:`,
    options: [`18`, `20`, `19`, `22`],
    correct: 1,
    explanation: `Sum = 12 + 18 + 20 + 30 = 80.
Count = 4.
Average = 80 ÷ 4 = 20.`,
    passage: null
  },
  {
    id: 71,
    question: `If a car travels 240 km in 4 hours, its speed is:`,
    options: [`55 km/h`, `50 km/h`, `60 km/h`, `65 km/h`],
    correct: 2,
    explanation: `Speed = Distance ÷ Time.
= 240 ÷ 4.
= 60 km/h.`,
    passage: null
  },
  {
    id: 72,
    question: `The value of 7² − 4² is:`,
    options: [`25`, `49`, `35`, `33`],
    correct: 3,
    explanation: `7² = 49. 4² = 16.
7² − 4² = 49 − 16 = 33.`,
    passage: null
  },
  {
    id: 73,
    question: `If the ratio of two numbers is 2 : 3 and their difference is 10, the larger number is:`,
    options: [`30`, `20`, `25`, `35`],
    correct: 0,
    explanation: `Let the two numbers be 2x and 3x.
3x − 2x = 10.
x = 10.
Smaller number = 2x = 20.
Larger number = 3x = 30.`,
    passage: null
  },
  {
    id: 74,
    question: `A number multiplied by 6 gives 72. The number is:`,
    options: [`10`, `14`, `12`, `16`],
    correct: 2,
    explanation: `Number × 6 = 72.
Number = 72 ÷ 6.
Number = 12.`,
    passage: null
  },
  {
    id: 75,
    question: `The cube of 5 is:`,
    options: [`75`, `100`, `150`, `125`],
    correct: 3,
    explanation: `5³ = 5 × 5 × 5.
= 25 × 5.
= 125.`,
    passage: null
  },
  {
    id: 76,
    question: `If 15% of a number is 45, the number is:`,
    options: [`300`, `250`, `320`, `350`],
    correct: 0,
    explanation: `Let the number = x.
0.15x = 45.
x = 45 ÷ 0.15.
x = 300.
Check: 15% of 300 = 0.15 × 300 = 45. ✓`,
    passage: null
  },
  {
    id: 77,
    question: `The value of 9 × 11 is:`,
    options: [`88`, `99`, `90`, `101`],
    correct: 1,
    explanation: `9 × 11:
= (9 × 10) + (9 × 1).
= 90 + 9.
= 99.`,
    passage: null
  },
  {
    id: 78,
    question: `If a number is divided by 8 and the result is 6, the number is:`,
    options: [`40`, `52`, `48`, `44`],
    correct: 2,
    explanation: `Number ÷ 8 = 6.
Number = 6 × 8.
Number = 48.`,
    passage: null
  },
  {
    id: 79,
    question: `The perimeter of a square with side 12 cm is:`,
    options: [`36`, `48`, `42`, `52`],
    correct: 1,
    explanation: `Perimeter of a square = 4 × side.
= 4 × 12.
= 48 cm.`,
    passage: null
  },
  {
    id: 80,
    question: `The value of (18 ÷ 3) + (5 × 4) is:`,
    options: [`20`, `24`, `26`, `28`],
    correct: 2,
    explanation: `18 ÷ 3 = 6.
5 × 4 = 20.
Total = 6 + 20 = 26.`,
    passage: null
  },
  {
    id: 81,
    question: `The square root of 256 is:`,
    options: [`14`, `15`, `18`, `16`],
    correct: 3,
    explanation: `16 × 16 = 256. ✓
So √256 = 16.`,
    passage: null
  },
  {
    id: 82,
    question: `The next number in the sequence is: 3, 6, 12, 24, ?`,
    options: [`48`, `36`, `42`, `54`],
    correct: 0,
    explanation: `The series doubles each time:
3, 6, 12, 24, ?
Next term = 24 × 2 = 48.`,
    passage: null
  },
  {
    id: 83,
    question: `If 4x + 8 = 24, x equals:`,
    options: [`3`, `4`, `5`, `6`],
    correct: 1,
    explanation: `4x + 8 = 24.
4x = 24 − 8.
4x = 16.
x = 16 ÷ 4.
x = 4.`,
    passage: null
  },
  {
    id: 84,
    question: `The HCF of 16 and 24 is:`,
    options: [`4`, `6`, `12`, `8`],
    correct: 3,
    explanation: `Factors of 16: 1, 2, 4, 8, 16.
Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.
Common factors: 1, 2, 4, 8.
Highest Common Factor = 8.`,
    passage: null
  },
  {
    id: 85,
    question: `If a book costs Rs.250 and discount is 20%, the discount amount is:`,
    options: [`50`, `40`, `45`, `60`],
    correct: 0,
    explanation: `Discount = 20% of Rs. 250.
= (20 ÷ 100) × 250.
= 0.20 × 250.
= Rs. 50.`,
    passage: null
  },
  {
    id: 86,
    question: `The sum of angles in a triangle is:`,
    options: [`120°`, `90°`, `180°`, `360°`],
    correct: 2,
    explanation: `The sum of interior angles of any triangle = 180°.
This holds for all triangles: acute, right, and obtuse.`,
    passage: null
  },
  {
    id: 87,
    question: `If the average of 4 numbers is 25, their total is:`,
    options: [`80`, `90`, `110`, `100`],
    correct: 3,
    explanation: `Total = Average × Count.
= 25 × 4.
= 100.`,
    passage: null
  },
  {
    id: 88,
    question: `The value of 13² is:`,
    options: [`156`, `169`, `172`, `196`],
    correct: 1,
    explanation: `13² = 13 × 13.
= 169.`,
    passage: null
  },
  {
    id: 89,
    question: `If a number increases from 200 to 240, the percentage increase is:`,
    options: [`15%`, `18%`, `20%`, `25%`],
    correct: 2,
    explanation: `Increase = 240 − 200 = 40.
Percentage increase = (Increase ÷ Original) × 100.
= (40 ÷ 200) × 100.
= 0.20 × 100.
= 20%.`,
    passage: null
  },
  {
    id: 90,
    question: `The next number in sequence: 5, 15, 45, 135, ?`,
    options: [`200`, `315`, `450`, `405`],
    correct: 3,
    explanation: `The series multiplies by 3 each time:
5, 15, 45, 135, ?
Next term = 135 × 3 = 405.`,
    passage: null
  },
  {
    id: 91,
    question: `The LCM of 8 and 12 is:`,
    options: [`24`, `16`, `20`, `36`],
    correct: 0,
    explanation: `LCM of 8 and 12:
Multiples of 8: 8, 16, 24...
Multiples of 12: 12, 24...
Smallest common multiple = 24.`,
    passage: null
  },
  {
    id: 92,
    question: `If 30% of a number is 90, the number is:`,
    options: [`250`, `350`, `300`, `400`],
    correct: 2,
    explanation: `Let the number = x.
0.30x = 90.
x = 90 ÷ 0.30.
x = 300.`,
    passage: null
  },
  {
    id: 93,
    question: `The cube root of 125 is:`,
    options: [`3`, `5`, `6`, `4`],
    correct: 1,
    explanation: `5 × 5 × 5 = 125.
So ∛125 = 5.`,
    passage: null
  },
  {
    id: 94,
    question: `The value of (20 + 30) × 2 is:`,
    options: [`100`, `80`, `90`, `120`],
    correct: 0,
    explanation: `(20 + 30) × 2:
First, brackets: 20 + 30 = 50.
Then multiply: 50 × 2 = 100.`,
    passage: null
  },
  {
    id: 95,
    question: `If the ratio of two numbers is 4 : 5 and their sum is 45, the larger number is:`,
    options: [`20`, `25`, `30`, `35`],
    correct: 1,
    explanation: `4x + 9x = 13x.
13x = 65.
x = 65 ÷ 13 = 5.
Smaller number = 4x = 4 × 5 = 20.
Larger number = 9x = 9 × 5 = 45.`,
    passage: null
  },
  {
    id: 96,
    question: `The square of 14 is:`,
    options: [`176`, `186`, `204`, `196`],
    correct: 3,
    explanation: `14² = 14 × 14 = 196.`,
    passage: null
  },
  {
    id: 97,
    question: `If a number divided by 5 equals 9, the number is:`,
    options: [`40`, `45`, `50`, `55`],
    correct: 1,
    explanation: `Number = 9 × 5 = 45.
Check: 45 ÷ 5 = 9. ✓`,
    passage: null
  },
  {
    id: 98,
    question: `If a rectangle has length 12 and width 8, its area is:`,
    options: [`84`, `90`, `96`, `104`],
    correct: 2,
    explanation: `Area = Length × Width.
= 12 × 8.
= 96 square units.`,
    passage: null
  },
  {
    id: 99,
    question: `The next number in the sequence: 2, 5, 10, 17, 26, ?`,
    options: [`35`, `36`, `40`, `37`],
    correct: 3,
    explanation: `Differences between terms:
5 − 2 = 3.
10 − 5 = 5.
17 − 10 = 7.
26 − 17 = 9.
Differences increase by 2 each time.
Next difference = 9 + 2 = 11.
Next term = 26 + 11 = 37.`,
    passage: null
  },
  {
    id: 100,
    question: `If 9 workers finish work in 6 days, how many days will 3 workers take?`,
    options: [`18`, `12`, `15`, `21`],
    correct: 0,
    explanation: `Workers and time are inversely proportional.
Total work = 9 workers × 6 days = 54 units.
With 3 workers:
Days = 54 ÷ 3 = 18 days.`,
    passage: null
  },
  {
    id: 101,
    question: `What is the value of (3/4) + (5/8)?`,
    options: [`9/8`, `13/8`, `11/8`, `15/8`],
    correct: 2,
    explanation: `3/4 = 6/8.
6/8 + 5/8 = 11/8.`,
    passage: null
  },
  {
    id: 102,
    question: `If the price of an item increases from Rs.400 to Rs.460, the percentage increase is:`,
    options: [`10%`, `12%`, `18%`, `15%`],
    correct: 3,
    explanation: `Increase = 460 − 400 = Rs. 60.
Percentage increase = (Increase ÷ Original) × 100.
= (60 ÷ 400) × 100.
= 0.15 × 100.
= 15%.`,
    passage: null
  },
  {
    id: 103,
    question: `If 2x + 3y = 12 and x = 3, the value of y is:`,
    options: [`2`, `1`, `3`, `4`],
    correct: 0,
    explanation: `Substitute x = 3 into 2x + 3y = 12:
2(3) + 3y = 12.
6 + 3y = 12.
3y = 12 − 6.
3y = 6.
y = 6 ÷ 3.
y = 2.`,
    passage: null
  },
  {
    id: 104,
    question: `The probability of getting a head when tossing a fair coin is:`,
    options: [`1/3`, `2/3`, `1/2`, `1`],
    correct: 2,
    explanation: `A fair coin has 2 equally likely outcomes: Head and Tail.
Probability of Head = 1 ÷ 2 = 1/2.`,
    passage: null
  },
  {
    id: 105,
    question: `The area of a triangle with base 10 and height 6 is:`,
    options: [`20`, `25`, `40`, `30`],
    correct: 3,
    explanation: `Area of a triangle = (1/2) × Base × Height.
= (1/2) × 10 × 6.
= (1/2) × 60.
= 30 square units.`,
    passage: null
  },
  {
    id: 106,
    question: `If 5 men can complete a work in 12 days, how many days will 10 men take?`,
    options: [`4`, `6`, `5`, `8`],
    correct: 1,
    explanation: `Workers and time are inversely proportional.
Total work = 5 men × 12 days = 60 units.
With 10 men:
Days = 60 ÷ 10 = 6 days.`,
    passage: null
  },
  {
    id: 107,
    question: `The value of 2⁵ is:`,
    options: [`16`, `24`, `32`, `64`],
    correct: 2,
    explanation: `2⁵ = 2 × 2 × 2 × 2 × 2.
= 4 × 2 × 2 × 2.
= 8 × 2 × 2.
= 16 × 2.
= 32.`,
    passage: null
  },
  {
    id: 108,
    question: `The median of the numbers 3, 7, 9, 11, 15 is:`,
    options: [`8`, `9`, `10`, `7`],
    correct: 1,
    explanation: `The data is already in ascending order: 3, 7, 9, 11, 15.
Count = 5 (odd number).
Median = middle value = 3rd term.
Median = 9.`,
    passage: null
  },
  {
    id: 109,
    question: `If the ratio of two numbers is 5:7 and their difference is 14, the smaller number is:`,
    options: [`35`, `25`, `30`, `40`],
    correct: 0,
    explanation: `Let the two numbers be 5x and 7x.
7x − 5x = 14.
2x = 14.
x = 7.
Smaller number = 5x = 5 × 7 = 35.
Larger number = 7x = 7 × 7 = 49.`,
    passage: null
  },
  {
    id: 110,
    question: `The value of 15 × 12 is:`,
    options: [`160`, `170`, `180`, `200`],
    correct: 2,
    explanation: `15 × 12:
= (15 × 10) + (15 × 2).
= 150 + 30.
= 180.`,
    passage: null
  },
  {
    id: 111,
    question: `If a number is increased by 50% and becomes 75, the original number is:`,
    options: [`40`, `45`, `55`, `50`],
    correct: 3,
    explanation: `Let the original number = x.
After 50% increase: 1.50x = 75.
x = 75 ÷ 1.50.
x = 50.
Check: 50% of 50 = 25. 50 + 25 = 75. ✓`,
    passage: null
  },
  {
    id: 112,
    question: `The perimeter of a circle with radius 7 (π = 22/7) is:`,
    options: [`44`, `22`, `66`, `88`],
    correct: 0,
    explanation: `Circumference of a circle = 2πr.
r = 7, π = 22/7.
= 2 × (22/7) × 7.
= 2 × 22.
= 44 units.`,
    passage: null
  },
  {
    id: 113,
    question: `If 8 pencils cost Rs.64, the cost of one pencil is:`,
    options: [`6`, `8`, `7`, `9`],
    correct: 1,
    explanation: `Cost of 1 pencil = 64 ÷ 8 = Rs. 8.`,
    passage: null
  },
  {
    id: 114,
    question: `What is the next number? 1, 4, 9, 16, 25, ?`,
    options: [`30`, `32`, `40`, `36`],
    correct: 3,
    explanation: `The sequence is perfect squares:
1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25.
Next term = 6² = 36.`,
    passage: null
  },
  {
    id: 115,
    question: `The simple interest on Rs.2000 at 10% for 1 year is:`,
    options: [`100`, `200`, `150`, `250`],
    correct: 1,
    explanation: `SI = P × R × T ÷ 100.
P = 2000, R = 10%, T = 1 year.
SI = 2000 × 10 × 1 ÷ 100.
= 20000 ÷ 100.
= Rs. 200.`,
    passage: null
  },
  {
    id: 116,
    question: `If the sum of two numbers is 50 and one is 20, the other is:`,
    options: [`25`, `35`, `30`, `40`],
    correct: 2,
    explanation: `Total = 50.
One number = 20.
Other number = 50 − 20 = 30.`,
    passage: null
  },
  {
    id: 117,
    question: `The value of (9 × 8) + (6 × 5) is:`,
    options: [`82`, `92`, `112`, `102`],
    correct: 3,
    explanation: `9 × 8 = 72.
6 × 5 = 30.
72 + 30 = 102.`,
    passage: null
  },
  {
    id: 118,
    question: `If 12% of a number is 24, the number is:`,
    options: [`200`, `180`, `220`, `240`],
    correct: 0,
    explanation: `Let the number = x.
0.12x = 24.
x = 24 ÷ 0.12.
x = 200.
Check: 12% of 200 = 0.12 × 200 = 24. ✓`,
    passage: null
  },
  {
    id: 119,
    question: `The square root of 196 is:`,
    options: [`12`, `13`, `14`, `15`],
    correct: 2,
    explanation: `14 × 14 = 196. ✓
So √196 = 14.`,
    passage: null
  },
  {
    id: 120,
    question: `The average of 6, 8, 10, 12, 14 is:`,
    options: [`9`, `8`, `11`, `10`],
    correct: 3,
    explanation: `Sum = 6 + 8 + 10 + 12 + 14 = 50.
Count = 5.
Average = 50 ÷ 5 = 10.`,
    passage: null
  },
  {
    id: 121,
    question: `If the ratio of two numbers is 4:9 and their sum is 65, the larger number is:`,
    options: [`45`, `40`, `50`, `55`],
    correct: 0,
    explanation: `4x + 9x = 13x.
13x = 65.
x = 5.
Larger number = 9x = 9 × 5 = 45.`,
    passage: null
  },
  {
    id: 122,
    question: `A sum of Rs. 5000 is invested at 8% simple interest per annum. What is the total amount after 3 years?`,
    options: [`Rs. 6000`, `Rs. 6200`, `Rs. 5800`, `Rs. 6500`],
    correct: 1,
    explanation: `Simple Interest = P × R × T ÷ 100
= 5000 × 8 × 3 ÷ 100
= 120000 ÷ 100
= Rs. 1200.
Total amount = Principal + Interest
= 5000 + 1200
= Rs. 6200.`,
    passage: null
  },
  {
    id: 123,
    question: `If a man walks 4 km in 40 minutes, his speed per hour is:`,
    options: [`5 km/h`, `6 km/h`, `7 km/h`, `8 km/h`],
    correct: 1,
    explanation: `4 km in 40 minutes.
Speed = Distance ÷ Time.
Convert time to hours: 40 min = 40/60 hours.
Speed = 4 ÷ (40/60).
= 4 × (60/40).
= 4 × 1.5.
= 6 km/h.`,
    passage: null
  },
  {
    id: 124,
    question: `The value of 7³ is:`,
    options: [`343`, `243`, `256`, `512`],
    correct: 0,
    explanation: `7³ = 7 × 7 × 7.
= 49 × 7.
= 343.`,
    passage: null
  },
  {
    id: 125,
    question: `The HCF of 18 and 30 is:`,
    options: [`3`, `9`, `6`, `12`],
    correct: 2,
    explanation: `Factors of 18: 1, 2, 3, 6, 9, 18.
Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30.
Common factors: 1, 2, 3, 6.
Highest Common Factor = 6.`,
    passage: null
  },
  {
    id: 126,
    question: `If a number is divided by 4 and the result is 9, the number is:`,
    options: [`32`, `44`, `40`, `36`],
    correct: 3,
    explanation: `Number ÷ 4 = 9.
Number = 9 × 4 = 36.`,
    passage: null
  },
  {
    id: 127,
    question: `The next number is: 2, 5, 10, 17, 26, ?`,
    options: [`37`, `33`, `35`, `39`],
    correct: 0,
    explanation: `Differences:
5 − 2 = 3.
10 − 5 = 5.
17 − 10 = 7.
26 − 17 = 9.
Pattern: differences increase by 2.
Next difference = 11.
Next term = 26 + 11 = 37.`,
    passage: null
  },
  {
    id: 128,
    question: `The value of (100 − 25) × 2 is:`,
    options: [`100`, `120`, `150`, `200`],
    correct: 2,
    explanation: `(100 − 25) × 2:
First, brackets: 100 − 25 = 75.
Then multiply: 75 × 2 = 150.`,
    passage: null
  },
  {
    id: 129,
    question: `If a shopkeeper gives 10% discount on Rs.500, the discount amount is:`,
    options: [`40`, `45`, `55`, `50`],
    correct: 3,
    explanation: `Discount = 10% of Rs. 500.
= (10 ÷ 100) × 500.
= 0.10 × 500.
= Rs. 50.`,
    passage: null
  },
  {
    id: 130,
    question: `The cube root of 216 is:`,
    options: [`6`, `4`, `5`, `7`],
    correct: 0,
    explanation: `6 × 6 × 6 = 216.
So ∛216 = 6.`,
    passage: null
  },
  {
    id: 131,
    question: `If a number increases from 80 to 100, the percentage increase is:`,
    options: [`20%`, `22%`, `25%`, `30%`],
    correct: 2,
    explanation: `Increase = 100 − 80 = 20.
Percentage increase = (Increase ÷ Original) × 100.
= (20 ÷ 80) × 100.
= 0.25 × 100.
= 25%.`,
    passage: null
  },
  {
    id: 132,
    question: `The sum of angles in a quadrilateral is:`,
    options: [`180°`, `270°`, `540°`, `360°`],
    correct: 3,
    explanation: `A quadrilateral has 4 sides.
Sum of interior angles = (n − 2) × 180, where n = number of sides.
= (4 − 2) × 180.
= 2 × 180.
= 360°.`,
    passage: null
  },
  {
    id: 133,
    question: `If 3x = 27, x equals:`,
    options: [`9`, `6`, `8`, `7`],
    correct: 0,
    explanation: `3x = 27.
x = 27 ÷ 3.
x = 9.`,
    passage: null
  },
  {
    id: 134,
    question: `The value of 16² is:`,
    options: [`196`, `256`, `225`, `289`],
    correct: 1,
    explanation: `16² = 16 × 16.
= 256.`,
    passage: null
  },
  {
    id: 135,
    question: `Two pipes A and B can fill a tank in 10 hours and 15 hours respectively. If both are opened together, in how many hours will the tank be full?`,
    options: [`4 hours`, `6 hours`, `5 hours`, `8 hours`],
    correct: 1,
    explanation: `The series multiplies by 3 each time:
5, 15, 45, 135, ?
Next term = 135 × 3 = 405.`,
    passage: null
  },
  {
    id: 136,
    question: `If 4 men finish work in 6 days, 8 men will take:`,
    options: [`3`, `2`, `4`, `5`],
    correct: 0,
    explanation: `Workers and time are inversely proportional.
Total work = 4 men × 6 days = 24 units.
With 8 men:
Days = 24 ÷ 8 = 3 days.`,
    passage: null
  },
  {
    id: 137,
    question: `The value of (12 × 5) − (8 × 4) is:`,
    options: [`24`, `20`, `28`, `32`],
    correct: 2,
    explanation: `12 × 5 = 60.
8 × 4 = 32.
60 − 32 = 28.`,
    passage: null
  },
  {
    id: 138,
    question: `If 25% of a number is 50, the number is:`,
    options: [`100`, `150`, `250`, `200`],
    correct: 3,
    explanation: `25% of the number = 50.
(1/4) × number = 50.
Number = 50 × 4.
Number = 200.`,
    passage: null
  },
  {
    id: 139,
    question: `The average of 20, 25, 30, 35 is:`,
    options: [`27.5`, `25`, `28`, `30`],
    correct: 0,
    explanation: `Sum = 20 + 25 + 30 + 35 = 110.
Count = 4.
Average = 110 ÷ 4 = 27.5.`,
    passage: null
  },
  {
    id: 140,
    question: `The perimeter of a rectangle with length 14 and width 6 is:`,
    options: [`30`, `35`, `40`, `45`],
    correct: 2,
    explanation: `Perimeter = 2 × (Length + Width).
= 2 × (14 + 6).
= 2 × 20.
= 40 cm.`,
    passage: null
  },
  {
    id: 141,
    question: `The value of 11² is:`,
    options: [`111`, `121`, `132`, `144`],
    correct: 1,
    explanation: `11² = 11 × 11 = 121.`,
    passage: null
  },
  {
    id: 142,
    question: `The next number is: 1, 3, 6, 10, 15, ?`,
    options: [`18`, `21`, `20`, `24`],
    correct: 1,
    explanation: `The sequence uses triangular numbers.
Differences: +2, +3, +4, +5, +6...
1, 3, 6, 10, 15, ?
Next difference = +6.
Next term = 15 + 6 = 21.`,
    passage: null
  },
  {
    id: 143,
    question: `If a car travels 150 km in 3 hours, its speed is:`,
    options: [`40 km/h`, `45 km/h`, `50 km/h`, `55 km/h`],
    correct: 2,
    explanation: `Speed = Distance ÷ Time.
= 150 ÷ 3.
= 50 km/h.`,
    passage: null
  },
  {
    id: 144,
    question: `The value of (18 + 12) ÷ 6 is:`,
    options: [`4`, `7`, `6`, `5`],
    correct: 3,
    explanation: `(18 + 12) ÷ 6:
First, brackets: 18 + 12 = 30.
Then divide: 30 ÷ 6 = 5.`,
    passage: null
  },
  {
    id: 145,
    question: `The LCM of 9 and 12 is:`,
    options: [`24`, `36`, `30`, `48`],
    correct: 1,
    explanation: `LCM of 9 and 12:
Multiples of 9: 9, 18, 27, 36...
Multiples of 12: 12, 24, 36...
Smallest common multiple = 36.`,
    passage: null
  },
  {
    id: 146,
    question: `The next number is: 7, 14, 28, 56, ?`,
    options: [`84`, `96`, `112`, `120`],
    correct: 2,
    explanation: `The series doubles each time:
7, 14, 28, 56, ?
Next term = 56 × 2 = 112.`,
    passage: null
  },
  {
    id: 147,
    question: `The value of 8³ is:`,
    options: [`256`, `384`, `640`, `512`],
    correct: 3,
    explanation: `8³ = 8 × 8 × 8.
= 64 × 8.
= 512.`,
    passage: null
  },
  {
    id: 148,
    question: `If a number decreases from 150 to 120, the percentage decrease is:`,
    options: [`15%`, `20%`, `18%`, `25%`],
    correct: 1,
    explanation: `Decrease = 150 − 120 = 30.
Percentage decrease = (Decrease ÷ Original) × 100.
= (30 ÷ 150) × 100.
= 0.20 × 100.
= 20%.`,
    passage: null
  },
  {
    id: 149,
    question: `The area of a square with side 9 cm is:`,
    options: [`72`, `81`, `90`, `99`],
    correct: 1,
    explanation: `Area of a square = side².
= 9².
= 9 × 9.
= 81 cm².`,
    passage: null
  },
  {
    id: 150,
    question: `If 6 workers complete work in 8 days, how many days will 3 workers take?`,
    options: [`12`, `14`, `18`, `16`],
    correct: 3,
    explanation: `Workers and time are inversely proportional.
Total work = 6 workers × 8 days = 48 units.
With 3 workers:
Days = 48 ÷ 3 = 16 days.`,
    passage: null
  },
  {
    id: 151,
    question: `A shopkeeper marks his goods 40% above cost price and then gives a 20% discount. What is his profit percentage?`,
    options: [`10%`, `12%`, `14%`, `15%`],
    correct: 1,
    explanation: `Let cost price = Rs. 100.
Marked price = 100 + 40% of 100 = Rs. 140.
Discount = 20% of 140 = Rs. 28.
Selling price = 140 − 28 = Rs. 112.
Profit = 112 − 100 = Rs. 12.
Profit % = (12/100) × 100 = 12%.`,
    passage: null
  },
  {
    id: 152,
    question: `The sum of three consecutive integers is 72. What is the middle integer?`,
    options: [`23`, `25`, `24`, `26`],
    correct: 2,
    explanation: `Let x = middle integer.
Three consecutive integers: (x−1), x, (x+1).
Sum = (x−1) + x + (x+1) = 3x.
3x = 72.
x = 72 ÷ 3.
x = 24.
The integers are 23, 24, and 25.`,
    passage: null
  },
  {
    id: 153,
    question: `If a train travels 180 km in 2.5 hours, what is its average speed?`,
    options: [`60 km/h`, `65 km/h`, `70 km/h`, `72 km/h`],
    correct: 3,
    explanation: `Speed = Distance ÷ Time.
Distance = 180 km.
Time = 2.5 hours.
Speed = 180 ÷ 2.5.
= 72 km/h.`,
    passage: null
  },
  {
    id: 154,
    question: `The value of (5² + 7²) is:`,
    options: [`64`, `74`, `70`, `81`],
    correct: 1,
    explanation: `5² = 25.
7² = 49.
5² + 7² = 25 + 49 = 74.`,
    passage: null
  },
  {
    id: 155,
    question: `If the ratio of two numbers is 4 : 9 and their sum is 65, the smaller number is:`,
    options: [`30`, `25`, `20`, `35`],
    correct: 2,
    explanation: `Let the two numbers be 4x and 9x.
4x + 9x = 13x.
13x = 65.
x = 5.
Smaller number = 4x = 4 × 5 = 20.
Larger number = 9x = 9 × 5 = 45.`,
    passage: null
  },
  {
    id: 156,
    question: `The probability of getting an even number when a fair die is rolled is:`,
    options: [`1/3`, `1/2`, `2/3`, `1/6`],
    correct: 1,
    explanation: `A standard die has 6 outcomes: {1, 2, 3, 4, 5, 6}.
Even numbers = {2, 4, 6} = 3 outcomes.
Probability = Favourable outcomes ÷ Total outcomes.
= 3 ÷ 6.
= 1/2.`,
    passage: null
  },
  {
    id: 157,
    question: `The value of 12² − 8² is:`,
    options: [`64`, `96`, `80`, `112`],
    correct: 2,
    explanation: `12² = 144. 8² = 64.
12² − 8² = 144 − 64 = 80.`,
    passage: null
  },
  {
    id: 158,
    question: `If 8 workers complete a job in 15 days, how many days will 12 workers take?`,
    options: [`8`, `10`, `12`, `15`],
    correct: 1,
    explanation: `Workers and time are inversely proportional.
Total work = 8 workers × 15 days = 120 units.
With 12 workers:
Days = 120 ÷ 12 = 10 days.`,
    passage: null
  },
  {
    id: 159,
    question: `The next number in the sequence is: 2, 6, 12, 20, 30, ?`,
    options: [`36`, `40`, `48`, `42`],
    correct: 3,
    explanation: `Differences between terms:
6 − 2 = 4.
12 − 6 = 6.
20 − 12 = 8.
30 − 20 = 10.
Pattern: differences increase by 2.
Next difference = 10 + 2 = 12.
Next term = 30 + 12 = 42.`,
    passage: null
  },
  {
    id: 160,
    question: `If the perimeter of a rectangle is 50 and its length is 15, the width is:`,
    options: [`12`, `10`, `15`, `20`],
    correct: 1,
    explanation: `Perimeter = 2(L + W).
50 = 2(15 + W).
25 = 15 + W.
W = 25 − 15.
W = 10.`,
    passage: null
  },
  {
    id: 161,
    question: `The cube root of 343 is:`,
    options: [`5`, `6`, `7`, `8`],
    correct: 2,
    explanation: `7 × 7 × 7 = 343.
So ∛343 = 7.`,
    passage: null
  },
  {
    id: 162,
    question: `If the price of an item increases from 250 to 300, the percentage increase is:`,
    options: [`15%`, `18%`, `25%`, `20%`],
    correct: 3,
    explanation: `Increase = 300 − 250 = 50.
Percentage increase = (Increase ÷ Original) × 100.
= (50 ÷ 250) × 100.
= 0.20 × 100.
= 20%.`,
    passage: null
  },
  {
    id: 163,
    question: `The average of 14, 18, 20, and 28 is:`,
    options: [`18`, `20`, `19`, `22`],
    correct: 1,
    explanation: `Sum = 14 + 18 + 20 + 28 = 80.
Count = 4.
Average = 80 ÷ 4 = 20.`,
    passage: null
  },
  {
    id: 164,
    question: `The value of (18 × 5) − (9 × 6) is:`,
    options: [`24`, `42`, `36`, `48`],
    correct: 2,
    explanation: `18 × 5 = 90.
9 × 6 = 54.
90 − 54 = 36.`,
    passage: null
  },
  {
    id: 165,
    question: `If a number is decreased by 30% and becomes 70, the original number is:`,
    options: [`90`, `95`, `110`, `100`],
    correct: 3,
    explanation: `After 30% decrease, 70% of the number remains.
0.70 × x = 70.
x = 70 ÷ 0.70.
x = 100.
Check: 30% of 100 = 30. 100 − 30 = 70. ✓`,
    passage: null
  },
  {
    id: 166,
    question: `The next number in the sequence is: 1, 4, 10, 22, 46, ?`,
    options: [`80`, `94`, `88`, `98`],
    correct: 1,
    explanation: `Differences: 3, 6, 12, 24 , each difference doubles. each difference doubles.
Next difference = 24 × 2 = 48.
Next term = 46 + 48 = 94.`,
    passage: null
  },
  {
    id: 167,
    question: `If the area of a square is 144 cm², the side length is:`,
    options: [`10`, `12`, `11`, `14`],
    correct: 1,
    explanation: `Area = side².
side² = 144.
side = √144.
side = 12 cm.`,
    passage: null
  },
  {
    id: 168,
    question: `If 3/5 of a number equals 27, the number is:`,
    options: [`35`, `40`, `50`, `45`],
    correct: 3,
    explanation: `(3/5) × x = 27.
x = 27 × (5/3).
x = (27 × 5) ÷ 3.
x = 135 ÷ 3.
x = 45.`,
    passage: null
  },
  {
    id: 169,
    question: `The sum of the interior angles of a pentagon is:`,
    options: [`360°`, `540°`, `450°`, `720°`],
    correct: 1,
    explanation: `Formula: Sum of interior angles = (n − 2) × 180°.
For a pentagon, n = 5.
= (5 − 2) × 180.
= 3 × 180.
= 540°.`,
    passage: null
  },
  {
    id: 170,
    question: `If a car travels 150 km at 50 km/h, how long will the journey take?`,
    options: [`2 hours`, `2.5 hours`, `3 hours`, `4 hours`],
    correct: 2,
    explanation: `Time = Distance ÷ Speed.
= 150 ÷ 50.
= 3 hours.`,
    passage: null
  },
  {
    id: 171,
    question: `The square root of 506.25 is:`,
    options: [`21.5`, `22.5`, `23.0`, `22.0`],
    correct: 1,
    explanation: `Convert to remove the decimal:
506.25 = 50625 ÷ 100.
√506.25 = √50625 ÷ √100.
√50625 = 225.
√100 = 10.
√506.25 = 225 ÷ 10 = 22.5.`,
    passage: null
  },
  {
    id: 172,
    question: `If 12% of a number is 48, the number is:`,
    options: [`360`, `400`, `380`, `420`],
    correct: 1,
    explanation: `Let the number = x.
0.12 × x = 48.
x = 48 ÷ 0.12.
x = 400.
Check: 12% of 400 = 0.12 × 400 = 48. ✓`,
    passage: null
  },
  {
    id: 173,
    question: `Factorize the expression x² − 5x + 6:`,
    options: [`(x+2)(x+3)`, `(x−1)(x−6)`, `(x−2)(x−3)`, `(x+1)(x+6)`],
    correct: 2,
    explanation: `We need two numbers whose product = 6 and sum = −5.
Those numbers are: −2 and −3.
Check: (−2) × (−3) = 6 ✓ and (−2) + (−3) = −5 ✓.
So: x² − 5x + 6 = (x − 2)(x − 3).`,
    passage: null
  },
  {
    id: 174,
    question: `If x + 1/x = 3, find x² + 1/x²:`,
    options: [`5`, `11`, `9`, `7`],
    correct: 3,
    explanation: `Square both sides of (x + 1/x) = 3:
(x + 1/x)² = x² + 2 + 1/x².
9 = x² + 1/x² + 2.
x² + 1/x² = 9 − 2.
x² + 1/x² = 7.`,
    passage: null
  },
  {
    id: 175,
    question: `Which of the following is a prime number?`,
    options: [`39`, `41`, `45`, `49`],
    correct: 1,
    explanation: `A prime number has exactly two factors: 1 and itself.
39 = 3 × 13 (not prime).
45 = 5 × 9 (not prime).
49 = 7 × 7 (not prime).
41 has no factors other than 1 and 41. It is prime.`,
    passage: null
  },
  {
    id: 176,
    question: `The average of the first ten natural numbers is:`,
    options: [`5`, `6`, `5.5`, `6.5`],
    correct: 2,
    explanation: `Sum of first 10 natural numbers = n(n+1) ÷ 2.
= 10 × 11 ÷ 2.
= 110 ÷ 2.
= 55.
Average = 55 ÷ 10 = 5.5.`,
    passage: null
  },
  {
    id: 177,
    question: `If a man covers 240 km in 4 hours, what is his speed?`,
    options: [`50 km/h`, `55 km/h`, `65 km/h`, `60 km/h`],
    correct: 3,
    explanation: `Speed = Distance ÷ Time.
= 240 ÷ 4.
= 60 km/h.`,
    passage: null
  },
  {
    id: 178,
    question: `All the factors of 36 are:`,
    options: [`2,3,4,6,12,18`, `1,2,3,4,6,9,12,18,36`, `1,3,4,6,9,12`, `1,2,4,6,8,12,36`],
    correct: 1,
    explanation: `Factors of 36 are all numbers that divide 36 exactly:
1, 2, 3, 4, 6, 9, 12, 18, 36.
Option A is missing 1, 3, 9.
Option C is missing 2, 18, 36.
Option D replaces 3 and 9 with 8, which does not divide 36.`,
    passage: null
  },
  {
    id: 179,
    question: `If 75% of a number is 150, what is the number?`,
    options: [`180`, `220`, `200`, `250`],
    correct: 2,
    explanation: `Let the number = x.
0.75 × x = 150.
x = 150 ÷ 0.75.
x = 200.
Check: 75% of 200 = 0.75 × 200 = 150. ✓`,
    passage: null
  },
  {
    id: 180,
    question: `A polynomial of degree three is called:`,
    options: [`Linear polynomial`, `Quadratic polynomial`, `Constant polynomial`, `Cubic polynomial`],
    correct: 3,
    explanation: `Degree = the highest power of the variable in the polynomial.
If the highest power is 3, it is a cubic polynomial.
Degree 1 = linear. Degree 2 = quadratic. Degree 0 = constant.`,
    passage: null
  },
  {
    id: 181,
    question: `The square root of 729 is:`,
    options: [`24`, `27`, `26`, `25`],
    correct: 1,
    explanation: `27 × 27 = 729. ✓
So √729 = 27.`,
    passage: null
  },
  {
    id: 182,
    question: `If the perimeter of a square is 64 cm, the side length is:`,
    options: [`12`, `14`, `16`, `18`],
    correct: 2,
    explanation: `Perimeter of a square = 4 × side.
4 × side = 64.
side = 64 ÷ 4.
side = 16 cm.`,
    passage: null
  },
  {
    id: 183,
    question: `The difference between the compound interest and simple interest on Rs. 1600 at 10% per annum for 2 years is:`,
    options: [`Rs. 12`, `Rs. 18`, `Rs. 16`, `Rs. 20`],
    correct: 2,
    explanation: `8 × 8 × 8:
= 64 × 8.
= (60 × 8) + (4 × 8).
= 480 + 32.
= 512.`,
    passage: null
  },
  {
    id: 184,
    question: `If 5x − 10 = 20, then x =`,
    options: [`4`, `6`, `5`, `7`],
    correct: 1,
    explanation: `5x − 10 = 20.
5x = 20 + 10.
5x = 30.
x = 30 ÷ 5.
x = 6.`,
    passage: null
  },
  {
    id: 185,
    question: `A man rows upstream at 6 km/h and downstream at 10 km/h. What is the speed of the current?`,
    options: [`1 km/h`, `2 km/h`, `3 km/h`, `4 km/h`],
    correct: 1,
    explanation: `The sequence is perfect squares:
2² = 4, 3² = 9, 4² = 16, 5² = 25.
Next term = 6² = 36.`,
    passage: null
  },
  {
    id: 186,
    question: `The value of (15 × 6) − (12 × 5) is:`,
    options: [`20`, `25`, `35`, `30`],
    correct: 3,
    explanation: `15 × 6 = 90.
12 × 5 = 60.
90 − 60 = 30.`,
    passage: null
  },
  {
    id: 187,
    question: `If 9 pencils cost Rs.72, the cost of one pencil is:`,
    options: [`6`, `8`, `7`, `9`],
    correct: 1,
    explanation: `Cost of 1 pencil = 72 ÷ 9 = Rs. 8.`,
    passage: null
  },
  {
    id: 188,
    question: `In how many ways can 3 students be selected from a group of 7 students?`,
    options: [`21`, `35`, `42`, `28`],
    correct: 1,
    explanation: `11 × 11:
= (10 + 1) × (10 + 1).
= 100 + 10 + 10 + 1.
= 121.`,
    passage: null
  },
  {
    id: 189,
    question: `The sum of interior angles of a quadrilateral is:`,
    options: [`180°`, `270°`, `540°`, `360°`],
    correct: 3,
    explanation: `Sum of interior angles of a quadrilateral:
Formula = (n − 2) × 180, where n = 4.
= (4 − 2) × 180.
= 2 × 180.
= 360°.`,
    passage: null
  },
  {
    id: 190,
    question: `If a train travels 150 km in 3 hours, the speed is:`,
    options: [`40 km/h`, `50 km/h`, `45 km/h`, `55 km/h`],
    correct: 1,
    explanation: `Speed = Distance ÷ Time.
= 150 ÷ 3.
= 50 km/h.`,
    passage: null
  },
  {
    id: 191,
    question: `The surface area of a cube is 384 cm². What is the length of each side?`,
    options: [`6 cm`, `10 cm`, `8 cm`, `12 cm`],
    correct: 2,
    explanation: `Surface area of a cube = 6 × side²
6 × side² = 384
side² = 384 ÷ 6
side² = 64
side = √64
side = 8 cm.`,
    passage: null
  },
  {
    id: 192,
    question: `The average of five consecutive even integers is 24. What is the largest of these integers?`,
    options: [`26`, `32`, `30`, `28`],
    correct: 3,
    explanation: `Let the five consecutive even integers be:
x − 4, x − 2, x, x + 2, x + 4.
For consecutive values, the average equals the middle number.
Middle = 24, so x = 24.
The integers are: 20, 22, 24, 26, 28.
Largest = 28.`,
    passage: null
  },
  {
    id: 193,
    question: `A trader purchases an article for Rs.1200. He sells it after giving a 10% discount on the marked price of Rs.1500. What is his profit?`,
    options: [`Rs.100`, `Rs.150`, `Rs.200`, `Rs.250`],
    correct: 1,
    explanation: `Marked price = Rs. 1500.
Discount = 10% of 1500.
= (10 ÷ 100) × 1500.
= Rs. 150.
Selling price = 1500 − 150 = Rs. 1350.
Cost price = Rs. 1200.
Profit = 1350 − 1200 = Rs. 150.`,
    passage: null
  },
  {
    id: 194,
    question: `If a car travels the first 60 km of a journey at 30 km/h and the next 60 km at 60 km/h, what is the average speed for the entire journey?`,
    options: [`36 km/h`, `45 km/h`, `40 km/h`, `48 km/h`],
    correct: 2,
    explanation: `Time for first 60 km = 60 ÷ 30 = 2 hours.
Time for next 60 km = 60 ÷ 60 = 1 hour.
Total distance = 60 + 60 = 120 km.
Total time = 2 + 1 = 3 hours.
Average speed = 120 ÷ 3 = 40 km/h.`,
    passage: null
  },
  {
    id: 195,
    question: `A number when increased by 20% becomes 360. What will be the value of the number if it is decreased by 20% instead?`,
    options: [`300`, `260`, `280`, `240`],
    correct: 3,
    explanation: `Let the original number = x.
1.20x = 360.
x = 360 ÷ 1.20.
x = 300.
20% decrease of 300:
= 0.80 × 300.
= 240.`,
    passage: null
  },
  {
    id: 196,
    question: `The difference between the squares of two consecutive integers is 25. What is the larger integer?`,
    options: [`13`, `12`, `14`, `15`],
    correct: 0,
    explanation: `Let the two consecutive integers be n and n + 1.
(n + 1)² − n² = 25.
n² + 2n + 1 − n² = 25.
2n + 1 = 25.
2n = 24.
n = 12.
Larger integer = n + 1 = 13.`,
    passage: null
  },
  {
    id: 197,
    question: `In a class test, the average marks of 20 students were 65. Later it was discovered that one student's marks were wrongly recorded as 45 instead of 75. What is the corrected average?`,
    options: [`66`, `67`, `66.5`, `67.5`],
    correct: 2,
    explanation: `Original total = 20 × 65 = 1300.
Error: one mark recorded as 45 instead of 75.
Difference = 75 − 45 = 30.
Correct total = 1300 + 30 = 1330.
Correct average = 1330 ÷ 20 = 66.5.`,
    passage: null
  },
  {
    id: 198,
    question: `If the ratio of the ages of A and B is 4 : 5 and after 6 years the ratio becomes 5 : 6, what is the present age of A?`,
    options: [`16`, `20`, `28`, `24`],
    correct: 3,
    explanation: `Let present ages be 4x and 5x.
After 6 years: (4x + 6) ÷ (5x + 6) = 5/6.
Cross multiply: 6(4x + 6) = 5(5x + 6).
24x + 36 = 25x + 30.
36 − 30 = 25x − 24x.
x = 6.
Present ages: 4x = 24 and 5x = 30.
Sum of present ages = 24 + 30 = 54.`,
    passage: null
  },
  {
    id: 199,
    question: `A tank can be filled by pipe A in 12 hours and emptied by pipe B in 18 hours. If both pipes are opened together, how long will it take to fill the tank?`,
    options: [`28 hours`, `36 hours`, `30 hours`, `40 hours`],
    correct: 1,
    explanation: `Filling rate of Pipe A = 1/12 tank per hour.
Emptying rate of Pipe B = 1/18 tank per hour.
Net rate = 1/12 − 1/18.
LCM of 12 and 18 = 36.
= 3/36 − 2/36.
= 1/36 tank per hour.
Time to fill = 36 hours.`,
    passage: null
  },
  {
    id: 200,
    question: `The sum of three numbers is 120. The second number is twice the first, and the third is three times the first. What is the smallest number?`,
    options: [`15`, `24`, `20`, `30`],
    correct: 2,
    explanation: `Let the first number = x.
Second = 2x.
Third = 3x.
x + 2x + 3x = 120.
6x = 120.
x = 20.
The three numbers are 20, 40, and 60.
Smallest number = 20.`,
    passage: null
  }
];
window['NTS_QUANT'] = NTS_QUANT;