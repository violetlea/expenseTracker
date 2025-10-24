import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
	DialogBackdrop,
} from "@headlessui/react";

import { Categories } from "../features/categories/Categories";
import AddCategory from "./addCategoryContainer";

export default function CategoriesModal(props) {
	const { isOpen, onClose } = props;

	return (
		<>
			<Dialog open={isOpen} onClose={onClose} className="relative z-50">
				<DialogBackdrop className="fixed inset-0 bg-black/30" />
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					{/* space-y-4 */}
					<DialogPanel className="max-w-xl h-auto space-y-4 rounded-xl border bg-white p-4 ">
						<div>
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
						</div>
						<div className="p-4">
							<DialogTitle className="font-bold mb-2">
								Manage Category
							</DialogTitle>
							{/* <Description>
                            This will permanently deactivate your account
                        </Description> */}
							<div className="justify-items-center rounded-xl">
								<div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
									<div className="col-span-2">
										<Categories />
									</div>
									<div className="">
										<AddCategory />
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
