import { useState, useEffect } from "react";

const Pagination = ({ setCurrentPage, totalPages , currentEmployees ,totalEmployee}) => {

  const numOfPage = [];
  for (let i = 1; i <= totalPages; i++) {
    numOfPage.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{currentEmployees.length}</b> out of <b>{totalEmployee}</b> entries
      </div>
      <ul className="pagination">
        <li
          className={currentButton === 1 ? "page-item disabled" : "page-item"}
        >
          <a
            href="#!"
            className={currentButton === 1 ? "page-link disabled" : "page-link"}
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Previous
          </a>
        </li>

        {numOfPage.map((page, index) => {
          return (
            <li
              key={index}
              className={
                currentButton === page ? "page-item active" : "page-item"
              }
            >
              <a
                href="#!"
                className={
                  currentButton === page ? "page-link active" : "page-link"
                }
                onClick={() => setCurrentButton(page)}
              >
                {page}
              </a>
            </li>
          );
        })}

        <li
          className={
            currentButton === numOfPage.length
              ? "page-item disabled"
              : "page-item"
          }
        >
          <a
            href="#!"
            className={
              currentButton === numOfPage.length
                ? "page-link disabled"
                : "page-link"
            }
            onClick={() =>
              setCurrentButton((next) =>
                next === numOfPage.length ? next : next + 1
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
