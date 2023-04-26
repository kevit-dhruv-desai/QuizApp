import '../assest/FormData.css'
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { NameShow, SurnameShow } from "../slice/InfoSlice";
import { useDispatch } from "react-redux";

const FormData = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [nameError,setNameError] = useState(false)
  const [surnameError,setSurnameError] = useState(false)
  const [genderError,setGenderError] = useState(false)

  const nameHandler = (event) => {
    setName(event.target.value);
    setNameError(false)
    // console.log(event.target.value)
    dispatch(NameShow(event.target.value));
  };

  const surnameHandler = (event) => {
    setSurname(event.target.value);
    setSurnameError(false)
    //console.log(event.target.value)
    dispatch(SurnameShow(event.target.value));
  };

  const genderHandler = (event) => {
     setGender(event.target.value);
     setGenderError(false)
  }

  const nevigate = useNavigate();

  const switchLanguagepage = (e) => {
    e.preventDefault();
    setNameError(true)
    setSurnameError(true)
    setGenderError(true)
    if (name.trim() === "") {
      return setNameError(true)
    } else if (surname.trim() === "") {
     return setSurnameError(true)
    }else if(gender === ""){
      return setGenderError(true)
    }
    nevigate("/language");
  };

  useEffect(() => {
    window.history.pushState(null,window.location.pathname);
    window.addEventListener('popstate', BackButton);
    return () => {
      window.removeEventListener('popstate', BackButton);
    };
  }, []);

  const BackButton = (e) => {
    e.preventDefault();
    window.history.pushState(null,window.location.pathname);
  };
  return (
    <div className="maininfo">
      <form className="information">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          className="inputcontent"
          placeholder="name"
          onChange={nameHandler}
        />
        {nameError && (<span className="error">*please Fill name details</span>)}
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          value={surname}
          className="inputcontent"
          placeholder="surname"
          onChange={surnameHandler}
        />
        {surnameError && (<span className="error">*please Fill surname details</span>)}
        <div className="radiocontent">
          <label htmlFor="Gender" id="gender" >
            Gender:
          </label>
          <input type="radio" name="Gender" value="Male" checked={gender === "Male"} id="male" onChange={genderHandler} />
          Male
          <input type="radio" name="Gender" value="Female" checked={gender === "Female"} id="female" onChange={genderHandler} />
          Female
        </div>
        {genderError && (<span className="error">*please fill gender details.</span>)}
        <button onClick={switchLanguagepage}>Next</button>
      </form>
      
    </div>
  );
};
export default FormData;
