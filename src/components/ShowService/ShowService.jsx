import React, { Component } from 'react';
import RenderService from '../ShowService/RenderService/RenderService';
import { serviceService } from '../../services/service/service.service';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';

class ShowService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: null,
			redirectToTutor: false
		};
		this.setRedirect = this.setRedirect.bind(this);
	}

	
	setRedirect () {
		this.setState({
			redirectToTutor: true
		});
	}

	componentDidMount() {
		fetch(serviceService.getDetailedById(this.props.match.params.id)
			.then((data) => {
				this.setState({ 
					service: data
				});
			}))
			.catch(() => {
				toast.error(this.props.t('showservicefail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
	}

	render() {
		if(this.state.redirectToTutor) {
			return (<Redirect to={'/user/' + this.state.service.tutorInfo.id} />);
		}
		return this.state.service ? 
			<RenderService service={this.state.service} redirectToTutor={this.state.redirectToTutor} setRedirect={this.setRedirect}/> :
			null; 
	}
}

export default ShowService;
