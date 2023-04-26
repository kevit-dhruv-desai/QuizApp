import '../assest/Language.css'
import {useDispatch } from 'react-redux'
import { LanguageChanger } from '../slice/LanguageSlice'
import { useNavigate } from 'react-router-dom'


const Language = ()=>{
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

    const englishDatachanger = () => {
          dispatch(LanguageChanger(true))
          navigate('/quiz/1')
    }
    const hindiDatachanger = () => {
        dispatch(LanguageChanger(false))
        navigate('/quiz/1')
    }
    return(
        
        <div className="languagecontent">
            <p>Select Language:</p>
            <button onClick={englishDatachanger}>English</button>
            <button onClick={hindiDatachanger}>Hindi</button>
            {/* <button id='next' onClick={()=>{navigate('quiz/:quizID')}}>Next</button> */}

        </div>

    )
}
export default Language