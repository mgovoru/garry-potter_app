import * as yup from 'yup';

export const fieldsToValidate = [
	'name',
	'species',
	'house',
	'hairColour',
	'patronus',
	'eyeColour',
];

export const validationSchema = yup.object(
	fieldsToValidate.reduce(
		(schema: Record<string, yup.StringSchema>, field: string) => {
			schema[field] = yup
				.string()
				.matches(/^[A-Za-z\s]+$/, 'Only letters are allowed')
				.required('This field is required');
			return schema;
		},
		{
			image: yup
				.string()
				.url('Please enter a valid URL')
				.required('This field is required'),
		}
	)
);
