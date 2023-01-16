import React from "react";

class User extends React.Component{
    render(){
    
        return(
            <div>
                   
                <form>
                    <lable for="fname" > FIRST NAME;</lable>
                    <input type= "text" name="fname" id= "fname"></input> 
                    <lable for="lname" > LAST NAME;</lable>
                    <input type= "text" name ="lname"id= "lname"></input> 
                    <lable for="email" > EMAIL;</lable>
                    <input type= "text" name ="email"id= "email"></input>
                </form>
            </div>
        );

    }
}
    export default User

        
    
