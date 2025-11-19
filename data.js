const stats = ["HP", "STR", "MAG", "SKL", "SPD", "LCK", "DEF", "RES"];
const statsfull = ["HP", "Strength", "Magic", "Skill", "Speed", "Luck", "Defense", "Resistance"];

const characters = ["Robin", "Chrom", "Lissa", "Frederick", "Sully", "Virion", "Stahl", "Vaike", "Miriel", "Sumia", "Kellam", "Donnel", "Lonqu", "Ricken", "Maribelle", "Panne", "Gaius", "Cordelia", "Gregor", "Nowi", "Libra", "Tharja", "Anna", "Olivia", 
	"Cherche", "Henry", "Sayri", "Tiki", "Basilio", "Flavia", "Gangrel", "Walhart", "Emmeryn", "Yenfay", "Aversa", "Priam", "Lucina", "Owain", "Inigo", "Brady", "Kjelle", "Cynthia", "Severa", "Gerome", "Morgan", "Marc", "Yarne", "Laurent", "Noire", "Nah"];

const defaultParents = new Map([
	["Lucina", 		"Chrom"],
	["Owain", 		"Lissa"],
	["Inigo", 		"Olivia"],
	["Brady", 		"Maribelle"],
	["Kjelle", 		"Sully"],
	["Cynthia", 	"Sumia"],
	["Severa", 		"Cordelia"],
	["Gerome", 		"Cherche"],
	["Morgan", 		"Robin"],
	["Marc", 		"Robin"],
	["Yarne", 		"Panne"],
	["Laurent", 	"Miriel"],
	["Noire", 		"Tharja"],
	["Nah", 		"Nowi"]
]);

const genders = new Map([
	["Robin", 		"X"],
	["Chrom", 		"M"],
	["Lissa", 		"F"],
	["Frederick", 	"M"],
	["Sully", 		"F"],
	["Virion", 		"M"],
	["Stahl", 		"M"],
	["Vaike", 		"M"],
	["Miriel", 		"F"],
	["Sumia", 		"F"],
	["Kellam", 		"M"],
	["Donnel", 		"M"],
	["Lonqu",		"M"],
	["Ricken", 		"M"],
	["Maribelle", 	"F"],
	["Panne", 		"F"],
	["Gaius", 		"M"],
	["Cordelia", 	"F"],
	["Gregor", 		"M"],
	["Nowi", 		"F"],
	["Libra", 		"M"],
	["Tharja", 		"F"],
	["Anna", 		"F"],
	["Olivia", 		"F"],
	["Cherche", 	"F"],
	["Henry", 		"M"],
	["Sayri", 		"F"],
	["Tiki", 		"F"],
	["Basilio", 	"M"],
	["Flavia", 		"F"],
	["Gangrel", 	"M"],
	["Walhart", 	"M"],
	["Emmeryn", 	"F"],
	["Yenfay", 		"M"],
	["Aversa", 		"F"],
	["Priam", 		"M"],
	["Lucina", 		"F"],
	["Owain", 		"M"],
	["Inigo", 		"M"],
	["Brady", 		"M"],
	["Kjelle", 		"F"],
	["Cynthia", 	"F"],
	["Severa", 		"F"],
	["Gerome", 		"M"],
	["Morgan", 		"F"],
	["Marc", 		"M"],
	["Yarne", 		"M"],
	["Laurent", 	"M"],
	["Noire", 		"F"],
	["Nah", 		"F"]
]);

const assetgrowths = new Map([
	["HP", 			[30, 0, 0, 0, 0, 0, 5, 5]],
	["Strength",	[0, 15, 0, 5, 0, 0, 5, 0]],
	["Magic",		[0, 0, 15, 0, 5, 0, 0, 5]],
	["Skill",		[0, 5, 0, 15, 0, 0, 5, 0]],
	["Speed",		[0, 0, 0, 5, 15, 5, 0, 0]],
	["Luck",		[0, 5, 5, 0, 0, 15, 0, 0]],
	["Defense",		[0, 0, 0, 0, 0, 5, 15, 5]],
	["Resistance",	[0, 0, 5, 0, 5, 0, 0, 15]]
]);

const flawgrowths = new Map([
	["HP", 			[-20, 0, 0, 0, 0, 0, -5, -5]],
	["Strength",	[0, -10, 0, -5, 0, 0, -5, 0]],
	["Magic",		[0, 0, -10, 0, -5, 0, 0, -5]],
	["Skill",		[0, -5, 0, -10, 0, 0, -5, 0]],
	["Speed",		[0, 0, 0, -5, -10, -5, 0, 0]],
	["Luck",		[0, -5, -5, 0, 0, -10, 0, 0]],
	["Defense",		[0, 0, 0, 0, 0, -5, -10, -5]],
	["Resistance",	[0, 0, -5, 0, -5, 0, 0, -15]]
]);

const assetcaps = new Map([
	["HP", 			[0, 1, 1, 0, 0, 2, 2, 2]],
	["Strength",	[0, 4, 0, 2, 0, 0, 2, 0]],
	["Magic",		[0, 0, 4, 0, 2, 0, 0, 2]],
	["Skill",		[0, 2, 0, 4, 0, 0, 2, 0]],
	["Speed",		[0, 0, 0, 2, 4, 2, 0, 0]],
	["Luck",		[0, 2, 2, 0, 0, 4, 0, 0]],
	["Defense",		[0, 0, 0, 0, 0, 2, 4, 2]],
	["Resistance",	[0, 0, 2, 0, 2, 0, 0, 4]]
]);

const flawcaps = new Map([
	["HP", 			[0,-1,-1, 0, 0, -1, -1, -1]],
	["Strength",	[0, -3, 0, -1, 0, 0, -1, 0]],
	["Magic",		[0, 0, -3, 0, -1, 0, 0, -1]],
	["Skill",		[0, -1, 0, -3, 0, 0, -1, 0]],
	["Speed",		[0, 0, 0, -1, -3, -1, 0, 0]],
	["Luck",		[0, -1, -1, 0, 0, -3, 0, 0]],
	["Defense",		[0, 0, 0, 0, 0, -1, -3, -1]],
	["Resistance",	[0, 0, -1, 0, -1, 0, 0, -3]]
]);

const charGrowths = new Map([
	["Robin", 		[40, 40, 35, 35, 35, 55, 30, 20]],
	["Chrom", 		[45, 40, 10, 40, 40, 70, 35, 20]],
	["Lissa", 		[35, 25, 35, 30, 35, 65, 15, 35]],
	["Frederick", 	[60, 40, 10, 40, 35, 40, 40, 20]],
	["Sully", 		[40, 35, 20, 40, 40, 60, 35, 20]],
	["Virion", 		[35, 40, 30, 40, 45, 40, 25, 25]],
	["Stahl", 		[50, 45, 10, 35, 30, 50, 50, 10]],
	["Vaike", 		[60, 50, 10, 45, 35, 45, 40,  5]],
	["Miriel", 		[35, 15, 40, 40, 40, 50, 20, 30]],
	["Sumia", 		[35, 30, 20, 45, 45, 60, 25, 30]],
	["Kellam", 		[50, 40, 15, 40, 35, 35, 55, 30]],
	["Donnel", 		[50, 45, 15, 40, 45, 80, 35, 15]],
	["Lonqu", 		[40, 35, 20, 50, 50, 55, 25, 20]],
	["Ricken", 		[50, 20, 35, 30, 30, 65, 30, 25]],
	["Maribelle", 	[30, 20, 40, 40, 30, 80, 10, 40]],
	["Panne", 		[60, 45, 15, 50, 55, 40, 40, 15]],
	["Gaius", 		[50, 45, 15, 45, 45, 35, 25, 15]],
	["Cordelia", 	[50, 45, 15, 35, 35, 45, 40, 25]],
	["Gregor", 		[60, 40, 10, 40, 30, 45, 40, 10]],
	["Nowi", 		[70, 45, 35, 30, 30, 65, 50, 35]],
	["Libra", 		[45, 25, 35, 45, 35, 45, 25, 30]],
	["Tharja", 		[40, 25, 45, 25, 45, 40, 35, 20]],
	["Anna", 		[45, 30, 30, 35, 35, 80, 30, 30]],
	["Olivia", 		[40, 35, 25, 45, 45, 60, 20, 20]],
	["Cherche", 	[55, 40, 20, 40, 35, 50, 45, 10]],
	["Henry", 		[45, 35, 35, 45, 40, 40, 40, 20]],
	["Sayri", 		[50, 35, 20, 40, 40, 45, 35, 30]],
	["Tiki", 		[80, 40, 40, 35, 30, 80, 45, 45]],
	["Basilio", 	[65, 45, 10, 40, 35, 45, 40, 15]],
	["Flavia", 		[50, 35, 20, 45, 45, 55, 30, 25]],
	["Gangrel", 	[40, 40, 30, 50, 50, 30, 30, 30]],
	["Walhart", 	[75, 60, 10, 30, 30, 45, 45, 25]],
	["Emmeryn", 	[45, 10, 55, 40, 40, 70, 25, 35]],
	["Yenfay", 		[60, 45, 10, 45, 50, 60, 30, 20]],
	["Aversa", 		[45, 25, 45, 35, 40, 65, 30, 30]],
	["Priam", 		[80, 60, 10, 40, 30, 50, 40, 10]],
	["Lucina", 		[45, 35, 20, 45, 45, 80, 25, 25]],
	["Owain", 		[45, 40, 30, 45, 35, 50, 30, 30]],
	["Inigo", 		[50, 35, 15, 35, 45, 65, 30, 20]],
	["Brady", 		[55, 30, 40, 25, 30, 60, 30, 30]],
	["Kjelle", 		[40, 35, 25, 40, 45, 55, 40, 20]],
	["Cynthia", 	[45, 35, 20, 25, 45, 70, 30, 30]],
	["Severa", 		[45, 40, 10, 45, 35, 35, 40, 30]],
	["Gerome", 		[65, 50, 15, 40, 40, 30, 40, 10]],
	["Morgan", 		[35, 35, 40, 40, 40, 50, 25, 25]],
	["Marc", 		[35, 35, 40, 40, 40, 50, 25, 25]],
	["Yarne", 		[70, 50, 10, 45, 40, 60, 45, 10]],
	["Laurent", 	[45, 20, 40, 40, 30, 50, 25, 35]],
	["Noire", 		[30, 45, 40, 35, 50, 40, 30, 40]],
	["Nah", 		[70, 35, 35, 45, 35, 70, 45, 40]]
]);

