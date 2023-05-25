import { Fragment, useState } from "react";
import "./About.css";


const About = () =>{
    const [toggleTab, setToggleTab] = useState()
    const toggleState = (index) =>{
        setToggleTab(index)
    }
    return(
        <Fragment>
            <section className="about">
                <div className="row">
                    <div className="column">
                        <div className="about-img"></div>
                    </div>
                    <div className="column">
                        <div className="tabs">
                            <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"} onClick={() => toggleState(1)}>
                                <h2>About</h2>
                            </div>
                            <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"} onClick={() => toggleState(2)}>
                                <h2>Advantages</h2>
                            </div>
                            <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"} onClick={() => toggleState(3)}>
                                <h2>Contact</h2>
                            </div>
                        </div>
                        <div className="tab-content">

                           <div className={toggleTab === 1 ?"content active-content":"content"}>
                                <h2>Chat App</h2>
                                <p>Chatting app allows you to communicate with your customers in web chat rooms. It enables you to send and receive messages. 
                                    Chatting apps make it easier, simpler, and faster to connect with everyone and it is also easy to use. There are many types of chatting apps and every one has its own format, design, and functions. A great example here is the Viber text messaging app. </p>


                            </div> 
                            <div className={toggleTab === 2 ?"content active-content":"content"}>
                                <h2>Benefits</h2>
                                <p>Messaging apps have made communication more interesting than any other regular chat service.  They make us feel more connected to others, both personally and professionally on a daily basis. For example, chat apps like WhatsApp or messenger can deliver a meme or message from a friend that can truly make our day.</p>

                            </div>
                           <div className={toggleTab === 3 ?"content active-content":"content"}>
                                
                                    <h2>Contact us</h2>
                                    <p>info@chatapp.com</p>
                                    <p>+385 555 555</p>


                                
                            </div>  
                        </div>
                    </div>

                
                </div>
            </section>
        </Fragment>
    )

    
}
export default About;