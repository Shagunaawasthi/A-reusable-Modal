import React, { Component,Fragment} from 'react';
import Toggle from './toggle';
import Portal from './portal';
import Modal from './modal.js'

class App extends Component{
  render(){
    return(
    <div>
     
      <Toggle >
      {({on ,toggle})=>(
        <Fragment>
          <button onClick={toggle}  >Login</button>
         <Modal on={on} toggle={toggle }>
         <h1>Still </h1>
         </Modal>
         </Fragment>
       
       
      )}
       </Toggle>
    
    </div>
    );
  } 
}

export default App;


    
