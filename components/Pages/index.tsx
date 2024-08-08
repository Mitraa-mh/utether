import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { url } from 'inspector';



export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"
  


  return (
    <div style={{ direction: "rtl", minHeight: "11vh",backgroundColor:"#C4ABB7",height:655,}}>
    
    
      <br-x />
      <br-x />
      <br-x />
      <br-x />
      
      <Window title={" قیمت لحظه ای تتر (دلار)/The current price of Tether(Dollar)"} style={{ minHeight: 450,backgroundColor:"#BEF3C6", margin: 3, width: "calc(100% - 5px)" }}>
        <div style={{width:"100%" , height:200, backgroundColor:"#73C47E" , borderRadius:20
          ,textAlign:"left" ,padding:40, 
        
        }}>
          
        
          
        Current Price: {props.p.price}

        <br-x/>
        <br-xx/>
        
        Daily changes(24hours) :{(props.p.diff24d as number).toLocaleString("en-USA")}% 

        <br-x/>
        <br-xx/>
        
        Weekly changes :{(props.p.diff7d as number).toLocaleString("en-USA")}% 

        <br-x/>
        <br-xx/>
        
       Monthly changes :{(props.p.diff30d as number).toLocaleString("en-USA")}% 

        </div>
        <br-xx/>

        <div style={{width:"100%" , height:200, backgroundColor:"#68AA70" , borderRadius:20
          ,textAlign:"right" ,padding:60 , textDecorationColor:"#740843"

        }}>
          قیمت لحظه ای: {(props.p.price as number).toLocaleString("fa-IR")}

          <br-x/>
          <br-xx/>

         تغییرات ۲۴ ساعته: ٪{(parseFloat(props.p.diff24d) as number).toLocaleString("fa-IR")}

          <br-x/>
          <br-xx/>

         تغییرات هفتگی: ٪{(parseFloat(props.p.diff7d) as number).toLocaleString("fa-IR")}

          <br-x/>
          <br-xx/>

         تغییرات ماهیانه: ٪{(parseFloat(props.p.diff30d) as number).toLocaleString("fa-IR")}


        </div>
        <br-x/>
        <br-x/>
        <center style={{fontSize:11}}>
        تهیه شده توسط تیم پژوهشی kepler
        </center>
        <br-x/>
        

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT

    console.log("priceeeeeeeeeeee:", p)
  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}