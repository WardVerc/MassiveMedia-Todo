import React, { useState } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import useUpdateItem from "../../hooks/item/useUpdateItem";

interface UpdateItemDialogProps {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  listId: number;
  itemId: number;
  originalDescription: string;
  getList: (listId: number) => void;
}

const UpdateItemDialog: React.FC<UpdateItemDialogProps> = ({
  visible,
  setVisible,
  listId,
  itemId,
  originalDescription,
  getList,
}) => {
  const [description, setDescription] = useState(originalDescription);
  const { updateItem, isLoading, error } = useUpdateItem();

  const closeDialog = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setDescription(originalDescription); //doesn't work
    closeDialog();
  };

  const handleEdit = async () => {
    if (description.trim().length > 0) {
      await updateItem(itemId, listId, description.trim());
      // if (!error) {
      getList(listId);
      closeDialog();
      // }
    } else {
      alert("Enter a description");
    }
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

  // can't figure out error handling for update list
  if (error) {
    return (
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Description>
            An error has occurred. Please try again.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
        </Dialog.Container>
      </View>
    );
  }

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Edit item</Dialog.Title>
        <Dialog.Input
          value={description}
          label="Description"
          onChangeText={setDescription}
          maxLength={20}
        />
        <Dialog.Button label="Cancel" onPress={closeDialog} />
        <Dialog.Button label="Edit" onPress={handleEdit} />
      </Dialog.Container>
    </View>
  );
};

export default UpdateItemDialog;
