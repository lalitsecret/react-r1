import React from "react";
function App()
{
	return <div className="top">
		<div className="item">
			<strong>quick search</strong>
			<div className="input">
				<i className="fa fa-search"></i>
				<input placeholder="search..." />
			</div>
		</div>
		<div className="item">
			<div>	
				<button>by date</button>
				<button>by period</button>
			</div>
			<div>
				<select>
					<option value="">Quick Filter</option>
				</select>
				<input type="date"/>
				<input type="date"/>
				<button><i className="fa fa-print"></i></button>
				<button><i className="fa fa-file"></i></button>
				<button><i className="fa fa-cog"></i></button>
			</div>
		</div>
	</div>
}
export default App