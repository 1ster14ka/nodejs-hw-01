import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  for (let i = 0; i < number; i++) {
    await writeContacts(createFakeContact());
  }
};

generateContacts(2);
