import { Button, Form } from "semantic-ui-react";
import React, {useState} from "react";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const ListEmployee = (props)=> {
    const [isAddEmployee,setisAddEmployee] = useState(false);
    const [isEditEmployee,setisEditEmployee] = useState(false);

    function addClick(e){
        setisAddEmployee(true);
        setisEditEmployee(false);
    }
    function editClick(e){
        setisEditEmployee(true);
        setisAddEmployee(false);
    }
    return(
        <>
        <div>
            <Button type="submit" onClick={addClick}>Add Employee </Button> 
            <Button type="submit" onClick={editClick}>Edit Employee </Button>
        </div>
            <h1>List Employee Page</h1>
            {isAddEmployee && <AddEmployee isAddEmployee={isAddEmployee}/>} 
            {isEditEmployee && <EditEmployee isEditEmployee={isEditEmployee}/>}
        </>
    );
}
export default ListEmployee;
