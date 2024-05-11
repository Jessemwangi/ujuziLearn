import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkoutOutPut = ({content}) => {
    return (
     
            <ReactMarkdown >{content}</ReactMarkdown>
         
    );
};

export default MarkoutOutPut;