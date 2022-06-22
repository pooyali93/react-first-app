import Card from './Card';
import  './ModuleItem.css';
import { FaRegCheckCircle } from "react-icons/fa";

function ModuleItem(props) {
    return (
    <li className="item">
        <Card>
        <div className="image">
            <img src={props.ModuleImage} alt={props.ModuleName} />
        </div>
        <div className="content">
            <h4>{props.ModuleName}</h4>
            <h5>({props.ModuleCode})</h5>
            <p>Level {props.ModuleLevel}</p>
        </div>

        <div className="actions">
            <button>{FaRegCheckCircle}</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        </Card>
    </li>
    )

}


export default ModuleItem;