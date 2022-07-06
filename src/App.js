import logo from './logo.svg';
import './App.css';
import { Button } from '@ashleynexvelsolutions/button'

function buttonFunction(){
	const data =  //In the real world, this will be the result of a graphql query.
	{
		"text": "Hey this is some test button text. The following text is part of the component: "
	}
	return(
	  {
		text: data.text,
	  backgroundColor: 'bg-test-two',
	  textColor: 'text-test-one'
	  }
	  
	)
  }
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-test-two">
      Hello world!
    </h1>
<Button changeable={buttonFunction()} />
    </div>
  );
}

export default App;
