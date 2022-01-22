import React, { Component } from "react"
import ReactPaginate from "react-paginate"
import Table from "./Table/Table"
import _ from "lodash" 
import TableSearch from "./TableSearch/TableSearch"


state = {
  data: [],
  sort: "asc" // desc
  sortField: "data zislo"
}



componentDidMount() {
  const response = await fetch("     ")
  const data = await response.json()
  
  console.log(data)
}

this.setState({
  data: _.orderBy(data, ths.state.sortField, this.state.sort)
})


onSort = sortField => {
  const clonedData = this.state.data.concat()
  const sortType = this.state.sort === "asc" ? "desc" : "asc"
  
  const orderedData = _.orderBy(clonedData, sortField, sortType)

  this.setState({
    data: orderedData,
    sort: sortType,
    sortField={this.state.sortField}
    onRowSelect={this.onRowSelect} 
  })
}

onRowSelect = row => {
  con sole.log(row)
} 


render() {
  return (
    <div className="container">
      {

        <React.Frament>
          <TableSearch />
          <Table
        data={this.state.data}
        onSort={this.onSort}
        sort={this.state.sort}
        sortField={this.state.sortField}
        />
      </React.Frament>

        
      }

      { 
        this.state.data.length > 50
          ? <ReactPaginate
          previosLabel={"previous"}
          nextLabel={"next"}
          breakLabel={...}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPageDisplaed={2}
          pageRangeDisplaed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerclassName={"pages pagination"}
          activeClassName={"active"}

        }

    </div>
  );
}

export default App;
