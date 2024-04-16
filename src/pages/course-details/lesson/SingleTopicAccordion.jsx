import React, { useState } from 'react';

const SingleTopicAccordion = ({ title, content = 'no lesson found', parentId }) => {
    const [show, setShow] = useState(true);
    // const uniqueId = `topic-${parentId}`;
    const uniqueId = `topic-${Math.random().toString(36).substr(2, 9)}`;

    const toggleShow = () => {
        setShow(!show);
    };
    

    return (
        <div className="accordion-item">
            <h3 className="accordion-header" id={uniqueId}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#question-${uniqueId}`} aria-expanded="true">
                    {title}
                </button>
            </h3>

            <div id={`question-${uniqueId}`} className="accordion-collapse collapse show" data-bs-parent={`#${parentId}`}>
                <div className="accordion-body">
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div>
    );
};


export default SingleTopicAccordion;