import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
	DialogBackdrop,
} from "@headlessui/react";
import ButtonDef from "./Button";

export default function AlertModal(props) {

    const {isOpen,onClose,isCloseVisible,confirmAction} = props;

	return (
		<>
			<Dialog open={isOpen} onClose={onClose} className="relative z-50">
				<DialogBackdrop className="fixed inset-0 bg-black/30" />
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					{/* space-y-4 */}
					<DialogPanel className="max-w-xl h-auto space-y-4 rounded-xl border-2 border-[#4F3E5E] bg-[#EBC3DB] p-4 ">
						{ isCloseVisible && <div>
							<span className="float-right p-0">
								<button className="cursor-pointer" onClick={onClose}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="size-7">
										<path
											fillRule="evenodd"
											d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</span>
						</div>}
						<div className="p-4">
							<DialogTitle className="textDefault font-bold mb-2">
								Confirm Clear All?
							</DialogTitle>
							{/* <Description>
                                    
                                </Description> */}
							<p className="textDefault">Are you sure you want to clear all the inserted data? Everything will be 
                                cleared including categories, budgets and transactions you have added.</p>
                            <div className="flex p-4 float-right">
								<ButtonDef 
								typeBtn='secondary' 
								handleAction={onClose} 
								text='Cancel' />
                                <ButtonDef handleAction={confirmAction} 
								 text='Confirm'
								 typeBtn='primary'
								 />
                            </div>
                            
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
