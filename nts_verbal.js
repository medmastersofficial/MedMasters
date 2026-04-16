const NTS_VERBAL = [
  {
    id: 1,
    question: `If I had got the admission in time, my degree ______ today.`,
    options: [`would have been completed`, `would be complete`, `would complete`, `will complete`],
    correct: 0,
    explanation: `The sentence describes a third conditional - an unreal past condition with a past result. The structure is: "If + past perfect, ... would have + past participle." If the admission had been obtained in time (past unreal condition), the degree would have been completed (past unreal result). Option B ("would be complete") belongs to a mixed conditional suggesting a present result, but the overall structure of the sentence calls for a consistent third conditional. Option C lacks the modal "have." Option D uses "will" which belongs to the first conditional (real future possibility).`,
    passage: null
  },
  {
    id: 2,
    question: `He had stage fright at first, but he ______ it very quickly.`,
    options: [`got into`, `got away`, `got down`, `got over`],
    correct: 3,
    explanation: `"Get over" is a phrasal verb meaning to recover from or overcome something - a fear, illness, or difficulty. Stage fright is a fear or emotional obstacle, so "got over" correctly expresses overcoming it. "Got into" (A) means to become interested in or enter something. "Got away" (B) means to escape. "Got down" (C) means to depress someone or to write something down. None of these fits the context of overcoming a fear.`,
    passage: null
  },
  {
    id: 3,
    question: `OPTIMISTIC : PESSIMISTIC ::`,
    options: [`philanthropic : misanthropic`, `loving : caring`, `affectionate : loving`, `austere : loving`],
    correct: 0,
    explanation: `Optimistic and pessimistic are direct antonyms - one sees the positive, the other the negative. Philanthropic means loving or helping humanity; misanthropic means hating or distrusting humanity. These two are also exact antonyms, making this the perfect analogous pair. Option B (loving:caring) are synonyms, not antonyms. Option C (affectionate:loving) are also synonyms. Option D (austere:loving) are not a standard antonym pair.`,
    passage: null
  },
  {
    id: 4,
    question: `BENEVOLENT : BENIGN ::`,
    options: [`selfish : egoistic`, `benign : indifferent`, `indifferent : caring`, `egoistic : selfless`],
    correct: 0,
    explanation: `Benevolent (kind, charitable) and benign (gentle, harmless) are near-synonyms - both carry positive, gentle meanings. The analogous pair must also be near-synonyms. Selfish and egoistic both mean concerned primarily with oneself - they are near-synonyms. Option B (benign:indifferent) are not synonyms. Option C (indifferent:caring) are antonyms. Option D (egoistic:selfless) are antonyms, not synonyms.`,
    passage: null
  },
  {
    id: 5,
    question: `INTEGRITY (Choose the word most nearly opposite in meaning):`,
    options: [`humility`, `complexity`, `authenticity`, `duplicity`],
    correct: 3,
    explanation: `Integrity means strict adherence to moral principles - honesty and uprightness. Its antonym is duplicity, which means deceitfulness or double-dealing. Option A (humility) is unrelated to integrity. Option B (complexity) is unrelated. Option C (authenticity) is actually a near-synonym of integrity, not an antonym. Duplicity is the precise opposite: where integrity means being truthful and consistent, duplicity means being deliberately deceptive.`,
    passage: null
  },
  {
    id: 6,
    question: `IMPULSIVE (Choose the word most nearly opposite in meaning):`,
    options: [`impressive`, `expressive`, `comprehensive`, `decisive`],
    correct: 3,
    explanation: `Impulsive means acting suddenly on instinct without thinking through consequences. Its opposite must describe someone who thinks before acting. Decisive means making firm, clear decisions - but decisiveness does not necessarily involve careful deliberation; a decisive person can still be impulsive. However, among the options given, decisive is the closest antonym since it implies a considered rather than a reactive choice. Options A (impressive), B (expressive), and C (comprehensive) share a similar suffix but are entirely unrelated in meaning.`,
    passage: null
  },
  {
    id: 7,
    question: `DIGRESSIVE (Choose the word most similar in meaning):`,
    options: [`impressive`, `successive`, `discursive`, `expressive`],
    correct: 2,
    explanation: `Digressive means wandering away from the main subject or topic during speech or writing. Discursive carries the same meaning - moving from topic to topic without strict focus. Both words describe a lack of linear direction in thought or expression. Option A (impressive) means striking or admirable. Option B (successive) means following in sequence. Option D (expressive) means communicating emotion effectively. None of these captures the idea of straying from a main point.`,
    passage: null
  },
  {
    id: 8,
    question: `DIPSOMANIAC (Choose the word most similar in meaning):`,
    options: [`hypothetic`, `aesthetic`, `hippocratic`, `alcoholic`],
    correct: 3,
    explanation: `A dipsomaniac is a person who suffers from dipsomania - an uncontrollable and often periodic craving for alcoholic beverages. The condition is a recognised medical and psychological term for compulsive alcohol dependency. Among the options, alcoholic (D) is the closest everyday equivalent. Option A (hypothetic) means assumed or theoretical. Option B (aesthetic) relates to beauty or artistic appreciation. Option C (hippocratic) relates to the Hippocratic tradition of medicine.`,
    passage: null
  },
  {
    id: 9,
    question: `Where did the servant hang himself?`,
    options: [`in the secret room`, `on the tower`, `in the haunted chamber`, `in hangman’s chamber`],
    correct: 3,
    explanation: `The passage describes the servant being condemned and hanged in a chamber specifically known as the hangman's chamber - the execution room within the castle. Option A (secret room) is where the servant discovered the lord's secret, not where he was hanged. Option B (tower) is not mentioned as the location. Option C (haunted chamber) is not the specific term used in the passage. The passage explicitly names the hangman's chamber as the location.`,
    passage: `In the Middle Ages, a notorious castle stood on the edge of a dark forest. Its history was steeped in mystery and fear. According to local legend, a servant who had discovered the lord's darkest secret was condemned and hanged in a special chamber that came to be known as the hangman's chamber. Several people who came into the castle seeking shelter were locked up and left to die in the dungeons. Over time, the castle earned a reputation as a place of evil, and villagers refused to venture near it after nightfall. Those brave enough to explore its ruins reported strange sounds and shadows in the corridors.`
  },
  {
    id: 10,
    question: `Several people who came into the castle for ______ were locked up and left to die.`,
    options: [`work`, `shelter`, `king’s services`, `queen’s services`],
    correct: 1,
    explanation: `The passage states that travellers who entered the castle seeking refuge or shelter were locked up and left to die. Option A (work) is incorrect - they were not seeking employment. Option C (king's services) and Option D (queen's services) are not mentioned in the passage. The passage clearly identifies shelter or refuge as the reason people entered, making Option B the correct answer.`,
    passage: `In the Middle Ages, a notorious castle stood on the edge of a dark forest. Its history was steeped in mystery and fear. According to local legend, a servant who had discovered the lord's darkest secret was condemned and hanged in a special chamber that came to be known as the hangman's chamber. Several people who came into the castle seeking shelter were locked up and left to die in the dungeons. Over time, the castle earned a reputation as a place of evil, and villagers refused to venture near it after nightfall. Those brave enough to explore its ruins reported strange sounds and shadows in the corridors.`
  },
  {
    id: 11,
    question: `If she ______ earlier, she would have caught the train.`,
    options: [`had left`, `left`, `would leave`, `has left`],
    correct: 0,
    explanation: `This is a third conditional sentence describing an unreal past situation. "If she had left earlier" (past perfect) signals the condition, and "she would have caught the train" (would have + past participle) is the result. Option A (had left) correctly completes the if-clause with the past perfect. Option B (left) uses simple past, which would belong to the second conditional. Option C (would leave) incorrectly places a modal in the if-clause. Option D (has left) uses present perfect, which does not fit the past unreal context.`,
    passage: null
  },
  {
    id: 12,
    question: `At first the task seemed impossible, but the team finally ______ a solution.`,
    options: [`came across`, `came up with`, `came over`, `came out`],
    correct: 1,
    explanation: `"Come up with" is a phrasal verb meaning to produce, devise, or find an idea or solution, especially after effort. The team found a solution after struggling - exactly the meaning of "came up with." Option A (came across) means to encounter something by chance. Option C (came over) means to visit or to be overcome by a feeling. Option D (came out) means to emerge or become public. None of these describes the deliberate process of devising a solution.`,
    passage: null
  },
  {
    id: 13,
    question: `GENEROUS : STINGY ::`,
    options: [`brave : courageous`, `honest : truthful`, `diligent : lazy`, `humble : modest`],
    correct: 2,
    explanation: `Generous means willing to give freely; stingy means unwilling to give - they are antonyms. The analogous pair must also be antonyms. Diligent means hardworking; lazy means avoiding work - these are direct antonyms. Option A (brave:courageous) are synonyms. Option B (honest:truthful) are synonyms. Option D (humble:modest) are synonyms. Only Option C presents an antonym pair matching the relationship of generous and stingy.`,
    passage: null
  },
  {
    id: 14,
    question: `TRANSPARENT : OPAQUE ::`,
    options: [`honest : sincere`, `fragile : delicate`, `cautious : careful`, `flexible : rigid`],
    correct: 3,
    explanation: `Transparent means allowing light through, clear and open; opaque means not allowing light through, obscure. These are antonyms. The correct analogous pair must also be antonyms. Flexible means capable of bending or adapting; rigid means stiff and unyielding - direct antonyms. Option A (honest:sincere) are synonyms. Option B (fragile:delicate) are synonyms. Option C (cautious:careful) are synonyms. Only flexible:rigid mirrors the antonym relationship.`,
    passage: null
  },
  {
    id: 15,
    question: `VIRTUE (Choose the word most nearly opposite in meaning):`,
    options: [`vice`, `morality`, `honesty`, `kindness`],
    correct: 0,
    explanation: `Virtue means moral excellence, good character, and righteousness. Its direct antonym is vice, which refers to immoral or wicked behaviour - the absence of virtue. Option B (morality) is a synonym of virtue, not an antonym. Option C (honesty) and Option D (kindness) are examples of virtues, making them synonyms rather than antonyms. Vice is the precise classical antonym, as in "virtues and vices."`,
    passage: null
  },
  {
    id: 16,
    question: `FRAGILE (Choose the word most nearly opposite in meaning):`,
    options: [`delicate`, `breakable`, `weak`, `sturdy`],
    correct: 3,
    explanation: `Fragile means easily broken, damaged, or destroyed. Its antonym must convey strength and resistance to damage. Sturdy means strongly built and durable - the precise opposite of fragile. Options A (delicate), B (breakable), and C (weak) are all near-synonyms of fragile, not antonyms. Sturdy is the only option that carries the opposite meaning of strength and durability.`,
    passage: null
  },
  {
    id: 17,
    question: `CANDID (Choose the word most similar in meaning):`,
    options: [`deceptive`, `frank`, `doubtful`, `uncertain`],
    correct: 1,
    explanation: `Candid means frank, open, and sincere - expressing thoughts honestly without evasion. Frank shares exactly this meaning: direct and honest in communication. Option A (deceptive) is the antonym of candid, not a synonym. Option C (doubtful) and Option D (uncertain) both convey hesitation, which is unrelated to candid's meaning of forthright honesty.`,
    passage: null
  },
  {
    id: 18,
    question: `ALTRUIST (Choose the word most similar in meaning):`,
    options: [`egoist`, `philanthropist`, `miser`, `skeptic`],
    correct: 1,
    explanation: `An altruist is a person who shows selfless concern for the welfare of others, placing others' needs above their own. A philanthropist similarly shows generosity and concern for humanity, often through charitable giving or action. Both words describe other-centred goodness. Option A (egoist) is the antonym - concerned only with oneself. Option C (miser) is someone unwilling to spend money. Option D (skeptic) is someone who questions and doubts.`,
    passage: null
  },
  {
    id: 19,
    question: `Why did early sailors continue their dangerous voyages despite the risks?`,
    options: [`They were forced by their governments`, `They wanted to escape storms`, `They hoped to discover new lands and trade routes`, `They disliked staying on land`],
    correct: 2,
    explanation: `The passage explains that sailors were driven by the promise of discovering new lands and establishing profitable trade routes - this was the motivation that outweighed the dangers. Option A (forced by governments) is not stated in the passage. Option B (escape storms) contradicts the passage, which says they faced storms rather than escaped them. Option D (disliked land) is not mentioned and is an unsupported inference.`,
    passage: `Long before the invention of modern navigational instruments, early sailors ventured across vast and treacherous oceans. Their journeys were fraught with danger from violent storms, unknown waters, and the constant threat of starvation. Yet despite these grave risks, they continued their voyages, driven by the promise of discovering new lands and establishing profitable trade routes. Early navigation depended almost entirely on observing the stars, consulting simple hand-drawn maps, and relying on the accumulated instincts of experienced sailors. Over generations, this knowledge was passed down and refined, gradually enabling mariners to undertake longer and more ambitious expeditions.`
  },
  {
    id: 20,
    question: `According to the passage, early navigation mainly depended on:`,
    options: [`advanced technology`, `satellites and instruments`, `modern navigation systems`, `stars, simple maps, and sailors’ instincts`],
    correct: 3,
    explanation: `The passage explicitly states that early navigation depended on observing the stars, consulting simple hand-drawn maps, and relying on accumulated sailors' instincts. Option A (advanced technology) directly contradicts the passage, which describes pre-modern navigation. Option B (satellites and instruments) are modern tools not available to early sailors. Option C (modern navigation systems) is similarly anachronistic.`,
    passage: `Long before the invention of modern navigational instruments, early sailors ventured across vast and treacherous oceans. Their journeys were fraught with danger from violent storms, unknown waters, and the constant threat of starvation. Yet despite these grave risks, they continued their voyages, driven by the promise of discovering new lands and establishing profitable trade routes. Early navigation depended almost entirely on observing the stars, consulting simple hand-drawn maps, and relying on the accumulated instincts of experienced sailors. Over generations, this knowledge was passed down and refined, gradually enabling mariners to undertake longer and more ambitious expeditions.`
  },
  {
    id: 21,
    question: `If the researcher ______ the data more carefully, the error would have been detected earlier.`,
    options: [`analyzed`, `had analyzed`, `analyzes`, `would analyze`],
    correct: 1,
    explanation: `This is a third conditional sentence. The if-clause uses past perfect ("had analyzed"), and the result clause uses "would have been detected" - both past unreal. Option B (had analyzed) correctly completes the past perfect structure. Option A (analyzed) is simple past, unsuitable for third conditional. Option C (analyzes) is present tense. Option D (would analyze) places a modal incorrectly in the if-clause.`,
    passage: null
  },
  {
    id: 22,
    question: `She was nervous before the presentation, but she quickly ______ her anxiety and spoke confidently.`,
    options: [`got over`, `got through`, `got along`, `got down`],
    correct: 0,
    explanation: `"Get over" means to recover from or overcome a difficulty, fear, or emotional burden. Anxiety is an emotional difficulty, so "got over her anxiety" means she overcame it. Option B (got through) means to endure or survive something, which is slightly different - enduring rather than overcoming. Option C (got along) means to have a friendly relationship with someone. Option D (got down) means to depress or discourage.`,
    passage: null
  },
  {
    id: 23,
    question: `COURAGE : COWARDICE ::`,
    options: [`honesty : loyalty`, `wisdom : ignorance`, `kindness : sympathy`, `patience : tolerance`],
    correct: 1,
    explanation: `Courage means bravery in facing danger; cowardice means lack of bravery - direct antonyms. The analogous pair must also be antonyms. Wisdom means good judgement and knowledge; ignorance means lack of knowledge - direct antonyms. Option A (honesty:loyalty) are both positive virtues but not antonyms. Option C (kindness:sympathy) are near-synonyms. Option D (patience:tolerance) are near-synonyms.`,
    passage: null
  },
  {
    id: 24,
    question: `EXPAND : CONTRACT ::`,
    options: [`improve : progress`, `enlarge : increase`, `ascend : descend`, `produce : create`],
    correct: 2,
    explanation: `Expand means to increase in size or scope; contract means to shrink or decrease - direct antonyms. The analogous pair must also represent movement in opposite vertical directions. Ascend means to move upward; descend means to move downward - direct antonyms. Option A (improve:progress) are near-synonyms. Option B (enlarge:increase) are near-synonyms. Option D (produce:create) are near-synonyms.`,
    passage: null
  },
  {
    id: 25,
    question: `DILIGENCE (Choose the word most nearly opposite in meaning):`,
    options: [`dedication`, `effort`, `laziness`, `persistence`],
    correct: 2,
    explanation: `Diligence means steady, persistent, and careful effort in one's work. Its antonym is laziness - the avoidance of work and effort. Option A (dedication) and Option D (persistence) are synonyms of diligence. Option B (effort) is closely related to diligence rather than its opposite. Laziness is the precise antonym because it describes the complete absence of the industrious effort that diligence embodies.`,
    passage: null
  },
  {
    id: 26,
    question: `TRANQUIL (Choose the word most nearly opposite in meaning):`,
    options: [`peaceful`, `calm`, `quiet`, `restless`],
    correct: 3,
    explanation: `Tranquil means calm, peaceful, and undisturbed. Its antonym must convey the opposite - disturbance and agitation. Restless means unable to rest or remain still, indicating agitation and unease. Options A (peaceful), B (calm), and C (quiet) are all synonyms of tranquil, not antonyms. Restless is the only option representing the disturbed, agitated state that is the opposite of tranquillity.`,
    passage: null
  },
  {
    id: 27,
    question: `ASTUTE (Choose the word most similar in meaning):`,
    options: [`clever`, `careless`, `dull`, `ignorant`],
    correct: 0,
    explanation: `Astute means having sharp judgement, keenness of insight, and practical intelligence - being clever in a perceptive way. Clever carries the same meaning of quickness and sharpness of mind. Option B (careless) and Option D (ignorant) are antonyms of astute. Option C (dull) also represents the opposite of sharpness. Clever is the closest synonym among the choices.`,
    passage: null
  },
  {
    id: 28,
    question: `FRUGAL (Choose the word most similar in meaning):`,
    options: [`extravagant`, `careless`, `economical`, `wasteful`],
    correct: 2,
    explanation: `Frugal means being careful and economical in the use of money and resources, avoiding unnecessary expenditure. Economical carries precisely this meaning - making the best use of what is available without waste. Option A (extravagant) is the antonym - spending freely and excessively. Option B (careless) implies neglect rather than careful stewardship. Option D (wasteful) is also an antonym of frugal.`,
    passage: null
  },
  {
    id: 29,
    question: `According to the passage, why did knowledge spread more rapidly after the invention of the printing press?`,
    options: [`Books became easier and faster to produce`, `Books were destroyed more easily`, `Scholars stopped writing manuscripts`, `Libraries were closed`],
    correct: 0,
    explanation: `The passage explains that the invention of printing allowed books to be produced more easily and quickly, making them widely available. This enabled knowledge to spread far more rapidly than was possible when books had to be copied by hand. Option B (destroyed more easily) contradicts the passage entirely. Option C (scholars stopped writing) is not stated. Option D (libraries were closed) is the opposite of what the passage describes.`,
    passage: `Before the invention of the printing press in the fifteenth century, knowledge was preserved almost exclusively in handwritten manuscripts, painstakingly produced by monks and scholars. Books were extraordinarily rare and expensive, available only to the wealthy and the learned. The printing press transformed this situation dramatically by making books easier and faster to produce, allowing them to be distributed widely and at a fraction of their former cost. Knowledge spread more rapidly than ever before, fuelling the Renaissance and the Reformation. Modern libraries continue this tradition of making knowledge accessible, but have evolved far beyond their origins. Today they include vast digital resources accessible online, serving not only scholars but the general public.`
  },
  {
    id: 30,
    question: `Modern libraries differ from early libraries mainly because they:`,
    options: [`include digital resources accessible online`, `provide only handwritten manuscripts`, `contain fewer books`, `are used only by scholars`],
    correct: 0,
    explanation: `The passage explains that modern libraries have evolved beyond their origins and now include vast digital resources that can be accessed online - distinguishing them from early libraries that held only handwritten manuscripts. Option B (only handwritten manuscripts) describes early, not modern, libraries. Option C (fewer books) contradicts the idea of expansion. Option D (used only by scholars) contradicts the passage's emphasis on public access.`,
    passage: `Before the invention of the printing press in the fifteenth century, knowledge was preserved almost exclusively in handwritten manuscripts, painstakingly produced by monks and scholars. Books were extraordinarily rare and expensive, available only to the wealthy and the learned. The printing press transformed this situation dramatically by making books easier and faster to produce, allowing them to be distributed widely and at a fraction of their former cost. Knowledge spread more rapidly than ever before, fuelling the Renaissance and the Reformation. Modern libraries continue this tradition of making knowledge accessible, but have evolved far beyond their origins. Today they include vast digital resources accessible online, serving not only scholars but the general public.`
  },
  {
    id: 31,
    question: `Hardly had the lecture begun when several students ______ the classroom quietly.`,
    options: [`enter`, `were entering`, `had entered`, `entered`],
    correct: 3,
    explanation: `"Hardly had … when …" is an inverted construction using past perfect in the first clause, followed by simple past in the second clause. After "Hardly had the lecture begun," the second clause correctly uses simple past: "several students entered." Option A (enter) is present tense, grammatically inconsistent. Option B (were entering) uses past continuous, which does not follow this inversion pattern. Option C (had entered) uses past perfect again, which is incorrect for the second clause.`,
    passage: null
  },
  {
    id: 32,
    question: `Despite numerous obstacles, the scientist managed to ______ a workable solution to the complex problem.`,
    options: [`bring about`, `look after`, `come up with`, `turn down`],
    correct: 2,
    explanation: `"Come up with" means to devise, produce, or find a solution after deliberate effort. Despite obstacles, the scientist managed to find a workable solution - exactly what "come up with" conveys. Option A (bring about) means to cause something to happen, which is less specific to finding a solution. Option B (look after) means to take care of someone or something. Option D (turn down) means to reject or refuse - the opposite of finding a solution.`,
    passage: null
  },
  {
    id: 33,
    question: `EPHEMERAL : PERMANENT ::`,
    options: [`fragile : delicate`, `stable : constant`, `flexible : rigid`, `temporary : lasting`],
    correct: 3,
    explanation: `Ephemeral means lasting for only a short time - short-lived; its opposite is permanent, meaning lasting forever. Similarly, temporary means lasting for a limited time and its opposite is lasting, meaning enduring. The question follows the pattern of antonym analogies. Options A (fragile:delicate), B (stable:constant), and C (flexible:rigid) do not follow the exact same antonym relationship - C presents an antonym pair but rigid:flexible is unrelated to the ephemeral:permanent concept.`,
    passage: null
  },
  {
    id: 34,
    question: `TEACHER : SCHOOL ::`,
    options: [`driver : road`, `farmer : crop`, `painter : color`, `judge : court`],
    correct: 3,
    explanation: `A teacher works in a school - it is their professional workplace. A judge works in a court - their professional workplace. The relationship is professional:workplace. Option A (driver:road) is not a workplace relationship - the road is not the driver's institution. Option B (farmer:crop) is professional:product, a different relationship. Option C (painter:color) is professional:material.`,
    passage: null
  },
  {
    id: 35,
    question: `PROLIFIC (Choose the word most nearly opposite in meaning):`,
    options: [`productive`, `abundant`, `barren`, `fertile`],
    correct: 2,
    explanation: `Prolific means producing a large quantity of something - fertile and productive. Its antonym must convey the opposite: producing nothing or very little. Barren means unproductive, yielding nothing - the precise opposite of prolific. Option A (productive), Option B (abundant), and Option D (fertile) are all synonyms or near-synonyms of prolific, making them incorrect choices for an antonym.`,
    passage: null
  },
  {
    id: 36,
    question: `HOSTILE (Choose the word most nearly opposite in meaning):`,
    options: [`friendly`, `aggressive`, `violent`, `severe`],
    correct: 0,
    explanation: `Hostile means unfriendly, aggressive, or antagonistic. Its antonym must convey warmth and goodwill. Friendly means pleasant and kind in manner - the direct opposite of hostile. Option B (aggressive), Option C (violent), and Option D (severe) are all synonyms or extensions of hostility, not antonyms. Friendly is the only option expressing the warm, welcoming disposition opposite to hostility.`,
    passage: null
  },
  {
    id: 37,
    question: `COGENT (Choose the word most similar in meaning):`,
    options: [`trivial`, `doubtful`, `convincing`, `weak`],
    correct: 2,
    explanation: `Cogent describes an argument that is powerfully persuasive because it is clear, logical, and well-reasoned. Convincing carries the same force - an argument that successfully persuades through sound reasoning. Option A (trivial) means unimportant or minor - the antonym. Option B (doubtful) means uncertain - also an antonym. Option D (weak) directly contradicts cogent. Only convincing matches the meaning of a compelling, well-supported argument.`,
    passage: null
  },
  {
    id: 38,
    question: `AMELIORATE (Choose the word most similar in meaning):`,
    options: [`improve`, `intensify`, `worsen`, `destroy`],
    correct: 0,
    explanation: `Ameliorate comes from the Latin "melior" meaning better. It means to make a bad situation better or to relieve suffering. Improve is its precise synonym - both denote positive change from a worse to a better condition. Option B (intensify) means to increase in strength - often making something worse. Option C (worsen) is the direct antonym. Option D (destroy) means to demolish entirely, far beyond worsening.`,
    passage: null
  },
  {
    id: 39,
    question: `What major change occurred during the Renaissance according to the passage?`,
    options: [`People stopped studying science`, `Observation and experimentation became more important`, `Scholars relied only on ancient authorities`, `Scientific discoveries were discouraged`],
    correct: 1,
    explanation: `The passage explains that during the Renaissance, scholars moved away from relying solely on ancient authorities and began emphasising direct observation and experimentation as the basis for knowledge. Option A (stopped studying science) is the opposite of what occurred. Option C (relied only on ancient authorities) describes the pre-Renaissance approach. Option D (discoveries were discouraged) contradicts the passage's description of flourishing intellectual inquiry.`,
    passage: `The Renaissance, spanning roughly the fourteenth to the seventeenth century, marked one of the most significant intellectual transformations in human history. Before this period, European scholars largely deferred to ancient authorities such as Aristotle and the Church on matters of science and philosophy. During the Renaissance, however, a new spirit of inquiry emerged. Thinkers began to emphasise observation and experimentation over blind adherence to ancient texts. This shift laid the foundations of modern science. Discoveries made during this period transformed how people understood the universe, challenging long-held assumptions about the earth's place in the cosmos and leading to revolutionary advances in astronomy, anatomy, and mathematics.`
  },
  {
    id: 40,
    question: `According to the passage, scientific discoveries during the Renaissance mainly affected:`,
    options: [`the understanding of the universe`, `agriculture only`, `military strategies`, `architectural designs`],
    correct: 0,
    explanation: `The passage states that discoveries during the Renaissance transformed how people understood the universe - particularly regarding astronomy and humanity's understanding of the cosmos. Option B (agriculture only) is far too narrow and is not mentioned. Option C (military strategies) is not discussed in the passage. Option D (architectural designs) is not the focus of the Renaissance scientific revolution described.`,
    passage: `The Renaissance, spanning roughly the fourteenth to the seventeenth century, marked one of the most significant intellectual transformations in human history. Before this period, European scholars largely deferred to ancient authorities such as Aristotle and the Church on matters of science and philosophy. During the Renaissance, however, a new spirit of inquiry emerged. Thinkers began to emphasise observation and experimentation over blind adherence to ancient texts. This shift laid the foundations of modern science. Discoveries made during this period transformed how people understood the universe, challenging long-held assumptions about the earth's place in the cosmos and leading to revolutionary advances in astronomy, anatomy, and mathematics.`
  },
  {
    id: 41,
    question: `Rarely ______ such an intricate philosophical argument presented with such clarity and precision.`,
    options: [`have scholars encountered`, `scholars encountered`, `scholars have encountered`, `had scholars encounter`],
    correct: 0,
    explanation: `When a negative adverb or adverbial phrase such as "rarely," "never," "seldom," or "hardly" begins a sentence, subject-auxiliary inversion is required. The correct form is: "Rarely + auxiliary + subject + main verb" → "Rarely have scholars encountered." Option B places the subject before the auxiliary (no inversion). Option C is the same error as B. Option D incorrectly uses past perfect "had...encounter" without the past participle form.`,
    passage: null
  },
  {
    id: 42,
    question: `The committee decided to ______ the proposal after discovering several inconsistencies in the financial projections.`,
    options: [`call upon`, `call up`, `call off`, `call out`],
    correct: 2,
    explanation: `"Call off" is a phrasal verb meaning to cancel a planned event or activity. The committee decided to cancel the proposal - exactly what "call off" means. Option A (call upon) means to request or appeal to someone for help. Option B (call up) means to telephone someone or to summon for military service. Option D (call out) means to challenge someone or to shout something aloud.`,
    passage: null
  },
  {
    id: 43,
    question: `PERSPICUOUS : OBSCURE ::`,
    options: [`deliberate : cautious`, `explicit : ambiguous`, `concise : elaborate`, `cautious : reckless`],
    correct: 1,
    explanation: `Perspicuous means clearly expressed and easily understood - lucid and transparent in meaning. Obscure means unclear, difficult to understand, or hidden. They are antonyms. Explicit means clearly and directly stated, leaving nothing implied; ambiguous means open to multiple interpretations, unclear. Explicit and ambiguous are also antonyms, matching the perspicuous:obscure relationship precisely. Options A, C, and D do not present clean antonym pairs.`,
    passage: null
  },
  {
    id: 44,
    question: `ARCHITECT : BLUEPRINT ::`,
    options: [`Composer : Symphony`, `Surgeon : Scalpel`, `Lawyer : Argument`, `Pilot : Aircraft`],
    correct: 0,
    explanation: `An architect creates a blueprint - the blueprint is the primary plan or design document that the architect produces as their professional output. Similarly, a composer creates a symphony - their primary professional creative work. Both pairs follow the relationship: creator produces their defining work. Option B (surgeon:scalpel) is professional:tool. Option C (lawyer:argument) is closer but less precise. Option D (pilot:aircraft) is operator:vehicle.`,
    passage: null
  },
  {
    id: 45,
    question: `OBSEQUIOUS (Choose the word most nearly opposite in meaning):`,
    options: [`submissive`, `defiant`, `servile`, `compliant`],
    correct: 1,
    explanation: `Obsequious means excessively eager to serve, please, or obey - submissive to the point of being servile. Its antonym must convey independence and resistance to authority. Defiant means boldly resistant and refusing to comply - the direct opposite of obsequious. Options A (submissive), C (servile), and D (compliant) are all synonyms of obsequious, making them incorrect as antonyms.`,
    passage: null
  },
  {
    id: 46,
    question: `ERUDITE (Choose the word most nearly opposite in meaning):`,
    options: [`scholarly`, `ignorant`, `intellectual`, `knowledgeable`],
    correct: 1,
    explanation: `Erudite describes a person who is highly educated, deeply learned, and widely knowledgeable across many fields. Its antonym is ignorant - lacking knowledge or education. Options A (scholarly), C (intellectual), and D (knowledgeable) are all synonyms of erudite. Ignorant is the only option expressing the absence of learning that directly opposes erudition.`,
    passage: null
  },
  {
    id: 47,
    question: `FASTIDIOUS (Choose the word most similar in meaning):`,
    options: [`negligent`, `careless`, `meticulous`, `indifferent`],
    correct: 2,
    explanation: `Fastidious means extremely attentive to detail, accuracy, and quality - very precise and exacting in standards. Meticulous shares this exact meaning: careful, thorough, and precise in attending to every detail. Option A (negligent) means failing to take care - the antonym. Option B (careless) is also an antonym. Option D (indifferent) means lacking concern - another antonym. Meticulous is the only synonym among the choices.`,
    passage: null
  },
  {
    id: 48,
    question: `INTRANSIGENT (Choose the word most similar in meaning):`,
    options: [`flexible`, `compliant`, `generous`, `stubborn`],
    correct: 3,
    explanation: `Intransigent describes a person or position that is completely unwilling to compromise or change - firmly fixed in their views regardless of argument or pressure. Stubborn carries this same meaning: obstinately refusing to change. Option A (flexible) is the antonym - willing to adapt. Option B (compliant) means willing to go along with others. Option C (generous) is entirely unrelated to the concept of rigidity in opinion.`,
    passage: null
  },
  {
    id: 49,
    question: `According to the passage, modern historians believe progress results from:`,
    options: [`rational planning alone`, `accidental discoveries alone`, `the interaction of reasoning and chance`, `purely social circumstances`],
    correct: 2,
    explanation: `The passage states that contemporary scholars recognise progress as emerging from the interaction of both disciplined reasoning and accidental discoveries - neither alone is sufficient. Option A (rational planning alone) and Option B (accidental discoveries alone) both represent the one-sided views the passage rejects. Option D (purely social circumstances) is not the focus of the passage. The interaction of the two forces is explicitly named as the correct understanding.`,
    passage: `Modern historians and philosophers of science have long debated the nature of human progress. One school of thought holds that progress is the product of disciplined rational planning - that careful, systematic reasoning drives civilisation forward. Another view emphasises the role of chance, pointing to the many great discoveries that arose from accidents and unexpected observations. Contemporary scholars, however, increasingly recognise that neither explanation alone is sufficient. Progress emerges most powerfully from the interaction of reasoning and chance: disciplined thinking allows researchers to recognise the significance of accidental discoveries and to build upon them systematically. Accidental discoveries thus become valuable not in isolation, but when they are interpreted through careful reasoning.`
  },
  {
    id: 50,
    question: `The passage suggests that accidental discoveries become valuable when:`,
    options: [`they replace rational thinking entirely`, `they are interpreted through careful reasoning`, `they occur during scientific experiments only`, `they are ignored by researchers`],
    correct: 1,
    explanation: `The passage explains that accidental discoveries require interpretation through careful reasoning to become valuable - they do not stand alone. An accidental discovery is meaningful only when a disciplined thinker recognises its significance and builds upon it. Option A (replace rational thinking) contradicts the passage, which argues for their combination. Option C (scientific experiments only) is a restriction the passage does not impose. Option D (ignored by researchers) is the opposite of what the passage describes.`,
    passage: `Modern historians and philosophers of science have long debated the nature of human progress. One school of thought holds that progress is the product of disciplined rational planning - that careful, systematic reasoning drives civilisation forward. Another view emphasises the role of chance, pointing to the many great discoveries that arose from accidents and unexpected observations. Contemporary scholars, however, increasingly recognise that neither explanation alone is sufficient. Progress emerges most powerfully from the interaction of reasoning and chance: disciplined thinking allows researchers to recognise the significance of accidental discoveries and to build upon them systematically. Accidental discoveries thus become valuable not in isolation, but when they are interpreted through careful reasoning.`
  },
  {
    id: 51,
    question: `Choose the word closest in meaning to “OBFUSCATE”.`,
    options: [`Clarify`, `Confuse`, `Illuminate`, `Reveal`],
    correct: 1,
    explanation: `Obfuscate comes from the Latin "obfuscare" meaning to darken. It means to make something unclear, confusing, or difficult to understand - to deliberately muddy the meaning. Confuse carries this meaning: to make something harder to understand. Option A (clarify) is the direct antonym - making things clear. Option C (illuminate) also means to make clear or shed light on. Option D (reveal) means to make known, also opposite in meaning.`,
    passage: null
  },
  {
    id: 52,
    question: `Choose the antonym of “ABERRANT”.`,
    options: [`Normal`, `Deviant`, `Strange`, `Irregular`],
    correct: 0,
    explanation: `Aberrant means departing significantly from the norm, standard, or expected behaviour - deviant. Its antonym must describe conformity to the norm. Normal means conforming to a standard or expected pattern - the precise opposite of aberrant. Options B (deviant), C (strange), and D (irregular) are all synonyms of aberrant. Normal is the only option describing the standard condition that aberrant departs from.`,
    passage: null
  },
  {
    id: 53,
    question: `Ephemeral : Permanent :: Transient : ?`,
    options: [`Temporary`, `Fleeting`, `Lasting`, `Brief`],
    correct: 2,
    explanation: `Ephemeral means lasting for a very short time - fleeting and impermanent. Its antonym is permanent, meaning lasting indefinitely. Transient also means temporary or short-lived. By the same antonym logic, the opposite of transient is lasting - something that endures over time. Options A (temporary) and B (fleeting) are synonyms of transient. Option D (brief) is also a synonym. Lasting is the only antonym.`,
    passage: null
  },
  {
    id: 54,
    question: `Choose the word closest in meaning to “PRAGMATIC”.`,
    options: [`Idealistic`, `Theoretical`, `Emotional`, `Practical`],
    correct: 3,
    explanation: `Pragmatic means dealing with situations in a practical, realistic way rather than based on theory or ideology. Practical carries the same meaning - focused on what works in practice rather than what is theoretically ideal. Option A (idealistic) is the antonym of pragmatic. Option B (theoretical) is also an antonym, concerned with theory rather than practice. Option C (emotional) is unrelated to the pragmatic-practical axis.`,
    passage: null
  },
  {
    id: 55,
    question: `Antonym of “CONVOLUTED”.`,
    options: [`Complex`, `Twisted`, `Intricate`, `Straightforward`],
    correct: 3,
    explanation: `Convoluted means extremely complex, intricate, or difficult to follow - twisted and complicated. Its antonym must convey simplicity and clarity. Straightforward means easy to understand, uncomplicated, and direct - the precise opposite of convoluted. Options A (complex), B (twisted), and C (intricate) are all synonyms of convoluted. Straightforward is the only option expressing clarity and simplicity.`,
    passage: null
  },
  {
    id: 56,
    question: `Auditor : Accounts :: Editor : ?`,
    options: [`Manuscript`, `Printing`, `Publication`, `Bookstore`],
    correct: 0,
    explanation: `An auditor examines and verifies financial accounts - the accounts are the material the auditor works on. An editor examines and revises manuscripts - the manuscript is the material the editor works on. The relationship is professional:the material they review or verify. Option B (printing) is a process, not the material. Option C (publication) is the finished product, not the raw material. Option D (bookstore) is a place.`,
    passage: null
  },
  {
    id: 57,
    question: `Choose the synonym of “LACONIC”.`,
    options: [`Verbose`, `Confusing`, `Brief`, `Elaborate`],
    correct: 2,
    explanation: `Laconic means using very few words to express a great deal - brief and concise in expression. Brief carries the same meaning: short and to the point. Option A (verbose) is the direct antonym - using too many words. Option B (confusing) is unrelated to the quantity of words. Option D (elaborate) also means detailed and lengthy, making it an antonym rather than a synonym.`,
    passage: null
  },
  {
    id: 58,
    question: `Antonym of “MUNDANE”.`,
    options: [`Extraordinary`, `Dull`, `Ordinary`, `Routine`],
    correct: 0,
    explanation: `Mundane means dull, ordinary, and lacking excitement - routine and commonplace. Its antonym must convey the opposite: something remarkable and out of the ordinary. Extraordinary means very unusual or remarkable - beyond what is ordinary. Options B (dull), C (ordinary), and D (routine) are all synonyms of mundane. Extraordinary is the only option expressing the exceptional nature that mundane lacks.`,
    passage: null
  },
  {
    id: 59,
    question: `Scalpel : Surgeon :: Gavel : ?`,
    options: [`Lawyer`, `Police`, `Clerk`, `Judge`],
    correct: 3,
    explanation: `A scalpel is the primary cutting instrument of a surgeon - it is the tool most associated with performing surgical operations. A gavel is the small mallet used by a judge to call order in court or to signal a decision - the tool most associated with judicial authority. The relationship is: specialised professional:their distinctive tool. Option A (lawyer) uses arguments, not a gavel. Option B (police) uses handcuffs and batons. Option C (clerk) records proceedings.`,
    passage: null
  },
  {
    id: 60,
    question: `Choose the synonym of “ALACRITY”.`,
    options: [`Eagerness`, `Laziness`, `Reluctance`, `Delay`],
    correct: 0,
    explanation: `Alacrity means cheerful willingness, promptness, and eagerness in doing something. Eagerness captures this meaning precisely - a readiness and enthusiasm to act. Option B (laziness) is the antonym. Option C (reluctance) is also an antonym - unwillingness to act. Option D (delay) represents the opposite of the promptness that alacrity implies. Eagerness is the only option reflecting the willing, energetic readiness of alacrity.`,
    passage: null
  },
  {
    id: 61,
    question: `Choose the antonym of “TACITURN”.`,
    options: [`Reserved`, `Silent`, `Quiet`, `Talkative`],
    correct: 3,
    explanation: `Taciturn means habitually quiet and reserved - saying very little by nature or habit. Its antonym must describe someone who speaks freely and frequently. Talkative means fond of talking - the direct opposite of taciturn. Options A (reserved), B (silent), and C (quiet) are all synonyms of taciturn. Talkative is the only option representing the opposite end of the communication spectrum.`,
    passage: null
  },
  {
    id: 62,
    question: `Photosynthesis : Plants :: Respiration : ?`,
    options: [`Minerals`, `Soil`, `Water`, `Animals`],
    correct: 3,
    explanation: `Photosynthesis is the defining biological process that occurs in plants - the process by which plants convert sunlight into energy. Respiration is the defining metabolic process by which animals obtain energy from food. In the context of NTS analogies, the relationship is organism:its primary metabolic process. Option A (minerals), Option B (soil), and Option C (water) are not organisms and do not have processes analogous to photosynthesis.`,
    passage: null
  },
  {
    id: 63,
    question: `Synonym of “UBIQUITOUS”.`,
    options: [`Rare`, `Hidden`, `Everywhere`, `Scattered`],
    correct: 2,
    explanation: `Ubiquitous means present, appearing, or found everywhere - seemingly at the same time in all places. Everywhere is the most direct synonym, expressing the same idea of universal presence. Option A (rare) is the antonym - found in very few places. Option B (hidden) implies concealment, the opposite of ubiquity. Option D (scattered) means spread out but not necessarily everywhere - it lacks the sense of universal presence that ubiquitous carries.`,
    passage: null
  },
  {
    id: 64,
    question: `Antonym of “FRUGAL”.`,
    options: [`Economical`, `Thrifty`, `Careful`, `Wasteful`],
    correct: 3,
    explanation: `Frugal means careful and economical in the use of money and resources - avoiding waste. Its antonym must describe someone who spends freely and excessively. Wasteful means using more than is needed or spending without care - the direct opposite of frugal. Options A (economical), B (thrifty), and C (careful) are all synonyms of frugal, reinforcing careful spending rather than opposing it.`,
    passage: null
  },
  {
    id: 65,
    question: `Thermometer : Temperature :: Barometer : ?`,
    options: [`Wind`, `Humidity`, `Pressure`, `Rainfall`],
    correct: 2,
    explanation: `A thermometer measures temperature - it is the instrument designed specifically for that purpose. A barometer measures atmospheric pressure - it is the instrument designed specifically for that purpose. The relationship is instrument:what it measures. Option A (wind) is measured by an anemometer. Option B (humidity) is measured by a hygrometer. Option D (rainfall) is measured by a rain gauge.`,
    passage: null
  },
  {
    id: 66,
    question: `Choose the synonym of “INSIPID”.`,
    options: [`Interesting`, `Flavorless`, `Colorful`, `Exciting`],
    correct: 1,
    explanation: `Insipid means lacking flavour, taste, or interest - bland and unexciting. Flavorless captures the primary meaning: having no taste or interest. Option A (interesting) is the antonym of insipid. Option C (colorful) implies vibrancy, the opposite of insipid dullness. Option D (exciting) is also an antonym. Flavorless is the most direct synonym because insipid's root meaning relates to lack of taste, and by extension, dullness.`,
    passage: null
  },
  {
    id: 67,
    question: `Antonym of “AUGMENT”.`,
    options: [`Reduce`, `Expand`, `Increase`, `Strengthen`],
    correct: 0,
    explanation: `Augment means to increase, add to, or make larger. Its antonym must mean to decrease or make smaller. Reduce means to make smaller in size, amount, or degree - the direct opposite of augment. Option B (expand), Option C (increase), and Option D (strengthen) are all synonyms of augment, all describing increase rather than decrease.`,
    passage: null
  },
  {
    id: 68,
    question: `Pen : Writes :: Knife : ?`,
    options: [`Slice`, `Carve`, `Cut`, `Chop`],
    correct: 2,
    explanation: `A pen is a tool whose function is to write - writing is what a pen does. A knife is a tool whose function is to cut - cutting is what a knife does. The relationship is tool:its primary function. Option A (slice) and Option D (chop) are more specific types of cutting, less general than the simple function "cut." Option B (carve) also describes a specific type of cutting. Cut is the most general and accurate statement of a knife's primary function.`,
    passage: null
  },
  {
    id: 69,
    question: `Synonym of “RETICENT”.`,
    options: [`Loud`, `Reserved`, `Bold`, `Talkative`],
    correct: 1,
    explanation: `Reticent means reluctant to speak or express one's thoughts - habitually quiet and restrained in speech. Reserved carries the same meaning: tending to keep one's feelings and thoughts to oneself. Option A (loud) is the antonym of reticent. Option C (bold) implies confidence and assertiveness, opposite to reticence. Option D (talkative) is the direct antonym of reticent.`,
    passage: null
  },
  {
    id: 70,
    question: `Antonym of “OBSTINATE”.`,
    options: [`Stubborn`, `Flexible`, `Rigid`, `Adamant`],
    correct: 1,
    explanation: `Obstinate means stubbornly refusing to change one's opinion or behaviour - fixed and unyielding. Its antonym must describe willingness to change and adapt. Flexible means capable of adapting and willing to compromise - the direct opposite of obstinate. Options A (stubborn), C (rigid), and D (adamant) are all synonyms of obstinate, all conveying the same unyielding quality. Only flexible represents adaptability.`,
    passage: null
  },
  {
    id: 71,
    question: `Composer : Symphony :: Architect : ?`,
    options: [`Plan`, `Map`, `Building`, `Brick`],
    correct: 2,
    explanation: `A composer creates a symphony - the symphony is the primary artistic work the composer produces. An architect designs and creates a building - the building is the primary work the architect produces. The relationship is creator:their primary creative output. Option A (plan) is similar to blueprint - the design document rather than the finished work. Option B (map) is unrelated. Option D (brick) is a material, not an output.`,
    passage: null
  },
  {
    id: 72,
    question: `Synonym of “DELETERIOUS”.`,
    options: [`Harmful`, `Beneficial`, `Useful`, `Healthy`],
    correct: 0,
    explanation: `Deleterious comes from the Greek "deleterios" meaning noxious or destructive. It means causing harm, damage, or deterioration. Harmful is its precise synonym - both words describe something that causes damage or injury. Option B (beneficial) is the antonym. Option C (useful) is also an antonym. Option D (healthy) similarly describes something positive, opposite to deleterious.`,
    passage: null
  },
  {
    id: 73,
    question: `Antonym of “EPHEMERAL”.`,
    options: [`Brief`, `Lasting`, `Temporary`, `Fleeting`],
    correct: 1,
    explanation: `Ephemeral means lasting for only a short time - transient and impermanent. Its antonym must describe something that endures. Lasting means continuing for a long time - the direct opposite of ephemeral. Options A (brief), C (temporary), and D (fleeting) are all synonyms of ephemeral, all conveying short duration. Lasting is the only option expressing endurance over time.`,
    passage: null
  },
  {
    id: 74,
    question: `Battery : Energy :: Reservoir : ?`,
    options: [`Oil`, `Electricity`, `Fuel`, `Water`],
    correct: 3,
    explanation: `A battery stores electrical energy and releases it when needed - energy is what a battery contains and provides. A reservoir stores water and supplies it when needed - water is what a reservoir contains and provides. The relationship is storage container:what it stores. Option A (oil) would describe a tank or tanker. Option B (electricity) would describe a battery or capacitor. Option C (fuel) would describe a fuel tank.`,
    passage: null
  },
  {
    id: 75,
    question: `Synonym of “PERFUNCTORY”.`,
    options: [`Careful`, `Thorough`, `Detailed`, `Careless`],
    correct: 3,
    explanation: `Perfunctory means carried out with minimal effort or care, done as a routine duty without genuine interest. Careless carries the same implication: done without sufficient attention or thoroughness. Option A (careful), Option B (thorough), and Option C (detailed) are all antonyms of perfunctory - they describe the diligent, thorough approach that perfunctory explicitly lacks. Only careless matches the negligent, cursory quality of perfunctory action.`,
    passage: null
  },
  {
    id: 76,
    question: `Antonym of “CANDID”.`,
    options: [`Deceptive`, `Frank`, `Honest`, `Open`],
    correct: 0,
    explanation: `Candid means open, honest, and frank - expressing one's true feelings without evasion. Its antonym must convey dishonesty or concealment. Deceptive means misleading or creating false impressions - the direct opposite of candid honesty. Options B (frank), C (honest), and D (open) are all synonyms of candid. Deceptive is the only option representing the dishonest, concealing behaviour that contrasts with candid openness.`,
    passage: null
  },
  {
    id: 77,
    question: `Dictionary : Words :: Atlas : ?`,
    options: [`Oceans`, `Countries`, `Cities`, `Maps`],
    correct: 3,
    explanation: `A dictionary is a reference work that contains words as its primary content - it is a collection of words with their definitions. An atlas is a reference work that contains maps as its primary content - it is a collection of maps of geographical areas. The relationship is reference book:its primary content. Option A (oceans), B (countries), and C (cities) are subjects that maps depict, not what an atlas physically contains.`,
    passage: null
  },
  {
    id: 78,
    question: `Synonym of “CAPRICIOUS”.`,
    options: [`Predictable`, `Reliable`, `Stable`, `Impulsive`],
    correct: 3,
    explanation: `Capricious means given to sudden and unpredictable changes of mood or behaviour - acting on whim without consistency. Impulsive carries a similar meaning: acting suddenly on instinct without forethought, leading to unpredictable behaviour. Option A (predictable) is the antonym. Option B (reliable) is also an antonym. Option C (stable) suggests consistency, opposite to capriciousness.`,
    passage: null
  },
  {
    id: 79,
    question: `Antonym of “IMPECCABLE”.`,
    options: [`Flawed`, `Faultless`, `Perfect`, `Ideal`],
    correct: 0,
    explanation: `Impeccable means entirely without fault or flaw - perfect in every respect. Its antonym must convey the presence of faults or imperfections. Flawed means having defects, errors, or weaknesses - the direct opposite of impeccable. Options B (faultless), C (perfect), and D (ideal) are all synonyms of impeccable, describing something without error. Only flawed represents the presence of imperfection.`,
    passage: null
  },
  {
    id: 80,
    question: `Seed : Plant :: Egg : ?`,
    options: [`Nest`, `Bird`, `Feather`, `Wing`],
    correct: 1,
    explanation: `A seed is the origin from which a plant develops - the seed grows into a plant through germination. An egg is the origin from which a bird develops - the egg hatches into a bird. The relationship is: biological origin:the organism that develops from it. Option A (nest) is where an egg is kept, not what develops from it. Option C (feather) and Option D (wing) are parts of a bird, not the organism that hatches.`,
    passage: null
  },
  {
    id: 81,
    question: `Synonym of “OSTENTATIOUS”.`,
    options: [`Modest`, `Showy`, `Simple`, `Humble`],
    correct: 1,
    explanation: `Ostentatious describes behaviour or display that is designed to attract attention and impress others - showy and flamboyant. Showy carries exactly this meaning: conspicuously attractive or flashy in a way intended to impress. Option A (modest) is the antonym - understated and unassuming. Option C (simple) also implies the absence of show. Option D (humble) describes self-effacement, the opposite of ostentatious display.`,
    passage: null
  },
  {
    id: 82,
    question: `Antonym of “VINDICATE”.`,
    options: [`Blame`, `Justify`, `Defend`, `Prove`],
    correct: 0,
    explanation: `Vindicate means to clear someone of blame, suspicion, or criticism - to prove that a person or action is justified or correct. Its antonym must convey the opposite: assigning blame or fault. Blame means to hold responsible for a fault or wrong - the direct opposite of vindicating someone. Options B (justify), C (defend), and D (prove) are all near-synonyms of vindicate, supporting rather than opposing its meaning.`,
    passage: null
  },
  {
    id: 83,
    question: `Compass : Direction :: Scale : ?`,
    options: [`Weight`, `Length`, `Temperature`, `Time`],
    correct: 0,
    explanation: `A compass is an instrument used to determine direction - it shows which way is north, south, east, and west. A scale is an instrument used to measure weight - it shows how heavy an object is. The relationship is instrument:what it measures or determines. Option B (temperature) is measured by a thermometer. Option C (length) is measured by a ruler or tape measure. Option D (time) is measured by a clock.`,
    passage: null
  },
  {
    id: 84,
    question: `Synonym of “DILIGENT”.`,
    options: [`Careless`, `Lazy`, `Negligent`, `Hardworking`],
    correct: 3,
    explanation: `Diligent means having and showing care and conscientiousness in one's work - steadily hardworking. Hardworking carries the same meaning: regularly putting in significant effort and labour. Option A (careless), Option B (lazy), and Option C (negligent) are all antonyms of diligent - they describe the absence of the sustained effort that diligence requires. Only hardworking matches the consistent, earnest effort that diligent describes.`,
    passage: null
  },
  {
    id: 85,
    question: `Antonym of “PLACID”.`,
    options: [`Calm`, `Agitated`, `Peaceful`, `Quiet`],
    correct: 1,
    explanation: `Placid means calm, undisturbed, and peaceful in nature or temperament. Its antonym must convey disturbance and unrest. Agitated means troubled, disturbed, and in a state of anxiety or restlessness - the direct opposite of placid. Options A (calm), C (peaceful), and D (quiet) are all synonyms of placid. Agitated is the only option describing the unsettled, anxious state that contrasts with placid serenity.`,
    passage: null
  },
  {
    id: 86,
    question: `Teacher : Knowledge :: Farmer : ?`,
    options: [`Field`, `Soil`, `Crop`, `Water`],
    correct: 2,
    explanation: `A teacher imparts or produces knowledge - knowledge is the teacher's primary professional output or contribution. A farmer produces crops - crops are the farmer's primary professional output. The relationship is professional:what they produce or provide. Option A (field) is where the farmer works - the workplace, not the product. Option B (soil) is the medium, not the product. Option D (water) is an input, not the output.`,
    passage: null
  },
  {
    id: 87,
    question: `Synonym of “AMBIVALENT”.`,
    options: [`Certain`, `Clear`, `Determined`, `Conflicted`],
    correct: 3,
    explanation: `Ambivalent means having mixed, contradictory, or uncertain feelings about something - being pulled in two directions simultaneously. Conflicted captures this same internal tension: experiencing opposing feelings or desires at the same time. Option A (certain) is the antonym - having no doubt. Option B (clear) similarly conveys certainty. Option C (determined) means having made a firm decision - the opposite of ambivalent indecision.`,
    passage: null
  },
  {
    id: 88,
    question: `Antonym of “OBSOLETE”.`,
    options: [`Ancient`, `Modern`, `Outdated`, `Old`],
    correct: 1,
    explanation: `Obsolete means no longer in use or no longer useful because something newer and better has replaced it - outdated. Its antonym must describe something current and in active use. Modern means relating to the present time - current, up to date, and in active use. Options A (ancient), C (outdated), and D (old) are all synonyms or near-synonyms of obsolete. Modern is the only option expressing currency and relevance.`,
    passage: null
  },
  {
    id: 89,
    question: `Gloves : Hands :: Boots : ?`,
    options: [`Feet`, `Legs`, `Toes`, `Ankles`],
    correct: 0,
    explanation: `Gloves are worn on the hands - they cover and protect the hands. Boots are worn on the feet - they cover and protect the feet. The relationship is protective covering:the body part it covers. Option B (legs) are partly covered by boots but feet is the primary body part. Option C (toes) are part of the feet but are a component rather than the whole. Option D (ankles) are similarly a component of what boots cover.`,
    passage: null
  },
  {
    id: 90,
    question: `Synonym of “ELOQUENT”.`,
    options: [`Inarticulate`, `Persuasive`, `Silent`, `Weak`],
    correct: 1,
    explanation: `Eloquent means fluent, persuasive, and expressive in speech or writing - able to convey ideas clearly and movingly. Persuasive captures this quality: having the ability to convince through compelling expression. Option A (inarticulate) is the antonym - unable to express oneself clearly. Option C (silent) is also an antonym. Option D (weak) describes ineffective expression - another antonym.`,
    passage: null
  },
  {
    id: 91,
    question: `Antonym of “BENIGN”.`,
    options: [`Kind`, `Gentle`, `Mild`, `Harmful`],
    correct: 3,
    explanation: `Benign means gentle, kindly, and harmless - not dangerous or threatening. Its antonym must convey danger or damage. Harmful means causing or likely to cause harm, injury, or damage - the direct opposite of benign. Options A (kind), B (gentle), and C (mild) are all synonyms of benign. Harmful is the only option expressing danger and damage that contrasts with benign harmlessness.`,
    passage: null
  },
  {
    id: 92,
    question: `Fuel : Engine :: Food : ?`,
    options: [`Blood`, `Brain`, `Body`, `Muscle`],
    correct: 2,
    explanation: `Fuel is what powers and enables an engine to function - without fuel, an engine cannot operate. Food is what powers and enables the body to function - without food, the body cannot sustain life. The relationship is energy source:the system it powers. Option A (blood) is a medium of transport within the body, not the energy source. Option B (brain) is an organ. Option D (muscle) is a body component, not the system being powered.`,
    passage: null
  },
  {
    id: 93,
    question: `Synonym of “SCRUTINIZE”.`,
    options: [`Ignore`, `Examine`, `Hide`, `Avoid`],
    correct: 1,
    explanation: `Scrutinize means to examine something very carefully and critically - to inspect in minute detail. Examine shares this meaning: to look at or consider carefully and thoroughly. Option A (ignore) is the antonym. Option C (hide) means to conceal, the opposite of examination. Option D (avoid) means to stay away from, also an antonym. Examine is the only option conveying the close, careful inspection that scrutinize demands.`,
    passage: null
  },
  {
    id: 94,
    question: `Antonym of “RELINQUISH”.`,
    options: [`Abandon`, `Surrender`, `Retain`, `Release`],
    correct: 2,
    explanation: `Relinquish means to voluntarily give up, surrender, or let go of something - to release one's hold. Its antonym must convey holding on or keeping. Retain means to keep possession of something - the direct opposite of relinquishing it. Options A (abandon), B (surrender), and D (release) are all synonyms of relinquish - they all describe giving something up rather than keeping it.`,
    passage: null
  },
  {
    id: 95,
    question: `Leaves : Tree :: Pages : ?`,
    options: [`Ink`, `Paper`, `Pen`, `Book`],
    correct: 3,
    explanation: `Leaves are the component parts that collectively make up a tree - a tree is composed of many leaves. Pages are the component parts that collectively make up a book - a book is composed of many pages. The relationship is component part:the whole it belongs to. Option A (ink) is a material used in books, not what pages constitute. Option B (paper) is the material pages are made of. Option C (pen) is a writing instrument, not a structural component of a book.`,
    passage: null
  },
  {
    id: 96,
    question: `Synonym of “SPARSE”.`,
    options: [`Dense`, `Scattered`, `Crowded`, `Rare`],
    correct: 1,
    explanation: `Sparse means thinly spread out or distributed - present in small amounts and not densely packed. Scattered means spread or distributed unevenly over an area, occurring in isolated instances rather than densely. Scattered is the more precise synonym because both words convey the idea of things spread thinly rather than gathered closely. Option A (dense) is the antonym. Option C (crowded) is also an antonym. Option D (rare) means infrequent in occurrence, which is a related but distinct meaning from thinly distributed.`,
    passage: null
  },
  {
    id: 97,
    question: `Antonym of “ARDENT”.`,
    options: [`Indifferent`, `Enthusiastic`, `Passionate`, `Zealous`],
    correct: 0,
    explanation: `Ardent means very enthusiastic, passionate, and intensely devoted - burning with eagerness. Its antonym must convey a complete lack of passion or interest. Indifferent means having no particular interest, concern, or enthusiasm - neither for nor against something. Options B (enthusiastic), C (passionate), and D (zealous) are all synonyms of ardent, all describing intense feeling. Only indifferent represents the absence of feeling that contrasts with ardent passion.`,
    passage: null
  },
  {
    id: 98,
    question: `Painter : Canvas :: Writer : ?`,
    options: [`Ink`, `Paper`, `Pen`, `Book`],
    correct: 1,
    explanation: `A painter works on canvas - the canvas is the surface on which a painter creates their art. A writer works on paper - the paper is the surface on which a writer creates their work. The relationship is creator:the surface or medium they work on. Option A (ink) is a material used in writing, not the surface. Option C (pen) is a tool. Option D (book) is the finished product, not the working surface.`,
    passage: null
  },
  {
    id: 99,
    question: `Synonym of “TENACIOUS”.`,
    options: [`Weak`, `Lazy`, `Persistent`, `Careless`],
    correct: 2,
    explanation: `Tenacious means holding firmly to something - persistent, determined, and not giving up easily. Persistent carries the same meaning: continuing firmly despite obstacles or opposition. Option A (weak), Option B (lazy), and Option D (careless) are all antonyms of tenacious - they describe the absence of the determination and firmness that tenacity implies. Only persistent matches the resolute, continuing effort of a tenacious person.`,
    passage: null
  },
  {
    id: 100,
    question: `Antonym of “CONCISE”.`,
    options: [`Brief`, `Short`, `Compact`, `Verbose`],
    correct: 3,
    explanation: `Concise means expressing much in few words - brief, clear, and without unnecessary elaboration. Its antonym must describe excessive wordiness. Verbose means using more words than needed, excessively wordy - the direct opposite of concise. Options A (brief), B (short), and C (compact) are all synonyms of concise. Verbose is the only option describing the excessive, wordy style that conciseness avoids.`,
    passage: null
  },
  {
    id: 101,
    question: `Choose the word closest in meaning to “OBDURATE”.`,
    options: [`Flexible`, `Honest`, `Generous`, `Stubborn`],
    correct: 3,
    explanation: `Obdurate means stubbornly refusing to change one's opinion or course of action, despite all argument or pressure - hardened and inflexible in position. Stubborn shares this meaning precisely: obstinately fixed in one's views and resistant to persuasion. Option A (flexible) is the antonym - willing to adapt. Option B (honest) is unrelated to inflexibility. Option C (generous) is also entirely unrelated to the concept of obstinacy.`,
    passage: null
  },
  {
    id: 102,
    question: `Antonym of “EQUIVOCAL”.`,
    options: [`Ambiguous`, `Definite`, `Uncertain`, `Doubtful`],
    correct: 1,
    explanation: `Equivocal means using language that is deliberately ambiguous or unclear - open to more than one interpretation, often to mislead. Its antonym must convey clarity and precision. Definite means clear, precise, and unambiguous - leaving no room for doubt or multiple interpretations. Options A (ambiguous), C (uncertain), and D (doubtful) are all synonyms of equivocal. Only definite expresses the clarity and precision that equivocal deliberately lacks.`,
    passage: null
  },
  {
    id: 103,
    question: `Skeptic : Doubt :: Optimist : ?`,
    options: [`Fear`, `Anger`, `Logic`, `Hope`],
    correct: 3,
    explanation: `A skeptic is someone who habitually questions and doubts - doubt is the defining characteristic of a skeptic's outlook. An optimist is someone who habitually expects positive outcomes - hope is the defining characteristic of an optimist's outlook. The relationship is person characterised by:the defining quality of their worldview. Option A (fear) characterises a pessimist or a fearful person, not an optimist. Options B (anger) and C (logic) are unrelated to optimism.`,
    passage: null
  },
  {
    id: 104,
    question: `The new evidence ______ the opposition's argument, leaving little room for debate.`,
    options: [`diminished`, `reinforced`, `complicated`, `justified`],
    correct: 0,
    explanation: `The sentence describes a situation where evidence weakened or undermined the opposition's argument - leaving little room for debate means the argument was effectively destroyed. Diminished means reduced or weakened. Option B (reinforced) means strengthened - the opposite of what the context requires. Option C (complicated) means made more complex - not the same as defeating an argument. Option D (justified) means provided good reason for - also contradicts the context.`,
    passage: null
  },
  {
    id: 105,
    question: `Synonym of “ENERVATE”.`,
    options: [`Strengthen`, `Exhaust`, `Encourage`, `Inspire`],
    correct: 1,
    explanation: `Enervate means to cause someone to feel drained of energy or vitality - to weaken or exhaust. Exhaust carries this meaning: to make someone feel completely drained of strength or energy. Option A (strengthen) is the antonym. Option C (encourage) means to inspire confidence - also an antonym. Option D (inspire) means to fill with enthusiasm - another antonym. Only exhaust captures the draining, weakening effect of enervation.`,
    passage: null
  },
  {
    id: 106,
    question: `Antonym of “PRODIGAL”.`,
    options: [`Wasteful`, `Extravagant`, `Lavish`, `Thrifty`],
    correct: 3,
    explanation: `Prodigal means spending money or resources in a recklessly wasteful way - extravagant to excess. Its antonym must convey careful, economical use of resources. Thrifty means using money and resources carefully and without waste - the direct opposite of prodigal excess. Options A (wasteful), B (extravagant), and C (lavish) are all synonyms of prodigal, all describing excessive spending. Only thrifty represents careful economy.`,
    passage: null
  },
  {
    id: 107,
    question: `Benevolent : Kind :: Malevolent : ?`,
    options: [`Calm`, `Cruel`, `Gentle`, `Friendly`],
    correct: 1,
    explanation: `Benevolent means well-meaning and kindly - disposed to doing good. Malevolent is its direct antonym - disposed to doing harm. The relationship between the two is: positive intention:negative intention. Cruel means causing pain or suffering deliberately, which captures the harmful, malicious quality of malevolence. Option A (calm) is unrelated to intention. Option C (gentle) is a near-synonym of benevolent. Option D (friendly) is also a synonym of benevolent.`,
    passage: null
  },
  {
    id: 108,
    question: `The professor's explanation was so ______ that most students struggled to follow his reasoning.`,
    options: [`lucid`, `precise`, `convoluted`, `transparent`],
    correct: 2,
    explanation: `The context describes a professor whose explanation was difficult for students to follow - they struggled to understand it. Convoluted means extremely complex and difficult to follow - intricate to the point of confusion. Option A (lucid) means clear and easy to understand - the opposite of what the context requires. Option B (precise) means exact and accurate, which would aid understanding. Option D (transparent) means easy to see through or understand.`,
    passage: null
  },
  {
    id: 109,
    question: `Synonym of “FURTIVE”.`,
    options: [`Secretive`, `Honest`, `Open`, `Direct`],
    correct: 0,
    explanation: `Furtive means attempting to avoid notice or attention - stealthy and secretive in manner, as if doing something wrong. Secretive carries the same meaning: inclined to conceal and keep things hidden. Option B (honest) is the antonym - open and truthful. Option C (open) means not secretive - also an antonym. Option D (direct) means direct and clear and frank, another antonym of furtive.`,
    passage: null
  },
  {
    id: 110,
    question: `Antonym of “IMPLICIT”.`,
    options: [`Hidden`, `Indirect`, `Explicit`, `Suggested`],
    correct: 2,
    explanation: `Implicit means suggested or understood without being directly or explicitly stated - implied rather than expressed outright. Its antonym must convey direct, clear statement. Explicit means clearly and directly stated, leaving nothing implied or open to interpretation. Options A (hidden), B (indirect), and D (suggested) are all synonyms of implicit - all describing something communicated indirectly. Only explicit represents the direct, clear statement that is the opposite of implicit communication.`,
    passage: null
  },
  {
    id: 111,
    question: `Planets : Orbit :: Electricity : ?`,
    options: [`Conductor`, `Wire`, `Circuit`, `Electron`],
    correct: 2,
    explanation: `Planets move in orbits - the orbit is the path that defines a planet's movement through space. Electricity flows in circuits - the circuit is the path that defines electricity's movement through a conductor. The relationship is entity:the path it moves along. Option A (conductor) is the material electricity travels through, not the path itself. Option B (wire) is similarly a material. Option D (electron) is a particle, not a pathway.`,
    passage: null
  },
  {
    id: 112,
    question: `Synonym of “QUERULOUS”.`,
    options: [`Cheerful`, `Content`, `Calm`, `Complaining`],
    correct: 3,
    explanation: `Querulous means complaining in a petulant or whining manner - given to frequent fault-finding and complaints. Complaining is the precise synonym: expressing dissatisfaction or grievance. Option A (cheerful) is the antonym. Option B (content) also represents the antonym - satisfied and without complaint. Option C (calm) is unrelated to the querulous habit of voicing grievances.`,
    passage: null
  },
  {
    id: 113,
    question: `Antonym of “CREDULOUS”.`,
    options: [`Skeptical`, `Gullible`, `Trusting`, `Naive`],
    correct: 0,
    explanation: `Credulous means having a tendency to believe things too readily - easily deceived because of excessive trust. Its antonym must describe someone who questions and requires evidence. Skeptical means not easily convinced, requiring proof before believing - the direct opposite of credulous. Options B (gullible), C (trusting), and D (naive) are all synonyms of credulous - all describing excessive and uncritical belief. Only skeptical represents the questioning, evidence-requiring stance that contrasts with credulity.`,
    passage: null
  },
  {
    id: 114,
    question: `Despite facing strong opposition, the leader remained ______ in his decision to proceed with the reforms.`,
    options: [`resolute`, `indifferent`, `hesitant`, `uncertain`],
    correct: 0,
    explanation: `Despite strong opposition, the leader maintained their position - they did not waver or back down. Resolute means admirably purposeful, determined, and unwavering. Option B (indifferent) means having no strong feelings - this contradicts the resolve implied by "despite facing strong opposition." Option C (hesitant) means uncertain and tentative - the opposite of the firm stance described. Option D (uncertain) also contradicts the decisive leadership implied.`,
    passage: null
  },
  {
    id: 115,
    question: `Key : Lock :: Password : ?`,
    options: [`Door`, `Security`, `Access`, `Login`],
    correct: 3,
    explanation: `A key physically opens a lock - it is the specific tool designed to operate a particular locking mechanism. A password provides access to a system - it is the specific code that enables entry to a protected login. The relationship is: the specific code or key:what it grants entry to. Login (D) is the process of gaining access, which a password directly enables. Option B (security) is too broad. Option C (access) is close but less specific than login as the direct function of a password.`,
    passage: null
  },
  {
    id: 116,
    question: `Synonym of “INSULAR”.`,
    options: [`Narrow-minded`, `Open-minded`, `Friendly`, `Curious`],
    correct: 0,
    explanation: `Insular means of or relating to an island - and by extension, ignorant of or uninterested in cultures, ideas, or peoples outside one's own experience. Narrow-minded carries the same meaning in this context: limited in perspective and unwilling to consider other viewpoints. Option B (open-minded) is the antonym - receptive to new ideas. Option C (friendly) describes social warmth, unrelated to intellectual breadth. Option D (curious) is the opposite of insular - eager to explore new ideas.`,
    passage: null
  },
  {
    id: 117,
    question: `Antonym of “INTRANSIGENT”.`,
    options: [`Rigid`, `Obstinate`, `Stubborn`, `Flexible`],
    correct: 3,
    explanation: `Intransigent means refusing to change one's views or to agree to a compromise - completely inflexible in position. Its antonym must describe willingness to adapt. Flexible means willing to change, adapt, or compromise in response to different circumstances. Options A (rigid), B (obstinate), and C (stubborn) are all synonyms of intransigent - all conveying the same unyielding refusal to bend. Only flexible represents adaptability.`,
    passage: null
  },
  {
    id: 118,
    question: `Author : Novel :: Composer : ?`,
    options: [`Symphony`, `Orchestra`, `Musician`, `Instrument`],
    correct: 0,
    explanation: `An author writes a novel - the novel is the primary creative work that an author produces. A composer writes a symphony - the symphony is the primary creative work that a composer produces. The relationship is creator:their primary creative work product. Option B (orchestra) is the ensemble that performs the symphony, not the work itself. Option C (musician) is a performer, not a creator's output. Option D (instrument) is a tool used to create music.`,
    passage: null
  },
  {
    id: 119,
    question: `The diplomat gave a ______ and well-considered response to the sensitive question.`,
    options: [`impulsive`, `careless`, `measured`, `erratic`],
    correct: 2,
    explanation: `The context describes a sensitive question requiring a careful, thoughtful response - the opposite of impulsive or careless. Measured means carefully considered and restrained - well-judged and deliberately controlled. Option A (impulsive) is the antonym - acting without forethought. Option B (careless) means showing insufficient care. Option D (erratic) means irregular and unpredictable. Only measured describes the deliberate, considered response appropriate to a sensitive diplomatic situation.`,
    passage: null
  },
  {
    id: 120,
    question: `Synonym of “DIDACTIC”.`,
    options: [`Entertaining`, `Instructive`, `Confusing`, `Decorative`],
    correct: 1,
    explanation: `Didactic means intended to teach, instruct, or convey a moral lesson - designed to have an educational purpose. Instructive carries the same meaning: providing useful information or guidance through teaching. Option A (entertaining) describes something enjoyable rather than educational - related but not synonymous. Option C (confusing) is an antonym. Option D (decorative) refers to aesthetic appearance, entirely unrelated to teaching.`,
    passage: null
  },
  {
    id: 121,
    question: `Antonym of “ESOTERIC”.`,
    options: [`Common`, `Specialized`, `Obscure`, `Hidden`],
    correct: 0,
    explanation: `Esoteric means intended for or understood by only a small number of people with specialised knowledge - deliberately obscure and difficult to access. Its antonym must describe knowledge or ideas that are widely known and accessible. Common means widespread, ordinary, and familiar to most people - the direct opposite of esoteric exclusivity. Options B (specialized), C (obscure), and D (hidden) are all synonyms of esoteric. Only common represents broad accessibility.`,
    passage: null
  },
  {
    id: 122,
    question: `Pilot : Cockpit :: Driver : ?`,
    options: [`Engine`, `Dashboard`, `Car`, `Steering wheel`],
    correct: 2,
    explanation: `A pilot operates from within the cockpit - the cockpit is the pilot's specific workspace and operating area. A driver operates from within a car - the car is the driver's specific vehicle and workspace. The relationship is operator:their specific operating environment or vehicle. Option A (engine) is the mechanical component inside the car. Option B (dashboard) is a component within the car, not the whole. Option D (steering wheel) is a single control within the car.`,
    passage: null
  },
  {
    id: 123,
    question: `Historians believe that the ancient chronicler may have ______ certain events to make them more dramatic.`,
    options: [`ignored`, `reduced`, `exaggerated`, `corrected`],
    correct: 2,
    explanation: `Writers may exaggerate or embellish events to make their accounts more dramatic and engaging - this is a recognised practice in historical chronicles and literary works. Exaggerated means represented as greater than it really is. Option A (ignored) means the events were not recorded. Option B (reduced) means made smaller or diminished. Option D (corrected) means made more accurate, the opposite of the distortion implied.`,
    passage: null
  },
  {
    id: 124,
    question: `Synonym of “LUGUBRIOUS”.`,
    options: [`Cheerful`, `Mournful`, `Energetic`, `Relaxed`],
    correct: 1,
    explanation: `Lugubrious means looking or sounding excessively sad and dismal - mournfully gloomy in appearance or manner. Mournful shares this meaning: expressing or filled with sorrow and grief. Option A (cheerful) is the antonym. Option C (energetic) implies vitality and vigour, the opposite of lugubrious dejection. Option D (relaxed) conveys ease rather than grief.`,
    passage: null
  },
  {
    id: 125,
    question: `Antonym of “MITIGATE”.`,
    options: [`Ease`, `Alleviate`, `Reduce`, `Intensify`],
    correct: 3,
    explanation: `Mitigate means to make less severe, serious, or painful - to lessen the intensity of something harmful. Its antonym must mean to increase severity. Intensify means to make something more extreme or stronger - the direct opposite of mitigation. Options A (ease), B (alleviate), and C (reduce) are all synonyms of mitigate - all describing the lessening of something. Only intensify represents the increase in severity that is the opposite of mitigation.`,
    passage: null
  },
  {
    id: 126,
    question: `Microscope : Cells :: Telescope : ?`,
    options: [`Lens`, `Earth`, `Stars`, `Light`],
    correct: 2,
    explanation: `A microscope is an instrument used to observe and study cells and microorganisms - things too small to see with the naked eye. A telescope is an instrument used to observe and study distant celestial objects such as stars, planets, and galaxies. The relationship is optical instrument:the type of object it is designed to observe. Option A (lens) is a component of a telescope, not what it observes. Option B (earth) is observable without a telescope. Option D (light) is a medium, not an object of observation.`,
    passage: null
  },
  {
    id: 127,
    question: `Synonym of “CIRCUMSPECT”.`,
    options: [`Careless`, `Reckless`, `Rash`, `Careful`],
    correct: 3,
    explanation: `Circumspect means wary and unwilling to take risks - carefully considering all circumstances and possible consequences before acting. Careful captures this quality: giving attention to avoiding potential danger or error. Option A (careless) is the antonym. Option B (reckless) also means the opposite - acting without caution. Option C (rash) means acting too quickly without thought - another antonym.`,
    passage: null
  },
  {
    id: 128,
    question: `Antonym of “DOGMATIC”.`,
    options: [`Authoritative`, `Flexible`, `Strict`, `Certain`],
    correct: 1,
    explanation: `Dogmatic means inclined to lay down principles as undeniably true, without consideration of evidence or others' views - rigidly opinionated. Its antonym must describe openness to other views. Flexible means willing to adapt and change in response to new information or arguments - the opposite of dogmatic rigidity. Options A (authoritative), C (strict), and D (certain) all suggest firmness in position, closer to dogmatism than to its opposite.`,
    passage: null
  },
  {
    id: 129,
    question: `The investigation demanded ______ scrutiny of every financial transaction made over the past decade.`,
    options: [`rigorous`, `superficial`, `careless`, `random`],
    correct: 0,
    explanation: `The investigation required thorough, exacting examination of every financial transaction - the context demands the highest standard of scrutiny. Rigorous means extremely thorough, exhaustive, and careful - applied with precision and without compromise. Option B (superficial) is the antonym - dealing only with the surface level. Option C (careless) also means the opposite. Option D (random) means without system or pattern, inadequate for a serious investigation.`,
    passage: null
  },
  {
    id: 130,
    question: `Synonym of “RECALCITRANT”.`,
    options: [`Defiant`, `Obedient`, `Cooperative`, `Helpful`],
    correct: 0,
    explanation: `Recalcitrant means having an obstinately uncooperative attitude toward authority or discipline - stubbornly resistant to control. Defiant shares this quality: openly resistant and bold in opposition to authority. Option B (obedient) is the antonym - compliant with authority. Option C (cooperative) means working willingly with others - also an antonym. Option D (helpful) represents willing assistance, the opposite of recalcitrance.`,
    passage: null
  },
  {
    id: 131,
    question: `Antonym of “TENUOUS”.`,
    options: [`Weak`, `Fragile`, `Strong`, `Slight`],
    correct: 2,
    explanation: `Tenuous means very weak, thin, or slight - lacking substance or strength. Its antonym must convey firmness and solidity. Strong means having great power, firmness, or durability - the direct opposite of tenuous weakness. Options A (weak), B (fragile), and D (slight) are all synonyms of tenuous - all conveying weakness and insufficiency. Only strong represents the robust quality that tenuous lacks.`,
    passage: null
  },
  {
    id: 132,
    question: `Library : Books :: Museum : ?`,
    options: [`Visitors`, `History`, `Curator`, `Artifacts`],
    correct: 3,
    explanation: `Libraries are institutions that store books - books are the primary content that libraries hold and provide access to. Museums are institutions that store artifacts - artifacts (historical objects and relics) are the primary content that museums hold and display. The relationship is institution:its primary stored content. Option A (visitors) are users of a museum, not its content. Option B (history) is a subject, not a physical item stored. Option C (curator) is a person who manages the collection.`,
    passage: null
  },
  {
    id: 133,
    question: `The entire theory collapsed because it was built on ______ assumptions that had never been tested.`,
    options: [`valid`, `proven`, `questionable`, `logical`],
    correct: 2,
    explanation: `A theory collapses when its foundational assumptions are shown to be questionable or unsupported - the context describes the assumptions being challenged and the theory failing as a result. Questionable means open to doubt or challenge - not proven or reliable. Option A (valid) means sound and well-founded - the opposite of what caused the collapse. Option B (proven) also means the opposite. Option D (logical) similarly describes well-reasoned assumptions that would not cause collapse.`,
    passage: null
  },
  {
    id: 134,
    question: `Synonym of “PERSPICACIOUS”.`,
    options: [`Ignorant`, `Insightful`, `Slow`, `Naive`],
    correct: 1,
    explanation: `Perspicacious means having a ready insight into and understanding of things - keenly discerning and perceptive. Insightful shares this meaning precisely: having the ability to gain an accurate and deep understanding of complex situations. Option A (ignorant) is the antonym. Option C (slow) describes lack of mental quickness - also an antonym. Option D (naive) means lacking experience and wisdom - another antonym.`,
    passage: null
  },
  {
    id: 135,
    question: `Antonym of “TRANSIENT”.`,
    options: [`Temporary`, `Brief`, `Permanent`, `Fleeting`],
    correct: 2,
    explanation: `Transient means lasting only for a short time - impermanent and passing. Its antonym must convey long duration and stability. Permanent means lasting or intended to last indefinitely - the direct opposite of transient impermanence. Options A (temporary), B (brief), and D (fleeting) are all synonyms of transient - all conveying short duration. Only permanent represents the enduring quality that is the opposite of transience.`,
    passage: null
  },
  {
    id: 136,
    question: `Anchor : Ship :: Brakes : ?`,
    options: [`Wheel`, `Car`, `Road`, `Engine`],
    correct: 1,
    explanation: `An anchor is the device that stops a ship from moving - it holds the ship in place and prevents unwanted drift. Brakes are the mechanism that stops a car from moving - they reduce speed and halt the vehicle. The relationship is stopping/holding mechanism:the vehicle it stops. Option A (wheel) is a component of the car. Option C (road) is the surface on which the car moves. Option D (engine) is the component that powers rather than stops the car.`,
    passage: null
  },
  {
    id: 137,
    question: `The government's efficient ______ of resources ensured that all departments received adequate funding.`,
    options: [`allocation`, `mismanagement`, `destruction`, `neglect`],
    correct: 0,
    explanation: `Efficient allocation of resources means distributing available resources wisely and effectively, ensuring each department receives what it needs. Allocation means the action of distributing or assigning resources - the correct word for the context. Option B (mismanagement) means poor handling - the opposite of efficient. Option C (destruction) means the demolition of resources. Option D (neglect) means the failure to care for resources.`,
    passage: null
  },
  {
    id: 138,
    question: `Synonym of “INEFFABLE”.`,
    options: [`Inexpressible`, `Loud`, `Simple`, `Clear`],
    correct: 0,
    explanation: `Ineffable means too great or extreme to be expressed or described in words - beyond the capacity of language to capture. Inexpressible carries the same meaning: unable to be expressed or described in words. Option B (loud) is unrelated - ineffable has no connection to volume. Option C (simple) is an antonym - simple things are easily expressed. Option D (clear) also represents the opposite of ineffable complexity.`,
    passage: null
  },
  {
    id: 139,
    question: `Antonym of “ERUDITE”.`,
    options: [`Scholarly`, `Ignorant`, `Learned`, `Knowledgeable`],
    correct: 1,
    explanation: `Erudite means having or showing great knowledge or learning - extensively educated and scholarly. Its antonym must convey the absence of knowledge. Ignorant means lacking knowledge, information, or awareness - the direct opposite of erudition. Options A (scholarly), C (learned), and D (knowledgeable) are all synonyms of erudite. Only ignorant represents the absence of the learning and knowledge that erudition embodies.`,
    passage: null
  },
  {
    id: 140,
    question: `Palette : Painter :: Stethoscope : ?`,
    options: [`Nurse`, `Doctor`, `Patient`, `Surgeon`],
    correct: 1,
    explanation: `A painter uses a palette to mix and hold colours - the palette is the painter's specialised tool. A doctor uses a stethoscope to listen to the heart and lungs - the stethoscope is the doctor's specialised diagnostic tool. The relationship is professional:their most distinctive specialised tool. Option A (nurse) also uses a stethoscope but it is most closely associated with a doctor. Option C (patient) is the person the tool is used on. Option D (surgeon) uses a scalpel as their defining tool.`,
    passage: null
  },
  {
    id: 141,
    question: `Synonym of “ABSTEMIOUS”.`,
    options: [`Moderate`, `Excessive`, `Careless`, `Wasteful`],
    correct: 0,
    explanation: `Abstemious means not self-indulgent, especially in eating and drinking - moderate and restrained in consumption. Moderate shares this meaning in the context of consumption and behaviour: avoiding excess and keeping within reasonable limits. Option B (excessive) is the antonym - going beyond what is reasonable. Option C (careless) is unrelated to consumption or restraint. Option D (wasteful) describes profligate use of resources, which is closer to the antonym.`,
    passage: null
  },
  {
    id: 142,
    question: `Antonym of “CLANDESTINE”.`,
    options: [`Secret`, `Hidden`, `Open`, `Concealed`],
    correct: 2,
    explanation: `Clandestine means kept secret or done secretly, especially because it is unauthorised or illicit. Its antonym must convey openness and transparency. Open means not concealed, available to everyone, and done without secrecy - the direct opposite of clandestine. Options A (secret), B (hidden), and D (concealed) are all synonyms of clandestine. Only open represents the transparent, unhidden nature that is the opposite of clandestine activity.`,
    passage: null
  },
  {
    id: 143,
    question: `The report highlighted several ______ inconsistencies that undermined the credibility of the findings.`,
    options: [`trivial`, `glaring`, `minor`, `insignificant`],
    correct: 1,
    explanation: `The report found inconsistencies that damaged the credibility of the work - the inconsistencies must be obvious and significant to have that effect. Glaring means conspicuous and obvious - so evident that they cannot be missed. Option A (trivial) means unimportant and minor - inconsistencies too small to undermine credibility. Option C (minor) and Option D (insignificant) similarly describe small, easily overlooked problems that would not damage credibility.`,
    passage: null
  },
  {
    id: 144,
    question: `Synonym of “DIFFIDENT”.`,
    options: [`Confident`, `Arrogant`, `Shy`, `Proud`],
    correct: 2,
    explanation: `Diffident means modest and shy because of a lack of self-confidence - reluctant to draw attention to oneself or assert oneself. Shy carries the same meaning: nervous and hesitant in social situations, lacking confidence. Option A (confident) is the antonym - assured in oneself. Option B (arrogant) is also an antonym - excessively self-assured. Option D (proud) similarly contrasts with the self-effacing, hesitant quality of diffidence.`,
    passage: null
  },
  {
    id: 145,
    question: `Antonym of “IMPLACABLE”.`,
    options: [`Stern`, `Cruel`, `Harsh`, `Merciful`],
    correct: 3,
    explanation: `Implacable means unable to be appeased or placated - unwilling to make concessions, relentlessly severe. Its antonym must convey willingness to forgive and show compassion. Merciful means showing compassion and forgiveness - willing to reduce punishment or severity. Options A (stern), B (cruel), and C (harsh) all describe unforgiving severity that aligns with being implacable rather than its opposite.`,
    passage: null
  },
  {
    id: 146,
    question: `Blueprint : Construction :: Recipe : ?`,
    options: [`Kitchen`, `Food`, `Cook`, `Ingredient`],
    correct: 1,
    explanation: `A blueprint is the detailed plan that guides and enables the construction of a building - it is the reference document used throughout the building process. A recipe is the detailed plan that guides and enables the preparation of food - it is the reference document used throughout the cooking process. The relationship is: the guiding plan:what it enables the production of. Option A (kitchen) is where cooking occurs. Option C (cook) is the person who follows the recipe. Option D (ingredient) is a component used in cooking.`,
    passage: null
  },
  {
    id: 147,
    question: `Synonym of “PANACEA”.`,
    options: [`Problem`, `Cure-all`, `Disease`, `Risk`],
    correct: 1,
    explanation: `Panacea comes from the Greek meaning "all-healing." It refers to a solution or remedy that is believed to cure all diseases or solve all problems. Cure-all is the precise English equivalent - a remedy supposed to work for every ailment or difficulty. Option A (problem) is the antonym - what a panacea solves. Option C (disease) is what a panacea is supposed to cure. Option D (risk) is unrelated.`,
    passage: null
  },
  {
    id: 148,
    question: `Antonym of “INUNDATE”.`,
    options: [`Flood`, `Overwhelm`, `Dry`, `Submerge`],
    correct: 2,
    explanation: `Inundate means to overwhelm or flood with a large quantity of something - to submerge or swamp. Its antonym must convey the absence of flooding or overwhelming. Dry means lacking moisture - the opposite of being flooded or saturated. Options A (flood), B (overwhelm), and D (submerge) are all synonyms of inundate - all describing the condition of being overwhelmed with water or quantity. Only dry represents the absence of this flooding.`,
    passage: null
  },
  {
    id: 149,
    question: `The lawyer presented a ______ argument that sounded convincing but was fundamentally misleading.`,
    options: [`objective`, `empirical`, `rigorous`, `specious`],
    correct: 3,
    explanation: `Specious arguments are superficially plausible but actually wrong - they appear sound and convincing but are fundamentally flawed or misleading. The context describes an argument that "sounded convincing but was fundamentally" incorrect. Option A (objective) means impartial and evidence-based - no reason for this to be fundamentally flawed. Option B (empirical) means based on observation and evidence - similarly sound. Option C (rigorous) means thorough and exacting - the opposite of specious.`,
    passage: null
  },
  {
    id: 150,
    question: `Genome : Genetics :: Algorithm : ?`,
    options: [`Biology`, `Mathematics`, `Computer science`, `Chemistry`],
    correct: 2,
    explanation: `A genome is the complete set of genetic material that defines an organism - it is the fundamental entity studied in the field of genetics. An algorithm is the set of rules or instructions that defines a computational process - it is the fundamental entity studied in the field of computer science. The relationship is: the fundamental entity:the scientific field that studies it. Option A (biology) studies organisms broadly, not algorithms. Option B (mathematics) studies abstract structures. Option D (chemistry) studies matter and substances.`,
    passage: null
  },
  {
    id: 151,
    question: `Choose the word closest in meaning to “MELLIFLUOUS”.`,
    options: [`Harsh`, `Sweet-sounding`, `Loud`, `Rough`],
    correct: 1,
    explanation: `Mellifluous comes from the Latin "mel" (honey) and "fluere" (to flow) - meaning flowing with honey. It describes a sound that is smooth, rich, and pleasantly sweet to hear. Sweet-sounding captures this quality precisely: producing a pleasant, harmonious sound. Option A (harsh) is the antonym - rough and unpleasant to hear. Option C (loud) refers to volume, not quality. Option D (rough) is also an antonym of mellifluous smoothness.`,
    passage: null
  },
  {
    id: 152,
    question: `Antonym of “SPORADIC”.`,
    options: [`Occasional`, `Rare`, `Frequent`, `Random`],
    correct: 2,
    explanation: `Sporadic means occurring at irregular intervals, not continuous or steady - occasional and unpredictable. Its antonym must convey regularity and consistency. Frequent means occurring often and at short intervals - regular in occurrence. Options A (occasional), B (rare), and D (random) are all near-synonyms of sporadic - all describing infrequent or irregular occurrence. Only frequent represents the regularity that is the opposite of sporadic unpredictability.`,
    passage: null
  },
  {
    id: 153,
    question: `Bulb : Light :: Heater : ?`,
    options: [`Flame`, `Power`, `Heat`, `Spark`],
    correct: 2,
    explanation: `A bulb converts electrical energy into light - light is the output or product that a bulb generates. A heater converts electrical energy into heat - heat is the output or product that a heater generates. The relationship is: device:the form of energy or output it produces. Option A (flame) is a source of heat but not what a heater produces - heaters do not produce flames. Option B (power) is an input to the heater, not its output. Option D (spark) is a brief flash, not sustained heat.`,
    passage: null
  },
  {
    id: 154,
    question: `The ancient fort was considered ______ due to its towering walls and strategic mountain location.`,
    options: [`fragile`, `impregnable`, `damaged`, `temporary`],
    correct: 1,
    explanation: `Impregnable means unable to be captured, broken into, or defeated - too strong to be overcome. Towering walls and strategic positioning make a fort impregnable. Option A (fragile) is the antonym - easily broken. Option C (damaged) suggests the fort has already been compromised. Option D (temporary) means not permanent - a structure described as impregnable would be permanent and enduring.`,
    passage: null
  },
  {
    id: 155,
    question: `Synonym of “ABHOR”.`,
    options: [`Love`, `Admire`, `Detest`, `Praise`],
    correct: 2,
    explanation: `Abhor means to regard with disgust and hatred - to detest intensely. Detest carries the same strength of feeling: to dislike something intensely and passionately. Option A (love) is the antonym. Option B (admire) also represents the opposite - feeling respect and approval. Option D (praise) means to express strong approval - another antonym of abhor.`,
    passage: null
  },
  {
    id: 156,
    question: `Painters : Colours :: Musicians : ?`,
    options: [`Notes`, `Brushes`, `Canvas`, `Studio`],
    correct: 0,
    explanation: `Painters work with colours as their primary artistic medium - colours are the material they apply to create their art. Musicians work with musical notes as their primary artistic medium - notes are the units of sound they combine to create their art. The relationship is: artist:their primary working medium. Option B (brushes) are tools used to apply colour, not the medium itself. Option C (canvas) is the surface, not the medium. Option D (studio) is the workspace.`,
    passage: null
  },
  {
    id: 157,
    question: `Antonym of “ARDUOUS”.`,
    options: [`Simple`, `Difficult`, `Exhausting`, `Demanding`],
    correct: 0,
    explanation: `Arduous means requiring strenuous effort - very difficult and tiring. Its antonym must convey ease and lack of difficulty. Simple means easily done or achieved - requiring minimal effort. Options B (difficult), C (exhausting), and D (demanding) are all synonyms of arduous, all conveying the effort and hardship involved. Only simple represents the ease and accessibility that is the opposite of an arduous task.`,
    passage: null
  },
  {
    id: 158,
    question: `The teacher used several examples and diagrams to ______ the complex scientific concept for her students.`,
    options: [`obscure`, `complicate`, `clarify`, `distort`],
    correct: 2,
    explanation: `The context describes a teacher using examples and diagrams specifically to help students understand a complex concept - the goal is making the difficult easier to grasp. Clarify means to make something less confused and more clearly comprehensible. Option A (obscure) means to make unclear - the opposite of the teacher's purpose. Option B (complicate) also means to make harder to understand. Option D (distort) means to change the meaning inaccurately.`,
    passage: null
  },
  {
    id: 159,
    question: `Synonym of “MAGNANIMOUS”.`,
    options: [`Selfish`, `Generous`, `Arrogant`, `Angry`],
    correct: 1,
    explanation: `Magnanimous means very generous and forgiving, especially toward a rival or someone less powerful - noble and big-hearted. Generous shares this quality: willingly giving more than is necessary, showing liberality and open-handedness. Option A (selfish) is the antonym - concerned only with one's own benefit. Option C (arrogant) means having an exaggerated sense of one's own importance - unrelated to generosity. Option D (angry) is an emotional state unrelated to magnanimity.`,
    passage: null
  },
  {
    id: 160,
    question: `Seed : Tree :: Bulb : ?`,
    options: [`Leaf`, `Soil`, `Garden`, `Flower`],
    correct: 3,
    explanation: `A seed is the reproductive structure from which a tree grows - the tree is the mature organism that develops from a seed over time. A bulb is the underground storage structure from which a flower grows - the flower is the mature organism that develops from a bulb. The relationship is: the dormant starting form:the mature organism that grows from it. Options A (leaf), B (soil), and C (garden) are not what grows from a bulb.`,
    passage: null
  },
  {
    id: 161,
    question: `Antonym of “PERNICIOUS”.`,
    options: [`Beneficial`, `Dangerous`, `Harmful`, `Toxic`],
    correct: 0,
    explanation: `Pernicious means having a harmful effect, especially in a gradual or subtle way - highly injurious and destructive. Its antonym must convey a positive, helpful effect. Beneficial means producing good results or advantageous effects - the direct opposite of pernicious harm. Options B (dangerous), C (harmful), and D (toxic) are all synonyms of pernicious - all describing harm and damage. Only beneficial represents the positive effect that contrasts with pernicious influence.`,
    passage: null
  },
  {
    id: 162,
    question: `Synonym of “ASSIDUOUS”.`,
    options: [`Careless`, `Weak`, `Lazy`, `Diligent`],
    correct: 3,
    explanation: `Assiduous means showing great care, attention, and effort - persistently hardworking and thorough. Diligent shares this meaning precisely: having and showing care and conscientiousness in one's work - steadily hardworking. Options A (careless), B (weak), and C (lazy) are all antonyms of assiduous - all describing the absence of the sustained effort and attention that assiduity requires. Only diligent matches the industrious, careful quality.`,
    passage: null
  },
  {
    id: 163,
    question: `Soldiers : Fort :: Doctors : ?`,
    options: [`Clinic`, `Hospital`, `Medicines`, `Patients`],
    correct: 1,
    explanation: `Soldiers are stationed in and defend a fort - the fort is the institution or base where soldiers are deployed and work. Doctors work in a hospital - the hospital is the institution where doctors practise medicine and treat patients. The relationship is: professional group:the institution where they are based and work. Option A (clinic) is a smaller medical facility, less precisely associated with doctors generally. Option C (medicines) are tools used by doctors. Option D (patients) are the people doctors treat.`,
    passage: null
  },
  {
    id: 164,
    question: `Engineers discovered that the bridge design was ______, and immediate repairs were ordered.`,
    options: [`prudent`, `efficient`, `flawed`, `perfect`],
    correct: 2,
    explanation: `The context describes a discovery that the bridge had defects requiring immediate repair - the design was problematic. Flawed means having a defect or weakness - imperfect in a significant way. Option A (prudent) means wise and careful - the opposite of what caused the problem. Option B (efficient) means working well with minimal waste - also the opposite. Option D (perfect) is the antonym of flawed - the bridge was clearly not perfect.`,
    passage: null
  },
  {
    id: 165,
    question: `Synonym of “FASTIDIOUS”.`,
    options: [`Careless`, `Impatient`, `Lazy`, `Particular`],
    correct: 3,
    explanation: `Fastidious means very attentive to accuracy and detail - having high and demanding standards. Particular shares this meaning in the sense of being very attentive and careful about details - not accepting anything that does not meet one's exacting standards. Option A (careless) is the antonym. Option B (impatient) describes a different quality - frustration with waiting, not attention to detail. Option C (lazy) is also an antonym.`,
    passage: null
  },
  {
    id: 166,
    question: `Antonym of “SCANT”.`,
    options: [`Limited`, `Small`, `Abundant`, `Rare`],
    correct: 2,
    explanation: `Scant means barely sufficient or less than is needed - very small in amount. Its antonym must convey more than enough, plentiful supply. Abundant means existing in large quantities, more than enough - the direct opposite of scant. Options A (limited), B (small), and D (rare) all reinforce the idea of insufficient quantity - they are near-synonyms of scant rather than antonyms.`,
    passage: null
  },
  {
    id: 167,
    question: `Brush : Painting :: Pen : ?`,
    options: [`Paper`, `Writing`, `Ink`, `Book`],
    correct: 1,
    explanation: `A brush creates a painting - the painting is what the brush produces when used by an artist. A pen creates writing - the writing is what the pen produces when used by a writer. The relationship is: writing or drawing tool:the type of output it creates. Option A (paper) is the surface on which writing occurs, not the output itself. Option C (ink) is the medium used by a pen. Option D (book) is a collection of writing, not the direct output of using a pen.`,
    passage: null
  },
  {
    id: 168,
    question: `Synonym of “TACIT”.`,
    options: [`Implied`, `Spoken`, `Loud`, `Clear`],
    correct: 0,
    explanation: `Tacit means understood or implied without being stated directly - communicated without words or explicit expression. Implied carries the same meaning: suggested or communicated indirectly rather than directly stated. Option B (spoken) is the antonym - tacit specifically means unspoken. Option C (loud) is also an antonym in the sense of being explicitly expressed. Option D (clear) is unrelated to the spoken/unspoken distinction.`,
    passage: null
  },
  {
    id: 169,
    question: `The festival was filled with ______ colours, energetic music, and joyful celebrations.`,
    options: [`dull`, `vibrant`, `dark`, `empty`],
    correct: 1,
    explanation: `The context describes a festival - an occasion characterised by celebration, colour, music, and joy. Vibrant means full of energy and enthusiasm, bright and lively - describing the energetic quality of festival colours perfectly. Option A (dull) is the antonym - lacking brightness and energy. Option C (dark) conveys gloominess, unsuitable for a joyful festival. Option D (empty) means lacking content or life.`,
    passage: null
  },
  {
    id: 170,
    question: `Antonym of “SAGACIOUS”.`,
    options: [`Wise`, `Insightful`, `Intelligent`, `Foolish`],
    correct: 3,
    explanation: `Sagacious means having or showing keen mental discernment and good judgement - wise and perceptive. Its antonym must convey a lack of wisdom or poor judgement. Foolish means lacking good sense or judgement - the direct opposite of sagacious wisdom. Options A (wise), B (insightful), and C (intelligent) are all synonyms of sagacious - all describing mental sharpness and wisdom. Only foolish represents the absence of wisdom.`,
    passage: null
  },
  {
    id: 171,
    question: `Key : Lock :: Solution : ?`,
    options: [`Picture`, `Problem`, `Shape`, `Puzzle`],
    correct: 1,
    explanation: `A key solves or opens a lock - it is the instrument that resolves the locked state, providing access. A solution solves a problem - it is what resolves the problematic state, providing resolution. The relationship is: the resolution:what it resolves. Option A (picture) is unrelated. Option C (shape) is unrelated. Option D (puzzle) is close - a puzzle is also solved - but problem is the more general and precise pair for solution.`,
    passage: null
  },
  {
    id: 172,
    question: `Synonym of “LUCID”.`,
    options: [`Clear`, `Confusing`, `Complex`, `Hidden`],
    correct: 0,
    explanation: `Lucid means expressed clearly; easy to understand. Clear shares this meaning precisely: easy to understand, transparent, and without confusion. Option B (confusing) is the antonym. Option C (complex) also describes something difficult to understand - an antonym. Option D (hidden) means concealed - also contrary to the transparency that lucid describes.`,
    passage: null
  },
  {
    id: 173,
    question: `Antonym of “RETICENT”.`,
    options: [`Quiet`, `Talkative`, `Silent`, `Reserved`],
    correct: 1,
    explanation: `Reticent means not revealing one's thoughts or feelings readily - reluctant to speak or be communicative. Its antonym must describe someone who communicates freely. Talkative means fond of talking - communicating freely and at length, the direct opposite of reticence. Options A (quiet), C (silent), and D (reserved) are all synonyms of reticent - all describing a tendency toward silence or restraint in speech.`,
    passage: null
  },
  {
    id: 174,
    question: `The tall walls and deep moat were constructed to ______ any enemy attack on the castle.`,
    options: [`repel`, `encourage`, `welcome`, `invite`],
    correct: 0,
    explanation: `Tall walls and a deep moat are defensive features of a castle or fortress - their purpose is to prevent enemy forces from approaching and breaching the defences. Repel means to drive back or ward off an attacking force. Option B (encourage) is the antonym - it would mean inviting the enemy. Option C (welcome) is also an antonym. Option D (invite) is the complete opposite of what defensive walls are built to do.`,
    passage: null
  },
  {
    id: 175,
    question: `Synonym of “OBSEQUIOUS”.`,
    options: [`Respectful`, `Servile`, `Proud`, `Independent`],
    correct: 1,
    explanation: `Obsequious means obedient or attentive to an excessive degree, especially in a way that shows a lack of self-respect - excessively eager to please or serve. Servile shares this meaning: excessively willing to serve or please, lacking dignity and independence. Option A (respectful) describes appropriate regard for others - different from excessive, undignified flattery. Option C (proud) is the antonym of obsequious. Option D (independent) is also an antonym.`,
    passage: null
  },
  {
    id: 176,
    question: `Palette : Colours :: Library : ?`,
    options: [`Walls`, `Tables`, `Chairs`, `Books`],
    correct: 3,
    explanation: `A palette holds and organises colours for a painter - colours are what the palette contains and provides. A library holds and organises books - books are what the library contains and provides. The relationship is: container or collection:what it holds or contains. Options A (walls), B (tables), and C (chairs) are physical components or furniture within a library, not what the library is defined by or contains.`,
    passage: null
  },
  {
    id: 177,
    question: `Antonym of “EUPHORIC”.`,
    options: [`Happy`, `Sad`, `Joyful`, `Excited`],
    correct: 1,
    explanation: `Euphoric means intensely happy and excited - feeling a heightened sense of wellbeing and elation. Its antonym must convey the opposite emotional state. Sad means unhappy or sorrowful - the most direct opposite of euphoric elation. Options A (happy), C (joyful), and D (excited) are all synonyms of euphoric - all describing positive emotional states. Only sad represents the negative emotional state that contrasts with euphoria.`,
    passage: null
  },
  {
    id: 178,
    question: `Synonym of “OBSOLETE”.`,
    options: [`Modern`, `New`, `Outdated`, `Advanced`],
    correct: 2,
    explanation: `Obsolete means no longer produced or used - out of date and superseded by something newer. Outdated carries the same meaning: no longer current or modern - belonging to a past era. Option A (modern) is the antonym - current and up to date. Option B (new) is also an antonym. Option D (advanced) implies being ahead of current standards - the opposite of obsolete.`,
    passage: null
  },
  {
    id: 179,
    question: `The bulb ______ brightly as soon as the electrician repaired the faulty wiring.`,
    options: [`flickered`, `dimmed`, `vanished`, `glowed`],
    correct: 3,
    explanation: `When wiring is repaired and electricity flows correctly, a bulb illuminates - it produces steady, warm light. Glowed means emitted a steady, warm light - the natural result of a functional bulb receiving electricity. Option A (flickered) implies unstable, interrupted light - suggesting the wiring was not fully repaired. Option B (dimmed) means became less bright - also suggesting a problem. Option C (vanished) means disappeared - the opposite of illuminating.`,
    passage: null
  },
  {
    id: 180,
    question: `Odometer : Distance :: Compass : ?`,
    options: [`Direction`, `Distance`, `Travel`, `Land`],
    correct: 0,
    explanation: `An odometer measures distance - specifically the distance a vehicle has travelled, displayed on the dashboard. A compass measures and indicates direction - showing which way a traveller or navigator is heading. The relationship is instrument:what it measures or indicates. Option B (distance) would belong to an odometer. Options C (travel) and D (land) describe contexts rather than specific measurements.`,
    passage: null
  },
  {
    id: 181,
    question: `Synonym of “STOIC”.`,
    options: [`Emotional`, `Calm`, `Angry`, `Nervous`],
    correct: 1,
    explanation: `Stoic describes a person who endures pain, difficulty, or discomfort without complaint, maintaining emotional composure. Calm shares this quality of emotional steadiness and composure - remaining untroubled and controlled in difficult circumstances. Option A (emotional) is the antonym - showing and being influenced by emotions. Option C (angry) represents a loss of emotional composure. Option D (nervous) describes anxiety and agitation.`,
    passage: null
  },
  {
    id: 182,
    question: `Antonym of “VIGILANT”.`,
    options: [`Watchful`, `Alert`, `Careless`, `Attentive`],
    correct: 2,
    explanation: `Vigilant means keeping careful watch for possible danger or difficulties - alert and attentive. Its antonym must convey inattentiveness and lack of watchfulness. Careless means not giving sufficient attention or thought to avoiding harm - the direct opposite of vigilant watchfulness. Options A (watchful), B (alert), and D (attentive) are all synonyms of vigilant - all describing the careful attention that vigilance requires. Only careless represents the lapse in attention that is the opposite.`,
    passage: null
  },
  {
    id: 183,
    question: `The interior designer carefully selected ______ colours that blended well with the existing furniture.`,
    options: [`confusing`, `harmonious`, `random`, `clumsy`],
    correct: 1,
    explanation: `The context describes an interior design task where the goal is colours that blend well and complement the existing furnishings. Harmonious means forming a pleasing and consistent whole - working together in a way that is balanced and agreeable. Option A (confusing) means creating disorder - the opposite of harmonious design. Option C (random) means without system or plan - also the opposite of thoughtful, harmonious selection. Option D (clumsy) means awkward - not complementary.`,
    passage: null
  },
  {
    id: 184,
    question: `Synonym of “INTREPID”.`,
    options: [`Weak`, `Afraid`, `Fearless`, `Careful`],
    correct: 2,
    explanation: `Intrepid means fearless and adventurous - remarkably courageous in the face of danger. Fearless shares this quality exactly: without fear, bold and courageous. Option A (weak) is the antonym - lacking strength or courage. Option B (afraid) is also the antonym - feeling fear. Option D (careful) describes cautious behaviour - the opposite of the bold, undeterred quality of intrepidity.`,
    passage: null
  },
  {
    id: 185,
    question: `Shield : Armour :: Helmet : ?`,
    options: [`Decoration`, `Armour`, `Attack`, `Movement`],
    correct: 1,
    explanation: `A shield is a piece of body armour - it belongs to the category of armour and is used for protection. A helmet is equally a piece of body armour - it also belongs to the category of armour and is worn for protection. The relationship is: specific piece of protective equipment:the broader category it belongs to. Options A (decoration), C (attack), and D (movement) do not correctly identify the category to which a helmet belongs.`,
    passage: null
  },
  {
    id: 186,
    question: `Antonym of “METICULOUS”.`,
    options: [`Careless`, `Careful`, `Accurate`, `Precise`],
    correct: 0,
    explanation: `Meticulous means showing great attention to detail, very careful and precise. Its antonym must convey inattentiveness and lack of precision. Careless means not giving sufficient care or attention - making mistakes through inattention. Options B (careful), C (accurate), and D (precise) are all synonyms of meticulous - all describing thoroughness and attention to detail. Only careless represents the neglect of detail that is the opposite of meticulousness.`,
    passage: null
  },
  {
    id: 187,
    question: `Synonym of “CANDID”.`,
    options: [`Honest`, `Secretive`, `Deceptive`, `Hidden`],
    correct: 0,
    explanation: `Candid means truthful and direct and clear - open and honest in expression without evasion. Honest shares this meaning: free of deceit, truthful, and sincere. Option B (secretive) is the antonym - hiding information and being uncommunicative. Option C (deceptive) is also the antonym - creating false impressions. Option D (hidden) describes concealment - the opposite of candid openness.`,
    passage: null
  },
  {
    id: 188,
    question: `Security personnel must remain ______ at all times to detect any suspicious activity.`,
    options: [`relaxed`, `sleepy`, `careless`, `vigilant`],
    correct: 3,
    explanation: `Security personnel must maintain constant alertness to identify and respond to threats - this requires sustained, careful watchfulness. Vigilant means keeping careful watch for possible danger - alert and attentive without lapse. Option A (relaxed) is the antonym - lacking the tension and alertness that security requires. Option B (sleepy) directly contradicts the requirement for alertness. Option C (careless) is also an antonym.`,
    passage: null
  },
  {
    id: 189,
    question: `Bulb : Electricity :: Engine : ?`,
    options: [`Road`, `Wheel`, `Fuel`, `Driver`],
    correct: 2,
    explanation: `A bulb requires electricity to function and produce light - electricity is its power source and essential input. An engine requires fuel to function and produce mechanical power - fuel is its power source and essential input. The relationship is: device:the energy source it requires to operate. Option A (road) is where vehicles travel, not what powers an engine. Option B (wheel) is a mechanical component. Option D (driver) is the operator.`,
    passage: null
  },
  {
    id: 190,
    question: `Synonym of “PRUDENT”.`,
    options: [`Rash`, `Reckless`, `Careless`, `Careful`],
    correct: 3,
    explanation: `Prudent means acting with or showing care and thought for the future - wise, sensible, and cautious in making decisions. Careful shares this meaning: giving sufficient attention and thought to avoid potential problems. Option A (rash) is the antonym - acting hastily without considering consequences. Option B (reckless) is also an antonym - acting without caution. Option C (careless) is another antonym.`,
    passage: null
  },
  {
    id: 191,
    question: `Antonym of “VOLATILE”.`,
    options: [`Calm`, `Unstable`, `Explosive`, `Violent`],
    correct: 0,
    explanation: `Volatile means liable to change rapidly and unpredictably - especially in relation to emotions or situations that can become violent. Its antonym must convey stability and lack of sudden change. Calm means not showing or feeling nervousness, anger, or other strong emotions - stable and composed. Options B (unstable), C (explosive), and D (violent) are all synonyms of volatile - all describing instability and the potential for sudden, dangerous change. Only calm represents the stability opposite to volatility.`,
    passage: null
  },
  {
    id: 192,
    question: `The fortress was strategically designed to prevent enemies from attempting to ______ it.`,
    options: [`capture`, `defend`, `decorate`, `repair`],
    correct: 0,
    explanation: `A fortress is specifically designed to be defensible - every architectural feature serves the purpose of preventing enemies from taking control of the structure. Capture means to take possession of by force - the act that the fortress design is intended to prevent. Option B (defend) is the opposite - the fortress is designed for defence, not to prevent defence. Option C (decorate) is unrelated to military function. Option D (repair) is also unrelated.`,
    passage: null
  },
  {
    id: 193,
    question: `Synonym of “CONCISE”.`,
    options: [`Detailed`, `Long`, `Brief`, `Wordy`],
    correct: 2,
    explanation: `Concise means giving a lot of information clearly and in a few words - brief but comprehensive. Brief shares this meaning: taking little time, short and concise. Options A (detailed), B (long), and D (wordy) are all antonyms of concise - all describing the lengthy, elaborate expression that conciseness avoids. Only brief captures the short, efficient quality of concise expression.`,
    passage: null
  },
  {
    id: 194,
    question: `Rainbow : Colours :: Garden : ?`,
    options: [`Soil`, `Flowers`, `Water`, `Trees`],
    correct: 1,
    explanation: `A rainbow is composed of colours - it is defined by the spectrum of colours it displays. A garden is composed of flowers - it is defined by the variety of flowers it contains and displays. The relationship is: natural display:what it is composed of or defined by. Option A (soil) is the medium in which plants grow, not what the garden displays. Option C (water) is a resource for the garden. Option D (trees) are a component but flowers more precisely define a garden in this analogy context.`,
    passage: null
  },
  {
    id: 195,
    question: `Antonym of “TENACIOUS”.`,
    options: [`Weak-willed`, `Determined`, `Persistent`, `Firm`],
    correct: 0,
    explanation: `Tenacious means persistent and determined - holding firmly to a purpose despite obstacles. Its antonym must convey a lack of determination and firmness. Weak-willed means lacking determination and firmness of purpose - easily deterred or giving up. Options B (determined), C (persistent), and D (firm) are all synonyms of tenacious - all describing resolute perseverance. Only weak-willed represents the yielding, irresolute quality that is the opposite of tenacity.`,
    passage: null
  },
  {
    id: 196,
    question: `The manager carefully ______ the failed procedures to identify what had gone wrong.`,
    options: [`analyzed`, `ignored`, `forgot`, `abandoned`],
    correct: 0,
    explanation: `The manager examined the failed procedures in detail specifically to identify what had gone wrong - analysis is the appropriate word for this systematic, purposeful examination. Analyzed means examined methodically and in detail. Option B (ignored) means paid no attention to - the opposite of what the context describes. Options C (forgot) and D (abandoned) similarly describe failing to engage with the procedures rather than examining them.`,
    passage: null
  },
  {
    id: 197,
    question: `Synonym of “AMBIGUOUS”.`,
    options: [`Clear`, `Vague`, `Precise`, `Definite`],
    correct: 1,
    explanation: `Ambiguous means open to more than one interpretation - unclear and not precise in meaning. Vague carries the same meaning: not clearly expressed or clearly defined - imprecise and uncertain. Option A (clear) is the antonym of ambiguous. Option C (precise) is also an antonym - exactly stated and unambiguous. Option D (definite) similarly represents the clarity that ambiguous lacks.`,
    passage: null
  },
  {
    id: 198,
    question: `Navy : Sea :: Army : ?`,
    options: [`Sky`, `Water`, `Land`, `Fort`],
    correct: 2,
    explanation: `The Navy operates at sea - the sea is the operational domain of naval forces. The Army operates on land - land is the operational domain of ground forces. The relationship is: military branch:the domain or environment in which it primarily operates. Option A (sky) is the domain of the Air Force. Option B (water) overlaps with sea but the Army's domain is land, not water. Option D (fort) is a structure where soldiers are stationed, not the operational domain of the entire Army.`,
    passage: null
  },
  {
    id: 199,
    question: `Antonym of “EXUBERANT”.`,
    options: [`Depressed`, `Joyful`, `Energetic`, `Cheerful`],
    correct: 0,
    explanation: `Exuberant means filled with lively energy and excitement - joyously unrestrained and enthusiastic. Its antonym must convey the absence of joy and energy. Depressed means in a state of low mood and reduced energy - the opposite of exuberant vitality. Options B (joyful), C (energetic), and D (cheerful) are all synonyms of exuberant - all describing positive, energetic emotional states. Only depressed represents the diminished, joyless state opposite to exuberance.`,
    passage: null
  },
  {
    id: 200,
    question: `The Badshahi Mosque is considered one of the most ______ examples of Mughal architecture in the world.`,
    options: [`plain`, `dull`, `magnificent`, `ordinary`],
    correct: 2,
    explanation: `The Badshahi Mosque is one of the most celebrated examples of Mughal architecture - known for its grandeur, scale, and ornate beauty. Magnificent means impressively beautiful or elaborate - grand in scale and quality. Options A (plain), B (dull), and D (ordinary) are all antonyms - describing the unremarkable. The Badshahi Mosque is universally recognised as a masterpiece of Mughal design, making magnificent the only appropriate descriptor.`,
    passage: null
  }
];
window['NTS_VERBAL'] = NTS_VERBAL;