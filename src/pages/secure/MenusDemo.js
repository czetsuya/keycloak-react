import React, { Component } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Steps } from 'primereact/steps';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { TieredMenu } from 'primereact/tieredmenu';
import { ContextMenu } from 'primereact/contextmenu';
import { SlideMenu } from 'primereact/slidemenu';
import { PanelMenu } from 'primereact/panelmenu';
import { TabMenu } from 'primereact/tabmenu';
import { MegaMenu } from 'primereact/megamenu';
import { withSecurity } from '../routing/SecureRoutes';
import { withSecureLayout } from '../layout/SecureLayout';

class MenusDemo extends Component {
	constructor() {
		super();
		this.state = {
			breadcrumdItems: [
				{ label: 'Categories' },
				{ label: 'Sports' },
				{ label: 'Football' },
				{ label: 'Countries' },
				{ label: 'Spain' },
				{ label: 'F.C. Barcelona' },
				{ label: 'Squad' },
				{ label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
			],
			home: {
				icon: 'pi-md-home',
				url: 'https://www.primefaces.org/primereact'
			},
			stepsItems: [
				{
					label: 'Personal'
				},
				{
					label: 'Seat'
				},
				{
					label: 'Payment'
				},
				{
					label: 'Confirmation'
				}
			],
			tieredItems: [
				{
					label: 'File',
					icon: 'pi-md-folder',
					items: [
						{
							label: 'New',
							icon: 'pi-md-plus',
							items: [{ label: 'Project' }, { label: 'Other' }]
						},
						{ label: 'Open' },
						{ label: 'Quit' }
					]
				},
				{
					label: 'Edit',
					icon: 'pi-md-edit',
					items: [{ label: 'Undo', icon: 'pi-md-undo' }, { label: 'Redo', icon: 'pi-md-redo' }]
				},
				{
					label: 'Help',
					icon: 'pi-md-help-outline',
					items: [
						{
							label: 'Contents'
						},
						{
							label: 'Search',
							icon: 'pi-md-search',
							items: [
								{
									label: 'Text',
									items: [
										{
											label: 'Workspace'
										}
									]
								},
								{
									label: 'File'
								}
							]
						}
					]
				},
				{
					label: 'Actions',
					icon: 'pi-md-settings',
					items: [
						{
							label: 'Edit',
							icon: 'pi-md-refresh',
							items: [{ label: 'Save', icon: 'pi-md-save' }, { label: 'Update', icon: 'pi-md-update' }]
						},
						{
							label: 'Other',
							icon: 'pi-md-list',
							items: [{ label: 'Delete', icon: 'pi-md-delete' }]
						}
					]
				},
				{
					label: 'Quit',
					icon: 'pi-md-power-settings-new'
				}
			],
			items: [
				{
					label: 'File',
					items: [{ label: 'New', icon: 'pi-md-plus' }, { label: 'Open', icon: 'pi-md-open-in-browser' }]
				},
				{
					label: 'Edit',
					items: [{ label: 'Undo', icon: 'pi-md-undo' }, { label: 'Redo', icon: 'pi-md-redo' }]
				}
			],
			panelMenuItems: [
				{
					label: 'File',
					icon: 'pi-md-insert-drive-file',
					items: [
						{
							label: 'New',
							icon: 'pi-md-add',
							items: [{ label: 'Project' }, { label: 'Other' }]
						},
						{ label: 'Open' },
						{ label: 'Quit' }
					]
				},
				{
					label: 'Edit',
					icon: 'pi-md-edit',
					items: [{ label: 'Undo', icon: 'pi-md-undo' }, { label: 'Redo', icon: 'pi-md-redo' }]
				},
				{
					label: 'Help',
					icon: 'pi-md-help-outline',
					items: [
						{
							label: 'Contents'
						},
						{
							label: 'Search',
							icon: 'pi-md-search',
							items: [
								{
									label: 'Text',
									items: [
										{
											label: 'Workspace'
										}
									]
								},
								{
									label: 'File'
								}
							]
						}
					]
				},
				{
					label: 'Actions',
					icon: 'pi-md-settings',
					items: [
						{
							label: 'Edit',
							icon: 'pi-md-edit',
							items: [{ label: 'Save', icon: 'pi-md-save' }, { label: 'Update', icon: 'pi-md-update' }]
						},
						{
							label: 'Other',
							icon: 'pi-md-phone-android',
							items: [{ label: 'Delete', icon: 'pi-md-delete' }]
						}
					]
				}
			],
			tabMenuItems: [
				{ label: 'Stats', icon: 'pi-md-insert-chart' },
				{ label: 'Calendar', icon: 'pi-md-date-range' },
				{ label: 'Documentation', icon: 'pi-md-book' },
				{ label: 'Support', icon: 'pi-md-help-outline' },
				{ label: 'Social', icon: 'pi-md-public' }
			],
			megaMenuItems: [
				{
					label: 'TV',
					icon: 'pi-md-tv',
					items: [
						[
							{
								label: 'TV 1',
								items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
							},
							{
								label: 'TV 2',
								items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
							}
						],
						[
							{
								label: 'TV 3',
								items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
							},
							{
								label: 'TV 4',
								items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
							}
						]
					]
				},
				{
					label: 'Sports',
					icon: 'pi-md-alarm',
					items: [
						[
							{
								label: 'Sports 1',
								items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
							},
							{
								label: 'Sports 2',
								items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
							}
						],
						[
							{
								label: 'Sports 3',
								items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
							},
							{
								label: 'Sports 4',
								items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
							}
						],
						[
							{
								label: 'Sports 5',
								items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
							},
							{
								label: 'Sports 6',
								items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
							}
						]
					]
				},
				{
					label: 'Entertainment',
					icon: 'pi-md-stars',
					items: [
						[
							{
								label: 'Entertainment 1',
								items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
							},
							{
								label: 'Entertainment 2',
								items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
							}
						],
						[
							{
								label: 'Entertainment 3',
								items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
							},
							{
								label: 'Entertainment 4',
								items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
							}
						]
					]
				},
				{
					label: 'Technology',
					icon: 'pi-md-phone-android',
					items: [
						[
							{
								label: 'Technology 1',
								items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
							},
							{
								label: 'Technology 2',
								items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
							}
						],
						[
							{
								label: 'Technology 4',
								items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
							}
						]
					]
				}
			]
		};
	}

	render() {
		return (
			<div className="p-grid p-fluid">
				<div className="p-col-12">
					<div className="card card-w-title">
						<h1>Breadcrumb</h1>
						<BreadCrumb model={this.state.breadcrumdItems} home={this.state.home} />
					</div>

					<div className="card card-w-title">
						<h1>Steps</h1>
						<Steps model={this.state.stepsItems} />
					</div>

					<div className="card card-w-title">
						<h1>MenuBar</h1>
						<Menubar model={this.state.tieredItems} />
					</div>
				</div>

				<div className="p-col-12 p-lg-6">
					<div className="card card-w-title">
						<h1>Plain Menu</h1>
						<Menu model={this.state.items} style={{ width: 250 }} />
						<Menu
							model={this.state.items}
							ref={el => (this.menu = el)}
							popup={true}
							style={{ width: 250 }}
						/>
						<Button
							icon="pi-md-launch"
							label="Show"
							onClick={event => this.menu.toggle(event)}
							style={{ marginTop: '20px', width: 'auto' }}
						/>
					</div>

					<div className="card card-w-title">
						<h1>TieredMenu</h1>
						<TieredMenu model={this.state.tieredItems} style={{ width: '250px', marginBottom: '20px' }} />
					</div>
				</div>

				<div className="p-col-12 p-lg-6">
					<div className="card card-w-title">
						<h1 style={{ marginTop: '40px' }}>ContextMenu</h1>
						Right click!
						<ContextMenu global={true} model={this.state.tieredItems} style={{ width: '12.5em' }} />
					</div>

					<div className="card">
						<h1>SlideMenu</h1>
						<SlideMenu model={this.state.items} style={{ width: '260px' }} menuWidth={260} />
					</div>

					<div className="card">
						<h1>PanelMenu</h1>
						<PanelMenu model={this.state.panelMenuItems} />
					</div>
				</div>

				<div className="p-col-12 p-col-6">
					<div className="card">
						<h1>MegaMenu - Horizontal</h1>
						<MegaMenu model={this.state.megaMenuItems} />

						<h1>MegaMenu - Vertical</h1>
						<MegaMenu model={this.state.megaMenuItems} orientation="vertical" style={{ width: '200px' }} />
					</div>
				</div>

				<div className="p-col-12 p-col-6">
					<div className="card">
						<h1>TabMenu</h1>
						<TabMenu model={this.state.tabMenuItems} />
					</div>
				</div>
			</div>
		);
	}
}

export default withSecurity(withSecureLayout(MenusDemo));
