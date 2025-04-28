import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StepCard from './components/StepCard';
import { steps } from './data/steps';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="text-center py-8 bg-white shadow">
          <h1 className="text-3xl font-bold">איך לממש את שובר החופשה?</h1>
          <p className="text-gray-600 mt-2">מדריך בשלושה שלבים פשוטים</p>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:-mx-4">
            {steps.map((step) => (
              <div key={step.id} className="md:px-4">
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </main>
        <About />
        <Footer />
        {/* <div className="text-center mt-4">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>

        {/* Later we'll add the About & Footer sections here */}
      </div>
    </>
  )
}

export default App
