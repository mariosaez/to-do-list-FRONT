import { useDrag } from "react-dnd";

export const DraggableComponent = (props: {id: string, type: string, children: any}) => {
    const {id, type, children} = props;
    const [, drag] = useDrag(() => ({
        type: type,
        item: { id },
        collect: () => ({})
      }));

      return (
        <div
          ref={drag}
          style={{
            fontWeight: 'bold',
            cursor: 'move',
          }}
        >
          {children}
        </div>
      ); 
};