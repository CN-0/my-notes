import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import Select from "./components/Select";
import { months, editIcon, getFiltered, deleteIcon } from "./utils/utils";
import "./index.css";

function App() {
	const [notes, setNotes] = useState([]);
	const [filteredNotes, setFilteredNotes] = useState([]);
	const [show, setShow] = useState(false);
	const [editItem, setEditItem] = useState(null);
	const [search, setSearch] = useState("");
	const [sortby, setSortby] = useState("All");
	const [byWeek, setByWeek] = useState("All");
	const [byMonth, setByMonth] = useState("All");
	const [byYear, setByYear] = useState("All");

	useEffect(() => {
		setFilteredNotes(
			getFiltered(notes, search, sortby, byWeek, byMonth, byYear)
		);
	}, [search, notes, sortby, byWeek, byMonth, byYear]);

	const handleCreate = (data) => {
		setNotes([...notes, data]);
		setShow(false);
	};

	const handleEdit = (data) => {
		let newNotes = [...notes];
		newNotes[newNotes.indexOf(editItem)] = data;
		setNotes(newNotes);
		setShow(false);
		setEditItem(null);
	};

	return (
		<div className="App">
			<div className="main">
				<div className="header">
					<button className="my-btn" onClick={() => setShow(true)}>
						Create
					</button>
					<input
						className="my-inp"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search"
					/>
				</div>
				<div className="header">
					<Select
						title="Sort by Time"
						value={sortby}
						options={["All", "Decreasing", "Increasing"]}
						handleChange={(e) => setSortby(e.target.value)}
					/>
					<Select
						title="Filter by Week"
						value={byWeek}
						options={["All", "1", "2", "3", "4", "5"]}
						handleChange={(e) => setByWeek(e.target.value)}
					/>
					<Select
						title="Filter by Month"
						byYear={byMonth}
						options={["All", ...Object.keys(months)]}
						handleChange={(e) => setByMonth(e.target.value)}
					/>
					<Select
						title="Filter by Year"
						value={byYear}
						options={[
							"All",
							...Array.from({ length: 101 }, (x, i) => i + 1950),
						]}
						handleChange={(e) => setByYear(e.target.value)}
					/>
				</div>
				{show && (
					<NoteForm
						changeShow={() => setShow(false)}
						handleCreate={handleCreate}
						handleEdit={handleEdit}
						create={editItem ? false : true}
						note={editItem && editItem.note}
						date={editItem && editItem.date}
					/>
				)}
				<ul>
					{filteredNotes &&
						filteredNotes.map((item) => {
							return (
								<li key={item.note + item.date}>
									<p className="note">{item.note}</p>
									<p className="date">
										{item.date
											.split("-")
											.reverse()
											.join("-")}
									</p>
									<div
										className="edit-icon"
										onClick={() => {
											setEditItem(item);
											setShow(true);
										}}
									>
										<span>{editIcon}</span>
									</div>
									<div
										className="delete-icon"
										onClick={() =>
											setNotes(
												[...notes].filter(
													(note) => note !== item
												)
											)
										}
									>
										<span>{deleteIcon}</span>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}

export default App;
