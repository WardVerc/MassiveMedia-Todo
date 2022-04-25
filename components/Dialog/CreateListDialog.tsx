import React, { useState } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import useList from "../../hooks/useList";

interface CreateListDialogProps {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  getLists: () => void;
}

const CreateListDialog: React.FC<CreateListDialogProps> = ({
  visible,
  setVisible,
  getLists,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createList, isLoading } = useList();

  const closeDialog = () => {
    setVisible(false);
    setTitle("");
    setDescription("");
  };

  const handleAdd = async () => {
    await createList(title, description);
    getLists();
    closeDialog();
  };

  return (
    <View>
      <Dialog.Container visible={visible}>
        {/* TODO: return spinner if loading */}
        <Dialog.Title>Create a list</Dialog.Title>
        <Dialog.Description>
          Give it a creative title. And maybe a description aswel.
        </Dialog.Description>
        <Dialog.Input value={title} label="Title" onChangeText={setTitle} />
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

export default CreateListDialog;
