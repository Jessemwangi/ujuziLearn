import React from 'react';
import { lessons } from '../../../components/common/sidebar/course-details-sidebar-no-start-button';
import HeaderContentAccordion from './headerContentAccordion';

const LessonListsAccordion = ({}) => {
    return (
        <div className="accordion-item">
        {lessons?.map((lesson, index) => (
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