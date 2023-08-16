enum DragItem {
  key = 'IdElement',
}

export type DragEvent = React.DragEvent<HTMLDivElement>;

class DragAndDropService {
  onDragStart(event: DragEvent, id: string): void {
    event.dataTransfer.setData(DragItem.key, id);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): string {
    event.preventDefault();
    return event.dataTransfer.getData(DragItem.key);
  }
}

export const dragAndDrop = new DragAndDropService();
