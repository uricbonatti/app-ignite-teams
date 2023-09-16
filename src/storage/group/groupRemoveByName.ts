import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupsGetAll';

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
    const groups = storedGroups.filter((group) => group !== groupDeleted);
    await AsyncStorage.setItem(`${GROUP_COLLECTION}`, JSON.stringify(groups));
  } catch (err) {
    throw err;
  }
}
