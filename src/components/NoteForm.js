import React, { useState } from "react";

function NoteForm(props) {
	const [note, setNote] = useState(props.note || "");
	const [date, setDate] = useState(props.date || "");

	const handleSubmit = () => {
		if (props.create) {
			props.handleCreate({ note, date });
		} else {
			props.handleEdit({ note, date });
		}
	};

	return (
		<div className="model-wrapper">
			<div className="model">
				<h3 className="model-title">
					{props.create ? "Create" : "Edit"} Note
				</h3>
				<div className="model-body">
					<textarea
						type="text"
						className="my-inp"
						style={{ height: "140px" }}
						placeholder="Enter Note"
						value={note}
						onChange={(e) => setNote(e.target.value)}
					></textarea>
					<input
						id="date"
						className="my-inp"
						value={date}
						min="1950-01-01"
						max="2050-12-31"
						style={{ margin: "20px 0px 0px 5px" }}
						onChange={(e) => setDate(e.target.value)}
						type="date"
					/>
				</div>
				<div className="model-footer">
					<button
						className="my-btn"
						style={{ marginRight: "20px" }}
						onClick={props.changeShow}
					>
						Close
					</button>
					<button
						disabled={note === "" || date === ""}
						className="my-btn"
						onClick={handleSubmit}
					>
						{props.create ? "Create" : "Edit"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default NoteForm;
