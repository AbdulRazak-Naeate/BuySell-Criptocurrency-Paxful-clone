import {Dialog} from 'primereact/dialog'
import {Icon } from 'rsuite';

const TokenItem=({tokenItem,displayBasic,dialogFuncMap}) =>{

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
    
    return(
        <Dialog className="showbuysell-tokens-dialog" visible={displayBasic}   onHide={() => onHide('displayBasic')}  position={'top-left'} >
        <div className="dialog-container">
            <div className="token-item"> 
              <img className="dialog-item-image" alt="token-item-img" src={tokenItem.icon}/>
              <div className="item-info">
                  <p className="token-buy-title">{tokenItem.title}</p> 
                  <p className="token-buy-label">{tokenItem.label}</p>
              </div>
              <div className="btn--buysell" ><Icon className="btn--buysell-icon" icon="chevron-right"/></div>
              </div>
          
        </div>
     </Dialog>
    )
}
export default TokenItem;