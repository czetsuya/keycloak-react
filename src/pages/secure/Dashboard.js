import React, { Component } from 'react';
import { CarService } from '../../service/CarService';
import { Panel } from 'primereact/components/panel/Panel';
import { Checkbox } from 'primereact/components/checkbox/Checkbox';
import { Button } from 'primereact/components/button/Button';
import { Dropdown } from 'primereact/components/dropdown/Dropdown';
import { InputText } from 'primereact/components/inputtext/InputText';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { FullCalendar } from 'primereact/components/fullcalendar/FullCalendar';
import { Chart } from 'primereact/components/chart/Chart';
import { withSecurity } from '../routing/SecureRoutes';
import { withSecureLayout } from '../layout/SecureLayout';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			tasks: [],
			city: null,
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: '#4bc0c0'
					},
					{
						label: 'Second Dataset',
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						borderColor: '#565656'
					}
				]
			}
		};
		this.onTaskChange = this.onTaskChange.bind(this);
		this.onCityChange = this.onCityChange.bind(this);
		this.carservice = new CarService();
	}

	onTaskChange(e) {
		let selectedTasks = [...this.state.tasks];
		if (e.checked) selectedTasks.push(e.value);
		else selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

		this.setState({ tasks: selectedTasks });
	}

	onCityChange(e) {
		this.setState({ city: e.value });
	}

	componentDidMount() {
		this.carservice.getCarsSmall().then(data => this.setState({ cars: data }));
	}

	render() {
		let cities = [
			{ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
			{ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
			{ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
			{ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
			{ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
		];

		let fullcalendarOptions = {
			defaultDate: '2017-02-01',
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true
		};

		let events = [
			{
				id: 1,
				title: 'All Day Event',
				start: '2017-02-01'
			},
			{
				id: 2,
				title: 'Long Event',
				start: '2017-02-07',
				end: '2017-02-10'
			},
			{
				id: 3,
				title: 'Repeating Event',
				start: '2017-02-09T16:00:00'
			},
			{
				id: 4,
				title: 'Repeating Event',
				start: '2017-02-16T16:00:00'
			},
			{
				id: 5,
				title: 'Conference',
				start: '2017-02-11',
				end: '2017-02-13'
			},
			{
				id: 6,
				title: 'Meeting',
				start: '2017-02-12T10:30:00',
				end: '2017-02-12T12:30:00'
			},
			{
				id: 7,
				title: 'Lunch',
				start: '2017-02-12T12:00:00'
			},
			{
				id: 8,
				title: 'Meeting',
				start: '2017-02-12T14:30:00'
			},
			{
				id: 9,
				title: 'Happy Hour',
				start: '2017-02-12T17:30:00'
			},
			{
				id: 10,
				title: 'Dinner',
				start: '2017-02-12T20:00:00'
			},
			{
				id: 11,
				title: 'Birthday Party',
				start: '2017-02-13T07:00:00'
			},
			{
				id: 12,
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2017-02-28'
			}
		];

		return (
			<div className="p-grid dashboard">
				<div className="p-col-12 p-md-4">
					<div className="card overview">
						<div className="overview-content clearfix">
							<span className="overview-title">Sales</span>
							<span className="overview-badge">+%90</span>
							<span className="overview-detail">$22,650 / week</span>
						</div>
						<div className="overview-footer">
							<img src="assets/layout/images/dashboard/sales.svg" style={{ width: '100%' }} alt="Sales" />
						</div>
					</div>
				</div>
				<div className="p-col-12 p-md-4">
					<div className="card overview">
						<div className="overview-content clearfix">
							<span className="overview-title">Views</span>
							<span className="overview-badge">+%60</span>
							<span className="overview-detail">6,520 / day</span>
						</div>
						<div className="overview-footer">
							<img src="assets/layout/images/dashboard/views.svg" style={{ width: '100%' }} alt="Views" />
						</div>
					</div>
				</div>
				<div className="p-col-12 p-md-4">
					<div className="card overview">
						<div className="overview-content clearfix">
							<span className="overview-title">Users</span>
							<span className="overview-badge">+%45</span>
							<span className="overview-detail">5,200 / day</span>
						</div>
						<div className="overview-footer">
							<img
								src="assets/layout/images/dashboard/progress.svg"
								style={{ width: '100%' }}
								alt="Progress"
							/>
						</div>
					</div>
				</div>

				<div className="p-col-12 p-md-6 p-lg-3">
					<div className="p-grid card colorbox colorbox-1">
						<div className="p-col-4">
							<i className="material-icons">check_circle</i>
						</div>
						<div className="p-col-8">
							<span className="colorbox-name">Tasks</span>
							<span className="colorbox-count">50</span>
						</div>
					</div>
				</div>
				<div className="p-col-12 p-md-6 p-lg-3">
					<div className="p-grid card colorbox colorbox-2">
						<div className="p-col-4">
							<i className="material-icons">shopping_card</i>
						</div>
						<div className="p-col-8">
							<span className="colorbox-name">Purchases</span>
							<span className="colorbox-count">1200</span>
						</div>
					</div>
				</div>
				<div className="p-col-12 p-md-6 p-lg-3">
					<div className="p-grid card colorbox colorbox-3">
						<div className="p-col-4">
							<i className="material-icons">report</i>
						</div>
						<div className="p-col-8">
							<span className="colorbox-name">Issues</span>
							<span className="colorbox-count">22</span>
						</div>
					</div>
				</div>
				<div className="p-col-12 p-md-6 p-lg-3">
					<div className="p-grid card colorbox colorbox-4">
						<div className="p-col-4">
							<i className="material-icons">email</i>
						</div>
						<div className="p-col-8">
							<span className="colorbox-name">Messages</span>
							<span className="colorbox-count">10</span>
						</div>
					</div>
				</div>

				<div className="p-col-12 p-md-6 p-lg-4 task-list">
					<Panel header="Tasks">
						<ul>
							<li>
								<Checkbox
									value="task1"
									onChange={this.onTaskChange}
									checked={this.state.tasks.indexOf('task1') > -1 ? true : false}
								/>
								<span className="task-name">Sales Reports</span>
								<i className="material-icons">&#xE8C9;</i>
							</li>
							<li>
								<Checkbox
									value="task2"
									onChange={this.onTaskChange}
									checked={this.state.tasks.indexOf('task2') > -1 ? true : false}
								/>
								<span className="task-name">Pay Invoices</span>
								<i className="material-icons">&#xE8A1;</i>
							</li>
							<li>
								<Checkbox
									value="task3"
									onChange={this.onTaskChange}
									checked={this.state.tasks.indexOf('task3') > -1 ? true : false}
								/>
								<span className="task-name">Dinner with Tony</span>
								<i className="material-icons">&#xE561;</i>
							</li>
							<li>
								<Checkbox
									value="task4"
									onChange={this.onTaskChange}
									checked={this.state.tasks.indexOf('task4') > -1 ? true : false}
								/>
								<span className="task-name">Client Meeting</span>
								<i className="material-icons">&#xE7FB;</i>
							</li>
							<li>
								<Checkbox
									value="task5"
									onChange={this.onTaskChange}
									checked={this.state.tasks.indexOf('task5') > -1 ? true : false}
								/>
								<span className="task-name">New Theme</span>
								<i className="material-icons">&#xE3AE;</i>
							</li>
							<li>
								<Checkbox
									value="task6"
									onChange={this.onTaskChange}
									checked={this.state.tasks.indexOf('task6') > -1 ? true : false}
								/>
								<span className="task-name">Flight Ticket</span>
								<i className="material-icons">&#xE01B;</i>
							</li>
						</ul>
					</Panel>
				</div>
				<div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
					<Panel header="Contact Us">
						<div className="p-grid">
							<div className="p-col-12">
								<Dropdown
									value={this.state.city}
									options={cities}
									placeholder="Select a City"
									onChange={this.onCityChange}
									autoWidth={false}
								/>
							</div>
							<div className="p-col-12">
								<span className="md-inputfield">
									<InputText id="name" type="text" />
									<label htmlFor="name">Name</label>
								</span>
							</div>
							<div className="p-col-12">
								<span className="md-inputfield">
									<InputText id="age" type="text" />
									<label htmlFor="age">Age</label>
								</span>
							</div>
							<div className="p-col-12">
								<span className="md-inputfield">
									<InputText id="messages" type="text" />
									<label htmlFor="message">Message</label>
								</span>
							</div>
						</div>
						<Button type="button" label="Send" icon="pi-md-send" />
					</Panel>
				</div>
				<div className="p-col-12 p-lg-4 contacts">
					<Panel header="Contacts">
						<ul>
							<li>
								<button className="p-link">
									<img src="assets/layout/images/avatar1.png" width="45" alt="avatar1" />
									<span className="name">Joshua Williams</span>
									<span className="email">joshua@pf-ultima.com</span>
								</button>
							</li>
							<li>
								<button className="p-link">
									<img src="assets/layout/images/avatar2.png" width="45" alt="avatar2" />
									<span className="name">Emily Clark</span>
									<span className="email">emily@pf-ultima.com</span>
								</button>
							</li>
							<li>
								<button className="p-link">
									<img src="assets/layout/images/avatar3.png" width="45" alt="avatar3" />
									<span className="name">Susan Johnson</span>
									<span className="email">susan@pf-ultima.com</span>
								</button>
							</li>
							<li>
								<button className="p-link">
									<img src="assets/layout/images/avatar4.png" width="45" alt="avatar4" />
									<span className="name">Kelly Stark</span>
									<span className="email">kelly@pf-ultima.com</span>
								</button>
							</li>
						</ul>
					</Panel>
				</div>

				<div className="p-col-12 p-md-4">
					<div className="card timeline p-fluid">
						<div className="p-grid">
							<div className="p-col-3">
								<span className="event-time">just now</span>
								<i className="material-icons" style={{ color: '#009688' }}>
									&#xE1BC;
								</i>
							</div>
							<div className="p-col-9">
								<span className="event-owner" style={{ color: '#009688' }}>
									Katherine May
								</span>
								<span className="event-text">Lorem ipsun dolor amet</span>
								<div className="event-content">
									<img src="assets/layout/images/dashboard/md.png" alt="md" />
								</div>
							</div>

							<div className="p-col-3">
								<span className="event-time">12h ago</span>
								<i className="material-icons" style={{ color: '#E91E63' }}>
									&#xE885;
								</i>
							</div>
							<div className="p-col-9">
								<span className="event-owner" style={{ color: '#E91E63' }}>
									Brandon Santos
								</span>
								<span className="event-text">
									Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.
								</span>
							</div>

							<div className="p-col-3">
								<span className="event-time">15h ago</span>
								<i className="material-icons" style={{ color: '#9c27b0' }}>
									&#xE0C9;
								</i>
							</div>
							<div className="p-col-9">
								<span className="event-owner" style={{ color: '#9c27b0' }}>
									Stephan Ward
								</span>
								<span className="event-text">
									Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores
									ullam voluptates, similique, dignissimos.
								</span>
							</div>

							<div className="p-col-3">
								<span className="event-time">2d ago</span>
								<i className="material-icons" style={{ color: '#ff9800' }}>
									&#xE0C8;
								</i>
							</div>
							<div className="p-col-9">
								<span className="event-owner" style={{ color: '#ff9800' }}>
									Jason Smith
								</span>
								<span className="event-text">Laudantium, repudiandae, similique!</span>
								<div className="event-content">
									<img src="assets/layout/images/dashboard/map.png" alt="map" />
								</div>
							</div>

							<div className="p-col-3">
								<span className="event-time">1w ago</span>
								<i className="material-icons" style={{ color: '#607d8b' }}>
									&#xE91B;
								</i>
							</div>
							<div className="p-col-9">
								<span className="event-owner">Kevin Cox</span>
								<span className="event-text">
									Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.
								</span>
							</div>

							<div className="p-col-3">
								<span className="event-time">2w ago</span>
								<i className="material-icons" style={{ color: '#FFC107' }}>
									&#xE23A;
								</i>
							</div>
							<div className="p-col-9">
								<span className="event-owner" style={{ color: '#FFC107' }}>
									Walter White
								</span>
								<span className="event-text">I am the one who knocks!</span>
							</div>

							<div className="p-col-12">
								<Button type="button" label="Refresh" icon="pi-md-refresh" />
							</div>
						</div>
					</div>
				</div>

				<div className="p-col-12 p-md-8">
					<div className="card">
						<DataTable value={this.state.cars} header="Recent Sales" style={{ marginBottom: '20px' }}>
							<Column field="vin" header="Vin" />
							<Column field="year" header="Year" />
							<Column field="brand" header="Brand" />
							<Column field="color" header="Color" />
						</DataTable>

						<Panel header="Sales Graph">
							<Chart type="line" data={this.state.chartData} />
						</Panel>
					</div>
				</div>

				<div className="p-col-12 p-md-8">
					<Panel header="Calendar" style={{ height: '100%' }}>
						<FullCalendar events={events} options={fullcalendarOptions} />
					</Panel>
				</div>
				<div className="p-col-12 p-md-4">
					<Panel header="Activity" style={{ height: '100%' }}>
						<div className="activity-header">
							<div className="p-grid">
								<div className="p-col-6">
									<span style={{ fontWeight: 'bold' }}>Last Activity</span>
									<p>Updated 1 minute ago</p>
								</div>
								<div className="p-col-6" style={{ textAlign: 'right' }}>
									<Button label="Update" icon="pi-md-update" />
								</div>
							</div>
						</div>
						<ul className="activity-list">
							<li>
								<div className="p-grid">
									<div className="count">$900</div>
								</div>
								<div className="p-grid" style={{ marginTop: '0' }}>
									<div className="p-col-6">Income</div>
									<div className="p-col-6">95%</div>
								</div>
							</li>
							<li>
								<div className="p-grid">
									<div className="count" style={{ backgroundColor: '#ffc107' }}>
										$250
									</div>
								</div>
								<div className="p-grid" style={{ marginTop: '0' }}>
									<div className="p-col-6">Tax</div>
									<div className="p-col-6">24%</div>
								</div>
							</li>
							<li>
								<div className="p-grid">
									<div className="count" style={{ backgroundColor: '#673AB7' }}>
										$125
									</div>
								</div>
								<div className="p-grid" style={{ marginTop: '0' }}>
									<div className="p-col-6">Invoices</div>
									<div className="p-col-6">55%</div>
								</div>
							</li>
							<li>
								<div className="p-grid">
									<div className="count" style={{ backgroundColor: '#00bcd4' }}>
										$250
									</div>
								</div>
								<div className="p-grid" style={{ marginTop: '0' }}>
									<div className="p-col-6">Expenses</div>
									<div className="p-col-6">15%</div>
								</div>
							</li>
							<li>
								<div className="p-grid">
									<div className="count" style={{ backgroundColor: '#607D8B' }}>
										$350
									</div>
								</div>
								<div className="p-grid" style={{ marginTop: '0' }}>
									<div className="p-col-6">Bonus</div>
									<div className="p-col-6">5%</div>
								</div>
							</li>
							<li>
								<div className="p-grid">
									<div className="count" style={{ backgroundColor: '#FF5722' }}>
										$500
									</div>
								</div>
								<div className="p-grid" style={{ marginTop: '0' }}>
									<div className="p-col-6">Revenue</div>
									<div className="p-col-6">25%</div>
								</div>
							</li>
						</ul>
					</Panel>
				</div>
			</div>
		);
	}
}

export default withSecurity(withSecureLayout(Dashboard));
