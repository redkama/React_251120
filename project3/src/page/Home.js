
import { useState } from 'react';
import Button from '../component/Button';
import Editor from '../component/Editor';
import Header from '../component/Header';

const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date());

    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }
    
    return (

        <>

            <Header 
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />




            
            
        </>
    );
};

export default Home;