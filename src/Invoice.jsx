import React from "react";
function App()
{
	return <div className="panel">
		<div className="panel-title">
			<span>Invoice</span>
			<span>
				<i className="fa fa-plus"></i>
			</span>
		</div>
		<div className="panel-body">
			<div>from: <input type="date"/></div>
			<div>to: <input type="date"/></div>
		</div>
	</div>
}
export default App