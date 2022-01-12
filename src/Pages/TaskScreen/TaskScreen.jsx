import './TaskScreen.css'
import rcb_logo from '../../static/rcb_logo.svg'
import logo from '../../static/logo.svg'
import {useState} from 'react'

export const TaskScreen = () => {
    const [taskCompleteA, setTaskCompleteA] = useState(false)
    const [taskCompleteB, setTaskCompleteB] = useState(false)
    const [taskCompleteC, setTaskCompleteC] = useState(false)
    const [taskCompleteD, setTaskCompleteD] = useState(false)
    const [taskCompleteE, setTaskCompleteE] = useState(false)

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
                    <a href="" className="submit_task" onClick={e => {e.preventDefault() 
                        setTaskCompleteA(true)}}>
                        {taskCompleteA ? <i class="fas fa-check"></i> : <span className='task_text one'>Subscribe</span>}
                    </a>
                    
                </div>
                <div className="task">
                    <a href="" className="task_name">Checkout RCB’s Website</a>
                    <a href="" className="submit_task" onClick={e => {e.preventDefault() 
                        setTaskCompleteB(true)}}>
                            {taskCompleteB ? <i class="fas fa-check"></i> : <span className='task_text two'>Subscribe</span>}
                    </a>
                </div>
                <div className="task">
                    <a href="" className="task_name">Follow RCB on Instagram</a>
                    <a href="" className="submit_task" onClick={e => {e.preventDefault() 
                        setTaskCompleteC(true)}}>
                            {taskCompleteC ? <i class="fas fa-check"></i> : <span className='task_text three'>Subscribe</span>}
                    </a>
                </div>
                <div className="task">
                    <a href="" className="task_name">Follow @RCBTweets on Twitter</a>
                    <a href="" className="submit_task" onClick={e => {e.preventDefault() 
                        setTaskCompleteD(true)}}>
                            {taskCompleteD ? <i class="fas fa-check"></i> : <span className='task_text four'>Subscribe</span>}
                        </a>
                </div>
                <div className="task">
                    <a href="" className="task_name">Retweet @RCBTweets on Twitter</a>
                    <a href="" className="submit_task" onClick={e => {e.preventDefault() 
                        setTaskCompleteE(true)}}>
                            {taskCompleteE ? <i class="fas fa-check"></i> : <span className='task_text five'>Subscribe</span>}
                        </a>
                </div>
                <a href="" className=" final_submit">Continue</a>
            </div>
        </div>
    )
}
