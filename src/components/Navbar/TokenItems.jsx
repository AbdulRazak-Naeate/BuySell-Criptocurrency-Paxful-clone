import TokenItem from './TokenItem';

const TokenItems = ({tokenList, displayBasic,dialogFuncMap}) =>{

    return(
        <>
          {Object.keys(tokenList).map((item,index )=> {

             <TokenItem key={index} tokenItem={item}  displayBasic={displayBasic} dialogFuncMap={dialogFuncMap}/> 
            return false;
          })
         }
        </>
    )
}
export default TokenItems