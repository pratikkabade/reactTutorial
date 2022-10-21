export const CardOne = () => {
  return (
    <div>
      <h1 className='noSelect' style={{ marginTop: 30 }}>
        Breifing from ProjectTutorials
      </h1>
      <div className='all'>
        <a
          href='https://projecttutorials.github.io/Syntax/2022/10/20/React.html'
          target='_blank'
          rel='noreferrer'>
          <div className='dvs'>React</div>
        </a>

        <a
          href='https://projecttutorials.github.io/Syntax/2022/10/19/Firebase.html'
          target='_blank'
          rel='noreferrer'>
          <div className='dvs'>Firebase</div>
        </a>
      </div>
    </div>
  );
};
