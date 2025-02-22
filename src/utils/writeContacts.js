import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    if (updatedContacts === undefined) {
      return await fs.writeFile(PATH_DB, '[]', 'utf-8');
    }

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
    return updatedContacts;
  } catch (error) {
    console.log(error);
  }
};
