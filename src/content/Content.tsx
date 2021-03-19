import Cover from "./cover/Cover";
import './Content.scss'

export default function Content() {
    return (
        <div className="content">
            <div className='side-joke'>

            </div>

            <div className="info">
                <Cover></Cover>
            </div>

            <div className='side-joke'></div>
        </div>
    );
}