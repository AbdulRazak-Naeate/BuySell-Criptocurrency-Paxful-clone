
import  './Dialog.css';

const STYLES =['primary','secondary'];


const Dialog = ({Content,onMouseLeave,dialogStyle,width,height,id}) => {

    const checkDialogStyle=STYLES.includes(dialogStyle)?dialogStyle:STYLES[0];

 
  return (
    <div>
      <div className={`nts-dialog ${checkDialogStyle}`} id={id}   style={{width:`${width}`,height:`${height}`}}/>
          
      
    </div>
  )
}

export default Dialog
