import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { StyledProfile } from "../components/styles/Profile.styled";
import { useState, useEffect } from "react";
import axios from "axios";
import MessagePreview from "../components/MessagePreview";
import giveLogo from "../assets/give-sm.png";
import { StyledButton } from "../components/styles/Button.styled";

const Profile = ({ authUser }) => {
  const [inboundMessages, setInboundMessages] = useState([]); // messagesRecieved
  const [outboundMessages, setOutboundMessages] = useState([]); // messagesSent
  const [profileImg, setImg] = useState();

  useEffect(function initAnim() {
    getMessages();
  }, []);

  useEffect(function initAnim() {}, [inboundMessages]);

  useEffect(function initProfilePic() {
    // getProfilePic();
  }, []);

  const getProfilePic = async () => {
    const imageUrl = "/api/images/headshot.jpg";
    const res = await axios.get(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  async function getMessages() {
    try {
      let response = await axios.get("/api/messages/");
      console.log(response.data)
      setOutboundMessages(
        response.data.filter((message) => message.isOutbound)
      );
      setInboundMessages(
        response.data.filter((message) => !message.isOutbound)
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledProfile>
      <div className="content flex">
        <div className="profile-info-container flex">
          <div className="profile-photo-container flex">
            <div>
              <img
                className="profile-photo"
                src={giveLogo} // src={profileImg}
                alt="profile photo"
              />
            </div>
          </div>

          <div className="profile-info flex">
            <div className="flex flex-wrap">
              <div className="flex">
                <p className="field-title text-gray">first:</p>
                <p>{authUser.firstName ?? "N/A"}</p>
              </div>

              <div className="flex">
                <p className="field-title text-gray">last:</p>
                <p>{authUser.lastName ?? "N/A"}</p>
              </div>

              <div className="flex">
                <p className="field-title text-gray">username:</p>
                <p>{authUser.username ?? "N/A"}</p>
              </div>
            </div>
          </div>
        </div>

        <Tabs
          defaultActiveKey="delivered"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="delivered" title="delivered">
            {!authUser.username && (
              <div className="flex flex-justify-center">
                <a href="./login">
                  <StyledButton>
                    <p style={{ marginBottom: 0 }}>login</p>
                  </StyledButton>
                </a>
              </div>
            )}

            {authUser.username && (
              <div className="grid-container">
                {outboundMessages.map(function (message) {
                  return (
                    <MessagePreview
                      className="grid-item"
                      messageInput={message}
                      key={message._id}
                    />
                  );
                })}
              </div>
            )}
          </Tab>
          <Tab eventKey="received" title="received">
            {!authUser.username && (
              <div className="flex flex-justify-center">
                <a href="./login">
                  <StyledButton>
                    <p style={{ marginBottom: 0 }}>login</p>
                  </StyledButton>
                </a>
              </div>
            )}

            {authUser.username && (
              <div className="grid-container">
                {inboundMessages.map(function (message) {
                  return (
                    <MessagePreview
                      className="grid-item"
                      messageInput={message}
                      key={message._id}
                    />
                  );
                })}
              </div>
            )}
          </Tab>
        </Tabs>
      </div>
    </StyledProfile>
  );
};

export default Profile;
