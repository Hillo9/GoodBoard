import { Droppable } from "react-beautiful-dnd"
import styled from "styled-components";
import { motion } from "framer-motion";
import "./scroll.css";

// Div에 추가적인 property를 부여하기 위한 인터페이스
interface ITaskList {
    isDraggingOver: boolean;
}

export default function Column({title, tasks, id}:any) {
    return(
        <Container className="column">
            <Title>
                {title}
            </Title>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <TaskList // 대상혁
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {/* Probide your tasks */}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}

const Container = motion(styled.div`
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width: 300px;
    height: 475px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;
`)

const Title = motion(styled.h2`
    padding: 8px;
    background-color: pink;
    text-align: center;
`)

const TaskList = motion(styled.div<ITaskList>`
    padding: 3px;
    transition: background-color 0.2s ease;
    flex-grow: 1;
    min-height: 100px;
`)