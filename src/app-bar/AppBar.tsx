import './AppBar.scss';

interface BarButtonProps {
    text: string;
}

function BarButton(props: BarButtonProps) {

    return (
        <div className='menu-text'>
            {props.text}
        </div>
    )
}

export default function MyAppBar() {
    return (
        <div className="app-bar">
            <div className="menu left">
                <BarButton text="Mateus Dutra Dadalto"></BarButton>

            </div>
            <div className="menu right">
                <BarButton text="About"></BarButton>
                <BarButton text="Contact"></BarButton>
                <BarButton text="Resume"></BarButton>
            </div>
        </div>
    );
}