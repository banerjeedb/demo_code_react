

function Form() {


  return (
    <div>
    <form>
          <label>User Id</label>
             <input type="text" id="userid" placeholder="Enter User Id.." value={ e=> e.target.value}/>
          <label>Id</label>
             <input type="text" id="id" placeholder="Enter Id.." value={e=> e.target.value}/>
          <label>Title</label>
               <input type="text" id="title" placeholder="Enter Title.." value={e=> e.target.value}/>
          <label>Body</label>
               <input type="text" id="body" value={e=> e.target.value}/>
     </form>
    </div>

  );



}

export default Form;
