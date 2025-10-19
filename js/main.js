//Data
//Quotes
const npcInspiration = [
  "Some are born beneath constellations that no longer exist.",
  "The heart beats to a rhythm older than music.",
  "Every destiny begins as a whisper in the dark.",
  "Kindness can be as dangerous as any blade.",
  "Not every wanderer seeks a place — some seek a purpose.",
  "Even the smallest light changes the shape of the night.",
  "Some souls burn so brightly, even time averts its gaze.",
  "Every oath leaves a shadow.",
  "Dreamers are simply prophets who forgot their calling.",
  "There is always a price for seeing the world too clearly.",
  "The quiet ones often carry the loudest storms.",
  "Every story hides another beneath its skin.",
  "Those who listen to the wind learn truths no tongue can speak.",
  "Fate has a habit of tripping those who try to run from it.",
  "Even forgotten names echo if you know how to hear them.",
  "Hope is just another kind of magic — fragile, persistent, and wild.",
  "Some hearts were forged to mend what others broke.",
  "Every traveler carries the ghosts of the roads not taken.",
  "The line between curse and blessing is thinner than a breath.",
  "Every legend began as someone simply trying to survive."
];
const storyInspiration = [
  "Every story begins as a secret the world can no longer keep.",
  "Some tales write themselves through the lives of the unwilling.",
  "Stories remember what people choose to forget.",
  "Not all stories are told with words — some are carved into fate.",
  "Every ending is just a door disguised as silence.",
  "Legends are truths that refused to stay ordinary.",
  "Some stories sleep for centuries, waiting for the right listener.",
  "A lie told often enough becomes a prophecy.",
  "Even forgotten tales leave footprints in dreams.",
  "Every story hungers to be told, even if it devours its teller.",
  "The oldest stories are written in stars and scars alike.",
  "Some stories grow louder each time they are denied.",
  "Every story changes a little each time it’s remembered.",
  "The truest stories never end — they simply become part of someone else.",
  "There are stories so heavy that even time struggles to carry them.",
  "Every storyteller is a thief of silence.",
  "Some tales are born from wonder; others from warning.",
  "The smallest story can outlive the greatest kingdom.",
  "Every story is a mirror that lies just enough to reveal the truth.",
  "Stories do not belong to those who tell them, but to those who believe."
];
const inspirationCombined = [npcInspiration,storyInspiration]

//NPC attributes
const workTypeList = ["Farmer", "Hunter", "Guard", "Baker", "Cook", "Servant", "Merchant", "Innkeeper", "Blacksmith", "Fisher",
  "Soldier", "Healer", "Scholar", "Priest", "Thief", "Sailor", "Miner", "Cook",
  "Craftsman", "Messenger", "Noble", "Mercenary", "Beggar", "Carpenter", "Tailor",
  "Baker", "Herbalist", "Servant", "Stablehand", "Woodcutter", "Mason", "Painter",
  "Actor", "Scribe", "Teacher", "Bard", "Alchemist", "Hunter", "Spy", "Explorer",
  "Mapmaker", "Inventor", "Beast tamer", "Rune carver", "Glassblower", "Fortune teller",
  "Jeweler", "Gravedigger", "Smuggler", "Librarian", "Shepherd", "Potter", "Diplomat",
  "Courier", "Tavern singer", "Apprentice", "Fletcher", "Armorer", "Clockmaker",
  "Astrologer", "Engineer", "Witch", "Guard captain", "Monk", "Sailmaker", "Caravan guide",
  "Treasure diver", "Fence", "Rat catcher", "Gatekeeper", "Bookbinder", "Bounty hunter",
  "Street vendor", "Spy", "Cultist", "Tax collector", "Messenger", "Archivist",
  "Glassblower", "Locksmith", "Jester", "Navigator", "Smelter", "Stable master",
  "Scribe", "Herald", "Weaver", "Leatherworker", "Scout", "Caretaker", "Boatman",
  "Cook", "Hermit", "Artist", "Gemcutter", "Archivist", "Beekeeper", "Hunter", "Healer",
  "Diplomat", "Sailor", "Watchman", "Monk", "Trader", "Scribe", "Fortune teller"]
   
