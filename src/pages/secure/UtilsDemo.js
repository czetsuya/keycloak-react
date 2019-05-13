import React, { Component } from 'react';
import './Utils.css';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import { withSecurity } from '../routing/SecureRoutes';
import { withSecureLayout } from '../layout/SecureLayout';

class UtilsDemo extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="p-grid">
				<div className="p-col-12">
					<div className="card">
						<h1>Card</h1>
						<p>
							Card is a section to group content and layout provides a built-in css for it. Apply .card
							style class to your container to use it. If the card has a title defined with h1 tag, add
							card-w-title to adjust paddings.
						</p>
						<pre>
							&lt;div className="card"&gt;<br />
							&emsp;&emsp;Content here<br />
							&lt;/div&gt;<br />
							<br />
							&lt;div className="card card-w-title"&gt;<br />
							&emsp;&emsp;&lt;h1&gt;Card with Title&lt;h1&gt;<br />
							&emsp;&emsp;Content here<br />
							&lt;/div&gt;
						</pre>

						<div className="card">Content</div>

						<div className="card card-w-title">
							<h1>Card with Title</h1>
							Content
						</div>

						<h1>Input Animations</h1>
						<p>
							Label of an input can be animated on focus by wrapping both the input and label in an
							element with md-inputfield style class.
						</p>
						<br />

						<span className="md-inputfield">
							<InputText />
							<label>Name</label>
						</span>

						<pre>
							&lt;span className="md-inputfield"&gt;<br />
							&emsp;&emsp;&lt;InputText/&gt;<br />
							&emsp;&emsp;&lt;label>Name&lt;/label&gt;<br />
							&lt;/span>
						</pre>

						<h1>Shadows</h1>
						<p>
							5 levels of shadows are provided varying from ui-shadow-1 to ui-shadow-5 to define the level
							of depth.
						</p>

						<div className="p-grid">
							<div className="p-col-12 p-md-2">
								<div className="shadow-box" />
							</div>
							<div className="p-col-12 p-md-2">
								<div className="shadow-box ui-shadow-1" />
							</div>
							<div className="p-col-12 p-md-2">
								<div className="shadow-box ui-shadow-2" />
							</div>
							<div className="p-col-12 p-md-2">
								<div className="shadow-box ui-shadow-3" />
							</div>
							<div className="p-col-12 p-md-2">
								<div className="shadow-box ui-shadow-4" />
							</div>
							<div className="p-col-12 p-md-2">
								<div className="shadow-box ui-shadow-5" />
							</div>
						</div>
						<pre>
							&lt;div className="p-grid"&gt;<br />
							&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br />
							&emsp;&emsp;&lt;div className="shadow-box"&gt;&lt;/div&gt;<br />
							&emsp;&lt;/div&gt;<br />
							&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br />
							&emsp;&emsp;&lt;div className="shadow-box ui-shadow-1"&gt;&lt;/div&gt;<br />
							&emsp;&lt;/div&gt;<br />
							&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br />
							&emsp;&emsp;&lt;div className="shadow-box ui-shadow-2"&gt;&lt;/div&gt;<br />
							&emsp;&lt;/div&gt;<br />
							&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br />
							&emsp;&emsp;&lt;div className="shadow-box ui-shadow-3"&gt;&lt;/div&gt;<br />
							&emsp;&lt;/div&gt;<br />
							&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br />
							&emsp;&emsp;&lt;div className="shadow-box ui-shadow-4"&gt;&lt;/div&gt;<br />
							&emsp;&lt;/div&gt;<br />
							&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br />
							&emsp;&emsp;&lt;div className="shadow-box ui-shadow-5"&gt;&lt;/div&gt;<br />
							&emsp;&lt;/div&gt;<br />
							&lt;/div&gt;
						</pre>

						<h1>Icons</h1>
						<p>
							<a href="https://design.google.com/icons/">All material icons</a> have been ported using{' '}
							<i>pi-md-</i> convention. To use an icon within a component such as button below, define it
							using the icon attribute prefixed by <i>pi-md-</i>.
						</p>

						<div style={{ textAlign: 'center', marginBottom: '16px' }}>
							<Button label="pi-md-check" icon="pi-md-check" />
						</div>

						<pre>&lt;Button label="pi-md-check" icon="pi-md-check"&gt;&lt;/Button&gt;</pre>

						<div className="p-grid icon-grid">
							<div className="p-col-12 p-md-2">
								<i className="pi-md-3d-rotation" />3d-rotation
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-ac-unit" />ac-unit
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-access-alarm" />access-alarm
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-access-alarms" />access-alarms
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-access-time" />access-time
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-accessibility" />accessibility
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-accessible" />accessible
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-account-balance" />account-balance
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-account-balance-wallet" />account-balance-wallet
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-account-box" />account-box
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-account-circle" />account-circle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add" />add
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-a-photo" />add-a-photo
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-alarm" />add-alarm
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-alert" />add-alert
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-box" />add-box
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-circle" />add-circle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-circle-outline" />add-circle-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-location" />add-location
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-shopping-cart" />add-shopping-cart
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-to-photos" />add-to-photos
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-add-to-queue" />add-to-queue
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-adjust" />adjust
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airline-seat-flat" />airline-seat-flat
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airline-seat-flat-angled" />airline-seat-flat-angled
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airline-seat-individual-suite" />airline-seat-individual-suite
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airline-seat-legroom-extra" />airline-seat-legroom-extra
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airline-seat-legroom-normal" />airline-seat-legroom-normal
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airline-seat-legroom-reduced" />airline-seat-legroom-reduced
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airline-seat-recline-extra" />airline-seat-recline-extra
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airline-seat-recline-normal" />airline-seat-recline-normal
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airplanemode-active" />airplanemode-active
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airplanemode-inactive" />airplanemode-inactive
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airplay" />airplay
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-airport-shuttle" />airport-shuttle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-alarm" />alarm
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-alarm-add" />alarm-add
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-alarm-off" />alarm-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-alarm-on" />alarm-on
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-album" />album
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-all-inclusive" />all-inclusive
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-all-out" />all-out
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-android" />android
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-announcement" />announcement
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-apps" />apps
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-archive" />archive
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-arrow-back" />arrow-back
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-arrow-downward" />arrow-downward
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-arrow-drop-down" />arrow-drop-down
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-arrow-drop-down-circle" />arrow-drop-down-circle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-arrow-drop-up" />arrow-drop-up
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-arrow-forward" />arrow-forward
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-arrow-upward" />arrow-upward
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-art-track" />art-track
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-aspect-ratio" />aspect-ratio
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assessment" />assessment
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assignment" />assignment
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assignment-ind" />assignment-ind
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assignment-late" />assignment-late
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assignment-return" />assignment-return
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assignment-returned" />assignment-returned
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assignment-turned-in" />assignment-turned-in
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assistant" />assistant
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-assistant-photo" />assistant-photo
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-attach-file" />attach-file
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-attach-money" />attach-money
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-attachment" />attachment
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-audiotrack" />audiotrack
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-autorenew" />autorenew
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-av-timer" />av-timer
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-backspace" />backspace
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-backup" />backup
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-battery-alert" />battery-alert
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-battery-charging-full" />battery-charging-full
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-battery-full" />battery-full
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-battery-std" />battery-std
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-battery-unknown" />battery-unknown
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-beach-access" />beach-access
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-beenhere" />beenhere
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-block" />block
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bluetooth" />bluetooth
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bluetooth-audio" />bluetooth-audio
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bluetooth-connected" />bluetooth-connected
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bluetooth-disabled" />bluetooth-disabled
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bluetooth-searching" />bluetooth-searching
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-blur-circular" />blur-circular
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-blur-linear" />blur-linear
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-blur-off" />blur-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-blur-on" />blur-on
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-book" />book
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bookmark" />bookmark
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bookmark-border" />bookmark-border
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-all" />border-all
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-bottom" />border-bottom
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-clear" />border-clear
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-color" />border-color
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-horizontal" />border-horizontal
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-inner" />border-inner
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-left" />border-left
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-outer" />border-outer
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-right" />border-right
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-style" />border-style
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-top" />border-top
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-border-vertical" />border-vertical
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-branding-watermark" />branding-watermark
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-1" />brightness-1
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-2" />brightness-2
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-3" />brightness-3
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-4" />brightness-4
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-5" />brightness-5
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-6" />brightness-6
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-7" />brightness-7
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-auto" />brightness-auto
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-high" />brightness-high
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-low" />brightness-low
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brightness-medium" />brightness-medium
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-broken-image" />broken-image
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-brush" />brush
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bubble-chart" />bubble-chart
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-bug-report" />bug-report
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-build" />build
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-burst-mode" />burst-mode
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-business" />business
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-business-center" />business-center
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cached" />cached
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cake" />cake
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call" />call
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call-end" />call-end
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call-made" />call-made
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call-merge" />call-merge
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call-missed" />call-missed
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call-missed-outgoing" />call-missed-outgoing
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call-received" />call-received
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call-split" />call-split
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-call-to-action" />call-to-action
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-camera" />camera
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-camera-alt" />camera-alt
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-camera-enhance" />camera-enhance
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-camera-front" />camera-front
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-camera-rear" />camera-rear
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-camera-roll" />camera-roll
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cancel" />cancel
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-card-giftcard" />card-giftcard
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-card-membership" />card-membership
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-card-travel" />card-travel
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-casino" />casino
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cast" />cast
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cast-connected" />cast-connected
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-center-focus-strong" />center-focus-strong
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-center-focus-weak" />center-focus-weak
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-change-history" />change-history
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-chat" />chat
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-chat-bubble" />chat-bubble
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-chat-bubble-outline" />chat-bubble-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-check" />check
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-check-box" />check-box
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-check-box-outline-blank" />check-box-outline-blank
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-check-circle" />check-circle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-chevron-left" />chevron-left
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-chevron-right" />chevron-right
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-child-care" />child-care
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-child-friendly" />child-friendly
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-chrome-reader-mode" />chrome-reader-mode
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-class" />class
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-clear" />clear
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-clear-all" />clear-all
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-close" />close
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-closed-caption" />closed-caption
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cloud" />cloud
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cloud-circle" />cloud-circle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cloud-done" />cloud-done
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cloud-download" />cloud-download
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cloud-off" />cloud-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cloud-queue" />cloud-queue
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-cloud-upload" />cloud-upload
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-code" />code
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-collections" />collections
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-collections-bookmark" />collections-bookmark
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-color-lens" />color-lens
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-colorize" />colorize
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-comment" />comment
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-compare" />compare
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-compare-arrows" />compare-arrows
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-computer" />computer
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-confirmation-number" />confirmation-number
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-contact-mail" />contact-mail
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-contact-phone" />contact-phone
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-contacts" />contacts
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-content-copy" />content-copy
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-content-cut" />content-cut
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-content-paste" />content-paste
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-control-point" />control-point
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-control-point-duplicate" />control-point-duplicate
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-copyright" />copyright
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-create" />create
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-create-new-folder" />create-new-folder
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-credit-card" />credit-card
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop" />crop
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-16-9" />crop-16-9
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-3-2" />crop-3-2
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-5-4" />crop-5-4
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-7-5" />crop-7-5
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-din" />crop-din
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-free" />crop-free
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-landscape" />crop-landscape
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-original" />crop-original
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-portrait" />crop-portrait
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-rotate" />crop-rotate
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-crop-square" />crop-square
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-dashboard" />dashboard
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-data-usage" />data-usage
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-date-range" />date-range
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-dehaze" />dehaze
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-delete" />delete
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-delete-forever" />delete-forever
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-delete-sweep" />delete-sweep
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-description" />description
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-desktop-mac" />desktop-mac
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-desktop-windows" />desktop-windows
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-details" />details
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-developer-board" />developer-board
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-developer-mode" />developer-mode
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-device-hub" />device-hub
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-devices" />devices
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-devices-other" />devices-other
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-dialer-sip" />dialer-sip
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-dialpad" />dialpad
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions" />directions
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-bike" />directions-bike
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-boat" />directions-boat
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-bus" />directions-bus
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-car" />directions-car
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-railway" />directions-railway
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-run" />directions-run
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-subway" />directions-subway
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-transit" />directions-transit
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-directions-walk" />directions-walk
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-disc-full" />disc-full
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-dns" />dns
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-do-not-disturb" />do-not-disturb
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-do-not-disturb-alt" />do-not-disturb-alt
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-do-not-disturb-off" />do-not-disturb-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-do-not-disturb-on" />do-not-disturb-on
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-dock" />dock
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-domain" />domain
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-done" />done
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-done-all" />done-all
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-donut-large" />donut-large
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-donut-small" />donut-small
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-drafts" />drafts
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-drag-handle" />drag-handle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-drive-eta" />drive-eta
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-dvr" />dvr
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-edit" />edit
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-edit-location" />edit-location
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-eject" />eject
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-email" />email
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-enhanced-encryption" />enhanced-encryption
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-equalizer" />equalizer
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-error" />error
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-error-outline" />error-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-euro-symbol" />euro-symbol
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-ev-station" />ev-station
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-event" />event
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-event-available" />event-available
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-event-busy" />event-busy
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-event-note" />event-note
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-event-seat" />event-seat
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-exit-to-app" />exit-to-app
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-expand-less" />expand-less
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-expand-more" />expand-more
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-explicit" />explicit
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-explore" />explore
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-exposure" />exposure
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-exposure-neg-1" />exposure-neg-1
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-exposure-neg-2" />exposure-neg-2
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-exposure-plus-1" />exposure-plus-1
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-exposure-plus-2" />exposure-plus-2
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-exposure-zero" />exposure-zero
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-extension" />extension
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-face" />face
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fast-forward" />fast-forward
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fast-rewind" />fast-rewind
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-favorite" />favorite
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-favorite-border" />favorite-border
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-featured-play-list" />featured-play-list
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-featured-video" />featured-video
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-feedback" />feedback
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fiber-dvr" />fiber-dvr
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fiber-manual-record" />fiber-manual-record
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fiber-new" />fiber-new
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fiber-pin" />fiber-pin
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fiber-smart-record" />fiber-smart-record
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-file-download" />file-download
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-file-upload" />file-upload
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter" />filter
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-1" />filter-1
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-2" />filter-2
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-3" />filter-3
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-4" />filter-4
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-5" />filter-5
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-6" />filter-6
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-7" />filter-7
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-8" />filter-8
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-9" />filter-9
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-9-plus" />filter-9-plus
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-b-and-w" />filter-b-and-w
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-center-focus" />filter-center-focus
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-drama" />filter-drama
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-frames" />filter-frames
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-hdr" />filter-hdr
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-list" />filter-list
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-none" />filter-none
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-tilt-shift" />filter-tilt-shift
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-filter-vintage" />filter-vintage
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-find-in-page" />find-in-page
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-find-replace" />find-replace
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fingerprint" />fingerprint
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-first-page" />first-page
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fitness-center" />fitness-center
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flag" />flag
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flare" />flare
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flash-auto" />flash-auto
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flash-off" />flash-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flash-on" />flash-on
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flight" />flight
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flight-land" />flight-land
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flight-takeoff" />flight-takeoff
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flip" />flip
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flip-to-back" />flip-to-back
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-flip-to-front" />flip-to-front
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-folder" />folder
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-folder-open" />folder-open
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-folder-shared" />folder-shared
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-folder-special" />folder-special
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-font-download" />font-download
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-align-center" />format-align-center
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-align-justify" />format-align-justify
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-align-left" />format-align-left
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-align-right" />format-align-right
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-bold" />format-bold
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-clear" />format-clear
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-color-fill" />format-color-fill
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-color-reset" />format-color-reset
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-color-text" />format-color-text
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-indent-decrease" />format-indent-decrease
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-indent-increase" />format-indent-increase
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-italic" />format-italic
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-line-spacing" />format-line-spacing
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-list-bulleted" />format-list-bulleted
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-list-numbered" />format-list-numbered
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-paint" />format-paint
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-quote" />format-quote
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-shapes" />format-shapes
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-size" />format-size
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-strikethrough" />format-strikethrough
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-textdirection-l-to-r" />format-textdirection-l-to-r
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-textdirection-r-to-l" />format-textdirection-r-to-l
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-format-underlined" />format-underlined
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-forum" />forum
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-forward" />forward
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-forward-10" />forward-10
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-forward-30" />forward-30
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-forward-5" />forward-5
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-free-breakfast" />free-breakfast
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fullscreen" />fullscreen
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-fullscreen-exit" />fullscreen-exit
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-functions" />functions
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-g-translate" />g-translate
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-gamepad" />gamepad
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-games" />games
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-gavel" />gavel
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-gesture" />gesture
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-get-app" />get-app
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-gif" />gif
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-golf-course" />golf-course
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-gps-fixed" />gps-fixed
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-gps-not-fixed" />gps-not-fixed
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-gps-off" />gps-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-grade" />grade
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-gradient" />gradient
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-grain" />grain
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-graphic-eq" />graphic-eq
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-grid-off" />grid-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-grid-on" />grid-on
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-group" />group
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-group-add" />group-add
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-group-work" />group-work
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hd" />hd
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hdr-off" />hdr-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hdr-on" />hdr-on
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hdr-strong" />hdr-strong
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hdr-weak" />hdr-weak
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-headset" />headset
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-headset-mic" />headset-mic
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-healing" />healing
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hearing" />hearing
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-help" />help
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-help-outline" />help-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-high-quality" />high-quality
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-highlight" />highlight
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-highlight-off" />highlight-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-history" />history
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-home" />home
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hot-tub" />hot-tub
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hotel" />hotel
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hourglass-empty" />hourglass-empty
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-hourglass-full" />hourglass-full
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-http" />http
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-https" />https
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-image" />image
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-image-aspect-ratio" />image-aspect-ratio
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-import-contacts" />import-contacts
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-import-export" />import-export
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-important-devices" />important-devices
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-inbox" />inbox
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-indeterminate-check-box" />indeterminate-check-box
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-info" />info
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-info-outline" />info-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-input" />input
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-insert-chart" />insert-chart
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-insert-comment" />insert-comment
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-insert-drive-file" />insert-drive-file
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-insert-emoticon" />insert-emoticon
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-insert-invitation" />insert-invitation
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-insert-link" />insert-link
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-insert-photo" />insert-photo
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-invert-colors" />invert-colors
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-invert-colors-off" />invert-colors-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-iso" />iso
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard" />keyboard
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-arrow-down" />keyboard-arrow-down
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-arrow-left" />keyboard-arrow-left
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-arrow-right" />keyboard-arrow-right
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-arrow-up" />keyboard-arrow-up
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-backspace" />keyboard-backspace
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-capslock" />keyboard-capslock
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-hide" />keyboard-hide
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-return" />keyboard-return
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-tab" />keyboard-tab
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-keyboard-voice" />keyboard-voice
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-kitchen" />kitchen
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-label" />label
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-label-outline" />label-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-landscape" />landscape
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-language" />language
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-laptop" />laptop
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-laptop-chromebook" />laptop-chromebook
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-laptop-mac" />laptop-mac
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-laptop-windows" />laptop-windows
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-last-page" />last-page
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-launch" />launch
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-layers" />layers
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-layers-clear" />layers-clear
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-leak-add" />leak-add
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-leak-remove" />leak-remove
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-lens" />lens
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-library-add" />library-add
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-library-books" />library-books
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-library-music" />library-music
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-lightbulb-outline" />lightbulb-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-line-style" />line-style
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-line-weight" />line-weight
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-linear-scale" />linear-scale
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-link" />link
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-linked-camera" />linked-camera
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-list" />list
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-live-help" />live-help
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-live-tv" />live-tv
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-activity" />local-activity
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-airport" />local-airport
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-atm" />local-atm
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-bar" />local-bar
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-cafe" />local-cafe
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-car-wash" />local-car-wash
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-convenience-store" />local-convenience-store
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-dining" />local-dining
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-drink" />local-drink
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-florist" />local-florist
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-gas-station" />local-gas-station
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-grocery-store" />local-grocery-store
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-hospital" />local-hospital
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-hotel" />local-hotel
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-laundry-service" />local-laundry-service
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-library" />local-library
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-mall" />local-mall
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-movies" />local-movies
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-offer" />local-offer
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-parking" />local-parking
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-pharmacy" />local-pharmacy
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-phone" />local-phone
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-pizza" />local-pizza
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-play" />local-play
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-post-office" />local-post-office
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-printshop" />local-printshop
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-see" />local-see
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-shipping" />local-shipping
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-local-taxi" />local-taxi
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-location-city" />location-city
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-location-disabled" />location-disabled
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-location-off" />location-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-location-on" />location-on
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-location-searching" />location-searching
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-lock" />lock
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-lock-open" />lock-open
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-lock-outline" />lock-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-looks" />looks
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-looks-3" />looks-3
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-looks-4" />looks-4
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-looks-5" />looks-5
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-looks-6" />looks-6
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-looks-one" />looks-one
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-looks-two" />looks-two
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-loop" />loop
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-loupe" />loupe
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-low-priority" />low-priority
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-loyalty" />loyalty
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mail" />mail
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mail-outline" />mail-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-map" />map
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-markunread" />markunread
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-markunread-mailbox" />markunread-mailbox
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-memory" />memory
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-menu" />menu
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-merge-type" />merge-type
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-message" />message
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mic" />mic
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mic-none" />mic-none
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mic-off" />mic-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mms" />mms
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mode-comment" />mode-comment
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mode-edit" />mode-edit
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-monetization-on" />monetization-on
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-money-off" />money-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-monochrome-photos" />monochrome-photos
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mood" />mood
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mood-bad" />mood-bad
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-more" />more
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-more-horiz" />more-horiz
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-more-vert" />more-vert
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-motorcycle" />motorcycle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-mouse" />mouse
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-move-to-inbox" />move-to-inbox
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-movie" />movie
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-movie-creation" />movie-creation
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-movie-filter" />movie-filter
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-multiline-chart" />multiline-chart
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-music-note" />music-note
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-music-video" />music-video
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-my-location" />my-location
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-nature" />nature
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-nature-people" />nature-people
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-navigate-before" />navigate-before
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-navigate-next" />navigate-next
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-navigation" />navigation
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-near-me" />near-me
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-network-cell" />network-cell
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-network-check" />network-check
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-network-locked" />network-locked
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-network-wifi" />network-wifi
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-new-releases" />new-releases
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-next-week" />next-week
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-nfc" />nfc
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-no-encryption" />no-encryption
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-no-sim" />no-sim
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-not-interested" />not-interested
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-note" />note
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-note-add" />note-add
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-notifications" />notifications
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-notifications-active" />notifications-active
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-notifications-none" />notifications-none
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-notifications-off" />notifications-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-notifications-paused" />notifications-paused
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-offline-pin" />offline-pin
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-ondemand-video" />ondemand-video
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-opacity" />opacity
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-open-in-browser" />open-in-browser
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-open-in-new" />open-in-new
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-open-with" />open-with
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pages" />pages
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pageview" />pageview
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-palette" />palette
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pan-tool" />pan-tool
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-panorama" />panorama
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-panorama-fish-eye" />panorama-fish-eye
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-panorama-horizontal" />panorama-horizontal
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-panorama-vertical" />panorama-vertical
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-panorama-wide-angle" />panorama-wide-angle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-party-mode" />party-mode
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pause" />pause
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pause-circle-filled" />pause-circle-filled
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pause-circle-outline" />pause-circle-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-payment" />payment
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-people" />people
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-people-outline" />people-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-perm-camera-mic" />perm-camera-mic
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-perm-contact-calendar" />perm-contact-calendar
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-perm-data-setting" />perm-data-setting
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-perm-device-information" />perm-device-information
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-perm-identity" />perm-identity
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-perm-media" />perm-media
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-perm-phone-msg" />perm-phone-msg
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-perm-scan-wifi" />perm-scan-wifi
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-person" />person
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-person-add" />person-add
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-person-outline" />person-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-person-pin" />person-pin
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-person-pin-circle" />person-pin-circle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-personal-video" />personal-video
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pets" />pets
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone" />phone
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone-android" />phone-android
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone-bluetooth-speaker" />phone-bluetooth-speaker
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone-forwarded" />phone-forwarded
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone-in-talk" />phone-in-talk
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone-iphone" />phone-iphone
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone-locked" />phone-locked
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone-missed" />phone-missed
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phone-paused" />phone-paused
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phonelink" />phonelink
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phonelink-erase" />phonelink-erase
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phonelink-lock" />phonelink-lock
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phonelink-off" />phonelink-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phonelink-ring" />phonelink-ring
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-phonelink-setup" />phonelink-setup
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-photo" />photo
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-photo-album" />photo-album
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-photo-camera" />photo-camera
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-photo-filter" />photo-filter
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-photo-library" />photo-library
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-photo-size-select-actual" />photo-size-select-actual
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-photo-size-select-large" />photo-size-select-large
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-photo-size-select-small" />photo-size-select-small
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-picture-as-pdf" />picture-as-pdf
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-picture-in-picture" />picture-in-picture
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-picture-in-picture-alt" />picture-in-picture-alt
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pie-chart" />pie-chart
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pie-chart-outlined" />pie-chart-outlined
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pin-drop" />pin-drop
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-place" />place
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-play-arrow" />play-arrow
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-play-circle-filled" />play-circle-filled
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-play-circle-outline" />play-circle-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-play-for-work" />play-for-work
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-playlist-add" />playlist-add
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-playlist-add-check" />playlist-add-check
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-playlist-play" />playlist-play
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-plus-one" />plus-one
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-poll" />poll
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-polymer" />polymer
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pool" />pool
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-portable-wifi-off" />portable-wifi-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-portrait" />portrait
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-power" />power
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-power-input" />power-input
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-power-settings-new" />power-settings-new
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-pregnant-woman" />pregnant-woman
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-present-to-all" />present-to-all
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-print" />print
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-priority-high" />priority-high
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-public" />public
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-publish" />publish
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-query-builder" />query-builder
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-question-answer" />question-answer
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-queue" />queue
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-queue-music" />queue-music
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-queue-play-next" />queue-play-next
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-radio" />radio
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-radio-button-checked" />radio-button-checked
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-radio-button-unchecked" />radio-button-unchecked
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-rate-review" />rate-review
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-receipt" />receipt
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-recent-actors" />recent-actors
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-record-voice-over" />record-voice-over
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-redeem" />redeem
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-redo" />redo
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-refresh" />refresh
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-remove" />remove
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-remove-circle" />remove-circle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-remove-circle-outline" />remove-circle-outline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-remove-from-queue" />remove-from-queue
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-remove-red-eye" />remove-red-eye
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-remove-shopping-cart" />remove-shopping-cart
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-reorder" />reorder
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-repeat" />repeat
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-repeat-one" />repeat-one
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-replay" />replay
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-replay-10" />replay-10
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-replay-30" />replay-30
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-replay-5" />replay-5
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-reply" />reply
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-reply-all" />reply-all
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-report" />report
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-report-problem" />report-problem
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-restaurant" />restaurant
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-restaurant-menu" />restaurant-menu
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-restore" />restore
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-restore-page" />restore-page
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-ring-volume" />ring-volume
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-room" />room
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-room-service" />room-service
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-rotate-90-degrees-ccw" />rotate-90-degrees-ccw
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-rotate-left" />rotate-left
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-rotate-right" />rotate-right
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-rounded-corner" />rounded-corner
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-router" />router
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-rowing" />rowing
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-rss-feed" />rss-feed
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-rv-hookup" />rv-hookup
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-satellite" />satellite
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-save" />save
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-scanner" />scanner
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-schedule" />schedule
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-school" />school
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-screen-lock-landscape" />screen-lock-landscape
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-screen-lock-portrait" />screen-lock-portrait
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-screen-lock-rotation" />screen-lock-rotation
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-screen-rotation" />screen-rotation
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-screen-share" />screen-share
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sd-card" />sd-card
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sd-storage" />sd-storage
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-search" />search
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-security" />security
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-select-all" />select-all
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-send" />send
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sentiment-dissatisfied" />sentiment-dissatisfied
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sentiment-neutral" />sentiment-neutral
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sentiment-satisfied" />sentiment-satisfied
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sentiment-very-dissatisfied" />sentiment-very-dissatisfied
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sentiment-very-satisfied" />sentiment-very-satisfied
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings" />settings
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-applications" />settings-applications
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-backup-restore" />settings-backup-restore
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-bluetooth" />settings-bluetooth
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-brightness" />settings-brightness
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-cell" />settings-cell
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-ethernet" />settings-ethernet
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-input-antenna" />settings-input-antenna
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-input-component" />settings-input-component
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-input-composite" />settings-input-composite
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-input-hdmi" />settings-input-hdmi
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-input-svideo" />settings-input-svideo
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-overscan" />settings-overscan
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-phone" />settings-phone
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-power" />settings-power
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-remote" />settings-remote
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-system-daydream" />settings-system-daydream
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-settings-voice" />settings-voice
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-share" />share
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-shop" />shop
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-shop-two" />shop-two
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-shopping-basket" />shopping-basket
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-shopping-cart" />shopping-cart
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-short-text" />short-text
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-show-chart" />show-chart
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-shuffle" />shuffle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-signal-cellular-4-bar" />signal-cellular-4-bar
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-signal-cellular-connected-no-internet-4-bar" />signal-cellular-connected-no-internet-4-bar
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-signal-cellular-no-sim" />signal-cellular-no-sim
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-signal-cellular-null" />signal-cellular-null
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-signal-cellular-off" />signal-cellular-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-signal-wifi-4-bar" />signal-wifi-4-bar
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-signal-wifi-4-bar-lock" />signal-wifi-4-bar-lock
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-signal-wifi-off" />signal-wifi-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sim-card" />sim-card
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sim-card-alert" />sim-card-alert
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-skip-next" />skip-next
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-skip-previous" />skip-previous
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-slideshow" />slideshow
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-slow-motion-video" />slow-motion-video
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-smartphone" />smartphone
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-smoke-free" />smoke-free
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-smoking-rooms" />smoking-rooms
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sms" />sms
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sms-failed" />sms-failed
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-snooze" />snooze
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sort" />sort
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sort-by-alpha" />sort-by-alpha
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-spa" />spa
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-space-bar" />space-bar
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-speaker" />speaker
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-speaker-group" />speaker-group
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-speaker-notes" />speaker-notes
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-speaker-notes-off" />speaker-notes-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-speaker-phone" />speaker-phone
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-spellcheck" />spellcheck
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-star" />star
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-star-border" />star-border
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-star-half" />star-half
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-stars" />stars
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-stay-current-landscape" />stay-current-landscape
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-stay-current-portrait" />stay-current-portrait
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-stay-primary-landscape" />stay-primary-landscape
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-stay-primary-portrait" />stay-primary-portrait
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-stop" />stop
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-stop-screen-share" />stop-screen-share
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-storage" />storage
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-store" />store
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-store-mall-directory" />store-mall-directory
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-straighten" />straighten
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-streetview" />streetview
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-strikethrough-s" />strikethrough-s
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-style" />style
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-subdirectory-arrow-left" />subdirectory-arrow-left
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-subdirectory-arrow-right" />subdirectory-arrow-right
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-subject" />subject
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-subscriptions" />subscriptions
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-subtitles" />subtitles
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-subway" />subway
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-supervisor-account" />supervisor-account
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-surround-sound" />surround-sound
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-swap-calls" />swap-calls
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-swap-horiz" />swap-horiz
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-swap-vert" />swap-vert
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-swap-vertical-circle" />swap-vertical-circle
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-switch-camera" />switch-camera
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-switch-video" />switch-video
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sync" />sync
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sync-disabled" />sync-disabled
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-sync-problem" />sync-problem
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-system-update" />system-update
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-system-update-alt" />system-update-alt
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tab" />tab
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tab-unselected" />tab-unselected
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tablet" />tablet
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tablet-android" />tablet-android
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tablet-mac" />tablet-mac
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tag-faces" />tag-faces
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tap-and-play" />tap-and-play
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-terrain" />terrain
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-text-fields" />text-fields
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-text-format" />text-format
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-textsms" />textsms
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-texture" />texture
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-theaters" />theaters
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-thumb-down" />thumb-down
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-thumb-up" />thumb-up
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-thumbs-up-down" />thumbs-up-down
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-time-to-leave" />time-to-leave
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-timelapse" />timelapse
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-timeline" />timeline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-timer" />timer
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-timer-10" />timer-10
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-timer-3" />timer-3
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-timer-off" />timer-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-title" />title
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-toc" />toc
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-today" />today
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-toll" />toll
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tonality" />tonality
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-touch-app" />touch-app
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-toys" />toys
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-track-changes" />track-changes
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-traffic" />traffic
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-train" />train
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tram" />tram
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-transfer-within-a-station" />transfer-within-a-station
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-transform" />transform
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-translate" />translate
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-trending-down" />trending-down
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-trending-flat" />trending-flat
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-trending-up" />trending-up
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tune" />tune
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-turned-in" />turned-in
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-turned-in-not" />turned-in-not
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-tv" />tv
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-unarchive" />unarchive
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-undo" />undo
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-unfold-less" />unfold-less
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-unfold-more" />unfold-more
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-update" />update
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-usb" />usb
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-verified-user" />verified-user
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-vertical-align-bottom" />vertical-align-bottom
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-vertical-align-center" />vertical-align-center
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-vertical-align-top" />vertical-align-top
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-vibration" />vibration
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-video-call" />video-call
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-video-label" />video-label
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-video-library" />video-library
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-videocam" />videocam
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-videocam-off" />videocam-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-videogame-asset" />videogame-asset
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-agenda" />view-agenda
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-array" />view-array
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-carousel" />view-carousel
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-column" />view-column
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-comfy" />view-comfy
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-compact" />view-compact
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-day" />view-day
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-headline" />view-headline
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-list" />view-list
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-module" />view-module
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-quilt" />view-quilt
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-stream" />view-stream
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-view-week" />view-week
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-vignette" />vignette
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-visibility" />visibility
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-visibility-off" />visibility-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-voice-chat" />voice-chat
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-voicemail" />voicemail
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-volume-down" />volume-down
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-volume-mute" />volume-mute
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-volume-off" />volume-off
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-volume-up" />volume-up
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-vpn-key" />vpn-key
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-vpn-lock" />vpn-lock
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wallpaper" />wallpaper
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-warning" />warning
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-watch" />watch
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-watch-later" />watch-later
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wb-auto" />wb-auto
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wb-cloudy" />wb-cloudy
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wb-incandescent" />wb-incandescent
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wb-iridescent" />wb-iridescent
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wb-sunny" />wb-sunny
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wc" />wc
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-web" />web
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-web-asset" />web-asset
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-weekend" />weekend
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-whatshot" />whatshot
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-widgets" />widgets
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wifi" />wifi
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wifi-lock" />wifi-lock
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wifi-tethering" />wifi-tethering
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-work" />work
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-wrap-text" />wrap-text
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-youtube-searched-for" />youtube-searched-for
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-zoom-in" />zoom-in
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-zoom-out" />zoom-out
							</div>
							<div className="p-col-12 p-md-2">
								<i className="pi-md-zoom-out-map" />zoom-out-map
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withSecurity(withSecureLayout(UtilsDemo));
