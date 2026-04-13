import './CourseItem.css';
import Card from '../ui/card/Card';

function CourseItem(props) {

    return (
        <li>
            <Card>
                 { props.courseName }
            </Card>
        </li>
    )
}

export default CourseItem;