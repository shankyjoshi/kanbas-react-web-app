const ConfirmationModal = ({ handleDelete, id }) => {
  return (
    <>
      <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={"#exampleModal" + id}
      >
        Delete
      </button>
      <div
        className="modal fade"
        id={"exampleModal" + id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 text-danger"
                id="exampleModalLabel"
              >
                Confirmation
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className=" fs-5" id="exampleModalLabel">
                Are you sure you want to delete this Assignment?
              </h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={(e) => handleDelete(id)}
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
