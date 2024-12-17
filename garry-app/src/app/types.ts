export type Character = {
	id: string;
	name: string;
	alternate_names: string[];
	species: string;
	gender: string;
	house: string;
	dateOfBirth: string;
	yearOfBirth: number;
	wizard: boolean;
	ancestry: string;
	eyeColour: string;
	hairColour: string;
	wand: {
		wood: string;
		core: string;
		length: number | null;
	};
	patronus: string;
	hogwartsStudent: boolean;
	hogwartsStaff: boolean;
	actor: string;
	alternate_actors: string[];
	alive: boolean;
	image: string;
};

export type propsHero = {
	hero: Character;
}

export type InitialStore = {
	heroes: Character[];
	favorite: string[];
};
export type propsFavoritePage = {
	favoriteChoose: boolean;
	numberPage: number;
}
