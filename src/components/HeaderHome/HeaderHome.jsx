import { Container } from 'react-bootstrap';

import { ProfilePicture } from '../';

const HeaderHome = () => {
  return (
    <div className='bg-white'>
      <Container fluid>
        <header className='d-flex flex-wrap justify-content-between align-items-center py-3 px-3 border-bottom'>
          <ProfilePicture size={40}/>
        </header>
      </Container>
    </div>
  );
}

export { HeaderHome };

