import React,{Component} from "react";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibletodoList from "./containers/VisibleTodoList";

const  todoApp =  ()=>{
        return (
            <div>
                <AddTodo/>
                <VisibletodoList/>
                <Footer/>
            </div>
        )
    
}
export default todoApp;