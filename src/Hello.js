import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import Popup from "reactjs-popup";
import { ThemeProvider } from 'styled-components';
import "./Hello.css"
class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }
    render() {
        const theme = {
            background: "white",
            fontFamily: "Arial, Helvetica, sans-serif",
            headerBgColor: "#588c7e",
            headerFontColor: "#fff",
            headerFontSize: "25px",
            botBubbleColor: "#588c7e",
            botFontColor: "#fff",
            userBubbleColor: "#fff",
            userFontColor: "#4c4c4c",
        };

        return (
            <>
                <div className='App'>
                    <div className="avatar-image">
                        <img src="./images/image1.png" onClick={this.openModal} />
                    </div>
                    <div class="circle blue" onClick={this.openModal}></div>
                    <div className="modal-design">
                        <Popup
                            open={this.state.open}
                            closeOnDocumentClick
                            onClose={this.closeModal}
                        >
                            <ThemeProvider theme={theme}>
                                <ChatBot className="chatbot"
                                    steps={[
                                        {
                                            id: 1,
                                            message: "What is your name?",
                                            trigger: 2
                                        },
                                        {
                                            id: 2,
                                            user: true,
                                            trigger: 3
                                        },
                                        {
                                            id: 3,
                                            message: "Hello {previousValue}",
                                            trigger: 4
                                        },
                                        {
                                            id: 4,
                                            message: "Welcome to Digi",
                                            trigger: 5
                                        },
                                        {
                                            id: 5,
                                            message: "what courses are you looking?",
                                            trigger: 6
                                        },
                                        {
                                            id: 6,
                                            options: [
                                                {
                                                    value: 1,
                                                    label: "Mern Stack Development",
                                                    trigger: 7
                                                },
                                                {
                                                    value: 2,
                                                    label: "Full Stack JAVA",
                                                    trigger: 7
                                                },
                                                {
                                                    value: 3,
                                                    label: "Python",
                                                    trigger: 7
                                                }
                                            ],

                                        },
                                        {
                                            id: 7,
                                            message: "ThankYou",
                                            trigger: 8
                                        },
                                        {
                                            id: 8,
                                            message: "Our team will get in touch you for more details",
                                            end: true
                                        }
                                    ]}
                                />
                            </ThemeProvider>
                        </Popup>
                    </div>
                    <div class="dots-container">
                        <div class="pulse-dot pulse-dot-1"></div>
                    </div>
                </div>
            </>
        )
    }
}
export default Hello