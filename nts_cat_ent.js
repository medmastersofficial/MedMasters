// NTS 10 Categories — ENT Summary
// 300 MCQs
const nts_cat_ent = [
  {
    id: 1,
    question: `A 35-year-old patient presents with sudden onset of severe vertigo, nausea, vomiting, and horizontal nystagmus. Which part of the ear is most likely affected?`,
    options: [`Cochlea`, `Vestibule`, `Semicircular canals`, `External auditory canal`],
    correct: 2,
    explanation: `Semicircular canals`
  },
  {
    id: 2,
    question: `The most common cause of acute otitis media in children is:`,
    options: [`Pseudomonas aeruginosa`, `Streptococcus pneumoniae`, `Staphylococcus aureus`, `Haemophilus influenzae`],
    correct: 1,
    explanation: `Streptococcus pneumoniae`
  },
  {
    id: 3,
    question: `A patient presents with unilateral conductive hearing loss and a bluish, bulging tympanic membrane. Most likely diagnosis is:`,
    options: [`Otitis externa`, `Acute otitis media with effusion`, `Cholesteatoma`, `Otosclerosis`],
    correct: 1,
    explanation: `Acute otitis media with effusion`
  },
  {
    id: 4,
    question: `Which cranial nerve is most commonly affected in skull base fractures leading to anosmia?`,
    options: [`Optic nerve`, `Olfactory nerve`, `Facial nerve`, `Vestibulocochlear nerve`],
    correct: 1,
    explanation: `Olfactory nerve`
  },
  {
    id: 5,
    question: `A patient complains of ringing in the ears, hearing loss, and vertigo. The triad suggests:`,
    options: [`Meniere’s disease`, `Otitis externa`, `Acoustic neuroma`, `Labyrinthitis`],
    correct: 0,
    explanation: `Meniere’s disease`
  },
  {
    id: 6,
    question: `The most common malignant tumor of the larynx is:`,
    options: [`Adenocarcinoma`, `Squamous cell carcinoma`, `Lymphoma`, `Papilloma`],
    correct: 1,
    explanation: `Squamous cell carcinoma`
  },
  {
    id: 7,
    question: `Which structure separates the middle ear from the inner ear?`,
    options: [`Tympanic membrane`, `Oval window`, `Round window`, `Eustachian tube`],
    correct: 1,
    explanation: `Oval window`
  },
  {
    id: 8,
    question: `A patient presents with sudden sensorineural hearing loss in one ear. The most appropriate first-line management is:`,
    options: [`Oral corticosteroids`, `Antibiotics`, `Tympanostomy`, `Observation only`],
    correct: 0,
    explanation: `Oral corticosteroids`
  },
  {
    id: 9,
    question: `A 7-year-old child presents with persistent nasal obstruction, snoring, and mouth breathing. Most likely cause is:`,
    options: [`Adenoid hypertrophy`, `Deviated nasal septum`, `Nasal polyp`, `Allergic rhinitis`],
    correct: 0,
    explanation: `Adenoid hypertrophy`
  },
  {
    id: 10,
    question: `The most common site for epistaxis is:`,
    options: [`Posterior nasal cavity`, `Kiesselbach’s plexus (anterior nasal septum)`, `Sphenopalatine artery`, `Nasopharynx`],
    correct: 1,
    explanation: `Kiesselbach’s plexus (anterior nasal septum)`
  },
  {
    id: 11,
    question: `Which type of hearing loss is associated with otosclerosis?`,
    options: [`Sensorineural`, `Conductive`, `Mixed`, `Central`],
    correct: 1,
    explanation: `Conductive`
  },
  {
    id: 12,
    question: `A patient presents with chronic foul-smelling otorrhea and a perforated tympanic membrane. The most likely diagnosis is:`,
    options: [`Acute otitis media`, `Chronic suppurative otitis media`, `Cholesteatoma`, `Otosclerosis`],
    correct: 1,
    explanation: `Chronic suppurative otitis media`
  },
  {
    id: 13,
    question: `The tensor tympani and stapedius muscles function to:`,
    options: [`Amplify sound`, `Damp acoustic vibrations to protect the inner ear`, `Equalize middle ear pressure`, `Maintain cochlear fluid balance`],
    correct: 1,
    explanation: `Damp acoustic vibrations to protect the inner ear`
  },
  {
    id: 14,
    question: `Which sinus is most commonly affected in acute sinusitis?`,
    options: [`Frontal`, `Maxillary`, `Sphenoid`, `Ethmoid`],
    correct: 1,
    explanation: `Maxillary`
  },
  {
    id: 15,
    question: `The vestibular schwannoma most commonly arises from which nerve?`,
    options: [`Cochlear nerve`, `Vestibular nerve (superior division)`, `Facial nerve`, `Trigeminal nerve`],
    correct: 1,
    explanation: `Vestibular nerve (superior division)`
  },
  {
    id: 16,
    question: `A patient presents with unilateral nasal obstruction, epistaxis, and a mass in the nasopharynx. Most likely diagnosis?`,
    options: [`Nasal polyp`, `Nasopharyngeal carcinoma`, `Allergic rhinitis`, `Inverted papilloma`],
    correct: 1,
    explanation: `Nasopharyngeal carcinoma`
  },
  {
    id: 17,
    question: `The Rinne test differentiates between:`,
    options: [`Sensorineural and conductive hearing loss`, `Central and peripheral vertigo`, `Otitis media and externa`, `Nasal polyps and adenoids`],
    correct: 0,
    explanation: `Sensorineural and conductive hearing loss`
  },
  {
    id: 18,
    question: `The Weber test lateralizes to the affected ear in:`,
    options: [`Sensorineural hearing loss`, `Conductive hearing loss`, `Mixed hearing loss`, `Central hearing loss`],
    correct: 1,
    explanation: `Conductive hearing loss`
  },
  {
    id: 19,
    question: `Which nerve is responsible for taste sensation from the anterior two-thirds of the tongue?`,
    options: [`Glossopharyngeal`, `Facial`, `Vagus`, `Hypoglossal`],
    correct: 1,
    explanation: `Facial nerve (via chorda tympani)`
  },
  {
    id: 20,
    question: `A patient has hoarseness for more than 3 weeks with a history of smoking. The most important next step is:`,
    options: [`Voice therapy`, `Laryngoscopy`, `Empirical antibiotics`, `CT scan of neck`],
    correct: 1,
    explanation: `Laryngoscopy`
  },
  {
    id: 21,
    question: `A patient presents with vertigo triggered by positional changes, lasting seconds, without hearing loss. Most likely diagnosis?`,
    options: [`Meniere’s disease`, `Benign paroxysmal positional vertigo (BPPV)`, `Labyrinthitis`, `Vestibular neuritis`],
    correct: 1,
    explanation: `Benign paroxysmal positional vertigo (BPPV)`
  },
  {
    id: 22,
    question: `The eustachian tube connects the middle ear to the:`,
    options: [`Nasal vestibule`, `Nasopharynx`, `Oropharynx`, `External auditory canal`],
    correct: 1,
    explanation: `Nasopharynx`
  },
  {
    id: 23,
    question: `The first-line treatment for acute bacterial sinusitis is:`,
    options: [`Nasal saline only`, `Oral antibiotics (e.g., amoxicillin)`, `Intranasal steroids alone`, `Surgery`],
    correct: 1,
    explanation: `Oral antibiotics (e.g., amoxicillin)`
  },
  {
    id: 24,
    question: `Which middle ear ossicle is attached to the tympanic membrane?`,
    options: [`Malleus`, `Incus`, `Stapes`, `None`],
    correct: 0,
    explanation: `Malleus`
  },
  {
    id: 25,
    question: `A patient presents with sudden unilateral sensorineural hearing loss, tinnitus, and vertigo. Most likely cause?`,
    options: [`Acoustic trauma`, `Vestibular neuritis`, `Labyrinthitis`, `Meniere’s disease`],
    correct: 3,
    explanation: `Meniere’s disease`
  },
  {
    id: 26,
    question: `The most common malignant tumor of the nasal cavity is:`,
    options: [`Adenocarcinoma`, `Squamous cell carcinoma`, `Lymphoma`, `Papilloma`],
    correct: 1,
    explanation: `Squamous cell carcinoma`
  },
  {
    id: 27,
    question: `A patient presents with purulent ear discharge and granulation tissue in the ear canal. Most likely diagnosis is:`,
    options: [`Otitis externa`, `Chronic otitis media (cholesteatomatous type)`, `Acute otitis media`, `Otosclerosis`],
    correct: 1,
    explanation: `Chronic otitis media (cholesteatomatous type)`
  },
  {
    id: 28,
    question: `The tensor veli palatini muscle functions to:`,
    options: [`Elevate the soft palate`, `Tense the soft palate and open the eustachian tube`, `Depress the soft palate`, `Control pharyngeal constriction`],
    correct: 1,
    explanation: `Tense the soft palate and open the eustachian tube`
  },
  {
    id: 29,
    question: `The most common cause of sudden sensorineural hearing loss in adults is:`,
    options: [`Viral infection`, `Bacterial infection`, `Trauma`, `Ototoxic drugs`],
    correct: 0,
    explanation: `Viral infection`
  },
  {
    id: 30,
    question: `The most common site for a nasal polyp is:`,
    options: [`Inferior meatus`, `Middle meatus`, `Superior meatus`, `Nasopharynx`],
    correct: 1,
    explanation: `Middle meatus`
  },
  {
    id: 31,
    question: `Which cranial nerve is most commonly involved in Bell’s palsy?`,
    options: [`Trigeminal`, `Facial`, `Glossopharyngeal`, `Hypoglossal`],
    correct: 1,
    explanation: `Facial nerve`
  },
  {
    id: 32,
    question: `The first-line therapy for epistaxis from anterior nasal septum is:`,
    options: [`Surgical ligation`, `Nasal packing`, `Topical steroids`, `Observation`],
    correct: 1,
    explanation: `Nasal packing`
  },
  {
    id: 33,
    question: `The most common cause of chronic suppurative otitis media is:`,
    options: [`Pseudomonas aeruginosa`, `Streptococcus pneumoniae`, `Staphylococcus aureus`, `Haemophilus influenzae`],
    correct: 0,
    explanation: `Pseudomonas aeruginosa`
  },
  {
    id: 34,
    question: `A patient with a perforated tympanic membrane, chronic otorrhea, and hearing loss may have:`,
    options: [`Otosclerosis`, `Cholesteatoma`, `Acute otitis media`, `Labyrinthitis`],
    correct: 1,
    explanation: `Cholesteatoma`
  },
  {
    id: 35,
    question: `The primary treatment for laryngeal papillomatosis is:`,
    options: [`Antivirals`, `Surgical excision (microlaryngoscopy with laser or microdebrider)`, `Radiotherapy`, `Chemotherapy`],
    correct: 1,
    explanation: `Surgical excision (microlaryngoscopy with laser or microdebrider)`
  },
  {
    id: 36,
    question: `Vertigo with hearing loss and tinnitus is most suggestive of:`,
    options: [`Vestibular neuritis`, `Meniere’s disease`, `BPPV`, `Labyrinthitis`],
    correct: 1,
    explanation: `Meniere’s disease`
  },
  {
    id: 37,
    question: `Which test evaluates the function of the semicircular canals?`,
    options: [`Rinne test`, `Weber test`, `Caloric test`, `Audiometry`],
    correct: 2,
    explanation: `Caloric test`
  },
  {
    id: 38,
    question: `The most common site of epistaxis in children is:`,
    options: [`Posterior nasal cavity`, `Kiesselbach’s plexus`, `Sphenopalatine artery`, `Nasopharynx`],
    correct: 1,
    explanation: `Kiesselbach’s plexus`
  },
  {
    id: 39,
    question: `Chronic nasal obstruction with hyponasal speech and mouth breathing in a child is most likely due to:`,
    options: [`Deviated nasal septum`, `Adenoid hypertrophy`, `Nasal polyp`, `Allergic rhinitis`],
    correct: 1,
    explanation: `Adenoid hypertrophy`
  },
  {
    id: 40,
    question: `A patient presents with unilateral sensorineural hearing loss, tinnitus, and cerebellar signs. Most likely diagnosis:`,
    options: [`Meniere’s disease`, `Acoustic neuroma`, `Labyrinthitis`, `Otosclerosis`],
    correct: 1,
    explanation: `Acoustic neuroma`
  },
  {
    id: 41,
    question: `The most common site for foreign body impaction in children’s ear is:`,
    options: [`External auditory canal`, `Middle ear`, `Eustachian tube`, `Nasopharynx`],
    correct: 0,
    explanation: `External auditory canal`
  },
  {
    id: 42,
    question: `Sudden onset vertigo without hearing loss is most likely:`,
    options: [`Meniere’s disease`, `Vestibular neuritis`, `Labyrinthitis`, `Acoustic neuroma`],
    correct: 1,
    explanation: `Vestibular neuritis`
  },
  {
    id: 43,
    question: `Which cranial nerve supplies sensation to the anterior two-thirds of the tongue?`,
    options: [`Facial nerve`, `Trigeminal nerve (mandibular division)`, `Glossopharyngeal nerve`, `Hypoglossal nerve`],
    correct: 1,
    explanation: `Trigeminal nerve (mandibular division)`
  },
  {
    id: 44,
    question: `The most common cause of chronic rhinosinusitis is:`,
    options: [`Bacterial infection`, `Allergic rhinitis`, `Viral infection`, `Fungal infection`],
    correct: 1,
    explanation: `Allergic rhinitis`
  },
  {
    id: 45,
    question: `The primary site of a cholesteatoma is:`,
    options: [`External auditory canal`, `Middle ear`, `Inner ear`, `Mastoid air cells`],
    correct: 1,
    explanation: `Middle ear`
  },
  {
    id: 46,
    question: `Which vestibular test uses eye movements in response to cold or warm water irrigation?`,
    options: [`Audiometry`, `Caloric test`, `Electronystagmography`, `Rinne test`],
    correct: 1,
    explanation: `Caloric test`
  },
  {
    id: 47,
    question: `The main blood supply of the external ear is:`,
    options: [`Superficial temporal and posterior auricular arteries`, `Internal carotid artery`, `Maxillary artery only`, `Lingual artery`],
    correct: 0,
    explanation: `Superficial temporal and posterior auricular arteries`
  },
  {
    id: 48,
    question: `A patient with sudden sensorineural hearing loss should be started on:`,
    options: [`Topical antibiotics`, `Oral corticosteroids`, `Tympanostomy`, `Observation`],
    correct: 1,
    explanation: `Oral corticosteroids`
  },
  {
    id: 49,
    question: `The most common cause of vertigo in adults is:`,
    options: [`Vestibular neuritis`, `BPPV`, `Meniere’s disease`, `Labyrinthitis`],
    correct: 1,
    explanation: `BPPV`
  },
  {
    id: 50,
    question: `Which cranial nerve supplies motor innervation to the stapedius muscle in the middle ear?`,
    options: [`Facial nerve`, `Trigeminal nerve`, `Glossopharyngeal nerve`, `Vagus nerve`],
    correct: 0,
    explanation: `Facial nerve Here’s the same set of ENT MCQs, now renumbered from 1951 to 2000 with no other changes:`
  },
  {
    id: 51,
    question: `A 35-year-old patient presents with sudden-onset vertigo, nausea, and horizontal nystagmus. The most likely site of pathology is:`,
    options: [`Vestibular apparatus`, `Cochlea`, `External ear`, `Auditory nerve`],
    correct: 0,
    explanation: `Vestibular apparatus – responsible for balance and spatial orientation`
  },
  {
    id: 52,
    question: `The most common cause of conductive hearing loss in adults is:`,
    options: [`Otosclerosis`, `Acoustic neuroma`, `Presbycusis`, `Labyrinthitis`],
    correct: 0,
    explanation: `Otosclerosis – abnormal bone growth in middle ear`
  },
  {
    id: 53,
    question: `The nerve responsible for taste sensation on the anterior two-thirds of the tongue is:`,
    options: [`Chorda tympani (branch of facial nerve, CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`, `Hypoglossal nerve (CN XII)`],
    correct: 0,
    explanation: `Chorda tympani – anterior 2/3 taste`
  },
  {
    id: 54,
    question: `The eustachian tube opens into:`,
    options: [`Nasopharynx`, `Oropharynx`, `External auditory canal`, `Middle ear cavity`],
    correct: 0,
    explanation: `Nasopharynx`
  },
  {
    id: 55,
    question: `The most common cause of sensorineural hearing loss in adults is:`,
    options: [`Presbycusis`, `Otitis media`, `Otosclerosis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Presbycusis – age-related cochlear degeneration`
  },
  {
    id: 56,
    question: `A patient presents with unilateral nasal obstruction and epistaxis. On examination, there is a vascular mass in the posterior nasal cavity. The most likely diagnosis is:`,
    options: [`Juvenile nasopharyngeal angiofibroma`, `Nasal polyp`, `Squamous cell carcinoma`, `Adenoid hypertrophy`],
    correct: 0,
    explanation: `Juvenile nasopharyngeal angiofibroma – classic in adolescent males`
  },
  {
    id: 57,
    question: `The ossicle that articulates with the tympanic membrane is:`,
    options: [`Malleus`, `Incus`, `Stapes`, `Cochlea`],
    correct: 0,
    explanation: `Malleus – attaches to tympanic membrane`
  },
  {
    id: 58,
    question: `A 50-year-old patient complains of vertigo triggered by head movement. The most likely diagnosis is:`,
    options: [`Benign paroxysmal positional vertigo (BPPV)`, `Labyrinthitis`, `Ménière’s disease`, `Vestibular neuritis`],
    correct: 0,
    explanation: `BPPV – brief episodes with positional changes`
  },
  {
    id: 59,
    question: `The facial nerve (CN VII) exits the skull through which foramen?`,
    options: [`Stylomastoid foramen`, `Jugular foramen`, `Foramen ovale`, `Internal acoustic meatus`],
    correct: 0,
    explanation: `Stylomastoid foramen`
  },
  {
    id: 60,
    question: `The most common site of nosebleeds (epistaxis) is:`,
    options: [`Kiesselbach’s plexus (anterior nasal septum)`, `Posterior ethmoidal artery`, `Sphenopalatine artery`, `Maxillary sinus`],
    correct: 0,
    explanation: `Kiesselbach’s plexus – anterior septal region`
  },
  {
    id: 61,
    question: `The nerve responsible for stapedius muscle innervation is:`,
    options: [`Facial nerve (CN VII)`, `Trigeminal nerve (CN V)`, `Vestibulocochlear nerve (CN VIII)`, `Glossopharyngeal nerve (CN IX)`],
    correct: 0,
    explanation: `Facial nerve (CN VII) – dampens loud sounds`
  },
  {
    id: 62,
    question: `A patient presents with sudden, painless hearing loss in one ear. The most likely cause is:`,
    options: [`Sudden sensorineural hearing loss`, `Otitis externa`, `Otosclerosis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Sudden sensorineural hearing loss – urgent ENT referral required`
  },
  {
    id: 63,
    question: `Which of the following is the main blood supply of the middle ear?`,
    options: [`Tympanic branch of the maxillary artery`, `External carotid artery`, `Facial artery`, `Superficial temporal artery`],
    correct: 0,
    explanation: `Tympanic branch of the maxillary artery`
  },
  {
    id: 64,
    question: `The most common malignant tumor of the parotid gland is:`,
    options: [`Mucoepidermoid carcinoma`, `Adenoid cystic carcinoma`, `Pleomorphic adenoma`, `Squamous cell carcinoma`],
    correct: 0,
    explanation: `Mucoepidermoid carcinoma`
  },
  {
    id: 65,
    question: `Which structure separates the external and middle ear?`,
    options: [`Tympanic membrane`, `Oval window`, `Round window`, `Cochlea`],
    correct: 0,
    explanation: `Tympanic membrane`
  },
  {
    id: 66,
    question: `A patient with tinnitus, vertigo, and sensorineural hearing loss most likely has:`,
    options: [`Ménière’s disease`, `Otosclerosis`, `Labyrinthitis`, `Acoustic neuroma`],
    correct: 0,
    explanation: `Ménière’s disease – triad classic`
  },
  {
    id: 67,
    question: `Which muscle opens the eustachian tube during swallowing?`,
    options: [`Tensor veli palatini`, `Levator veli palatini`, `Salpingopharyngeus`, `Stapedius`],
    correct: 0,
    explanation: `Tensor veli palatini – equalizes middle ear pressure`
  },
  {
    id: 68,
    question: `The nerve responsible for hearing is:`,
    options: [`Vestibulocochlear nerve (CN VIII)`, `Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Trigeminal nerve (CN V)`],
    correct: 0,
    explanation: `Vestibulocochlear nerve (CN VIII)`
  },
  {
    id: 69,
    question: `The lateral wall of the nasal cavity contains:`,
    options: [`Conchae and meatuses`, `Nasal septum`, `Hard palate`, `Frontal sinus only`],
    correct: 0,
    explanation: `Conchae and meatuses`
  },
  {
    id: 70,
    question: `The most common benign tumor of the larynx in adults is:`,
    options: [`Vocal cord polyp`, `Papilloma`, `Adenoma`, `Granuloma`],
    correct: 0,
    explanation: `Vocal cord polyp – usually due to voice strain`
  },
  {
    id: 71,
    question: `A patient with unilateral facial paralysis and loss of taste on the anterior two-thirds of tongue. The nerve involved is:`,
    options: [`Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Trigeminal nerve (CN V)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Facial nerve (CN VII) – including chorda tympani`
  },
  {
    id: 72,
    question: `The most common site of cholesteatoma is:`,
    options: [`Epitympanic recess (pars flaccida)`, `Posterior auricle`, `External auditory canal`, `Mastoid tip`],
    correct: 0,
    explanation: `Epitympanic recess (pars flaccida)`
  },
  {
    id: 73,
    question: `Which cranial nerve is responsible for sensation in the anterior two-thirds of the tongue?`,
    options: [`Trigeminal nerve (CN V – lingual branch)`, `Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Trigeminal nerve (CN V – lingual branch)`
  },
  {
    id: 74,
    question: `The most common cause of otitis externa is:`,
    options: [`Pseudomonas aeruginosa`, `Streptococcus pneumoniae`, `Staphylococcus aureus`, `Haemophilus influenzae`],
    correct: 0,
    explanation: `Pseudomonas aeruginosa`
  },
  {
    id: 75,
    question: `A 60-year-old patient complains of progressive hoarseness. Laryngoscopy shows a unilateral vocal cord mass. The most likely diagnosis is:`,
    options: [`Laryngeal carcinoma`, `Vocal cord nodule`, `Vocal cord polyp`, `Granuloma`],
    correct: 0,
    explanation: `Laryngeal carcinoma – especially in smokers`
  },
  {
    id: 76,
    question: `The posterior auricular nerve is a branch of:`,
    options: [`Facial nerve (CN VII)`, `Trigeminal nerve (CN V)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Facial nerve (CN VII)`
  },
  {
    id: 77,
    question: `A patient presents with nasal obstruction, snoring, and mouth breathing. The most likely cause is:`,
    options: [`Adenoid hypertrophy`, `Nasal polyp`, `Deviated nasal septum`, `Foreign body`],
    correct: 0,
    explanation: `Adenoid hypertrophy – common in children`
  },
  {
    id: 78,
    question: `The tympanic membrane is innervated by all EXCEPT:`,
    options: [`Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`, `Trigeminal nerve (CN V)`],
    correct: 0,
    explanation: `Facial nerve – not involved in tympanic membrane sensation`
  },
  {
    id: 79,
    question: `The cochlea contains:`,
    options: [`Organ of Corti`, `Saccule`, `Utricle`, `Semicircular canals`],
    correct: 0,
    explanation: `Organ of Corti – sensory organ for hearing`
  },
  {
    id: 80,
    question: `The most common cause of vertigo in adults is:`,
    options: [`Benign paroxysmal positional vertigo (BPPV)`, `Labyrinthitis`, `Ménière’s disease`, `Acoustic neuroma`],
    correct: 0,
    explanation: `BPPV`
  },
  {
    id: 81,
    question: `The nerve responsible for taste on the posterior one-third of the tongue is:`,
    options: [`Glossopharyngeal nerve (CN IX)`, `Facial nerve (CN VII)`, `Vagus nerve (CN X)`, `Hypoglossal nerve (CN XII)`],
    correct: 0,
    explanation: `Glossopharyngeal nerve (CN IX)`
  },
  {
    id: 82,
    question: `The semicircular canals detect:`,
    options: [`Angular acceleration`, `Linear acceleration`, `Gravity`, `Pressure changes`],
    correct: 0,
    explanation: `Angular acceleration`
  },
  {
    id: 83,
    question: `The main treatment for acute bacterial otitis media is:`,
    options: [`Oral antibiotics`, `Topical antibiotics`, `Antivirals`, `Corticosteroids`],
    correct: 0,
    explanation: `Oral antibiotics`
  },
  {
    id: 84,
    question: `The eardrum is composed of:`,
    options: [`Three layers – outer epithelial, middle fibrous, inner mucosal`, `Two layers only`, `Fibrous only`, `Mucosal only`],
    correct: 0,
    explanation: `Three layers – outer epithelial, middle fibrous, inner mucosal`
  },
  {
    id: 85,
    question: `A patient presents with conductive hearing loss and a white mass behind the tympanic membrane. The likely diagnosis is:`,
    options: [`Cholesteatoma`, `Otitis media`, `Otosclerosis`, `Acoustic neuroma`],
    correct: 0,
    explanation: `Cholesteatoma`
  },
  {
    id: 86,
    question: `Which sinus is located in the body of the maxilla?`,
    options: [`Maxillary sinus`, `Frontal sinus`, `Sphenoid sinus`, `Ethmoid sinus`],
    correct: 0,
    explanation: `Maxillary sinus`
  },
  {
    id: 87,
    question: `Which part of the larynx is most prone to carcinoma?`,
    options: [`Glottis`, `Supraglottis`, `Subglottis`, `Epiglottis`],
    correct: 0,
    explanation: `Glottis – most common site`
  },
  {
    id: 88,
    question: `Which test is used to detect nasal septal deviation?`,
    options: [`Anterior rhinoscopy`, `Laryngoscopy`, `Otoscopy`, `Tympanometry`],
    correct: 0,
    explanation: `Anterior rhinoscopy`
  },
  {
    id: 89,
    question: `The most common site for epistaxis in children is:`,
    options: [`Anterior septum (Kiesselbach’s area)`, `Posterior ethmoid artery`, `Sphenopalatine artery`, `Maxillary sinus`],
    correct: 0,
    explanation: `Anterior septum (Kiesselbach’s area)`
  },
  {
    id: 90,
    question: `The mastoid air cells communicate with the middle ear via:`,
    options: [`Aditus ad antrum`, `Eustachian tube`, `Oval window`, `Round window`],
    correct: 0,
    explanation: `Aditus ad antrum`
  },
  {
    id: 91,
    question: `The tensor tympani muscle is innervated by:`,
    options: [`Mandibular nerve (V3)`, `Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Mandibular nerve (V3)`
  },
  {
    id: 92,
    question: `A patient with chronic sinusitis has polyps in both nostrils. The most common association is:`,
    options: [`Asthma`, `Otitis media`, `Laryngitis`, `Thyroid disease`],
    correct: 0,
    explanation: `Asthma – Samter’s triad`
  },
  {
    id: 93,
    question: `The stapes articulates with:`,
    options: [`Oval window`, `Round window`, `Tympanic membrane`, `Incus only`],
    correct: 0,
    explanation: `Oval window`
  },
  {
    id: 94,
    question: `The organ of Corti rests on:`,
    options: [`Basilar membrane`, `Tectorial membrane`, `Reissner’s membrane`, `Spiral ligament`],
    correct: 0,
    explanation: `Basilar membrane`
  },
  {
    id: 95,
    question: `The posterior auricular artery is a branch of:`,
    options: [`External carotid artery`, `Internal carotid artery`, `Subclavian artery`, `Thyrocervical trunk`],
    correct: 0,
    explanation: `External carotid artery`
  },
  {
    id: 96,
    question: `The most common cause of sudden sensorineural hearing loss is:`,
    options: [`Idiopathic viral infection`, `Otitis media`, `Otosclerosis`, `Trauma`],
    correct: 0,
    explanation: `Idiopathic viral infection`
  },
  {
    id: 97,
    question: `A 4-year-old child with snoring, mouth breathing, and recurrent otitis media likely has:`,
    options: [`Adenoid hypertrophy`, `Nasal polyp`, `Deviated septum`, `Foreign body`],
    correct: 0,
    explanation: `Adenoid hypertrophy`
  },
  {
    id: 98,
    question: `Weber test lateralizes to the affected ear in:`,
    options: [`Conductive hearing loss`, `Sensorineural hearing loss`, `Mixed hearing loss`, `Normal hearing`],
    correct: 0,
    explanation: `Conductive hearing loss`
  },
  {
    id: 99,
    question: `Rinne test is positive when:`,
    options: [`Air conduction > bone conduction (normal)`, `Bone conduction > air conduction (conductive loss)`, `Air conduction = bone conduction`, `None of the above`],
    correct: 0,
    explanation: `Air conduction > bone conduction (normal)`
  },
  {
    id: 100,
    question: `The internal acoustic meatus transmits:`,
    options: [`Facial nerve (CN VII) and Vestibulocochlear nerve (CN VIII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`, `Trigeminal nerve (CN V)`],
    correct: 0,
    explanation: `Facial nerve (CN VII) and Vestibulocochlear nerve (CN VIII)`
  },
  {
    id: 101,
    question: `A 7-year-old child presents with recurrent otitis media and hearing loss. The most likely cause is:`,
    options: [`Adenoid hypertrophy`, `Otosclerosis`, `Cholesteatoma`, `External ear infection`],
    correct: 0,
    explanation: `Adenoid hypertrophy – common in children causing Eustachian tube obstruction`
  },
  {
    id: 102,
    question: `The most common cause of anterior epistaxis is:`,
    options: [`Kiesselbach’s plexus`, `Sphenopalatine artery`, `Posterior ethmoidal artery`, `Maxillary sinusitis`],
    correct: 0,
    explanation: `Kiesselbach’s plexus – located in the anterior nasal septum`
  },
  {
    id: 103,
    question: `The nerve responsible for motor innervation of the stapedius muscle is:`,
    options: [`Facial nerve (CN VII)`, `Trigeminal nerve (CN V)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Facial nerve (CN VII) – dampens loud sounds`
  },
  {
    id: 104,
    question: `The most common site of cholesteatoma is:`,
    options: [`Epitympanic recess (pars flaccida)`, `External auditory canal`, `Mastoid tip`, `Tympanic membrane proper`],
    correct: 0,
    explanation: `Epitympanic recess (pars flaccida)`
  },
  {
    id: 105,
    question: `A patient presents with sudden vertigo triggered by head movements, lasting a few seconds. The most likely diagnosis is:`,
    options: [`Benign paroxysmal positional vertigo (BPPV)`, `Ménière’s disease`, `Labyrinthitis`, `Vestibular neuritis`],
    correct: 0,
    explanation: `BPPV – brief, positional vertigo`
  },
  {
    id: 106,
    question: `The semicircular canals detect:`,
    options: [`Angular acceleration`, `Linear acceleration`, `Gravity`, `Sound vibrations`],
    correct: 0,
    explanation: `Angular acceleration – part of the vestibular system`
  },
  {
    id: 107,
    question: `A 45-year-old smoker presents with progressive hoarseness. Laryngoscopy shows a unilateral vocal cord mass. The most likely diagnosis is:`,
    options: [`Laryngeal carcinoma`, `Vocal cord polyp`, `Papilloma`, `Granuloma`],
    correct: 0,
    explanation: `Laryngeal carcinoma – especially in smokers`
  },
  {
    id: 108,
    question: `The main blood supply to the middle ear comes from:`,
    options: [`Tympanic branch of the maxillary artery`, `Facial artery`, `Superficial temporal artery`, `Internal carotid artery`],
    correct: 0,
    explanation: `Tympanic branch of the maxillary artery`
  },
  {
    id: 109,
    question: `The eustachian tube opens into the:`,
    options: [`Nasopharynx`, `Oropharynx`, `External auditory canal`, `Middle ear`],
    correct: 0,
    explanation: `Nasopharynx`
  },
  {
    id: 110,
    question: `The tensor veli palatini muscle functions to:`,
    options: [`Open the eustachian tube`, `Close the eustachian tube`, `Move the tympanic membrane`, `Stabilize the stapes`],
    correct: 0,
    explanation: `Open the eustachian tube – equalizes middle ear pressure`
  },
  {
    id: 111,
    question: `A patient presents with unilateral facial paralysis and loss of taste in the anterior 2/3 of the tongue. The nerve involved is:`,
    options: [`Facial nerve (CN VII)`, `Trigeminal nerve (CN V)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Facial nerve (CN VII) – includes chorda tympani branch`
  },
  {
    id: 112,
    question: `Weber test lateralizes to the affected ear in:`,
    options: [`Conductive hearing loss`, `Sensorineural hearing loss`, `Mixed hearing loss`, `Normal hearing`],
    correct: 0,
    explanation: `Conductive hearing loss`
  },
  {
    id: 113,
    question: `Rinne test is positive when:`,
    options: [`Air conduction > bone conduction (normal)`, `Bone conduction > air conduction (conductive loss)`, `Air conduction = bone conduction`, `None of the above`],
    correct: 0,
    explanation: `Air conduction > bone conduction (normal)`
  },
  {
    id: 114,
    question: `The most common malignant tumor of the parotid gland is:`,
    options: [`Mucoepidermoid carcinoma`, `Adenoid cystic carcinoma`, `Pleomorphic adenoma`, `Squamous cell carcinoma`],
    correct: 0,
    explanation: `Mucoepidermoid carcinoma`
  },
  {
    id: 115,
    question: `The ossicle that articulates with the tympanic membrane is:`,
    options: [`Malleus`, `Incus`, `Stapes`, `Cochlea`],
    correct: 0,
    explanation: `Malleus – attached to the tympanic membrane`
  },
  {
    id: 116,
    question: `A patient presents with chronic sinusitis and bilateral nasal polyps. The most common association is:`,
    options: [`Asthma`, `Otitis media`, `Laryngitis`, `Allergic rhinitis`],
    correct: 0,
    explanation: `Asthma – Samter’s triad`
  },
  {
    id: 117,
    question: `The internal acoustic meatus transmits:`,
    options: [`Facial nerve (CN VII) and Vestibulocochlear nerve (CN VIII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`, `Trigeminal nerve (CN V)`],
    correct: 0,
    explanation: `Facial nerve (CN VII) and Vestibulocochlear nerve (CN VIII)`
  },
  {
    id: 118,
    question: `The organ of Corti rests on:`,
    options: [`Basilar membrane`, `Tectorial membrane`, `Reissner’s membrane`, `Spiral ligament`],
    correct: 0,
    explanation: `Basilar membrane – contains hair cells for hearing`
  },
  {
    id: 119,
    question: `The most common cause of sudden sensorineural hearing loss is:`,
    options: [`Idiopathic viral infection`, `Otitis media`, `Otosclerosis`, `Trauma`],
    correct: 0,
    explanation: `Idiopathic viral infection`
  },
  {
    id: 120,
    question: `A patient presents with conductive hearing loss and a white mass behind the tympanic membrane. The likely diagnosis is:`,
    options: [`Cholesteatoma`, `Otitis media`, `Otosclerosis`, `Acoustic neuroma`],
    correct: 0,
    explanation: `Cholesteatoma`
  },
  {
    id: 121,
    question: `The semicircular canals detect:`,
    options: [`Angular acceleration`, `Linear acceleration`, `Gravity`, `Sound vibrations`],
    correct: 0,
    explanation: `Angular acceleration`
  },
  {
    id: 122,
    question: `The most common site of nosebleeds in children is:`,
    options: [`Anterior septum (Kiesselbach’s area)`, `Posterior ethmoid artery`, `Sphenopalatine artery`, `Maxillary sinus`],
    correct: 0,
    explanation: `Anterior septum (Kiesselbach’s area)`
  },
  {
    id: 123,
    question: `The tympanic membrane has:`,
    options: [`Three layers – outer epithelial, middle fibrous, inner mucosal`, `Two layers only`, `Fibrous only`, `Mucosal only`],
    correct: 0,
    explanation: `Three layers – outer epithelial, middle fibrous, inner mucosal`
  },
  {
    id: 124,
    question: `The facial nerve exits the skull through:`,
    options: [`Stylomastoid foramen`, `Jugular foramen`, `Foramen ovale`, `Internal acoustic meatus`],
    correct: 0,
    explanation: `Stylomastoid foramen`
  },
  {
    id: 125,
    question: `The lateral wall of the nasal cavity contains:`,
    options: [`Conchae and meatuses`, `Nasal septum`, `Hard palate`, `Frontal sinus only`],
    correct: 0,
    explanation: `Conchae and meatuses`
  },
  {
    id: 126,
    question: `The posterior auricular artery is a branch of:`,
    options: [`External carotid artery`, `Internal carotid artery`, `Subclavian artery`, `Thyrocervical trunk`],
    correct: 0,
    explanation: `External carotid artery`
  },
  {
    id: 127,
    question: `The most common benign tumor of the larynx in adults is:`,
    options: [`Vocal cord polyp`, `Papilloma`, `Adenoma`, `Granuloma`],
    correct: 0,
    explanation: `Vocal cord polyp – usually due to voice strain`
  },
  {
    id: 128,
    question: `The stapes articulates with:`,
    options: [`Oval window`, `Round window`, `Tympanic membrane`, `Incus only`],
    correct: 0,
    explanation: `Oval window`
  },
  {
    id: 129,
    question: `The main treatment for acute bacterial otitis media is:`,
    options: [`Oral antibiotics`, `Topical antibiotics`, `Antivirals`, `Corticosteroids`],
    correct: 0,
    explanation: `Oral antibiotics`
  },
  {
    id: 130,
    question: `The posterior auricular nerve is a branch of:`,
    options: [`Facial nerve (CN VII)`, `Trigeminal nerve (CN V)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Facial nerve (CN VII)`
  },
  {
    id: 131,
    question: `The mastoid air cells communicate with the middle ear via:`,
    options: [`Aditus ad antrum`, `Eustachian tube`, `Oval window`, `Round window`],
    correct: 0,
    explanation: `Aditus ad antrum`
  },
  {
    id: 132,
    question: `A 4-year-old child with snoring, mouth breathing, and recurrent otitis media likely has:`,
    options: [`Adenoid hypertrophy`, `Nasal polyp`, `Deviated septum`, `Foreign body`],
    correct: 0,
    explanation: `Adenoid hypertrophy`
  },
  {
    id: 133,
    question: `Weber test lateralizes to the affected ear in:`,
    options: [`Conductive hearing loss`, `Sensorineural hearing loss`, `Mixed hearing loss`, `Normal hearing`],
    correct: 0,
    explanation: `Conductive hearing loss`
  },
  {
    id: 134,
    question: `Rinne test is positive when:`,
    options: [`Air conduction > bone conduction (normal)`, `Bone conduction > air conduction (conductive loss)`, `Air conduction = bone conduction`, `None of the above`],
    correct: 0,
    explanation: `Air conduction > bone conduction (normal)`
  },
  {
    id: 135,
    question: `A patient presents with unilateral nasal obstruction and epistaxis. The most likely diagnosis is:`,
    options: [`Juvenile nasopharyngeal angiofibroma`, `Nasal polyp`, `Squamous cell carcinoma`, `Adenoid hypertrophy`],
    correct: 0,
    explanation: `Juvenile nasopharyngeal angiofibroma`
  },
  {
    id: 136,
    question: `The most common site of cholesteatoma is:`,
    options: [`Epitympanic recess (pars flaccida)`, `External auditory canal`, `Mastoid tip`, `Tympanic membrane proper`],
    correct: 0,
    explanation: `Epitympanic recess (pars flaccida)`
  },
  {
    id: 137,
    question: `The nerve responsible for sensation in the anterior two-thirds of the tongue is:`,
    options: [`Trigeminal nerve (CN V – lingual branch)`, `Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Trigeminal nerve (CN V – lingual branch)`
  },
  {
    id: 138,
    question: `The nerve responsible for taste on the posterior one-third of the tongue is:`,
    options: [`Glossopharyngeal nerve (CN IX)`, `Facial nerve (CN VII)`, `Vagus nerve (CN X)`, `Hypoglossal nerve (CN XII)`],
    correct: 0,
    explanation: `Glossopharyngeal nerve (CN IX)`
  },
  {
    id: 139,
    question: `The most common cause of otitis externa is:`,
    options: [`Pseudomonas aeruginosa`, `Streptococcus pneumoniae`, `Staphylococcus aureus`, `Haemophilus influenzae`],
    correct: 0,
    explanation: `Pseudomonas aeruginosa`
  },
  {
    id: 140,
    question: `A patient presents with sudden vertigo, nausea, and horizontal nystagmus. The most likely site of pathology is:`,
    options: [`Vestibular apparatus`, `Cochlea`, `External ear`, `Auditory nerve`],
    correct: 0,
    explanation: `Vestibular apparatus`
  },
  {
    id: 141,
    question: `A patient complains of sudden, painless hearing loss in one ear. The most likely cause is:`,
    options: [`Sudden sensorineural hearing loss`, `Otitis externa`, `Otosclerosis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Sudden sensorineural hearing loss`
  },
  {
    id: 142,
    question: `The main blood supply to the middle ear is:`,
    options: [`Tympanic branch of the maxillary artery`, `External carotid artery`, `Facial artery`, `Superficial temporal artery`],
    correct: 0,
    explanation: `Tympanic branch of the maxillary artery`
  },
  {
    id: 143,
    question: `The eustachian tube opens into:`,
    options: [`Nasopharynx`, `Oropharynx`, `External auditory canal`, `Middle ear`],
    correct: 0,
    explanation: `Nasopharynx`
  },
  {
    id: 144,
    question: `The tensor veli palatini muscle functions to:`,
    options: [`Open the eustachian tube`, `Close the eustachian tube`, `Move the tympanic membrane`, `Stabilize the stapes`],
    correct: 0,
    explanation: `Open the eustachian tube`
  },
  {
    id: 145,
    question: `The ossicle that articulates with the tympanic membrane is:`,
    options: [`Malleus`, `Incus`, `Stapes`, `Cochlea`],
    correct: 0,
    explanation: `Malleus`
  },
  {
    id: 146,
    question: `The semicircular canals detect:`,
    options: [`Angular acceleration`, `Linear acceleration`, `Gravity`, `Sound vibrations`],
    correct: 0,
    explanation: `Angular acceleration`
  },
  {
    id: 147,
    question: `The most common malignant tumor of the parotid gland is:`,
    options: [`Mucoepidermoid carcinoma`, `Adenoid cystic carcinoma`, `Pleomorphic adenoma`, `Squamous cell carcinoma`],
    correct: 0,
    explanation: `Mucoepidermoid carcinoma`
  },
  {
    id: 148,
    question: `The most common site of nosebleeds is:`,
    options: [`Kiesselbach’s plexus`, `Sphenopalatine artery`, `Posterior ethmoidal artery`, `Maxillary sinus`],
    correct: 0,
    explanation: `Kiesselbach’s plexus`
  },
  {
    id: 149,
    question: `The organ of Corti rests on:`,
    options: [`Basilar membrane`, `Tectorial membrane`, `Reissner’s membrane`, `Spiral ligament`],
    correct: 0,
    explanation: `Basilar membrane`
  },
  {
    id: 150,
    question: `The mastoid air cells communicate with the middle ear via:`,
    options: [`Aditus ad antrum`, `Eustachian tube`, `Oval window`, `Round window`],
    correct: 0,
    explanation: `Aditus ad antrum`
  },
  {
    id: 151,
    question: `The most common cause of earwax impaction is:`,
    options: [`Overuse of cotton swabs`, `Otitis externa`, `Otosclerosis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Overuse of cotton swabs – pushes cerumen deeper into canal`
  },
  {
    id: 152,
    question: `The external ear is also called:`,
    options: [`Auricle or pinna`, `Tympanic membrane`, `Middle ear`, `Cochlea`],
    correct: 0,
    explanation: `Auricle or pinna – visible part of the ear`
  },
  {
    id: 153,
    question: `The tympanic membrane separates:`,
    options: [`External and middle ear`, `Middle and inner ear`, `Inner ear and cochlea`, `Nasopharynx and middle ear`],
    correct: 0,
    explanation: `External and middle ear`
  },
  {
    id: 154,
    question: `The main function of the cochlea is:`,
    options: [`Hearing`, `Balance`, `Taste`, `Smell`],
    correct: 0,
    explanation: `Hearing – contains organ of Corti`
  },
  {
    id: 155,
    question: `The semicircular canals are part of the:`,
    options: [`Vestibular system`, `Auditory system`, `Nasal cavity`, `Pharynx`],
    correct: 0,
    explanation: `Vestibular system – detect angular movements`
  },
  {
    id: 156,
    question: `Otitis externa is commonly known as:`,
    options: [`Swimmer’s ear`, `Middle ear infection`, `Labyrinthitis`, `Ménière’s disease`],
    correct: 0,
    explanation: `Swimmer’s ear – infection of external auditory canal`
  },
  {
    id: 157,
    question: `The Eustachian tube equalizes:`,
    options: [`Middle ear pressure`, `Inner ear pressure`, `Nasal pressure`, `Outer ear pressure`],
    correct: 0,
    explanation: `Middle ear pressure – connects to nasopharynx`
  },
  {
    id: 158,
    question: `A common symptom of sinusitis is:`,
    options: [`Nasal congestion`, `Hearing loss`, `Tinnitus`, `Vertigo`],
    correct: 0,
    explanation: `Nasal congestion – often with facial pain`
  },
  {
    id: 159,
    question: `The most common nasal polyp site is:`,
    options: [`Middle meatus`, `Sphenoethmoidal recess`, `Nasal septum`, `Anterior nares`],
    correct: 0,
    explanation: `Middle meatus – due to obstruction of sinus drainage`
  },
  {
    id: 160,
    question: `The auricle is primarily made of:`,
    options: [`Elastic cartilage`, `Bone`, `Fibrous tissue`, `Muscle`],
    correct: 0,
    explanation: `Elastic cartilage – covered by skin`
  },
  {
    id: 161,
    question: `The main cause of tinnitus in adults is:`,
    options: [`Presbycusis`, `Otitis externa`, `Adenoid hypertrophy`, `Sinusitis`],
    correct: 0,
    explanation: `Presbycusis – age-related cochlear degeneration`
  },
  {
    id: 162,
    question: `The malleus, incus, and stapes are located in the:`,
    options: [`Middle ear`, `External ear`, `Inner ear`, `Nasal cavity`],
    correct: 0,
    explanation: `Middle ear – ossicles transmit sound`
  },
  {
    id: 163,
    question: `The stapes articulates with the:`,
    options: [`Oval window`, `Round window`, `Tympanic membrane`, `Cochlea`],
    correct: 0,
    explanation: `Oval window – transmits vibrations to inner ear`
  },
  {
    id: 164,
    question: `The nerve responsible for taste on the anterior two-thirds of the tongue is:`,
    options: [`Chorda tympani (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`, `Hypoglossal nerve (CN XII)`],
    correct: 0,
    explanation: `Chorda tympani – branch of facial nerve`
  },
  {
    id: 165,
    question: `The most common symptom of hearing loss in adults is:`,
    options: [`Difficulty understanding speech`, `Vertigo`, `Nasal obstruction`, `Facial numbness`],
    correct: 0,
    explanation: `Difficulty understanding speech – especially in presbycusis`
  },
  {
    id: 166,
    question: `The Weber test is used to distinguish between:`,
    options: [`Conductive and sensorineural hearing loss`, `Otitis externa and media`, `Sinusitis and nasal polyp`, `Vertigo and tinnitus`],
    correct: 0,
    explanation: `Conductive and sensorineural hearing loss`
  },
  {
    id: 167,
    question: `The Rinne test compares:`,
    options: [`Air and bone conduction`, `Left and right ears`, `Inner and middle ear`, `Hearing and balance`],
    correct: 0,
    explanation: `Air and bone conduction – identifies type of hearing loss`
  },
  {
    id: 168,
    question: `The most common cause of sudden sensorineural hearing loss is:`,
    options: [`Idiopathic viral infection`, `Otitis externa`, `Cholesteatoma`, `Otosclerosis`],
    correct: 0,
    explanation: `Idiopathic viral infection – urgent ENT referral`
  },
  {
    id: 169,
    question: `The tympanic membrane has:`,
    options: [`Three layers`, `Two layers`, `One layer`, `Four layers`],
    correct: 0,
    explanation: `Three layers – outer epithelial, middle fibrous, inner mucosal`
  },
  {
    id: 170,
    question: `The external auditory canal extends from:`,
    options: [`Auricle to tympanic membrane`, `Cochlea to auricle`, `Middle ear to inner ear`, `Nasopharynx to external ear`],
    correct: 0,
    explanation: `Auricle to tympanic membrane`
  },
  {
    id: 171,
    question: `The Eustachian tube in children is:`,
    options: [`Shorter and more horizontal`, `Longer and vertical`, `Longer and horizontal`, `Shorter and vertical`],
    correct: 0,
    explanation: `Shorter and more horizontal – predisposing to otitis media`
  },
  {
    id: 172,
    question: `The most common cause of conductive hearing loss in children is:`,
    options: [`Otitis media with effusion`, `Presbycusis`, `Cholesteatoma`, `Acoustic neuroma`],
    correct: 0,
    explanation: `Otitis media with effusion`
  },
  {
    id: 173,
    question: `Ménière’s disease typically presents with:`,
    options: [`Vertigo, tinnitus, and hearing loss`, `Nasal obstruction and epistaxis`, `Facial paralysis and loss of taste`, `Otitis externa`],
    correct: 0,
    explanation: `Vertigo, tinnitus, and hearing loss – classic triad`
  },
  {
    id: 174,
    question: `The semicircular canals detect:`,
    options: [`Angular acceleration`, `Linear acceleration`, `Sound vibrations`, `Pressure changes`],
    correct: 0,
    explanation: `Angular acceleration – part of vestibular system`
  },
  {
    id: 175,
    question: `The most common site of epistaxis in adults is:`,
    options: [`Anterior septum (Kiesselbach’s area)`, `Posterior ethmoid artery`, `Sphenopalatine artery`, `Maxillary sinus`],
    correct: 0,
    explanation: `Anterior septum (Kiesselbach’s area)`
  },
  {
    id: 176,
    question: `The auricle is innervated by:`,
    options: [`Auriculotemporal nerve (CN V3)`, `Facial nerve`, `Glossopharyngeal nerve`, `Vagus nerve`],
    correct: 0,
    explanation: `Auriculotemporal nerve – sensory to external ear`
  },
  {
    id: 177,
    question: `The middle ear communicates with the mastoid air cells via:`,
    options: [`Aditus ad antrum`, `Eustachian tube`, `Oval window`, `Round window`],
    correct: 0,
    explanation: `Aditus ad antrum`
  },
  {
    id: 178,
    question: `Otosclerosis primarily affects the:`,
    options: [`Stapes`, `Malleus`, `Incus`, `Cochlea`],
    correct: 0,
    explanation: `Stapes – leading to conductive hearing loss`
  },
  {
    id: 179,
    question: `The most common cause of tinnitus is:`,
    options: [`Age-related hearing loss`, `Otitis media`, `Otosclerosis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Age-related hearing loss – presbycusis`
  },
  {
    id: 180,
    question: `Cholesteatoma is most commonly located in:`,
    options: [`Epitympanic recess`, `External auditory canal`, `Mastoid tip`, `Cochlea`],
    correct: 0,
    explanation: `Epitympanic recess – pars flaccida`
  },
  {
    id: 181,
    question: `The auricular muscles are mainly:`,
    options: [`Vestigial`, `Strongly functional`, `Responsible for hearing`, `Responsible for balance`],
    correct: 0,
    explanation: `Vestigial – limited movement in humans`
  },
  {
    id: 182,
    question: `The most common cause of sudden vertigo is:`,
    options: [`Benign paroxysmal positional vertigo`, `Labyrinthitis`, `Ménière’s disease`, `Vestibular schwannoma`],
    correct: 0,
    explanation: `Benign paroxysmal positional vertigo – brief, positional`
  },
  {
    id: 183,
    question: `The glossopharyngeal nerve provides taste sensation to the:`,
    options: [`Posterior one-third of tongue`, `Anterior two-thirds of tongue`, `Soft palate`, `Epiglottis`],
    correct: 0,
    explanation: `Posterior one-third of tongue`
  },
  {
    id: 184,
    question: `The chorda tympani is a branch of:`,
    options: [`Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Trigeminal nerve (CN V)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Facial nerve – taste anterior 2/3 of tongue`
  },
  {
    id: 185,
    question: `The mastoid process contains:`,
    options: [`Air cells`, `Cochlear structures`, `External auditory canal`, `Semicircular canals`],
    correct: 0,
    explanation: `Air cells – connect with middle ear`
  },
  {
    id: 186,
    question: `Acoustic neuroma arises from:`,
    options: [`Vestibulocochlear nerve (CN VIII)`, `Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Trigeminal nerve (CN V)`],
    correct: 0,
    explanation: `Vestibulocochlear nerve – benign tumor`
  },
  {
    id: 187,
    question: `The auricle collects sound waves and directs them into:`,
    options: [`External auditory canal`, `Middle ear`, `Cochlea`, `Semicircular canals`],
    correct: 0,
    explanation: `External auditory canal`
  },
  {
    id: 188,
    question: `The stapes footplate rests on the:`,
    options: [`Oval window`, `Round window`, `Tympanic membrane`, `Cochlea`],
    correct: 0,
    explanation: `Oval window`
  },
  {
    id: 189,
    question: `The round window functions to:`,
    options: [`Allow fluid movement in cochlea`, `Transmit sound to ossicles`, `Open Eustachian tube`, `Detect angular acceleration`],
    correct: 0,
    explanation: `Allow fluid movement in cochlea`
  },
  {
    id: 190,
    question: `Chronic sinusitis is commonly associated with:`,
    options: [`Nasal polyps`, `Otitis externa`, `Ménière’s disease`, `Facial nerve paralysis`],
    correct: 0,
    explanation: `Nasal polyps`
  },
  {
    id: 191,
    question: `The external ear canal is lined by:`,
    options: [`Skin with ceruminous glands`, `Mucosa`, `Fibrous tissue`, `Cartilage only`],
    correct: 0,
    explanation: `Skin with ceruminous glands`
  },
  {
    id: 192,
    question: `The cochlea contains the:`,
    options: [`Organ of Corti`, `Semicircular canals`, `Eustachian tube`, `Tympanic cavity`],
    correct: 0,
    explanation: `Organ of Corti – sensory for hearing`
  },
  {
    id: 193,
    question: `The most common cause of conductive hearing loss in adults is:`,
    options: [`Otosclerosis`, `Presbycusis`, `Otitis externa`, `Acoustic neuroma`],
    correct: 0,
    explanation: `Otosclerosis – fixation of stapes`
  },
  {
    id: 194,
    question: `The auricular cartilage is mainly:`,
    options: [`Elastic cartilage`, `Hyaline cartilage`, `Fibrocartilage`, `Bone`],
    correct: 0,
    explanation: `Elastic cartilage`
  },
  {
    id: 195,
    question: `The chorda tympani travels through:`,
    options: [`Middle ear cavity`, `External auditory canal`, `Nasopharynx`, `Mastoid air cells`],
    correct: 0,
    explanation: `Middle ear cavity`
  },
  {
    id: 196,
    question: `A 6-year-old with recurrent otitis media and nasal obstruction likely has:`,
    options: [`Adenoid hypertrophy`, `Otosclerosis`, `Cholesteatoma`, `Deviated septum`],
    correct: 0,
    explanation: `Adenoid hypertrophy`
  },
  {
    id: 197,
    question: `The posterior auricular nerve is a branch of:`,
    options: [`Facial nerve (CN VII)`, `Trigeminal nerve`, `Glossopharyngeal nerve`, `Vagus nerve`],
    correct: 0,
    explanation: `Facial nerve (CN VII)`
  },
  {
    id: 198,
    question: `The Eustachian tube in adults is:`,
    options: [`Longer and more vertical`, `Shorter and horizontal`, `Same as in children`, `Non-functional`],
    correct: 0,
    explanation: `Longer and more vertical – less prone to infections`
  },
  {
    id: 199,
    question: `The Rinne test differentiates:`,
    options: [`Conductive from sensorineural hearing loss`, `Otitis externa from otitis media`, `Vertigo causes`, `Sinusitis causes`],
    correct: 0,
    explanation: `Conductive from sensorineural hearing loss`
  },
  {
    id: 200,
    question: `The most common site of cholesteatoma is:`,
    options: [`Epitympanic recess`, `External auditory canal`, `Mastoid tip`, `Cochlea`],
    correct: 0,
    explanation: `Epitympanic recess – pars flaccida`
  },
  {
    id: 201,
    question: `A 10-year-old child presents with recurrent nasal obstruction, mouth breathing, and snoring; on examination, there is hypertrophy of lymphoid tissue in the nasopharynx. The most likely cause is:`,
    options: [`Adenoid hypertrophy`, `Nasal polyp`, `Deviated nasal septum`, `Foreign body`],
    correct: 0,
    explanation: `Adenoid hypertrophy – common cause of airway obstruction in children`
  },
  {
    id: 202,
    question: `A patient presents with painless epistaxis from the anterior nasal septum. The most frequent site of bleeding is:`,
    options: [`Kiesselbach’s plexus`, `Posterior ethmoidal artery`, `Sphenopalatine artery`, `Maxillary sinus`],
    correct: 0,
    explanation: `Kiesselbach’s plexus – rich vascular network in anterior septum`
  },
  {
    id: 203,
    question: `The most common benign tumor of the larynx in adults, often associated with voice misuse, is:`,
    options: [`Vocal cord polyp`, `Papilloma`, `Adenoma`, `Granuloma`],
    correct: 0,
    explanation: `Vocal cord polyp – usually unilateral and linked to chronic irritation`
  },
  {
    id: 204,
    question: `The facial nerve provides motor innervation to the stapedius muscle, which functions to:`,
    options: [`Damp loud sounds transmitted through the ossicles`, `Open the Eustachian tube`, `Control taste on the anterior tongue`, `Innervate the tensor tympani`],
    correct: 0,
    explanation: `Damp loud sounds transmitted through the ossicles`
  },
  {
    id: 205,
    question: `A 25-year-old male presents with recurrent episodes of vertigo lasting several minutes, accompanied by tinnitus and a feeling of ear fullness. The most likely diagnosis is:`,
    options: [`Ménière’s disease`, `Benign paroxysmal positional vertigo`, `Vestibular neuritis`, `Labyrinthitis`],
    correct: 0,
    explanation: `Ménière’s disease – characterized by triad of vertigo, tinnitus, and hearing loss`
  },
  {
    id: 206,
    question: `The eustachian tube connects the middle ear to the nasopharynx and functions primarily to:`,
    options: [`Equalize air pressure across the tympanic membrane`, `Transmit sound vibrations`, `Provide taste sensation`, `Drain lymph from the ear`],
    correct: 0,
    explanation: `Equalize air pressure across the tympanic membrane`
  },
  {
    id: 207,
    question: `The most common site of acquired cholesteatoma is the:`,
    options: [`Pars flaccida of the tympanic membrane in the epitympanic recess`, `Cochlea`, `External auditory canal`, `Mastoid tip`],
    correct: 0,
    explanation: `Pars flaccida of the tympanic membrane – retraction pocket leads to accumulation of keratin debris`
  },
  {
    id: 208,
    question: `Sudden sensorineural hearing loss in adults is most commonly:`,
    options: [`Idiopathic, often presumed viral in origin`, `Due to otosclerosis`, `Caused by chronic otitis externa`, `Secondary to cholesteatoma`],
    correct: 0,
    explanation: `Idiopathic, often presumed viral in origin – urgent ENT referral required`
  },
  {
    id: 209,
    question: `The semicircular canals in the inner ear are responsible for detecting:`,
    options: [`Angular acceleration`, `Linear acceleration`, `Gravity`, `Sound vibrations`],
    correct: 0,
    explanation: `Angular acceleration – essential for maintaining balance`
  },
  {
    id: 210,
    question: `In children, the eustachian tube is shorter and more horizontal compared to adults, which predisposes them to:`,
    options: [`Recurrent otitis media`, `Ménière’s disease`, `Acoustic neuroma`, `Presbycusis`],
    correct: 0,
    explanation: `Recurrent otitis media – due to impaired drainage`
  },
  {
    id: 211,
    question: `The ossicle that articulates directly with the tympanic membrane and transmits sound to the other ossicles is the:`,
    options: [`Malleus`, `Incus`, `Stapes`, `Cochlea`],
    correct: 0,
    explanation: `Malleus – handles vibration of the tympanic membrane`
  },
  {
    id: 212,
    question: `The organ of Corti, the sensory organ of hearing, rests on which structure within the cochlea:`,
    options: [`Basilar membrane`, `Tectorial membrane`, `Reissner’s membrane`, `Spiral ligament`],
    correct: 0,
    explanation: `Basilar membrane – contains hair cells for transduction of sound`
  },
  {
    id: 213,
    question: `A patient presents with a slowly progressive conductive hearing loss and a family history of similar symptoms. The most likely diagnosis is:`,
    options: [`Otosclerosis`, `Presbycusis`, `Labyrinthitis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Otosclerosis – abnormal bone deposition in stapes footplate`
  },
  {
    id: 214,
    question: `In posterior epistaxis, bleeding typically originates from the:`,
    options: [`Sphenopalatine artery`, `Kiesselbach’s plexus`, `Anterior ethmoidal artery`, `Maxillary sinus`],
    correct: 0,
    explanation: `Sphenopalatine artery – often posterior, requiring packing or cautery`
  },
  {
    id: 215,
    question: `The Rinne test compares air conduction to bone conduction and is used to differentiate:`,
    options: [`Conductive from sensorineural hearing loss`, `Otitis externa from otitis media`, `Vestibular disorders`, `Sinus infections`],
    correct: 0,
    explanation: `Conductive from sensorineural hearing loss`
  },
  {
    id: 216,
    question: `The Weber test lateralizes to the affected ear in cases of:`,
    options: [`Conductive hearing loss`, `Sensorineural hearing loss`, `Mixed hearing loss`, `Normal hearing`],
    correct: 0,
    explanation: `Conductive hearing loss – bone conduction is better on affected side`
  },
  {
    id: 217,
    question: `The chorda tympani branch of the facial nerve is responsible for:`,
    options: [`Taste sensation from the anterior two-thirds of the tongue`, `Motor innervation of the stapedius`, `Hearing`, `Sensation of the external ear`],
    correct: 0,
    explanation: `Taste sensation from the anterior two-thirds of the tongue`
  },
  {
    id: 218,
    question: `The posterior auricular nerve, which supplies some auricular muscles, is a branch of:`,
    options: [`Facial nerve (CN VII)`, `Trigeminal nerve (CN V)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Facial nerve (CN VII)`
  },
  {
    id: 219,
    question: `In chronic sinusitis, bilateral nasal polyps are commonly associated with:`,
    options: [`Asthma`, `Otitis externa`, `Ménière’s disease`, `Presbycusis`],
    correct: 0,
    explanation: `Asthma – forming part of Samter’s triad`
  },
  {
    id: 220,
    question: `The tympanic membrane is composed of three layers: outer epithelial, middle fibrous, and inner mucosal. Its main function is to:`,
    options: [`Transmit sound from the external to the middle ear`, `Equalize ear pressure`, `Detect angular acceleration`, `Drain the middle ear`],
    correct: 0,
    explanation: `Transmit sound from the external to the middle ear`
  },
  {
    id: 221,
    question: `The mastoid air cells communicate with the middle ear via:`,
    options: [`Aditus ad antrum`, `Eustachian tube`, `Round window`, `Oval window`],
    correct: 0,
    explanation: `Aditus ad antrum – allows aeration of mastoid`
  },
  {
    id: 222,
    question: `Acoustic neuroma (vestibular schwannoma) arises from:`,
    options: [`Vestibulocochlear nerve (CN VIII)`, `Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Trigeminal nerve (CN V)`],
    correct: 0,
    explanation: `Vestibulocochlear nerve – usually unilateral, slow-growing`
  },
  {
    id: 223,
    question: `The most common organism causing otitis externa is:`,
    options: [`Pseudomonas aeruginosa`, `Staphylococcus aureus`, `Streptococcus pneumoniae`, `Haemophilus influenzae`],
    correct: 0,
    explanation: `Pseudomonas aeruginosa – especially in swimmers`
  },
  {
    id: 224,
    question: `The auricle is primarily composed of:`,
    options: [`Elastic cartilage covered by skin`, `Hyaline cartilage`, `Fibrous tissue`, `Bone`],
    correct: 0,
    explanation: `Elastic cartilage covered by skin`
  },
  {
    id: 225,
    question: `Chronic otitis media with perforation may lead to:`,
    options: [`Cholesteatoma formation`, `Ménière’s disease`, `Otosclerosis`, `Presbycusis`],
    correct: 0,
    explanation: `Cholesteatoma formation – accumulation of keratin debris in retraction pocket`
  },
  {
    id: 226,
    question: `The cochlea contains:`,
    options: [`Organ of Corti – sensory for hearing`, `Semicircular canals – vestibular function`, `Eustachian tube`, `Tympanic cavity`],
    correct: 0,
    explanation: `Organ of Corti – sensory for hearing`
  },
  {
    id: 227,
    question: `The tensor tympani muscle is innervated by:`,
    options: [`Mandibular nerve (V3)`, `Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Mandibular nerve – dampens sound via tympanic membrane tension`
  },
  {
    id: 228,
    question: `The stapes footplate rests on the:`,
    options: [`Oval window`, `Round window`, `Tympanic membrane`, `Cochlea`],
    correct: 0,
    explanation: `Oval window – transmits vibrations into inner ear`
  },
  {
    id: 229,
    question: `The auricular muscles in humans are mainly:`,
    options: [`Vestigial`, `Strongly functional`, `Responsible for hearing`, `Responsible for balance`],
    correct: 0,
    explanation: `Vestigial – limited movement in humans`
  },
  {
    id: 230,
    question: `Sudden vertigo without hearing loss is most likely caused by:`,
    options: [`Vestibular neuritis`, `Ménière’s disease`, `Otosclerosis`, `Otitis externa`],
    correct: 0,
    explanation: `Vestibular neuritis – inflammation of vestibular nerve`
  },
  {
    id: 231,
    question: `Nasal polyps are most commonly found in:`,
    options: [`Middle meatus`, `Anterior nares`, `Nasal septum`, `Sphenoethmoidal recess`],
    correct: 0,
    explanation: `Middle meatus – obstruction of sinus drainage leads to polyp formation`
  },
  {
    id: 232,
    question: `The auricle collects sound waves and directs them into:`,
    options: [`External auditory canal`, `Middle ear`, `Cochlea`, `Semicircular canals`],
    correct: 0,
    explanation: `External auditory canal`
  },
  {
    id: 233,
    question: `The cochlear nerve transmits auditory signals from:`,
    options: [`Hair cells of the organ of Corti to the brainstem`, `Semicircular canals to the brainstem`, `Tympanic membrane to middle ear`, `External canal to cochlea`],
    correct: 0,
    explanation: `Hair cells of the organ of Corti to the brainstem`
  },
  {
    id: 234,
    question: `Posterior epistaxis in adults often requires:`,
    options: [`Posterior nasal packing or cauterization`, `Observation only`, `Antibiotics alone`, `Nasal decongestants`],
    correct: 0,
    explanation: `Posterior nasal packing or cauterization`
  },
  {
    id: 235,
    question: `The auriculotemporal nerve (branch of V3) provides sensation to:`,
    options: [`External ear and anterior auricle`, `Tympanic membrane only`, `Cochlea`, `Vestibular apparatus`],
    correct: 0,
    explanation: `External ear and anterior auricle`
  },
  {
    id: 236,
    question: `The most common congenital cause of hearing loss in children is:`,
    options: [`Genetic syndromes (e.g., Connexin 26 mutation)`, `Otitis externa`, `Otosclerosis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Genetic syndromes – present at birth`
  },
  {
    id: 237,
    question: `A patient with a history of swimming presents with pain and discharge from the ear canal. The most likely diagnosis is:`,
    options: [`Otitis externa`, `Otitis media`, `Cholesteatoma`, `Labyrinthitis`],
    correct: 0,
    explanation: `Otitis externa – commonly Pseudomonas infection`
  },
  {
    id: 238,
    question: `The auricle receives motor innervation from:`,
    options: [`Posterior auricular branch of facial nerve`, `Glossopharyngeal nerve`, `Trigeminal nerve`, `Vagus nerve`],
    correct: 0,
    explanation: `Posterior auricular branch of facial nerve`
  },
  {
    id: 239,
    question: `The most common site of tympanic membrane perforation is:`,
    options: [`Pars tensa`, `Pars flaccida`, `Malleus handle`, `Stapes footplate`],
    correct: 0,
    explanation: `Pars tensa – due to trauma or infection`
  },
  {
    id: 240,
    question: `The Eustachian tube in adults functions primarily to:`,
    options: [`Ventilate the middle ear and maintain pressure equilibrium`, `Transmit sound`, `Detect angular acceleration`, `Sense taste`],
    correct: 0,
    explanation: `Ventilate the middle ear and maintain pressure equilibrium`
  },
  {
    id: 241,
    question: `In chronic otitis media, hearing loss is typically:`,
    options: [`Conductive`, `Sensorineural`, `Mixed`, `Central`],
    correct: 0,
    explanation: `Conductive – due to ossicular damage or tympanic membrane perforation`
  },
  {
    id: 242,
    question: `A patient with recurrent epistaxis and a vascular mass in the posterior nasal cavity is most likely to have:`,
    options: [`Juvenile nasopharyngeal angiofibroma`, `Nasal polyp`, `Squamous cell carcinoma`, `Adenoid hypertrophy`],
    correct: 0,
    explanation: `Juvenile nasopharyngeal angiofibroma – classic in adolescent males`
  },
  {
    id: 243,
    question: `The most common cause of conductive hearing loss in children is:`,
    options: [`Otitis media with effusion`, `Otosclerosis`, `Cholesteatoma`, `Acoustic neuroma`],
    correct: 0,
    explanation: `Otitis media with effusion`
  },
  {
    id: 244,
    question: `The tympanic cavity communicates with the mastoid air cells via:`,
    options: [`Aditus ad antrum`, `Eustachian tube`, `Oval window`, `Round window`],
    correct: 0,
    explanation: `Aditus ad antrum`
  },
  {
    id: 245,
    question: `The auricle acts as a:`,
    options: [`Sound collector, directing waves into the external auditory canal`, `Balance organ`, `Pressure regulator`, `Cochlear amplifier`],
    correct: 0,
    explanation: `Sound collector, directing waves into the external auditory canal`
  },
  {
    id: 246,
    question: `A patient with vertigo, hearing loss, and tinnitus most likely has:`,
    options: [`Ménière’s disease`, `Benign paroxysmal positional vertigo`, `Labyrinthitis`, `Otosclerosis`],
    correct: 0,
    explanation: `Ménière’s disease – classic triad`
  },
  {
    id: 247,
    question: `The facial nerve passes through which foramen to exit the skull?`,
    options: [`Stylomastoid foramen`, `Jugular foramen`, `Foramen ovale`, `Internal acoustic meatus`],
    correct: 0,
    explanation: `Stylomastoid foramen`
  },
  {
    id: 248,
    question: `The stapes transmits vibrations from the incus to:`,
    options: [`Oval window`, `Round window`, `Cochlea`, `Tympanic membrane`],
    correct: 0,
    explanation: `Oval window`
  },
  {
    id: 249,
    question: `The auricle receives sensory innervation from:`,
    options: [`Auriculotemporal nerve, vagus, and great auricular nerve`, `Facial nerve only`, `Glossopharyngeal nerve only`, `Hypoglossal nerve`],
    correct: 0,
    explanation: `Auriculotemporal nerve, vagus, and great auricular nerve`
  },
  {
    id: 250,
    question: `The most common site of cholesteatoma is:`,
    options: [`Pars flaccida in the epitympanic recess`, `External auditory canal`, `Cochlea`, `Mastoid tip`],
    correct: 0,
    explanation: `Pars flaccida in the epitympanic recess – retraction pocket accumulates keratin debris`
  },
  {
    id: 251,
    question: `A 6-year-old child presents with recurrent ear infections and mild hearing loss. Examination shows enlarged adenoids. The most likely cause of these symptoms is:`,
    options: [`Adenoid hypertrophy`, `Otosclerosis`, `Cholesteatoma`, `Otitis externa`],
    correct: 0,
    explanation: `Adenoid hypertrophy – obstructs Eustachian tube, causing otitis media`
  },
  {
    id: 252,
    question: `The most common site for anterior epistaxis in children is:`,
    options: [`Kiesselbach’s plexus`, `Sphenopalatine artery`, `Posterior ethmoidal artery`, `Maxillary artery`],
    correct: 0,
    explanation: `Kiesselbach’s plexus – located in the anterior nasal septum`
  },
  {
    id: 253,
    question: `The main function of the tensor tympani muscle is to:`,
    options: [`Damp sound vibrations of the tympanic membrane`, `Open the Eustachian tube`, `Transmit sound to the cochlea`, `Maintain balance`],
    correct: 0,
    explanation: `Damp sound vibrations of the tympanic membrane – reduces impact of loud sounds`
  },
  {
    id: 254,
    question: `A patient presents with sudden vertigo triggered by head movements, lasting a few seconds. The most likely diagnosis is:`,
    options: [`Benign paroxysmal positional vertigo (BPPV)`, `Ménière’s disease`, `Labyrinthitis`, `Vestibular neuritis`],
    correct: 0,
    explanation: `Benign paroxysmal positional vertigo – brief, positional vertigo`
  },
  {
    id: 255,
    question: `A 30-year-old smoker complains of progressive hoarseness. Laryngoscopy reveals a unilateral vocal cord mass. The most likely diagnosis is:`,
    options: [`Laryngeal carcinoma`, `Vocal cord polyp`, `Papilloma`, `Granuloma`],
    correct: 0,
    explanation: `Laryngeal carcinoma – common in smokers`
  },
  {
    id: 256,
    question: `The facial nerve provides motor innervation to which middle ear muscle responsible for dampening loud sounds?`,
    options: [`Stapedius`, `Tensor tympani`, `Masseter`, `Levator veli palatini`],
    correct: 0,
    explanation: `Stapedius – reduces ossicular vibrations in loud environments`
  },
  {
    id: 257,
    question: `The stapes footplate articulates with:`,
    options: [`Oval window`, `Round window`, `Tympanic membrane`, `Cochlea`],
    correct: 0,
    explanation: `Oval window – transmits vibrations into the inner ear`
  },
  {
    id: 258,
    question: `Otosclerosis primarily affects which ossicle?`,
    options: [`Stapes`, `Malleus`, `Incus`, `Cochlea`],
    correct: 0,
    explanation: `Stapes – causing conductive hearing loss`
  },
  {
    id: 259,
    question: `The organ of Corti rests on:`,
    options: [`Basilar membrane`, `Tectorial membrane`, `Reissner’s membrane`, `Spiral ligament`],
    correct: 0,
    explanation: `Basilar membrane – contains hair cells for hearing`
  },
  {
    id: 260,
    question: `The main function of the Eustachian tube is to:`,
    options: [`Equalize pressure between middle ear and nasopharynx`, `Transmit sound`, `Detect angular acceleration`, `Produce cerumen`],
    correct: 0,
    explanation: `Equalize pressure between middle ear and nasopharynx`
  },
  {
    id: 261,
    question: `Posterior epistaxis in adults commonly arises from which artery?`,
    options: [`Sphenopalatine artery`, `Kiesselbach’s plexus`, `Facial artery`, `Internal carotid artery`],
    correct: 0,
    explanation: `Sphenopalatine artery – may require posterior packing`
  },
  {
    id: 262,
    question: `A patient presents with a painless white mass behind the tympanic membrane. The most likely diagnosis is:`,
    options: [`Cholesteatoma`, `Otitis externa`, `Otosclerosis`, `Acoustic neuroma`],
    correct: 0,
    explanation: `Cholesteatoma – keratin accumulation in the middle ear`
  },
  {
    id: 263,
    question: `The Weber test lateralizes to the affected ear in:`,
    options: [`Conductive hearing loss`, `Sensorineural hearing loss`, `Mixed hearing loss`, `Normal hearing`],
    correct: 0,
    explanation: `Conductive hearing loss – bone conduction better on affected side`
  },
  {
    id: 264,
    question: `Rinne test is positive when:`,
    options: [`Air conduction > bone conduction (normal)`, `Bone conduction > air conduction (conductive loss)`, `Air conduction = bone conduction`, `None of the above`],
    correct: 0,
    explanation: `Air conduction > bone conduction (normal)`
  },
  {
    id: 265,
    question: `The most common site of acquired cholesteatoma is:`,
    options: [`Pars flaccida of the tympanic membrane`, `External auditory canal`, `Cochlea`, `Mastoid tip`],
    correct: 0,
    explanation: `Pars flaccida – retraction pocket collects keratin debris`
  },
  {
    id: 266,
    question: `The semicircular canals detect:`,
    options: [`Angular acceleration`, `Linear acceleration`, `Sound vibrations`, `Pressure changes`],
    correct: 0,
    explanation: `Angular acceleration – part of the vestibular system`
  },
  {
    id: 267,
    question: `Ménière’s disease is characterized by:`,
    options: [`Vertigo, tinnitus, and hearing loss`, `Nasal obstruction`, `Facial paralysis`, `Otitis externa`],
    correct: 0,
    explanation: `Vertigo, tinnitus, and hearing loss – classical triad`
  },
  {
    id: 268,
    question: `Adenoid hypertrophy in children may lead to:`,
    options: [`Recurrent otitis media`, `Vestibular dysfunction`, `Nasal polyps`, `Acoustic neuroma`],
    correct: 0,
    explanation: `Recurrent otitis media – due to Eustachian tube obstruction`
  },
  {
    id: 269,
    question: `The most common cause of otitis externa is:`,
    options: [`Pseudomonas aeruginosa`, `Staphylococcus aureus`, `Streptococcus pneumoniae`, `Haemophilus influenzae`],
    correct: 0,
    explanation: `Pseudomonas aeruginosa – especially in swimmers`
  },
  {
    id: 270,
    question: `The auricle is primarily composed of:`,
    options: [`Elastic cartilage covered by skin`, `Hyaline cartilage`, `Fibrous tissue`, `Bone`],
    correct: 0,
    explanation: `Elastic cartilage covered by skin`
  },
  {
    id: 271,
    question: `The auricle collects sound waves and directs them into:`,
    options: [`External auditory canal`, `Middle ear`, `Cochlea`, `Semicircular canals`],
    correct: 0,
    explanation: `External auditory canal`
  },
  {
    id: 272,
    question: `The tympanic membrane has how many layers?`,
    options: [`Three: outer epithelial, middle fibrous, inner mucosal`, `Two layers`, `One layer`, `Four layers`],
    correct: 0,
    explanation: `Three: outer epithelial, middle fibrous, inner mucosal`
  },
  {
    id: 273,
    question: `The most common benign tumor of the parotid gland is:`,
    options: [`Pleomorphic adenoma`, `Mucoepidermoid carcinoma`, `Adenoid cystic carcinoma`, `Squamous cell carcinoma`],
    correct: 0,
    explanation: `Pleomorphic adenoma – slow-growing, painless`
  },
  {
    id: 274,
    question: `The internal acoustic meatus transmits which nerves?`,
    options: [`Facial (CN VII) and Vestibulocochlear (CN VIII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`, `Trigeminal nerve (CN V)`],
    correct: 0,
    explanation: `Facial (CN VII) and Vestibulocochlear (CN VIII)`
  },
  {
    id: 275,
    question: `Sudden sensorineural hearing loss is most commonly:`,
    options: [`Idiopathic viral in origin`, `Due to otitis media`, `Otosclerosis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Idiopathic viral – requires urgent ENT referral`
  },
  {
    id: 276,
    question: `The posterior auricular nerve is a branch of:`,
    options: [`Facial nerve (CN VII)`, `Trigeminal nerve (CN V)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Facial nerve (CN VII)`
  },
  {
    id: 277,
    question: `A 4-year-old with mouth breathing, snoring, and recurrent otitis media likely has:`,
    options: [`Adenoid hypertrophy`, `Deviated septum`, `Nasal polyp`, `Foreign body`],
    correct: 0,
    explanation: `Adenoid hypertrophy`
  },
  {
    id: 278,
    question: `The most common site of nosebleeds in adults is:`,
    options: [`Anterior septum (Kiesselbach’s area)`, `Posterior ethmoid artery`, `Sphenopalatine artery`, `Maxillary sinus`],
    correct: 0,
    explanation: `Anterior septum (Kiesselbach’s area)`
  },
  {
    id: 279,
    question: `Chronic sinusitis is often associated with:`,
    options: [`Nasal polyps`, `Otitis externa`, `Ménière’s disease`, `Presbycusis`],
    correct: 0,
    explanation: `Nasal polyps – especially in adults`
  },
  {
    id: 280,
    question: `Juvenile nasopharyngeal angiofibroma typically presents in:`,
    options: [`Adolescent males with recurrent epistaxis and nasal obstruction`, `Adult females`, `Elderly males`, `Newborns`],
    correct: 0,
    explanation: `Adolescent males – vascular benign tumor`
  },
  {
    id: 281,
    question: `The auriculotemporal nerve (branch of CN V3) provides sensation to:`,
    options: [`External ear and anterior auricle`, `Tympanic membrane only`, `Cochlea`, `Vestibular apparatus`],
    correct: 0,
    explanation: `External ear and anterior auricle`
  },
  {
    id: 282,
    question: `The tensor tympani muscle is innervated by:`,
    options: [`Mandibular nerve (V3)`, `Facial nerve (CN VII)`, `Glossopharyngeal nerve (CN IX)`, `Vagus nerve (CN X)`],
    correct: 0,
    explanation: `Mandibular nerve (V3)`
  },
  {
    id: 283,
    question: `The stapes transmits vibrations from the incus to the:`,
    options: [`Oval window`, `Round window`, `Tympanic membrane`, `Cochlea`],
    correct: 0,
    explanation: `Oval window`
  },
  {
    id: 284,
    question: `Otosclerosis causes:`,
    options: [`Progressive conductive hearing loss due to stapes fixation`, `Sensorineural hearing loss`, `Vertigo`, `Tinnitus only`],
    correct: 0,
    explanation: `Progressive conductive hearing loss`
  },
  {
    id: 285,
    question: `Tympanic membrane perforations most commonly occur in:`,
    options: [`Pars tensa`, `Pars flaccida`, `Malleus handle`, `Stapes footplate`],
    correct: 0,
    explanation: `Pars tensa – due to trauma or infection`
  },
  {
    id: 286,
    question: `The mastoid air cells communicate with the middle ear via:`,
    options: [`Aditus ad antrum`, `Eustachian tube`, `Oval window`, `Round window`],
    correct: 0,
    explanation: `Aditus ad antrum`
  },
  {
    id: 287,
    question: `The auricle receives motor innervation from:`,
    options: [`Posterior auricular branch of facial nerve`, `Trigeminal nerve`, `Glossopharyngeal nerve`, `Vagus nerve`],
    correct: 0,
    explanation: `Posterior auricular branch of facial nerve`
  },
  {
    id: 288,
    question: `The most common cause of otitis externa in swimmers is:`,
    options: [`Pseudomonas aeruginosa`, `Staphylococcus aureus`, `Streptococcus pneumoniae`, `Haemophilus influenzae`],
    correct: 0,
    explanation: `Pseudomonas aeruginosa`
  },
  {
    id: 289,
    question: `The most common malignant tumor of the parotid gland is:`,
    options: [`Mucoepidermoid carcinoma`, `Adenoid cystic carcinoma`, `Pleomorphic adenoma`, `Squamous cell carcinoma`],
    correct: 0,
    explanation: `Mucoepidermoid carcinoma`
  },
  {
    id: 290,
    question: `The auricle is composed mainly of:`,
    options: [`Elastic cartilage`, `Hyaline cartilage`, `Fibrocartilage`, `Bone`],
    correct: 0,
    explanation: `Elastic cartilage`
  },
  {
    id: 291,
    question: `The external auditory canal extends from:`,
    options: [`Auricle to tympanic membrane`, `Cochlea to auricle`, `Middle ear to inner ear`, `Nasopharynx to external ear`],
    correct: 0,
    explanation: `Auricle to tympanic membrane`
  },
  {
    id: 292,
    question: `Chronic otitis media often leads to hearing loss that is:`,
    options: [`Conductive`, `Sensorineural`, `Mixed`, `Central`],
    correct: 0,
    explanation: `Conductive – due to ossicular damage or tympanic membrane perforation`
  },
  {
    id: 293,
    question: `The auricular muscles in humans are mostly:`,
    options: [`Vestigial`, `Strongly functional`, `Responsible for hearing`, `Responsible for balance`],
    correct: 0,
    explanation: `Vestigial – limited movement`
  },
  {
    id: 294,
    question: `The semicircular canals are responsible for detecting:`,
    options: [`Angular acceleration`, `Linear acceleration`, `Sound`, `Pressure`],
    correct: 0,
    explanation: `Angular acceleration`
  },
  {
    id: 295,
    question: `Adenoid hypertrophy can contribute to:`,
    options: [`Obstructive sleep apnea in children`, `Acoustic neuroma`, `Otosclerosis`, `Presbycusis`],
    correct: 0,
    explanation: `Obstructive sleep apnea in children`
  },
  {
    id: 296,
    question: `A patient with recurrent epistaxis and nasal obstruction, especially adolescent male, should be evaluated for:`,
    options: [`Juvenile nasopharyngeal angiofibroma`, `Nasal polyp`, `Squamous cell carcinoma`, `Adenoid hypertrophy`],
    correct: 0,
    explanation: `Juvenile nasopharyngeal angiofibroma`
  },
  {
    id: 297,
    question: `The most common cause of sudden vertigo without hearing loss is:`,
    options: [`Vestibular neuritis`, `Ménière’s disease`, `Otosclerosis`, `Labyrinthitis`],
    correct: 0,
    explanation: `Vestibular neuritis`
  },
  {
    id: 298,
    question: `Tympanic membrane perforation due to chronic otitis media can lead to:`,
    options: [`Conductive hearing loss`, `Sensorineural hearing loss`, `Vertigo`, `Tinnitus only`],
    correct: 0,
    explanation: `Conductive hearing loss`
  },
  {
    id: 299,
    question: `Posterior epistaxis often requires intervention because:`,
    options: [`It may cause significant blood loss and is difficult to control`, `It is usually self-limiting`, `It does not involve major vessels`, `It rarely recurs`],
    correct: 0,
    explanation: `It may cause significant blood loss and is difficult to control`
  },
  {
    id: 300,
    question: `The most common congenital cause of hearing loss in children is:`,
    options: [`Genetic syndromes (e.g., Connexin 26 mutation)`, `Otitis externa`, `Otosclerosis`, `Cholesteatoma`],
    correct: 0,
    explanation: `Genetic syndromes – present at birth`
  },
];window['nts_cat_ent'] = nts_cat_ent;
