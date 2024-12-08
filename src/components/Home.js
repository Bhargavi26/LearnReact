import React from 'react';
import { Link } from 'react-router-dom';
function Home() {

  const cards = [
    {
      title: 'useEffect',
      text: 'useEffect to handle Effects',
      path: '/useEffect'
    }, {
      title: 'useMemo',
      text: 'React Hook used to memoize arrays and objects which will keep their reference equality and wont get re-created on each render) as long as the dependencies (second argument) stay the same. \n\nAlso use useMemo to cache heavy computations, such as array operations, filtering, etc.',
      path: '/memo'
    },
    {
      title: 'useRef',
      text: 'React Hook used to access or hold a reference to a DOM element, store previous values, or manage any mutable value that needs to persist between renders. /n Import: Import the useRef hook from React.Create a ref: Create a ref object using useRef(null). The initial value is null because we dont have a reference to the DOM element yet.Attach the ref: Attach the ref to the input element using the ref attribute.Access and manipulate: Inside the handleClick function, access the DOM element using inputRef.current and call the focus() method to focus the input.',
      path: 'useRef'
    },
    {
      title: 'useCallback',
      text: 'React Hook that lets you cache a function definition between re-renders.',
      path: '/callback'
    },
    ,
    {
      title: 'Controlled Component',
      text: 'Form data is handled by a React component',
      path: '/controlled'
    },
    {
      title: 'UnControlled Component',
      text: 'Form data is handled by the DOM itself',
      path: '/uncontrolled'
    }
  ]

  return (

    <div className='body'>
      <section className='section'>
        <div className='container'>
          <h1 className='h1'>Responsive Cards</h1>
          <div className='cards'>
            {
              cards.map((card, i) => (

                <div key={i} className='card'>
                  <h3>
                    {card.title}
                  </h3>
                  <p>
                    {card.text}

                  </p>
                  <Link to={card.path}>
                    <btn className='btn'>
                      Explore
                    </btn>
                  </Link>
                </div>
              ))
            }
          </div>

        </div>
      </section>
    </div >
  );
}


export default Home;