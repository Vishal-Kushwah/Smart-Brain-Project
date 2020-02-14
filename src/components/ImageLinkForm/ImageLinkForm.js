import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try!! '}
			</p>
			<div className='center'>
				<div className='form center pa3 br4 shadow-5'>
					<input className='f3 pa1 w-70' type='text' onChange={onInputChange}/>
					<button className='f4  link grow ph3 w-30 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;