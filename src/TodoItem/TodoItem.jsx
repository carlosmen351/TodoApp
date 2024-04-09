import React from 'react';
import { MdDoneOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri"
import './TodoItem.css';

export const TodoItem = ({description, completed, onComplete, onDelete}) => {
  return (
    <li className="TodoItem">
      <MdDoneOutline
        onClick={() => {
          onComplete(description)
        }}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >

      </MdDoneOutline>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {description}
      </p>
      <RiDeleteBinLine
        onClick={() => {
          onDelete(description)
        }}
        className="Icon Icon-delete"
      >

      </RiDeleteBinLine>
    </li>
  );
}