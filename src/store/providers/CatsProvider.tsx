import React, { useState, useEffect } from 'react';

// import { CatsContext } from '../context';

// import { firebaseApp } from '~/src/utils/Firebase';

// import * as _ from 'lodash';

// type Props = {
//     children?: any
// }

// export default ({ children }: Props) => {

//     const [cats, setCats] = useState([]);

//     function getAllParents(): Array<any> {
//         let output = [];
//         cats.forEach((cat) => {
//             const parent = _.get(cat, 'data.parent');
//             if (parent === 'NONE') {
//                 output.push(cat);
//             }
//         });
//         return output;
//     }

//     function getCategoryName(id: string): string {
//         const output: string = _.find(cats, { id: id });
//         return _.get(output, 'data.name');
//     }

//     useEffect(() => {
//         firebaseApp.firestore()
//             .collection('categories')
//             .where('active', '==', true)
//             .orderBy('order', 'desc')
//             .get()
//             .then((snapshot) => {
//                 let datas = [];
//                 snapshot.forEach((snap) => {
//                     if (snap.exists) {
//                         datas.push({
//                             id: snap.id,
//                             data: snap.data()
//                         });
//                     }
//                 });
//                 setCats(datas);
//             });
//     }, []);

//     return (
//         <CatsContext.Provider value={{ cats: cats, getAllParents: getAllParents, getCategoryName: getCategoryName }} >
//             {children}
//         </CatsContext.Provider>
//     );
// }