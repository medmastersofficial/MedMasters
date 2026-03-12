// NTS VAQ — Verbal Reasoning
// 200 MCQs
const NTS_VERBAL = [
  {
    id: 1,
    question: `If I had got the admission in time, my degree ______ today.`,
    options: [`would have been completed`, `would be complete`, `would complete`, `will complete`],
    correct: 0,
    explanation: `This is a third conditional sentence referring to a past unreal condition and its past result.`,
    passage: ``
  },
  {
    id: 2,
    question: `He had stage fright at first, but he ______ it very quickly.`,
    options: [`got into`, `got away`, `got down`, `got over`],
    correct: 3,
    explanation: `Get over means to recover from or overcome a fear or difficulty.`,
    passage: ``
  },
  {
    id: 3,
    question: `OPTIMISTIC : PESSIMISTIC ::`,
    options: [`philanthropic : misanthropic`, `loving : caring`, `affectionate : loving`, `austere : loving`],
    correct: 0,
    explanation: `Optimistic and pessimistic are opposites; similarly philanthropic (love of humanity) contrasts with misanthropic (hatred of humanity).`,
    passage: ``
  },
  {
    id: 4,
    question: `BENEVOLENT : BENIGN ::`,
    options: [`selfish : egoistic`, `benign : indifferent`, `indifferent : caring`, `egoistic : selfless`],
    correct: 0,
    explanation: `Benevolent and benign share a similar positive meaning. The closest comparable relationship among the options is selfish : egoistic (similar meanings).`,
    passage: ``
  },
  {
    id: 5,
    question: `INTEGRITY (Choose the word most nearly opposite in meaning):`,
    options: [`humility`, `complexity`, `authenticity`, `duplicity`],
    correct: 3,
    explanation: `Integrity means honesty and moral uprightness; duplicity means deceit or double-dealing.`,
    passage: ``
  },
  {
    id: 6,
    question: `IMPULSIVE (Choose the word most nearly opposite in meaning):`,
    options: [`impressive`, `expressive`, `comprehensive`, `decisive`],
    correct: 3,
    explanation: `Impulsive implies acting suddenly without careful thought; decisive suggests deliberate and firm decision-making.`,
    passage: ``
  },
  {
    id: 7,
    question: `DIGRESSIVE (Choose the word most similar in meaning):`,
    options: [`impressive`, `successive`, `discursive`, `expressive`],
    correct: 2,
    explanation: `Digressive means wandering away from the main topic; discursive also means rambling or deviating from the main point.`,
    passage: ``
  },
  {
    id: 8,
    question: `DIPSOMANIAC (Choose the word most similar in meaning):`,
    options: [`hypothetic`, `aesthetic`, `hippocratic`, `alcoholic`],
    correct: 3,
    explanation: `A dipsomaniac is someone who has an uncontrollable craving for alcohol.`,
    passage: ``
  },
  {
    id: 9,
    question: `Where did the servant hang himself?`,
    options: [`in the secret room`, `on the tower`, `in the haunted chamber`, `in hangman’s chamber`],
    correct: 3,
    explanation: `The passage states that the servant hanged himself in the execution chamber, commonly called the hangman’s chamber.`,
    passage: ``
  },
  {
    id: 10,
    question: `Several people who came into the castle for ______ were locked up and left to die.`,
    options: [`work`, `shelter`, `king’s services`, `queen’s services`],
    correct: 1,
    explanation: `The passage explains that travelers entered the castle seeking refuge or shelter during storms.`,
    passage: ``
  },
  {
    id: 11,
    question: `If she ______ earlier, she would have caught the train.`,
    options: [`had left`, `left`, `would leave`, `has left`],
    correct: 0,
    explanation: `This is a third conditional sentence referring to a past unreal situation. The correct structure is If + past perfect → would have + past participle.`,
    passage: ``
  },
  {
    id: 12,
    question: `At first the task seemed impossible, but the team finally ______ a solution.`,
    options: [`came across`, `came up with`, `came over`, `came out`],
    correct: 1,
    explanation: `Come up with means to produce or find an idea or solution.`,
    passage: ``
  },
  {
    id: 13,
    question: `GENEROUS : STINGY ::`,
    options: [`brave : courageous`, `honest : truthful`, `diligent : lazy`, `humble : modest`],
    correct: 2,
    explanation: `Generous and stingy are opposites. Similarly, diligent (hardworking) is opposite to lazy.`,
    passage: ``
  },
  {
    id: 14,
    question: `TRANSPARENT : OPAQUE ::`,
    options: [`honest : sincere`, `fragile : delicate`, `cautious : careful`, `flexible : rigid`],
    correct: 3,
    explanation: `Transparent and opaque are opposites; flexible and rigid also represent opposite qualities.`,
    passage: ``
  },
  {
    id: 15,
    question: `VIRTUE (Choose the word most nearly opposite in meaning):`,
    options: [`vice`, `morality`, `honesty`, `kindness`],
    correct: 0,
    explanation: `Virtue means moral excellence, while vice refers to immoral or wicked behavior.`,
    passage: ``
  },
  {
    id: 16,
    question: `FRAGILE (Choose the word most nearly opposite in meaning):`,
    options: [`delicate`, `breakable`, `weak`, `sturdy`],
    correct: 3,
    explanation: `Fragile means easily broken; sturdy means strong and durable.`,
    passage: ``
  },
  {
    id: 17,
    question: `CANDID (Choose the word most similar in meaning):`,
    options: [`deceptive`, `frank`, `doubtful`, `uncertain`],
    correct: 1,
    explanation: `Candid means open, sincere, and frank.`,
    passage: ``
  },
  {
    id: 18,
    question: `ALTRUIST (Choose the word most similar in meaning):`,
    options: [`egoist`, `philanthropist`, `miser`, `skeptic`],
    correct: 1,
    explanation: `An altruist is someone who cares about the welfare of others; a philanthropist also shows generosity toward others.`,
    passage: ``
  },
  {
    id: 19,
    question: `Why did early sailors continue their dangerous voyages despite the risks?`,
    options: [`They were forced by their governments`, `They wanted to escape storms`, `They hoped to discover new lands and trade routes`, `They disliked staying on land`],
    correct: 2,
    explanation: `The passage clearly states that the promise of discovering new lands and trade routes motivated them.`,
    passage: ``
  },
  {
    id: 20,
    question: `According to the passage, early navigation mainly depended on:`,
    options: [`advanced technology`, `satellites and instruments`, `modern navigation systems`, `stars, simple maps, and sailors’ instincts`],
    correct: 3,
    explanation: `The passage explains that sailors relied on basic maps, the stars, and their instincts.`,
    passage: ``
  },
  {
    id: 21,
    question: `If the researcher ______ the data more carefully, the error would have been detected earlier.`,
    options: [`analyzed`, `had analyzed`, `analyzes`, `would analyze`],
    correct: 1,
    explanation: `This is a third conditional structure referring to a past unreal situation (If + past perfect → would have + past participle).`,
    passage: ``
  },
  {
    id: 22,
    question: `She was nervous before the presentation, but she quickly ______ her anxiety and spoke confidently.`,
    options: [`got over`, `got through`, `got along`, `got down`],
    correct: 0,
    explanation: `Get over means to overcome or recover from a difficulty or fear.`,
    passage: ``
  },
  {
    id: 23,
    question: `COURAGE : COWARDICE ::`,
    options: [`honesty : loyalty`, `wisdom : ignorance`, `kindness : sympathy`, `patience : tolerance`],
    correct: 1,
    explanation: `Courage and cowardice are opposites; similarly wisdom contrasts with ignorance.`,
    passage: ``
  },
  {
    id: 24,
    question: `EXPAND : CONTRACT ::`,
    options: [`improve : progress`, `enlarge : increase`, `ascend : descend`, `produce : create`],
    correct: 2,
    explanation: `Expand and contract are opposites; ascend and descend are also opposites.`,
    passage: ``
  },
  {
    id: 25,
    question: `DILIGENCE (Choose the word most nearly opposite in meaning):`,
    options: [`dedication`, `effort`, `laziness`, `persistence`],
    correct: 2,
    explanation: `Diligence means hard work and persistence; laziness is its opposite.`,
    passage: ``
  },
  {
    id: 26,
    question: `TRANQUIL (Choose the word most nearly opposite in meaning):`,
    options: [`peaceful`, `calm`, `quiet`, `restless`],
    correct: 3,
    explanation: `Tranquil means calm and peaceful; restless indicates disturbance or agitation.`,
    passage: ``
  },
  {
    id: 27,
    question: `ASTUTE (Choose the word most similar in meaning):`,
    options: [`clever`, `careless`, `dull`, `ignorant`],
    correct: 0,
    explanation: `Astute means perceptive, sharp, or clever.`,
    passage: ``
  },
  {
    id: 28,
    question: `FRUGAL (Choose the word most similar in meaning):`,
    options: [`extravagant`, `careless`, `economical`, `wasteful`],
    correct: 2,
    explanation: `Frugal means economical or careful in spending resources.`,
    passage: ``
  },
  {
    id: 29,
    question: `According to the passage, why did knowledge spread more rapidly after the invention of the printing press?`,
    options: [`Books became easier and faster to produce`, `Books were destroyed more easily`, `Scholars stopped writing manuscripts`, `Libraries were closed`],
    correct: 0,
    explanation: `The passage states that printing allowed books to become widely available, enabling knowledge to spread quickly.`,
    passage: ``
  },
  {
    id: 30,
    question: `Modern libraries differ from early libraries mainly because they:`,
    options: [`include digital resources accessible online`, `provide only handwritten manuscripts`, `contain fewer books`, `are used only by scholars`],
    correct: 0,
    explanation: `The passage explains that modern libraries provide digital resources that can be accessed from anywhere.`,
    passage: ``
  },
  {
    id: 31,
    question: `Hardly had the lecture begun when several students ______ the classroom quietly.`,
    options: [`enter`, `were entering`, `had entered`, `entered`],
    correct: 3,
    explanation: `After “Hardly had…”, the second clause uses simple past tense.`,
    passage: ``
  },
  {
    id: 32,
    question: `Despite numerous obstacles, the scientist managed to ______ a workable solution to the complex problem.`,
    options: [`bring about`, `look after`, `come up with`, `turn down`],
    correct: 2,
    explanation: `Come up with means to devise or produce an idea or solution.`,
    passage: ``
  },
  {
    id: 33,
    question: `EPHEMERAL : PERMANENT ::`,
    options: [`fragile : delicate`, `stable : constant`, `flexible : rigid`, `temporary : lasting`],
    correct: 3,
    explanation: `Ephemeral means short-lived; its opposite is permanent. Similarly, temporary contrasts with lasting.`,
    passage: ``
  },
  {
    id: 34,
    question: `TEACHER : SCHOOL ::`,
    options: [`driver : road`, `farmer : crop`, `painter : color`, `judge : court`],
    correct: 3,
    explanation: `A teacher works in a school; similarly a judge works in a court.`,
    passage: ``
  },
  {
    id: 35,
    question: `PROLIFIC (Choose the word most nearly opposite in meaning):`,
    options: [`productive`, `abundant`, `barren`, `fertile`],
    correct: 2,
    explanation: `Prolific means producing abundantly; barren means unproductive.`,
    passage: ``
  },
  {
    id: 36,
    question: `HOSTILE (Choose the word most nearly opposite in meaning):`,
    options: [`friendly`, `aggressive`, `violent`, `severe`],
    correct: 0,
    explanation: `Hostile means unfriendly or antagonistic; friendly is the opposite.`,
    passage: ``
  },
  {
    id: 37,
    question: `COGENT (Choose the word most similar in meaning):`,
    options: [`trivial`, `doubtful`, `convincing`, `weak`],
    correct: 2,
    explanation: `Cogent refers to arguments that are clear, logical, and convincing.`,
    passage: ``
  },
  {
    id: 38,
    question: `AMELIORATE (Choose the word most similar in meaning):`,
    options: [`improve`, `intensify`, `worsen`, `destroy`],
    correct: 0,
    explanation: `Ameliorate means to improve or make something better.`,
    passage: ``
  },
  {
    id: 39,
    question: `What major change occurred during the Renaissance according to the passage?`,
    options: [`People stopped studying science`, `Observation and experimentation became more important`, `Scholars relied only on ancient authorities`, `Scientific discoveries were discouraged`],
    correct: 1,
    explanation: `The passage explains that scholars began emphasizing observation and experimentation.`,
    passage: ``
  },
  {
    id: 40,
    question: `According to the passage, scientific discoveries during the Renaissance mainly affected:`,
    options: [`the understanding of the universe`, `agriculture only`, `military strategies`, `architectural designs`],
    correct: 0,
    explanation: `The passage states that discoveries transformed how people understood the universe.`,
    passage: ``
  },
  {
    id: 41,
    question: `Rarely ______ such an intricate philosophical argument presented with such clarity and precision.`,
    options: [`have scholars encountered`, `scholars encountered`, `scholars have encountered`, `had scholars encounter`],
    correct: 0,
    explanation: `When a sentence begins with a negative adverb like rarely, inversion occurs, so the auxiliary precedes the subject.`,
    passage: ``
  },
  {
    id: 42,
    question: `The committee decided to ______ the proposal after discovering several inconsistencies in the financial projections.`,
    options: [`call upon`, `call up`, `call off`, `call out`],
    correct: 2,
    explanation: `Call off means to cancel something.`,
    passage: ``
  },
  {
    id: 43,
    question: `PERSPICUOUS : OBSCURE ::`,
    options: [`deliberate : cautious`, `explicit : ambiguous`, `concise : elaborate`, `cautious : reckless`],
    correct: 1,
    explanation: `Perspicuous means clear or easy to understand; obscure means unclear. Similarly explicit contrasts with ambiguous.`,
    passage: ``
  },
  {
    id: 44,
    question: `ARCHITECT : BLUEPRINT ::`,
    options: [`composer : symphony`, `lawyer : argument`, `pilot : cockpit`, `surgeon : scalpel`],
    correct: 3,
    explanation: `An architect uses a blueprint to guide construction; similarly a surgeon uses a scalpel as a primary working tool.`,
    passage: ``
  },
  {
    id: 45,
    question: `OBSEQUIOUS (Choose the word most nearly opposite in meaning):`,
    options: [`submissive`, `defiant`, `servile`, `compliant`],
    correct: 1,
    explanation: `Obsequious means excessively obedient or flattering; defiant means boldly resistant.`,
    passage: ``
  },
  {
    id: 46,
    question: `ERUDITE (Choose the word most nearly opposite in meaning):`,
    options: [`scholarly`, `ignorant`, `intellectual`, `knowledgeable`],
    correct: 1,
    explanation: `Erudite refers to someone highly educated or learned; ignorant is the opposite.`,
    passage: ``
  },
  {
    id: 47,
    question: `FASTIDIOUS (Choose the word most similar in meaning):`,
    options: [`negligent`, `careless`, `meticulous`, `indifferent`],
    correct: 2,
    explanation: `Fastidious means very attentive to detail; meticulous carries the same meaning.`,
    passage: ``
  },
  {
    id: 48,
    question: `INTRANSIGENT (Choose the word most similar in meaning):`,
    options: [`flexible`, `compliant`, `generous`, `stubborn`],
    correct: 3,
    explanation: `Intransigent describes someone unwilling to compromise.`,
    passage: ``
  },
  {
    id: 49,
    question: `According to the passage, modern historians believe progress results from:`,
    options: [`rational planning alone`, `accidental discoveries alone`, `the interaction of reasoning and chance`, `purely social circumstances`],
    correct: 2,
    explanation: `The passage states that progress emerges from both disciplined reasoning and accidental discoveries.`,
    passage: ``
  },
  {
    id: 50,
    question: `The passage suggests that accidental discoveries become valuable when:`,
    options: [`they replace rational thinking entirely`, `they are interpreted through careful reasoning`, `they occur during scientific experiments only`, `they are ignored by researchers`],
    correct: 1,
    explanation: `The passage explains that reasoning helps interpret and give meaning to unexpected discoveries.`,
    passage: ``
  },
  {
    id: 51,
    question: `Choose the word closest in meaning to “OBFUSCATE”.`,
    options: [`Clarify`, `Confuse`, `Illuminate`, `Reveal`],
    correct: 1,
    explanation: `Obfuscate means to make something unclear or difficult to understand, i.e., to confuse.`,
    passage: ``
  },
  {
    id: 52,
    question: `Choose the antonym of “ABERRANT”.`,
    options: [`Normal`, `Deviant`, `Strange`, `Irregular`],
    correct: 0,
    explanation: `Aberrant means deviating from what is normal; the opposite is normal.`,
    passage: ``
  },
  {
    id: 53,
    question: `Analogy:`,
    options: [`Temporary`, `Fleeting`, `Lasting`, `Brief`],
    correct: 2,
    explanation: `Ephemeral means not lasting → opposite permanent. Similarly, transient means temporary → opposite lasting.`,
    passage: ``
  },
  {
    id: 54,
    question: `Choose the word closest in meaning to “PRAGMATIC”.`,
    options: [`Idealistic`, `Theoretical`, `Emotional`, `Practical`],
    correct: 3,
    explanation: `Pragmatic refers to dealing with things practically rather than theoretically.`,
    passage: ``
  },
  {
    id: 55,
    question: `Antonym of “CONVOLUTED”.`,
    options: [`Complex`, `Twisted`, `Intricate`, `Straightforward`],
    correct: 3,
    explanation: `Convoluted means very complex or twisted; opposite is straightforward.`,
    passage: ``
  },
  {
    id: 56,
    question: `Analogy:`,
    options: [`Manuscript`, `Printing`, `Publication`, `Bookstore`],
    correct: 0,
    explanation: `An auditor checks accounts; an editor checks or revises manuscripts.`,
    passage: ``
  },
  {
    id: 57,
    question: `Choose the synonym of “LACONIC”.`,
    options: [`Verbose`, `Confusing`, `Brief`, `Elaborate`],
    correct: 2,
    explanation: `Laconic means using very few words.`,
    passage: ``
  },
  {
    id: 58,
    question: `Antonym of “MUNDANE”.`,
    options: [`Extraordinary`, `Dull`, `Ordinary`, `Routine`],
    correct: 0,
    explanation: `Mundane means ordinary or dull; the opposite is extraordinary.`,
    passage: ``
  },
  {
    id: 59,
    question: `Analogy:`,
    options: [`Lawyer`, `Police`, `Clerk`, `Judge`],
    correct: 3,
    explanation: `A scalpel is used by a surgeon; a gavel is used by a judge.`,
    passage: ``
  },
  {
    id: 60,
    question: `Choose the synonym of “ALACRITY”.`,
    options: [`Eagerness`, `Laziness`, `Reluctance`, `Delay`],
    correct: 0,
    explanation: `Alacrity means cheerful readiness or eagerness.`,
    passage: ``
  },
  {
    id: 61,
    question: `Choose the antonym of “TACITURN”.`,
    options: [`Reserved`, `Silent`, `Quiet`, `Talkative`],
    correct: 3,
    explanation: `Taciturn means habitually silent; opposite is talkative.`,
    passage: ``
  },
  {
    id: 62,
    question: `Analogy:`,
    options: [`Minerals`, `Soil`, `Water`, `Animals`],
    correct: 3,
    explanation: `Photosynthesis occurs in plants; respiration primarily occurs in animals.`,
    passage: ``
  },
  {
    id: 63,
    question: `Synonym of “UBIQUITOUS”.`,
    options: [`Rare`, `Hidden`, `Everywhere`, `Scattered`],
    correct: 2,
    explanation: `Ubiquitous means present everywhere.`,
    passage: ``
  },
  {
    id: 64,
    question: `Antonym of “FRUGAL”.`,
    options: [`Economical`, `Thrifty`, `Careful`, `Wasteful`],
    correct: 3,
    explanation: `Frugal means economical; opposite is wasteful.`,
    passage: ``
  },
  {
    id: 65,
    question: `Analogy:`,
    options: [`Wind`, `Humidity`, `Pressure`, `Rainfall`],
    correct: 2,
    explanation: `Thermometer measures temperature; barometer measures pressure.`,
    passage: ``
  },
  {
    id: 66,
    question: `Choose the synonym of “INSIPID”.`,
    options: [`Interesting`, `Flavorless`, `Colorful`, `Exciting`],
    correct: 1,
    explanation: `Insipid means lacking taste or interest.`,
    passage: ``
  },
  {
    id: 67,
    question: `Antonym of “AUGMENT”.`,
    options: [`Reduce`, `Expand`, `Increase`, `Strengthen`],
    correct: 0,
    explanation: `Augment means to increase; opposite is reduce.`,
    passage: ``
  },
  {
    id: 68,
    question: `Analogy:`,
    options: [`Slice`, `Carve`, `Cut`, `Chop`],
    correct: 2,
    explanation: `A pen writes; a knife cuts.`,
    passage: ``
  },
  {
    id: 69,
    question: `Synonym of “RETICENT”.`,
    options: [`Loud`, `Reserved`, `Bold`, `Talkative`],
    correct: 1,
    explanation: `Reticent means reserved or reluctant to speak.`,
    passage: ``
  },
  {
    id: 70,
    question: `Antonym of “OBSTINATE”.`,
    options: [`Stubborn`, `Flexible`, `Rigid`, `Adamant`],
    correct: 1,
    explanation: `Obstinate means stubborn; opposite is flexible.`,
    passage: ``
  },
  {
    id: 71,
    question: `Analogy:`,
    options: [`Plan`, `Map`, `Building`, `Brick`],
    correct: 2,
    explanation: `A composer creates a symphony; an architect designs a building.`,
    passage: ``
  },
  {
    id: 72,
    question: `Synonym of “DELETERIOUS”.`,
    options: [`Harmful`, `Beneficial`, `Useful`, `Healthy`],
    correct: 0,
    explanation: `Deleterious means causing harm.`,
    passage: ``
  },
  {
    id: 73,
    question: `Antonym of “EPHEMERAL”.`,
    options: [`Brief`, `Lasting`, `Temporary`, `Fleeting`],
    correct: 1,
    explanation: `Ephemeral means short-lived; opposite is lasting.`,
    passage: ``
  },
  {
    id: 74,
    question: `Analogy:`,
    options: [`Oil`, `Electricity`, `Fuel`, `Water`],
    correct: 3,
    explanation: `A battery stores energy; a reservoir stores water.`,
    passage: ``
  },
  {
    id: 75,
    question: `Synonym of “PERFUNCTORY”.`,
    options: [`Careful`, `Thorough`, `Detailed`, `Careless`],
    correct: 3,
    explanation: `Perfunctory means done with little care or interest.`,
    passage: ``
  },
  {
    id: 76,
    question: `Antonym of “CANDID”.`,
    options: [`Deceptive`, `Frank`, `Honest`, `Open`],
    correct: 0,
    explanation: `Candid means honest and straightforward; opposite is deceptive.`,
    passage: ``
  },
  {
    id: 77,
    question: `Analogy:`,
    options: [`Oceans`, `Countries`, `Cities`, `Maps`],
    correct: 3,
    explanation: `A dictionary contains words; an atlas contains maps.`,
    passage: ``
  },
  {
    id: 78,
    question: `Synonym of “CAPRICIOUS”.`,
    options: [`Predictable`, `Reliable`, `Stable`, `Impulsive`],
    correct: 3,
    explanation: `Capricious means unpredictable or impulsive.`,
    passage: ``
  },
  {
    id: 79,
    question: `Antonym of “IMPECCABLE”.`,
    options: [`Flawed`, `Faultless`, `Perfect`, `Ideal`],
    correct: 0,
    explanation: `Impeccable means perfect; opposite is flawed.`,
    passage: ``
  },
  {
    id: 80,
    question: `Analogy:`,
    options: [`Nest`, `Bird`, `Feather`, `Wing`],
    correct: 1,
    explanation: `A seed develops into a plant; an egg develops into a bird.`,
    passage: ``
  },
  {
    id: 81,
    question: `Synonym of “OSTENTATIOUS”.`,
    options: [`Modest`, `Showy`, `Simple`, `Humble`],
    correct: 1,
    explanation: `Ostentatious means showy or designed to impress.`,
    passage: ``
  },
  {
    id: 82,
    question: `Antonym of “VINDICATE”.`,
    options: [`Blame`, `Justify`, `Defend`, `Prove`],
    correct: 0,
    explanation: `Vindicate means to clear from blame; opposite is blame.`,
    passage: ``
  },
  {
    id: 83,
    question: `Analogy:`,
    options: [`Weight`, `Temperature`, `Length`, `Time`],
    correct: 2,
    explanation: `A compass shows direction; a scale measures length.`,
    passage: ``
  },
  {
    id: 84,
    question: `Synonym of “DILIGENT”.`,
    options: [`Careless`, `Lazy`, `Negligent`, `Hardworking`],
    correct: 3,
    explanation: `Diligent means hardworking and careful.`,
    passage: ``
  },
  {
    id: 85,
    question: `Antonym of “PLACID”.`,
    options: [`Calm`, `Agitated`, `Peaceful`, `Quiet`],
    correct: 1,
    explanation: `Placid means calm; opposite is agitated.`,
    passage: ``
  },
  {
    id: 86,
    question: `Analogy:`,
    options: [`Field`, `Soil`, `Crop`, `Water`],
    correct: 2,
    explanation: `A teacher imparts knowledge; a farmer produces crops.`,
    passage: ``
  },
  {
    id: 87,
    question: `Synonym of “AMBIVALENT”.`,
    options: [`Certain`, `Clear`, `Determined`, `Conflicted`],
    correct: 3,
    explanation: `Ambivalent means having mixed feelings.`,
    passage: ``
  },
  {
    id: 88,
    question: `Antonym of “OBSOLETE”.`,
    options: [`Ancient`, `Modern`, `Outdated`, `Old`],
    correct: 1,
    explanation: `Obsolete means outdated; opposite is modern.`,
    passage: ``
  },
  {
    id: 89,
    question: `Analogy:`,
    options: [`Feet`, `Legs`, `Toes`, `Ankles`],
    correct: 0,
    explanation: `Gloves cover hands; boots cover feet.`,
    passage: ``
  },
  {
    id: 90,
    question: `Synonym of “ELOQUENT”.`,
    options: [`Inarticulate`, `Persuasive`, `Silent`, `Weak`],
    correct: 1,
    explanation: `Eloquent means persuasive and expressive.`,
    passage: ``
  },
  {
    id: 91,
    question: `Antonym of “BENIGN”.`,
    options: [`Kind`, `Gentle`, `Mild`, `Harmful`],
    correct: 3,
    explanation: `Benign means harmless; opposite is harmful.`,
    passage: ``
  },
  {
    id: 92,
    question: `Analogy:`,
    options: [`Blood`, `Brain`, `Body`, `Muscle`],
    correct: 2,
    explanation: `Fuel powers an engine; food powers the body.`,
    passage: ``
  },
  {
    id: 93,
    question: `Synonym of “SCRUTINIZE”.`,
    options: [`Ignore`, `Examine`, `Hide`, `Avoid`],
    correct: 1,
    explanation: `Scrutinize means to examine closely.`,
    passage: ``
  },
  {
    id: 94,
    question: `Antonym of “RELINQUISH”.`,
    options: [`Abandon`, `Surrender`, `Retain`, `Release`],
    correct: 2,
    explanation: `Relinquish means give up; opposite is retain.`,
    passage: ``
  },
  {
    id: 95,
    question: `Analogy:`,
    options: [`Ink`, `Paper`, `Pen`, `Book`],
    correct: 3,
    explanation: `Leaves belong to a tree; pages belong to a book.`,
    passage: ``
  },
  {
    id: 96,
    question: `Synonym of “SPARSE”.`,
    options: [`Dense`, `Rare`, `Scattered`, `Thin`],
    correct: 1,
    explanation: `Sparse means thinly distributed or rare.`,
    passage: ``
  },
  {
    id: 97,
    question: `Antonym of “ARDENT”.`,
    options: [`Indifferent`, `Enthusiastic`, `Passionate`, `Zealous`],
    correct: 0,
    explanation: `Ardent means passionate; opposite is indifferent.`,
    passage: ``
  },
  {
    id: 98,
    question: `Analogy:`,
    options: [`Ink`, `Paper`, `Pen`, `Book`],
    correct: 1,
    explanation: `A painter works on canvas; a writer works on paper.`,
    passage: ``
  },
  {
    id: 99,
    question: `Synonym of “TENACIOUS”.`,
    options: [`Weak`, `Lazy`, `Persistent`, `Careless`],
    correct: 2,
    explanation: `Tenacious means persistent or determined.`,
    passage: ``
  },
  {
    id: 100,
    question: `Antonym of “CONCISE”.`,
    options: [`Brief`, `Short`, `Compact`, `Verbose`],
    correct: 3,
    explanation: `Concise means brief; opposite is verbose (wordy).`,
    passage: ``
  },
  {
    id: 101,
    question: `Choose the word closest in meaning to “OBDURATE”.`,
    options: [`Flexible`, `Honest`, `Generous`, `Stubborn`],
    correct: 3,
    explanation: `Obdurate refers to someone who is stubborn and resistant to persuasion.`,
    passage: ``
  },
  {
    id: 102,
    question: `Antonym of “EQUIVOCAL”.`,
    options: [`Ambiguous`, `Definite`, `Uncertain`, `Doubtful`],
    correct: 1,
    explanation: `Equivocal means ambiguous or open to interpretation; the opposite is definite.`,
    passage: ``
  },
  {
    id: 103,
    question: `Analogy:`,
    options: [`Fear`, `Anger`, `Logic`, `Hope`],
    correct: 3,
    explanation: `A skeptic tends to doubt; an optimist tends to hope.`,
    passage: ``
  },
  {
    id: 104,
    question: `Sentence completion:`,
    options: [`diminished`, `reinforced`, `complicated`, `justified`],
    correct: 0,
    explanation: `Evidence weakened or diminished the opposition.`,
    passage: ``
  },
  {
    id: 105,
    question: `Synonym of “ENERVATE”.`,
    options: [`Strengthen`, `Exhaust`, `Encourage`, `Inspire`],
    correct: 1,
    explanation: `Enervate means to weaken or drain energy.`,
    passage: ``
  },
  {
    id: 106,
    question: `Antonym of “PRODIGAL”.`,
    options: [`Wasteful`, `Extravagant`, `Lavish`, `Thrifty`],
    correct: 3,
    explanation: `Prodigal means wastefully extravagant; opposite is thrifty.`,
    passage: ``
  },
  {
    id: 107,
    question: `Analogy:`,
    options: [`Calm`, `Cruel`, `Gentle`, `Friendly`],
    correct: 1,
    explanation: `Benevolent means kind; malevolent means cruel.`,
    passage: ``
  },
  {
    id: 108,
    question: `Sentence completion:`,
    options: [`lucid`, `precise`, `convoluted`, `transparent`],
    correct: 2,
    explanation: `Convoluted means complex and difficult to follow.`,
    passage: ``
  },
  {
    id: 109,
    question: `Synonym of “FURTIVE”.`,
    options: [`Secretive`, `Honest`, `Open`, `Direct`],
    correct: 0,
    explanation: `Furtive means secretive or stealthy.`,
    passage: ``
  },
  {
    id: 110,
    question: `Antonym of “IMPLICIT”.`,
    options: [`Hidden`, `Indirect`, `Explicit`, `Suggested`],
    correct: 2,
    explanation: `Implicit means implied; opposite is explicit.`,
    passage: ``
  },
  {
    id: 111,
    question: `Analogy:`,
    options: [`Current`, `Wire`, `Electricity`, `Electron`],
    correct: 2,
    explanation: `Planets move in orbits; electricity moves in circuits.`,
    passage: ``
  },
  {
    id: 112,
    question: `Synonym of “QUERULOUS”.`,
    options: [`Cheerful`, `Content`, `Calm`, `Complaining`],
    correct: 3,
    explanation: `Querulous describes someone who frequently complains.`,
    passage: ``
  },
  {
    id: 113,
    question: `Antonym of “CREDULOUS”.`,
    options: [`Skeptical`, `Gullible`, `Trusting`, `Naive`],
    correct: 0,
    explanation: `Credulous means easily believing; opposite is skeptical.`,
    passage: ``
  },
  {
    id: 114,
    question: `Sentence completion:`,
    options: [`resolute`, `indifferent`, `hesitant`, `uncertain`],
    correct: 0,
    explanation: `Resolute means determined and firm.`,
    passage: ``
  },
  {
    id: 115,
    question: `Analogy:`,
    options: [`Door`, `Security`, `Computer`, `Login`],
    correct: 2,
    explanation: `A key opens a lock; a password accesses a computer/system.`,
    passage: ``
  },
  {
    id: 116,
    question: `Synonym of “INSULAR”.`,
    options: [`Narrow-minded`, `Open-minded`, `Friendly`, `Curious`],
    correct: 0,
    explanation: `Insular refers to being isolated or narrow-minded.`,
    passage: ``
  },
  {
    id: 117,
    question: `Antonym of “INTRANSIGENT”.`,
    options: [`Rigid`, `Obstinate`, `Stubborn`, `Flexible`],
    correct: 3,
    explanation: `Intransigent means refusing to compromise; opposite is flexible.`,
    passage: ``
  },
  {
    id: 118,
    question: `Analogy:`,
    options: [`Symphony`, `Orchestra`, `Musician`, `Instrument`],
    correct: 0,
    explanation: `An author writes a novel; a composer writes a symphony.`,
    passage: ``
  },
  {
    id: 119,
    question: `Sentence completion:`,
    options: [`impulsive`, `careless`, `measured`, `erratic`],
    correct: 2,
    explanation: `Measured means calm and deliberate.`,
    passage: ``
  },
  {
    id: 120,
    question: `Synonym of “DIDACTIC”.`,
    options: [`Entertaining`, `Instructive`, `Confusing`, `Decorative`],
    correct: 1,
    explanation: `Didactic means intended to teach.`,
    passage: ``
  },
  {
    id: 121,
    question: `Antonym of “ESOTERIC”.`,
    options: [`Common`, `Specialized`, `Obscure`, `Hidden`],
    correct: 0,
    explanation: `Esoteric refers to knowledge understood by few; opposite is common.`,
    passage: ``
  },
  {
    id: 122,
    question: `Analogy:`,
    options: [`Engine`, `Dashboard`, `Car`, `Steering wheel`],
    correct: 2,
    explanation: `A pilot operates in a cockpit; a driver operates a car.`,
    passage: ``
  },
  {
    id: 123,
    question: `Sentence completion:`,
    options: [`ignored`, `reduced`, `exaggerated`, `corrected`],
    correct: 2,
    explanation: `Writers may exaggerate events for dramatic effect.`,
    passage: ``
  },
  {
    id: 124,
    question: `Synonym of “LUGUBRIOUS”.`,
    options: [`Cheerful`, `Mournful`, `Energetic`, `Relaxed`],
    correct: 1,
    explanation: `Lugubrious means excessively mournful or gloomy.`,
    passage: ``
  },
  {
    id: 125,
    question: `Antonym of “MITIGATE”.`,
    options: [`Ease`, `Alleviate`, `Reduce`, `Intensify`],
    correct: 3,
    explanation: `Mitigate means lessen severity; opposite is intensify.`,
    passage: ``
  },
  {
    id: 126,
    question: `Analogy:`,
    options: [`Lens`, `Earth`, `Stars`, `Light`],
    correct: 2,
    explanation: `Microscopes observe cells; telescopes observe stars.`,
    passage: ``
  },
  {
    id: 127,
    question: `Synonym of “CIRCUMSPECT”.`,
    options: [`Careless`, `Reckless`, `Rash`, `Careful`],
    correct: 3,
    explanation: `Circumspect means cautious and careful.`,
    passage: ``
  },
  {
    id: 128,
    question: `Antonym of “DOGMATIC”.`,
    options: [`Authoritative`, `Flexible`, `Strict`, `Certain`],
    correct: 1,
    explanation: `Dogmatic means stubbornly opinionated.`,
    passage: ``
  },
  {
    id: 129,
    question: `Sentence completion:`,
    options: [`rigorous`, `superficial`, `careless`, `random`],
    correct: 0,
    explanation: `Rigorous scrutiny means detailed critical examination.`,
    passage: ``
  },
  {
    id: 130,
    question: `Synonym of “RECALCITRANT”.`,
    options: [`Defiant`, `Obedient`, `Cooperative`, `Helpful`],
    correct: 0,
    explanation: `Recalcitrant means stubbornly resisting authority.`,
    passage: ``
  },
  {
    id: 131,
    question: `Antonym of “TENUOUS”.`,
    options: [`Weak`, `Fragile`, `Strong`, `Slight`],
    correct: 2,
    explanation: `Tenuous means weak or flimsy.`,
    passage: ``
  },
  {
    id: 132,
    question: `Analogy:`,
    options: [`Visitors`, `History`, `Curator`, `Artifacts`],
    correct: 3,
    explanation: `Libraries store books; museums store artifacts.`,
    passage: ``
  },
  {
    id: 133,
    question: `Sentence completion:`,
    options: [`valid`, `proven`, `questionable`, `logical`],
    correct: 2,
    explanation: `Questionable assumptions weaken arguments.`,
    passage: ``
  },
  {
    id: 134,
    question: `Synonym of “PERSPICACIOUS”.`,
    options: [`Ignorant`, `Insightful`, `Slow`, `Naive`],
    correct: 1,
    explanation: `Perspicacious means having keen insight.`,
    passage: ``
  },
  {
    id: 135,
    question: `Antonym of “TRANSIENT”.`,
    options: [`Temporary`, `Brief`, `Permanent`, `Fleeting`],
    correct: 2,
    explanation: `Transient means temporary.`,
    passage: ``
  },
  {
    id: 136,
    question: `Analogy:`,
    options: [`Wheel`, `Car`, `Road`, `Engine`],
    correct: 1,
    explanation: `Anchor stops ships; brakes stop cars.`,
    passage: ``
  },
  {
    id: 137,
    question: `Sentence completion:`,
    options: [`allocation`, `mismanagement`, `destruction`, `neglect`],
    correct: 0,
    explanation: `Efficient allocation ensures effective use of resources.`,
    passage: ``
  },
  {
    id: 138,
    question: `Synonym of “INEFFABLE”.`,
    options: [`Inexpressible`, `Loud`, `Simple`, `Clear`],
    correct: 0,
    explanation: `Ineffable means too great to be expressed in words.`,
    passage: ``
  },
  {
    id: 139,
    question: `Antonym of “ERUDITE”.`,
    options: [`Scholarly`, `Ignorant`, `Learned`, `Knowledgeable`],
    correct: 1,
    explanation: `Erudite means highly educated.`,
    passage: ``
  },
  {
    id: 140,
    question: `Analogy:`,
    options: [`Nurse`, `Doctor`, `Patient`, `Surgeon`],
    correct: 1,
    explanation: `A painter uses a palette; a doctor uses a stethoscope.`,
    passage: ``
  },
  {
    id: 141,
    question: `Synonym of “ABSTEMIOUS”.`,
    options: [`Moderate`, `Excessive`, `Careless`, `Wasteful`],
    correct: 0,
    explanation: `Abstemious means moderate, especially in eating/drinking.`,
    passage: ``
  },
  {
    id: 142,
    question: `Antonym of “CLANDESTINE”.`,
    options: [`Secret`, `Hidden`, `Open`, `Concealed`],
    correct: 2,
    explanation: `Clandestine means secret.`,
    passage: ``
  },
  {
    id: 143,
    question: `Sentence completion:`,
    options: [`trivial`, `glaring`, `minor`, `insignificant`],
    correct: 1,
    explanation: `Glaring inconsistencies are obvious contradictions.`,
    passage: ``
  },
  {
    id: 144,
    question: `Synonym of “DIFFIDENT”.`,
    options: [`Confident`, `Arrogant`, `Shy`, `Proud`],
    correct: 2,
    explanation: `Diffident means shy or lacking confidence.`,
    passage: ``
  },
  {
    id: 145,
    question: `Antonym of “IMPLACABLE”.`,
    options: [`Stern`, `Cruel`, `Harsh`, `Merciful`],
    correct: 3,
    explanation: `Implacable means unforgiving.`,
    passage: ``
  },
  {
    id: 146,
    question: `Analogy:`,
    options: [`Kitchen`, `Food`, `Cook`, `Ingredient`],
    correct: 1,
    explanation: `Blueprint guides building construction; recipe guides food preparation.`,
    passage: ``
  },
  {
    id: 147,
    question: `Synonym of “PANACEA”.`,
    options: [`Problem`, `Cure-all`, `Disease`, `Risk`],
    correct: 1,
    explanation: `Panacea means remedy for all problems.`,
    passage: ``
  },
  {
    id: 148,
    question: `Antonym of “INUNDATE”.`,
    options: [`Flood`, `Overwhelm`, `Dry`, `Submerge`],
    correct: 2,
    explanation: `Inundate means flood or overwhelm.`,
    passage: ``
  },
  {
    id: 149,
    question: `Sentence completion:`,
    options: [`objective`, `empirical`, `rigorous`, `specious`],
    correct: 3,
    explanation: `Specious arguments appear true but are actually misleading.`,
    passage: ``
  },
  {
    id: 150,
    question: `Analogy:`,
    options: [`Biology`, `Mathematics`, `Computer science`, `Chemistry`],
    correct: 2,
    explanation: `Genome relates to genetics; algorithm relates to computer science.`,
    passage: ``
  },
  {
    id: 151,
    question: `Choose the word closest in meaning to “MELLIFLUOUS”.`,
    options: [`Harsh`, `Sweet-sounding`, `Loud`, `Rough`],
    correct: 1,
    explanation: `Mellifluous refers to a sound that is smooth, sweet, and pleasant to hear.`,
    passage: ``
  },
  {
    id: 152,
    question: `Antonym of “SPORADIC”.`,
    options: [`Occasional`, `Rare`, `Frequent`, `Random`],
    correct: 2,
    explanation: `Sporadic means occurring irregularly; the opposite is frequent or regular.`,
    passage: ``
  },
  {
    id: 153,
    question: `Analogy:`,
    options: [`Flame`, `Power`, `Heat`, `Spark`],
    correct: 2,
    explanation: `A bulb produces light; a heater produces heat.`,
    passage: ``
  },
  {
    id: 154,
    question: `Sentence completion:`,
    options: [`fragile`, `impregnable`, `damaged`, `temporary`],
    correct: 1,
    explanation: `Impregnable means impossible to defeat or penetrate, often used for forts.`,
    passage: ``
  },
  {
    id: 155,
    question: `Synonym of “ABHOR”.`,
    options: [`Love`, `Admire`, `Detest`, `Praise`],
    correct: 2,
    explanation: `Abhor means to hate strongly.`,
    passage: ``
  },
  {
    id: 156,
    question: `Analogy:`,
    options: [`Notes`, `Brushes`, `Canvas`, `Studio`],
    correct: 0,
    explanation: `Painters work with colours; musicians work with musical notes.`,
    passage: ``
  },
  {
    id: 157,
    question: `Antonym of “ARDUOUS”.`,
    options: [`Simple`, `Difficult`, `Exhausting`, `Demanding`],
    correct: 0,
    explanation: `Arduous means very difficult; opposite is simple.`,
    passage: ``
  },
  {
    id: 158,
    question: `Sentence completion:`,
    options: [`obscure`, `complicate`, `clarify`, `distort`],
    correct: 2,
    explanation: `Clarify means to make something easier to understand.`,
    passage: ``
  },
  {
    id: 159,
    question: `Synonym of “MAGNANIMOUS”.`,
    options: [`Selfish`, `Generous`, `Arrogant`, `Angry`],
    correct: 1,
    explanation: `Magnanimous means generous or forgiving, especially toward rivals.`,
    passage: ``
  },
  {
    id: 160,
    question: `Analogy:`,
    options: [`Leaf`, `Soil`, `Garden`, `Flower`],
    correct: 3,
    explanation: `A seed grows into a tree; a bulb grows into a flower.`,
    passage: ``
  },
  {
    id: 161,
    question: `Antonym of “PERNICIOUS”.`,
    options: [`Beneficial`, `Dangerous`, `Harmful`, `Toxic`],
    correct: 0,
    explanation: `Pernicious means very harmful.`,
    passage: ``
  },
  {
    id: 162,
    question: `Synonym of “ASSIDUOUS”.`,
    options: [`Careless`, `Weak`, `Lazy`, `Diligent`],
    correct: 3,
    explanation: `Assiduous means hardworking and persistent.`,
    passage: ``
  },
  {
    id: 163,
    question: `Analogy:`,
    options: [`Patients`, `Doctors`, `Medicines`, `Rooms`],
    correct: 1,
    explanation: `Soldiers protect a fort; doctors work in hospitals.`,
    passage: ``
  },
  {
    id: 164,
    question: `Sentence completion:`,
    options: [`prudent`, `efficient`, `flawed`, `perfect`],
    correct: 2,
    explanation: `Flawed indicates defects or problems in design.`,
    passage: ``
  },
  {
    id: 165,
    question: `Synonym of “FASTIDIOUS”.`,
    options: [`Careless`, `Impatient`, `Lazy`, `Particular`],
    correct: 3,
    explanation: `Fastidious means very attentive to detail.`,
    passage: ``
  },
  {
    id: 166,
    question: `Antonym of “SCANT”.`,
    options: [`Limited`, `Small`, `Abundant`, `Rare`],
    correct: 2,
    explanation: `Scant means insufficient.`,
    passage: ``
  },
  {
    id: 167,
    question: `Analogy:`,
    options: [`Paper`, `Writing`, `Ink`, `Book`],
    correct: 1,
    explanation: `Brush creates painting; pen creates writing.`,
    passage: ``
  },
  {
    id: 168,
    question: `Synonym of “TACIT”.`,
    options: [`Implied`, `Spoken`, `Loud`, `Clear`],
    correct: 0,
    explanation: `Tacit means understood without being spoken.`,
    passage: ``
  },
  {
    id: 169,
    question: `Sentence completion:`,
    options: [`dull`, `vibrant`, `dark`, `empty`],
    correct: 1,
    explanation: `Vibrant means bright and full of energy.`,
    passage: ``
  },
  {
    id: 170,
    question: `Antonym of “SAGACIOUS”.`,
    options: [`Wise`, `Insightful`, `Intelligent`, `Foolish`],
    correct: 3,
    explanation: `Sagacious means wise or perceptive.`,
    passage: ``
  },
  {
    id: 171,
    question: `Analogy:`,
    options: [`Picture`, `Problem`, `Shape`, `Solution`],
    correct: 3,
    explanation: `A key solves a lock; a solution solves a puzzle.`,
    passage: ``
  },
  {
    id: 172,
    question: `Synonym of “LUCID”.`,
    options: [`Clear`, `Confusing`, `Complex`, `Hidden`],
    correct: 0,
    explanation: `Lucid means clear and easy to understand.`,
    passage: ``
  },
  {
    id: 173,
    question: `Antonym of “RETICENT”.`,
    options: [`Quiet`, `Talkative`, `Silent`, `Reserved`],
    correct: 1,
    explanation: `Reticent means unwilling to speak.`,
    passage: ``
  },
  {
    id: 174,
    question: `Sentence completion:`,
    options: [`repel`, `encourage`, `welcome`, `invite`],
    correct: 0,
    explanation: `Fortifications are built to repel attacks.`,
    passage: ``
  },
  {
    id: 175,
    question: `Synonym of “OBSEQUIOUS”.`,
    options: [`Respectful`, `Servile`, `Proud`, `Independent`],
    correct: 1,
    explanation: `Obsequious means excessively obedient or flattering.`,
    passage: ``
  },
  {
    id: 176,
    question: `Analogy:`,
    options: [`Walls`, `Tables`, `Chairs`, `Books`],
    correct: 3,
    explanation: `A palette holds colours; a library contains books.`,
    passage: ``
  },
  {
    id: 177,
    question: `Antonym of “EUPHORIC”.`,
    options: [`Happy`, `Sad`, `Joyful`, `Excited`],
    correct: 1,
    explanation: `Euphoric means extremely happy.`,
    passage: ``
  },
  {
    id: 178,
    question: `Synonym of “OBSOLETE”.`,
    options: [`Modern`, `New`, `Outdated`, `Advanced`],
    correct: 2,
    explanation: `Obsolete means no longer in use.`,
    passage: ``
  },
  {
    id: 179,
    question: `Sentence completion:`,
    options: [`flickered`, `dimmed`, `vanished`, `glowed`],
    correct: 3,
    explanation: `Bulbs glow when electricity flows.`,
    passage: ``
  },
  {
    id: 180,
    question: `Analogy:`,
    options: [`Direction`, `Distance`, `Travel`, `Land`],
    correct: 0,
    explanation: `A compass helps determine direction.`,
    passage: ``
  },
  {
    id: 181,
    question: `Synonym of “STOIC”.`,
    options: [`Emotional`, `Calm`, `Angry`, `Nervous`],
    correct: 1,
    explanation: `Stoic describes someone enduring pain without complaint.`,
    passage: ``
  },
  {
    id: 182,
    question: `Antonym of “VIGILANT”.`,
    options: [`Watchful`, `Alert`, `Careless`, `Attentive`],
    correct: 2,
    explanation: `Vigilant means watchful.`,
    passage: ``
  },
  {
    id: 183,
    question: `Sentence completion:`,
    options: [`confusing`, `harmonious`, `random`, `clumsy`],
    correct: 1,
    explanation: `Harmonious colours blend well together.`,
    passage: ``
  },
  {
    id: 184,
    question: `Synonym of “INTREPID”.`,
    options: [`Weak`, `Afraid`, `Fearless`, `Careful`],
    correct: 2,
    explanation: `Intrepid means fearless.`,
    passage: ``
  },
  {
    id: 185,
    question: `Analogy:`,
    options: [`Movement`, `Decoration`, `Attack`, `Protection`],
    correct: 3,
    explanation: `Both provide protection.`,
    passage: ``
  },
  {
    id: 186,
    question: `Antonym of “METICULOUS”.`,
    options: [`Careless`, `Careful`, `Accurate`, `Precise`],
    correct: 0,
    explanation: `Meticulous means very careful.`,
    passage: ``
  },
  {
    id: 187,
    question: `Synonym of “CANDID”.`,
    options: [`Honest`, `Secretive`, `Deceptive`, `Hidden`],
    correct: 0,
    explanation: `Candid means frank and honest.`,
    passage: ``
  },
  {
    id: 188,
    question: `Sentence completion:`,
    options: [`relaxed`, `sleepy`, `careless`, `vigilant`],
    correct: 3,
    explanation: `Guards must remain vigilant.`,
    passage: ``
  },
  {
    id: 189,
    question: `Analogy:`,
    options: [`Road`, `Wheel`, `Fuel`, `Driver`],
    correct: 2,
    explanation: `A bulb requires electricity; an engine requires fuel.`,
    passage: ``
  },
  {
    id: 190,
    question: `Synonym of “PRUDENT”.`,
    options: [`Rash`, `Reckless`, `Careless`, `Careful`],
    correct: 3,
    explanation: `Prudent means wise and cautious.`,
    passage: ``
  },
  {
    id: 191,
    question: `Antonym of “VOLATILE”.`,
    options: [`Calm`, `Unstable`, `Explosive`, `Violent`],
    correct: 0,
    explanation: `Volatile means unstable.`,
    passage: ``
  },
  {
    id: 192,
    question: `Sentence completion:`,
    options: [`capture`, `defend`, `decorate`, `repair`],
    correct: 0,
    explanation: `The design prevents enemies from capturing the fort.`,
    passage: ``
  },
  {
    id: 193,
    question: `Synonym of “CONCISE”.`,
    options: [`Detailed`, `Long`, `Brief`, `Wordy`],
    correct: 2,
    explanation: `Concise means brief and to the point.`,
    passage: ``
  },
  {
    id: 194,
    question: `Analogy:`,
    options: [`Soil`, `Flowers`, `Water`, `Trees`],
    correct: 1,
    explanation: `Rainbows contain colours; gardens contain flowers.`,
    passage: ``
  },
  {
    id: 195,
    question: `Antonym of “TENACIOUS”.`,
    options: [`Weak-willed`, `Determined`, `Persistent`, `Firm`],
    correct: 0,
    explanation: `Tenacious means persistent.`,
    passage: ``
  },
  {
    id: 196,
    question: `Sentence completion:`,
    options: [`analyzed`, `ignored`, `forgot`, `abandoned`],
    correct: 0,
    explanation: `Analyzing procedures helps identify errors.`,
    passage: ``
  },
  {
    id: 197,
    question: `Synonym of “AMBIGUOUS”.`,
    options: [`Clear`, `Vague`, `Precise`, `Definite`],
    correct: 1,
    explanation: `Ambiguous means unclear.`,
    passage: ``
  },
  {
    id: 198,
    question: `Analogy:`,
    options: [`Library`, `Hospital`, `Market`, `Fort`],
    correct: 3,
    explanation: `Soldiers defend forts.`,
    passage: ``
  },
  {
    id: 199,
    question: `Antonym of “EXUBERANT”.`,
    options: [`Depressed`, `Joyful`, `Energetic`, `Cheerful`],
    correct: 0,
    explanation: `Exuberant means very joyful.`,
    passage: ``
  },
  {
    id: 200,
    question: `Sentence completion:`,
    options: [`plain`, `dull`, `magnificent`, `ordinary`],
    correct: 2,
    explanation: `Magnificent describes something grand and impressive.`,
    passage: ``
  }
];