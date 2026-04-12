function CourseItem(props) {
    // props.courseName = 'Python'; <- Error

    return (
        <li> { props.courseName } </li>
    )
}

export default CourseItem;