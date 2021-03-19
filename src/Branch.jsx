import React from "react";
function App()
{
	return <div className="panel">
		<div className="panel-title">
			<span>Amount Filter</span>
			<span>
				<i className="fa fa-plus"></i>
			</span>
		</div>
		<div className="panel-body">
			<div className="flex">
				<div>
					<select>
						<option>invoice total</option>
					</select>
				</div>
				<div>
					<select>
						<option>between</option>
						<option>value1</option>
						<option>value2</option>
					</select>
				</div>
			</div>
		</div>
	</div>
}
export default App