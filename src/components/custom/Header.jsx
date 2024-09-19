import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

function Header() {
  const [user, setUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
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

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null);
    window.location.href = '/'; // Redirect after logout
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
        setUser(resp.data);
        setOpenDialog(false);
      })
      .catch(error => {
        console.error('Get User Profile Error:', error);
        toast.error("An error occurred while fetching user profile. Please try again.");
      });
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className='p-4 shadow-lg flex justify-between items-center px-5 bg-white rounded-lg'>
      <img src='/logo.svg' alt='Logo' className='h-10' />
      <div className='flex items-center gap-4'>
        {user ? (
          <div className='flex items-center gap-4'>
            <span className='text-orange-600 font-semibold text-lg'>Welcome, </span>
            <span className='font-semibold text-lg'>{user.name}</span>
            <a href='/create-trip'>
              <Button variant='outline' className='rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors'>
                + Create Trip
              </Button>
            </a>
            <a href='/my-trips'>
              <Button variant='outline' className='rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors'>
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img src={user.picture} alt='Profile' className='h-10 w-10 rounded-full border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow' />
              </PopoverTrigger>
              <PopoverContent className='p-4'>
                <h2 className='cursor-pointer text-red-500 font-semibold' onClick={handleLogout}>
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)} className='bg-blue-500 text-white hover:bg-blue-600 transition-colors'>
            Sign In
          </Button>
        )}
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className='p-6 bg-white rounded-lg shadow-lg'>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="Logo" className='h-12 mx-auto' />
              <h2 className='font-bold text-xl mt-4'>Sign In with Google</h2>
              <p className='text-gray-700 mt-2'>To generate a customized itinerary, you need to sign in with your Google account.</p>
              <Button onClick={login} className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white flex gap-2 items-center w-full justify-center hover:from-blue-600 hover:to-blue-700 transition-colors">
                <FcGoogle className='h-6 w-6' /> Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