const personalityList = [  "Cheerful","Brooding","Cunning","Proud","Timid","Stoic","Irritable","Gentle","Obsessive","Boastful",
                                "Cautious","Reckless","Sincere","Deceitful","Kindhearted","Arrogant","Anxious","Inquisitive","Melancholic","Optimistic"]
    
const moneyList = ["unfathomably rich", "rich", "doing well", "struggling", "poor"]
    
const goalsList = ["Earn respect", "Find love", "Gain power", "Protect family", "Avenge wrong", "Seek knowledge", "Escape debt", "Prove worth", "Discover truth",
                         "Serve faith", "Restore honor", "Build fortune", "Survive threat", "Win fame", "Protect secret", "Reclaim homeland", "Cure illness", "Create masterpiece", "Redeem self", "Change the world"]
    
const relationsList = ["Married","Single","Widowed", "Children: 1d10", "Siblings: 1d4","Mentor to a young apprentice", "Owes a debt to a noble", "Secretly in love","Member of a powerful family","Estranged from parents", "Has a secret afair"]
    
const appearanceList = [  "Neat hair","Messy hair","Piercing eyes","Scarred face","Missing tooth","Tattooed arms","Rough hands","Fine clothes",
                                "Torn cloak","Gaunt face","Bright eyes","Crooked nose","Limping gait","Burned skin","Glowing eyes","Pale skin","Golden hair","Filed horns","Metal arm","Hidden face"]
    
const originsList = [  "Bustling city","Small village","Border town","Remote hamlet","Royal capital","Farmstead","Fishing village","Mining camp",
                            "Forest settlement","Nomadic tribe","Mountain monastery","Desert caravan","Frozen frontier","Underground enclave","Haunted ruins","Arcane academy",
                            "Merchant guild","Temple community","The streets","Orphanage"]

//Plot attributes

const driveList = [
  "A secret long buried begins to stir.",
  "Someone vanished, and only their shadow remains.",
  "An oath once broken demands to be mended.",
  "A lost relic calls out to be found again.",
  "Whispers spread of a power returning to the world.",
  "An ancient debt comes due.",
  "The stars foretell a turning of fate.",
  "Something sacred has been stolen.",
  "A forbidden name is spoken aloud once more.",
  "Dreams carry warnings no one dares to believe.",
  "A stranger arrives bearing impossible news.",
  "The balance of the realm trembles on the edge of change.",
  "A kingdom stands at the brink of remembering its sins.",
  "A child is born beneath an omen of fire.",
  "The silence of the gods grows deafening.",
  "A war thought ended still smolders in secret.",
  "A door appears where none should exist.",
  "A prophecy chooses a new subject.",
  "Nature itself begins to rebel.",
  "A song forgotten by all is heard once more."
];

const allyList = [
  "A hunter haunted by past mistakes.",
  "A healer who refuses to give up on anyone.",
  "A wanderer guided by forgotten maps.",
  "A mercenary with an old code of honor.",
  "A scholar chasing a dangerous truth.",
  "A druid who speaks for the silent woods.",
  "A smith who forges more than metal.",
  "A sailor who no longer trusts the sea.",
  "A witch seeking a place to belong.",
  "A farmer dreaming of adventure.",
  "A guard who has seen too much.",
  "A messenger who carries more than letters.",
  "A poet who remembers every sorrow.",
  "A blacksmith who dreams of flight.",
  "A cook who knows the taste of magic.",
  "A child who never stopped believing.",
  "A guide who knows the forest’s moods.",
  "A beast tamed by kindness.",
  "A hermit who once wore a crown.",
  "A musician searching for a lost song."
];
const rivalList = [
  "A rival adventurer chasing the same reward.",
  "A captain loyal to a cruel master.",
  "A knight sworn to defend the wrong cause.",
  "A priest convinced the heroes serve darkness.",
  "A mercenary who never asks who gives the orders.",
  "A cunning advisor serving darker ambitions.",
  "A jealous noble guarding their influence.",
  "A former friend who chose a different path.",
  "A scholar blinded by their own ambition.",
  "A soldier following unjust orders with pride.",
  "A thief determined to reach the treasure first.",
  "A spy who knows the heroes’ every move.",
  "A warden guarding secrets better left buried.",
  "A hunter who believes the heroes are the prey.",
  "A cultist promised power beyond death.",
  "A general enforcing tyranny with precision.",
  "A seer who believes stopping the heroes will save the world.",
  "A diplomat who hides knives behind words.",
  "A zealot mistaking cruelty for faith.",
  "A local hero who thinks the adventurers are villains.",
  "A rival guild seeking the same contract.",
  "A commander bound by honor to the wrong side.",
  "A bodyguard protecting a tyrant’s heir.",
  "A servant carrying out their master’s cruel designs.",
  "A prophet whose vision demands opposition.",
  "A duelist defending a family’s tarnished name.",
  "A judge bound by law, not justice.",
  "A bounty hunter who always gets their mark.",
  "A witch-ward sworn to hunt forbidden magic.",
  "A warlock desperate to impress their patron.",
  "A guard who refuses to see the truth.",
  "A rival explorer claiming the same discovery.",
  "A paladin convinced the heroes are heretics.",
  "A tactician who respects the heroes but cannot yield.",
  "A childhood rival who still craves to win."
];

