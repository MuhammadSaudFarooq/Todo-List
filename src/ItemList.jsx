import React from "react";

const ItemList = (props) => {
    return (
        <>
            <li className="list-group-item text-start list-group-item-action position-relative">
                <span className="itemContent ms-2">{props.text}</span>
                <span className="delIcon" onClick={() => {props.onSelect(props.id)}}><i className="fa-solid fa-trash"></i></span>
            </li>
        </>
    )
}

export default ItemList;