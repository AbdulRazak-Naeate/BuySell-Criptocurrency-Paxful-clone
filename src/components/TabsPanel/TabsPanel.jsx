import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import './TabsPanel.css'
import {Button} from '../Button/Button'
import btcIcon from '../../bitcoin_icon.png'
import piIcon from '../../pi-icon.png'
import tetherIcon from '../../tether-icon.jpg'
import ethereumIcon from '../../ethereum-icon-purple.png'
const TabsPanel = () => {
    return (
        <Tabs
          defaultTab="one"
          onChange={(tabId) => { console.log(tabId) }}
        >
          <TabList>
            <Tab tabFor="one">Buy</Tab>
            <Tab tabFor="two">Sell</Tab>
            
          </TabList>
          <TabPanel tabId="one">
            <div className="form--container">
              <p>Cryptocurrency</p>
              <div className="btns--container" >
              
                <Button className="btns" buttonSize="btn--small" buttonStyle="btn--select-token-outline"
                icon={btcIcon}
                >
                 Bitcoin
                </Button>

                <Button className="btns" buttonSize="btn--small" buttonStyle="btn--select-token-outline"
                icon={tetherIcon}>
                 Tether
                </Button>
                <Button className="btns"
                buttonSize="btn--small"
                buttonStyle="btn--select-token-outline"
                icon={ethereumIcon}>Ethereum</Button>

                <Button className="btns" buttonSize="btn--small" buttonStyle="btn--select-token-outline"
                icon={piIcon}>
                  Picoin
                </Button>
              </div>
              <p className="token--current-market-price"><i class="fal fa-info-circle"></i> 1 BTC = $57,883.72</p>

              <form action="" className="payment-buy-amount-form">
              <label htmlFor="payment--method">Payment Method  </label><br/>
                <div className="form--input--wrapper">
                <input type="text" className="input-payment--method" placeholder="All Payment Methods"/>
                </div>

                <label htmlFor="payment--amount">You Pay  </label><br/>
                <div className="form--input--wrapper">
                <input type="text" className="input-payment--amount" placeholder="Any Amount"/>
                <Button className="btns" buttonSize="btn medim" buttonStyle="btn--primary">any Currency</Button>
                </div>
              </form>
            </div>
          </TabPanel>
          <TabPanel tabId="two">
          <div className="form--container">
               <p>Tab 2 content</p>
          </div>
          </TabPanel>
      
        </Tabs>
      );
}

export default TabsPanel
