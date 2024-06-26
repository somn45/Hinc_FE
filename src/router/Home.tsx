import axios from 'axios';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';

function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const refreshJWTToken = async () => {
      const response = await axios.get(
        'https://158.247.197.212:9090/api/user/auth',
        {
          withCredentials: true,
        }
      );
      console.log(response);
    };
    refreshJWTToken();
  }, []);

  const handleCreateProject = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    const response = await axios.post(
      'https://158.247.197.212:9090/api/user/project/create',
      { title, description },
      {
        withCredentials: true,
      }
    );
    console.log(response);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="설명"
        />
        <input
          type="submit"
          value="프로젝트 생성"
          onClick={handleCreateProject}
        />
      </form>
    </div>
  );
}

export default Home;
