

// 뭔 겟이야 씨 발아 create겠지

import { motion } from "framer-motion";
import { useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Style } from "util";

// 숫자 받으면 야매 Array 만들어줌
const getItems = (count: number) => (
    Array.from({length: count}, (_, k) => k).map(k => ({
        id: `item-${k}`,
        content: `ㅎㅎ ${k}`
    }))
);

// 지울거(startIndex)에서 넣을부분 선택해서 넣기(endIndex)
const reorder = (list: any, startIndex: number, endIndex: number): Array<any> => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;


const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    userSelect: "none",
    margin: "10px",
    background: isDragging ? "lightgreen" : "grey",
    ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "grey"
})


export default function KanbanBoard() {

    const [items, setItems] = useState(getItems(10));

    function onDragEnd(result:DropResult) {
        if(!result.destination) {
            return;
        }
        setItems((current) => reorder(current, result.source.index, result.destination!.index));
    }

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <DropDiv>
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                
                                {(provided, snapshot) => (
                                    <DragDiv>
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging, 
                                            provided.draggableProps.style
                                        )}
                                    >
                                        {item.content}
                                    </div>
                                    </DragDiv>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                    </DropDiv>
                )}
            </Droppable>
        </DragDropContext>
    )

}
const DropDiv = motion(styled.div`
    height: 500px;
    width: 200px;
    margin: 10px;

`)

const DragDiv = motion(styled.div`
    border-radius: 10px;
    padding: 8px;    color: #000;
    margin-bottom: 8px;
    min-height: 90px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #000
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`)