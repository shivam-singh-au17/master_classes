import './App.css';
import ReactMobile from './components/ReactMobile';
function App() {
  return (
    <div
      className="myContainer">
      <div
        className="main">
        <ReactMobile heading="Mobaile Opreting System" list1="Shivam" list2="Singh" list3="Masai" list4="School" />
        <ReactMobile heading="Mobaile Devlopment" list1="Mirzapur" list2="Robertsganj" list3="Sonbhadra" list4="Varanasi" />
      </div>
    </div>
  );
}
//   let data = [
//     {
//       heading: "Mobaile Opreting System",
//       list1: "Shivam",
//       list2: "Singh",
//       list3: "Masai",
//       list4: "School",
//     },
//     {
//       heading: "Mobaile Devlopment",
//       list1: "Banglor",
//       list2: "Mirzapur",
//       list3: "Varanasi",
//       list4: "Prayagraj",
//     }
//   ];
export default App;
