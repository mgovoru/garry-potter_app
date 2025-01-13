import { FormikProps } from "formik";

export type Character = {
	id: string;
	name: string;
	alternate_names: string[];
	species: string;
	gender: string;
	house: string;
	dateOfBirth: string;
	yearOfBirth: number|null;
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

interface FormValues {
	image: string;
	name: string;
	species: string;
	house: string;
	hairColour: string;
	patronus: string;
	eyeColour: string;
	dateOfBirth: string;
	wizard: boolean;
	hogwartsStudent: boolean;
}
export type propsFormFields = {
	values: Character;
	onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	formik: FormikProps<FormValues>
}