const twistList = [
  "The ally was serving another all along.",
  "The villain’s true identity is someone beloved.",
  "The promised reward was never real.",
  "The enemy was trying to save the world, in their own way.",
  "The prophecy was mistranslated.",
  "The heroes are the descendants of what they swore to destroy.",
  "The hunted becomes the hunter.",
  "The villain surrenders; the hero cannot.",
  "The apprentice outgrows the master — and it terrifies them both.",
  "This has all happened before — and failed.",
  "The world resets every century, but memory lingers.",
  "The heroes’ victory causes the very evil they fought to stop.",
  "The hero’s greatest virtue becomes their downfall.",
  "Mercy costs more than vengeance ever would.",
  "The monster only wanted to be understood.",
  "The gods were just reflections of mortal belief.",
  "The world is a dream trying to wake itself.",
  "Magic itself begins to remember its makers.",
  "The curse was never lifted — it just changed form.",
  "Every story told about the event is slightly wrong — because the truth cannot be spoken.",
  "The hero finds the ending they were running from."
];

const settingList = [
  "A floating village tethered by ropes to drifting whales.",
  "A market that only appears during full moons.",
  "A forest where the trees hum old songs.",
  "A tea house run by retired adventurers.",
  "A library guarded by cats who can read.",
  "A town where no one remembers arriving.",
  "A castle built upside-down beneath a lake.",
  "A desert where shadows move on their own.",
  "A city that only exists at twilight.",
  "A village that celebrates a festival no one understands.",
  "A border fort where peace trembles on a blade’s edge.",
  "A kingdom preparing for a prophecy’s end.",
  "A shattered citadel overrun by the ghosts of its defenders.",
  "A capital built on the bones of a dragon.",
  "A battlefield frozen in time.",
  "A mining town sinking slowly into the earth.",
  "A village cursed to relive the same day forever.",
  "A temple where the gods have been silent for centuries.",
  "A plague ship drifting through the fog.",
  "A city where laughter has been outlawed.",
  "A meadow where lost things bloom into flowers.",
  "A seaside town that sings to the waves.",
  "A shrine tended by invisible hands.",
  "A mountain village untouched by time.",
  "A crossroads where every road leads home.",
  "An island that changes shape with the tides.",
  "A marketplace suspended between worlds.",
  "A ruined observatory haunted by falling stars.",
  "A frozen valley where time stands still.",
  "A tavern built inside a giant’s skull.",
  "A moonlit bridge that appears only once a year.",
  "A labyrinth beneath the city streets.",
  "A storm-chased lighthouse with no keeper.",
  "A river that flows backward through memory.",
  "A forest of glass where nothing can hide."
];

