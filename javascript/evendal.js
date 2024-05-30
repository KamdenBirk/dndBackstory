//=======================HP======================
const maxHP = Number(document.getElementById("maxHP").innerHTML);

document.getElementById("hp").value = maxHP;
document.getElementById("hp").max = maxHP;
//====================End HP====================

//==============================Features=====================
document.getElementById("arcaneRecovery").addEventListener("click", function() {
    alert("You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.");
});

document.getElementById("wizardQuill").addEventListener("click", function() {
    alert("At 2nd level, as a bonus action, you can magically create a Tiny quill in your free hand. The magic quill has the following properties:\n    The quill doesn't require ink.\n    When you write with it, it produces ink in a color of your choice on the writing surface.\n The time you must spend to copy a spell into your spell book equals 2 minutes per spell level if you use the quill for the transcription.\n You can erase anything you write with the quill if you wave the feather over the text as a bonus action, provided the text is within 5 feet of you.\n   This quill disappears if you create another one or if you die.");
});

document.getElementById("awakenedSpellbook").addEventListener("click", function() {
    alert("Using specially prepared inks and ancient incantations passed down by your wizardly order, you have awakened an arcane sentience within your spellbook.\n    At 2nd level, while you are holding the book, it grants you the following benefits:\n   You can use the book as a spellcasting focus for your wizard spells.\n When you cast a wizard spell with a spell slot, you can temporarily replace its damage type with a type that appears in another spell in your spellbook, which magically alters the spell's formula for this casting only. The latter spell must be of the same level as the spell slot you expend.\n    When you cast a wizard spell as a ritual, you can use the spell's normal casting time, rather than adding 10 minutes to it. Once you use this benefit, you can't do so again until you finish a long rest.\n    If necessary, you can replace the book over the course of a short rest by using your Wizardly Quill to write arcane sigils in a blank book or a magic spellbook to which you're attuned. At the end of the rest, your spellbook's consciousness is summoned into the new book, which the consciousness transforms into your spellbook, along with all its spells. If the previous book still existed somewhere, all the spells vanish from its pages.");
});

document.getElementById("researcher").addEventListener("click", function() {
    alert("When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.");
});
//===========================End Features==================================

//======================Wizard Spells======================================
document.getElementById("mindSliver").addEventListener("click", function() {
    document.getElementById("mindSliverDesc").classList.toggle("description");
    document.getElementById("mindSliverDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("encodeThoughts").addEventListener("click", function() {
    document.getElementById("encodeThoughtsDesc").classList.toggle("description");
    document.getElementById("encodeThoughtsDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("chillTouch").addEventListener("click", function() {
    document.getElementById("chillTouchDesc").classList.toggle("description");
    document.getElementById("chillTouchDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("unseenServant").addEventListener("click", function() {
    document.getElementById("unseenServantDesc").classList.toggle("description");
    document.getElementById("unseenServantDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("catapult").addEventListener("click", function() {
    document.getElementById("catapultDesc").classList.toggle("description");
    document.getElementById("catapultDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("iceKnife").addEventListener("click", function() {
    document.getElementById("iceKnifeDesc").classList.toggle("description");
    document.getElementById("iceKnifeDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("causeFear").addEventListener("click", function() {
    document.getElementById("causeFearDesc").classList.toggle("description");
    document.getElementById("causeFearDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("snare").addEventListener("click", function() {
    document.getElementById("snareDesc").classList.toggle("description");
    document.getElementById("snareDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("sleep").addEventListener("click", function() {
    document.getElementById("sleepDesc").classList.toggle("description");
    document.getElementById("sleepDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("burningHands").addEventListener("click", function() {
    document.getElementById("burningHandsDesc").classList.toggle("description");
    document.getElementById("burningHandsDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("witchBolt").addEventListener("click", function() {
    document.getElementById("witchBoltDesc").classList.toggle("description");
    document.getElementById("witchBoltDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("detectThoughts").addEventListener("click", function() {
    document.getElementById("detectThoughtsDesc").classList.toggle("description");
    document.getElementById("detectThoughtsDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("mindSpike").addEventListener("click", function() {
    document.getElementById("mindSpikeDesc").classList.toggle("description");
    document.getElementById("mindSpikeDesc").firstChild.setAttribute("colspan", 3);
});

document.getElementById("enlargeReduce").addEventListener("click", function() {
    document.getElementById("enlargeReduceDesc").classList.toggle("description");
    document.getElementById("enlargeReduceDesc").firstChild.setAttribute("colspan", 3);
});
//===========================End Wizard Spells======================================
