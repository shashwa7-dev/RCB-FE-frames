import './MainScreen.css'
import logo from '../../static/logo.svg'
import rcb_logo from '../../static/rcb_logo.svg'
import data from '../../data/rcb_players.json'
import { Navbar } from '../../Components/Navbar/Navbar'


const InputFldWithBtn = () =>{
    return(
        <div class='inputFl_container'>
            <input placeholder='Verify Email'/> 
            <button>Send OTP</button>
        </div>
    )
}
export const MainScreen = () => {
    return (
        <div className="Mainscreen">
                <Navbar />
                <div className='content_container'>
                <div className='main_nft_display'>
                    <video src={data[0].vid_url} autoPlay loop muted playsInline></video>
                </div>

                <div className='main_content'>
                <img src={rcb_logo} alt="" className="logo_content" />
                    <h1>Get a chance to win a 
    RCB NFT Card</h1>
                    <p>
                    some more information about the giveaway some more information about the giveaway 
                    </p>  
                    <InputFldWithBtn />
                </div>
                </div>
        </div>
    )
}
