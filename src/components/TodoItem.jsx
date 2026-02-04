import React from "react";

export default function TodoItem() {
    return(
        <div>
            <li className="todo-item">
                <input type="checkbox" />
                <span>Sample Todo Item</span>
                
                <div>
                  <p>...</p>
                </div>
                 
            </li>
        </div>
    );

}