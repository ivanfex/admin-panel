import fire from './fire';
import "firebase/firestore";

const db = fire.firestore();

export const panelDb = db.collection("panels");
