import React, { PropTypes } from 'react'
import { axiosInstance } from '../axiosInstance';

import MDBTableEditor from 'mdb-react-table-editor';
import ReactFileReader from 'react-file-reader';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDatePicker, MDBDataTable, MDBIframe } from 'mdbreact';

class Job extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.job };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.props.onRemove(this.state.data);
    }
    render() {
        return <div>
            <p><b>{this.state.data.name}</b></p>
            <p><button onClick={this.onClick}>Delete</button></p>
        </div>;
    }
}

export class JobForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            createdDate: null,
            number: "",
            itinerary: "",
            cargoName: "",
            packageKind: "",
            weight: "",
            volume: "",
            quantityOfPlaces: "",
            loadingKind: "",
            vehicle: "",
            shipper: "",
            loadingPlaceAddress: "",
            shipperContactPerson: "",
            shipmentDate: null,
            customsDestinations: "",
            consignee: "",
            consigneeContactPerson: "",
            unloadingDate: null,
            pdfFileData: "",
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onCreatedDateChange = this.onCreatedDateChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onItineraryChange = this.onItineraryChange.bind(this);
        this.onCargoNameChange = this.onCargoNameChange.bind(this);
        this.onPackageKindChange = this.onPackageKindChange.bind(this);
        this.onWeightChange = this.onWeightChange.bind(this);
        this.onVolumeChange = this.onVolumeChange.bind(this);
        this.onQuantityOfPlacesChange = this.onQuantityOfPlacesChange.bind(this);
        this.onLoadingKindChange = this.onLoadingKindChange.bind(this);
        this.onVehicleChange = this.onVehicleChange.bind(this);
        this.onShipperChange = this.onShipperChange.bind(this);
        this.onLoadingPlaceAddressChange = this.onLoadingPlaceAddressChange.bind(this);
        this.onShipperContactPersonChange = this.onShipperContactPersonChange.bind(this);
        this.onShipmentDateChange = this.onShipmentDateChange.bind(this);
        this.onCustomsDestinationsChange = this.onCustomsDestinationsChange.bind(this);
        this.onConsigneeChange = this.onConsigneeChange.bind(this);
        this.onUnloadingPlaceChange = this.onUnloadingPlaceChange.bind(this);
        this.onConsigneeContactPersonChange = this.onConsigneeContactPersonChange.bind(this);
        this.onUnloadingDateChange = this.onUnloadingDateChange.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
    }

    handleFiles = files => {
        this.setState({ pdfFileData: files.base64 })
    }

    onCreatedDateChange = (value) => {
        this.setState({ createdDate: value });
    }
    onNumberChange(e) {
        this.setState({ number: e.target.value });
    }
    onItineraryChange(e) {
        this.setState({ itinerary: e.target.value });
    }
    onCargoNameChange(e) {
        this.setState({ cargoName: e.target.value });
    }
    onPackageKindChange(e) {
        this.setState({ packageKind: e.target.value });
    }
    onWeightChange(e) {
        this.setState({ weight: e.target.value });
    }
    onVolumeChange(e) {
        this.setState({ volume: e.target.value });
    }
    onQuantityOfPlacesChange(e) {
        this.setState({ quantityOfPlaces: e.target.value });
    }
    onLoadingKindChange(e) {
        this.setState({ loadingKind: e.target.value });
    }
    onVehicleChange(e) {
        this.setState({ vehicle: e.target.value });
    }
    onShipperChange(e) {
        this.setState({ shipper: e.target.value });
    }
    onLoadingPlaceAddressChange(e) {
        this.setState({ loadingPlaceAddress: e.target.value });
    }
    onShipperContactPersonChange(e) {
        this.setState({ shipperContactPerson: e.target.value });
    }
    onShipmentDateChange = (value) => {
        this.setState({ shipmentDate: value });
    }
    onCustomsDestinationsChange(e) {
        this.setState({ customsDestinations: e.target.value });
    }
    onConsigneeChange(e) {
        this.setState({ consignee: e.target.value });
    }
    onUnloadingPlaceChange(e) {
        this.setState({ unloadingPlace: e.target.value });
    }
    onConsigneeContactPersonChange(e) {
        this.setState({ consigneeContactPerson: e.target.value });
    }
    onUnloadingDateChange = (value) => {
        this.setState({ unloadingDate: value });
    }
    onSubmit(e) {
        e.preventDefault();
        var jobNumber = this.state.number.trim();
        var jobCreatedDate = this.state.createdDate;
        var jobItinerary = this.state.itinerary;
        var jobCargoName = this.state.cargoName;
        var jobPackageKind = this.state.packageKind;
        var jobWeight = this.state.weight;
        var jobVolume = this.state.volume;
        var jobQuantityOfPlaces = this.state.quantityOfPlaces;
        var jobLoadingKind = this.state.loadingKind;
        var jobVehicle = this.state.vehicle;
        var jobShipper = this.state.shipper;
        var jobLoadingPlaceAddress = this.state.loadingPlaceAddress;
        var jobShipperContactPerson = this.state.shipperContactPerson;
        var jobShipmentDate = this.state.shipmentDate;
        var jobCustomsDestinations = this.state.customsDestinations;
        var jobConsignee = this.state.consignee;
        var jobConsigneeContactPerson = this.state.consigneeContactPerson;
        var jobUnloadingDate = this.state.unloadingDate;

        this.props.onJobSubmit({
            createdDate: jobCreatedDate,
            number: jobNumber,
            itinerary: jobItinerary,
            cargoName: jobCargoName,
            packageKind: jobPackageKind,
            weight: jobWeight,
            volume: jobVolume,
            quantityOfPlaces: jobQuantityOfPlaces,
            loadingKind: jobLoadingKind,
            vehicle: jobVehicle,
            shipper: jobShipper,
            loadingPlaceAddress: jobLoadingPlaceAddress,
            shipperContactPerson: jobShipperContactPerson,
            shipmentDate: jobShipmentDate,
            customsDestinations: jobCustomsDestinations,
            consignee: jobConsignee,
            consigneeContactPerson: jobConsigneeContactPerson,
            unloadingDate: jobUnloadingDate,
        });
        this.setState({ createdDate: null, name: "", number: "", partner: null });
    }
    render() {

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol size={"6"}>
                        <ReactFileReader fileTypes={[".pdf"]} base64={true} multipleFiles={false} handleFiles={this.handleFiles}>
                            <button className='btn'>Открыть PDF файл</button>
                        </ReactFileReader>
                        <iframe src={this.state.pdfFileData} height="60%" width="100%"></iframe>
                       
                    </MDBCol>
                    <MDBCol size={"6"}>
                        <form onSubmit={this.onSubmit}>
                            <p className="h4 text-center mb-4">Создание Работы</p>

                            <label className="grey-text">
                                Номер Заявки</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.number}
                                onChange={this.onNumberChange} />
                            <br />

                            <label className="grey-text">
                                Маршрут Следования</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.itinerary}
                                onChange={this.onItineraryChange} />
                            <br />

                            <label className="grey-text">
                                Наименование Груза</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.cargoName}
                                onChange={this.onCargoNameChange} />
                            <br />

                            <label className="grey-text">
                                Вид упаковки</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.packageKind}
                                onChange={this.onPackageKindChange} />
                            <br />

                            <label className="grey-text">
                                Вec</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.weight}
                                onChange={this.onWeightChange} />
                            <br />

                            <label className="grey-text">
                                Объем</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.volume}
                                onChange={this.onVolumeChange} />
                            <br />

                            <label className="grey-text">
                                Кол-во мест</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.quantityOfPlaces}
                                onChange={this.onQuantityOfPlacesChange} />
                            <br />

                            <label className="grey-text">
                                Вид погрузки</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.loadingKind}
                                onChange={this.onLoadingKindChange} />
                            <br />

                            <label className="grey-text">
                                Транспортное средство</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.vehicle}
                                onChange={this.onVehicleChange} />
                            <br />

                            <label className="grey-text">
                                Грузоотправитель</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.shipper}
                                onChange={this.onShipperChange} />
                            <br />

                            <label className="grey-text">
                                Мecто погрузки</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.loadingPlaceAddress}
                                onChange={this.onLoadingPlaceAddressChange} />
                            <br />

                            <label className="grey-text">
                                ГРУЗООТПРАВИТЕЛЬ КОНТАКТНОЕ ЛИЦО</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.shipperContactPerson}
                                onChange={this.onShipperContactPersonChange} />
                            <br />

                            <label className="grey-text">
                                ДАТА/ВРЕМЯ ПОГРУЗКИ</label>
                            <MDBDatePicker getValue={this.onShipmentDateChange} />
                            <br />

                            <label className="grey-text">
                                ТАМОЖНЯ НАЗНАЧЕНИЯ</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.customsDestinations}
                                onChange={this.onCustomsDestinationsChange} />
                            <br />

                            <label className="grey-text">
                                ГРУЗОПОЛУЧАТЕЛЬ</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.consignee}
                                onChange={this.onConsigneeChange} />
                            <br />

                            <label className="grey-text">
                                МЕСТО РАЗГРУЗКИ</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.unloadingPlace}
                                onChange={this.onUnloadingPlaceChange} />
                            <br />

                            <label className="grey-text">
                                ГРУЗОПОЛУЧАТЕЛЬ КОНТАКТНОЕ ЛИЦО</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.consigneeContactPerson}
                                onChange={this.onConsigneeContactPersonChange} />
                            <br />

                            <label className="grey-text">
                                ДАТА РАЗГРУЗКИ</label>
                            <div>
                                <MDBDatePicker getValue={this.onUnloadingDateChange} />
                            </div>
                            <br />

                            <div className="text-center mt-4">
                                <MDBBtn color="unique" type="submit"> Create </MDBBtn>
                            </div>

                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export class JobsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            data: {
                columns: [
                    {
                        label: 'Дата Создания',
                        field: 'createdDate',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'Номер',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                    },
                    {
                        label: 'Маршрут Следования',
                        field: 'itinerary',
                        sort: 'asc',
                        width: 200
                    },
                    {
                        label: 'Наименование Груза',
                        field: 'cargoName',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Вид Упаковки',
                        field: 'packageKind',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'Вес',
                        field: 'weight',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Объем',
                        field: 'volume',
                        sort: 'asc',
                        width: 200
                    },
                    {
                        label: 'Кол-во Мест',
                        field: 'quantityOfPlaces',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Вид Погрузки',
                        field: 'loadingKind',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'Транспортное Средство',
                        field: 'vehicle',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'ГРУЗООТПРАВИТЕЛЬ',
                        field: 'shipper',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'МЕСТО ПОГРУЗКИ',
                        field: 'loadingPlaceAddress',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'ГРУЗООТПРАВИТЕЛЬ КОНТАКТНОЕ ЛИЦО/ТЕЛЕФОН',
                        field: 'shipperContactPerson',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'ДАТА/ВРЕМЯ ПОГРУЗКИ',
                        field: 'shipmentDate',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'ТАМОЖНЯ НАЗНАЧЕНИЯ',
                        field: 'customsDestinations',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'ГРУЗОПОЛУЧАТЕЛЬ',
                        field: 'consignee',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'МЕСТО РАЗГРУЗКИ',
                        field: 'unloadingPlace',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'ГРУЗОПОЛУЧАТЕЛЬ КОНТАКТНОЕ ЛИЦО/ТЕЛЕФОН',
                        field: 'consigneeContactPerson',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'ДАТА РАЗГРУЗКИ',
                        field: 'unloadingDate',
                        sort: 'asc',
                        width: 100
                    }
                ],
            }
        }

        //this.onAddJob = this.onAddJob.bind(this);
        //this.onRemoveJob = this.onRemoveJob.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        axiosInstance.get('/api/jobs')
            .then(res => {
                res.data.map((job, i) => {
                    if (job.cargoName === null) job.cargoName = ' ';
                    if (job.consignee === null) job.consignee = ' ';
                    if (job.consigneeContactPerson === null) job.consigneeContactPerson = ' ';
                    if (job.createdDate === null) job.createdDate = ' ';
                    if (job.customsDestinations === null) job.customsDestinations = ' ';
                    if (job.itinerary === null) job.itinerary = ' ';
                    if (job.loadingKind === null) job.loadingKind = ' ';
                    if (job.loadingPlaceAddress === null) job.loadingPlaceAddress = ' ';
                    if (job.number === null) job.number = ' ';
                    if (job.packageKind === null) job.packageKind = ' ';
                    if (job.quantityOfPlaces === null) job.quantityOfPlaces = ' ';
                    if (job.shipmentDate === null) job.shipmentDate = ' ';
                    if (job.shipper === null) job.shipper = ' ';
                    if (job.shipperContactPerson === null) job.shipperContactPerson = ' ';
                    if (job.unloadingDate === null) job.unloadingDate = ' ';
                    if (job.unloadingPlace === null) job.unloadingPlace = ' ';
                    if (job.vehicle === null) job.vehicle = ' ';
                    if (job.volume === null) job.volume = ' ';
                    if (job.weight === null) job.weight = ' ';
                })

                this.setState({ jobs: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <MDBTableEditor rows={this.state.jobs} columns={this.state.data.columns}>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    small
                    data={this.state.data}
                />
            </MDBTableEditor>
        );
    }
}

class JobsListTemp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
        };

        this.onAddJob = this.onAddJob.bind(this);
        this.onRemoveJob = this.onRemoveJob.bind(this);
    }
    componentDidMount() {
        this.loadData();
    }

    loadData() {
        axiosInstance.get(this.props.apiUrl)
            .then(res => {
                const jobstemp = res.data;
                this.setState({ jobs: jobstemp });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // добавление объекта
    onAddJob(job) {
        if (job) {
            var data = JSON.stringify({ "name": job.name });
            var xhr = new XMLHttpRequest();

            xhr.open("post", this.props.apiUrl, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onload = function () {
                if (xhr.status === 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send(data);
        }
    }
    // удаление объекта
    onRemoveJob(job) {
        if (job) {
            var url = this.props.apiUrl + "/" + job.id;
            var xhr = new XMLHttpRequest();
            xhr.open("delete", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function () {
                if (xhr.status === 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send();
        }
    }
    render() {
        var remove = this.onRemoveJob;
        return <div>
            <JobForm onJobSubmit={this.onAddJob} />
            <h2>List of Jobs </h2>
            <div>
                {
                    this.state.jobs.map(function (job) {
                        return <Job key={job.id} job={job} onRemove={remove} />
                    })
                }
            </div>
        </div>;
    }
}