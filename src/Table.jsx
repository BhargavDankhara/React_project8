import React, { useEffect, useState } from "react"
import Data from "./Data.json"

const Table = () => {
	const [userData, setUserData] = useState(Data || [])

	const handleSearch = (e) => {
		let searchContext = e.target.value
		if (searchContext !== "") {
			let search = userData.filter((x) => x.name.toLowerCase().includes(searchContext.toLowerCase()) || x.email.toLowerCase().includes(searchContext.toLowerCase()))
			setUserData(search)
		} else {
			setUserData(Data)
		}
	}
	// const handleSearch = (e) => {
	// 	let searchContext = e.target.value
	// 	if (searchContext !== "") {
	// 		let search = Data.filter((x) => x.name.toLowerCase().includes(searchContext.toLowerCase()) || x.email.toLowerCase().includes(searchContext.toLowerCase()))
	// 		setUserData(search)
	// 	} else {
	// 		setUserData(Data)
	// 	}
	// 	handleSort();
	// }
	

	const handleClick = (filter) => {
		if (filter === "Male" || filter === "Female") {
			let filteredData = Data.filter((x) => x.gender.includes(filter))
			setUserData(filteredData)
		} else if (filter === "Reset") {
			setUserData(Data)
		}
	}

	const handleSort = () => {
		let sortedData = [...userData].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
		setUserData(sortedData)
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<input type="text" className=" form-control" placeholder="Search" onChange={handleSearch} />
				</div>
				<div className="col-4">
					<button className="btn btn-primary" onClick={handleSort}>
						Sort
					</button>
					<button className="btn btn-danger mx-3" onClick={() => handleClick("Male")}>
						Male
					</button>
					<button className="btn btn-success" onClick={() => handleClick("Female")}>
						Female
					</button>
					<button className="btn btn-secondary ms-3" onClick={() => handleClick("Reset")}>
						Reset
					</button>
				</div>
			</div>
			<div className="col-12 mt-4">
				<table className="table table-success">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Email</th>
							<th>Gender</th>
							<th>Degree</th>
							<th>Hobbies</th>
							<th>Address</th>
						</tr>
					</thead>

					<tbody>
						{userData &&
							userData.map((userData, i) => (
								<tr key={i}>
									<td>{i + 1}</td>
									<td>{userData.name}</td>
									<td>{userData.email}</td>
									<td>{userData.gender}</td>
									<td>{userData.hobbies.join(",")}</td>
									<td>{userData.degree}</td>
									<td>
										{userData.address.street},{userData.address.city},{userData.address.state},{userData.address.zip}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table
