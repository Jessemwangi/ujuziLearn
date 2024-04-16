import React, { useState } from 'react';
import SingleTopicAccordion from './SingleTopicAccordion';

const HeaderContentAccordion = ({ id, title, headers }) => {
    // Generate a unique id for the HeaderContentAccordion
    const uniqueId = `header-${id}`;
    const [openAccordion, setOpenAccordion] = useState(id === 0 ? uniqueId : null);


    return (
        <div className="accordion-item">
        <h3 className="accordion-header" id={uniqueId}>
            <button 
                className="accordion-button" 
                type="button" 
                onClick={() => setOpenAccordion(openAccordion === uniqueId ? null : uniqueId)}
                data-bs-toggle="collapse" 
                data-bs-target={`#header-${uniqueId}`} 
                aria-expanded={openAccordion === uniqueId ? 'true' : 'false'}
            >
                {title}
            </button>
        </h3>

        <div 
            id={`header-${uniqueId}`} 
            className={`accordion-collapse collapse ${openAccordion === uniqueId ? 'show' : ''}`} 
            data-bs-parent="#lessonListAccordion"
        >
            <div className="accordion-body">
                <ul>
                    {headers.map((header, index) => (
                        <li key={index}>
                            <SingleTopicAccordion 
                                title={header.title}
                                content={header.content}
                                parentId={uniqueId}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
};


export default HeaderContentAccordion;