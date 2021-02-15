import React, {Component} from 'react';
import RepairService from '../../../../../services/lab5/RepairService';
import PageServiceTimer from "../../components/PageServiceTimer";
import Popup from "../../components/Popup";
import {navigate} from "@reach/router";
import {minFont, maxFont} from '../../../../../constants/lab5'

class PageLayoutRepair extends Component {
	constructor(props) {
		super(props);

		this.state = {
			h1value: null,
			ulvalue: null,
			classvalue: null,
			fontvalue: null,
			fontfamilyvalue: null,
		};
	}

	componentWillMount() {
		const { data } = this.props;
		this.setState({
			h1value: data.h1value,
			ulvalue: data.ulvalue,
			classvalue: data.classvalue,
			fontvalue: data.fontvalue,
			fontfamilyvalue: data.fontfamilyvalue,
		});
	}

	handleSubmit(event) {
		const { handlers } = this.props;
		const {
			h1value,
			ulvalue,
			classvalue,
			fontvalue,
			fontfamilyvalue
		} = this.state;

		event.preventDefault();

		// Submit a repair entry in the database.
		RepairService.submitRepair(
			h1value,
			ulvalue,
			classvalue,
			fontvalue,
			fontfamilyvalue
		);

		// Update the state and close the repair.
		handlers.updateRepairPageLayout(
			h1value,
			ulvalue,
			classvalue,
			fontvalue,
			fontfamilyvalue
		);
		handlers.closeRepair();
		handlers.updatePopup('The repairs have been made.');

		setTimeout(() => {
			handlers.updatePopup('');
		}, 5000);
	}

	changeHandler(event) {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}

	handleNav() {
		navigate("/Lab5/Game/DementiaAccessible");
	}


