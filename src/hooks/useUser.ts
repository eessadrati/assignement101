import { useState } from 'react';
import profileImage from '@/assets/profile.png';
type User = {
  profile: string;
  name: string;
  email: string;
};
const useUser = () => {
  //mock user data
  const [user, setUser] = useState<User | null>({
    profile: profileImage,
    name: 'BESIX Group',
    email: 'besix.group@besix.be',
  });

  return user;
};

export default useUser;
