// import { motion } from "framer-motion"
// import { Draggable } from "react-beautiful-dnd"
// import styled from "styled-components"

// interface IDrag {
//     isDrgging : boolean;
// }

// function bgcolorChange(props:any) {
//     return props.isDragging
//         ?"lightgreen": props.isDraggable
//         ? props.isBacklog
//             ? "#F2D7D5" : "#DCDCDC"
//         : props.isBacklog
//         ? " #F2D7D5" : "#fffada"    
// }

// export default function Task({task , index}:any){
//     return(
//         <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
//             {(provided, snapshot) =>(
//                 <Container
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     ref={provided.innerRef}
//                     isDrgging={snapshot.isDragging}
//                 >
//                     <div>
//                         <span>
//                             <small>
//                                 {"a"}
//                             </small>
//                         </span>
//                     </div>
//                     <div>
//                         <TextContent>
//                             {"title"}
//                         </TextContent>
//                     </div>
//                     <Icons>
//                         {"icons"}
//                     </Icons>
//                     {provided.placeholder}
//                 </Container>
//             )}
//         </Draggable>
//     )
// }

// const Container = motion(styled.div<IDrag>`
//     border-radius: 10px;
//     padding: 8px;
//     color: #000;
//     margin-bottom: 8px;
//     min-height: 90px;
//     margin-left: 10px;
//     margin-right: 10px;
//     background-color: ${(props) => bgcolorChange(props)};
//     cursor: pointer;
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
// `)

// const TextContent = motion(styled.div``)

// const Icons = styled.div`
//     display: flex;
//     justify-content: end;
//     padding: 2px;
// `