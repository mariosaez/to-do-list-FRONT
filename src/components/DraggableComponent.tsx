import { useDrag } from "react-dnd";

export const DraggableComponent = (props: {id: string, type: string, children: any}) => {
    const {id, type, children} = props;
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
          {children}
        </div>
      );  
}