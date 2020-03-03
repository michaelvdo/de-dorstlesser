export class Filters {
	constructor(
		public Stijl: filterDetails,
		public Brouwerij: filterDetails,
		public Alcoholpercentage: filterDetails
	) {}
}

export class filterDetails {
	constructor(
		public filterOn: string,
		public value: string
	) {}
}
