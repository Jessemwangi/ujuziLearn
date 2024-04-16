import React from 'react';

const SingleAccordion = ({ show = false, id, title, desc }) => {
    return (
        <div className="accordion-item">
            <h5 className="accordion-header" id="headingOne">
                <button className={`accordion-button ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#question-${id}`} aria-expanded={show ? 'true' : 'false'}>
                    {title}
                </button>
            </h5>

            <div id={`question-${id}`} className={`accordion-collapse collapse ${show?'show':''}`} data-bs-parent="#faq-accordion">
                <div className="accordion-body">
                    <div className="course-lesson">
                        <ul>
                            {desc.map((list, i) => (
                                <li key={i}>
                                    {list.title && 
                                        <div className="text">
                                            <i className="icon-65"></i>
                                            {list.title}
                                        </div>
                                    }
                                    {!list?.badge_list && 
                                        <div className="icon">
                                            <i className={list?.icon}></i>
                                        </div>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleAccordion;