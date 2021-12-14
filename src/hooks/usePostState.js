import { useState, useEffect } from 'react';

import * as servicesThemes from '../services/servicesThemes';

const usePostState = (objectId) => {
    const [theme, setTheme] = useState({});

    useEffect(() => {
        servicesThemes.getOnePost(objectId)
            .then(petResult => {
                setTheme(petResult);
            })
    }, [objectId]);

    return [
        theme,
        setTheme
    ]

   
};

export default usePostState;