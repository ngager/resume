import * as React from 'react';
import './Header.scss';

class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="header">
            <img className="profile-image" data-html2canvas-ignore="true"/>
            <div className="flex column">
                <h1>Nicole Gager</h1>
                <h3>Software Developer</h3>
                <span>Frontend SME</span>
            </div>
        </div>;
    }
}

export default Header;
