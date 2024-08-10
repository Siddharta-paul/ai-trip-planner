import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModal';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: codeResp => {
      console.log(codeResp);
      GetUserProfile(codeResp);
    },
    onError: error => {
      console.error('Google Login Error:', error);
      toast.error("An error occurred while trying to log in. Please try again.");
    },
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem('user');

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (formData?.noOfDays > 7) {
      toast.error("Number of days cannot be more than 7!");
      return;
    }

    if (!formData?.noOfDays || !formData?.location || !formData?.budget || !formData?.traveller) {
      toast.error("Please fill all the required details!");
      return;
    }

    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveller}', formData?.traveller)
      .replace('{budget}', formData?.budget);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const tripData = result?.response?.text();
      console.log(tripData);
      await SaveAiTrip(tripData);
    } catch (error) {
      console.error('Trip Generation Error:', error);
      toast.error("An error occurred while generating your trip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const SaveAiTrip = async TripData => {
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user'));
      const docId = Date.now().toString();
      await setDoc(doc(db, "AiTrips", docId), {
        userSelection: formData,
        tripData: JSON.parse(TripData),
        userEmail: user?.email,
        id: docId,
      });
      toast.success("Trip saved successfully!");
      navigate(`/view-trip/${docId}`);
    } catch (error) {
      console.error('Save Trip Error:', error);
      toast.error("An error occurred while saving the trip. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const GetUserProfile = tokenInfo => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo.access_token}`,
        Accept: 'application/json',
      },
    })
    .then(resp => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      OnGenerateTrip();
    })
    .catch(error => {
      console.error('Get User Profile Error:', error);
      toast.error("An error occurred while fetching user profile. Please try again.");
    });
  };

  return (
    <div className='px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 mt-10'>
      <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-lg md:text-xl'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>
      <div className='mt-10'>
        <FieldGroup 
          title="What is your destination of choice?" 
          component={
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange: value => {
                  setPlace(value);
                  handleInputChange('location', value);
                }
              }}
            />
          }
        />
        <FieldGroup 
          title="How many days are you planning your trip for?" 
          component={
            <Input 
              placeholder='Ex-3' 
              type="number" 
              onChange={(e) => handleInputChange('noOfDays', e.target.value)} 
            />
          }
        />
        <FieldGroup 
          title="What is your budget for the trip?" 
          component={
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
              {SelectBudgetOptions.map((item, index) => (
                <BudgetOption 
                  key={index} 
                  item={item} 
                  selected={formData?.budget === item.title} 
                  onClick={() => handleInputChange('budget', item.title)} 
                />
              ))}
            </div>
          }
        />
        <FieldGroup 
          title="Who do you plan on travelling with on your next adventure?" 
          component={
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
              {SelectTravelList.map((item, index) => (
                <TravelOption 
                  key={index} 
                  item={item} 
                  selected={formData?.traveller === item.people} 
                  onClick={() => handleInputChange('traveller', item.people)} 
                />
              ))}
            </div>
          }
        />
        <div className='my-10 flex justify-end'>
          <Button disable={loading} onClick={OnGenerateTrip}>
            {loading ? <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : 'Generate Trip'}
          </Button>
        </div>
        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <img src="/logo.svg" alt="Logo" />
                <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
                <p>To generate a customized itinerary, you need to sign in with your Google account.</p>
                <Button onClick={login} className="w-full mt-5 flex gap-4 items-center">
                  <FcGoogle className='h-7 w-7' /> Sign In with Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

const FieldGroup = ({ title, component }) => (
  <div className='mb-10'>
    <h2 className='text-xl md:text-2xl font-medium'>{title}</h2>
    <div className='mt-5'>{component}</div>
  </div>
);

const BudgetOption = ({ item, selected, onClick }) => (
  <div 
    onClick={onClick} 
    className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${selected ? 'shadow-lg border-black' : ''}`}>
    <h2 className='text-3xl md:text-4xl'>{item.icon}</h2>
    <h2 className='font-bold text-lg'>{item.title}</h2>
    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
  </div>
);

const TravelOption = ({ item, selected, onClick }) => (
  <div 
    onClick={onClick} 
    className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${selected ? 'shadow-lg border-black' : ''}`}>
    <h2 className='text-3xl md:text-4xl'>{item.icon}</h2>
    <h2 className='font-bold text-lg'>{item.title}</h2>
    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
  </div>
);
