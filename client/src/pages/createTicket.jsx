import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}



const CreateTicket = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [capacity, setCapacity] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [agency, setAgency] = useState()
    const [preset, setPreset] = useState('')

    const [ticketImg, setTicketImg] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState('')

    const [btnClass, setBtnClass] = useState('');

    const [err, setErr] = useState('')


    const navigate = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('iAm') != 'admin' || !localStorage.getItem('token')){
            return navigate('/admin/login', {state :{message:'You must be logged in to perform this action.'}, replace:true});
        }
        headers.Authorization = `bearer ${localStorage.getItem('token')}`
    },[])

    // useEffect(()=>{
    //     console.log(date)
    // },[date])



    function handleSubmit(e){
        e.preventDefault();
        setErr('Please wait a moment.')

        if(!previewSource){ setErr('Upload Image');return};
        


        // if(!selectedFile) return;

        if(!title || !description || !price || !capacity || !date || !time || !agency){
        // if(0 ){
            console.log('error');
            setErr('Please fill all fields.')
        }else{
            const postData = async() =>{
                console.log({title, description, price, capacity_per_day:capacity, valid_till:date, time, agency, previewSource, preset})
                try{
                    const ticket = await axios.post('http://localhost:8080/api/tickets', 
                        {title, description, price, capacity_per_day:capacity, preset, valid_till:date, time, agency, previewSource},
                       // {previewSource, title:'title', description: 'de'},
                        {headers}
                    )
                    navigate('/admin/dashboard')
                }catch(error){
                    console.log(error);
                    setErr(error.response.statusText + '. ' +  error.response.data.error )
                }
            }
            postData();
        }
    }

    const uploadImage = (base64EncodedImage) => {
        console.log(base64EncodedImage);
    }

    const handleTicketImageUpload = async(e) => {
        const file = e.target.files[0];
        setTicketImg(e.target.value);
        previewFile(file)
        // console.log(file)
    }
    
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }
    
    const getCapacityPerPreset = (val) => {
        if(val==='bus'){
            return 32
        }else if(val ==='micro_bus'){
            return 16
        }else if(val === 'cinema'){
            return 52
        }
        return 0
    }

    

    return(
        <>
            <form className="m-3 p-4 border" onSubmit={handleSubmit} >
                
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Title*</label>
                    <input type="text" className="form-control" 
                        id="title" 
                        value={title} onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Description*</label>
                    <input type="textarea" className="form-control" 
                        id="description" 
                        value={description} onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Price*</label>
                    <input type="number" className="form-control" 
                        id="price" 
                        value={price} onChange={(e)=>setPrice(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                <label htmlFor="date" className="form-label">Select Preset if following mathes</label>

                <select className="form-select" aria-label="Default select example" 
                    value={preset}  onChange={(e)=>  {
                        setPreset(e.target.value)
                        setCapacity(getCapacityPerPreset(e.target.value))
                        console.log(preset)
                    }
                    }
                    
                    >
                    <option value="">Leave blank for no Preset.</option>
                    <option value="bus">Bus</option>
                    <option value="micro_bus">Micro Bus</option>
                    <option value="cinema">Cinema Hall</option>
                </select>
                </div>


                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Capacity in a take*</label>
                    <input type="number" 
                        className="form-control" 
                        id="capacity" 
                        disabled = {preset ? 'true': false} 
                        value={capacity} onChange={(e)=>setCapacity(e.target.value)}
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Ticket Expiry Date*</label>
                    <input type="date" className="form-control" 
                        id="date" 
                        value={date} onChange={(e)=>setDate(e.target.value)}
                    />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Time* </label>
                    <input type="time" className="form-control" 
                        id="date" 
                        value={time} onChange={(e)=>setTime(e.target.value)}
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Agency* </label>
                    <input type="text" className="form-control" 
                        id="agency" 
                        value={agency} onChange={(e)=>setAgency(e.target.value)}
                    />
                </div>

                <input type ='file' name="image"  
                    onChange = {handleTicketImageUpload} 
                />

                {err && (
                    <div className='text-danger my-2'>{err}</div>
                )}

                <div>
                    <button className='btn btn-primary my-4' value='submit' type='submit'>Submit</button>
                </div>
            </form>
            {previewSource && (
                <div className="m-4">
                    <div className='fw-bold'>Image Preview</div>
                    <img src = {previewSource} alt=''
                    style={{height: '200px'}} />
                </div>
            )}
        </>
    )
}

export default CreateTicket;