function generateNPC() {
    console.log("active")
    const age = Math.floor(Math.random() * 70 + 20);
    
    const workTypeList = ["Farmer", "Hunter", "Guard", "Merchant", "Innkeeper", "Blacksmith", "Fisher",
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
    
                         const relationsList = ["Married","Single","Widowed","Children: 1d4", "Children: 1d6", "Children: 1d10", "Siblings: 1d4","Mentor to a young apprentice", "Owes a debt to a noble", "Secretly in love","Member of a powerful family","Estranged from parents", "Has a secret afair"]
    
    const appearanceList = [  "Neat hair","Messy hair","Piercing eyes","Scarred face","Missing tooth","Tattooed arms","Rough hands","Fine clothes",
                                "Torn cloak","Gaunt face","Bright eyes","Crooked nose","Limping gait","Burned skin","Glowing eyes","Pale skin","Golden hair","Filed horns","Metal arm","Hidden face"]
    
                                const originsList = [  "Bustling city","Small village","Border town","Remote hamlet","Royal capital","Farmstead","Fishing village","Mining camp",
                            "Forest settlement","Nomadic tribe","Mountain monastery","Desert caravan","Frozen frontier","Underground enclave","Haunted ruins","Arcane academy",
                            "Merchant guild","Temple community","The streets","Orphanage"]

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
    <div class="result-row"><dt class="result-cat">Trait</dt><dd class="result-cont">${origins}</dd></div>
  `;

  const empty = document.querySelector(".output .empty-state")
  empty.innerHTML =""
}

function plotGenerator(){
    let styleList = ["western", "low-fantasy", "high fantasy", "Samurai", "Pirates"]
    let genreList = ["drama", "comedy", "action", "horror", "lovestory"]
    let stakesList = ["low", "medium", "high"]
    let questGiverList = ["King", "local lord", "Innkeeper", "Farmer", "merchant"]

    let chooser = numberGenerator(4)
    //let style = styleList[chooser[0]]
    //let genre = genreList[chooser[1]]
    let stakes = stakesList[chooser[0]]
    if (chooser[0] > 2){
        stakes = stakesList[1];
    }
    //let questGiver = questGiverList[chooser[3]]

    //document.getElementById("output").innerHTML = style + " " + genre + " " + stakes + " " + questGiver;
    document.getElementById("output").innerHTML = stakes + " " + styleList[chooser[1]] + " " + genreList[chooser[2]] + " " + questGiverList[chooser[3]];
}

function picker(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}


// page animations live here

