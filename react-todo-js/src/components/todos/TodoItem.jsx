import React, { useState } from "react";
import IconButton from "@/components/ui/IconButton";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import Modal from "@/components/ui/Modal";
import TodoForm from "./TodoForm";
import { createPortal } from "react-dom";

const TodoItem = ({ todo, onAdd, onUpdate, onDelete }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
      <div>
        <span className="text-lg font-medium text-gray-300">
          {TODO_CATEGORY_ICON[todo.category]}
        </span>
        <div>
          <h2
            data-test="title"
            className="mb-0 text-lg font-bold text-gray-100 uppercase"
          >
            {todo.title}
          </h2>
          <p className="mt-2 text-base text-gray-200">{todo.summary}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <IconButton icon={"✏️"} onClick={openModal} />
        <IconButton textColor="text-red-300" icon={"🗑"} onClick={()=>onDelete(todo.id)} />
      </div>
      {open &&
        createPortal(
          <Modal onClose={closeModal}>
            <TodoForm
              onClose={closeModal}
              onAdd={onAdd}
              todo={todo}
              onUpdate={onUpdate}>
                Update Todo
              </TodoForm>
          </Modal>, document.body
        )}
    </li>
  );
};

export default TodoItem;
