import React from 'react'
import { JobForm } from '../components/Job';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from "mdbreact";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from '@fullcalendar/bootstrap';

import { axiosInstance } from '../axiosInstance';
import $ from 'jquery'

import './calendar.scss' // webpack must be configured to do this

class ModalPage extends React.Component {

    constructor(props) {
        super(props);

        this.createJob = this.createJob.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    createJob = (job) => {
        console.log(job);
        axiosInstance.post(this.props.apiUrl, job)
            .then(res => {
                console.log('success')
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle}>Создать работу</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="fluid" disableFocusTrap={true}>
                    <MDBModalBody>
                        <JobForm apiUrl={this.props.apiUrl} onJobSubmit={this.createJob} />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export class JobCalendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            events: []
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        axiosInstance.get("/api/jobs/calendar")
            .then(res => {
                this.setState({ events: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    handleEventClick = ({ event, el }) => {
        console.log('qwe');
        this.toggle();
        this.setState({ event });
    };

    newEvent = () => {
        console.log('newEvent');
    };

    render() {

        var editEvent = async function (event, element, view) {
            console.log('qwe')
        }

        return (
            <React.Fragment>
                <div id="calendar" ref="calendar">
                    <ModalPage apiUrl="/api/jobs/createJob" />
                    <FullCalendar
                        apiUrl="/api/jobs/"
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin, interactionPlugin, bootstrapPlugin]}
                        weekends={true}
                        locale='ru-RU'
                        timezone="local"
                        nextDayThreshold="09:00:00"
                        allDaySlot={true}
                        displayEventTime={false}
                        displayEventEnd={false}
                        allDayDefault={true}
                        firstDay={1}
                        weekNumbers={false}
                        selectable={true}
                        weekNumberCalculation="ISO"
                        eventLimit={true}
                        eventLimitClick='week' //popover
                        eventTextColor='#FFFFFF'
                        navLinks={true}
                        defaultDate={$.now()}
                        theme={true}
                        timeFormat='HH:mm'
                        defaultTimedEventDuration='01:00:00'
                        editable={true}
                        slotLabelFormat='HH:mm'
                        weekends={true}
                        nowIndicator={true}
                        dayPopoverFormat='dddd DD/MM'
                        longPressDelay={0}
                        eventLongPressDelay={0}
                        selectLongPressDelay={0}
                        eventRenderWait={300}
                        height='auto'
                        weight='parent'
                        nowIndicator={false}

                        header={{
                            left: 'prev,today,next',
                            center: 'title',
                            right: 'dayGridDay, dayGridWeek, dayGridMonth'
                        }}

                        views={{
                            dayGridMonth: {
                                columnFormat: 'dddd',
                                eventLimit: 10
                            },
                            dayGridWeek: {
                                type: 'timeline',
                                duration: { weeks: 1 },
                                slotDuration: { days: 1 },
                                buttonText: 'week',
                                eventLimit: false,
                                minTime: "00:00:00",
                                maxTime: "00:00:01"
                            },
                            dayGridDay: {
                                columnFormat: 'dddd',
                                eventLimit: false,
                                minTime: '00:00:00',
                                maxTime: '00:00:10'
                            },
                            listWeek: {
                                columnFormat: ''
                            }
                        }}

                        events={this.state.events}
                        eventClick={this.handleEventClick}
                    />
                </div>
            </React.Fragment>
        )
    }
}