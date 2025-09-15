
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
          {course_learn_lists?.map(({ learn_list_name, id }) => (
            <li key={id}>{learn_list_name}</li>
          ))}
        </ul>
        {short_desc_3 && <p>{short_desc_3}</p>}
        
        <h3 className="heading-title">Requirements</h3>
        <ul className="mb--90">
          {course_qualification_equirements?.map(({ id, qualification_name }) => (
            <li key={id}>{qualification_name}</li>
          ))}
        </ul>

        <h3 className="heading-title">Target Audience</h3>
        <ul className="mb--90">
          {course_target_groups?.map(({ id, target_group_name }) => (
            <li key={id}>{target_group_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseOverview;
