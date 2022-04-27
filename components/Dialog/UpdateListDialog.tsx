import React, { useState } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import useUpdateList from "../../hooks/list/useUpdateList";

interface UpdateListDialogProps {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  listId: number;
  originalTitle: string;
  originalDescription: string;
  getList: (listId: number) => void;
}

const UpdateListDialog: React.FC<UpdateListDialogProps> = ({
  visible,
  setVisible,
  listId,
  originalTitle,
  originalDescription,
  getList,
}) => {
  const [title, setTitle] = useState(originalTitle);
  const [description, setDescription] = useState(originalDescription);
  const { updateList, isLoading, error } = useUpdateList();

  const closeDialog = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setTitle(originalTitle); // doesn't work
    setDescription(originalDescription); //doesn't work
    closeDialog();
  };

  const handleEdit = async () => {
    // add validation, min 3 char for title
    await updateList(listId, title, description);
    // if (!error) {
    getList(listId);
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
        <Dialog.Title>Update list</Dialog.Title>
        <Dialog.Input value={title} label="Title" onChangeText={setTitle} />
        <Dialog.Input
          value={description}
          label="Description"
          onChangeText={setDescription}
        />
        <Dialog.Button label="Cancel" onPress={closeDialog} />
        <Dialog.Button label="Edit" onPress={handleEdit} />
      </Dialog.Container>
    </View>
  );
};

export default UpdateListDialog;
