// index.html같은 곳에 작성했던 방식처럼 동일하게
import { createPortal } from "react-dom";
import Modal from "@/components/ui/Modal";
import TodoForm from "./TodoForm";
import { useState } from "react";
import TodoFilter from "./TodoFilter";

// 함수형 컴포넌트(TodoHeader)
const TodoHeader = ({ onAdd, category, onFilter }) => {
  const [open, setOpen] = useState(false);
  const closeModel = () => setOpen(false);
  const openModel = () => setOpen(true);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <button
        className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button"
        onClick={openModel}
      >
        Add Todo
      </button>
      {open &&
        createPortal(
          <Modal onClose={closeModel}>
            <TodoForm onClose={closeModel} onAdd={onAdd} >
              New Todo
            </TodoForm>
          </Modal>,
          document.body
        )}
      <TodoFilter category={category} onFilter={onFilter} />
    </div>
  );
};

export default TodoHeader;
