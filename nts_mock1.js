window.NTS_MOCK1_PASSAGES = {
  "p9": {
    "range": [
      9,
      10
    ],
    "label": "Passage for Q9–10",
    "text": "An old medieval castle stood on a lonely hill overlooking a quiet village. Travelers passing through often sought refuge there during storms or harsh winters. The castle was ruled by a mysterious lord who rarely appeared before the villagers. Over time, strange stories began to circulate; several people who entered seeking shelter were never seen again. Deep inside was a dark chamber used for executions. A servant who discovered the lord's cruelty became terrified and overwhelmed with guilt, and eventually hanged himself in that chamber."
  },
  "p11": {
    "range": [
      11,
      15
    ],
    "label": "Passage for Q11–15",
    "text": "Seven bulbs (two green, two red, one yellow, and two golden) are arranged in a straight line at positions 1 to 7. The yellow bulb is always at position 4. No two green bulbs can be adjacent. At least one red bulb must be at position 1 or 7. Golden bulbs cannot be placed next to each other. One green bulb must be before position 4, the other after."
  },
  "p16": {
    "range": [
      16,
      18
    ],
    "label": "Passage for Q16–18",
    "text": "Five doctors A, B, C, D, and E are assigned duties Monday to Friday, one per day. Doctor A cannot work Monday or Friday. Doctor B must work immediately before Doctor C. Doctor D cannot work Tuesday. Doctor E must work Monday or Friday. Doctor C cannot work Friday."
  },
  "p19": {
    "range": [
      19,
      20
    ],
    "label": "Passage for Q19–20",
    "text": "Six patients P, Q, R, S, T, and U are scheduled in six consecutive time slots at a clinic. P is always scheduled before Q. U is always scheduled immediately after T. R is never in the first or last slot. S is scheduled in slot 5."
  }
};
window.NTS_MOCK1_DATA = [
  {
    "num": 1,
    "q": "If I had got the admission in time, my degree _____ today.",
    "opts": [
      "would complete",
      "would be complete",
      "would have been completed",
      "will complete"
    ],
    "ans": 2,
    "exp": "This is a third conditional sentence expressing an unreal past situation with a present result. The correct structure is 'would have + past participle,' making option C correct. A lacks the unreal past construction, B is grammatically awkward here, and D incorrectly implies future certainty rather than a hypothetical outcome."
  },
  {
    "num": 2,
    "q": "He had stage fright at first, but he _____ it very quickly.",
    "opts": [
      "got into",
      "got away",
      "got over",
      "got down"
    ],
    "ans": 2,
    "exp": "'Got over' means to overcome or recover from something, fitting the context of stage fright perfectly. A (got into) implies becoming involved in something, B (got away) means escape, and D (got down) does not fit overcoming a fear."
  },
  {
    "num": 3,
    "q": "OPTIMISTIC : PESSIMISTIC ::",
    "opts": [
      "affectionate : loving",
      "loving : caring",
      "philanthropic : misanthropic",
      "austere : loving"
    ],
    "ans": 2,
    "exp": "'Optimistic' and 'pessimistic' are antonyms. Likewise, 'philanthropic' (love for humanity) and 'misanthropic' (hatred of humanity) are opposites. A and B are synonym pairs, not antonyms, and D does not form a clear antonym relationship."
  },
  {
    "num": 4,
    "q": "BENEVOLENT : BENIGN ::",
    "opts": [
      "benign : indifferent",
      "selfish : egoistic",
      "indifferent : caring",
      "egoistic : selfless"
    ],
    "ans": 1,
    "exp": "'Benevolent' and 'benign' are synonyms (both mean kind/gentle). The correct pair must also be synonyms. 'Selfish' and 'egoistic' are nearest in meaning among the choices. A and C are not synonym pairs, and D is an antonym pair."
  },
  {
    "num": 5,
    "q": "INTEGRITY:",
    "opts": [
      "duplicity",
      "complexity",
      "authenticity",
      "humility"
    ],
    "ans": 0,
    "exp": "'Integrity' means honesty and moral uprightness; 'duplicity' means deliberate deception, confirming they are antonyms. B (complexity) is unrelated, C (authenticity) is closer in meaning rather than opposite, and D (humility) is a different virtue, not an antonym."
  },
  {
    "num": 6,
    "q": "IMPULSIVE:",
    "opts": [
      "impressive",
      "expressive",
      "comprehensive",
      "decisive"
    ],
    "ans": 3,
    "exp": "'Impulsive' implies acting without thought; 'decisive' involves deliberate, considered decision-making: the closest contrast. A, B, and C do not have meaningful antonym or contrast relationships with impulsive."
  },
  {
    "num": 7,
    "q": "Choose the synonym of DIGRESSIVE:",
    "opts": [
      "impressive",
      "successive",
      "expressive",
      "discursive"
    ],
    "ans": 3,
    "exp": "'Digressive' means straying from the main subject; 'discursive' also refers to rambling or wandering speech: they are synonyms. A, B, and C have no meaningful relationship with digressive."
  },
  {
    "num": 8,
    "q": "Choose the synonym of DIPSOMANIAC:",
    "opts": [
      "alcoholic",
      "aesthetic",
      "hippocratic",
      "hypothetic"
    ],
    "ans": 0,
    "exp": "A dipsomaniac is someone with an uncontrollable craving for alcohol, making 'alcoholic' the correct synonym. B relates to art appreciation, C to medical ethics, and D to hypothesis; none are relevant."
  },
  {
    "num": 9,
    "q": "Which of the following can be MOST logically inferred about the castle?",
    "opts": [
      "It was a popular tourist attraction",
      "It was frequently visited for celebrations",
      "It was completely abandoned during winters",
      "It was a place associated with fear and danger"
    ],
    "ans": 3,
    "exp": "The passage details disappearances, executions, and a servant's suicide, all contributing to an atmosphere of terror and danger. A is contradicted by the ominous tone, B has no support in the text, and C contradicts the mention of travelers seeking refuge during winters.",
    "passage_id": "p9"
  },
  {
    "num": 10,
    "q": "What is the primary reason for the servant's suicide as described in the passage?",
    "opts": [
      "Fear of the villagers",
      "Harsh living conditions in the castle",
      "Guilt and horror after discovering the lord's cruelty",
      "Loneliness due to isolation"
    ],
    "ans": 2,
    "exp": "The passage explicitly states the servant 'became terrified and overwhelmed with guilt' after discovering the lord's cruelty, directly supporting C. A is not mentioned in the passage, B is not indicated as a cause, and D is not discussed in relation to the servant's actions.",
    "passage_id": "p9"
  },
  {
    "num": 11,
    "q": "Which of the following is a valid arrangement from position 1 to 7?",
    "opts": [
      "Red, Green, Green, Yellow, Golden, Golden, Red",
      "Red, Golden, Green, Yellow, Golden, Green, Green",
      "Red, Green, Golden, Yellow, Green, Golden, Red",
      "Red, Golden, Golden, Yellow, Green, Green, Red"
    ],
    "ans": 2,
    "exp": "Option C (Red, Green, Golden, Yellow, Green, Golden, Red) is the only valid arrangement. Yellow is correctly at position 4; green bulbs are at positions 2 and 5, not adjacent, with one on each side of position 4; golden bulbs are at positions 3 and 6, also not adjacent; and red bulbs occupy both ends satisfying the end-placement rule. Option A has two green bulbs adjacent at positions 2 and 3, and two golden bulbs adjacent at positions 5 and 6, two violations. Option B has no red bulb at position 1 or 7 since the last position is Green, violating the end rule; it also places two green bulbs after position 4. Option D has two golden bulbs adjacent at positions 2 and 3, and two green bulbs adjacent at positions 5 and 6, two violations.",
    "passage_id": "p11"
  },
  {
    "num": 12,
    "q": "If a golden bulb is placed at position 2, which of the following must be true?",
    "opts": [
      "A green bulb is at position 1",
      "A red bulb is at position 7",
      "The other golden bulb cannot be at position 3",
      "A green bulb is at position 5"
    ],
    "ans": 2,
    "exp": "With a golden bulb at position 2, the other golden bulb cannot be placed at position 3 because positions 2 and 3 are adjacent, and the rules forbid two golden bulbs from being adjacent; this is the only statement that must always be true. Option A is not required, the green bulb before position 4 can be at position 1 or 3, and position 1 can also hold a red bulb. Option B is not required, position 7 can hold a green or golden bulb in valid arrangements. Option D is possible in some arrangements but not guaranteed across all valid configurations with golden at position 2.",
    "passage_id": "p11"
  },
  {
    "num": 13,
    "q": "Which position can NEVER contain a golden bulb?",
    "opts": [
      "Position 3",
      "Position 4",
      "Position 6",
      "Position 2"
    ],
    "ans": 1,
    "exp": "Position 4 is strictly and permanently reserved for the yellow bulb by the rules of this arrangement. No other bulb, golden or otherwise, can ever occupy it. Positions 3, 6, and 2 can all potentially hold golden bulbs in valid arrangements, making B the only correct answer.",
    "passage_id": "p11"
  },
  {
    "num": 14,
    "q": "If both red bulbs are placed at the ends, which of the following must be true?",
    "opts": [
      "A golden bulb is at position 2",
      "A green bulb is at position 5",
      "No golden bulb is adjacent to another golden bulb",
      "Yellow is not at position 4"
    ],
    "ans": 2,
    "exp": "The golden non-adjacency rule is absolute and applies regardless of all other placements, including when both red bulbs occupy the ends. A is not a necessary condition, B is not mandatory under all valid configurations, and D directly contradicts the fixed rule that yellow always occupies position 4.",
    "passage_id": "p11"
  },
  {
    "num": 15,
    "q": "If a golden bulb is at position 3 and red bulbs are at both ends, which of the following must be true?",
    "opts": [
      "A golden bulb is at position 5",
      "A green bulb is at position 5",
      "A green bulb is at position 2",
      "A red bulb is at position 6"
    ],
    "ans": 2,
    "exp": "With golden at position 3, red at positions 1 and 7, and yellow fixed at position 4, the remaining bulbs to place are: one golden and two greens in positions 2, 5, and 6. The second golden cannot go at position 2 (adjacent to position 3) so it must go at position 5 or 6. One green must be before position 4, and the only remaining slot before position 4 is position 2, so the green bulb must be at position 2. This makes C the only statement that is always true. A is false because the second golden goes to position 5 or 6, not necessarily 5. B is false because position 5 may hold a golden or green depending on where the second golden lands. D is false because position 6 holds a green or golden, never a red.",
    "passage_id": "p11"
  },
  {
    "num": 16,
    "q": "Which schedule from Monday to Friday is possible?",
    "opts": [
      "E, B, C, D, A",
      "E, A, C, B, D",
      "D, B, C, A, E",
      "E, D, B, C, A"
    ],
    "ans": 2,
    "exp": "Option C (D, B, C, A, E) is the only valid schedule: D works Monday (the rule bars only Tuesday), B works Tuesday immediately before C on Wednesday, satisfying the B-before-C rule, A works Thursday (not Monday or Friday, as required), and E works Friday, satisfying the rule that E must work Monday or Friday. Option A places A on Friday, violating rule 1. Option B (E, A, C, B, D) places C on Wednesday and B on Thursday, meaning B comes after C rather than immediately before, violating rule 2. Option D places D on Tuesday, violating rule 3, and places A on Friday, violating rule 1.",
    "passage_id": "p16"
  },
  {
    "num": 17,
    "q": "If Doctor A is assigned to Wednesday, which doctor must be assigned to Monday?",
    "opts": [
      "Doctor D",
      "Doctor B",
      "Doctor E",
      "Doctor C"
    ],
    "ans": 1,
    "exp": "With Doctor A on Wednesday, E must take Monday or Friday. B must be immediately before C, and C cannot be on Friday, so the only slot that works for the B→C pair alongside A on Wednesday is B on Tuesday and C on Wednesday... but A is already on Wednesday. So B and C must occupy two consecutive days from the remaining slots. With A on Wednesday, the remaining days are Mon, Tue, Thu, Fri for B, C, D, E. B must be immediately before C, and C≠Fri, so B–C can only fit as Mon–Tue or Thu–Fri (but C≠Fri rules out Thu–Fri). Therefore B is on Monday and C is on Tuesday. E then takes Friday (Mon or Fri; Mon is taken), and D takes Thursday (D≠Tue, satisfied). Doctor B must be on Monday.",
    "passage_id": "p16"
  },
  {
    "num": 18,
    "q": "Which of the following statements must be true?",
    "opts": [
      "Doctor A works on Wednesday",
      "Doctor B works on Tuesday",
      "Doctor C works immediately after Doctor B",
      "Doctor D works on Monday"
    ],
    "ans": 2,
    "exp": "The explicit constraint states that Doctor B must be scheduled immediately before Doctor C, and this holds true in every valid arrangement without exception. A is variable across valid schedules. B is not a fixed requirement. D applies only in specific configurations, not universally.",
    "passage_id": "p16"
  },
  {
    "num": 19,
    "q": "Which of the following could be the correct order from slot 1 to 6?",
    "opts": [
      "T, U, P, R, S, Q",
      "P, T, U, Q, S, R",
      "T, U, Q, P, S, R",
      "U, T, P, Q, S, R"
    ],
    "ans": 0,
    "exp": "Option A (T, U, P, R, S, Q) is the only valid arrangement: T in slot 1 and U in slot 2 satisfy the rule that U must be immediately after T; P in slot 3 comes before Q in slot 6, satisfying the P-before-Q rule; R in slot 4 is neither the first nor the last slot; and S is correctly placed in slot 5. Option B places R in slot 6, violating rule 3. Option C places Q in slot 3 and P in slot 4, meaning P comes after Q, violating rule 1, and R is again in slot 6. Option D places U in slot 1 and T in slot 2, meaning U comes before T rather than immediately after, violating rule 2.",
    "passage_id": "p19"
  },
  {
    "num": 20,
    "q": "If T is scheduled in slot 1, which of the following must be true?",
    "opts": [
      "P is scheduled in slot 3",
      "R is scheduled in slot 4",
      "U is scheduled in slot 2",
      "Q is scheduled in slot 4"
    ],
    "ans": 2,
    "exp": "The rules state that U must be scheduled immediately after T. If T is in slot 1, then U must be in slot 2, which is the only possibility and is therefore always true. Option A is not guaranteed: P can be in slot 3 or 4 depending on where R lands. Option B is not guaranteed: R can be in slot 3 or 4 (R cannot be first or last, so slots 2–5 are valid, but slot 2 is taken by U and slot 5 by S, leaving 3 or 4). Option D is not guaranteed: Q must come after P and slot 6 is the most constrained position for Q, but Q's exact slot varies.",
    "passage_id": "p19"
  },
  {
    "num": 21,
    "q": "The square root of 20.25 is:",
    "opts": [
      "4.25",
      "4.5",
      "4.65",
      "4.85"
    ],
    "ans": 1,
    "exp": "20.25 = 2025/100, and √2025 = 45, so √20.25 = 45/10 = 4.5. Option B is correct. A (4.25²=18.06), C (4.65²=21.62), and D (4.85²=23.52) do not satisfy the equation."
  },
  {
    "num": 22,
    "q": "Zakat on gold amounting Rs. 11,10,000 is:",
    "opts": [
      "Rs. 27,000",
      "Rs. 29,000",
      "Rs. 25,000",
      "Rs. 27,750"
    ],
    "ans": 3,
    "exp": "Zakat is 2.5% of total wealth. 2.5/100 × 11,10,000 = 27,750. Option D gives the exact value. A (27,000), B (29,000), and C (25,000) do not represent 2.5% of the given amount."
  },
  {
    "num": 23,
    "q": "Factorization of algebraic expression x² − 3x − 4 yields:",
    "opts": [
      "(x+4)(x−1)",
      "(x−4)(x−1)",
      "(x−4)(x+1)",
      "(x+4)(x+1)"
    ],
    "ans": 2,
    "exp": "We need two numbers whose product is −4 and sum is −3: these are −4 and +1. So x² − 3x − 4 = (x−4)(x+1). Verify: (x−4)(x+1) = x² + x − 4x − 4 = x² − 3x − 4. ✓ Option A gives x² + 3x − 4, B gives x² − 5x + 4, and D gives x² + 5x + 4."
  },
  {
    "num": 24,
    "q": "If x + 1/x = 2 then x² + 1/x² = ?",
    "opts": [
      "8",
      "6",
      "4",
      "2"
    ],
    "ans": 3,
    "exp": "Using the identity (x + 1/x)² = x² + 1/x² + 2: substituting gives 4 = x² + 1/x² + 2, so x² + 1/x² = 2. Option D is correct. A (8), B (6), and C (4) result from incorrect application of the identity."
  },
  {
    "num": 25,
    "q": "A shopkeeper gives a discount of 20% on an item priced at Rs. 2000. What is the selling price?",
    "opts": [
      "Rs. 1500",
      "Rs. 1600",
      "Rs. 1700",
      "Rs. 1800"
    ],
    "ans": 1,
    "exp": "20% of 2000 = 400. Selling price = 2000 − 400 = 1600. B is correct. A overestimates the discount, C underestimates it, and D reflects only a 10% discount."
  },
  {
    "num": 26,
    "q": "The sum of first five whole numbers is:",
    "opts": [
      "8",
      "9",
      "11",
      "10"
    ],
    "ans": 3,
    "exp": "Whole numbers begin at 0, so the first five are 0, 1, 2, 3, 4. Their sum = 0+1+2+3+4 = 10. Option D is correct. A (8), B (9), and C (11) are incorrect sums."
  },
  {
    "num": 27,
    "q": "If the ratio of two numbers is 3:5 and their sum is 40, what is the larger number?",
    "opts": [
      "15",
      "20",
      "25",
      "30"
    ],
    "ans": 2,
    "exp": "Let the numbers be 3x and 5x. Then 3x + 5x = 40 → 8x = 40 → x = 5. The larger number = 5x = 25. Option C is correct. A (15) is the smaller number, B (20) is incorrect, and D (30) exceeds the total sum."
  },
  {
    "num": 28,
    "q": "A man travels 60 km in 1 hour and 40 km in 1 hour. What is his average speed?",
    "opts": [
      "45 km/h",
      "48 km/h",
      "52 km/h",
      "50 km/h"
    ],
    "ans": 3,
    "exp": "Total distance = 60 + 40 = 100 km. Total time = 1 + 1 = 2 hours. Average speed = 100/2 = 50 km/h. Option D is correct. A (45), B (48), and C (52) result from incorrect averaging."
  },
  {
    "num": 29,
    "q": "Yasir got 80% of 75 marks. How many marks did he get?",
    "opts": [
      "45",
      "50",
      "60",
      "65"
    ],
    "ans": 2,
    "exp": "80% of 75 = 0.80 × 75 = 60. Option C is correct. A (45) would be 60% of 75, B (50) would be roughly 67%, and D (65) is approximately 87%; none match the calculation."
  },
  {
    "num": 30,
    "q": "If 5x − 10 = 0, what is the value of x?",
    "opts": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": 1,
    "exp": "5x − 10 = 0 → 5x = 10 → x = 2. Option B is correct. A (1), C (3), and D (4) do not satisfy the equation when substituted back."
  },
  {
    "num": 31,
    "q": "The resting membrane potential of a typical neuron is approximately:",
    "opts": [
      "−30 mV",
      "−50 mV",
      "−90 mV",
      "−70 mV"
    ],
    "ans": 3,
    "exp": "The resting membrane potential of most neurons is approximately −70 mV, maintained by selective permeability to potassium and the Na⁺/K⁺ ATPase pump, a core value detailed in Guyton's Medical Physiology. A (−30 mV) and B (−50 mV) are closer to the firing threshold, while C (−90 mV) is typical of skeletal muscle cells rather than neurons."
  },
  {
    "num": 32,
    "q": "Which factor increases oxygen affinity of hemoglobin?",
    "opts": [
      "Increased CO₂",
      "Decreased pH",
      "Increased temperature",
      "Decreased 2,3-BPG"
    ],
    "ans": 3,
    "exp": "Decreased 2,3-BPG shifts the oxygen dissociation curve to the left, increasing hemoglobin's affinity for oxygen. This is important in fetal hemoglobin physiology. A (increased CO₂), B (decreased pH), and C (increased temperature) all shift the curve rightward, reducing oxygen affinity."
  },
  {
    "num": 33,
    "q": "The primary pacemaker of the heart is:",
    "opts": [
      "SA node",
      "AV node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "ans": 0,
    "exp": "The sinoatrial node generates the fastest spontaneous depolarizations, setting the cardiac rhythm and acting as the primary pacemaker. This is a foundational concept in Guyton's cardiac physiology. B (AV node) serves as a backup pacemaker with a slower rate. C (Bundle of His) and D (Purkinje fibers) are conduction pathways, not primary pacemakers."
  },
  {
    "num": 34,
    "q": "Which hormone primarily increases blood glucose levels?",
    "opts": [
      "Glucagon",
      "Insulin",
      "Somatostatin",
      "Thyroxine"
    ],
    "ans": 0,
    "exp": "Glucagon raises blood glucose by stimulating glycogenolysis and gluconeogenesis in the liver, acting as the principal counterregulatory hormone to insulin. B (insulin) lowers blood glucose, C (somatostatin) broadly inhibits multiple hormones, and D (thyroxine) increases overall metabolism but is not the primary blood glucose regulator."
  },
  {
    "num": 35,
    "q": "The normal glomerular filtration rate (GFR) in adults is approximately:",
    "opts": [
      "60 mL/min",
      "90 mL/min",
      "125 mL/min",
      "180 mL/min"
    ],
    "ans": 2,
    "exp": "The normal GFR is approximately 125 mL/min in healthy adults, as consistently cited in Guyton's renal physiology chapters. A (60 mL/min) indicates moderate renal impairment, B (90 mL/min) is below the normal threshold, and D (180 mL/min) represents the total daily filtrate volume in liters, not the per-minute rate."
  },
  {
    "num": 36,
    "q": "Which ion is mainly responsible for depolarization in cardiac muscle cells?",
    "opts": [
      "Potassium",
      "Calcium",
      "Sodium",
      "Chloride"
    ],
    "ans": 2,
    "exp": "Rapid depolarization in ventricular myocytes is driven by a large influx of sodium through fast voltage-gated Na⁺ channels, the same mechanism as in skeletal muscle. A (potassium) is primarily involved in repolarization, B (calcium) contributes to the distinctive plateau phase, and D (chloride) plays a minimal role in cardiac electrophysiology."
  },
  {
    "num": 37,
    "q": "Which part of the nephron is impermeable to water?",
    "opts": [
      "Proximal tubule",
      "Descending limb",
      "Ascending limb",
      "Collecting duct"
    ],
    "ans": 2,
    "exp": "The thick ascending limb of the Loop of Henle is impermeable to water while actively transporting sodium, potassium, and chloride into the interstitium, creating the medullary osmotic gradient. A (proximal tubule) is highly water-permeable, B (descending limb) allows free water reabsorption, and D (collecting duct) permeability is regulated by ADH."
  },
  {
    "num": 38,
    "q": "The anatomical structure that forms the roof of the orbit is:",
    "opts": [
      "Maxilla",
      "Zygomatic bone",
      "Ethmoid bone",
      "Frontal bone"
    ],
    "ans": 3,
    "exp": "The frontal bone (specifically its orbital plate) forms the roof of the orbit, as clearly outlined in Snell's Clinical Anatomy. A (maxilla) contributes to the floor, B (zygomatic bone) forms part of the lateral wall, and C (ethmoid) contributes to the medial wall."
  },
  {
    "num": 39,
    "q": "The nerve most commonly injured in mid-shaft fracture of humerus is:",
    "opts": [
      "Radial nerve",
      "Median nerve",
      "Ulnar nerve",
      "Axillary nerve"
    ],
    "ans": 0,
    "exp": "The radial nerve runs in the spiral groove of the humerus and is highly vulnerable in mid-shaft fractures, producing wrist drop. This is a classic anatomical correlation emphasized in clinical anatomy teaching. B (median nerve) is more commonly affected near the elbow, C (ulnar nerve) near the medial epicondyle, and D (axillary nerve) in fractures of the surgical neck."
  },
  {
    "num": 40,
    "q": "The artery supplying the lateral aspect of forearm is:",
    "opts": [
      "Radial artery",
      "Ulnar artery",
      "Brachial artery",
      "Axillary artery"
    ],
    "ans": 0,
    "exp": "The radial artery runs along the lateral aspect of the forearm and is easily palpable at the wrist, making it the standard site for pulse measurement. B (ulnar artery) supplies the medial forearm, C (brachial artery) is the proximal vessel before bifurcation, and D (axillary artery) is located in the axilla."
  },
  {
    "num": 41,
    "q": "The structure passing through the inguinal canal in females is:",
    "opts": [
      "Round ligament of uterus",
      "Ovarian ligament",
      "Uterine artery",
      "Fallopian tube"
    ],
    "ans": 0,
    "exp": "The round ligament of the uterus passes through the inguinal canal and attaches to the labia majora, the female equivalent of the spermatic cord's gubernaculum remnant. B (ovarian ligament) connects the ovary to the uterus internally, C (uterine artery) travels through the pelvis, and D (fallopian tube) does not pass through the inguinal canal."
  },
  {
    "num": 42,
    "q": "The functional unit of liver is:",
    "opts": [
      "Lobule",
      "Nephron",
      "Alveolus",
      "Acinus"
    ],
    "ans": 3,
    "exp": "The hepatic acinus is the true functional unit of the liver, organized around the portal triad and representing how the liver processes blood from zone 1 (periportal, most oxygenated) through zone 3 (centrilobular, most vulnerable to ischemia). The classical lobule is a structural/histological description. B (nephron) is the functional unit of the kidney and C (alveolus) of the lung."
  },
  {
    "num": 43,
    "q": "The main venous drainage of brain is through:",
    "opts": [
      "Internal jugular vein",
      "External jugular vein",
      "Subclavian vein",
      "Vertebral vein"
    ],
    "ans": 0,
    "exp": "The dural venous sinuses (superior sagittal, transverse, sigmoid) ultimately drain into the internal jugular vein, making it the primary pathway for cerebral venous return. B (external jugular) drains superficial structures of the scalp and face, C (subclavian) receives blood further downstream, and D (vertebral vein) plays a minor role."
  },
  {
    "num": 44,
    "q": "The drug of choice for status epilepticus is:",
    "opts": [
      "Diazepam",
      "Phenytoin",
      "Carbamazepine",
      "Valproate"
    ],
    "ans": 0,
    "exp": "Diazepam is a benzodiazepine with rapid CNS onset, making it the first-line agent for terminating status epilepticus, as consistently recommended in Katzung's pharmacology. B (phenytoin) is used after initial seizure control to prevent recurrence, C (carbamazepine) is for chronic epilepsy management, and D (valproate) is an alternative but not the first choice in acute emergencies."
  },
  {
    "num": 45,
    "q": "Which drug is an ACE inhibitor?",
    "opts": [
      "Losartan",
      "Atenolol",
      "Amlodipine",
      "Enalapril"
    ],
    "ans": 3,
    "exp": "Enalapril inhibits angiotensin-converting enzyme, reducing angiotensin II production and lowering blood pressure while offering organ-protective benefits. A (losartan) is an ARB that blocks the angiotensin II receptor rather than its production, B (atenolol) is a beta-1 blocker, and C (amlodipine) is a dihydropyridine calcium channel blocker."
  },
  {
    "num": 46,
    "q": "Which drug causes ototoxicity?",
    "opts": [
      "Penicillin",
      "Gentamicin",
      "Paracetamol",
      "Metformin"
    ],
    "ans": 1,
    "exp": "Gentamicin, an aminoglycoside antibiotic, damages cochlear hair cells and causes irreversible sensorineural hearing loss, a well-documented adverse effect in Katzung's pharmacology. A (penicillin) is generally ototoxically safe, C (paracetamol) causes hepatotoxicity in overdose, and D (metformin) is associated with lactic acidosis rather than ototoxicity."
  },
  {
    "num": 47,
    "q": "The antidote for organophosphate poisoning is:",
    "opts": [
      "Naloxone",
      "Atropine",
      "Flumazenil",
      "Vitamin K"
    ],
    "ans": 1,
    "exp": "Organophosphates irreversibly inhibit acetylcholinesterase, causing excessive muscarinic stimulation. Atropine competitively blocks muscarinic receptors and reverses the SLUDGE syndrome. A (naloxone) reverses opioid toxicity, C (flumazenil) reverses benzodiazepine toxicity, and D (vitamin K) is used for warfarin-related bleeding."
  },
  {
    "num": 48,
    "q": "Which drug is used for rapid bronchodilation in asthma?",
    "opts": [
      "Salbutamol",
      "Ipratropium",
      "Theophylline",
      "Montelukast"
    ],
    "ans": 0,
    "exp": "Salbutamol (albuterol) is a short-acting β2 agonist that rapidly relaxes bronchial smooth muscle, providing quick relief during acute asthma attacks. B (ipratropium) has a slower onset, C (theophylline) has a narrow therapeutic index and is less preferred, and D (montelukast) is a leukotriene modifier used for maintenance therapy."
  },
  {
    "num": 49,
    "q": "Which of the following drugs is a loop diuretic?",
    "opts": [
      "Hydrochlorothiazide",
      "Spironolactone",
      "Mannitol",
      "Furosemide"
    ],
    "ans": 3,
    "exp": "Furosemide inhibits the Na-K-2Cl cotransporter in the thick ascending limb of the Loop of Henle, producing potent and rapid diuresis, as detailed in Katzung's pharmacology. A (hydrochlorothiazide) acts on the distal convoluted tubule, B (spironolactone) is a potassium-sparing aldosterone antagonist, and C (mannitol) is an osmotic diuretic."
  },
  {
    "num": 50,
    "q": "Which drug is contraindicated in pregnancy due to teratogenicity?",
    "opts": [
      "Penicillin",
      "Insulin",
      "Paracetamol",
      "Isotretinoin"
    ],
    "ans": 3,
    "exp": "Isotretinoin (a vitamin A derivative) is among the most potent human teratogens, causing severe craniofacial, cardiac, and CNS defects even with brief exposure. It requires mandatory pregnancy prevention programs. A (penicillin), B (insulin), and C (paracetamol) are considered safe and are commonly used during pregnancy."
  },
  {
    "num": 51,
    "q": "Which drug acts as a competitive antagonist at opioid receptors?",
    "opts": [
      "Morphine",
      "Codeine",
      "Naloxone",
      "Tramadol"
    ],
    "ans": 2,
    "exp": "Naloxone competitively displaces opioids from mu, kappa, and delta receptors and rapidly reverses respiratory depression, sedation, and analgesia in opioid overdose. A (morphine) and B (codeine) are agonists, while D (tramadol) is a weak partial agonist with additional serotonin-norepinephrine reuptake inhibition."
  },
  {
    "num": 52,
    "q": "A 55-year-old female presents with central chest pain radiating to the left arm and jaw for 2 hours. Troponin-T is positive. Which ECG finding is most consistent with her condition?",
    "opts": [
      "PR segment depression",
      "Concave ST elevation",
      "Prominent U waves",
      "Convex ST elevation"
    ],
    "ans": 3,
    "exp": "Convex ('tombstone') ST elevation is characteristic of transmural myocardial infarction (STEMI), reflecting full-thickness myocardial ischemia. Davidson's Principles & Practice of Medicine highlights this as the key ECG differentiator from pericarditis. A (PR depression) and B (concave ST elevation) are more typical of pericarditis, while C (prominent U waves) are classically seen in hypokalemia."
  },
  {
    "num": 53,
    "q": "A 61-year-old man presents with chronic cough, copious foul-smelling sputum, and digital clubbing. What is the most likely diagnosis?",
    "opts": [
      "Bronchiectasis",
      "COPD",
      "Pulmonary tuberculosis",
      "Lung carcinoma"
    ],
    "ans": 0,
    "exp": "Bronchiectasis results from irreversible bronchial dilation leading to stasis and infection of secretions, producing large volumes of purulent, malodorous sputum with chronic clubbing from prolonged hypoxemia. COPD produces sputum but rarely foul odor or early clubbing; TB causes hemoptysis rather than copious purulence; carcinoma presents with weight loss and hemoptysis rather than this sputum pattern."
  },
  {
    "num": 54,
    "q": "A young female presents with fatigue, joint pain, and a malar rash sparing the nasolabial folds. Diagnosis is:",
    "opts": [
      "Rosacea",
      "Dermatomyositis",
      "Systemic lupus erythematosus",
      "Psoriasis"
    ],
    "ans": 2,
    "exp": "The butterfly malar rash that characteristically spares the nasolabial folds is a hallmark of SLE, reflecting immune complex deposition in sun-exposed areas. Davidson's emphasizes this as a key diagnostic clue alongside systemic features like arthritis and fatigue. Rosacea affects the central face without sparing nasolabial folds, dermatomyositis presents with heliotrope rash and proximal muscle weakness, and psoriasis causes silvery plaques."
  },
  {
    "num": 55,
    "q": "A diabetic hypertensive patient is started on medication to prevent nephropathy progression. Which is preferred?",
    "opts": [
      "Amlodipine",
      "Atenolol",
      "Hydrochlorothiazide",
      "Enalapril"
    ],
    "ans": 3,
    "exp": "ACE inhibitors reduce intraglomerular pressure and proteinuria, slowing diabetic nephropathy progression, a renal-protective benefit consistently emphasized in Davidson's and clinical nephrology guidelines. Amlodipine controls blood pressure without nephroprotection, atenolol may mask hypoglycemic symptoms, and thiazides do not confer the same glomerular protective effect."
  },
  {
    "num": 56,
    "q": "A patient presents with weight loss, palpitations, and heat intolerance. What is the most likely diagnosis?",
    "opts": [
      "Hyperthyroidism",
      "Hypothyroidism",
      "Cushing syndrome",
      "Addison disease"
    ],
    "ans": 0,
    "exp": "Hyperthyroidism increases basal metabolic rate, producing weight loss despite good appetite, tachycardia, and intolerance of warm environments. This classic triad is a cornerstone clinical presentation. B (hypothyroidism) causes the opposite features: weight gain, bradycardia, and cold intolerance. C (Cushing syndrome) causes weight gain with central redistribution, and D (Addison disease) presents with hypotension and hyperpigmentation."
  },
  {
    "num": 57,
    "q": "A patient presents with generalized edema and proteinuria \\>3.5 g/day. Most likely diagnosis is:",
    "opts": [
      "Nephritic syndrome",
      "Acute kidney injury",
      "Chronic kidney disease",
      "Nephrotic syndrome"
    ],
    "ans": 3,
    "exp": "Nephrotic syndrome is defined by the triad of heavy proteinuria (\\>3.5 g/day), hypoalbuminemia, and edema, as defined consistently in clinical nephrology. Nephritic syndrome involves hematuria and hypertension more prominently. AKI is an acute decline in renal function, and CKD is characterized by chronically reduced GFR over months to years."
  },
  {
    "num": 58,
    "q": "A patient presents with macrocytic anemia and neurological deficits. Which deficiency is likely?",
    "opts": [
      "Vitamin B12",
      "Iron",
      "Folate",
      "Vitamin C"
    ],
    "ans": 0,
    "exp": "Vitamin B12 deficiency causes megaloblastic anemia combined with subacute combined degeneration of the dorsal and lateral spinal columns, a neurological picture unique among nutritional anemias, as highlighted in Davidson's. Folate deficiency (C) also causes macrocytic anemia but lacks neurological involvement; iron deficiency (B) causes microcytic anemia; and Vitamin C deficiency (D) causes scurvy."
  },
  {
    "num": 59,
    "q": "Most common site of indirect inguinal hernia is:",
    "opts": [
      "Deep inguinal ring",
      "Hesselbach triangle",
      "Superficial inguinal ring",
      "Femoral canal"
    ],
    "ans": 0,
    "exp": "Indirect inguinal hernia enters through the deep inguinal ring and travels along the inguinal canal, following the embryological path of testicular descent. Bailey & Love's Surgery clearly distinguishes this from direct hernia, which protrudes through Hesselbach triangle (B). C (superficial ring) is where the hernia exits rather than enters, and D (femoral canal) is a separate entity entirely."
  },
  {
    "num": 60,
    "q": "Best initial diagnostic step for a breast lump in a young female:",
    "opts": [
      "CT scan",
      "Mammography",
      "Ultrasound",
      "FNAC"
    ],
    "ans": 2,
    "exp": "In young females, dense breast tissue limits mammography's sensitivity, making ultrasound the preferred initial imaging modality, as it avoids radiation and effectively distinguishes cystic from solid lesions. This is part of the triple assessment approach described in Bailey & Love. FNAC (D) is a diagnostic step rather than the first-line imaging investigation."
  },
  {
    "num": 61,
    "q": "Sentinel lymph node biopsy is most commonly used in:",
    "opts": [
      "Breast carcinoma",
      "Thyroid carcinoma",
      "Gastric carcinoma",
      "Colon carcinoma"
    ],
    "ans": 0,
    "exp": "Sentinel node biopsy maps lymphatic drainage to identify the first node(s) at risk for metastasis in breast cancer, avoiding unnecessary complete axillary clearance and its associated morbidity. This technique is now standard practice and has significantly reduced lymphedema rates in breast cancer surgery."
  },
  {
    "num": 62,
    "q": "Most common complication of untreated appendicitis is:",
    "opts": [
      "Abscess",
      "Fistula",
      "Obstruction",
      "Perforation"
    ],
    "ans": 3,
    "exp": "Untreated appendicitis progresses to ischemic necrosis and perforation, leading to peritonitis, the most common and most dangerous complication. Bailey & Love's Surgery emphasizes this time-critical progression. Abscess (A) may form after perforation as a contained response, but perforation itself is the primary event."
  },
  {
    "num": 63,
    "q": "Most common cause of intestinal obstruction worldwide is:",
    "opts": [
      "Tumor",
      "Adhesions",
      "Hernia",
      "Volvulus"
    ],
    "ans": 1,
    "exp": "Postoperative peritoneal adhesions are the leading cause of intestinal obstruction globally, accounting for up to 60,70% of cases in developed countries. Bailey & Love's Surgery consistently highlights this. Hernias (C) are the second most common cause, more prevalent in populations with limited access to surgery."
  },
  {
    "num": 64,
    "q": "Initial management of acute cholecystitis includes:",
    "opts": [
      "Immediate surgery",
      "Antibiotics and delayed surgery",
      "ERCP",
      "Observation only"
    ],
    "ans": 1,
    "exp": "Acute cholecystitis is managed conservatively with antibiotics, IV fluids, and analgesia, followed by interval cholecystectomy once inflammation subsides, typically within 6,8 weeks. A (immediate surgery) increases complication risk in the acute phase. C (ERCP) is indicated for bile duct stones, not primary cholecystitis. D (observation only) is inadequate."
  },
  {
    "num": 65,
    "q": "A patient in shock with hypotension and tachycardia most likely has:",
    "opts": [
      "Neurogenic shock",
      "Cardiogenic shock",
      "Septic shock",
      "Hypovolemic shock"
    ],
    "ans": 3,
    "exp": "Hypotension with compensatory tachycardia is the hallmark of hypovolemic shock, the most common type encountered in trauma and surgical settings. Neurogenic shock (A) is paradoxically characterized by bradycardia and warm skin due to sympathetic interruption. Cardiogenic shock (B) shows signs of poor forward flow with elevated JVP. Septic shock (C) may be hyperdynamic early on with warm extremities."
  },
  {
    "num": 66,
    "q": "A 26-year-old woman presents with secondary amenorrhea for 6 months. She gives history of undergoing dilatation and curettage (D&C) following miscarriage 8 months ago. Pregnancy test is negative. What is the most likely diagnosis?",
    "opts": [
      "Turner syndrome",
      "PCOS",
      "Asherman syndrome",
      "Kallmann syndrome"
    ],
    "ans": 2,
    "exp": "Asherman syndrome results from intrauterine adhesions following uterine instrumentation such as D&C, leading to secondary amenorrhea or hypomenorrhea. The temporal relationship with the procedure is the key diagnostic clue, as emphasized in Ten Teachers Obstetrics & Gynaecology. Turner syndrome causes primary amenorrhea, PCOS presents with hormonal features like hirsutism and irregular cycles, and Kallmann syndrome involves hypogonadotropic hypogonadism with anosmia."
  },
  {
    "num": 67,
    "q": "A 23-year-old primigravida at 32 weeks gestation presents with history of premature rupture of membranes for 10 days. She now has fever, lower abdominal pain, uterine tenderness, and foul-smelling vaginal discharge. What is the most likely diagnosis?",
    "opts": [
      "Chorioamnionitis",
      "Preterm labor",
      "Placenta previa",
      "Placental abruption"
    ],
    "ans": 0,
    "exp": "Prolonged rupture of membranes combined with fever, uterine tenderness, and foul-smelling discharge is classical for chorioamnionitis, a serious ascending intrauterine infection requiring urgent management. Ten Teachers highlights this clinical picture as a major complication of PPROM. Preterm labor lacks infection signs, placenta previa presents with painless bleeding, and abruption causes painful bleeding without this infectious picture."
  },
  {
    "num": 68,
    "q": "A 28-year-old pregnant woman with a previous child having Down syndrome presents at 12 weeks gestation seeking early diagnostic testing. Which is the most appropriate investigation at this stage?",
    "opts": [
      "Amniocentesis",
      "Chorionic villus sampling",
      "Ultrasound scan",
      "Cordocentesis"
    ],
    "ans": 1,
    "exp": "CVS is performed between 10,13 weeks gestation, providing early chromosomal diagnosis when the pregnancy is still in the first trimester, a timing advantage clearly outlined in Ten Teachers. Amniocentesis (A) is typically performed after 15 weeks, ultrasound (C) is a screening rather than diagnostic tool, and cordocentesis (D) is reserved for mid-to-late pregnancy."
  },
  {
    "num": 69,
    "q": "A 30-year-old pregnant woman presents with painless vaginal bleeding in the third trimester. Ultrasound confirms placenta previa. Which of the following is contraindicated in her management?",
    "opts": [
      "Speculum examination",
      "Vaginal examination",
      "Ultrasound monitoring",
      "Bed rest"
    ],
    "ans": 1,
    "exp": "Digital vaginal examination is strictly contraindicated in confirmed placenta previa because it can precipitate catastrophic hemorrhage. This critical safety principle is repeatedly emphasized in Ten Teachers Obstetrics. Speculum examination may be performed cautiously to assess bleeding, while ultrasound monitoring and bed rest are standard components of management."
  },
  {
    "num": 70,
    "q": "A primigravida is in the second stage of labor for more than 2 hours. The fetal head is at +1 station and uterine contractions are adequate, but the mother is exhausted. What is the most appropriate next step?",
    "opts": [
      "Continue observation",
      "Instrumental delivery",
      "Emergency cesarean section",
      "Sedation"
    ],
    "ans": 1,
    "exp": "Maternal exhaustion in the second stage with a low fetal head (+1 station) and adequate contractions is a classic indication for instrumental delivery, either forceps or vacuum extraction. Continued observation delays delivery and risks fetal compromise. Emergency caesarean section is not first-line when the head is already well-engaged. Sedation would further impair maternal effort."
  },
  {
    "num": 71,
    "q": "A 35-year-old multiparous woman develops fecal leakage per vagina following prolonged obstructed labor at home. Examination confirms a rectovaginal fistula. What is the most common underlying cause?",
    "opts": [
      "Crohn disease",
      "Radiation therapy",
      "Obstetric trauma",
      "Pelvic infection"
    ],
    "ans": 2,
    "exp": "Prolonged obstructed labor causes sustained pressure necrosis of the rectovaginal septum, resulting in fistula formation, the most common cause in developing countries where access to obstetric care is limited. This scenario is a key concept in Ten Teachers and global maternal health. Crohn disease and radiation are recognized but less common causes, while infection alone rarely produces fistulas of this type."
  },
  {
    "num": 72,
    "q": "A 27-year-old woman presents with gradual abdominal enlargement. On examination, uterus is enlarged to 14-week size and has an irregular contour. She has no pain or bleeding complaints. What is the most likely diagnosis?",
    "opts": [
      "Endometriosis",
      "Fibroid uterus",
      "Early pregnancy",
      "Uterine malignancy"
    ],
    "ans": 1,
    "exp": "Uterine fibroids (leiomyomas) classically present as painless, irregular uterine enlargement and are often asymptomatic in early stages, a presentation emphasized in Ten Teachers Gynaecology. Endometriosis (A) characteristically causes pain, pregnancy (C) produces smooth and uniform enlargement, and malignancy (D) typically presents with abnormal bleeding and systemic features."
  },
  {
    "num": 73,
    "q": "A pregnant woman complains of hearing her own voice loudly. On examination, tympanic membrane moves with respiration. What is the diagnosis?",
    "opts": [
      "Otosclerosis",
      "Otitis media with effusion",
      "Patulous Eustachian tube",
      "Labyrinthitis"
    ],
    "ans": 2,
    "exp": "Patulous Eustachian tube occurs when the Eustachian tube remains abnormally open, allowing self-generated sounds to be heard loudly (autophony). The hallmark finding is tympanic membrane movement synchronized with respiration, which is highly specific for this condition. Otosclerosis causes progressive conductive loss without TM movement, otitis media with effusion shows a dull retracted TM with fluid, and labyrinthitis presents with vertigo."
  },
  {
    "num": 74,
    "q": "An 18-year-old swimmer develops recurrent ear pain and discharge after swimming. What is the best preventive measure?",
    "opts": [
      "Antibiotic ear drops",
      "Steroid drops",
      "Antifungal drops",
      "2% acetic acid drops"
    ],
    "ans": 3,
    "exp": "Recurrent otitis externa ('swimmer's ear') is prevented by maintaining an acidic canal environment, which inhibits bacterial colonization. Acetic acid drops restore normal low pH after swimming and are more effective and safer for long-term prevention than antimicrobials. Antibiotics and steroids (A, B) are used during active infection, not prophylaxis. Antifungals (C) are reserved for confirmed fungal otitis."
  },
  {
    "num": 75,
    "q": "A 25-year-old woman develops progressive hearing loss worsened during pregnancy. Tympanogram shows reduced compliance. What is the curve type?",
    "opts": [
      "Type A",
      "Type Ad",
      "Type As",
      "Type B"
    ],
    "ans": 2,
    "exp": "Otosclerosis causes fixation of the stapes footplate at the oval window, reducing ossicular chain mobility and producing a Type As tympanogram (shallow, reduced compliance). The condition is characteristically worsened by hormonal influences in pregnancy. Type A is normal, Type Ad indicates hypermobility (ossicular discontinuity), and Type B suggests middle ear effusion."
  },
  {
    "num": 76,
    "q": "A patient develops severe ear pain and hearing loss after a long flight. Which investigation best assesses middle ear pressure and compliance?",
    "opts": [
      "Pure tone audiometry",
      "Speech audiometry",
      "BERA",
      "Tympanometry"
    ],
    "ans": 3,
    "exp": "Tympanometry directly measures middle ear pressure and tympanic membrane compliance, making it ideal for evaluating barotrauma-related Eustachian tube dysfunction. Pure tone and speech audiometry (A, B) assess hearing thresholds rather than pressure dynamics. BERA (C) evaluates auditory neural pathways and is used for sensorineural hearing loss assessment."
  },
  {
    "num": 77,
    "q": "A child with chronic ear discharge develops swelling behind angle of mandible with torticollis. Diagnosis is:",
    "opts": [
      "Mastoiditis",
      "Parotitis",
      "Bezold abscess",
      "Peritonsillar abscess"
    ],
    "ans": 2,
    "exp": "Bezold abscess is a deep neck abscess arising from mastoiditis when pus erodes through the mastoid tip and tracks along the sternocleidomastoid muscle, producing neck swelling and torticollis. Mastoiditis (A) alone typically causes post-auricular swelling without neck extension. Parotitis (B) affects the parotid gland, and peritonsillar abscess (D) presents with trismus and uvular deviation."
  },
  {
    "num": 78,
    "q": "A 30-year-old female presents with conductive hearing loss and normal tympanic membrane. Bone conduction dip at 2000 Hz is seen. Diagnosis is:",
    "opts": [
      "Otosclerosis",
      "Otitis media",
      "Presbycusis",
      "Meniere disease"
    ],
    "ans": 0,
    "exp": "The Carhart notch, a characteristic dip in bone conduction at 2000 Hz, is a pathognomonic audiometric finding in otosclerosis, caused by mechanical fixation of the stapes rather than true cochlear damage. The tympanic membrane appears normal, distinguishing it from otitis media (B). Presbycusis (C) causes bilateral high-frequency sensorineural loss, and Meniere disease (D) presents with fluctuating hearing loss, vertigo, and tinnitus."
  },
  {
    "num": 79,
    "q": "During parotid surgery, which nerve is most at risk?",
    "opts": [
      "Glossopharyngeal nerve",
      "Facial nerve",
      "Vagus nerve",
      "Hypoglossal nerve"
    ],
    "ans": 1,
    "exp": "The facial nerve divides within the substance of the parotid gland into its five terminal branches (temporal, zygomatic, buccal, marginal mandibular, cervical), making it the nerve most at risk during parotidectomy. Injury causes ipsilateral facial muscle paralysis with significant functional and cosmetic consequences. The other listed nerves are not embedded within parotid tissue."
  },
  {
    "num": 80,
    "q": "A 65-year-old patient presents with gradual painless loss of vision. Most common cause worldwide is:",
    "opts": [
      "Glaucoma",
      "AMD",
      "Diabetic retinopathy",
      "Cataract"
    ],
    "ans": 3,
    "exp": "Cataract, defined as progressive opacification of the crystalline lens, is the leading cause of reversible blindness worldwide, particularly in elderly populations and in low-income countries where surgical access is limited. Glaucoma (A) causes irreversible peripheral visual field loss, diabetic retinopathy (C) involves microvascular damage, and AMD (B) affects central vision in older adults."
  },
  {
    "num": 81,
    "q": "A patient presents with raised intraocular pressure and optic disc cupping. Diagnosis is:",
    "opts": [
      "Cataract",
      "Glaucoma",
      "Retinitis",
      "Uveitis"
    ],
    "ans": 1,
    "exp": "Elevated intraocular pressure combined with characteristic optic nerve head cupping (increased cup-to-disc ratio) is the hallmark of glaucoma, leading to progressive peripheral visual field loss if untreated. Cataract (A) affects the lens without optic nerve changes, retinitis (C) involves retinal inflammation, and uveitis (D) causes pain and anterior chamber inflammation rather than disc cupping."
  },
  {
    "num": 82,
    "q": "A patient complains of difficulty seeing at night. Which deficiency is most likely?",
    "opts": [
      "Vitamin A",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D"
    ],
    "ans": 0,
    "exp": "Vitamin A is essential for the synthesis of rhodopsin in rod photoreceptors, which are responsible for scotopic (low-light) vision. Deficiency leads to night blindness (nyctalopia), an early and reversible sign. Severe deficiency progresses to xerophthalmia and corneal destruction. B, C, and D deficiencies do not directly impair night vision."
  },
  {
    "num": 83,
    "q": "A diabetic patient presents with vision loss due to microvascular damage in eye. Which structure is affected?",
    "opts": [
      "Cornea",
      "Lens",
      "Retina",
      "Iris"
    ],
    "ans": 2,
    "exp": "Diabetic retinopathy involves progressive microvascular damage to the retinal capillaries, producing microaneurysms, hemorrhages, exudates, and neovascularization, ultimately threatening vision. It is one of the leading causes of preventable blindness in working-age adults. The cornea (A) and iris (D) are not the primary targets of diabetic microangiopathy."
  },
  {
    "num": 84,
    "q": "A patient presents with gradual peripheral vision loss, raised intraocular pressure, and optic disc cupping. The most characteristic diagnosis is:",
    "opts": [
      "Cataract",
      "Glaucoma",
      "Retinitis pigmentosa",
      "Conjunctivitis"
    ],
    "ans": 1,
    "exp": "The combination of peripheral visual field loss, raised IOP, and optic disc cupping is diagnostic of glaucoma. Although retinitis pigmentosa (C) also causes peripheral vision loss ('tunnel vision'), it does not raise IOP or cause disc cupping; these two features together point firmly to glaucoma. Cataract (A) primarily impairs central vision, and conjunctivitis (D) does not affect visual fields."
  },
  {
    "num": 85,
    "q": "The muscle responsible for pupillary constriction is:",
    "opts": [
      "Dilator pupillae",
      "Sphincter pupillae",
      "Ciliary muscle",
      "Iris root"
    ],
    "ans": 1,
    "exp": "The sphincter pupillae muscle, innervated by parasympathetic fibers via the oculomotor nerve, contracts to produce miosis (pupillary constriction). This is tested clinically via the pupillary light reflex and pharmacologically with pilocarpine. A (dilator pupillae) mediates mydriasis under sympathetic tone, C (ciliary muscle) controls lens accommodation, and D (iris root) is an anatomical region rather than a muscle."
  },
  {
    "num": 86,
    "q": "Most common refractive error worldwide is:",
    "opts": [
      "Hypermetropia",
      "Myopia",
      "Astigmatism",
      "Presbyopia"
    ],
    "ans": 1,
    "exp": "Myopia (short-sightedness) is the most prevalent refractive error globally and is rapidly increasing in prevalence, particularly in East Asian populations and young people with increased near-work activity. It results from excessive axial length or increased corneal curvature, causing light to focus anterior to the retina. It is corrected with concave (minus) lenses."
  },
  {
    "num": 87,
    "q": "A smoker presents with chronic cough and progressive breathlessness. Spirometry shows irreversible obstruction. Diagnosis is:",
    "opts": [
      "Asthma",
      "COPD",
      "Bronchiectasis",
      "Pneumonia"
    ],
    "ans": 1,
    "exp": "COPD is defined by persistent, incompletely reversible airflow limitation, most commonly caused by cigarette smoking. The progressive nature of dyspnea, the spirometric pattern (FEV1/FVC \\<0.70 post-bronchodilator), and the smoking history all point to COPD. Asthma (A) is reversible and episodic, bronchiectasis (C) produces copious sputum, and pneumonia (D) is an acute infection."
  },
  {
    "num": 88,
    "q": "A patient presents with episodic wheezing and reversible airway obstruction. Diagnosis is:",
    "opts": [
      "Asthma",
      "COPD",
      "TB",
      "Fibrosis"
    ],
    "ans": 0,
    "exp": "Asthma is characterized by episodic airway hyperresponsiveness leading to reversible bronchoconstriction, producing intermittent wheezing, chest tightness, and dyspnea. The reversibility of obstruction, whether spontaneously or with bronchodilators, is the defining feature that distinguishes asthma from COPD (B). TB (C) and fibrosis (D) do not present with reversible wheeze."
  },
  {
    "num": 89,
    "q": "A patient presents with fever, night sweats, weight loss, and chronic cough. Most likely organism is:",
    "opts": [
      "Virus",
      "Fungus",
      "Mycobacterium tuberculosis",
      "Parasite"
    ],
    "ans": 2,
    "exp": "The classic constitutional triad of night sweats, weight loss, and fever combined with chronic cough is the hallmark presentation of pulmonary tuberculosis. Pakistan has one of the highest TB burdens globally, making this combination a high-priority diagnosis requiring immediate investigation with sputum AFB smear and culture."
  },
  {
    "num": 90,
    "q": "On chest examination, stony dullness is found. Diagnosis is:",
    "opts": [
      "Pneumothorax",
      "Pleural effusion",
      "Consolidation",
      "Asthma"
    ],
    "ans": 1,
    "exp": "Stony dull percussion note is pathognomonic of fluid in the pleural space. The density of pleural fluid absorbs percussive vibrations more completely than consolidated lung, producing this characteristic note. Pneumothorax (A) gives hyperresonance, consolidation (C) gives simple dullness without the stony quality, and asthma (D) gives hyperresonant or normal percussion."
  },
  {
    "num": 91,
    "q": "A 45-year-old non-smoker presents with progressive exertional dyspnea and dry cough. Examination shows bilateral fine basal crepitations. HRCT reveals honeycombing with subpleural and basal predominance. What is the most likely diagnosis?",
    "opts": [
      "Idiopathic pulmonary fibrosis",
      "Pulmonary embolism",
      "COPD",
      "Bronchiectasis"
    ],
    "ans": 0,
    "exp": "Idiopathic pulmonary fibrosis (IPF) presents with progressive dyspnea, dry cough, and fine bibasal crepitations in a middle-aged to elderly patient. HRCT showing honeycombing with subpleural and basal predominance is the characteristic pattern of usual interstitial pneumonia (UIP), the histological hallmark of IPF. Pulmonary embolism (B) is acute, COPD (C) shows hyperinflation and obstruction, and bronchiectasis (D) produces purulent sputum."
  },
  {
    "num": 92,
    "q": "Most common cause of lung cancer is:",
    "opts": [
      "Pollution",
      "Smoking",
      "Genetics",
      "Infection"
    ],
    "ans": 1,
    "exp": "Cigarette smoking is responsible for approximately 85% of lung cancers, through exposure to carcinogens including polycyclic aromatic hydrocarbons, nitrosamines, and benzene. The dose-response relationship between pack-years and lung cancer risk is one of the strongest in oncology. Pollution (A), genetics (C), and infection (D) contribute but are far less significant causes."
  },
  {
    "num": 93,
    "q": "A patient presents with sudden dyspnea and pleuritic chest pain after prolonged immobilization. Diagnosis is:",
    "opts": [
      "Pneumonia",
      "Asthma",
      "Pulmonary embolism",
      "COPD"
    ],
    "ans": 2,
    "exp": "Prolonged immobilization promotes deep vein thrombosis through stasis; embolization to the pulmonary vasculature causes acute dyspnea, pleuritic chest pain, and hypoxia. This is a time-sensitive emergency where early clinical suspicion and D-dimer or CT pulmonary angiography are critical. Pneumonia (A) develops more gradually, asthma (B) is episodic without this clinical context, and COPD (D) is a chronic disease."
  },
  {
    "num": 94,
    "q": "A 24-year-old man presents with persistent low mood, loss of interest, poor sleep, and reduced appetite for the past 3 weeks. He has no history of mania. What is the most likely diagnosis?",
    "opts": [
      "Major depressive disorder",
      "Bipolar disorder",
      "Dysthymia",
      "Adjustment disorder"
    ],
    "ans": 0,
    "exp": "Persistent low mood, anhedonia, sleep disturbance, and appetite loss exceeding 2 weeks meet the DSM diagnostic threshold for major depressive disorder. Davidson's Medicine clearly outlines this symptom cluster and the 2-week minimum duration criterion. The absence of any manic or hypomanic episodes rules out bipolar disorder (B). Dysthymia (C) is more chronic but milder, and adjustment disorder (D) is typically linked to a clear precipitating stressor."
  },
  {
    "num": 95,
    "q": "A 30-year-old female repeatedly checks whether doors are locked despite knowing they are secure. She finds it distressing but cannot stop. Diagnosis is:",
    "opts": [
      "Generalized anxiety disorder",
      "Obsessive-compulsive disorder",
      "Panic disorder",
      "Phobia"
    ],
    "ans": 1,
    "exp": "The defining features here are intrusive, unwanted thoughts (obsessions) and repetitive behaviors (compulsions) performed to neutralize anxiety, even while the patient recognizes their irrationality. The Shorter Oxford Textbook of Psychiatry identifies this preserved insight as a key distinguishing feature of OCD from psychotic disorders. GAD (A) involves pervasive worry without rituals, panic disorder (C) has episodic attacks, and phobia (D) is linked to a specific trigger."
  },
  {
    "num": 96,
    "q": "A patient presents with sudden episodes of intense fear, palpitations, sweating, and a feeling of impending doom lasting 10,15 minutes. Diagnosis is:",
    "opts": [
      "Generalized anxiety disorder",
      "Panic disorder",
      "Depression",
      "Schizophrenia"
    ],
    "ans": 1,
    "exp": "Panic disorder is characterized by recurrent, unexpected panic attacks with intense autonomic symptoms (palpitations, sweating, chest tightness, and a sense of impending doom) that peak within minutes and resolve spontaneously. The episodic nature and short duration are key distinguishing features. GAD (A) is more chronic and diffuse, depression (C) lacks acute autonomic surges, and schizophrenia (D) involves psychosis rather than discrete anxiety episodes."
  },
  {
    "num": 97,
    "q": "A 40-year-old man believes that his neighbors are plotting against him without any evidence. He is otherwise functioning normally. This symptom is best described as:",
    "opts": [
      "Hallucination",
      "Delusion",
      "Illusion",
      "Obsession"
    ],
    "ans": 1,
    "exp": "A delusion is a fixed false belief maintained with conviction despite logical argument or contrary evidence. The Shorter Oxford Textbook of Psychiatry (Ch. 1 & 3) identifies persecutory delusions as among the most common in clinical practice. Hallucinations (A) are perceptions without external stimulus, illusions (C) are misinterpretations of real stimuli, and obsessions (D) are intrusive thoughts the patient recognizes as their own and irrational."
  },
  {
    "num": 98,
    "q": "A patient with chronic alcoholism presents with confusion, ataxia, and ophthalmoplegia. What is the most likely diagnosis?",
    "opts": [
      "Korsakoff syndrome",
      "Delirium tremens",
      "Wernicke encephalopathy",
      "Hepatic encephalopathy"
    ],
    "ans": 2,
    "exp": "The classic triad of confusion, cerebellar ataxia, and ophthalmoplegia (or nystagmus) defines Wernicke encephalopathy, a thiamine-deficiency emergency that is reversible if treated promptly with IV thiamine, as emphasized in Davidson's. Korsakoff syndrome (A) involves irreversible anterograde amnesia and confabulation following untreated Wernicke's. Delirium tremens (B) presents with agitation and hallucinations during withdrawal, and hepatic encephalopathy (D) is associated with liver failure."
  },
  {
    "num": 99,
    "q": "A young student experiences intense fear while speaking in public but is otherwise normal. What is the diagnosis?",
    "opts": [
      "Social anxiety disorder",
      "Panic disorder",
      "Generalized anxiety disorder",
      "OCD"
    ],
    "ans": 0,
    "exp": "Social anxiety disorder (social phobia) involves marked, persistent fear of social or performance situations due to fear of embarrassment or negative evaluation. The Oxford Textbook of Psychiatry highlights the situational specificity, namely fear triggered exclusively by social exposure, as the defining feature. Panic disorder (B) involves unpredictable attacks, GAD (C) is pervasive and not situation-specific, and OCD (D) involves compulsive rituals."
  },
  {
    "num": 100,
    "q": "A patient hears voices commenting on his actions when no one is present. This symptom is called:",
    "opts": [
      "Delusion",
      "Illusion",
      "Hallucination",
      "Thought insertion"
    ],
    "ans": 2,
    "exp": "Hearing voices without any external auditory stimulus is an auditory hallucination, a hallmark of psychotic disorders such as schizophrenia. The Shorter Oxford Textbook of Psychiatry and Davidson's both define hallucinations as perceptions occurring in the absence of a real external stimulus. Delusions (A) are false beliefs, illusions (B) require real stimuli that are misperceived, and thought insertion (D) is the belief that external thoughts are being placed into one's mind."
  }
];

