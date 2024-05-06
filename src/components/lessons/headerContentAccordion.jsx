import React, { useState } from 'react';
import SingleTopicAccordion from './SingleTopicAccordion';

const HeaderContentAccordion = ({ serial, title, course_lessons }) => {
    // Generate a unique id for the HeaderContentAccordion
    const uniqueId = serial;
    const [openAccordion, setOpenAccordion] = useState(serial === 0 ? uniqueId : null);


    return (
        <div className="accordion-item">
        <h3 className="accordion-header" id={uniqueId}>
            <button 
                className="accordion-button collapsed" 
                type="button" 
                onClick={() => setOpenAccordion(openAccordion === uniqueId ? null : uniqueId)}
                data-bs-toggle="collapse" 
                data-bs-target={uniqueId} 
                aria-expanded={openAccordion === uniqueId ? 'true' : 'false'}
            >
                {title}
            </button>
        </h3>

        <div 
            id={uniqueId} 
            className={`accordion-collapse collapse ${openAccordion === uniqueId ? 'show' : ''}`} 
            data-bs-parent="#lessonListAccordion"
        >
            <div className="accordion-body">
                <ul>
                    {course_lessons?.data && course_lessons?.data.map(({attributes,id}) => (
                         <div className="text" key={attributes.curriculum_lesson_reg}> 


                            <SingleTopicAccordion 
                                title={attributes.curriculum_lesson_title}
                                content={attributes.curriculum_lesson_desc}
                                parentId={uniqueId}
                                id={id}
                                
                            />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
};


export default HeaderContentAccordion;