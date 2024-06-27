import { useDrag } from "react-dnd";

export const DraggableComponent = (props: {id: string, type: string}) => {
    const {id, type} = props;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: type,
        item: { id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

      return (
        <div
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontWeight: 'bold',
            cursor: 'move',
          }}
        >
          Drag Me
        </div>
      );  
}