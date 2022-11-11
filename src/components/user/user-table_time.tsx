type UserModalProps = {
   data: string
}
export default function UserModal(props: UserModalProps) {
   return (
      <>
         <div className="d-flex justify-content-center align-items-center">

            <div
               className="modal fade"
               id="exampleModal"
               tabIndex={-1}
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
            >
               <div className="modal-dialog">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title text-center" id="exampleModalLabel">
                      {props.data}
                     &nbsp;&nbsp;&nbsp;&nbsp; <span  className="green ">13</span>
                     &nbsp;&nbsp;&nbsp;&nbsp; <span  className="green ">323</span>

                        </h5>
                        <button
                           type="button"
                           className="btn-close"
                           data-bs-dismiss="modal"
                           aria-label="Close"
                        ></button>
                     </div>
                     <div className="modal-body">

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}