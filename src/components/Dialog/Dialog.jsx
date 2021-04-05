
import  './Dialog.css';

export default function Dialog({children,dialogStyle,id,display}){
  
  
   console.log(display);
  const onMouseLeave = () =>{
      //alert(id);
    document.getElementById(`${id}`).style.display='none';
    
    
}
     const STYLES=['primary','secondary'];
     const checkStyles=STYLES.includes(dialogStyle)? dialogStyle:STYLES[0];
    // const checkDisplay=display ? 'showDialog':'hideDialog';
       console.log(dialogStyle); 
   
           
  return (
    
      <div>
        
      <div className={`nts-dialog ${checkStyles}`} onMouseLeave={onMouseLeave}  id={`${id}`} style={{display:display ? 'none':'block'}} >
          {children}
      
      </div>

      </div>
  )
}