	render() {
		const { visible, handlers, state, data, actions } = this.props;
		return (
			<div>
				<div className= "cognitive_instructions">
					Let's make the changes to make the code accessible. Click 'Repair' to make the appropriate changes.
				</div>
				<Popup message={state.app5.popupMessage} handler={actions.updatePopup} />

				<button className="btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton" onClick={handlers.openRepair} key="repair">
					Repair
				</button>
				<button
					className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
					onClick = {this.handleNav}
					key="Next"
				>
					Next
				</button>
				{visible &&
				<div className="code_editor">
					<div className="code_editor__content">
						<div className="code_editor__files">
							<div className="code_editor__file code_editor__file--active">
								DementiaAccessible.js
							</div>
						</div>

						<div className="code_editor__code">
							<div className="code_editor__line">
							<span className="code_editor__line--darkgreen">
								&#47;&#47; This is where you can can add headings and lists to allow easier reading
							</span>
							</div>
							<div className="code_editor__line">
								<span className="code_editor__line--purple">import&nbsp;</span>
								<span className="code_editor__line--blue">React</span>
								<span className="code_editor__line--gold">,&nbsp;</span>
								<span className="code_editor__line--gold">&#123;</span>
								<span className="code_editor__line--blue">&nbsp;Component&nbsp;</span>
								<span className="code_editor__line--gold">&#125;&nbsp;</span>
								<span className="code_editor__line--purple">from&nbsp;</span>
								<span className="code_editor__line--orange">'react'</span>
								<span className="code_editor__line--gold">;</span>
							</div>

							<div className="code_editor__line">&nbsp;</div>

							<div className="code_editor__line">
								<span className="code_editor__line--blue">class&nbsp;</span>
								<span className="code_editor__line--green">DementiaAccessible&nbsp;</span>
								<span className="code_editor__line--blue">extends&nbsp;</span>
								<span className="code_editor__line--green">Component&nbsp;</span>
								<span className="code_editor__line--gold">&#123;</span>
							</div>

							<div className="code_editor__line">
								<span>&nbsp;&nbsp;</span>
								<span className="code_editor__line--yellow">render</span>
								<span className="code_editor__line--purple">() &#123;</span>
							</div>

							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--purple">return</span>
								<span className="code_editor__line--blue">&nbsp;(</span>
							</div>

							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">div</span>
								<span className="code_editor__line--darkblue">&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkgreen">&#47;&#47;Enter 'h1' into the input below</span>
							</div>

							<div className="code_editor__line code_editor__line-background--light">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span>
								<input
									name="h1value"
									type="text"
									className="htmlinput"
									defaultValue={data.h1value}
									onChange={this.changeHandler.bind(this)}
									required
									title="must enter h1"
								/>
							</span>
								<span className="code_editor__line--darkblue">&#62;</span>
								<span className="code_editor__line--white"> 3.0 Dementia </span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">/{this.state.h1value}</span>
								<span className="code_editor__line--darkblue">&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">p</span>
								<span className="code_editor__line--darkblue">&#62;</span>
								<span className="code_editor__line--white"> Some of the symptoms of dementia include: </span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">/p</span>
								<span className="code_editor__line--darkblue">&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">h2</span>
								<span className="code_editor__line--darkblue">&#62;</span>
								<span className="code_editor__line--white"> 3.0.1 Symptoms </span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">/h2</span>
								<span className="code_editor__line--darkblue">&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkgreen">&#47;&#47;Enter 'body' into the input below</span>
							</div>
							<div className="code_editor__line code_editor__line-background--light">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">div</span>
								<span className="code_editor__line--blue"> class</span>
								<span className="code_editor__line--white"> = </span>
								<span>
									<input
										name="classvalue"
										type="text"
										defaultValue={data.classvalue}
										onChange={this.changeHandler.bind(this)}
										title="must enter body"
									/>
								</span>
								<span className="code_editor__line--darkblue">/&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkgreen">&#47;&#47;Enter 'ul' into the input below</span>
							</div>
							<div className="code_editor__line code_editor__line-background--light">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span>
									<input
										name="ulvalue"
										type="text"
										className="htmlinput"
										defaultValue={data.ulvalue}
										onChange={this.changeHandler.bind(this)}
										title="must enter ul"
									/>
								</span>
								<span className="code_editor__line--darkblue">/&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;li&#62;</span>
								<span className="code_editor__line--white"> Difficulty remembering </span>
								<span className="code_editor__line--darkblue">&#60;/li&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;li&#62;</span>
								<span className="code_editor__line--white"> Difficulty organizing thoughts </span>
								<span className="code_editor__line--darkblue">&#60;/li&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;li&#62;</span>
								<span className="code_editor__line--white"> Difficulty working within time limits </span>
								<span className="code_editor__line--darkblue">&#60;/li&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;li&#62;</span>
								<span className="code_editor__line--white"> Visual processing difficulty </span>
								<span className="code_editor__line--darkblue">&#60;/li&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;/{this.state.ulvalue}&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">/div</span>
								<span className="code_editor__line--darkblue">&#62;</span>
							</div>

							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--blue">)</span>
								<span>;</span>
							</div>

							<div className="code_editor__line">
								<span>&nbsp;&nbsp;</span>
								<span className="code_editor__line--purple">&#125;</span>
							</div>

							<div className="code_editor__line">
								<span className="code_editor__line--purple">&#125;</span>
							</div>

							<div className="code_editor__line">&nbsp;</div>

							<div className="code_editor__line">
								<span className="code_editor__line--purple">export&nbsp;</span>
								<span className="code_editor__line--purple">default&nbsp;</span>
								<span className="code_editor__line--blue">DementiaAccessible</span>
								<span>;</span>
							</div>
						</div>
					</div>

					<div className="code_editor__content">
						<div className="code_editor__files">
							<div className='code_editor__file code_editor__file--active'>
								DementiaAccessible.css
							</div>
						</div>
						<div className="code_editor__code">
							<div className="code_editor__line">
							<span className="code_editor__line--darkgreen">
								&#47;&#47; This is where you can change the page format styling.
							</span>
							</div>
							<p className="code_editor__class">.body &#123;</p>
							<div className="code_editor__form">
								<div className="code_editor__line">
									<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span className="code_editor__line--darkgreen">
									&#47;&#47; Change font-size to value between {minFont}px and {maxFont}px.
								</span>
								</div>
								<div className="code_editor__property code_editor__line-background--light">
									<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span>font-size:&nbsp;</span>
									<span>
									<input
										name="fontvalue"
										type="text"
										defaultValue={data.fontvalue}
										onChange={this.changeHandler.bind(this)}
										title={`must enter between ${minFont}px and ${maxFont}px`}
									/>
								</span>
								</div>
								<div className="code_editor__input">

								</div>
								<div className="code_editor__line">
									<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span className="code_editor__line--darkgreen">
									&#47;&#47; Change font-family to roboto or arial.
								</span>
								</div>
								<div className="code_editor__property code_editor__line-background--light">
									<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span>font-family:&nbsp;</span>
									<span>
									<input
										name="fontfamilyvalue"
										type="text"
										defaultValue={data.fontfamilyvalue}
										onChange={this.changeHandler.bind(this)}
										title="must enter arial or roboto"
									/>
								</span>
								</div>
							</div>
							<p className="code_editor__class">&#125;</p>
						</div>

					</div>
					<button
						onClick={this.handleSubmit.bind(this)}
						type="submit"
						className="button button--green button--block"
					>
						Update
					</button>
				</div>
				}
				<PageServiceTimer actions={handlers} name={this.constructor.name}/>

			</div>
		);
	}
}

export default PageLayoutRepair;
