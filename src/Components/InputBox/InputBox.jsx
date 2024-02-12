import './InputBox.css'; // Import the CSS file
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

const InputBox = () => {
    return (
        <div className='InputBox'>
            <div className="form-control">
                <input type="text" required />
                <label>
                    <span><TroubleshootIcon/></span>
                    <span className='spanText' style={{ transitionDelay: '0ms' }}>S</span>
                    <span className='spanText' style={{ transitionDelay: '50ms' }}>E</span>
                    <span className='spanText' style={{ transitionDelay: '100ms' }}>A</span>
                    <span className='spanText' style={{ transitionDelay: '150ms' }}>R</span>
                    <span className='spanText' style={{ transitionDelay: '200ms' }}>C</span>
                    <span className='spanText' style={{ transitionDelay: '250ms' }}>H</span>
                </label>
            </div>
        </div>
    );
}

export default InputBox;
