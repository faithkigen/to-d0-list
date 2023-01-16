import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ToDoList from "../component/toDoList";
import User from "../component/user";
import Hobbies from "../component/hobbies";

function Home() {
    return (
        <div>
            <Navbar/>
            <ToDoList/>
            <Footer/>
            <User/>
            <Hobbies/>
        </div>  
    
    );
}
export default Home