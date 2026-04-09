window.NTS_MOCK2_PASSAGES = {
  "p9": {
    "range": [9, 10],
    "label": "Passage for Q9–10",
    "text": "The development of steam-powered railways in the nineteenth century transformed the economic and social landscape of industrialising nations. Before railways, the movement of goods and people was slow and costly, limiting trade and human migration to relatively short distances. The introduction of the locomotive engine allowed raw materials to be transported rapidly from mines and farms to factories and cities, dramatically reducing costs and stimulating industrial growth. Railways also accelerated urbanisation, drawing rural populations toward industrial centres where new employment opportunities existed. Within decades, railway networks had reshaped the geography of commerce, communication, and community across entire continents."
  },
  "p11": {
    "range": [11, 15],
    "label": "Passage for Q11–15",
    "text": "Six people P, Q, R, S, T, and U are to be seated in six consecutive positions numbered 1 to 6. The following conditions apply: P must always be seated before Q. U must be seated immediately after T. R cannot be in the first or last position. S must always occupy position 4."
  },
  "p16": {
    "range": [16, 18],
    "label": "Passage for Q16–18",
    "text": "Five teams A, B, C, D, and E are scheduled to present at an annual medical conference on five consecutive working days, Monday through Friday, with exactly one team presenting per day. The following constraints apply: Team A cannot present on Monday. Team B must present on the day immediately before Team C. Team D cannot present on Wednesday. Team E must present on either Monday or Friday. Team C cannot present on Friday."
  },
  "p19": {
    "range": [19, 20],
    "label": "Passage for Q19–20",
    "text": "Five athletes P, Q, R, S, and T compete in a sprint race and finish in five distinct positions numbered 1st (fastest) through 5th (slowest). The following rules determine the valid finishing orders: P always finishes before Q. S finishes immediately after R. T does not finish first or last."
  }
};

