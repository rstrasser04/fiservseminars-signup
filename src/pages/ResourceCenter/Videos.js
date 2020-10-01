import React, { Fragment } from "react";
import { Card, Grid, Header, Image  } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import CustomSidenav from '../../components/SideNav'
import Abiliti from '../../components/Videos/Abiliti'
import IdeaPortal from "../../components/Videos/IdeaPortal";
import Contactless from "../../components/Videos/Contactless";
import Cloud from "../../components/Videos/Cloud";
import AI from "../../components/Videos/AI";

const Videos = () => (
    <Fragment>
        <div className="next-steps my-5 content-wrapper">
        <CustomSidenav />
        <div className="main-content">
            <Grid columns={2} padded>
                <Header as='h2' className="header page-title">
                    <i className='fa fa-fw fa-video' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Resource Center: OnDemand
                </Header>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <IdeaPortal/>
                            <Card className="video-cards">
                                <Card.Content>
                                    <div className="video-description">
                                        <Card.Header className="card-header">A New and Better Way to Submit Precision® Enhancement Ideas</Card.Header>
                                        <Card.Meta className="card-description">Fiserv is dedicated to delivering solutions that enhance the client experience and enable your financial institution to achieve best-in-class results. Identifying improvements that enable our client community to take advantage of market opportunities and solve business challenges is an integral part of our market-focused approach. We regularly collect ideas for system enhancements from numerous sources and conduct extensive review processes to uncover prevailing or changing trends.</Card.Meta>
                                    </div>
                                </Card.Content>
                            </Card>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Abiliti/>
                        <Card className="video-cards">
                            <Card.Content>
                                <div className="video-description">
                                    <Card.Header className="card-header">Abiliti</Card.Header>
                                    <Card.Meta className="card-description">Fiserv is dedicated to delivering solutions that enhance the client experience and enable your financial institution to achieve best-in-class results. Identifying improvements that enable our client community to take advantage of market opportunities and solve business challenges is an integral part of our market-focused approach. We regularly collect ideas for system enhancements from numerous sources and conduct extensive review processes to uncover prevailing or changing trends.</Card.Meta>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Contactless/>
                        <Card className="video-cards">
                            <Card.Content>
                                <div className="video-description">
                                <Card.Header className="card-header">Contactless Payment Cards</Card.Header>
                                <Card.Meta className="card-description">The pandemic shifted consumer demands toward contactless payments – up by 11% from 2019, according to new data from Fiserv – and many financial institutions are getting in on the action. Contactless cards offer reduced fraud, greater engagement, and an opportunity to increase transaction and payment volume as consumers migrate from cash. Explore strategic opportunities for financial institutions and why contactless cards have become a priority.</Card.Meta> 
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Cloud/>
                        <Card className="video-cards">
                            <Card.Content>
                                <div className="video-description">
                                <Card.Header className="card-header">Cloud</Card.Header>
                                <h3>Understanding the Important Steps to Cloud Readiness and Cloud Migration</h3>
                                <Card.Meta className="card-description">There are many important steps and considerations for any financial institution researching a move to the cloud. Learn how Fiserv can help you evaluate your current environment and data readiness for the cloud then take you through each step to migrate workloads and applications to the cloud. Understand how cloud technology can improve operational speed and performance, increase workload scalability as well as environmental security and stability. 
                                <ul>Key take-aways you'll get from this session:
                                    <li>The key steps for developing a cloud migration game plan</li>
                                    <li>The importance of a cloud readiness assessment</li>
                                    <li>Determining which cloud model is right for your organization</li>
                                    <li>Understanding what systems and applications to migrate to the cloud</li>
                                </ul>
                                </Card.Meta>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <AI/>
                        <Card className="video-cards">
                            <Card.Content>
                                <div className="video-description">
                                <Card.Header className="card-header">Demystifying AI: What Is It and How Will It Impact the Future?</Card.Header>
                                <Card.Meta className="card-description">Do consumers need to be experts at math, money and data to manage their personal finances well? No, but it may sometimes seem that way to those overwhelmed by finances. Join us to explore how artificial intelligence (AI) technology can help your financial institution deliver a more intuitive consumer experience that helps people live more financially healthy lives</Card.Meta> 
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Videos/ATM+Managed+Services+-+The+ATM+Channel+in+the+New+Normal.mp4' width='450px' height='300px' controls='true'/>
                        <Card className="video-cards">
                            <Card.Content>
                                <div className="video-description">
                                <Card.Header className="card-header">ATM Managed Services</Card.Header>
                                <Card.Meta className="card-description">Keep your ATM programs running smoothly. ATM Managed Services provides the opportunity to maximize operational efficiency, free staff to focus on more productive tasks, and helps improve performance, profitability and cardholder satisfaction.</Card.Meta> 
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Impactful+Solutions+for+Today%E2%80%99s+Ecosystem.mp4' width='450px' height='300px' controls='true'/>
                        <Card className="video-cards">
                            <Card.Content>
                                <div className="video-description">
                                <Card.Header className="card-header">Impactful Solutions for Today’s Ecosystem: Instant Issue AdvantageTM, Source AdvantageSM and Statement AdvantageTM</Card.Header>
                                <Card.Meta className="card-description">In today’s environment, meeting customer needs has never been more important.  Fiserv is committed to helping our clients navigate a changing world. We’re all experiencing unprecedented disruption in the way we live and work. Servicing your accountholders in a time of crisis and having the right tools to do so is of utmost importance. 
                                During this session we’ll discuss:
                                    <ul>
                                        <li>The value of instant card issuance in today’s environment</li>
                                        <li>The value of ordering Source Advantage supplies through CustomSourceTM to support your branch operations and drive-thru activity</li> 
                                        <li>Strategies for creating powerful connections with Statement Advantage to build accountholder loyalty and trust</li>
                                    </ul>
                                </Card.Meta> 
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    {/* <Grid.Column width={8}>
                        <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Impactful+Solutions+for+Today%E2%80%99s+Ecosystem.mp4' width='450px' height='300px' controls='true'/>
                        <Card className="video-cards">
                            <Card.Content>
                                <div className="video-description">
                                <Card.Header className="card-header">Idea Portal</Card.Header>
                                <Card.Meta className="card-description">In today’s environment, meeting customer needs has never been more important.  Fiserv is committed to helping our clients navigate a changing world. We’re all experiencing unprecedented disruption in the way we live and work. Servicing your accountholders in a time of crisis and having the right tools to do so is of utmost importance. 
                                During this session we’ll discuss:
                                <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/IdeaPortal_UserGuide.pdf" target="_blank">Idea Portal User Guide</a>
                                </Card.Meta> 
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column> */}
                </Grid.Row>
            </Grid>
        </div>
    </div>
    </Fragment>
    
)

export default Videos