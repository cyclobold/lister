import React from "react"

class Themer extends React.Component{


    constructor(props){
        super();

        this.props = props
    }

   


    render(){

        return (
            <div>
                <button onClick={() => this.props.changeTheme('dark')}>Dark Theme</button>
                <button onClick={() => this.props.changeTheme('danger')}>Danger Theme</button>
            </div>
        )

    }




}

export default Themer