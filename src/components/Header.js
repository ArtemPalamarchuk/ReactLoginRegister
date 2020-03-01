import React, {Component} from 'react'

class Header extends Component {

    render() {
        //console.log(this.props.active);
        return (
            <p>{this.props.formState}</p>
        )
    }
}

export default Header;