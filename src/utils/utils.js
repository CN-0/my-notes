import React from "react";

export const months = {
	January: 1,
	February: 2,
	March: 3,
	April: 4,
	May: 5,
	June: 6,
	July: 7,
	August: 8,
	September: 9,
	October: 10,
	November: 11,
	December: 12,
};

const searched = (array, search) =>
	[...array].filter((item) =>
		item.note.toLowerCase().includes(search.toLowerCase())
	);

const sort = (array, sortby) => {
	if (sortby === "Increasing") {
		return [
			...[...array].sort((a, b) => new Date(a.date) - new Date(b.date)),
		];
	} else {
		return [
			...[...array].sort((a, b) => new Date(b.date) - new Date(a.date)),
		];
	}
};

const filterByWeek = (array, byWeek) =>
	[...array].filter(
		(item) =>
			Math.floor((new Date(item.date).getDate() - 1) / 7) ===
			Number(byWeek) - 1
	);

const filterByMonth = (array, byMonth) =>
	[...array].filter(
		(item) => new Date(item.date).getMonth() + 1 === months[byMonth]
	);

const filterByYear = (array, byYear) =>
	[...array].filter(
		(item) => new Date(item.date).getFullYear() === Number(byYear)
	);

export const getFiltered = (notes, search, sortby, byWeek, byMonth, byYear) => {
	let filtered = [...notes];
	if (search !== "") {
		filtered = searched(filtered, search);
	}
	if (sortby !== "All") {
		filtered = sort(filtered, sortby);
	}
	if (byWeek !== "All") {
		filtered = filterByWeek(filtered, byWeek);
	}
	if (byMonth !== "All") {
		filtered = filterByMonth(filtered, byMonth);
	}
	if (byYear !== "All") {
		filtered = filterByYear(filtered, byYear);
	}
	return filtered;
};

export const editIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="22"
		height="22"
		fill="currentColor"
		viewBox="0 0 16 16"
	>
		<path
			fillRule="evenodd"
			d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
		/>
	</svg>
);

export const deleteIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="22"
		height="22"
		fill="currentColor"
		viewBox="0 0 16 16"
	>
		<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
		<path
			fillRule="evenodd"
			d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
		/>
	</svg>
);
