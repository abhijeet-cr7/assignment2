import './App.css';
import {CgMenu, CgSearch, CgPhone, CgAdd} from 'react-icons/cg';
import {FaHome,FaCompass, FaHeadphones} from 'react-icons/fa';
import Radium , { StyleRoot } from 'radium';
import {useState} from 'react';
function App() {

 const [bool, setbool] = useState(true);
 const handleColorChange = (val) => {
  if(val===true)
  {
  setbool((bool) => bool=val);
  console.log('attendance');
  }
  else 
  {
  setbool((bool) => bool=val);
  console.log('subscription');
  }
 }
 const [bordercolor,setbordercolor] = useState('choice1');
 const borderColor = (val2) => {
   if(val2===1)
   {
   setbordercolor((borderColor) => borderColor="choice1");
   console.log('home');
   }
   else if(val2===2)
   {
    setbordercolor((borderColor) => borderColor="choice2"); 
   console.log('explore'); 
  }
   else if(val2===3)
   {
    setbordercolor((borderColor) => borderColor="choice3"); 
   console.log('support'); 
  }
 }

 const btnclk = (val3) => {
 if(val3==='renew')
 {
 console.log('renew');
 }
 else if(val3 === 'cancel'){
 console.log('cancel');
 }
 }
  return (
    <StyleRoot>
    <div className="App">
    <div className="container">
    <header className="nav">
    <CgMenu style={{margin : "35px 0px  0px 25px", color : "white", transform : "scale(1.85)" }} />
    <span style ={styles.hText}><b>ChefKart</b></span>
    <b><CgSearch className= "search" /></b>
    <div style= {styles.headerBtns}>
    <span style={styles.attendance} onClick = {() => handleColorChange(true)}><b>ATTENDANCE</b></span>
    <span style={styles.subscriptions} onClick={() => handleColorChange(false)}><b>SUBSCRIPTIONS</b></span>
    <div className = {`${bool ? "left": "right"}`}>
    </div>
    </div>
    </header>
    <h3 style ={{marginLeft : "5%", textAlign : "center"}}>My Subscriptions</h3>
    <div style={styles.maincontainer}> 
    <div style={styles.maindiv}>
    <div style= {styles.upperdiv}>
    <div style={styles.premium}><div style={styles.prmtxt}><p className="prm">Premium</p></div></div>
    <div style={{marginTop: "7%", height : "90%"}}>
    <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/6/20/w900X450/Kitchen_Kids.jpg" style={styles.img}></img>
    <span className="name">Nazma Biwi &nbsp; <span style={{borderRadius : "50%"}}>✅</span></span>
    <span style= {{display : 'flex', marginLeft : "20%", flexDirection : "row", position: "absolute",     transform: "translate(0.3em,-2.5em)"}}>
    <CgPhone style={{transform : "scale(0.75)", color: "orange", marginLeft: "8%", marginTop : "22%"}} />
    <span style={{fontSize : "0.5em", marginTop : "7.25%"}}>&nbsp; 7836097431</span>
    </span>
    </div>
    </div>
    <div style={styles.lowerdiv}>
    <div style={{height : "2px", width : "80%",backgroundColor: "silver", marginLeft: "10%"}}></div>
    <h5 style={{marginLeft: "12%"}}>Subscription details</h5>
    <div style={styles.datecont}>
    <div style={{marginLeft : "5%", fontSize : "12px", lineHeight: "12px"}}>Start<div style={{marginTop : "5%"}}><b>12 Apr 2021</b></div></div>
    <div style={{marginLeft : "15%",marginRight : "7%",fontSize : "12px", lineHeight : "12px"}}>Expire<div style={{marginTop : "4%"}} ><b>12 May 2021</b></div></div>
    </div>
    <div className= "btn-container">
    <div onClick = {() => btnclk('cancel')}>Cancel plan</div>
    <div onClick = {() => btnclk('renew')}>Renew Plan</div>
    </div>
    </div>
    </div>
    </div>
    <div className= "add-btncnt">
    <CgAdd className= "add-btn"/> 
    </div>
    <div className="footer-btns">
    <div className={`${bordercolor}`}></div>
    <div style={{marginLeft: "2%"}}>  
    <FaHome style={{transform : 'scale(2)', color: 'grey', marginLeft: "10%"}} onClick={() => borderColor(1)} />
    <div style={{transform : 'translateX(-10px)',color: "grey" }}>Home</div>
    </div>
    <div style={{marginLeft: "11%"}}>
    <FaCompass style={{transform : 'scale(2)',color: 'grey', marginLeft: "3%"}} onClick={() => borderColor(2)} />
    <div style={{transform : 'translateX(-15px)',color: "grey" }}>Explore</div>
    </div>
    <div style={{marginLeft: "5%"}}>
    <FaHeadphones style={{transform : 'scale(2)',color: 'grey', marginLeft: "10%"}} onClick={() => borderColor(3)} />
    <div style={{transform : 'translateX(-20px)', color: "grey" }}>Suppport</div>
    </div>
    </div>
    </div>
    </div>
    </StyleRoot>
  );
}

const styles = {
  hText : {
    marginLeft : "7%",
    color : "white",
    fontSize : "20px"
  },
  headerBtns : {
    display : "flex",
    flexDirection : "row",
    marginTop : "36px",
    justifyContent : "space-around",
    color : "white",
    fontSize : "14px",
    // paddingBottom : "10px",
  },
  attendance : {
    // paddingBottom : "20px",
    width : "50%",
    textAlign : "center",
    // borderBottom : "3px solid lightGrey",
    height : "inherit",
    marginTop :'3%',
    position : "absolute",
    marginRight : "50%"
  },
  subscriptions : {
    width : "50%",
    textAlign : "center",
    height : "inherit",
    marginTop :'3%',
    position : "absolute",
    marginLeft : "50%"
  },
  maincontainer : {
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    width: "100vw",
    height : "90vw",
  }, 
  maindiv : {
   height : "90%",
   width : "60%",
   boxShadow : "0px 0px 20px 10px #F5F5F5",
   display : "flex",
   flexDirection : "column"
  },
  upperdiv : {
    height : "45%",
    width : "100%",
  },
  lowerdiv : {
    height : "55%",
    width : "100%",
  },
  premium : {
    width : "100%",
    height : "15%",
    backgroundColor : "white",
    marginTop : "5%",
    display : "flex",
    flexDirection : "row-reverse"
  },
  prmtxt : {
    margin : "0px !important",
    height : "100%",
    width : "30%",
    backgroundColor : "orange",
    borderRadius : "15px 0px 0px 15px",
    color : "white",
    textAlign : "center",
    fontSize : "9px",
  },
  img : {
    height : "35%",
    width : "18%",
    borderRadius : "45%",
    marginLeft : "12%",
    border : "1px solid grey"
  },
  datecont : {
   display : "flex",
   flexDirection : "row",
   alignItems : "flex-start",
   justifyContent : "space-around"
  }
  }


export default Radium(App);