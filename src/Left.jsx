import React from "react";
import Invoice from './Invoice';
import Amount from './Amount';
import DateType from './DateType';
import Branch from './Branch';
import Customers from './Customers';
import JobNumbers from './JobNumbers';
import Lots from './Lots';
import Currency from './Currency';
function App()
{
	return <div className="left">
		<div className="title">Filters</div>	
		<Invoice/>
		<Amount/>
		<DateType/>
		<Branch/>
		<Customers/>
		<JobNumbers/>
		<Lots/>
		<Currency/>
	</div>
}
export default App