window.NTS_MOCK2_DATA = [
  {
    "num": 1,
    "q": "By the time we reached the station, the train _____ already _____.",
    "opts": [
      "had / departed",
      "has / departed",
      "would have / departed",
      "will have / departed"
    ],
    "ans": 0,
    "exp": "The sentence describes an action completed before a specific past moment, requiring the past perfect tense: 'had departed.' B uses present perfect, which is inappropriate for a past reference point. C and D use future constructions that are grammatically and contextually incorrect here." }, { "num": 2, "q": "She is very good _____ playing the violin.", "opts": [ "in", "for", "at", "with" ], "ans": 2, "exp": "The correct collocation is 'good at' when expressing proficiency or skill in an activity. 'Good in' (A) and 'good for' (B) are used in different contexts unrelated to personal skill, and 'good with' (D) refers to handling people or objects rather than performing an activity." }, { "num": 3, "q": "AUDACIOUS : TIMID ::", "opts": [ "brave : courageous", "verbose : laconic", "angry : furious", "kind : gentle" ], "ans": 1, "exp": "'Audacious' (bold) and 'timid' (fearful) are antonyms. The pair 'verbose' (using too many words) and 'laconic' (using very few words) is the only antonym pair among the options. A and C are synonym pairs showing degree rather than opposition, and D pairs two synonyms with no antonym relationship." }, { "num": 4, "q": "ERUDITE : IGNORANT ::", "opts": [ "learned : scholarly", "frugal : extravagant", "loquacious : talkative", "happy : joyful" ], "ans": 1, "exp": "'Erudite' (deeply learned) and 'ignorant' (lacking knowledge) are direct antonyms. 'Frugal' (spending sparingly) and 'extravagant' (spending excessively) mirror this antonym relationship. A and C are synonym pairs, and D presents two synonyms with no contrastive relationship." }, { "num": 5, "q": "Which of the following is the ANTONYM of EPHEMERAL?", "opts": [ "fleeting", "eternal", "frequent", "tangible" ], "ans": 1, "exp": "'Ephemeral' means lasting for a very short time. Its antonym is 'eternal,' meaning lasting forever. A (fleeting) is a synonym, not an antonym. C (frequent) refers to repetition and has no antonym relationship here. D (tangible) means real and perceptible, which is unrelated." }, { "num": 6, "q": "Which of the following words is closest in meaning to MAGNANIMOUS?", "opts": ["benevolent","frugal","obstinate","vindictive"], "ans": 0, "exp": "MAGNANIMOUS means generous in forgiving and noble in spirit. BENEVOLENT means well-meaning and kindly, making it the closest synonym. FRUGAL means thrifty or sparing, which is unrelated. OBSTINATE means stubbornly refusing to change, which is the opposite of magnanimous in temperament. VINDICTIVE means seeking revenge, which directly contradicts the forgiving nature of magnanimity." }, { "num": 7, "q": "EXACERBATE: Which of the following is the ANTONYM (opposite in meaning)?", "opts": [ "worsen", "aggravate", "alleviate", "intensify" ], "ans": 2, "exp": "'Exacerbate' means to make a problem or situation worse. Its antonym is 'alleviate' (to reduce or relieve). A (worsen), B (aggravate), and D (intensify) are all synonyms of exacerbate. The question asks for the antonym, so the answer is C." }, { "num": 8, "q": "Which of the following is the ANTONYM of PERFIDIOUS?", "opts": ["treacherous","deceitful","steadfast","conniving"], "ans": 2, "exp": "PERFIDIOUS means deliberately faithless or deceitful, especially in betraying trust. Its antonym is STEADFAST, meaning loyal, reliable, and unwavering in commitment. TREACHEROUS and DECEITFUL are synonyms of perfidious, not opposites. CONNIVING means scheming, which also aligns with betrayal rather than opposing it." }, { "num": 9, "q": "Which inference about the railway industry can most logically be drawn from the passage?", "opts": [ "Railways became profitable only after steam power was abandoned", "Early railways were built exclusively for passenger transport", "The railway industry transformed economic geography by enabling faster movement of goods", "Railway engineers had no formal training before the 1850s" ], "ans": 2, "exp": "The passage describes how steam-powered railways allowed unprecedented movement of goods and people across vast distances, fundamentally altering trade patterns and economic geography. A is not supported; the passage does not suggest profitability depended on abandoning steam. B directly contradicts the passage's emphasis on freight. D is not addressed in the passage.",
    "passage_id": "p9"
  },
  {
    "num": 10,
    "q": "According to the passage, what was the most significant social consequence of the expansion of railways?",
    "opts": [
      "Increased rural unemployment due to mechanisation",
      "Accelerated urbanisation as populations moved toward industrial centres",
      "A reduction in the power of landowners over farming communities",
      "The elimination of horse-drawn transport within a decade"
    ],
    "ans": 1,
    "exp": "The passage explicitly identifies accelerated urbanisation as the primary social consequence, as railways made it easier for rural populations to relocate to industrial cities seeking employment. A is mentioned as a concern but not identified as the most significant social consequence. C and D are not supported by the passage.",
    "passage_id": "p9"
  },
  {
    "num": 11,
    "q": "Which of the following arrangements of all six people satisfies all the given conditions?",
    "opts": [
      "P, T, U, S, Q, R",
      "Q, P, R, T, S, U",
      "P, R, Q, S, T, U",
      "R, P, Q, T, S, U"
    ],
    "ans": 2,
    "exp": "Option C (P, R, Q, S, T, U) is the only valid arrangement. P is in position 1 and Q in position 3, satisfying the rule that P must come before Q. T is in position 5 and U in position 6, satisfying the rule that U must be immediately after T. R is in position 2, which is neither first nor last. S correctly occupies position 4. Option A (P, T, U, S, Q, R) places R in position 6, which is the last position, directly violating the rule that R cannot be first or last. Option B (Q, P, R, T, S, U) places Q before P and puts S in position 5 rather than 4. Option D (R, P, Q, T, S, U) places R in position 1, again violating the end restriction, and S is not in position 4.",
    "passage_id": "p11"
  },
  {
    "num": 12,
    "q": "If R is placed in position 3, which of the following CANNOT be true?",
    "opts": ["P is in position 1","Q is in position 6","U is in position 1","T is in position 5"],
    "ans": 2,
    "exp": "With R fixed at position 3 and S fixed at position 4 by the rules, two valid arrangements exist: P Q R S T U, and T U R S P Q. In both, U is always paired immediately after T; neither arrangement ever places U in position 1. Therefore U in position 1 cannot be true. Option A (P in position 1) is possible in the arrangement P Q R S T U. Option B (Q in position 6) is possible in the arrangement T U R S P Q. Option D (T in position 5) is possible in the arrangement P Q R S T U.",
    "passage_id": "p11"
  },
  {
    "num": 13,
    "q": "Which of the following statements about the seating arrangement is always true?",
    "opts": ["R is always in position 2","S is always in position 4","P is always in position 1","T is always in position 5"],
    "ans": 1,
    "exp": "The rules explicitly state that S must always occupy position 4. This is a fixed constraint that applies to every valid arrangement without exception, making option B always true. Option A is false: R can appear in positions 2, 3, or 5, not exclusively position 2. Option C is false: P can be in position 1 or later depending on where T and U are placed. Option D is false: T can appear in positions 1, 5, or other slots depending on the arrangement.",
    "passage_id": "p11"
  },
  {
    "num": 14,
    "q": "If T is placed in position 1, which of the following must immediately follow T?",
    "opts": [
      "P",
      "Q",
      "U",
      "R"
    ],
    "ans": 2,
    "exp": "The rule states that U must be placed immediately after T in every valid arrangement. If T is in position 1, then U must occupy position 2. Among the answer options, U (C) is the only person who must immediately follow T by rule. P, Q, and R have no such immediate adjacency requirement relative to T.",
    "passage_id": "p11"
  },
  {
    "num": 15,
    "q": "How many valid arrangements exist if P must be in position 1?",
    "opts": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": 2,
    "exp": "With P fixed at position 1 and S fixed at position 4, the remaining people Q, R, T, and U fill positions 2, 3, 5, and 6. T and U must be consecutive with U immediately after T, giving valid T-U pairs at positions (2,3) or (5,6). R cannot be at position 1 or 6. Enumerating: (1) P Q R S T U, with R at position 3 and T-U at positions 5-6. (2) P R Q S T U, with R at position 2 and T-U at positions 5-6. (3) P T U S R Q, with T-U at positions 2-3 and R at position 5. This gives exactly 3 valid arrangements.",
    "passage_id": "p11"
  },
  {
    "num": 16,
    "q": "Which of the following is a valid presentation schedule from Monday to Friday?",
    "opts": ["E, D, C, B, A","E, B, C, A, D","E, A, C, B, D","A, E, B, C, D"],
    "ans": 1,
    "exp": "Option B (E, B, C, A, D) is the only valid schedule. E presents on Monday, satisfying the rule that E must present on Monday or Friday. B presents on Tuesday immediately before C on Wednesday, satisfying the B-before-C constraint. A presents on Thursday, which is neither Monday nor Friday, as required. D presents on Friday, and D is not on Wednesday, satisfying that constraint. Option A (E, D, C, B, A) has C on Wednesday and B on Thursday, meaning B comes after C rather than immediately before it. Option C (E, A, C, B, D) again places C before B, violating the immediate ordering rule. Option D (A, E, B, C, D) places A on Monday, which is directly forbidden by the rules.",
    "passage_id": "p16"
  },
  {
    "num": 17,
    "q": "If team E presents on Friday and team D presents on Thursday, which team must present on Monday?",
    "opts": ["Team A","Team B","Team C","Team D"],
    "ans": 1,
    "exp": "With E on Friday and D on Thursday, the remaining teams A, B, and C must occupy Monday, Tuesday, and Wednesday. A cannot present on Monday, so A must be on Tuesday or Wednesday. B must present immediately before C, and C cannot be on Friday; with Friday taken by E, the only consecutive pair available in the Mon-Wed block is Monday-Tuesday. Therefore B is on Monday and C is on Tuesday, which forces A onto Wednesday. This gives the unique schedule: B, C, A, D, E. Team B must present on Monday.",
    "passage_id": "p16"
  },
  {
    "num": 18,
    "q": "Which of the following statements is always true regardless of the schedule?",
    "opts": [
      "Team A presents on Wednesday",
      "Team D presents on Thursday",
      "Team B presents before Team C",
      "Team E presents on Monday"
    ],
    "ans": 2,
    "exp": "Rule 2 explicitly states that B must present immediately before C in every valid arrangement without exception. A (A on Wednesday) varies across valid schedules. B (D on Thursday) is not a fixed requirement; D can be on Thursday or Friday. D (E on Monday) is conditional; E can also be on Friday according to rule 4.",
    "passage_id": "p16"
  },
  {
    "num": 19,
    "q": "Five athletes P, Q, R, S, T finish a race in positions 1st through 5th. P finishes before Q. S finishes immediately after R. T does not finish first or last. Which of the following is a valid finishing order?",
    "opts": [
      "Q, P, T, R, S",
      "P, Q, R, S, T",
      "P, R, S, T, Q",
      "R, S, P, Q, T"
    ],
    "ans": 2,
    "exp": "Option C (P 1st, R 2nd, S 3rd, T 4th, Q 5th): P is before Q (rule 1 satisfied), S is immediately after R (rule 2 satisfied), and T is in 4th position (neither first nor last, satisfying rule 3). All three rules are satisfied. Option A places Q before P, violating rule 1. Option B places T last, violating rule 3. Option D places T last, violating rule 3.",
    "passage_id": "p19"
  },
  {
    "num": 20,
    "q": "If Q finishes in 3rd position, which of the following must be true?",
    "opts": [
      "P finishes 1st or 2nd",
      "R finishes 5th",
      "S finishes 1st",
      "T finishes 4th"
    ],
    "ans": 0,
    "exp": "With Q in 3rd, P must finish before Q, meaning P must be in position 1 or 2 (the only positions ahead of 3rd). This is a necessary consequence of the P-before-Q rule and is always true when Q=3rd. B is not fixed; R can be in multiple positions. C is not required since S follows R, and R is not constrained to 4th. D (T 4th) is possible but not mandatory under all valid configurations.",
    "passage_id": "p19"
  },
  {
    "num": 21,
    "q": "What is the value of (0.1)³?",
    "opts": [
      "0.001",
      "0.01",
      "0.0001",
      "0.1"
    ],
    "ans": 0,
    "exp": "(0.1)³ = 0.1 × 0.1 × 0.1 = 0.001. Option A is correct. B (0.01) is (0.1)², C (0.0001) is (0.1)⁴, and D (0.1) is simply the base without any exponentiation applied."
  },
  {
    "num": 22,
    "q": "Zakat on silver ornaments worth Rs. 85,000 is:",
    "opts": [
      "Rs. 2,125",
      "Rs. 2,000",
      "Rs. 1,700",
      "Rs. 2,550"
    ],
    "ans": 0,
    "exp": "Zakat is 2.5% of total wealth. 2.5/100 × 85,000 = 2,125. Option A gives the exact value. B (2,000) would be approximately 2.35%, C (1,700) would be 2%, and D (2,550) would be 3%. Only A represents exactly 2.5%."
  },
  {
    "num": 23,
    "q": "Factorize: x² + 5x + 6",
    "opts": [
      "(x+2)(x+3)",
      "(x+1)(x+6)",
      "(x−2)(x−3)",
      "(x+6)(x−1)"
    ],
    "ans": 0,
    "exp": "We need two numbers whose product is 6 and sum is 5: these are 2 and 3. So x² + 5x + 6 = (x+2)(x+3). Verify: x² + 3x + 2x + 6 = x² + 5x + 6. B gives x² + 7x + 6, C gives x² − 5x + 6, and D gives x² + 5x − 6. Only A is correct."
  },
  {
    "num": 24,
    "q": "If x − 1/x = 3, then x² + 1/x² = ?",
    "opts": [
      "7",
      "9",
      "11",
      "13"
    ],
    "ans": 2,
    "exp": "Using the identity (x − 1/x)² = x² + 1/x² − 2: substituting gives 9 = x² + 1/x² − 2, so x² + 1/x² = 11. Option C is correct. A (7) and B (9) result from forgetting to add 2, and D (13) from adding 4 instead of 2."
  },
  {
    "num": 25,
    "q": "A shopkeeper marks an item at Rs. 1500 and sells it at a 15% discount. What is the selling price?",
    "opts": [
      "Rs. 1200",
      "Rs. 1250",
      "Rs. 1275",
      "Rs. 1350"
    ],
    "ans": 2,
    "exp": "15% of 1500 = 225. Selling price = 1500 − 225 = 1275. Option C is correct. A reflects a 20% discount, B reflects approximately a 16.7% discount, and D reflects only a 10% discount."
  },
  {
    "num": 26,
    "q": "The sum of first five prime numbers is:",
    "opts": [
      "26",
      "28",
      "29",
      "18"
    ],
    "ans": 1,
    "exp": "The first five prime numbers are 2, 3, 5, 7, and 11. Their sum = 2+3+5+7+11 = 28. Option B is correct. A (26) is incorrect, C (29) is incorrect, and D (18) represents only the first four primes."
  },
  {
    "num": 27,
    "q": "If the ratio of two numbers is 4:7 and their difference is 18, what is the smaller number?",
    "opts": [
      "24",
      "42",
      "18",
      "12"
    ],
    "ans": 0,
    "exp": "Let the numbers be 4x and 7x. Their difference: 7x − 4x = 3x = 18, so x = 6. The smaller number = 4x = 24. Option A is correct. B (42) is the larger number, C and D result from incorrect algebraic manipulation."
  },
  {
    "num": 28,
    "q": "A car travels 120 km in 2 hours and then 90 km in 3 hours. What is the average speed for the whole journey?",
    "opts": [
      "42 km/h",
      "42.5 km/h",
      "44 km/h",
      "45 km/h"
    ],
    "ans": 0,
    "exp": "Total distance = 120 + 90 = 210 km. Total time = 2 + 3 = 5 hours. Average speed = 210/5 = 42 km/h. Option A is correct. B, C, and D arise from incorrectly averaging the two individual speeds, which gives a misleading result."
  },
  {
    "num": 29,
    "q": "Usman scored 65% marks in an exam of 200 total marks. How many marks did he score?",
    "opts": [
      "120",
      "130",
      "140",
      "125"
    ],
    "ans": 1,
    "exp": "65% of 200 = 0.65 × 200 = 130. Option B is correct. A (120) represents 60%, C (140) represents 70%, and D (125) represents 62.5%. None of these match 65%."
  },
  {
    "num": 30,
    "q": "If 3x + 9 = 0, what is the value of x?",
    "opts": [
      "−3",
      "3",
      "−9",
      "9"
    ],
    "ans": 0,
    "exp": "3x + 9 = 0 → 3x = −9 → x = −3. Option A is correct. B (3) satisfies 3x − 9 = 0, C (−9) is the constant rather than the solution, and D (9) satisfies 3x − 27 = 0."
  },
  {
    "num": 31,
    "q": "The normal arterial blood pH is:",
    "opts": [
      "7.25–7.30",
      "7.35–7.45",
      "7.45–7.55",
      "7.20–7.25"
    ],
    "ans": 1,
    "exp": "Normal arterial blood pH is maintained between 7.35 and 7.45 by buffer systems, the respiratory system, and the kidneys. Values below 7.35 define acidosis and above 7.45 define alkalosis, as detailed in Guyton's Medical Physiology. A and D represent acidaemic values outside the normal range, and C represents alkalaemia."
  },
  {
    "num": 32,
    "q": "Which factor shifts the oxygen-haemoglobin dissociation curve to the right?",
    "opts": [
      "Decreased temperature",
      "Increased pH",
      "Increased CO2",
      "Decreased 2,3-BPG"
    ],
    "ans": 2,
    "exp": "Increased CO2 (the Bohr effect) reduces haemoglobin's oxygen affinity by lowering pH and directly altering haemoglobin conformation, shifting the curve rightward to facilitate oxygen delivery to metabolically active tissues. Decreased temperature (A) and increased pH (B) shift the curve left, increasing oxygen affinity. Decreased 2,3-BPG (D) also shifts left."
  },
  {
    "num": 33,
    "q": "Normal cardiac output at rest in an adult is approximately:",
    "opts": [
      "2.5 L/min",
      "5 L/min",
      "7.5 L/min",
      "10 L/min"
    ],
    "ans": 1,
    "exp": "Resting cardiac output averages 5 L/min in a healthy adult (heart rate approximately 70 bpm × stroke volume approximately 70 mL), a foundational value in Guyton's cardiovascular physiology. A (2.5 L/min) is abnormally low, suggesting heart failure. C and D exceed normal resting values and are typical only during vigorous exercise."
  },
  {
    "num": 34,
    "q": "Which hormone is responsible for regulating plasma osmolality by controlling water reabsorption?",
    "opts": [
      "Aldosterone",
      "Cortisol",
      "Antidiuretic hormone (ADH)",
      "Glucagon"
    ],
    "ans": 2,
    "exp": "ADH (vasopressin) is released from the posterior pituitary in response to increased plasma osmolality or decreased blood volume, acting on V2 receptors in the collecting duct to insert aquaporin-2 channels and increase water reabsorption. Aldosterone (A) regulates sodium retention, cortisol (B) has mineralocorticoid effects but is not the primary osmolality regulator, and glucagon (D) primarily affects glucose metabolism."
  },
  {
    "num": 35,
    "q": "The minimum volume of urine that must be excreted per day to excrete metabolic waste products is:",
    "opts": [
      "200 mL",
      "500 mL",
      "800 mL",
      "1200 mL"
    ],
    "ans": 1,
    "exp": "The obligatory urine volume is approximately 500 mL/day, representing the minimum volume required to excrete daily metabolic waste products at maximum urinary concentrating ability. Values below this result in accumulation of nitrogenous waste. This concept is a key physiological boundary taught in Guyton's renal physiology."
  },
  {
    "num": 36,
    "q": "Which phase of the cardiac cycle is longest in duration?",
    "opts": [
      "Isovolumetric contraction",
      "Rapid ejection",
      "Diastole",
      "Isovolumetric relaxation"
    ],
    "ans": 2,
    "exp": "Diastole occupies approximately 2/3 of the total cardiac cycle at rest, allowing adequate ventricular filling. At a heart rate of 70 bpm, diastole lasts approximately 0.5 seconds compared to systole's 0.3 seconds. Isovolumetric contraction (A) and relaxation (D) are very brief. Rapid ejection (B) is a subsection of systole. Diastolic duration decreases disproportionately as heart rate increases."
  },
  {
    "num": 37,
    "q": "The primary function of the loop of Henle is to:",
    "opts": [
      "Reabsorb glucose",
      "Secrete hydrogen ions",
      "Create the medullary osmotic gradient for urine concentration",
      "Filter plasma proteins"
    ],
    "ans": 2,
    "exp": "The countercurrent multiplier system in the loop of Henle generates and maintains a hyperosmotic medullary interstitium, which is essential for the production of concentrated urine under ADH influence. Glucose reabsorption (A) occurs primarily in the proximal tubule, hydrogen ion secretion (B) occurs throughout the nephron especially distally, and plasma filtration (D) occurs at the glomerulus."
  },
  {
    "num": 38,
    "q": "The nerve that supplies the diaphragm is:",
    "opts": [
      "Vagus nerve",
      "Phrenic nerve",
      "Intercostal nerve",
      "Accessory nerve"
    ],
    "ans": 1,
    "exp": "The phrenic nerve, arising from C3, C4, and C5 nerve roots, is the sole motor supply to the diaphragm and the primary sensory supply to its central portion. Gray's Anatomy for Students describes this as a clinically vital relationship summarised by the mnemonic C3, 4, 5 keeps the diaphragm alive. The vagus (A) and intercostal nerves (C) supply other thoracic structures, and the accessory nerve (D) supplies the sternocleidomastoid and trapezius."
  },
  {
    "num": 39,
    "q": "Injury to the axillary nerve most commonly occurs in fracture of the:",
    "opts": [
      "Mid-shaft humerus",
      "Medial epicondyle",
      "Surgical neck of humerus",
      "Lateral epicondyle"
    ],
    "ans": 2,
    "exp": "The axillary nerve wraps around the surgical neck of the humerus within the quadrilateral space and is at highest risk in fractures of the surgical neck or anterior shoulder dislocations, leading to loss of deltoid function and a small patch of lateral arm sensory loss. Mid-shaft fractures (A) injure the radial nerve, medial epicondyle fractures (B) injure the ulnar nerve, and lateral epicondyle pathology involves the radial nerve."
  },
  {
    "num": 40,
    "q": "The contents of the femoral triangle include all of the following EXCEPT:",
    "opts": [
      "Femoral artery",
      "Femoral vein",
      "Femoral nerve",
      "Femoral canal only, no nerve"
    ],
    "ans": 3,
    "exp": "The femoral triangle contains (lateral to medial): femoral nerve, femoral artery, femoral vein, and femoral canal with lymphatics (mnemonic NAVY: Nerve, Artery, Vein, Y-fronts/lymphatics). The femoral nerve IS present in the triangle. The statement that only the femoral canal is present without a nerve is false, making D the exception. A, B, and C are all genuine contents."
  },
  {
    "num": 41,
    "q": "The blood supply to the head of the femur in adults is primarily from:",
    "opts": [
      "Medial circumflex femoral artery",
      "Lateral circumflex femoral artery",
      "Obturator artery",
      "Inferior gluteal artery"
    ],
    "ans": 0,
    "exp": "In adults, the medial circumflex femoral artery provides the dominant blood supply to the femoral head through its retinacular branches, making it the critical vessel in neck-of-femur fractures. Disruption causes avascular necrosis of the femoral head. The obturator artery (C) via the ligamentum teres contributes minimally in adults. B and D are less significant contributors."
  },
  {
    "num": 42,
    "q": "The ureter passes beneath which structure at the pelvic brim?",
    "opts": [
      "External iliac artery",
      "Internal iliac artery",
      "Common iliac artery bifurcation",
      "Uterine artery"
    ],
    "ans": 2,
    "exp": "The ureter crosses the common iliac artery at its bifurcation into internal and external iliac arteries at the pelvic brim, a surgically important anatomical relationship. This landmark is emphasized in Snell's Clinical Anatomy and is critical during pelvic surgery to avoid ureteric injury. The uterine artery (D) crosses above the ureter within the pelvis, the 'water under the bridge' relationship."
  },
  {
    "num": 43,
    "q": "The portal vein is formed by the union of:",
    "opts": [
      "Superior mesenteric vein and splenic vein",
      "Inferior mesenteric vein and splenic vein",
      "Superior and inferior mesenteric veins",
      "Hepatic vein and splenic vein"
    ],
    "ans": 0,
    "exp": "The portal vein is formed behind the neck of the pancreas by the union of the superior mesenteric vein and the splenic vein (which has already received the inferior mesenteric vein). This is a consistently tested anatomical fact in clinical surgery and anatomy examinations. B and C describe only partial contributors, and D is incorrect as the hepatic vein drains into the inferior vena cava."
  },
  {
    "num": 44,
    "q": "Which of the following is a selective COX-2 inhibitor?",
    "opts": [
      "Aspirin",
      "Ibuprofen",
      "Celecoxib",
      "Paracetamol"
    ],
    "ans": 2,
    "exp": "Celecoxib selectively inhibits cyclo-oxygenase-2, reducing prostaglandin synthesis and inflammation while sparing the gastroprotective COX-1 enzyme, thereby lowering the risk of gastric ulcers. Aspirin (A) irreversibly inhibits both COX-1 and COX-2. Ibuprofen (B) is a non-selective NSAID. Paracetamol (D) acts centrally and does not meaningfully inhibit peripheral COX enzymes."
  },
  {
    "num": 45,
    "q": "Which drug is the first-line treatment for Helicobacter pylori eradication?",
    "opts": [
      "Omeprazole alone",
      "Triple therapy: omeprazole + amoxicillin + clarithromycin",
      "Metronidazole alone",
      "Tetracycline + metronidazole"
    ],
    "ans": 1,
    "exp": "Standard first-line H. pylori eradication uses a proton pump inhibitor combined with two antibiotics (triple therapy), most commonly omeprazole, amoxicillin, and clarithromycin for 7–14 days, achieving over 80% eradication rates. Single-agent therapy (A, C) is inadequate. Option D represents quadruple therapy components used as second-line when first-line fails."
  },
  {
    "num": 46,
    "q": "Which antihypertensive drug is contraindicated in bilateral renal artery stenosis?",
    "opts": [
      "Amlodipine",
      "Atenolol",
      "ACE inhibitors",
      "Hydralazine"
    ],
    "ans": 2,
    "exp": "ACE inhibitors dilate the efferent arteriole, reducing intraglomerular pressure. In bilateral renal artery stenosis, where both kidneys depend on angiotensin II to maintain GFR, ACE inhibitors can precipitate acute renal failure. This is a critical contraindication emphasized in Katzung's pharmacology. Amlodipine (A), atenolol (B), and hydralazine (D) do not carry this specific risk."
  },
  {
    "num": 47,
    "q": "The antidote for benzodiazepine overdose is:",
    "opts": [
      "Naloxone",
      "Atropine",
      "Flumazenil",
      "Vitamin K"
    ],
    "ans": 2,
    "exp": "Flumazenil is a competitive benzodiazepine receptor antagonist that rapidly reverses sedation, respiratory depression, and coma caused by benzodiazepine overdose. Naloxone (A) reverses opioid toxicity, atropine (B) reverses cholinergic excess (organophosphate poisoning), and vitamin K (D) reverses warfarin anticoagulation."
  },
  {
    "num": 48,
    "q": "Which drug class is most appropriate for preventing migraine attacks?",
    "opts": [
      "Opioids",
      "Beta-blockers",
      "Antihistamines",
      "Benzodiazepines"
    ],
    "ans": 1,
    "exp": "Beta-blockers such as propranolol and metoprolol are first-line prophylactic agents for migraine, reducing attack frequency by stabilising neuronal excitability and modulating vascular tone. Opioids (A) are not used in migraine prevention and may cause medication overuse headache. Antihistamines (C) may have a limited role in acute attacks but not prophylaxis. Benzodiazepines (D) are not indicated."
  },
  {
    "num": 49,
    "q": "Which of the following is a thiazide diuretic?",
    "opts": [
      "Furosemide",
      "Spironolactone",
      "Hydrochlorothiazide",
      "Mannitol"
    ],
    "ans": 2,
    "exp": "Hydrochlorothiazide inhibits the Na-Cl cotransporter in the distal convoluted tubule, producing moderate diuresis and lowering blood pressure. It is widely used in hypertension management. Furosemide (A) is a loop diuretic, spironolactone (B) is a potassium-sparing aldosterone antagonist, and mannitol (D) is an osmotic diuretic."
  },
  {
    "num": 50,
    "q": "Which antibiotic is specifically contraindicated in children under 8 years due to dental staining?",
    "opts": [
      "Amoxicillin",
      "Erythromycin",
      "Tetracycline",
      "Metronidazole"
    ],
    "ans": 2,
    "exp": "Tetracycline chelates calcium ions and is incorporated into developing teeth and bone, causing permanent yellow-brown discolouration and enamel hypoplasia in children under 8 years and in fetuses if given in the second or third trimester. Amoxicillin (A), erythromycin (B), and metronidazole (D) do not carry this specific paediatric contraindication."
  },
  {
    "num": 51,
    "q": "Which drug inhibits HMG-CoA reductase and is used to lower LDL cholesterol?",
    "opts": [
      "Fibrates",
      "Bile acid sequestrants",
      "Ezetimibe",
      "Statins"
    ],
    "ans": 3,
    "exp": "Statins (e.g., atorvastatin, rosuvastatin) inhibit HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis, thereby reducing intracellular cholesterol, upregulating LDL receptors, and lowering circulating LDL. Fibrates (A) primarily lower triglycerides, bile acid sequestrants (B) reduce cholesterol absorption in the gut, and ezetimibe (C) blocks intestinal cholesterol absorption via NPC1L1."
  },
  {
    "num": 52,
    "q": "A 60-year-old hypertensive man presents with sudden severe 'thunderclap' headache described as the worst of his life. He has neck stiffness and photophobia. What is the most likely diagnosis?",
    "opts": [
      "Meningitis",
      "Migraine",
      "Subarachnoid haemorrhage",
      "Hypertensive encephalopathy"
    ],
    "ans": 2,
    "exp": "A thunderclap headache reaching maximal intensity within seconds, combined with meningism (neck stiffness and photophobia), is the classic presentation of subarachnoid haemorrhage due to aneurysmal rupture. This is a neurosurgical emergency with high mortality. Davidson's Medicine designates this headache pattern as a 'red flag' requiring immediate CT head and, if negative, lumbar puncture. Migraine lacks the explosive onset and meningism."
  },
  {
    "num": 53,
    "q": "A 45-year-old presents with jaundice, right upper quadrant pain, and fever. Murphy's sign is positive. Diagnosis is:",
    "opts": [
      "Hepatitis",
      "Acute cholecystitis",
      "Peptic ulcer disease",
      "Pancreatitis"
    ],
    "ans": 1,
    "exp": "The classical Charcot's triad of right upper quadrant pain, fever, and jaundice combined with a positive Murphy's sign (inspiratory arrest on deep palpation beneath the right costal margin) is pathognomonic for acute cholecystitis with possible biliary obstruction. Hepatitis (A) causes jaundice without localised gallbladder signs. Peptic ulcer (C) presents with epigastric pain and Murphy's sign is absent. Pancreatitis (D) causes epigastric pain radiating to the back."
  },
  {
    "num": 54,
    "q": "A 35-year-old woman presents with episodic hypertension, severe headaches, palpitations, and diaphoresis. Urinary metanephrines are elevated. Diagnosis is:",
    "opts": [
      "Essential hypertension",
      "Cushing syndrome",
      "Phaeochromocytoma",
      "Conn syndrome"
    ],
    "ans": 2,
    "exp": "Phaeochromocytoma is a catecholamine-secreting tumour of the adrenal medulla producing episodic hypertension with the classical triad of headache, palpitations, and diaphoresis. Elevated urinary metanephrines and catecholamines confirm the diagnosis. Essential hypertension (A) is sustained. Cushing syndrome (B) causes weight gain and striae. Conn syndrome (D) causes hypokalaemic hypertension without catecholamine excess."
  },
  {
    "num": 55,
    "q": "A 50-year-old man with longstanding GERD develops Barrett oesophagus. What is the main concern?",
    "opts": [
      "Oesophageal stricture",
      "Adenocarcinoma of oesophagus",
      "Squamous cell carcinoma",
      "Oesophageal varices"
    ],
    "ans": 1,
    "exp": "Barrett oesophagus represents intestinal metaplasia of the lower oesophageal epithelium in response to chronic acid exposure. The principal clinical concern is progression through dysplasia to oesophageal adenocarcinoma, the incidence of which has risen dramatically over recent decades. This drives the need for regular endoscopic surveillance. Squamous cell carcinoma (C) arises in the upper and middle oesophagus and is unrelated to Barrett's."
  },
  {
    "num": 56,
    "q": "A patient presents with polyuria, polydipsia, and random plasma glucose of 250 mg/dL. What is the most likely diagnosis?",
    "opts": [
      "Diabetes insipidus",
      "Diabetes mellitus",
      "Cushing syndrome",
      "Addison disease"
    ],
    "ans": 1,
    "exp": "A random plasma glucose exceeding 200 mg/dL in a symptomatic patient (polyuria and polydipsia) meets the WHO diagnostic criterion for diabetes mellitus. Diabetes insipidus (A) causes polyuria and polydipsia with dilute urine but normal blood glucose. Cushing syndrome (C) may cause secondary diabetes but the primary picture here is hyperglycaemia. Addison disease (D) causes hypoglycaemia, not hyperglycaemia."
  },
  {
    "num": 57,
    "q": "A young man presents with haematuria, bilateral flank pain, and a family history of renal disease. Ultrasound reveals enlarged kidneys with multiple cysts. Diagnosis is:",
    "opts": [
      "Renal cell carcinoma",
      "Autosomal dominant polycystic kidney disease",
      "Nephrotic syndrome",
      "Pyelonephritis"
    ],
    "ans": 1,
    "exp": "ADPKD is the most common inherited renal disease, presenting with bilateral multiple renal cysts, haematuria, flank pain, hypertension, and progressive renal failure. The family history is a critical clue. Renal cell carcinoma (A) typically presents as a solitary mass. Nephrotic syndrome (C) presents with proteinuria and oedema. Pyelonephritis (D) is an infectious condition without bilateral cystic disease."
  },
  {
    "num": 58,
    "q": "A patient presents with pallor, fatigue, and a smooth atrophic tongue. MCV is low and serum iron is reduced. Most likely diagnosis is:",
    "opts": [
      "Pernicious anaemia",
      "Iron deficiency anaemia",
      "Haemolytic anaemia",
      "Aplastic anaemia"
    ],
    "ans": 1,
    "exp": "Iron deficiency anaemia is characterised by microcytosis (low MCV), reduced serum iron, low ferritin, raised TIBC, and symptoms including pallor, fatigue, and koilonychia. The smooth tongue (glossitis) and angular stomatitis are classic signs. Pernicious anaemia (A) causes macrocytosis and neurological features. Haemolytic anaemia (C) causes jaundice and raised reticulocyte count. Aplastic anaemia (D) is a pancytopenia."
  },
  {
    "num": 59,
    "q": "Which investigation is the gold standard for diagnosing acute appendicitis in adults?",
    "opts": [
      "Ultrasound abdomen",
      "CT scan abdomen and pelvis",
      "MRI abdomen",
      "Diagnostic laparoscopy"
    ],
    "ans": 1,
    "exp": "CT scan of the abdomen and pelvis with contrast is the gold standard imaging investigation for acute appendicitis in adults, with sensitivity exceeding 95%. It also identifies alternative diagnoses and complications such as perforation or abscess. Ultrasound (A) is preferred in children and pregnant women due to radiation concerns. Diagnostic laparoscopy (D) is both diagnostic and therapeutic but is not the initial investigation of choice."
  },
  {
    "num": 60,
    "q": "A patient presents with a pulsatile abdominal mass and hypotension. Most likely diagnosis is:",
    "opts": [
      "Renal cell carcinoma",
      "Ruptured abdominal aortic aneurysm",
      "Acute pancreatitis",
      "Mesenteric ischaemia"
    ],
    "ans": 1,
    "exp": "A pulsatile abdominal mass with haemodynamic instability is ruptured abdominal aortic aneurysm until proven otherwise, a vascular emergency with very high mortality requiring immediate surgical intervention. Renal cell carcinoma (A) presents as a loin mass without pulsatility. Acute pancreatitis (C) causes epigastric pain with elevated amylase. Mesenteric ischaemia (D) causes severe abdominal pain disproportionate to physical findings."
  },
  {
    "num": 61,
    "q": "The most common site for a peptic ulcer is:",
    "opts": [
      "Stomach body",
      "Gastric antrum",
      "First part of duodenum",
      "Second part of duodenum"
    ],
    "ans": 2,
    "exp": "The first part (cap/bulb) of the duodenum is by far the most common site for peptic ulcer disease, accounting for approximately 95% of duodenal ulcers. This is directly related to the high acid load entering the duodenal bulb before bicarbonate secretion from the pancreas can neutralise it. Bailey & Love's Surgery and Davidson's both emphasise this anatomical predilection."
  },
  {
    "num": 62,
    "q": "Which tumour marker is elevated in colorectal carcinoma?",
    "opts": [
      "Alpha-fetoprotein (AFP)",
      "CA-125",
      "Carcinoembryonic antigen (CEA)",
      "PSA"
    ],
    "ans": 2,
    "exp": "CEA is the principal tumour marker used in colorectal carcinoma, primarily for monitoring recurrence after curative surgery rather than screening. Elevated preoperative CEA correlates with stage and prognosis. AFP (A) is elevated in hepatocellular carcinoma and germ cell tumours, CA-125 (B) in ovarian carcinoma, and PSA (D) in prostate carcinoma."
  },
  {
    "num": 63,
    "q": "Earliest sign of acute compartment syndrome is:",
    "opts": [
      "Pulselessness",
      "Pallor",
      "Pain on passive stretch of muscles",
      "Paralysis"
    ],
    "ans": 2,
    "exp": "Pain on passive stretch of muscles within the affected compartment is the earliest clinical sign of compartment syndrome, occurring before vascular compromise produces the '5 Ps'. This finding reflects ischaemic changes in muscle fibres before frank ischaemia sets in. Pulselessness (A), pallor (B), and paralysis (D) are late signs indicating established and potentially irreversible ischaemia."
  },
  {
    "num": 64,
    "q": "Whipple's procedure (pancreaticoduodenectomy) is performed for carcinoma of the:",
    "opts": [
      "Body of pancreas",
      "Tail of pancreas",
      "Head of pancreas",
      "Entire pancreas"
    ],
    "ans": 2,
    "exp": "Whipple's procedure removes the head of the pancreas, the duodenum, the distal stomach, the gallbladder, and the common bile duct, and is the primary curative surgery for carcinoma of the head of the pancreas and periampullary tumours. Carcinoma of the body (A) and tail (B) are resected by distal pancreatectomy. Total pancreatectomy (D) is rarely performed."
  },
  {
    "num": 65,
    "q": "A trauma patient has blood pressure 70/40 mmHg, heart rate 130 bpm, and is confused. This represents which class of haemorrhagic shock?",
    "opts": [
      "Class I",
      "Class II",
      "Class III",
      "Class IV"
    ],
    "ans": 2,
    "exp": "Class III haemorrhagic shock involves loss of 30–40% of blood volume (1500–2000 mL), producing marked hypotension, tachycardia exceeding 120 bpm, altered mental status, and reduced urine output. ATLS classification identifies Class III as the threshold where blood transfusion typically becomes mandatory alongside crystalloid resuscitation. Class I and II reflect lesser blood loss with preserved blood pressure."
  },
  {
    "num": 66,
    "q": "A 32-year-old woman presents with sudden severe lower abdominal pain, vaginal bleeding, and amenorrhoea of 7 weeks. Cervical os is closed. Serum beta-hCG is positive. Pelvic ultrasound shows no intrauterine gestational sac but free fluid in the pouch of Douglas. What is the most likely diagnosis?",
    "opts": [
      "Threatened miscarriage",
      "Complete miscarriage",
      "Ectopic pregnancy",
      "Ovarian torsion"
    ],
    "ans": 2,
    "exp": "Ectopic pregnancy presents with the classic triad of amenorrhoea, lower abdominal pain, and vaginal bleeding in a woman of reproductive age. The absence of intrauterine gestational sac with free fluid (haemoperitoneum) in the pouch of Douglas is the hallmark ultrasound finding. Ten Teachers Obstetrics identifies this as a life-threatening emergency. Threatened miscarriage has an intrauterine sac. Ovarian torsion does not cause a positive beta-hCG or free fluid in this pattern."
  },
  {
    "num": 67,
    "q": "A 28-year-old woman at 36 weeks gestation presents with painless fresh per-vaginal bleeding. What is the most likely diagnosis?",
    "opts": [
      "Placental abruption",
      "Placenta praevia",
      "Vasa praevia",
      "Bloody show"
    ],
    "ans": 1,
    "exp": "Placenta praevia classically presents with painless, unprovoked bright red vaginal bleeding in the third trimester, often recurrent and increasingly heavy with each episode. Ten Teachers highlights the absence of pain as the key differentiating feature from placental abruption (A), which causes painful concealed or revealed bleeding with uterine tenderness. Vasa praevia (C) is rare and catastrophic for the fetus."
  },
  {
    "num": 68,
    "q": "A G3P2 woman at 38 weeks presents with excessive uterine enlargement greater than dates and difficulty in feeling fetal parts. Ultrasound confirms excess amniotic fluid. What is the diagnosis?",
    "opts": [
      "Oligohydramnios",
      "Polyhydramnios",
      "Large for gestational age fetus",
      "Twin pregnancy"
    ],
    "ans": 1,
    "exp": "Polyhydramnios is defined as excessive accumulation of amniotic fluid (amniotic fluid index over 24 cm or deepest pool over 8 cm). Clinical clues include uterine size exceeding gestational age and difficulty palpating fetal parts due to fluid excess. Causes include fetal anomalies (oesophageal atresia, anencephaly) and gestational diabetes. Oligohydramnios (A) is the opposite. Twin pregnancy (D) may also cause large-for-dates but fetal parts remain palpable."
  },
  {
    "num": 69,
    "q": "The most important investigation for detecting Down syndrome in the second trimester is:",
    "opts": [
      "Nuchal translucency",
      "Maternal serum AFP",
      "Quadruple test",
      "Amniocentesis"
    ],
    "ans": 3,
    "exp": "Amniocentesis performed between 15 and 20 weeks gestation provides definitive chromosomal diagnosis of Down syndrome and other aneuploidies through karyotyping of fetal cells. It is the gold standard diagnostic test in the second trimester. Nuchal translucency (A) is a first-trimester screening test. Maternal serum AFP (B) and the quadruple test (C) are biochemical screening tools, not definitive diagnostic tests."
  },
  {
    "num": 70,
    "q": "A patient with pre-eclampsia develops seizures. What is the drug of choice?",
    "opts": [
      "Phenytoin",
      "Diazepam",
      "Magnesium sulphate",
      "Carbamazepine"
    ],
    "ans": 2,
    "exp": "Magnesium sulphate is the drug of choice for both prevention and treatment of eclamptic seizures, as it reduces neuromuscular excitability without causing foetal depression to the same degree as other anticonvulsants. Ten Teachers and the WHO both recommend the Magpie trial-based regimen. Phenytoin (A) is used in general epilepsy but is less effective in eclampsia. Diazepam (B) is a second-line option when magnesium is unavailable."
  },
  {
    "num": 71,
    "q": "The most common cause of postpartum haemorrhage (PPH) is:",
    "opts": [
      "Retained placenta",
      "Uterine atony",
      "Birth canal lacerations",
      "Coagulopathy"
    ],
    "ans": 1,
    "exp": "Uterine atony accounts for approximately 80% of all cases of primary postpartum haemorrhage, making it the single most important cause. Failure of the uterus to contract and retract after delivery leads to uncontrolled haemorrhage from the placental bed. Ten Teachers and WHO guidelines emphasise active management of the third stage (oxytocin, early cord clamping) specifically to prevent atony."
  },
  {
    "num": 72,
    "q": "A 50-year-old woman presents with postmenopausal bleeding. What is the most important investigation?",
    "opts": [
      "Pap smear",
      "Pelvic ultrasound",
      "Endometrial biopsy",
      "Serum CA-125"
    ],
    "ans": 2,
    "exp": "Postmenopausal bleeding must be investigated promptly to exclude endometrial carcinoma, and endometrial biopsy (pipelle biopsy or hysteroscopy with biopsy) provides tissue histology, which is the definitive diagnostic test. Pelvic ultrasound (B) is complementary (measuring endometrial thickness) but not definitive. Pap smear (A) screens for cervical pathology. CA-125 (D) is an ovarian tumour marker, not the primary investigation here."
  },
  {
    "num": 73,
    "q": "A child presents with chronic nasal obstruction and snoring. Examination reveals mouth breathing and hyponasal voice. Most likely diagnosis is:",
    "opts": [
      "Nasal polyps",
      "Adenoid hypertrophy",
      "Deviated nasal septum",
      "Allergic rhinitis"
    ],
    "ans": 1,
    "exp": "Adenoid hypertrophy is the most common cause of nasal obstruction, snoring, and hyponasal voice in children, often causing mouth breathing and adenoid facies in chronic cases. Nasal polyps (A) are rare in children without cystic fibrosis. Deviated nasal septum (C) causes unilateral obstruction in adults. Allergic rhinitis (D) causes sneezing and rhinorrhoea rather than constant obstruction and hyponasality."
  },
  {
    "num": 74,
    "q": "The most common organism causing acute otitis media in children is:",
    "opts": [
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Haemophilus influenzae",
      "Pseudomonas aeruginosa"
    ],
    "ans": 0,
    "exp": "Streptococcus pneumoniae is the most common bacterial cause of acute otitis media in children, responsible for approximately 40% of cases, followed by Haemophilus influenzae (nontypeable) and Moraxella catarrhalis, as detailed in Scott-Brown's Otorhinolaryngology. This organism is targeted by the pneumococcal conjugate vaccine (PCV). Staphylococcus aureus (B) is more common in chronic suppurative otitis media, and Pseudomonas (D) in otitis externa."
  },
  {
    "num": 75,
    "q": "A patient presents with unilateral conductive hearing loss, a bluish tinge behind an intact tympanic membrane, and pulsatile tinnitus. Most likely diagnosis is:",
    "opts": [
      "Cholesteatoma",
      "Glomus tumour",
      "Otosclerosis",
      "Serous otitis media"
    ],
    "ans": 1,
    "exp": "A glomus tympanicum or glomus jugulare tumour is a highly vascular paraganglioma that appears as a reddish-blue (flamingo-pink) pulsatile mass behind the tympanic membrane, causing conductive hearing loss and pulsatile tinnitus. The clinical picture is pathognomonic. Cholesteatoma (A) causes conductive loss but appears white/pearly. Otosclerosis (C) shows normal tympanic membrane without discolouration."
  },
  {
    "num": 76,
    "q": "Which sinus is most commonly involved in sinusitis?",
    "opts": [
      "Frontal sinus",
      "Sphenoidal sinus",
      "Maxillary sinus",
      "Ethmoidal sinus"
    ],
    "ans": 2,
    "exp": "The maxillary sinus is the most frequently affected sinus in acute and chronic sinusitis due to its low drainage ostium (impeding gravitational drainage), large size, and proximity to the upper molar teeth. These anatomical factors promote mucus stagnation and secondary infection. Frontal and ethmoidal sinuses are second in frequency. Sphenoidal sinusitis is least common."
  },
  {
    "num": 77,
    "q": "A 70-year-old man presents with unilateral epistaxis, nasal obstruction, and cervical lymphadenopathy. CT shows a mass in the nasopharynx. Most likely diagnosis is:",
    "opts": [
      "Angiofibroma",
      "Nasopharyngeal carcinoma",
      "Adenoid hypertrophy",
      "Rhinosporidiosis"
    ],
    "ans": 1,
    "exp": "Nasopharyngeal carcinoma is strongly associated with EBV infection and presents in older adults with unilateral nasal obstruction, epistaxis, serous otitis media (due to Eustachian tube compression), and early cervical lymphadenopathy. The combination of age, unilateral symptoms, and lymphadenopathy should raise immediate suspicion. Angiofibroma (A) occurs in adolescent males and is benign. Adenoid hypertrophy (C) affects children."
  },
  {
    "num": 78,
    "q": "In a patient presenting with sudden-onset unilateral sensorineural hearing loss, tinnitus, and vertigo, the most urgent investigation is:",
    "opts": [
      "Pure tone audiometry",
      "MRI with gadolinium of the internal auditory meati",
      "CT scan of temporal bone",
      "Tympanometry"
    ],
    "ans": 1,
    "exp": "The combination of unilateral SNHL, tinnitus, and vertigo raises suspicion for a vestibular schwannoma (acoustic neuroma), requiring gadolinium-enhanced MRI of the internal auditory meati for definitive evaluation. This is the gold standard investigation for this presentation. Pure tone audiometry (A) confirms the hearing loss but does not identify the cause. CT (C) is poor for soft tissue masses in the posterior fossa."
  },
  {
    "num": 79,
    "q": "The most appropriate emergency treatment for a patient with airway compromise from Ludwig angina is:",
    "opts": [
      "IV antibiotics alone",
      "Incision and drainage plus airway management",
      "Tracheostomy alone",
      "Aspiration of pus only"
    ],
    "ans": 1,
    "exp": "Ludwig angina is a rapidly progressing bilateral submandibular space infection that threatens the airway through floor-of-mouth elevation and tongue displacement. Management requires concurrent airway protection (intubation or surgical airway) and surgical incision and drainage combined with high-dose IV antibiotics. Antibiotics alone (A) are insufficient given the rapid progression. Tracheostomy alone (C) does not address the infection."
  },
  {
    "num": 80,
    "q": "A 70-year-old patient presents with sudden painless loss of central vision. Fundoscopy reveals a cherry-red spot at the macula. Diagnosis is:",
    "opts": [
      "Retinal detachment",
      "Central retinal artery occlusion",
      "Vitreous haemorrhage",
      "Age-related macular degeneration"
    ],
    "ans": 1,
    "exp": "A cherry-red spot at the macula is pathognomonic of central retinal artery occlusion. It occurs because infarcted, pale retina surrounds the fovea (supplied by choroidal circulation via the intact foveal reflex), creating the striking appearance. This is an ocular emergency requiring immediate management. Retinal detachment (A) causes a 'curtain' visual field defect. AMD (D) causes gradual central vision loss without this acute fundoscopic appearance."
  },
  {
    "num": 81,
    "q": "A 25-year-old patient with uveitis presents with pain, photophobia, and circumcorneal injection. Slit-lamp reveals keratic precipitates. Diagnosis is:",
    "opts": [
      "Conjunctivitis",
      "Anterior uveitis",
      "Glaucoma",
      "Episcleritis"
    ],
    "ans": 1,
    "exp": "Anterior uveitis (iritis/iridocyclitis) presents with circumcorneal (ciliary) injection, pain, photophobia, and keratic precipitates (inflammatory cells deposited on the corneal endothelium). It is associated with autoimmune conditions including HLA-B27 spondyloarthropathies. Conjunctivitis (A) causes diffuse injection without keratic precipitates. Glaucoma (C) causes elevated IOP and disc cupping. Episcleritis (D) causes sectoral redness without anterior chamber inflammation."
  },
  {
    "num": 82,
    "q": "A child presents with a white reflex in the pupil (leukocoria). The most important diagnosis to exclude is:",
    "opts": [
      "Cataract",
      "Retinoblastoma",
      "Corneal opacity",
      "Vitreous haemorrhage"
    ],
    "ans": 1,
    "exp": "Leukocoria (white pupillary reflex) in a child must be investigated urgently to exclude retinoblastoma, the most common intraocular malignancy of childhood, which can be life-threatening if not treated early. It is most often detected through an abnormal red reflex photograph or parents noticing a white reflex in flash photographs. While cataract (A) and corneal opacity (C) also cause leukocoria, they are not life-threatening and must be differentiated from retinoblastoma."
  },
  {
    "num": 83,
    "q": "The drug of first choice for primary open-angle glaucoma is:",
    "opts": [
      "Pilocarpine",
      "Timolol",
      "Atropine",
      "Brimonidine"
    ],
    "ans": 1,
    "exp": "Timolol, a non-selective beta-blocker, reduces aqueous humour production and is a first-line topical agent for lowering intraocular pressure in primary open-angle glaucoma. Prostaglandin analogues such as latanoprost are increasingly preferred first-line agents due to once-daily dosing and superior IOP reduction. Pilocarpine (A) is a cholinergic miotic used in angle-closure glaucoma. Atropine (C) is contraindicated in glaucoma as it raises IOP."
  },
  {
    "num": 84,
    "q": "In a patient with diabetic retinopathy, which finding indicates the highest risk for visual loss?",
    "opts": [
      "Microaneurysms",
      "Hard exudates",
      "New vessel formation (neovascularisation)",
      "Dot haemorrhages"
    ],
    "ans": 2,
    "exp": "Neovascularisation (proliferative diabetic retinopathy) carries the highest risk of visual loss through vitreous haemorrhage and traction retinal detachment. These fragile new vessels grow in response to retinal ischaemia and rupture easily. Microaneurysms (A), hard exudates (B), and dot haemorrhages (D) are features of non-proliferative diabetic retinopathy with a much lower immediate risk of severe visual loss."
  },
  {
    "num": 85,
    "q": "Normal intraocular pressure (IOP) range is:",
    "opts": [
      "5–10 mmHg",
      "10–21 mmHg",
      "22–30 mmHg",
      "25–35 mmHg"
    ],
    "ans": 1,
    "exp": "Normal IOP is maintained between 10 and 21 mmHg by the balance between aqueous humour production and drainage through the trabecular meshwork. Values consistently above 21 mmHg raise suspicion for glaucoma, though some individuals with normal-tension glaucoma develop optic nerve damage at normal pressures. A (5–10 mmHg) suggests hypotony, and C and D represent elevated pressure."
  },
  {
    "num": 86,
    "q": "A patient presents with sudden onset of floaters and flashes of light, followed by a dense visual field defect described as a descending curtain. Diagnosis is:",
    "opts": [
      "Vitreous haemorrhage",
      "Retinal detachment",
      "Central retinal vein occlusion",
      "Anterior uveitis"
    ],
    "ans": 1,
    "exp": "The classic presentation of rhegmatogenous retinal detachment is photopsia (flashes due to vitreous traction on the retina) followed by floaters (from vitreous haemorrhage or pigment cells) and ultimately a shadow or curtain in the visual field as the detachment progresses. This is an ophthalmic emergency requiring urgent surgical reattachment. Vitreous haemorrhage (A) causes floaters without a field defect."
  },
  {
    "num": 87,
    "q": "A patient presents with progressive dyspnoea and a chest X-ray showing bilateral hilar lymphadenopathy with pulmonary infiltrates. Serum ACE is elevated. Most likely diagnosis is:",
    "opts": [
      "Lymphoma",
      "Sarcoidosis",
      "Pulmonary tuberculosis",
      "Silicosis"
    ],
    "ans": 1,
    "exp": "Sarcoidosis classically presents in young to middle-aged adults with bilateral hilar lymphadenopathy, pulmonary infiltrates, elevated serum ACE, and a variety of systemic features. It is a non-caseating granulomatous disease of unknown aetiology. Elevated ACE reflects granuloma burden. Lymphoma (A) rarely causes bilateral symmetrical hilar adenopathy. TB (C) typically causes unilateral or asymmetric hilar changes. Silicosis (D) shows 'eggshell' calcification."
  },
  {
    "num": 88,
    "q": "Which of the following is the most sensitive test for diagnosis of pulmonary embolism?",
    "opts": [
      "Chest X-ray",
      "ECG",
      "CT pulmonary angiography (CTPA)",
      "D-dimer"
    ],
    "ans": 2,
    "exp": "CTPA is the gold standard investigation for confirming pulmonary embolism, with sensitivity exceeding 95% and the ability to directly visualise thrombus in the pulmonary vasculature. Chest X-ray (A) and ECG (B) are often normal or show non-specific findings. D-dimer (D) is highly sensitive but non-specific: a negative result effectively excludes PE in low-probability patients, but a positive result requires imaging confirmation."
  },
  {
    "num": 89,
    "q": "A patient on prolonged mechanical ventilation develops a new fever, purulent tracheal secretions, and a new chest X-ray infiltrate. Most likely diagnosis is:",
    "opts": [
      "Pulmonary embolism",
      "Ventilator-associated pneumonia",
      "Pneumothorax",
      "Pulmonary oedema"
    ],
    "ans": 1,
    "exp": "Ventilator-associated pneumonia (VAP) develops more than 48 hours after intubation, presenting with new fever, leucocytosis, purulent secretions, and new radiological infiltrates. It is the most common healthcare-associated infection in the ICU, with gram-negative organisms and Staphylococcus aureus as frequent causative agents. Pneumothorax (C) causes acute haemodynamic compromise. Pulmonary oedema (D) produces bilateral fluffy infiltrates without purulent secretions."
  },
  {
    "num": 90,
    "q": "Which of the following is the most common cause of pleural effusion in Pakistan?",
    "opts": [
      "Congestive cardiac failure",
      "Tuberculosis",
      "Malignancy",
      "Liver cirrhosis"
    ],
    "ans": 1,
    "exp": "In Pakistan and other high-burden countries, tuberculosis is the most common cause of pleural effusion, presenting with an exudative lymphocytic effusion with elevated ADA (adenosine deaminase). Globally, congestive cardiac failure (A) and malignancy (C) are leading causes, but in endemic regions TB predominates. High ADA levels in pleural fluid strongly support the diagnosis without the need for biopsy."
  },
  {
    "num": 91,
    "q": "A 30-year-old tall, thin male presents with sudden dyspnoea and reduced breath sounds on the right. Trachea is deviated to the left. Diagnosis is:",
    "opts": [
      "Pleural effusion",
      "Pneumonia",
      "Tension pneumothorax",
      "Haemothorax"
    ],
    "ans": 2,
    "exp": "Tension pneumothorax presents with sudden dyspnoea, absent breath sounds, ipsilateral hyperresonance, and contralateral tracheal deviation as air under pressure shifts the mediastinum. It is a clinical emergency requiring immediate needle decompression before chest X-ray. Simple pneumothorax commonly occurs spontaneously in tall thin males. Pleural effusion (A) causes stony dull percussion and ipsilateral tracheal deviation."
  },
  {
    "num": 92,
    "q": "FEV1/FVC ratio below 0.70 after bronchodilator therapy is diagnostic of:",
    "opts": [
      "Restrictive lung disease",
      "Mixed pattern",
      "Obstructive lung disease",
      "Normal spirometry"
    ],
    "ans": 2,
    "exp": "A post-bronchodilator FEV1/FVC ratio below 0.70 is the diagnostic criterion for obstructive airway disease, as defined by GOLD guidelines for COPD. It indicates airflow limitation that is not fully reversible. Restrictive lung disease (A) shows a reduced FVC with a normal or elevated FEV1/FVC ratio. A mixed pattern (B) shows features of both. Normal spirometry (D) has FEV1/FVC above 0.70."
  },
  {
    "num": 93,
    "q": "A patient develops progressive breathlessness with finger clubbing and velcro crepitations at the lung bases. HRCT shows ground glass opacity and honeycombing. The most appropriate initial treatment is:",
    "opts": [
      "Antibiotics",
      "Bronchodilators",
      "Oral prednisolone",
      "Nintedanib or pirfenidone"
    ],
    "ans": 3,
    "exp": "Nintedanib and pirfenidone are antifibrotic agents that slow the rate of decline in FVC in idiopathic pulmonary fibrosis, which presents with progressive dyspnoea, clubbing, velcro crepitations, and the UIP pattern on HRCT (ground glass and honeycombing with subpleural basal predominance). They do not reverse fibrosis but slow progression. Corticosteroids (C) were previously used but are now known to be harmful in IPF."
  },
  {
    "num": 94,
    "q": "A 22-year-old woman presents with recurrent episodes of binge eating followed by self-induced vomiting. She is obsessed with body image. What is the most likely diagnosis?",
    "opts": [
      "Anorexia nervosa",
      "Bulimia nervosa",
      "Binge eating disorder",
      "Body dysmorphic disorder"
    ],
    "ans": 1,
    "exp": "Bulimia nervosa is characterised by recurrent episodes of uncontrolled binge eating followed by compensatory behaviours such as self-induced vomiting, laxative misuse, or excessive exercise, driven by an intense preoccupation with body shape and weight. Unlike anorexia nervosa (A), patients with bulimia are typically of normal weight. Binge eating disorder (C) lacks the compensatory purging. Body dysmorphic disorder (D) involves preoccupation with perceived physical flaws without binge-purge cycles."
  },
  {
    "num": 95,
    "q": "A 19-year-old student presents with a 4-week history of hearing voices commenting on his behaviour, believing his thoughts are being broadcast on television, and social withdrawal. What is the most likely diagnosis?",
    "opts": [
      "Major depressive disorder with psychotic features",
      "Bipolar disorder",
      "Schizophrenia",
      "Brief psychotic disorder"
    ],
    "ans": 2,
    "exp": "First-rank symptoms (auditory hallucinations in the third person, thought broadcasting, passivity phenomena) lasting more than one month in a young adult with social decline are diagnostic of schizophrenia by DSM-5 criteria. These are also recognised as Schneiderian first-rank symptoms, as highlighted in the Oxford Textbook of Psychiatry. Brief psychotic disorder (D) resolves within one month. Major depressive disorder with psychotic features (A) has depression as the primary mood disturbance."
  },
  {
    "num": 96,
    "q": "A patient on haloperidol develops involuntary rhythmic movements of the mouth, tongue, and face after 2 years of treatment. This is called:",
    "opts": [
      "Akathisia",
      "Acute dystonia",
      "Tardive dyskinesia",
      "Drug-induced parkinsonism"
    ],
    "ans": 2,
    "exp": "Tardive dyskinesia is a late-onset extrapyramidal side effect of prolonged dopamine antagonist (antipsychotic) therapy, characterised by repetitive, involuntary orofacial movements including lip smacking, tongue protrusion, and facial grimacing. It may be irreversible. Akathisia (A) is a subjective restlessness, acute dystonia (B) occurs within hours to days of starting therapy, and drug-induced parkinsonism (D) mimics Parkinson's disease with tremor and rigidity."
  },
  {
    "num": 97,
    "q": "A 45-year-old man presents with elevated mood, decreased need for sleep, grandiosity, and excessive spending for one week, without significant impairment. He has no history of depression. What is the most likely diagnosis?",
    "opts": [
      "Cyclothymia",
      "Hypomania",
      "Mania",
      "Bipolar I disorder"
    ],
    "ans": 1,
    "exp": "Hypomania is a distinct, elevated mood episode lasting at least 4 days that does not cause marked functional impairment or require hospitalisation, distinguishing it from mania (C), which is more severe and may include psychosis. The absence of prior depressive episodes and the relatively brief duration with preserved function points to hypomania. Cyclothymia (A) involves chronic fluctuations over 2 years. Bipolar I (D) requires at least one full manic episode."
  },
  {
    "num": 98,
    "q": "Which medication is first-line for maintenance treatment of bipolar disorder?",
    "opts": [
      "Haloperidol",
      "Lithium",
      "Diazepam",
      "Fluoxetine"
    ],
    "ans": 1,
    "exp": "Lithium remains the gold standard mood stabiliser for long-term maintenance in bipolar disorder, reducing the frequency and severity of both manic and depressive episodes and lowering suicide risk. It requires regular monitoring of serum levels and renal and thyroid function due to its narrow therapeutic index. Haloperidol (A) is used acutely for mania but not as maintenance. Diazepam (C) and fluoxetine (D) are not first-line mood stabilisers."
  },
  {
    "num": 99,
    "q": "A patient describes feeling detached from his own body and watching himself from the outside. This experience is called:",
    "opts": [
      "Derealisation",
      "Dissociation",
      "Depersonalisation",
      "Illusion"
    ],
    "ans": 2,
    "exp": "Depersonalisation is the experience of feeling detached from or outside one's own body, as if observing oneself from an external perspective, while remaining aware that this experience is abnormal (intact reality testing). Derealisation (A) involves the external world feeling unreal or dreamlike. Dissociation (B) is a broader term encompassing both. Illusion (D) is a misperception of a real external stimulus."
  },
  {
    "num": 100,
    "q": "Which of the following is a first-generation antipsychotic?",
    "opts": [
      "Olanzapine",
      "Risperidone",
      "Clozapine",
      "Haloperidol"
    ],
    "ans": 3,
    "exp": "Haloperidol is a first-generation (typical) antipsychotic that predominantly blocks D2 dopamine receptors, producing antipsychotic effects alongside significant extrapyramidal side effects. It remains widely used in acute psychosis management. Olanzapine (A), risperidone (B), and clozapine (C) are second-generation (atypical) antipsychotics with a broader receptor profile including serotonin antagonism, associated with fewer extrapyramidal effects but greater metabolic side effects."
  }
];
