import React, { useState } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import useAddItem from "../../hooks/item/useAddItem";

interface AddItemDialogProps {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  listId: number;
  getList: (listId: number) => void;
}

const AddItemDialog: React.FC<AddItemDialogProps> = ({
  visible,
  setVisible,
  listId,
  getList,
}) => {
  const [description, setDescription] = useState("");
  const { addItem, isLoading, error } = useAddItem();

  const closeDialog = () => {
    setDescription("");
    setVisible(false);
  };

  const handleAdd = async () => {
    await addItem(listId, description);
    // if (!error) {
    closeDialog();
    getList(listId);
  };

  if (isLoading) {
    return (
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Description>Loading ...</Dialog.Description>
        </Dialog.Container>
      </View>
    );
  }

  // can't figure out error handling for create list
  if (error) {
    return (
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Description>
            An error has occurred. Please try again.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={closeDialog} />
        </Dialog.Container>
      </View>
    );
  }

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Add an item</Dialog.Title>
        <Dialog.Input
          value={description}
          label="Description"
          onChangeText={setDescription}
        />
        <Dialog.Button label="Cancel" onPress={closeDialog} />
        <Dialog.Button label="Add" onPress={handleAdd} />
      </Dialog.Container>
    </View>
  );
};

export default AddItemDialog;
