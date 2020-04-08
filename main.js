var Interval = 20;
var AtomsDisplay = document.getElementById("Atoms");
var Tier1Display = document.getElementById("Tier1");
var Tier2Display = document.getElementById("Tier2");
var Tier3Display = document.getElementById("Tier3");
var Atoms = 10;
var AtomicConstructors = {
    Tier1: {
        Amount: 0,
        Multiplier: 1,
		Cost: 10,
		TillUpgrade: 0
    },
    Tier2: {
        Amount: 0,
		Multiplier: 1,
		Cost: 100,
		TillUpgrade: 0
    },
    Tier3: {
        Amount: 0,
		Multiplier: 1,
		Cost: 1000,
		TillUpgrade: 0
    }
};
function ConstructAtoms () {
	AtomicConstructors.Tier2.Amount += (AtomicConstructors.Tier3.Amount / Interval) * AtomicConstructors.Tier3.Multiplier;
    AtomicConstructors.Tier1.Amount += (AtomicConstructors.Tier2.Amount / Interval) * AtomicConstructors.Tier2.Multiplier;
    Atoms += (AtomicConstructors.Tier1.Amount / Interval) * AtomicConstructors.Tier1.Multiplier;
    AtomsDisplay.innerHTML = "Atoms: " + Math.floor(Atoms);
    Tier1Display.innerHTML = "Tier: 1<br>Amount: " + Math.floor(AtomicConstructors.Tier1.Amount) + "<br>Multiplier: " + AtomicConstructors.Tier1.Multiplier + "x<br>Cost: " + AtomicConstructors.Tier1.Cost + "<br>Till Upgrade: " + (10 - AtomicConstructors.Tier1.TillUpgrade);
	Tier2Display.innerHTML = "Tier: 2<br>Amount: " + Math.floor(AtomicConstructors.Tier2.Amount) + "<br>Multiplier: " + AtomicConstructors.Tier2.Multiplier + "x<br>Cost: " + AtomicConstructors.Tier2.Cost + "<br>Till Upgrade: " + (10 - AtomicConstructors.Tier2.TillUpgrade);
	Tier3Display.innerHTML = "Tier: 3<br>Amount: " + Math.floor(AtomicConstructors.Tier3.Amount) + "<br>Multiplier: " + AtomicConstructors.Tier3.Multiplier + "x<br>Cost: " + AtomicConstructors.Tier3.Cost + "<br>Till Upgrade: " + (10 - AtomicConstructors.Tier3.TillUpgrade);
};
setInterval(ConstructAtoms,1000 / Interval);

function BuyTier1Constructor () {
	if(Atoms >= AtomicConstructors.Tier1.Cost) {
		Atoms -= AtomicConstructors.Tier1.Cost;
		AtomicConstructors.Tier1.Amount += 1;
		AtomicConstructors.Tier1.TillUpgrade += 1;
		if (AtomicConstructors.Tier1.TillUpgrade == 10) {
			AtomicConstructors.Tier1.TillUpgrade = 0;
			AtomicConstructors.Tier1.Multiplier *= 2;
			AtomicConstructors.Tier1.Cost *= 10;
		};
	};
};
function BuyTier2Constructor () {
	if(Atoms >= AtomicConstructors.Tier2.Cost) {
		Atoms -= AtomicConstructors.Tier2.Cost;
		AtomicConstructors.Tier2.Amount += 1;
		AtomicConstructors.Tier2.TillUpgrade += 1;
		if (AtomicConstructors.Tier2.TillUpgrade == 10) {
			AtomicConstructors.Tier2.TillUpgrade = 0;
			AtomicConstructors.Tier2.Multiplier *= 2;
			AtomicConstructors.Tier2.Cost *= 10;
		};
	};
};
function BuyTier3Constructor () {
	if(Atoms >= AtomicConstructors.Tier3.Cost) {
		Atoms -= AtomicConstructors.Tier3.Cost;
		AtomicConstructors.Tier3.Amount += 1;
		AtomicConstructors.Tier3.TillUpgrade += 1;
		if (AtomicConstructors.Tier3.TillUpgrade == 10) {
			AtomicConstructors.Tier3.TillUpgrade = 0;
			AtomicConstructors.Tier3.Multiplier *= 2;
			AtomicConstructors.Tier3.Cost *= 10;
		};
	};
};