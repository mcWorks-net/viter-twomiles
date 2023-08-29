import React from "react";
import Header from "../../../../../partials/Header";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import Navigation from "../../../../../partials/Navigation";
import RolesTable from "./SystemTable";
import ModalAddRoles from "./ModalAddSystem";

const System = () => {
  const [isShow, setIsShow] = React.useState(false);
  const handleAddRoles = () => setIsShow(true);
  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main className="pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>System</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddRoles}>
              Add
            </button>
          </div>
          <RolesTable />
        </main>
      </section>
      {isShow && <ModalAddRoles setIsShow={setIsShow} />}
    </>
  );
};

export default System;
