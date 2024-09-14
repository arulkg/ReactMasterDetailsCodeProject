import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import ListEmployee from "./ListEmployees";
import { useState } from "react";
function DashboardEmployees(props){
    const [isAddEmployee,setisAddEmployee] = useState(false);
    const [isEditEmployee,setisEditEmployee] = useState(false);
    
    return(
        <>
            <EditEmployee isEditEmployee /> 
            <ListEmployee/>
        </>
    );

}
export default DashboardEmployees;