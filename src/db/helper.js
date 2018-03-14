import { panelDb } from './store';

export function updateData(docs, prop, value){
    console.log('Value:', value);
    panelDb.doc(docs).set({
            [prop]: value
        }, { merge: true }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
}
