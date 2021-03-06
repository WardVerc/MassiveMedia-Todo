import React, { useState } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import useCreateList from "../../hooks/list/useCreateList";

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
  const { createList, isLoading, error } = useCreateList();

  const closeDialog = () => {
    setTitle("");
    setDescription("");
    setVisible(false);
  };

  const handleAdd = async () => {
    if (title.trim().length > 0) {
      await createList(title.trim(), description.trim());
      // if (!error) {
      closeDialog();
      getLists();
      // }
    } else {
      alert("Enter a title");
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

  // can't figure out error handling
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
        <Dialog.Title>Create a list</Dialog.Title>
        <Dialog.Input
          value={title}
          label="Title"
          onChangeText={setTitle}
          maxLength={20}
        />
        <Dialog.Input
          value={description}
          label="Description"
          onChangeText={setDescription}
          maxLength={20}
        />
        <Dialog.Button label="Cancel" onPress={closeDialog} />
        <Dialog.Button label="Add" onPress={handleAdd} />
      </Dialog.Container>
    </View>
  );
};

export default CreateListDialog;
