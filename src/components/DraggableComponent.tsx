import { useDrag } from "react-dnd";
import { TaskDTO } from "../api/models";

export const DraggableComponent = (props: {task: TaskDTO, type: string, children: any}) => {
    const {task, type, children} = props;
    const [, drag] = useDrag(() => ({
        type: type,
        item: { ...task },
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