import axios from 'axios';
import {useEffect, useState} from 'react';
import Form from './Form';
import {useDispatch, useSelector} from 'react-redux';

function ListPosts(props){
    const[enableEdit, setEnableEdit] = useState(false);
    const dispatch = useDispatch();
    const {toEditVal} = useSelector(state=>state);
    console.log(props);


     const editPost = () => {
        setEnableEdit(true);

     }
     const deletePost = () => {
         setEnableEdit(true);
     }

        return (
             <div className="ListPosts">
               {!props.isVisible  &&
            <table className="table">
                    <th> USER ID </th>
                    <th> ID </th>
                    <th> TITLE </th>
                    <th> BODY  </th>
             {props.response && props.response.map((post, index)=>
                   <tr><td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    <button onClick={editPost}>Edit</button>
                    <button onClick={deletePost}>Delete</button> </tr>
               )}
              </table>
        }
                 {enableEdit && <Form />}
              </div>
              );

        }
   export default ListPosts;