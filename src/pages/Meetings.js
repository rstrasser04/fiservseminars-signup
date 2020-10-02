import React, { Fragment } from 'react';
import Sidenav from "../components/SideNav";
import Chat from '../components/Chat/Chat';
// import LiveVideo from '../components/LiveVideos/LiveVideo'
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import Notes from '../components/Notes'
import { Header  } from 'semantic-ui-react'

const Meetings = () => (
  <Fragment>
    <div className="next-steps my-5 content-wrapper">
      <Sidenav />
      <div className="main-content">
        <div className="meetings-container">
          <Header as='h2' className="header page-title meetings">
            <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Learning Sessions
          </Header>
          <div className="meetings-sections">
            <section className='left meetings'>
              <div className='meeting-video'>
                <h1>Video</h1>
                  {/* <LiveVideo/> */}
              </div>
              <div className='chat'>
                <Notes />
              </div>
            </section>
            <section className="right meetings">
            <h1>Chat</h1>
                <Chat />
            </section>
          </div>
          
        </div>
          
      </div>
    </div>
  </Fragment>
);

export default withAuthenticationRequired(Meetings, {
  onRedirecting: () => <Loading />,
});