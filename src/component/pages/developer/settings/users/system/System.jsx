import React from "react";
import Header from "../../../../../partials/Header";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import Navigation from "../../../../../partials/Navigation";
import RolesTable from "./SystemTable";
import ModalAddRoles from "./ModalAddSystem";

const System = () => {
  const [isShow, setIsShow] = React.useState(false);
  const handleAddRoles = () => setIsShow(true);

  const [itemEdit, setItemEdit] = React.useState([]);
  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main className="px-4 lg:pr-10 overflow-hidden">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>System</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddRoles}>
              Add
            </button>
          </div>
          <RolesTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>
      {isShow && (
        <ModalAddRoles
          setIsShow={setIsShow}
          itemEdit={itemEdit}
          setItemEdit={setItemEdit}
        />
      )}
    </>
  );
};

export default System;
