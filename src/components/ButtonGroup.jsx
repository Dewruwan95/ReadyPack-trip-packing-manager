import { useItemsStore } from "../stores/itemStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsCompleted = useItemsStore((state) => state.markAllAsCompleted);
  const markAllAsInCompleted = useItemsStore(
    (state) => state.markAllAsInCompleted
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    { text: "Mark all as completed", onClick: markAllAsCompleted },
    { text: "Mark all as incomplete", onClick: markAllAsInCompleted },
    { text: "Reset to initial", onClick: resetToInitial },
    { text: "Remove all items", onClick: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text}
          buttonType="secondary"
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
