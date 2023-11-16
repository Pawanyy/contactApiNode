export const getContacts = (req, res) => {
  return res.status(200).json({ message: "All Contacts" });
};

export const getContact = (req, res) => {
  return res
    .status(200)
    .json({ message: "Contact with id : " + req.params.id });
};

export const createContact = (req, res) => {
  return res.status(200).json({ message: "create" });
};

export const updateContact = (req, res) => {
  return res
    .status(200)
    .json({ message: "Update Contact with id : " + req.params.id });
};
export const deleteContact = (req, res) => {
  return res
    .status(200)
    .json({ message: "Delete Contact  with id : " + req.params.id });
};
