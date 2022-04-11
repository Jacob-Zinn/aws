import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { StyledProfile } from "../components/styles/Profile.styled";
import { useState, useEffect } from "react";
import axios from "axios";
import MessagePreview from "../components/MessagePreview";

const Profile = () => {
  const [inboundMessages, setInboundMessages] = useState([]);
  const [outboundMessages, setOutboundMessages] = useState([]);
  const [inboundRows, setInboundRows] = useState([]);
  const [outboundRows, setOutboundRows] = useState([]);
  const [profileImg, setImg] = useState();

  useEffect(function initAnim() {
    getMessages();
  }, []);

  useEffect(function initAnim() {}, [inboundMessages]);

  useEffect(function initProfilePic() {
    // getProfilePic();
  }, []);

  useEffect(
    function filterOutboundMessages() {
      let rows = [];
      outboundMessages.forEach((message) => {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        console.log(message);
        rows.push(<MessagePreview key={message._id} messageInput={message} />);
      });
      setOutboundRows(rows);
    },
    [outboundMessages]
  );

  const getProfilePic = async () => {
    const imageUrl = "/api/images/headshot.jpg";
    const res = await axios.get(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  async function getMessages() {
    try {
      let response = await axios.get("/api/messages");
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

  function testing() {}

  return (
    <StyledProfile>
      <h1
        onClick={() => {
          testing();
        }}
      >
        testing
      </h1>

      <div className="content flex">
        <div className="profile-info-container flex">
          <div className="profile-photo-container flex">
            <div>
              <img
                className="profile-photo"
                src={profileImg}
                alt="profile photo"
              />
            </div>
          </div>

          <div className="profile-info flex">
            <div className="flex flex-wrap">
              <div className="flex">
                <p className="field-title text-gray">first name:</p>
                <p>Jacob</p>
              </div>

              <div className="flex">
                <p className="field-title text-gray">last name:</p>
                <p>Zinn</p>
              </div>

              <div className="flex">
                <p className="field-title text-gray">email:</p>
                <p>test@gmail.com</p>
              </div>
            </div>
          </div>
        </div>


        <Tabs
          defaultActiveKey="delivered"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab  eventKey="delivered" title="delivered">
          <div className='grid-container'>
              {outboundMessages.map(function (message) {
                return (
                  <MessagePreview  className="grid-item" messageInput={message} key={message._id} />
                );
              })}
            </div>
          </Tab>
          <Tab eventKey="received" title="received">
            <div className='grid-container'>
              {inboundMessages.map(function (message) {
                return (
                  <MessagePreview  className="grid-item" messageInput={message} key={message._id} />
                );
              })}
            </div>
          </Tab>
        </Tabs>

</div>
    </StyledProfile>
  );
};

export default Profile;