const catalystList = [
  "A royal heir goes missing on the eve of coronation.",
  "A wandering prophet delivers a final warning.",
  "A letter arrives decades too late.",
  "A festival begins — and never seems to end.",
  "A storm tears open something that should have stayed sealed.",
  "A comet appears, burning brighter than the moon.",
  "A sacred relic is stolen from its resting place.",
  "A long-forgotten name is spoken aloud.",
  "A child is born under an impossible omen.",
  "A stranger collapses at the town gate.",
  "A dream spreads from sleeper to sleeper.",
  "A messenger never reaches their destination.",
  "A crown shatters during the coronation.",
  "A song begins to echo from the mountains.",
  "A shadow crosses the sun at midday.",
  "A prisoner escapes with a dangerous secret.",
  "A bridge collapses the moment someone crosses it.",
  "A god wakes, and remembers being mortal.",
  "A beast once thought extinct is seen again.",
  "A clock begins to count down, though no one set it.",
  "A letter is found that shouldn’t exist.",
  "A forgotten door creaks open in the old temple.",
  "A caravan arrives from a city that no longer stands.",
  "A duel between nobles ends in vanishing instead of death.",
  "A merchant introduces a strange new coin.",
  "A river changes its course overnight.",
  "A ghost refuses to stay quiet any longer.",
  "A piece of the moon falls into a nearby field.",
  "A tree blooms out of season, bearing eyes instead of fruit.",
  "A new star appears in the sky, moving against the constellations.",
  "A plague begins with laughter instead of coughs.",
  "A portrait changes expression when no one looks.",
  "A royal wedding turns into a political storm.",
  "A book writes its own final chapter.",
  "A butterfly lands — and everything stops for a heartbeat."
];

const consequenceList = [
  "Magic starts to fade from the world.",
  "An ancient evil awakens beneath the earth.",
  "The land changes forever after the disaster.",
  "The heroes return, but everything feels wrong.",
  "The gods stop answering prayers.",
  "Old friends become strangers.",
  "The kingdom splits into rival states.",
  "A new ruler rises from the chaos.",
  "Strange creatures begin to appear.",
  "The sea swallows entire villages.",
  "The capital lies in ruins.",
  "The forests grow dark and twisted.",
  "The survivors turn against each other.",
  "A deadly plague spreads unchecked.",
  "The heroes’ names are erased from history.",
  "The barrier between worlds weakens.",
  "Monsters roam where people once lived.",
  "The sky loses its color for a generation.",
  "The holy order breaks apart.",
  "Hope becomes rare and dangerous to show.",
  "A once-safe city becomes a place of fear.",
  "The royal bloodline ends.",
  "Trade routes collapse and famine follows.",
  "The people turn to strange new gods.",
  "The heroes’ failure becomes a warning tale.",
  "The wilderness swallows abandoned towns.",
  "The new ruler bans all magic.",
  "Every dream ends in the same nightmare.",
  "The old prophecies are proven wrong.",
  "The villain’s followers seize control.",
  "Winter arrives early and never leaves.",
  "The river turns poisonous.",
  "Everyone survives, but no one is the same."
];
const outcomeList = [
  "Peace returns to the land after years of conflict.",
  "Magic flows freely again.",
  "The lost heir reclaims their throne.",
  "An ancient evil is sealed away once more.",
  "The kingdom unites under new leadership.",
  "The gods answer prayers for the first time in ages.",
  "The forest begins to heal and regrow.",
  "Old enemies find reason to trust each other.",
  "Trade routes reopen and life returns to the cities.",
  "A long winter finally ends.",
  "The heroes’ names become legend.",
  "A cursed bloodline is freed at last.",
  "The people celebrate a festival of renewal.",
  "A forgotten city rises from the sands.",
  "The sea grows calm and safe for travel.",
  "The stars return to their rightful places.",
  "A new age of learning and discovery begins.",
  "The crown passes peacefully to its next bearer.",
  "The barrier between worlds is restored.",
  "The dead are finally allowed to rest.",
  "A great library is rebuilt, stronger than before.",
  "The hero finds the peace they were seeking.",
  "A long-lost friend is found alive.",
  "A divine relic returns to its rightful home.",
  "The people rebuild what was broken.",
  "Magic becomes stable and predictable again.",
  "A kingdom thought lost is rediscovered.",
  "Hope spreads faster than fear.",
  "The heroes are honored across the realm.",
  "The villain’s power breaks and fades.",
  "The land itself begins to bloom again.",
  "A new alliance ensures lasting peace.",
  "Children are born without the old curse.",
  "The world feels lighter, as if it can breathe again."
];
//Functions
//Picks a quote from the character quotes for the NPC page and writes to the quotes box
function pickNPCQuote() {
    quote = picker(npcInspiration);
    document.getElementById("npc-quote-output").innerHTML = quote;
}

