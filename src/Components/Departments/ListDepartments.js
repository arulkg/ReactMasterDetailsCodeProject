import React, { useState} from "react";
import AddDepartment from "./AddDepartment";
import EditDepartment from "./EditDepartment";
import { Button, Form } from "semantic-ui-react";

const ListDepartment = (props)=> {
    const [isEditDepartment, setisEditDepartment] = useState(false);
    const [isAddDepartment, setisAddDepartment] = useState(false);

    function addClick()
    {
        setisAddDepartment(true);
        setisEditDepartment(false);
    }
    function editClick()
    {
        setisAddDepartment(false);
        setisEditDepartment(true);
    }
    return (
        <>
        <Button type="submit" onClick={addClick}>Add Department</Button>
        <Button type="submit" onClick={editClick}>Edit Department</Button>
            <h1>List Department Page</h1>
            {isAddDepartment && <AddDepartment/>}
            {isEditDepartment && <EditDepartment/>}
        </>
    );
}
export default ListDepartment;