import "./App.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function Files() {
  return (
    <div>
      <Header />
      <body className='pushDown100'>
        <Link className='btn btn-primary rounded-pill' to='/'>
          Back ?
        </Link>
        <div className='mainSection noSelect'>
          <div className='subSection codeSection'></div>
          <div className='subSection codeSection'></div>
          <div className='subSection codeSection'></div>
          <div className='subSection codeSection'></div>
          <div className='subSection codeSection'></div>
          <div className='subSection codeSection'></div>
          <div className='subSection codeSection'></div>
        </div>
      </body>
    </div>
  );
}

export default Files;
