import React from "react";

const Select = (props) => {
	return (
		<div className="select-wrapper">
			<label htmlFor={props.title}>
				<p>{props.title}</p>
			</label>
			<select
				className="my-select"
				id={props.title}
				value={props.value}
				onChange={props.handleChange}
			>
				{props.options
					? props.options.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
					  ))
					: null}
			</select>
		</div>
	);
};

export default Select;
