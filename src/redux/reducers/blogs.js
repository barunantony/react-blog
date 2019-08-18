import { CATEGORIES } from '../../constants';

const initialState = {
    data: {
        blogs: [
            {
                title: 'React Blog for test',
                content: 'React blog content...',
                datePosted: '12/12/2018',
                category: [CATEGORIES.technical]
            },
            {
                title: 'Angular Blog for test',
                content: 'Angular blog content...',
                datePosted: '12/02/2018',
                category: [CATEGORIES.technical]
            }
        ]
    }
};

export default function(state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}