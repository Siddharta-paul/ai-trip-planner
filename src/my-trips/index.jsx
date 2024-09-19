import { db } from '@/service/FirebaseConfig';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';
import { toast } from 'sonner';

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/');
      return;
    }
    setUserTrips([]);
    setLoading(true);
    const q = query(collection(db, "AiTrips"), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    const trips = [];
    querySnapshot.forEach((doc) => {
      trips.push({ id: doc.id, ...doc.data() });
    });
    setUserTrips(trips);
    setLoading(false);
  };

  const handleDeleteTrip = async (tripId) => {
    try {
      await deleteDoc(doc(db, "AiTrips", tripId));
      toast.success("Trip deleted successfully");
      GetUserTrips(); // Refresh trips after deletion
    } catch (error) {
      console.error("Error deleting trip: ", error);
      toast.error("Failed to delete trip");
    }
  };

  return (
    <div className='px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 mt-10'>
      <h2 className='font-bold text-3xl mb-5'>My Trips</h2>
      {loading ? (
        <div className='grid grid-cols-2 gap-5'>
          {[...Array(6)].map((_, index) => (
            <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'></div>
          ))}
        </div>
      ) : userTrips.length > 0 ? (
        <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
          {userTrips.map((trip) => (
            <UserTripCardItem
              key={trip.id}
              trip={trip}
              onDelete={() => handleDeleteTrip(trip.id)}
            />
          ))}
        </div>
      ) : (
        <div className='text-center mt-10'>
          <h3 className='text-xl font-semibold'>You have no trips yet.</h3>
          <p className='text-gray-600 mt-2'>Create your first trip to start planning your next adventure!</p>
          <Link to="/create-trip">
            <button className='mt-5 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg'>
              Create Your First Trip
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyTrips;
