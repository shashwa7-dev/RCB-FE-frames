import './TaskScreen.css'
import rcb_logo from '../../static/rcb_logo.svg'
import logo from '../../static/logo.svg'
export const TaskScreen = () => {
    return (
        <div className="task_screen">
            <div className='dehidden_logo'>
                <img src={logo} alt="dehidden_logo" />
            </div>
            <div className="rcb_logo">
                <img src={rcb_logo} alt='rcb_logo' />
            </div>
            <div className="heading">
                <h1>Follow below steps to claim your NFT’s</h1>
            </div>
            <div className="task_container">
                <div className="task">
                    <a href="" className="task_name">Subscribe to RCB’s Newsletter</a>
                    <a href="" className="submit_task">Subscribe</a>
                </div>
                <div className="task">
                    <a href="" className="task_name">Checkout RCB’s Website</a>
                    <a href="" className="submit_task">Website</a>
                </div>
                <div className="task">
                    <a href="" className="task_name">Follow RCB on Instagram</a>
                    <a href="" className="submit_task">Follow</a>
                </div>
                <div className="task">
                    <a href="" className="task_name">Follow @RCBTweets on Twitter</a>
                    <a href="" className="submit_task">Follow</a>
                </div>
                <div className="task">
                    <a href="" className="task_name">Retweet @RCBTweets on Twitter</a>
                    <a href="" className="submit_task">Retweet</a>
                </div>
                <a href="" className=" final_submit">Continue</a>
            </div>
        </div>
    )
}
