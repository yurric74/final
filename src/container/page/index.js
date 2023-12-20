import "./index.css";
import Header from "../../component/header"
export default function Component({children}) {
    return (
        <div className="page">
            <Header/>
        </div>
    );
    
}