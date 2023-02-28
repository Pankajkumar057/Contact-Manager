import React from "react"

function DeleteUi(props){
    const [dlt, setDelete] = useState(false);
    const url = process.env.REACT_APP_API;

    const { deleteVisible, setDltvisible } = props;
    const { renderOnce, setRenderOnce } = props;
    const { data, setData } = props;

const deleteCall=async()=>{

    
}

    return(
        <div>

        </div>
    )
}
export default DeleteUi