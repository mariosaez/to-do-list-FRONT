import { useDrop } from "react-dnd";


export const DroppableComponent = (props: {onDrop: (item: any) => void, children: any}) => {
    const {onDrop, children} = props;

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: 'YOUR_ITEM_TYPE',
        drop: (item, monitor) => {
          onDrop(item);
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      }));

      return (
        <div ref={drop} style={{ opacity: isOver ? 0.5 : 1, height: '100%', width: '100%', border: canDrop ? '2px dashed green' : '1px solid gray' }}>
          {children}
          {isOver && canDrop && <div>Suelta aquí</div>}
        </div>
      );
}