const charCaps = new Map([
	["Robin", 		[0,  0,  0,  0,  0,  0,  0,  0]],
	["Chrom", 		[0,  1,  0,  1,  1,  1, -1, -1]],
	["Lissa", 		[0, -2,  2, -1,  0,  2, -1,  1]],
	["Frederick", 	[0,  2, -2,  2, -2,  0,  2,  0]],
	["Sully", 		[0, -1, -1,  2,  2,  0, -1,  0]],
	["Virion", 		[0,  0,  0,  2,  2, -1, -2,  0]],
	["Stahl", 		[0,  2, -1,  1,  0, -2,  2, -1]],
	["Vaike", 		[0,  3, -2,  1,  1, -1,  0, -2]],
	["Miriel", 		[0, -2,  3,  1,  1,  0, -2,  0]],
	["Sumia", 		[0, -2,  0,  2,  3,  0, -2,  1]],
	["Kellam", 		[0,  1,  0,  1, -2, -2,  3,  0]],
	["Donnel", 		[0,  1, -1, -1, -1,  3,  1, -1]],
	["Lonqu", 		[0,  0,  0,  3,  3,  0, -2, -2]],
	["Ricken", 		[0, -1,  2,  0,  0,  1, -1,  0]],
	["Maribelle", 	[0, -3,  2,  1,  0,  3, -3,  2]],
	["Panne", 		[0,  2, -1,  2,  3, -1,  1, -1]],
	["Gaius", 		[0,  1, -1,  2,  2, -2, -1,  0]],
	["Cordelia", 	[0,  1, -1,  2,  2, -1,  0, -1]],
	["Gregor", 		[0,  2, -1,  2,  0, -1,  1, -2]],
	["Nowi", 		[0,  1,  1, -1, -2,  1,  3,  2]],
	["Libra", 		[0,  0,  1,  1,  0, -1,  0,  1]],
	["Tharja", 		[0,  0,  3, -1,  1, -3,  1,  0]],
	["Anna", 		[0, -1,  0,  1,  0,  3, -1,  0]],
	["Olivia", 		[0,  0,  0,  1,  1,  0, -1, -1]],
	["Cherche", 	[0,  3,  0, -1, -1,  0,  2, -2]],
	["Henry", 		[0,  1,  1,  2,  0, -2,  1, -1]],
	["Sayri", 		[0,  1, -1,  1,  1, -1,  0,  1]],
	["Tiki", 		[0,  0, -1,  0,  1,  2,  1,  2]],
	["Basilio", 	[0,  3, -2,  1,  1, -1,  1, -1]],
	["Flavia", 		[0,  1, -1,  2,  1,  0, -1,  0]],
	["Gangrel", 	[0, -2,  0,  3,  3, -1, -1,  0]],
	["Walhart", 	[0,  4, -2,  0, -1, -1,  4, -2]],
	["Emmeryn", 	[0, -2,  3,  0,  1,  0, -2,  1]],
	["Yenfay", 		[0,  1, -2,  2,  4,  0, -1, -2]],
	["Aversa", 		[0, -1,  3,  1,  1, -2,  0,  0]],
	["Priam", 		[0,  3, -2,  1,  0,  0,  2, -2]],
]);

const classGrowths = new Map([
	["Lord",			[40, 20,  0, 20, 20, 0, 10,  5]],
	["Great Lord (M)",	[40, 20,  0, 20, 20, 0, 10,  5]],
	["Great Lord (F)",	[40, 20,  0, 20, 20, 0, 10,  5]],
	["Tactician",		[40, 15, 15, 15, 15, 0, 10, 10]],
	["Grandmaster",		[40, 15, 15, 15, 15, 0, 10, 10]],
	["Cavalier",		[45, 20,  0, 20, 20, 0, 10,  5]],
	["Paladin",			[45, 20,  0, 20, 20, 0, 10, 10]],
	["Knight",			[50, 25,  0, 15, 10, 0, 15,  5]],
	["Great Knight",	[50, 25,  0, 15, 15, 0, 15,  5]],
	["General",			[50, 25,  0, 15, 10, 0, 15, 10]],
	["Barbarian",		[50, 25,  0, 15, 20, 0,  5,  5]],
	["Berserker",		[50, 25,  0, 15, 20, 0,  5,  5]],
	["Fighter",			[45, 25,  0, 20, 15, 0, 10,  5]],
	["Warrior",			[45, 25,  0, 20, 15, 0, 10,  5]],
	["Mercenary",		[45, 20,  0, 25, 20, 0, 10,  5]],
	["Hero",			[45, 20,  0, 25, 20, 0, 10,  5]],
	["Archer",			[45, 15,  0, 30, 15, 0, 10,  5]],
	["Bow Knight",		[50, 20,  0, 25, 20, 0,  5,  5]],
	["Sniper",			[45, 15,  0, 30, 15, 0, 15,  5]],
	["Myrmidon",		[40, 20,  0, 25, 25, 0,  5,  5]],
	["Swordmaster",		[40, 20,  0, 25, 25, 0,  5, 10]],
	["Thief",			[35, 15,  5, 25, 25, 0,  5,  5]],
	["Assassin",		[40, 20,  0, 30, 25, 0,  5,  5]],
	["Trickster",		[35, 10, 15, 25, 20, 0,  5, 10]],
	["Pegasus Knight",	[40, 15,  5, 25, 25, 0,  5, 10]],
	["Falcon Knight",	[40, 15, 10, 25, 25, 0,  5, 10]],
	["Dark Flier",		[40, 10, 15, 20, 20, 0,  5, 10]],
	["Wyvern Rider",	[45, 30,  0, 15, 15, 0, 10,  5]],
	["Wyvern Lord",		[45, 30,  0, 15, 15, 0, 10,  5]],
	["Griffon Rider",	[45, 25,  0, 20, 20, 0,  5,  5]],
	["Troubador",		[35,  0, 20, 10, 20, 0,  5, 15]],
	["Valkyrie",		[35,  0, 20, 10, 20, 0,  5, 15]],
	["Cleric",			[35,  5, 15, 15, 15, 0,  5, 15]],
	["Priest",			[35,  5, 15, 15, 15, 0,  5, 15]],
	["War Cleric",		[45, 15, 15, 10, 15, 0, 10, 10]],
	["War Monk",		[45, 15, 15, 10, 15, 0, 10, 10]],
	["Mage",			[35,  0, 20, 20, 20, 0,  5, 10]],
	["Sage",			[35,  0, 20, 20, 20, 0,  5, 10]],
	["Dark Mage",		[50,  5, 15, 15, 15, 0, 10, 10]],
	["Dark Knight",		[50, 15, 15, 15, 15, 0, 10,  5]],
	["Sorcerer",		[45,  0, 20, 15, 15, 0, 10, 10]],
	["Villager",		[35, 10,  0,  5,  5, 0, 10,  5]],
	["Dancer",			[35,  5,  0, 25, 25, 0,  5,  5]],
	["Taguel (F)",		[40, 15,  0, 20, 20, 0, 10,  5]],
	["Taguel (M)",		[45, 20,  0, 15, 15, 0, 15,  5]],
	["Manakete",		[50, 20,  5, 20, 20, 0, 15, 15]],
	["Conqueror",		[50, 20,  5, 15, 15, 0, 10, 10]],
	["Lodestar",		[40, 20,  0, 20, 20, 0, 10,  5]],
	["Dread Fighter",	[40, 20, 10, 20, 20, 0, 10, 10]],
	["Bride",			[40, 20, 10, 20, 20, 0, 10, 10]],
	["Groom",			[40, 20, 10, 20, 20, 0, 10, 10]],
	["Base stats",		[ 0,  0,  0,  0,  0, 0,  0,  0]],
]);

const classCaps = new Map([
	["Lord",			[60, 25, 20, 26, 28, 30, 25, 25]],
	["Great Lord (M)",	[80, 43, 30, 40, 41, 45, 42, 40]],
	["Great Lord (F)",	[80, 40, 30, 42, 44, 45, 40, 40]],
	["Tactician",		[60, 25, 25, 25, 25, 30, 25, 25]],
	["Grandmaster",		[80, 40, 40, 40, 40, 45, 40, 40]],
	["Cavalier",		[60, 26, 20, 25, 25, 30, 26, 26]],
	["Paladin",			[80, 42, 30, 40, 40, 45, 42, 42]],
	["Knight",			[60, 30, 20, 26, 23, 30, 30, 22]],
	["Great Knight",	[80, 48, 20, 34, 37, 45, 48, 30]],
	["General",			[80, 50, 30, 41, 35, 45, 50, 35]],
	["Barbarian",		[60, 30, 20, 23, 27, 30, 22, 20]],
	["Berserker",		[80, 50, 30, 35, 44, 45, 34, 30]],
	["Fighter",			[60, 29, 20, 26, 25, 30, 25, 23]],
	["Warrior",			[80, 48, 30, 42, 40, 45, 40, 35]],
	["Mercenary",		[60, 26, 20, 28, 26, 30, 25, 23]],
	["Hero",			[80, 42, 30, 46, 42, 45, 40, 36]],
	["Archer",			[60, 26, 20, 29, 25, 30, 25, 21]],
	["Bow Knight",		[80, 40, 30, 43, 41, 45, 35, 30]],
	["Sniper",			[80, 41, 30, 48, 40, 45, 40, 31]],
	["Myrmidon",		[60, 24, 22, 27, 28, 40, 22, 24]],
	["Swordmaster",		[80, 38, 34, 44, 46, 45, 33, 38]],
	["Thief",			[60, 22, 20, 30, 28, 30, 21, 20]],
	["Assassin",		[80, 40, 30, 48, 46, 45, 31, 30]],
	["Trickster",		[80, 35, 38, 45, 43, 45, 30, 40]],
	["Pegasus Knight",	[60, 24, 23, 28, 27, 30, 22, 25]],
	["Falcon Knight",	[80, 38, 35, 45, 44, 45, 33, 40]],
	["Dark Flier",		[80, 36, 42, 41, 42, 45, 32, 41]],
	["Wyvern Rider",	[60, 28, 20, 24, 24, 30, 28, 20]],
	["Wyvern Lord",		[80, 46, 30, 38, 38, 45, 46, 30]],
	["Griffon Rider",	[80, 40, 30, 43, 41, 45, 40, 30]],
	["Troubador",		[60, 20, 26, 24, 26, 30, 20, 28]],
	["Valkyrie",		[80, 30, 42, 38, 43, 45, 30, 45]],
	["Cleric",			[60, 22, 25, 24, 25, 30, 22, 27]],
	["Priest",			[60, 22, 25, 24, 25, 30, 22, 27]],
	["War Cleric",		[80, 40, 40, 38, 41, 45, 38, 43]],
	["War Monk",		[80, 40, 40, 38, 41, 45, 38, 43]],
	["Mage",			[60, 20, 28, 27, 26, 30, 21, 25]],
	["Sage",			[80, 30, 46, 43, 42, 45, 31, 40]],
	["Dark Mage",		[60, 20, 27, 25, 25, 30, 25, 27]],
	["Dark Knight",		[80, 38, 41, 40, 40, 45, 42, 38]],
	["Sorcerer",		[80, 30, 44, 38, 40, 45, 41, 44]],
	["Villager",		[60, 20, 20, 20, 20, 30, 20, 20]],
	["Dancer",			[80, 30, 30, 40, 40, 45, 30, 30]],
	["Taguel (F)",		[80, 35, 30, 40, 40, 45, 35, 30]],
	["Taguel (M)",		[80, 35, 30, 40, 40, 45, 35, 30]],
	["Manakete",		[80, 40, 35, 35, 35, 45, 40, 40]],
	["Conqueror",		[80, 45, 25, 40, 40, 45, 45, 35]],
	["Lodestar",		[80, 41, 30, 43, 43, 45, 41, 41]],
	["Dread Fighter",	[80, 42, 38, 40, 41, 45, 39, 43]],
	["Bride",			[40, 40, 39, 42, 42, 45, 41, 40]],
	["Groom",			[40, 40, 39, 42, 42, 45, 41, 40]],
	["Base stats",		[ 0,  0,  0,  0,  0,  0,  0,  0]],
]);

