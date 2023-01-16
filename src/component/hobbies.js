import React from "react";
class Hobbies extends React.Component{
    render(){
        const array=[
            <p> singing</p>,
            <p> reading novels</p>,
            <p> learning new things</p>
        ];
        return (
            <div>
                {array}
            </div>
        );
    }
}
export default Hobbies