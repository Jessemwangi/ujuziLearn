
const CourseOverview = ({ course }) => {
  const { short_desc, short_desc_2, short_desc_3, course_learn_lists, course_qualification_equirements, course_target_groups } = course;

  return (
    <div className="course-tab-content">
      <div className="course-overview">
        <h3 className="heading-title">Course Description</h3>
        <p>{short_desc}</p>
        {short_desc_2 && <p className="mb--60">{short_desc_2}</p>}
        <h5 className="title">What You’ll Learn?</h5>
        <ul className="mb--60">
          {course_learn_lists?.data?.map(({ attributes, id }) => (
            <li key={id}>{attributes?.learn_list_name}</li>
          ))}
        </ul>
        {short_desc_3 && <p>{short_desc_3}</p>}
        
        <h3 className="heading-title">Requirements</h3>
        <ul className="mb--90">
          {course_qualification_equirements?.data?.map(({ id, attributes }) => (
            <li key={id}>{attributes?.qualification_name}</li>
          ))}
        </ul>

        <h3 className="heading-title">Target Audience</h3>
        <ul className="mb--90">
          {course_target_groups?.data?.map(({ id, attributes }) => (
            <li key={id}>{attributes?.target_group_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseOverview;
