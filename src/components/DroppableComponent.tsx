import { useDrop } from "react-dnd";
import { TaskDTO } from "../api/models";

export const DroppableComponent = (props: {
  onDrop: (item: TaskDTO) => void;
  children: any;
}) => {
  const { onDrop, children } = props;

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item: TaskDTO, monitor) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        opacity: isOver ? 0.5 : 1,
        height: "100%",
        width: "100%",
      }}
    >
      {children}
      {isOver && canDrop && <div>Suelta aquí</div>}
    </div>
  );
};
