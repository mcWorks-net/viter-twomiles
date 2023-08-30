import React from "react";
// import Header from "../../../../../partials/Header";
// import Breadcrumbs from "../../../../../partials/Breadcrumbs";
// import Navigation from "../../../../../partials/Navigation";
import OthersTable from "./OthersTable";
import ModalAddOthers from "./ModalAddOthers";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";

const Others = () => {
  const [isShow, setIsShow] = React.useState(false);
  const handleAddOthers = () => setIsShow(true);
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
            <h1>Others</h1>
            <button
              className="btn btn--acent btn--sm"
              onClick={handleAddOthers}
            >
              Add
            </button>
          </div>
          <OthersTable />
        </main>
      </section>
      {isShow && <ModalAddOthers setIsShow={setIsShow} />}
    </>
  );
};

export default Others;
