document.getElementById("rayOfFrost").addEventListener("click", function() {
    alert("A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.\nAt Higher Levels. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).");
});

document.getElementById("mending").addEventListener("click", function() {
    alert("This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.\nThis spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.");
});

document.getElementById("grease").addEventListener("click", function() {
    alert("Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.\nWhen the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.");
});

document.getElementById("falseLife").addEventListener("click", function() {
    alert("Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.");
});

document.getElementById("absorbElements").addEventListener("click", function() {
    alert("The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.");
});

document.getElementById("magicMissile").addEventListener("click", function() {
    alert("You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.");
});

document.getElementById("thunderwave").addEventListener("click", function() {
    alert("A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.\nIn addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.");
});

document.getElementById("bloodBoil").addEventListener("click", function() {
    alert("You magically disrupt the blood flow of one creature that you can see within range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and be poisoned until the spell ends or until the end of your next turn. While the target is poisoned by the spell, it has disadvantage on saving throws made to maintain concentration and its speed is halved.\nThis spell has no effect on creatures with no blood. This spell is a Blood spell in addition to its other school.\nAt 5th level, the spell deals 2d4 necrotic damage. At 11th level it deals 3d4, and at 17th level it deals 4d4.");
});

document.getElementById("goreSpike").addEventListener("click", function() {
    alert("You attempt to rip the blood from a foe's body. One creature that you can see within range must succeed on a Constitution saving throw or take 1d10 necrotic damage. The target has disadvantage on any saving throws to maintain concentration caused by this spell.\nCreatures without blood are immune to this spell.\nAt 5th level, the spell deals 2d10 necrotic damage. At 11th level it deals 3d10, and at 17th level it deals 4d10.");
});

document.getElementById("hemokinesis").addEventListener("click", function() {
    alert("You choose an area of liquid blood that you can see within range and that fits within a 5-foot cube. You cannot affect the blood in a creature unless it is dead. You manipulate the blood in one of the following ways.\nYou cause the blood to bubble and froth, creating the strong scent of blood in the air. This smell reaches 120 feet out in all directions from the blood and lasts for 1 hour.\nYou cause the blood to form into simple shapes and animate at your direction. This change lasts for 1 hour.\nYou instantaneously move or otherwise change the flow of the blood as you direct, up to 5 feet in any direction. This movement doesn’t have enough force to cause damage.\nAlternatively, you can target one creature of size Medium or smaller that you can see within range and attempt to push the blood in its body, if it has blood. The target must make a Constitution saving throw. On a failed saving throw, you can push the target up to 5 feet in any direction.\nIf you cast this spell multiple times, you can have no more than one of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.\nThis spell is a Blood spell in addition to its other school.");
});

document.getElementById("bloodReading").addEventListener("click", function() {
    alert("You weave dark magic to pull information out of at least one ounce of blood (or around 30 grams). This blood must have come from a creature that is alive or has been dead for less than 1 hour. Choose two of the following options to determine what information you learn from the creature's blood:\nYou learn the creature's type, its max hit points, and any resistances, vulnerabilities, or immunities it has.\nYou learn the direction to the creature and whether it is within 1 mile of you, within 100 miles of you, or beyond that distance, including on another plane.\nYou learn the names of any poisons, diseases, curses, and blessings affecting the creature. Successful ability checks may also grant you insight into the nature and function of these conditions.\nYou learn if the creature's blood contains any special magic, such as the healing properties of a unicorn's blood, or the ritual magic uses for fiends' blood.\nUntil the spell ends, if the blood is mixed with blood from another creature and one of the two creatures is either the parent, offspring, or sibling of the other creature, the mixture will glow with bright red light.\nWhen you cast the spell, if the target is still alive, it feels a tingling sensation in its veins and knows the exact direction to you, though it doesn't necessarily know who you are or what you are doing. This spell is a Blood spell in addition to its other school.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can choose one additional option for each slot level above 1st.");
});

document.getElementById("infuseBlood").addEventListener("click", function() {
    alert("You touch a willing creature with blood and infuse its blood with magic. The target has advantage on saving throws against nonmagical disease until the spell ends.\nThe first time the target takes damage that reduces its hit points to less than half of its maximum hit points, light flashes from its veins, ending the spell early. The target gains 3d6 temporary hit points which last for 1 minute, and each creature of the target's choice within 10 feet of the target must succeed on a Constitution saving throw or take 2d6 force damage.\nThis spell is a Blood spell in addition to its other school.\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the temporary hit points and the force damage both increase by 1d6 for each slot level above 2nd.");
});