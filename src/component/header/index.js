import "./index.css";
import {getDate} from "../../utilitis/getDate";
export default function Component(children, date, className) {
    return (
       <div className="header">
        <div className="time">${getDate}</div>
        <div className="header__right">
            <div className="network">network</div>
            <div className="wifi">WiFi</div>
            <div className="battery">battery</div>
        </div>
       
       </div>
    );
}