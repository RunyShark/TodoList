enum DragItem {
  key = 'IdElement',
}

class DragAndDropService {
  drag(evt: React.DragEvent<HTMLDivElement>, id: string) {
    evt.dataTransfer.setData(DragItem.key, id);
    console.log({ evt, id });
  }
}

export const dragAndDrop = new DragAndDropService();
