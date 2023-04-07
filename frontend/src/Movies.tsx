import data from './MovieData.json';
import { useState } from 'react';

//Creates the Movie collection table

// const mds = data.MovieData;

// function MovieList() {
//   const [listOMovies, setListOMovies] = useState(mds);

//   const addMovie = () => {
//     setListOMovies([
//       ...mds,
//       {
//         Category: 'Comedy',
//         Title: 'Added Movie',
//         Year: 1988.91473,
//         Director: 'Mack Sennett',
//         Rating: 'UR',
//         Edited: 'No',
//       },
//     ]);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <h3 className="mt-4 mb-4">Joel Hilton's Movie Collection</h3>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <table className="table table-striped table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th>Title</th>
//                 <th>Year</th>
//                 <th>Director</th>
//                 <th>Rating</th>
//                 <th>Category</th>
//                 <th>Edited</th>
//               </tr>
//             </thead>
//             <tbody>
//               {listOMovies.map((m, i) => (
//                 <tr key={i}>
//                   <td>{m.Title}</td>
//                   <td>{m.Year}</td>
//                   <td>{m.Director}</td>
//                   <td>{m.Rating}</td>
//                   <td>{m.Category}</td>
//                   <td>{m.Edited}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <button className="btn btn-primary mt-3 mb-3" onClick={addMovie}>
//             Add Movie
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieList;
