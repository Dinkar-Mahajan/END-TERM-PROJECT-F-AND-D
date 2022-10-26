import React from 'react';
import Navigation from '../NavigatioBar/NavBar';
import data from './tableData.json'
class Search extends React.Component {
    state = {
        name: "",
        district: "",
        tableData: data,
        errMsg: ""
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    search = e => {
        e.preventDefault();
        console.log(this.state, data);
    }
    searchStyle = {
        "width": "10%",
        "margin-top": "1.5%"
    }
    columns = [
        {
            Header: 'Reg No',
            accessor: 'reg no'
        },
        {
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Address',
            accessor: 'address'
        },
        {
            Header: 'Age',
            accessor: 'age'
        },
        {
            Header: 'Qualification',
            accessor: 'occupation'
        },
        {
            Header: 'Occupation',
            accessor: 'occupation'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Contact',
            accessor: 'contact'
        },
    ]
    errorMsg = "";
    searchInTableData() {
        console.log("HI");
        if (!this.state.name && !this.state.district) {
            this.setState({
                tableData: data,
                errMsg: "Please Provide Data to search"
            })
        }
        else {
            let tempdata = []
            data.forEach(element => {
                console.log(this.state);
                if (this.state.name.toUpperCase() === element.name.toUpperCase() ||
                    this.state.district.toUpperCase() === element.address.toUpperCase()) {
                    tempdata.push(element)
                }
            })
            if (tempdata) {
                this.setState({
                    tableData: tempdata,
                    errMsg: ""
                })
            }
        }
    }
    render() {
        return (

            <div>
                <div className="row">
                    <div className="input-field col s2">
                        <input type="text" name="name" id="Name" onBlur={e => this.change(e)} />
                        <label for="Name"> Name </label>
                    </div>
                    <div className="input-field col s2">
                        <input type="text" name="district" id="District" onBlur={e => this.change(e)} />
                        <label for="District"> District </label>
                    </div>
                    <div className="input-field col s3" style={this.searchStyle}>
                        <button className="btn waves-effect waves-light" type="submit" onClick={() => { this.searchInTableData() }}>Search
						</button>
                        <p className="text text-danger">{this.state.errMsg}</p>
                    </div>
                    {this.state.tableData &&
                        <div className="col s12">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        {
                                            this.columns.map((val, index) => {
                                                return (
                                                    <th>
                                                        {val.Header}
                                                    </th>
                                                );
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tableData.map(val => {
                                            return (
                                                <tr>
                                                    <td>
                                                        {val.regNo}
                                                    </td>
                                                    <td>
                                                        {val.name}
                                                    </td>
                                                    <td>
                                                        {val.address}
                                                    </td>

                                                    <td>
                                                        {val.age}
                                                    </td>
                                                    <td>
                                                        {val.qualification}
                                                    </td>
                                                    <td>
                                                        {val.Occupation}
                                                    </td>
                                                    <td>
                                                        {val.email}
                                                    </td>
                                                    <td>
                                                        {val.contact}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    }
                </div>

            </div>
        )
    }
}
export default Search;