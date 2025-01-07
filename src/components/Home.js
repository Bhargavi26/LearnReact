import React from 'react';
import { Link } from 'react-router-dom';
import FetchGet from './APICallsData/FetchGet';
import LearnEqualizer from './Equalizer/LearnEqualizer';
import TimerApp from './SimpleApps/TimerApp';
import ShadowRoot from './SimpleApps/ShadowRoot';
import FormValidation from './SimpleApps/FormValidation';

function Home() {

  const cards = [
    {
      title: 'useEffect',
      content: ['useEffect to handle Effects'],
      path: '/useEffect'
    }, {
      title: 'useMemo',
      content: ['React Hook used to memoize arrays and objects which will keep their reference equality and wont get re-created on each render) as long as the dependencies (second argument) stay the same. \n\nAlso use useMemo to cache heavy computations, such as array operations, filtering, etc.'],
      path: '/memo'
    },
    {
      title: 'useRef',
      content: ['React Hook used to access or hold a reference to a DOM element, store previous values, or manage any mutable value that needs to persist between renders. /n Import: Import the useRef hook from React.Create a ref: Create a ref object using useRef(null). The initial value is null because we dont have a reference to the DOM element yet.','Attach the ref: Attach the ref to the input element using the ref attribute.Access and manipulate: Inside the handleClick function, access the DOM element using inputRef.current and call the focus() method to focus the input.'],
      path: 'useRef'
    },
    {
      title: 'useCallback',
      content: ['React Hook that lets you cache a function definition between re-renders.'],
      path: '/callback'
    },
    ,
    {
      title: 'Controlled Component',
      content: ['Form data is handled by a React component'],
      path: '/controlled'
    },
    {
      title: 'UnControlled Component',
      content: ['Form data is handled by the DOM itself'],
      path: '/uncontrolled'
    },
    {
      title: 'State',
      content: ['State is a built-in object that allows you to manage data within a component.',
'State changes trigger component re-renders.',
'Use the useState hook to declare and manage state variables.',
'const [count, setCount] = useState(0)'],
      path: '/uncontrolled'
    },
    {
      title: 'Props',
      content: ['Short for properties) in React are a mechanism for passing data from a parent component to a child component.', 
        'Props are immutable, meaning the child component cannot modify them directly, making them useful for passing static data or configurations.',
        'Read-Only: Props are passed from parent to child and cannot be changed by the receiving component.',
        'Unidirectional Data Flow: Data flows from parent to child only'],
      path: '/uncontrolled'
    }
  ]

  return (

    <div className='body'>
      <section className='section'>
        <div className='container'>
          <h1 className='h1'>Responsive Cards</h1>
          <FormValidation/>
          <FetchGet/>
          <div className='cards'>
            {
              cards.map((card, i) => (

                <div key={i} className='card'>
                  <h3>
                    {card.title}
                  </h3>
                  {/* <p>
                    {card.text}

                  </p> */}

                  <ul>
        {card.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
                  <Link to={card.path}>
                    <btn className='btn'>
                      Explore
                    </btn>
                  </Link>
                </div>
              ))
            }
          </div>
<LearnEqualizer/>
<TimerApp/>
<ShadowRoot />
        </div>
      </section>
    </div >
  );
}


export default Home;