import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SubHeader from "../../Components/Header/SubHeader";
import Table from "../../Components/LaborCode/Table";
import AddNew from "../../Components/LaborCode/AddNew";

import "../Style.css";

function EquipmentCodeMaintenance() {
    const [showTable, setShowTable] = useState(true);
    const subHeader = "Restoration Equipment Code Class and Billing Codes";
  
    const toggleTable = () => {
      if (showTable) {
        setShowTable(!showTable);
      } else {
        setShowTable(!showTable);
      }
    };
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-md-4 p-0 m-0">
            <Sidebar />
          </div>
          <div className="col-md-8 m-0 p-0">
            <SubHeader props={{ subHeader: subHeader, showTable: showTable }} />
  
            <div className="main p-3">
              {showTable ? (
                <div>
                  <div className="btn-area py-2 text-end ">
                    <button
                      className="btn  btn-outline-danger rounded-0"
                      onClick={(event) => toggleTable()}
                    >
                      <i className="fa fa-plus">&nbsp;Add New</i>
                    </button>
                  </div>
                  <Table props={{col1:'Equipment Code Class'}}/>
                </div>
              ) : (
                <div>
                  <div className="btn-area py-2 text-end ">
                    <button
                      className="btn  btn-outline-danger rounded-0"
                      onClick={(event) => toggleTable()}
                    >
                      <i className="fa fa-list">&nbsp;Show List</i>
                    </button>
                  </div>
                  <AddNew props={{label1:'Equipment Code Class'}}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }


export default EquipmentCodeMaintenance;