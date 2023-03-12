/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import MorphIcon from "../MorphIcon";
import omit from "../../lib/omit";

class PlayButton extends Component {
	constructor(props) {
		super(props);

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);

		this.state = { hover: false };
	}

	handleMouseEnter() {
		this.setState({ hover: true });
	}

	handleMouseLeave() {
		this.setState({ hover: false });
	}

	render() {
		const { isPlaying = false, circle = false } = this.props;
		const { hover } = this.state;

		let type;
		if (hover) {
			type = isPlaying ? "pauseSparks" : "playSparks";
		} else {
			type = isPlaying ? "pause" : "play";
			if (circle) {
				type = `${type}Circle`;
			}
		}

		return (
			<MorphIcon
				{...omit(this.props, ["isPlaying", "circle"])}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				type={type}
			/>
		);
	}
}

PlayButton.propTypes = {
	isPlaying: PropTypes.bool.isRequired,
	circle: PropTypes.bool.isRequired
};

export default PlayButton;
