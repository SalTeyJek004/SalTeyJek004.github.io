var Interval = 20;

var AtomicConstructors = new Vue ({
	el: "#AtomicConstructors",
	data: {
		Tier1: {
			Amount: 0,
			TillUpgrade: 0,
			Multiplier: 1,
			Cost: 10
		},
		Tier2: {
			Amount: 0,
			TillUpgrade: 0,
			Multiplier: 1,
			Cost: 100
		},
		Tier3: {
			Amount: 0,
			TillUpgrade: 0,
			Multiplier: 1,
			Cost: 1000
		}
	},
	methods: {
		BuyTier1: function () {
			if (Atoms.Atoms >= this.Tier1.Cost) {
				Atoms.Atoms -= this.Tier1.Cost;
				this.Tier1.Amount += 1;
				this.Tier1.TillUpgrade += 1;
				if (this.Tier1.TillUpgrade == 10) {
					this.Tier1.TillUpgrade = 0;
					this.Tier1.Multiplier *= 2;
					this.Tier1.Cost *= 10;
				}
			}
		},
		BuyTier2: function () {
			if (Atoms.Atoms >= this.Tier2.Cost) {
				Atoms.Atoms -= this.Tier2.Cost;
				this.Tier2.Amount += 1;
				this.Tier2.TillUpgrade += 1;
				if (this.Tier2.TillUpgrade == 10) {
					this.Tier2.TillUpgrade = 0;
					this.Tier2.Multiplier *= 2;
					this.Tier2.Cost *= 10;
				}
			}
		},
		BuyTier3: function () {
			if (Atoms.Atoms >= this.Tier3.Cost) {
				Atoms.Atoms -= this.Tier3.Cost;
				this.Tier3.Amount += 1;
				this.Tier3.TillUpgrade += 1;
				if (this.Tier3.TillUpgrade == 10) {
					this.Tier3.TillUpgrade = 0;
					this.Tier3.Multiplier *= 2;
					this.Tier3.Cost *= 10;
				}
			}
		}
	}
})

var Atoms = new Vue ({
	el: "#Atoms",
	data: {
		Atoms: 10
	},
	computed: {
		APS: function () {
			return AtomicConstructors.Tier1.Amount
				* AtomicConstructors.Tier1.Multiplier;
		}
	},
	methods: {
		ConstructAtoms: function () {
			AtomicConstructors.Tier2.Amount += (AtomicConstructors.Tier3.Amount / Interval) * AtomicConstructors.Tier3.Multiplier;
			AtomicConstructors.Tier1.Amount += (AtomicConstructors.Tier2.Amount / Interval) * AtomicConstructors.Tier2.Multiplier;
			this.Atoms += (AtomicConstructors.Tier1.Amount / Interval) * AtomicConstructors.Tier1.Multiplier;
		}
	}
})

setInterval(Atoms.ConstructAtoms,1000/Interval);