//Picks a quote from the story quotes for the Plot page and writes to the quotes box
function pickStoryQuote() {
    quote = picker(storyInspiration);
    document.getElementById("plot-quote-output").innerHTML = quote;
}

//Picks a quote from both quotes arrays for the Main page and writes to the quotes box
function pickMainQuote() {
    let list = picker(inspirationCombined);
    let quote = picker(list);
     document.getElementById("main-quote-output").innerHTML = quote;
}

//Generates the different npc attributes and writes them to the output box
function generateNPC() {
    console.log("active")
    const age = Math.floor(Math.random() * 70 + 20);

    let goals = picker(goalsList);
    let workType = picker(workTypeList);
    let personality = picker(personalityList);
    let money = picker(moneyList);
    let relations = picker(relationsList);
    let appearance = picker(appearanceList);
    let origins = picker(originsList);

    const outputLeft = document.querySelector(".output dl.result-stack-left");
    const outputRight = document.querySelector(".output dl.result-stack-right")

    outputLeft.innerHTML = `
    <div class="result-row"><dt class="result-cat">Age</dt><dd class="result-cont">${age}</dd></div>
    <div class="result-row"><dt class="result-cat">Profession</dt><dd class="result-cont">${workType}</dd></div>
    <div class="result-row"><dt class="result-cat">Appearance</dt><dd class="result-cont">${appearance}</dd></div>
    <div class="result-row"><dt class="result-cat">Goals</dt><dd class="result-cont">${goals}</dd></div>
  `;

    outputRight.innerHTML = `
    <div class="result-row"><dt class="result-cat">Wealth</dt><dd class="result-cont">${money}</dd></div>
    <div class="result-row"><dt class="result-cat">Relatonships</dt><dd class="result-cont">${relations}</dd></div>
    <div class="result-row"><dt class="result-cat">Personality</dt><dd class="result-cont">${personality}</dd></div>
    <div class="result-row"><dt class="result-cat">Origin</dt><dd class="result-cont">${origins}</dd></div>
  `;
}
//Generates the different plot attributes and writes them to the output box
function generatePlot(){
    let drive = picker(driveList);
    let catalyst = picker(catalystList);
    let allies = picker(allyList);
    let rival = picker(rivalList);
    let twist = picker(twistList);
    let outcome = picker(outcomeList);
    let consequence = picker(consequenceList);
    let setting = picker(settingList);

    const outputLeft = document.querySelector(".output dl.result-stack-left");
    const outputRight = document.querySelector(".output dl.result-stack-right")

    outputLeft.innerHTML = `
    <div class="result-row"><dt class="result-cat">Drive</dt><dd class="result-cont">${drive}</dd></div>
    <div class="result-row"><dt class="result-cat">Catalyst</dt><dd class="result-cont">${catalyst}</dd></div>
    <div class="result-row"><dt class="result-cat">Allies</dt><dd class="result-cont">${allies}</dd></div>
    <div class="result-row"><dt class="result-cat">Rivals</dt><dd class="result-cont">${rival}</dd></div>
  `;

    outputRight.innerHTML = `
    <div class="result-row"><dt class="result-cat">Twist</dt><dd class="result-cont">${twist}</dd></div>
    <div class="result-row"><dt class="result-cat">Outcome</dt><dd class="result-cont">${outcome}</dd></div>
    <div class="result-row"><dt class="result-cat">Consequence</dt><dd class="result-cont">${consequence}</dd></div>
    <div class="result-row"><dt class="result-cat">Setting</dt><dd class="result-cont">${setting}</dd></div>
  `;
}
//Picks a random item out of a specified array
function picker(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}




