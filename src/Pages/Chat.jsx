import Active from "../Components/Active";
import Footer from "../Components/Footer";
import SideMenu from "../Components/SideMenu";
import react from "../assets/react.svg";
import { AiOutlineSend } from "react-icons/ai";
import io from "socket.io-client";
import { Backend } from "../server";
import { useEffect } from "react";
const socket = io.connect(Backend);

const Chat = () => {
  const sendMessage = () => {
    socket.emit("send_message",{
      message:"Hello"
    });
  };
  useEffect(() => {
   socket.on("receive_message",(data)=>{
    alert(data.message)
   })
  }, [socket])
  
  return (
    <>
      <div className="Chat">
        <SideMenu />
        <div className="Chat-Messages">
          <div className="head-bar">
            <img src={react} alt="An Image Of User" />
            <div className="active-timeline">
              <h4 className="user-name">John Doe</h4>
              <h5 className="last-active">Active Now</h5>
            </div>
          </div>

          <div className="message-body">
            <div className="prev-message-wrapper">
              <div className="user-one">
                <h4 className="user-name">John Doe</h4>
                <p className="prev-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ex molestias quod expedita nostrum. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Deleniti ex molestias
                  quod expedita nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Deleniti ex molestias quod expedita nostrum
                </p>
              </div>
            </div>
          </div>
          <div className="send-message">
            <input
              type="text"
              name="message"
              placeholder="Message"
              id="message"
            />
            <AiOutlineSend onClick={sendMessage} id="send-icon" />
          </div>
        </div>
        <Active />
      </div>
      <Footer />
    </>
  );
};

export default Chat;
