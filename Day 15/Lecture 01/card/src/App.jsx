import './App.css'
import Body from './components/Body'
import Box from './components/Box'

const App = () => {
  return (
    <div className='app-shell'>
      <main className='card-page'>
        <Box user='Manidwiptam' age={21} />
      </main>
      <Body />
    </div>
  )
}

export default App