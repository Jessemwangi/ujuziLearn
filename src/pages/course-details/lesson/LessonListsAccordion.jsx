import React from 'react';
import HeaderContentAccordion from './headerContentAccordion';

const LessonListsAccordion = ({lessons}) => {
    return (
        <div className="accordion-item">
        {lessons && lessons.map((lesson, index) => (
            <HeaderContentAccordion 
                key={index}
                id={lesson.id}
                title={lesson.title}
                headers={lesson.headers}
            />
        ))}
    </div>
    );
};

export default LessonListsAccordion;