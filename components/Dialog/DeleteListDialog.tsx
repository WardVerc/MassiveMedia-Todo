import React from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import useDeleteList from "../../hooks/useDeleteList";

interface DeleteListDialogProps {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  listId: number;
}

const DeleteListDialog: React.FC<DeleteListDialogProps> = ({
  visible,
  setVisible,
  listId,
}) => {
  const { deleteList, isLoading, error } = useDeleteList();

  const closeDialog = () => {
    setVisible(false);
  };

  const handleDelete = async () => {
    await deleteList(listId);
    // if (!error) {
    closeDialog();
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
        <Dialog.Title>Delete list</Dialog.Title>
        <Dialog.Description>
          Are you sure you want to delete?
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={closeDialog} />
        <Dialog.Button label="Yes" onPress={handleDelete} />
      </Dialog.Container>
    </View>
  );
};

export default DeleteListDialog;
