import React from 'react';
import { useParams } from 'react-router-dom';

const Diary = () => {

    const params = useParams();

    return (
        <div>
            Diary 페이지 입니다.
            {params.id}
        </div>
    );
};

export default Diary;