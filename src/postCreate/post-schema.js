

import * as yup from 'yup';

export const postSchema = yup.object().shape({
	body: yup.string().required('Post must contain at least 5 characters!'),
	image: yup.mixed().required('You must select an image')
});