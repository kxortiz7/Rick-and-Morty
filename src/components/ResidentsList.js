import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({residentAPI}) => {
    console.log(residentAPI)
    return (
        <div>
            {
                residentAPI?.residents?.map(residentUrl => (     
                        <ResidentInfo
                         key={residentUrl}
                         residentUrl={residentUrl}/>
                ))
            }
        </div>
    );
};

export default ResidentsList;