const classPools = new Map([
	["Robin", 		["Tactician", "Grandmaster", "Cavalier", "Paladin", "Knight", "Great Knight", "General", "Barbarian", "Berserker", "Fighter", "Warrior", "Mercenary", "Hero", "Archer", 
					"Bow Knight", "Sniper", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Trickster", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Wyvern Rider", "Wyvern Lord", 
					"Griffon Rider", "Troubador", "Valkyrie", "Priest", "War Monk", "Mage", "Sage", "Dark Mage", "Dark Knight", "Sorcerer", "Dread Fighter", "Groom", "Bride", "Base stats"]],
	["Chrom", 		["Lord", "Great Lord (M)", "Cavalier", "Paladin", "Great Knight", "Archer", "Bow Knight", "Sniper", "Dread Fighter", "Groom", "Base stats"]],
	["Lissa", 		["Cleric", "War Cleric", "Sage", "Troubador", "Valkyrie", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Dread Fighter", "Bride", "Base stats"]],
	["Frederick", 	["Cavalier", "Great Knight", "Paladin", "Knight", "General", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Groom", "Base stats"]],
	["Sully", 		["Cavalier", "Paladin", "Great Knight", "Myrmidon", "Swordmaster", "Assassin", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Bride", "Base stats"]],
	["Virion", 		["Archer", "Sniper", "Bow Knight", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Groom", "Base stats"]],
	["Stahl", 		["Cavalier", "Paladin", "Great Knight", "Myrmidon", "Swordmaster", "Assassin", "Archer", "Bow Knight", "Sniper", "Dread Fighter", "Groom", "Base stats"]],
	["Vaike", 		["Fighter", "Warrior", "Hero", "Barbarian", "Berserker", "Thief", "Assassin", "Trickster", "Dread Fighter", "Groom", "Base stats"]],
	["Miriel", 		["Mage", "Sage", "Dark Knight", "Dark Mage", "Sorcerer", "Troubador", "Valkyrie", "War Cleric", "Dread Fighter", "Bride", "Base stats"]],
	["Sumia", 		["Pegasus Knight", "Dark Flier", "Falcon Knight", "Cleric", "War Cleric", "Sage", "Knight", "Great Knight", "General", "Dread Fighter", "Bride", "Base stats"]],
	["Kellam", 		["Knight", "General", "Great Knight", "Thief", "Assassin", "Trickster", "Priest", "War Monk", "Sage", "Dread Fighter", "Groom", "Base stats"]],
	["Donnel", 		["Villager", "Mercenary", "Hero", "Bow Knight", "Fighter", "Warrior", "Dread Fighter", "Groom", "Base stats"]],
	["Lonqu", 		["Myrmidon", "Swordmaster", "Assassin", "Thief", "Trickster", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Groom", "Base stats"]],
	["Ricken", 		["Mage", "Sage", "Dark Knight", "Cavalier", "Paladin", "Great Knight", "Archer", "Bow Knight", "Sniper", "Dread Fighter", "Groom", "Base stats"]],
	["Maribelle", 	["Troubador", "Valkyrie", "War Cleric", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Bride", "Base stats"]],
	["Panne", 		["Taguel (F)", "Thief", "Assassin", "Trickster", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Bride", "Base stats"]],
	["Gaius", 		["Thief", "Assassin", "Trickster", "Myrmidon", "Swordmaster", "Fighter", "Hero", "Warrior", "Dread Fighter", "Groom", "Base stats"]],
	["Cordelia", 	["Pegasus Knight", "Falcon Knight", "Dark Flier", "Mercenary", "Hero", "Bow Knight", "Dark Mage", "Sorcerer", "Dark Knight", "Dread Fighter", "Bride", "Base stats"]],
	["Gregor", 		["Mercenary", "Hero", "Bow Knight", "Myrmidon", "Swordmaster", "Assassin", "Barbarian", "Berserker", "Warrior", "Dread Fighter", "Groom", "Base stats"]],
	["Nowi", 		["Manakete", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Bride", "Base stats"]],
	["Libra", 		["Priest", "War Monk", "Sage", "Mage", "Dark Knight", "Dark Mage", "Sorcerer", "Dread Fighter", "Groom", "Base stats"]],
	["Tharja", 		["Dark Mage", "Sorcerer", "Dark Knight", "Archer", "Sniper", "Bow Knight", "Knight", "General", "Great Knight", "Dread Fighter", "Bride", "Base stats"]],
	["Anna", 		["Thief", "Trickster", "Assassin", "Archer", "Bow Knight", "Sniper", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Bride", "Base stats"]],
	["Olivia", 		["Dancer", "Myrmidon", "Swordmaster", "Assassin", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Dread Fighter", "Bride", "Base stats"]],
	["Cherche", 	["Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Cleric", "War Cleric", "Sage", "Troubador", "Valkyrie", "Dread Fighter", "Bride", "Base stats"]],
	["Henry", 		["Dark Mage", "Sorcerer", "Dark Knight", "Thief", "Trickster", "Assassin", "Barbarian", "Berserker", "Warrior", "Dread Fighter", "Groom", "Base stats"]],
	["Sayri", 		["Myrmidon", "Swordmaster", "Assassin", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Bride", "Base stats"]],
	["Tiki", 		["Manakete", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Bride", "Base stats"]],
	["Basilio", 	["Fighter", "Warrior", "Hero", "Barbarian", "Berserker", "Knight", "General", "Great Knight", "Dread Fighter", "Groom", "Base stats"]],
	["Flavia", 		["Mercenary", "Hero", "Bow Knight", "Thief", "Assassin", "Trickster", "Knight", "General", "Great Knight", "Dread Fighter", "Bride", "Base stats"]],
	["Gangrel", 	["Thief", "Trickster", "Assassin", "Barbarian", "Berserker", "Warrior", "Dark Mage", "Dark Knight", "Sorcerer", "Dread Fighter", "Groom", "Base stats"]],
	["Walhart", 	["Conqueror", "Knight", "Great Knight", "General", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Groom", "Base stats"]],
	["Emmeryn", 	["Cleric", "Sage", "War Cleric", "Troubador", "Valkyrie", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Dread Fighter", "Bride", "Base stats"]],
	["Yenfay", 		["Myrmidon", "Swordmaster", "Assassin", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Archer", "Bow Knight", "Sniper", "Dread Fighter", "Groom", "Base stats"]],
	["Aversa", 		["Pegasus Knight", "Dark Flier", "Falcon Knight", "Dark Mage", "Sorcerer", "Dark Knight", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Bride", "Base stats"]],
	["Priam", 		["Mercenary", "Hero", "Bow Knight", "Myrmidon", "Swordmaster", "Assassin", "Fighter", "Warrior", "Dread Fighter", "Groom", "Base stats"]],
	["Lucina", 		["Lord", "Great Lord (F)", "Cavalier", "Paladin", "Great Knight", "Archer", "Bow Knight", "Sniper"]],
	["Owain", 		["Myrmidon", "Swordmaster", "Assassin", "Priest", "War Monk", "Sage", "Barbarian", "Berserker", "Warrior", "Troubador", "Valkyrie", "Pegasus Knight", "Falcon Knight", "Dark Flier"]],
	["Inigo", 		["Mercenary", "Hero", "Bow Knight", "Myrmidon", "Swordmaster", "Assassin", "Barbarian", "Berserker", "Warrior", "Pegasus Knight", "Falcon Knight", "Dark Flier"]],
	["Brady", 		["Priest", "Sage", "War Monk", "Mage", "Dark Knight", "Cavalier", "Paladin", "Great Knight", "Troubador", "Valkyrie", "Pegasus Knight", "Falcon Knight", "Dark Flier"]],
	["Kjelle", 		["Knight", "General", "Great Knight", "Cavalier", "Paladin", "Myrmidon", "Swordmaster", "Assassin", "Wyvern Rider", "Wyvern Lord", "Griffon Rider"]],
	["Cynthia", 	["Pegasus Knight", "Falcon Knight", "Dark Flier", "Cleric", "War Cleric", "Sage", "Knight", "Great Knight", "General"]],
	["Severa", 		["Mercenary", "Hero", "Bow Knight", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Dark Mage", "Dark Knight", "Sorcerer"]],
	["Gerome", 		["Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Fighter", "Warrior", "Hero", "Priest", "War Monk", "Sage", "Troubador", "Valkyrie"]],
	["Morgan", 		["Tactician", "Grandmaster", "Cavalier", "Paladin", "Knight", "Great Knight", "General", "Barbarian", "Berserker", "Fighter", "Warrior", "Mercenary", 
					"Hero", "Archer", "Bow Knight", "Sniper", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Trickster", "Pegasus Knight", "Falcon Knight", "Dark Flier", 
					"Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Troubador", "Valkyrie", "Cleric", "War Cleric", "Mage", "Sage", "Dark Mage", "Dark Knight", "Sorcerer"]],
	["Marc", 		["Tactician", "Grandmaster", "Cavalier", "Paladin", "Knight", "Great Knight", "General", "Barbarian", "Berserker", "Fighter", "Warrior", "Mercenary", 
					"Hero", "Archer", "Bow Knight", "Sniper", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Trickster", "Pegasus Knight", "Falcon Knight", "Dark Flier", 
					"Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Troubador", "Valkyrie", "Priest", "War Monk", "Mage", "Sage", "Dark Mage", "Dark Knight", "Sorcerer"]],
	["Yarne", 		["Taguel (M)", "Thief", "Assassin", "Trickster", "Barbarian", "Berserker", "Warrior"]],
	["Laurent", 	["Mage", "Dark Knight", "Sage", "Dark Mage", "Sorcerer", "Barbarian", "Warrior", "Berserker", "Troubador", "War Monk", "Valkyrie"]],
	["Noire", 		["Archer", "Sniper", "Bow Knight", "Dark Mage", "Sorcerer", "Dark Knight", "Knight", "General", "Great Knight"]],
	["Nah", 		["Manakete", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Mage", "Sage", "Dark Knight"]],
]);

var kidGrowths = new Map([
	["Lucina", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Owain", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Inigo", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Brady", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Kjelle", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Cynthia", 	[0, 0, 0, 0, 0, 0, 0, 0]],
	["Severa", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Gerome", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Morgan", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Marc", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Yarne", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Laurent", 	[0, 0, 0, 0, 0, 0, 0, 0]],
	["Noire", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Nah", 		[0, 0, 0, 0, 0, 0, 0, 0]],
]);

var kidCaps = new Map([
	["Lucina", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Owain", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Inigo", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Brady", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Kjelle", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Cynthia", 	[0, 0, 0, 0, 0, 0, 0, 0]],
	["Severa", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Gerome", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Morgan", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Marc", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Yarne", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Laurent", 	[0, 0, 0, 0, 0, 0, 0, 0]],
	["Noire", 		[0, 0, 0, 0, 0, 0, 0, 0]],
	["Nah", 		[0, 0, 0, 0, 0, 0, 0, 0]],
]);

var kidClasses = new Map([
	["Lucina", 		[]],
	["Owain", 		[]],
	["Inigo", 		[]],
	["Brady", 		[]],
	["Kjelle", 		[]],
	["Cynthia", 	[]],
	["Severa", 		[]],
	["Gerome", 		[]],
	["Morgan", 		[]],
	["Marc", 		[]],
	["Yarne", 		[]],
	["Laurent", 	[]],
	["Noire", 		[]],
	["Nah", 		[]],
]);

function makeKidClassList(kid, parent){
	if (parent.includes("'")){
		parent = parent.replaceAll("'", "")
	}
	let classes;
	if (![...kidGrowths.keys()].includes(parent)){
		classes = classPools.get(kid).concat(classPools.get(parent).slice(0, -3));
	}
	else {
		classes = classPools.get(kid).concat(kidClasses.get(parent).slice(0, -3));
	}
	if (parent == "Robin"){
		classes.splice(-1);
	}
	if (genders.get(kid) == "M" && classes.includes("Cleric")){
		classes[classes.indexOf("Cleric")] = "Priest";
	}
	if (genders.get(kid) == "M" && classes.includes("War Cleric")){
		classes[classes.indexOf("War Cleric")] = "War Monk";
	}
	if (genders.get(kid) == "F" && classes.includes("Priest")){
		classes[classes.indexOf("Priest")] = "Cleric";
	}
	if (genders.get(kid) == "F" && classes.includes("War Monk")){
		classes[classes.indexOf("War Monk")] = "War Cleric";
	}
	if (genders.get(kid) == "F" && classes.includes("Great Lord (M)")){
		classes[classes.indexOf("Great Lord (M)")] = "Great Lord (F)";
	}
	if (genders.get(kid) == "M" && classes.includes("Great Lord (F)")){
		classes[classes.indexOf("Great Lord (F)")] = "Great Lord (M)";
	}
	if (genders.get(kid) == "M" && classes.includes("Taguel (F)")){
		classes[classes.indexOf("Taguel (F)")] = "Taguel (M)";
	}
	if (genders.get(kid) == "F" && classes.includes("Taguel (M)")){
		classes[classes.indexOf("Taguel (N)")] = "Taguel (F)";
	}

	if (genders.get(parent) == "M" && genders.get(kid) == "F"){
		if (classPools.get(parent).includes("Fighter") && parent != "Vaike"){
			if (!classPools.get(kid).includes("Pegasus Knight")){
				classes.push("Pegasus Knight", "Falcon Knight", "Dark Flier");
			}
		}
		else if (classPools.get(parent).includes("Fighter") && parent == "Vaike"){
			if (!classPools.get(kid).includes("Mercenary")){
				classes.push("Mercenary");
			}
			if (!classPools.get(kid).includes("Hero")){
				classes.push("Hero");
			}
			if (!classPools.get(kid).includes("Bow Knight")){
				classes.push("Bow Knight");
			}
		}
		if (classPools.get(parent).includes("Barbarian") && parent != "Vaike"){
			if (!classPools.get(kid).includes("Troubador")){
				classes.push("Troubador", "Valkyrie");
			}
			if (!classPools.get(kid).includes("War Cleric")){
				classes.push("War Cleric");
			}
		}
		else if (classPools.get(parent).includes("Barbarian") && parent == "Vaike"){
			if (!classPools.get(kid).includes("Knight")){
				classes.push("Knight", "General");
			}
			if (!classPools.get(kid).includes("Great Knight")){
				classes.push("Great Knight");
			}
		}
	}
	if (genders.get(parent) == "F" && genders.get(kid) == "M"){
		if (classPools.get(parent).includes("Pegasus Knight") && !classPools.get(kid).includes("Fighter")){
			classes.push("Fighter", "Warrior", "Hero");
		}
		if (classPools.get(parent).includes("Troubador") && !classPools.get(kid).includes("Barbarian")){
			classes.push("Barbarian", "Berserker", "Warrior");
		}
	}

	let classSet = new Set(classes)
	classes = Array.from(classSet)

	if (parent == "Chrom"){
		classes.push(classes.splice(classes.indexOf("Lord"), 1)[0]);
		classes.push(classes.splice(classes.indexOf("Great Lord (M)"), 1)[0]);
		classes.push(classes.splice(classes.indexOf("Great Lord (F)"), 1)[0]);
	}
	if (parent == "Donnel"){
		classes.push(classes.splice(classes.indexOf("Villager"), 1)[0]);
	}
	if (parent == "Olivia"){
		classes.push(classes.splice(classes.indexOf("Dancer"), 1)[0]);
	}
	if (kid == "Inigo"){
		classes.push("Dancer");
	}
	if (parent == "Nowi" || parent == "Tiki"){
		classes.push(classes.splice(classes.indexOf("Manakete"), 1)[0]);
	}
	if (parent == "Panne"){
		classes.push(classes.splice(classes.indexOf("Taguel (F)"), 1)[0]);
		classes.push(classes.splice(classes.indexOf("Taguel (M)"), 1)[0]);
	}
	if (parent == "Walhart"){
		classes.push(classes.splice(classes.indexOf("Conqueror"), 1)[0]);
	}
	classes.push("Dread Fighter")
	if (genders.get(kid) == "F"){
		classes.push("Bride");
	}
	if (genders.get(kid) == "M"){
		classes.push("Groom");
	}
	classes.push("Base stats")
	return classes;
}

function updateClassGrowths(char){
	if (char == "Robin"){
		for (let i = 0; i < 8; i++){
			this["robin"+stats[i]+"growth"].innerHTML = charGrowths.get("Robin")[i] + assetgrowths.get(asset1.value)[i] + flawgrowths.get(flaw1.value)[i] + classGrowths.get(robinClassGrowths.value)[i];
		}
	}
	else if (char == "Donnel"){
		for (let i = 0; i < 8; i++){
			this["donnel"+stats[i]+"growth"].innerHTML = charGrowths.get("Donnel")[i] + aptitude1.checked*20 + classGrowths.get(donnelClassGrowths.value)[i];
		}
	}
	else {
		for (let i = 0; i < 8; i++){
			this[char.toLowerCase()+stats[i]+"growth"].innerHTML=charGrowths.get(char)[i]+classGrowths.get(this[char.toLowerCase()+"ClassGrowths"].value)[i];
		}
	}
}

function updateClassCaps(char){
	if (char == "Robin"){
		this["robin"+stats[0]+"cap"].innerHTML = charCaps.get("Robin")[0] + assetcaps.get(asset1.value)[0] + flawcaps.get(flaw1.value)[0] + classCaps.get(robinClassCaps.value)[0];
		for (let i = 1; i < 8; i++){
			this["robin"+stats[i]+"cap"].innerHTML = charCaps.get("Robin")[i] + assetcaps.get(asset1.value)[i] + flawcaps.get(flaw1.value)[i] + classCaps.get(robinClassCaps.value)[i] + limitbreaker1.checked * 10;
		}
	}
	else {
		this[char.toLowerCase()+stats[0]+"cap"].innerHTML=charCaps.get(char)[0]+classCaps.get(this[char.toLowerCase()+"ClassCaps"].value)[0];
		for (let i = 1; i < 8; i++){
			this[char.toLowerCase()+stats[i]+"cap"].innerHTML=charCaps.get(char)[i]+classCaps.get(this[char.toLowerCase()+"ClassCaps"].value)[i] + limitbreaker1.checked * 10;
		}
	}
}

function updateAssetFlaw(){
	updateClassGrowths("Robin");
	updateClassCaps("Robin");
	updateKidClassGrowths("Morgan");
	updateKidClassCaps("Morgan");
	updateKidClassGrowths("Marc");
	updateKidClassCaps("Marc");
	for (let i = 36; i < 50; i++){
		if (this[characters[i].toLowerCase()+"growthsparent"].value == "Robin"){
			updateKidClassGrowths(characters[i]);
			updateKidClassCaps(characters[i]);
		}
	}
	if (["Robin", "Morgan", "Marc"].includes(charfixed.value)){
		updateClassFixed();
	}
	if ([...kidGrowths.keys()].includes(charfixed.value)){
		if (this[charfixed.value.toLowerCase()+"growthsparent"].value == "Robin"){
			updateClassFixed();
 		}
	}
}

function updateAsset(asset){
	asset1.selectedIndex = statsfull.indexOf(asset);
	asset2.selectedIndex = statsfull.indexOf(asset);
	asset3.selectedIndex = statsfull.indexOf(asset);
	asset4.selectedIndex = statsfull.indexOf(asset);
	asset5.selectedIndex = statsfull.indexOf(asset);
	updateAssetFlaw();
}

function updateFlaw(flaw){
	flaw1.selectedIndex = statsfull.indexOf(flaw);
	flaw2.selectedIndex = statsfull.indexOf(flaw);
	flaw3.selectedIndex = statsfull.indexOf(flaw);
	flaw4.selectedIndex = statsfull.indexOf(flaw);
	flaw5.selectedIndex = statsfull.indexOf(flaw);
	updateAssetFlaw();
}

function updateAptitude(box){
	aptitude1.checked = this["aptitude"+box].checked;
	aptitude2.checked = this["aptitude"+box].checked;
	aptitude3.checked = this["aptitude"+box].checked;
	updateClassGrowths("Donnel");
	for (let i = 36; i < 50; i++){
		if (this[characters[i].toLowerCase()+"growthsparent"].value == "Donnel"){
			for (let j = 0; j < 8; j++){
				this[characters[i].toLowerCase()+stats[j]+"growth"].innerHTML = Math.floor((charGrowths.get(characters[i])[j] + charGrowths.get(defaultParents.get(characters[i]))[j] + charGrowths.get(this[characters[i].toLowerCase()+"growthsparent"].value)[j]) / 3) + aptitude1.checked*20 + classGrowths.get(this[characters[i].toLowerCase()+"ClassGrowths"].value)[j];
			}
		}
	}
	if (charfixed.value == "Donnel"){
		updateClassFixed();
	}
	if ([...kidGrowths.keys()].includes(charfixed.value)){
		if (this[charfixed.value.toLowerCase()+"growthsparent"].value == "Donnel"){
			updateClassFixed();
 		}
	}
}

function updateLimitBreaker(box){
	limitbreaker1.checked = this["limitbreaker"+box].checked;
	limitbreaker2.checked = this["limitbreaker"+box].checked;
	for (let i = 0; i < 36; i++) {
		updateClassCaps(characters[i]);
	}
	for (let i = 36; i < 50; i++) {
		updateKidClassCaps(characters[i]);
	}
}

function syncParentGrowths(char){
	this[char.toLowerCase()+"capsparent"].selectedIndex = this[char.toLowerCase()+"growthsparent"].selectedIndex;
	updateParentGrowths(char);
	updateParentCaps(char);
}

function syncParentCaps(char){
	this[char.toLowerCase()+"growthsparent"].selectedIndex = parent = this[char.toLowerCase()+"capsparent"].selectedIndex;
	updateParentGrowths(char);
	updateParentCaps(char);
}

function updateParentGrowths(char){
	let currentClass = this[char.toLowerCase()+"ClassGrowths"].value;
	while (this[char.toLowerCase()+"ClassGrowths"].options.length > 0) {                
		this[char.toLowerCase()+"ClassGrowths"].remove(0);
	}
	let classList = makeKidClassList(char, this[char.toLowerCase()+"growthsparent"].value);
	kidClasses.set(char, classList);
	for (let i = 0; i < classList.length; i++) {
		this[char.toLowerCase()+"ClassGrowths"].options[i] = new Option(classList[i]);
	}
	if (classList.includes(currentClass)){
		this[char.toLowerCase()+"ClassGrowths"].value = currentClass;
	}
	updateKidClassGrowths(char);
	if (morgangrowthsparent.value == char){
		updateParentGrowths("Morgan");
	}
	if (marcgrowthsparent.value == char){
		updateParentGrowths("Marc");
	}
	if (charfixed.value == char){
		fixedClass = classfixed.value;
		updateCharFixed();
		if (classList.includes(fixedClass)){
			classfixed.value = fixedClass;
		}
	}
}

function updateParentCaps(char){
	let currentClass = this[char.toLowerCase()+"ClassCaps"].value;
	while (this[char.toLowerCase()+"ClassCaps"].options.length > 0) {                
		this[char.toLowerCase()+"ClassCaps"].remove(0);
	}
	let classList = makeKidClassList(char, this[char.toLowerCase()+"capsparent"].value);
	kidClasses.set(char, classList);
	for (let i = 0; i < classList.length; i++) {
		this[char.toLowerCase()+"ClassCaps"].options[i] = new Option(classList[i]);
	}
	if (classList.includes(currentClass)){
		this[char.toLowerCase()+"ClassCaps"].value = currentClass;
	}
	else {
		if (["Lucina", "Brady", "Kjelle", "Gerome", "Marc", "Laurent"].includes(char)){
			this[char.toLowerCase()+"ClassCaps"].selectedIndex = 1;
		}
		else if (["Inigo", "Severa", "Noire"].includes(char)){
			this[char.toLowerCase()+"ClassCaps"].selectedIndex = 4;
		}
		else if (char == "Morgan"){
			this[char.toLowerCase()+"ClassCaps"].selectedIndex = 23;
		}
		else if (char == "Cynthia"){
			if (classList.includes("Hero")){
				this[char.toLowerCase()+"ClassCaps"].selectedIndex = classList.indexOf("Hero");
			}
			else {
				this[char.toLowerCase()+"ClassCaps"].selectedIndex = 1;
			}
		}
		else if (char == "Owain"){
			if (classList.includes("Trickster")){
				this[char.toLowerCase()+"ClassCaps"].selectedIndex = classList.indexOf("Trickster");
			}
			else {
				this[char.toLowerCase()+"ClassCaps"].selectedIndex = 1;
			}
		}
	}
	updateKidClassCaps(char);
	if (morgancapsparent.value == char){
		updateParentCaps("Morgan");
	}
	if (marccapsparent.value == char){
		updateParentCaps("Marc");
	}
}

function updateKidClassGrowths(char){
	parent = this[char.toLowerCase()+"growthsparent"].value;
	if (parent.includes("'")){
		parent = parent.replaceAll("'", "")
	}
	if ((char == "Morgan" || char == "Marc") && [...kidGrowths.keys()].includes(parent)){
		for (let i = 0; i < 8; i++){
			kidGrowths.get(char)[i] = Math.floor((charGrowths.get(char)[i] + charGrowths.get("Robin")[i] + kidGrowths.get(parent)[i] + assetgrowths.get(asset1.value)[i] + flawgrowths.get(flaw1.value)[i]) / 3);
		}
	}
	else if (char == "Morgan" || char == "Marc" || parent == "Robin"){
		for (let i = 0; i < 8; i++){
			kidGrowths.get(char)[i] = Math.floor((charGrowths.get(char)[i] + charGrowths.get(defaultParents.get(char))[i] + charGrowths.get(parent)[i] + assetgrowths.get(asset1.value)[i] + flawgrowths.get(flaw1.value)[i]) / 3);
		}
	}
	else {
		for (let i = 0; i < 8; i++){
			kidGrowths.get(char)[i] = Math.floor((charGrowths.get(char)[i] + charGrowths.get(defaultParents.get(char))[i] + charGrowths.get(parent)[i]) / 3);
		}
	}
	if (parent == "donnel"){
		for (let i = 0; i < 8; i++){
			this[char.toLowerCase()+stats[i]+"growth"].innerHTML = kidGrowths.get(char)[i] + classGrowths.get(this[char.toLowerCase()+"ClassGrowths"].value)[i] + aptitude1.checked*20;
		}
	}
	else {
		for (let i = 0; i < 8; i++){
			this[char.toLowerCase()+stats[i]+"growth"].innerHTML = kidGrowths.get(char)[i] + classGrowths.get(this[char.toLowerCase()+"ClassGrowths"].value)[i];
		}
	}
}

function updateKidClassCaps(char){
	parent = this[char.toLowerCase()+"capsparent"].value;
	if (parent.includes("'")){
		parent = parent.replaceAll("'", "")
	}
	if ((char == "Morgan" || char == "Marc") && [...kidCaps.keys()].includes(parent)){
		kidCaps.get(char)[0] = charCaps.get("Robin")[0] + kidCaps.get(parent)[0] + assetcaps.get(asset1.value)[0] + flawcaps.get(flaw1.value)[0];
		this[char.toLowerCase()+"HPcap"].innerHTML = classCaps.get(this[char.toLowerCase()+"ClassCaps"].value)[0] + kidCaps.get(char)[0];
		for (let i = 1; i < 8; i++){
			kidCaps.get(char)[i] = charCaps.get("Robin")[i] + kidCaps.get(parent)[i] + assetcaps.get(asset1.value)[i] + flawcaps.get(flaw1.value)[i];
			this[char.toLowerCase()+stats[i]+"cap"].innerHTML = classCaps.get(this[char.toLowerCase()+"ClassCaps"].value)[i] + kidCaps.get(char)[i] + limitbreaker1.checked*10;
		}
	}
	else if (char == "Morgan" || char == "Marc" || parent == "Robin"){
		kidCaps.get(char)[0] = charCaps.get(defaultParents.get(char))[0] + charCaps.get(parent)[0] + assetcaps.get(asset1.value)[0] + flawcaps.get(flaw1.value)[0];
		this[char.toLowerCase()+"HPcap"].innerHTML = classCaps.get(this[char.toLowerCase()+"ClassCaps"].value)[0] + kidCaps.get(char)[0];
		for (let i = 1; i < 8; i++){
			kidCaps.get(char)[i] = charCaps.get(defaultParents.get(char))[i] + charCaps.get(parent)[i] + assetcaps.get(asset1.value)[i] + flawcaps.get(flaw1.value)[i] + 1;
			this[char.toLowerCase()+stats[i]+"cap"].innerHTML = classCaps.get(this[char.toLowerCase()+"ClassCaps"].value)[i] + kidCaps.get(char)[i] + limitbreaker1.checked*10;
		}
	}
	else {
		kidCaps.get(char)[0] = charCaps.get(defaultParents.get(char))[0] + charCaps.get(parent)[0] + assetcaps.get(asset1.value)[0] + flawcaps.get(flaw1.value)[0];
		this[char.toLowerCase()+"HPcap"].innerHTML = classCaps.get(this[char.toLowerCase()+"ClassCaps"].value)[0] + kidCaps.get(char)[0];
		for (let i = 1; i < 8; i++){
			kidCaps.get(char)[i] = charCaps.get(defaultParents.get(char))[i] + charCaps.get(parent)[i] + 1;
			this[char.toLowerCase()+stats[i]+"cap"].innerHTML = classCaps.get(this[char.toLowerCase()+"ClassCaps"].value)[i] + kidCaps.get(char)[i] + limitbreaker1.checked*10;
		}
	}
}

function baseGrowths1(){
	for (let i = 0; i < 36; i++) {
		this[characters[i].toLowerCase()+"ClassGrowths"].selectedIndex = this[characters[i].toLowerCase()+"ClassGrowths"].options.length - 1;
		updateClassGrowths(characters[i]);
	}
}

function classGrowths1(){
	for (let i = 0; i < 36; i++) {
		this[characters[i].toLowerCase()+"ClassGrowths"].selectedIndex = 0;
	}
	frederickClassGrowths.selectedIndex = 1;
	libraClassGrowths.selectedIndex = 1;
	annaClassGrowths.selectedIndex = 1;
	sayriClassGrowths.selectedIndex = 1;
	basilioClassGrowths.selectedIndex = 1;
	flaviaClassGrowths.selectedIndex = 1;
	gangrelClassGrowths.selectedIndex = 1;
	emmerynClassGrowths.selectedIndex = 1;
	yenfayClassGrowths.selectedIndex = 1;
	aversaClassGrowths.selectedIndex = 1;
	priamClassGrowths.selectedIndex = 1;
	for (let i = 0; i < 36; i++) {
		updateClassGrowths(characters[i]);
	}
}

function baseGrowths2(){
	for (let i = 36; i < 50; i++) {
		this[characters[i].toLowerCase()+"ClassGrowths"].selectedIndex = this[characters[i].toLowerCase()+"ClassGrowths"].options.length - 1;
		updateKidClassGrowths(characters[i]);
	}
}

function classGrowths2(){
	for (let i = 36; i < 50; i++) {
		this[characters[i].toLowerCase()+"ClassGrowths"].selectedIndex = 0;
		updateKidClassGrowths(characters[i]);
	}
}

function baseCaps1(){
	for (let i = 0; i < 36; i++) {
		this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = this[characters[i].toLowerCase()+"ClassCaps"].options.length - 1;
		updateClassCaps(characters[i]);
	}
}

function classCaps1(){
	for (let i = 0; i < 36; i++) {
		this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = 1;
	}
	donnelClassCaps.selectedIndex = 0;
	panneClassCaps.selectedIndex = 0;
	nowiClassCaps.selectedIndex = 0;
	oliviaClassCaps.selectedIndex = 0;
	tikiClassCaps.selectedIndex = 0;
	walhartClassCaps.selectedIndex = 0;
	for (let i = 0; i < 36; i++) {
		updateClassCaps(characters[i]);
	}
}

function baseCaps2(){
	for (let i = 36; i < 50; i++) {
		this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = this[characters[i].toLowerCase()+"ClassCaps"].options.length - 1;
		updateKidClassCaps(characters[i]);
	}
}

function classCaps2(){
	for (let i = 36; i < 50; i++) {
		if (["Lucina", "Brady", "Kjelle", "Gerome", "Marc", "Laurent"].includes(characters[i])){
			this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = 1;
		}
		else if (["Inigo", "Severa", "Noire"].includes(characters[i])){
			this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = 4;
		}
		else if (["Yarne", "Nah"].includes(characters[i])){
			this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = 0;
		}
		else if (characters[i] == "Morgan"){
			this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = 23;
		}
		else if (characters[i] == "Cynthia"){
			let classList = makeKidClassList("Cynthia", cynthiacapsparent.value);
			if (classList.includes("Hero")){
				this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = classList.indexOf("Hero");
			}
			else {
				this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = 1;
			}
		}
		else if (characters[i] == "Owain"){
			let classList = makeKidClassList("Owain", owaincapsparent.value);
			if (classList.includes("Trickster")){
				this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = classList.indexOf("Trickster");
			}
			else {
				this[characters[i].toLowerCase()+"ClassCaps"].selectedIndex = 1;
			}
		}
	}
	for (let i = 36; i < 50; i++) {
		updateKidClassCaps(characters[i]);
	}
}

function updateCharFixed(){
	char = charfixed.value;
	if (char.includes("'")) {
		char = char.replaceAll("'", "")
	}
	while (classfixed.options.length > 0) {                
		classfixed.remove(0);
	}
	let classList;
	if (![...kidClasses.keys()].includes(char)){
		classList = classPools.get(char);
	}
	else {
		classList = kidClasses.get(char);
	}
	for (let i = 0; i < classList.length-1; i++){
		classfixed.options[i] = new Option(classList[i]);
	}
	if (["Frederick", "Libra", "Anna", "Sayri", "Basilio", "Flavia", "Gangrel", "Emmeryn", "Yenfay", "Aversa", "Priam"].includes(char)){
		classfixed.selectedIndex = 1;
	}
	updateClassFixed();
}

function updateClassFixed() {
	char = charfixed.value;
	if (char.includes("'")) {
		char = char.replaceAll("'", "")
	}
	if (![...kidGrowths.keys()].includes(char)){
		for (let i = 0; i < 19; i++){
			for (let j = 0; j < 8; j++){
				let stat;
				if (charfixed.value == "Robin"){
					stat = Math.round((i+1) * (charGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j] + assetgrowths.get(asset1.value)[j] + flawgrowths.get(flaw1.value)[j]) / 100) - Math.round(i * (charGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j] + assetgrowths.get(asset1.value)[j] + flawgrowths.get(flaw1.value)[j]) / 100);
				}
				else if (charfixed.value == "Donnel"){
					stat = Math.round((i+1) * (charGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j] + aptitude1.checked*20) / 100) - Math.round(i * (charGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j] + aptitude1.checked*20) / 100);
				}
				else {
					stat = Math.round((i+1) * (charGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j]) / 100) - Math.round(i * (charGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j]) / 100);
				}
				if (stat == 0){
					this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "";
				}
				if (stat == 1){
					this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = stat;
				}
				if (stat > 1){
					this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<b>"+stat+"</b>";
				}
			}
		}
	}
	else {
		for (let i = 0; i < 19; i++){
			for (let j = 0; j < 8; j++){
				let stat;
				if (this[char.toLowerCase()+"growthsparent"].value == "Donnel"){
					stat = Math.round((i+1) * (kidGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j] + aptitude1.checked*20) / 100) - Math.round(i * (kidGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j] + aptitude1.checked*20) / 100);
				}
				else {
					stat = Math.round((i+1) * (kidGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j]) / 100) - Math.round(i * (kidGrowths.get(char)[j] + classGrowths.get(classfixed.value)[j]) / 100);
				}
				if (stat == 0){
					this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "";
				}
				if (stat == 1){
					this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = stat;
				}
				if (stat > 1){
					this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<b>"+stat+"</b>";
				}
			}
		}
	}
}

function updateHit(){
	trueHitRate = ((displayedHit.value * (2 * displayedHit.value + 1) - (Math.abs(displayedHit.value - 50.5) / (displayedHit.value - 50.5) + 1) * ((displayedHit.value - 50) * (2 * displayedHit.value - 99))) / 100).toString() + "%";
	spaces = 1.75*(6 - trueHitRate.length);
	if (displayedHit.value == 100){
		spaces -= 1;
	}
	for (let i = 0; i < spaces; i++){
		trueHitRate += "&nbsp";
	}
	trueHit.innerHTML = trueHitRate;
}

function updateProcs(){
	let procChances = "";
	let lethalityChance = 0;
	let aetherChance = 0;
	let astraChance = 0;
	let solChance = 0;
	let lunaChance = 0;
	let ignisChance = 0;
	let vengeanceChance = 0;
	let remainingChance = 100;
	if (lethality.checked){
		lethalityChance = (Math.floor(skillstat.value / 4) + rightfulking.checked*10) * remainingChance / 100;
		remainingChance -= lethalityChance;
		procChances += "Lethality: <b>" + Math.round(lethalityChance * 100) / 100 + "%</b><br /><br />";
	}
	if (aether.checked){
		aetherChance = (Math.floor(skillstat.value / 2) + rightfulking.checked*10) * remainingChance / 100;
		remainingChance -= aetherChance;
		procChances += "Aether: <b>" + Math.round(aetherChance * 100) / 100 + "%</b><br /><br />";
	}
	if (astra.checked){
		astraChance = (Math.floor(skillstat.value / 2) + rightfulking.checked*10) * remainingChance / 100;
		remainingChance -= astraChance;
		procChances += "Astra: <b>" + Math.round(astraChance * 100) / 100 + "%</b><br /><br />";
	}
	if (sol.checked){
		if (remainingChance > 0){
			solChance = (skillstat.value + rightfulking.checked*10) * remainingChance / 100;
			if (solChance > remainingChance){
				solChance = remainingChance;
			}
			remainingChance -= solChance;
		}
		procChances += "Sol: <b>" + Math.round(solChance * 100) / 100 + "%</b><br /><br />";
	}
	if (luna.checked){
		if (remainingChance > 0){
			lunaChance = (skillstat.value + rightfulking.checked*10) * remainingChance / 100;
			if (lunaChance > remainingChance){
				lunaChance = remainingChance;
			}
			remainingChance -= lunaChance;
		}
		procChances += "Luna: <b>" + Math.round(lunaChance * 100) / 100 + "%</b><br /><br />";
	}
	if (ignis.checked){
		if (remainingChance > 0){
			ignisChance = (skillstat.value + rightfulking.checked*10) * remainingChance / 100;
			if (ignisChance > remainingChance){
				ignisChance = remainingChance;
			}
			remainingChance -= ignisChance;
		}
		procChances += "Ignis: <b>" + Math.round(ignisChance * 100) / 100 + "%</b><br /><br />";
	}
	if (vengeance.checked){
		if (remainingChance > 0){
			vengeanceChance = (skillstat.value * 2 + rightfulking.checked*10) * remainingChance / 100;
			if (vengeanceChance > remainingChance){
				vengeanceChance = remainingChance;
			}
			remainingChance -= vengeanceChance;
		}
		procChances += "Vengeance: <b>" + Math.round(vengeanceChance * 100) / 100 + "%</b><br /><br />";
	}
	procs.innerHTML = procChances+"No skill activation: <b>" + Math.round(remainingChance * 100) / 100 + "%</b>";
}

var displayedHit = document.getElementById("displayedHit");
var trueHit = document.getElementById("trueHit");
for (let i = 0; i <= 100; i++){
	displayedHit.options[i] = new Option(100-i);
}
displayedHit.selectedIndex = 25;
updateHit();

var skillstat = document.getElementById("skillstat");
var rightfulking = document.getElementById("rightfulking");
var vengeance = document.getElementById("vengeance");
var ignis = document.getElementById("ignis");
var luna = document.getElementById("luna");
var sol = document.getElementById("sol");
var astra = document.getElementById("astra");
var aether = document.getElementById("aether");
var lethality = document.getElementById("lethality");
var procs = document.getElementById("procs");

for (let i = 0; i < 100; i++){
	skillstat.options[i] = new Option(99-i);
}

skillstat.selectedIndex = 49;
rightfulking.checked = false;
vengeance.checked = false;
ignis.checked = false;
luna.checked = false;
sol.checked = false;
astra.checked = false;
aether.checked = false;
lethality.checked = false;
updateProcs();

let asset1 = document.getElementById("asset1");
let flaw1 = document.getElementById("flaw1");
let aptitude1 = document.getElementById("aptitude1");

let asset2 = document.getElementById("asset2");
let flaw2 = document.getElementById("flaw2");
let aptitude2 = document.getElementById("aptitude2");

let asset3 = document.getElementById("asset3");
let flaw3 = document.getElementById("flaw3");
let limitbreaker1 = document.getElementById("limitbreaker1");

let asset4 = document.getElementById("asset4");
let flaw4 = document.getElementById("flaw4");
let limitbreaker2 = document.getElementById("limitbreaker2");

let asset5 = document.getElementById("asset5");
let flaw5 = document.getElementById("flaw5");
let aptitude3 = document.getElementById("aptitude3");


var charfixed = document.getElementById("charfixed");
for (let i = 0; i < 50; i++) {
	if (characters[i] == "Lonqu"){
		charfixed.options[i] = new Option("Lon'qu");
	}
	else if (characters[i] == "Sayri"){
		charfixed.options[i] = new Option("Say'ri");
	}
	else if (characters[i] == "Yenfay"){
		charfixed.options[i] = new Option("Yen'fay");
	}
	else {
		charfixed.options[i] = new Option(characters[i]);
	}
}
var classfixed = document.getElementById("classfixed");

var gen1growths = document.getElementById("gen1growths");
for (let i = 0; i < 36; i++){
	var row = gen1growths.insertRow(i+1);
	let name = row.insertCell(0);
	let classSelect = row.insertCell(1);
	let hp = row.insertCell(2);
	let str = row.insertCell(3);
	let mag = row.insertCell(4);
	let skl = row.insertCell(5);
	let spd = row.insertCell(6);
	let lck = row.insertCell(7);
	let def = row.insertCell(8);
	let res = row.insertCell(9);
	if (characters[i] == "Lonqu"){
		name.innerHTML = "Lon'qu";
	}
	else if (characters[i] == "Sayri"){
		name.innerHTML = "Say'ri";
	}
	else if (characters[i] == "Yenfay"){
		name.innerHTML = "Yen'fay";
	}
	else {
		name.innerHTML = characters[i];
	}
	classSelect.innerHTML = "<select id=\""+characters[i].toLowerCase()+"ClassGrowths\" onchange=\"updateClassGrowths('"+characters[i]+"')\"></select>";
	hp.innerHTML = "<span id=\""+characters[i].toLowerCase()+"HPgrowth\"></span>";
	str.innerHTML = "<span id=\""+characters[i].toLowerCase()+"STRgrowth\"></span>";
	mag.innerHTML = "<span id=\""+characters[i].toLowerCase()+"MAGgrowth\"></span>";
	skl.innerHTML = "<span id=\""+characters[i].toLowerCase()+"SKLgrowth\"></span>";
	spd.innerHTML = "<span id=\""+characters[i].toLowerCase()+"SPDgrowth\"></span>";
	lck.innerHTML = "<span id=\""+characters[i].toLowerCase()+"LCKgrowth\"></span>";
	def.innerHTML = "<span id=\""+characters[i].toLowerCase()+"DEFgrowth\"></span>";
	res.innerHTML = "<span id=\""+characters[i].toLowerCase()+"RESgrowth\"></span>";
}

for (let i = 0; i < 36; i++) {
	let char = characters[i].toLowerCase();
	this[char+"ClassGrowths"] = document.getElementById(char+"ClassGrowths");
	for (let j = 0; j < classPools.get(characters[i]).length; j++) {
		this[char+"ClassGrowths"].options[j] = new Option(classPools.get(characters[i])[j]);
	}
}

frederickClassGrowths.selectedIndex = 1;
libraClassGrowths.selectedIndex = 1;
annaClassGrowths.selectedIndex = 1;
sayriClassGrowths.selectedIndex = 1;
basilioClassGrowths.selectedIndex = 1;
flaviaClassGrowths.selectedIndex = 1;
gangrelClassGrowths.selectedIndex = 1;
emmerynClassGrowths.selectedIndex = 1;
yenfayClassGrowths.selectedIndex = 1;
aversaClassGrowths.selectedIndex = 1;
priamClassGrowths.selectedIndex = 1;

for (let i = 0; i < 36; i++) {
	updateClassGrowths(characters[i]);
}

var gen2growths = document.getElementById("gen2growths");
for (let i = 36; i < 50; i++){
	var row = gen2growths.insertRow(i-35);
	let name = row.insertCell(0);
	let parentSelect = row.insertCell(1);
	let classSelect = row.insertCell(2);
	let hp = row.insertCell(3);
	let str = row.insertCell(4);
	let mag = row.insertCell(5);
	let skl = row.insertCell(6);
	let spd = row.insertCell(7);
	let lck = row.insertCell(8);
	let def = row.insertCell(9);
	let res = row.insertCell(10);
	name.innerHTML = characters[i];
	parentSelect.innerHTML = "<select id=\""+characters[i].toLowerCase()+"growthsparent\" onchange=\"syncParentGrowths('"+characters[i]+"')\"></select>";
	classSelect.innerHTML = "<select id=\""+characters[i].toLowerCase()+"ClassGrowths\" onchange=\"updateKidClassGrowths('"+characters[i]+"')\"></select>";
	hp.innerHTML = "<span id=\""+characters[i].toLowerCase()+"HPgrowth\"></span>";
	str.innerHTML = "<span id=\""+characters[i].toLowerCase()+"STRgrowth\"></span>";
	mag.innerHTML = "<span id=\""+characters[i].toLowerCase()+"MAGgrowth\"></span>";
	skl.innerHTML = "<span id=\""+characters[i].toLowerCase()+"SKLgrowth\"></span>";
	spd.innerHTML = "<span id=\""+characters[i].toLowerCase()+"SPDgrowth\"></span>";
	lck.innerHTML = "<span id=\""+characters[i].toLowerCase()+"LCKgrowth\"></span>";
	def.innerHTML = "<span id=\""+characters[i].toLowerCase()+"DEFgrowth\"></span>";
	res.innerHTML = "<span id=\""+characters[i].toLowerCase()+"RESgrowth\"></span>";
}

for (let i = 36; i < 50; i++) {
	let char = characters[i].toLowerCase();
	this[char+"growthsparent"] = document.getElementById(char+"growthsparent");
	for (let j = 0; j < 30; j++) {
		if (characters[j] == "Lonqu"){
			this[char+"growthsparent"].options[j] = new Option("Lon'qu");
		}
		else if (characters[j] == "Sayri"){
			this[char+"growthsparent"].options[j] = new Option("Say'ri");
		}
		else {
			this[char+"growthsparent"].options[j] = new Option(characters[j]);
		}
	}
	if (char == "morgan" || char == "marc"){
		for (let j = 30; j < 36; j++) {
			if (characters[j] == "Yenfay"){
				this[char+"growthsparent"].options[j] = new Option("Yen'fay");	
			}
			else {
				this[char+"growthsparent"].options[j] = new Option(characters[j]);
			}
		}
	}
	else {
		for (let j = 33; j < 36; j++) {
			if (characters[j] == "Yenfay"){
				this[char+"growthsparent"].options[j-3] = new Option("Yen'fay");	
			}
			else {
				this[char+"growthsparent"].options[j-3] = new Option(characters[j]);
			}
		}
	}
}
for (let i = 36; i < 44; i++){
	morgangrowthsparent.options[i] = new Option(characters[i]);
	marcgrowthsparent.options[i] = new Option(characters[i]);
}
for (let i = 46; i < 50; i++){
	morgangrowthsparent.options[i-2] = new Option(characters[i]);
	marcgrowthsparent.options[i-2] = new Option(characters[i]);
}

lucinagrowthsparent.remove(1);
lucinagrowthsparent.remove(1);
lucinagrowthsparent.remove(9);
lucinagrowthsparent.remove(10);
for (let i = 0; i < 9 ; i++){
	lucinagrowthsparent.remove(20);
}
owaingrowthsparent.remove(1);
owaingrowthsparent.remove(1);
for (let i = 0; i < 6 ; i++){
	owaingrowthsparent.remove(25);
}
owaingrowthsparent.selectedIndex = 14;
inigogrowthsparent.remove(23);
inigogrowthsparent.selectedIndex = 14;
bradygrowthsparent.remove(14);
bradygrowthsparent.selectedIndex = 22;
kjellegrowthsparent.remove(4);
kjellegrowthsparent.selectedIndex = 6;
cynthiagrowthsparent.remove(9);
severagrowthsparent.remove(17);
geromegrowthsparent.remove(24);
geromegrowthsparent.selectedIndex = 3;
morgangrowthsparent.remove(0);
morgangrowthsparent.selectedIndex = 8;
marcgrowthsparent.remove(0);
yarnegrowthsparent.remove(15);
yarnegrowthsparent.selectedIndex = 12;
laurentgrowthsparent.remove(8);
laurentgrowthsparent.selectedIndex = 5;
noiregrowthsparent.remove(21);
noiregrowthsparent.selectedIndex = 24;
nahgrowthsparent.remove(19);
nahgrowthsparent.selectedIndex = 11;

for (let i = 36; i < 50; i++) {
	updateParentGrowths(characters[i]);
}

var gen1caps = document.getElementById("gen1caps");
for (let i = 0; i < 36; i++){
	var row = gen1caps.insertRow(i+1);
	let name = row.insertCell(0);
	let classSelect = row.insertCell(1);
	let hp = row.insertCell(2);
	let str = row.insertCell(3);
	let mag = row.insertCell(4);
	let skl = row.insertCell(5);
	let spd = row.insertCell(6);
	let lck = row.insertCell(7);
	let def = row.insertCell(8);
	let res = row.insertCell(9);
	if (characters[i] == "Lonqu"){
		name.innerHTML = "Lon'qu";
	}
	else if (characters[i] == "Sayri"){
		name.innerHTML = "Say'ri";
	}
	else if (characters[i] == "Yenfay"){
		name.innerHTML = "Yen'fay";
	}
	else {
		name.innerHTML = characters[i];
	}
	classSelect.innerHTML = "<select id=\""+characters[i].toLowerCase()+"ClassCaps\" onchange=\"updateClassCaps('"+characters[i]+"')\"></select>";
	hp.innerHTML = "<span id=\""+characters[i].toLowerCase()+"HPcap\"></span>";
	str.innerHTML = "<span id=\""+characters[i].toLowerCase()+"STRcap\"></span>";
	mag.innerHTML = "<span id=\""+characters[i].toLowerCase()+"MAGcap\"></span>";
	skl.innerHTML = "<span id=\""+characters[i].toLowerCase()+"SKLcap\"></span>";
	spd.innerHTML = "<span id=\""+characters[i].toLowerCase()+"SPDcap\"></span>";
	lck.innerHTML = "<span id=\""+characters[i].toLowerCase()+"LCKcap\"></span>";
	def.innerHTML = "<span id=\""+characters[i].toLowerCase()+"DEFcap\"></span>";
	res.innerHTML = "<span id=\""+characters[i].toLowerCase()+"REScap\"></span>";
}

for (let i = 0; i < 36; i++) {
	let char = characters[i].toLowerCase();
	this[char+"ClassCaps"] = document.getElementById(char+"ClassCaps");
	for (let j = 0; j < classPools.get(characters[i]).length; j++) {
		this[char+"ClassCaps"].options[j] = new Option(classPools.get(characters[i])[j]);
	}
	this[char+"ClassCaps"].selectedIndex = 1;
	updateClassCaps(characters[i]);
}

donnelClassCaps.selectedIndex = 2;
panneClassCaps.selectedIndex = 0;
nowiClassCaps.selectedIndex = 0;
oliviaClassCaps.selectedIndex = 0;
tikiClassCaps.selectedIndex = 0;
walhartClassCaps.selectedIndex = 0;

for (let i = 0; i < 36; i++) {
	updateClassCaps(characters[i]);
}

var gen2caps = document.getElementById("gen2caps");
for (let i = 36; i < 50; i++){
	var row = gen2caps.insertRow(i-35);
	let name = row.insertCell(0);
	let parentSelect = row.insertCell(1);
	let classSelect = row.insertCell(2);
	let hp = row.insertCell(3);
	let str = row.insertCell(4);
	let mag = row.insertCell(5);
	let skl = row.insertCell(6);
	let spd = row.insertCell(7);
	let lck = row.insertCell(8);
	let def = row.insertCell(9);
	let res = row.insertCell(10);
	name.innerHTML = characters[i];
	parentSelect.innerHTML = "<select id=\""+characters[i].toLowerCase()+"capsparent\" onchange=\"syncParentCaps('"+characters[i]+"')\"></select>";
	classSelect.innerHTML = "<select id=\""+characters[i].toLowerCase()+"ClassCaps\" onchange=\"updateKidClassCaps('"+characters[i]+"')\"></select>";
	hp.innerHTML = "<span id=\""+characters[i].toLowerCase()+"HPcap\"></span>";
	str.innerHTML = "<span id=\""+characters[i].toLowerCase()+"STRcap\"></span>";
	mag.innerHTML = "<span id=\""+characters[i].toLowerCase()+"MAGcap\"></span>";
	skl.innerHTML = "<span id=\""+characters[i].toLowerCase()+"SKLcap\"></span>";
	spd.innerHTML = "<span id=\""+characters[i].toLowerCase()+"SPDcap\"></span>";
	lck.innerHTML = "<span id=\""+characters[i].toLowerCase()+"LCKcap\"></span>";
	def.innerHTML = "<span id=\""+characters[i].toLowerCase()+"DEFcap\"></span>";
	res.innerHTML = "<span id=\""+characters[i].toLowerCase()+"REScap\"></span>";
}

for (let i = 36; i < 50; i++) {
	let char = characters[i].toLowerCase();
	this[char+"capsparent"] = document.getElementById(char+"capsparent");
	for (let j = 0; j < 30; j++) {
		if (characters[j] == "Lonqu"){
			this[char+"capsparent"].options[j] = new Option("Lon'qu");
		}
		else if (characters[j] == "Sayri"){
			this[char+"capsparent"].options[j] = new Option("Say'ri");
		}
		else {
			this[char+"capsparent"].options[j] = new Option(characters[j]);
		}
	}
	if (char == "morgan" || char == "marc"){
		for (let j = 30; j < 36; j++) {
			if (characters[j] == "Yenfay"){
				this[char+"capsparent"].options[j] = new Option("Yen'fay");	
			}
			else {
				this[char+"capsparent"].options[j] = new Option(characters[j]);
			}
		}
	}
	else {
		for (let j = 33; j < 36; j++) {
			if (characters[j] == "Yenfay"){
				this[char+"capsparent"].options[j-3] = new Option("Yen'fay");	
			}
			else {
				this[char+"capsparent"].options[j-3] = new Option(characters[j]);
			}
		}
	}
}
for (let i = 36; i < 44; i++){
	morgancapsparent.options[i] = new Option(characters[i]);
	marccapsparent.options[i] = new Option(characters[i]);
}
for (let i = 46; i < 50; i++){
	morgancapsparent.options[i-2] = new Option(characters[i]);
	marccapsparent.options[i-2] = new Option(characters[i]);
}

lucinacapsparent.remove(1);
lucinacapsparent.remove(1);
lucinacapsparent.remove(9);
lucinacapsparent.remove(10);
for (let i = 0; i < 9 ; i++){
	lucinacapsparent.remove(20);
}
owaincapsparent.remove(1);
owaincapsparent.remove(1);
for (let i = 0; i < 6 ; i++){
	owaincapsparent.remove(25);
}
owaincapsparent.selectedIndex = 14;
inigocapsparent.remove(23);
inigocapsparent.selectedIndex = 14;
bradycapsparent.remove(14);
bradycapsparent.selectedIndex = 22;
kjellecapsparent.remove(4);
kjellecapsparent.selectedIndex = 6;
cynthiacapsparent.remove(9);
severacapsparent.remove(17);
geromecapsparent.remove(24);
geromecapsparent.selectedIndex = 3;
morgancapsparent.remove(0);
morgancapsparent.selectedIndex = 8;
marccapsparent.remove(0);
yarnecapsparent.remove(15);
yarnecapsparent.selectedIndex = 12;
laurentcapsparent.remove(8);
laurentcapsparent.selectedIndex = 5;
noirecapsparent.remove(21);
noirecapsparent.selectedIndex = 24;
nahcapsparent.remove(19);
nahcapsparent.selectedIndex = 11;

for (let i = 36; i < 50; i++) {
	updateParentCaps(characters[i]);
}

lucinaClassCaps.selectedIndex = 1;
owainClassCaps.selectedIndex = 15;
inigoClassCaps.selectedIndex = 4;
bradyClassCaps.selectedIndex = 1;
kjelleClassCaps.selectedIndex = 1;
cynthiaClassCaps.selectedIndex = 18;
severaClassCaps.selectedIndex = 4;
geromeClassCaps.selectedIndex = 1;
morganClassCaps.selectedIndex = 23;
marcClassCaps.selectedIndex = 1;
laurentClassCaps.selectedIndex = 1;
noireClassCaps.selectedIndex = 4;;

for (let i = 36; i < 50; i++) {
	updateKidClassCaps(characters[i]);
}

var fixedgrowths = document.getElementById("fixedgrowths");
for (let i = 0; i < 19; i++){
	var row = fixedgrowths.insertRow(i+1);
	let level = row.insertCell(0);
	let hp = row.insertCell(1);
	let str = row.insertCell(2);
	let mag = row.insertCell(3);
	let skl = row.insertCell(4);
	let spd = row.insertCell(5);
	let lck = row.insertCell(6);
	let def = row.insertCell(7);
	let res = row.insertCell(8);
	level.innerHTML = (i+1).toString() + " → " + (i+2).toString();
	hp.innerHTML = "<span id=\"level"+(i+2).toString()+"HPgrowth\"></span>";
	str.innerHTML = "<span id=\"level"+(i+2).toString()+"STRgrowth\"></span>";
	mag.innerHTML = "<span id=\"level"+(i+2).toString()+"MAGgrowth\"></span>";
	skl.innerHTML = "<span id=\"level"+(i+2).toString()+"SKLgrowth\"></span>";
	spd.innerHTML = "<span id=\"level"+(i+2).toString()+"SPDgrowth\"></span>";
	lck.innerHTML = "<span id=\"level"+(i+2).toString()+"LCKgrowth\"></span>";
	def.innerHTML = "<span id=\"level"+(i+2).toString()+"DEFgrowth\"></span>";
	res.innerHTML = "<span id=\"level"+(i+2).toString()+"RESgrowth\"></span>";
}

updateCharFixed();
updateAsset("Speed");
updateFlaw("Luck");
aptitude1.checked = true;
updateAptitude(1);
limitbreaker1.checked = false;

updateLimitBreaker(1);

