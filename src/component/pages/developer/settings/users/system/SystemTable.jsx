import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { system } from "./data.js";
import Pills from "../../../../../partials/Pills.jsx";
import TableLoading from "../../../../../partials/spinners/TableLoading.jsx";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm.jsx";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore.jsx";
import Footer from "../../../../../partials/Footer.jsx";
const SystemTable = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isArchive, setIsArchive] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isRestore, setIsRestore] = React.useState(false);
  const [item, setItem] = React.useState([]);

  const handleArchive = (item) => {
    setItem(item);
    setIsArchive(true);
  };
  const handleDelete = (item) => {
    setItem(item);
    setIsDelete(true);
    setIsRestore(false);
  };
  const handleRestore = (item) => {
    setItem(item);
    setIsDelete(true);
    setIsRestore(true);
  };
  const activeRoles = system.filter((item) => {
    return item.status === 1;
  });
  const inActiveRoles = system.filter((item) => {
    return item.status === 0;
  });
  React.useEffect(() => {
    function loadData() {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
    loadData();
  }, []);
  return (
    <div className="overflox-x-scroll overflow-hidden">
      {isLoading ? (
        <TableLoading count={15} cols={3} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th className="action"></th>
            </tr>
          </thead>
          <tbody>
            {system.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.position}</td>
                <td>
                  {item.status === 1 ? (
                    <Pills label="Active" bgc="bg-green-800" />
                  ) : (
                    <Pills label="Inactive" bgc="bg-gray-500" />
                  )}
                </td>
                <td className="table__action">
                  {item.status === 1 ? (
                    <ul className="flex items-center gap-4">
                      <li className="tooltip" data-tooltip="Edit">
                        <button>
                          <AiFillEdit />
                        </button>
                      </li>
                      <li
                        className="tooltip"
                        data-tooltip="Archive"
                        onClick={() => handleArchive(item)}
                      >
                        <button>
                          <BsArchiveFill />
                        </button>
                      </li>
                    </ul>
                  ) : (
                    <ul className="flex items-center gap-4">
                      <li
                        className="tooltip"
                        data-tooltip="Delete"
                        onClick={() => handleDelete(item)}
                      >
                        <button>
                          <BsFillTrashFill />
                        </button>
                      </li>
                      <li
                        className="tooltip"
                        data-tooltip="Restore"
                        onClick={() => handleRestore(item)}
                      >
                        <button>
                          <FaTrashRestoreAlt />
                        </button>
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer
        record={system.length}
        active={activeRoles.length}
        inactive={inActiveRoles.length}
      />
      {isArchive && <ModalConfirm setIsArchive={setIsArchive} item={item} />}
      {isDelete && (
        <ModalDeleteAndRestore
          setIsDelete={setIsDelete}
          item={item}
          isRestore={isRestore}
        />
      )}
    </div>
  );
};

export default SystemTable;
