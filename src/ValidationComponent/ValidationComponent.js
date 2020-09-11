import React from 'react';

const validation = (props) => {
    return(
        <h4>{props.textLen >=5 ? 'Text long enough' : 'Text too short'}</h4>
    );
}

export default validation;